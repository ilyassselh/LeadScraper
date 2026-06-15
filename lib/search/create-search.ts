import { createServerClient } from "@/lib/supabase/server";

export async function createSearch(city: string, sector: string): Promise<string> {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("searches")
    .insert({ city, sector })
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(`Failed to create search: ${error?.message ?? "unknown"}`);
  }

  return data.id;
}
