import { createServerClient } from "@/lib/supabase/server";
import { NormalizedProspect } from "@/lib/apify/mapper";

export interface ProspectToInsert {
  search_id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  website: string | null;
  google_rating: number | null;
  review_count: number | null;
}

export function deduplicateProspects(
  prospects: NormalizedProspect[]
): NormalizedProspect[] {
  const seen = new Set<string>();
  const unique: NormalizedProspect[] = [];

  for (const p of prospects) {
    const key = `${p.company_name.toLowerCase()}|${(p.address ?? "").toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(p);
  }

  return unique;
}

export async function saveProspects(
  searchId: string,
  prospects: NormalizedProspect[]
): Promise<number> {
  const supabase = createServerClient();

  const rows: ProspectToInsert[] = prospects.map((p) => ({
    search_id: searchId,
    company_name: p.company_name,
    address: p.address,
    phone: p.phone,
    website: p.website,
    google_rating: p.google_rating,
    review_count: p.review_count,
  }));

  const { error } = await supabase.from("prospects").insert(rows);

  if (error) {
    throw new Error(`Failed to save prospects: ${error.message}`);
  }

  return rows.length;
}
