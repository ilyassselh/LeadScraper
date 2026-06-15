import { createServerClient } from "@/lib/supabase/server";
import { Prospect, Search } from "@/types";

export interface SearchWithProspects {
  search: Search | null;
  prospects: Prospect[];
}

export async function getLatestSearchWithProspects(): Promise<SearchWithProspects> {
  const supabase = createServerClient();

  const { data: search, error: searchError } = await supabase
    .from("searches")
    .select("id, city, sector, created_at")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (searchError || !search) {
    return { search: null, prospects: [] };
  }

  const { data: prospects, error: prospectsError } = await supabase
    .from("prospects")
    .select("*")
    .eq("search_id", search.id)
    .order("created_at", { ascending: true });

  if (prospectsError) {
    console.error("[getLatestSearchWithProspects]", prospectsError);
    return { search, prospects: [] };
  }

  return {
    search: search as Search,
    prospects: (prospects as Prospect[]) ?? [],
  };
}

export async function getProspectByIdFromDb(
  id: string
): Promise<Prospect | null> {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("prospects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("[getProspectByIdFromDb]", error);
    return null;
  }

  return data as Prospect;
}
