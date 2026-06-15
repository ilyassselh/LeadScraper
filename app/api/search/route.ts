import { NextResponse } from "next/server";
import { searchRequestSchema } from "@/lib/validators/search";
import { createApifyClient, getApifyConfig } from "@/lib/apify/client";
import { normalizeApifyItem, isValidProspect } from "@/lib/apify/mapper";
import { createSearch } from "@/lib/search/create-search";
import { deduplicateProspects, saveProspects } from "@/lib/search/save-prospects";

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const parsed = searchRequestSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Données de recherche invalides",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { city, sector, limit, withoutWebsiteOnly } = parsed.data;

    const searchId = await createSearch(city, sector);

    const apifyConfig = getApifyConfig();
    const apify = createApifyClient(apifyConfig);

    const apifyResults = await apify.runGoogleMapsSearch({
      searchStringsArray: [`${sector} ${city}`],
      maxCrawledPlaces: limit * 2,
    });

    let prospects = apifyResults
      .map(normalizeApifyItem)
      .filter(isValidProspect);

    if (withoutWebsiteOnly) {
      prospects = prospects.filter((p) => !p.website);
    }

    prospects = deduplicateProspects(prospects);
    prospects = prospects.slice(0, limit);

    const count = await saveProspects(searchId, prospects);

    return NextResponse.json({
      searchId,
      count,
      message: `${count} prospect${count > 1 ? "s" : ""} enregistré${count > 1 ? "s" : ""}.`,
    });
  } catch (err) {
    console.error("[POST /api/search]", err);

    if (err instanceof Error && err.message.includes("APIFY_TOKEN")) {
      return NextResponse.json(
        {
          error: "Configuration Apify manquante",
          details:
            "APIFY_TOKEN n'est pas configuré. Vérifiez votre fichier .env.local.",
        },
        { status: 500 }
      );
    }

    const message = err instanceof Error ? err.message : "Erreur inattendue";

    return NextResponse.json(
      {
        error: "La recherche a échoué",
        details: message,
      },
      { status: 500 }
    );
  }
}
