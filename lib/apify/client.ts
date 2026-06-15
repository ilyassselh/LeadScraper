import { ApifyGoogleMapsItem } from "./types";

export class ApifyError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = "ApifyError";
  }
}

interface ApifyClientConfig {
  token: string;
  actorId: string;
}

export function createApifyClient(config: ApifyClientConfig) {
  const { token, actorId } = config;

  async function runGoogleMapsSearch(input: {
    searchStringsArray: string[];
    maxCrawledPlaces: number;
  }): Promise<ApifyGoogleMapsItem[]> {
    const url = `https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9500);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...input,
          timeoutSecs: 60,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const text = await response.text().catch(() => "No details");
        throw new ApifyError(
          `Apify returned ${response.status}: ${text.slice(0, 200)}`
        );
      }

      const data = (await response.json()) as ApifyGoogleMapsItem[] | unknown;

      if (!Array.isArray(data)) {
        throw new ApifyError("Apify response is not an array of items");
      }

      return data;
    } catch (err) {
      clearTimeout(timeoutId);

      if (err instanceof ApifyError) {
        throw err;
      }

      if (err instanceof Error && err.name === "AbortError") {
        throw new ApifyError(
          "La recherche Apify a dépassé le délai imparti. Réduisez le nombre de prospects ou réessayez."
        );
      }

      throw new ApifyError(
        "Erreur réseau lors de l'appel à Apify",
        err
      );
    }
  }

  return { runGoogleMapsSearch };
}

export function getApifyConfig(): ApifyClientConfig {
  const token = process.env.APIFY_TOKEN;
  const actorId = process.env.APIFY_ACTOR_ID ?? "apify/google-maps-scraper";

  if (!token) {
    throw new ApifyError("APIFY_TOKEN is not configured");
  }

  return { token, actorId };
}
