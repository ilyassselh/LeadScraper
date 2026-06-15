export interface Prospect {
  id: string;
  search_id: string;
  company_name: string;
  phone: string | null;
  website: string | null;
  google_rating: number | null;
  review_count: number | null;
  address: string | null;
  status: "Nouveau" | "Appelé" | "Pas intéressé";
  performance_score: number | null;
  seo_score: number | null;
  is_responsive: boolean | null;
  ai_pitch: string | null;
  ai_script_call: string | null;
  ai_email: string | null;
  created_at: string;
}

export interface Search {
  id: string;
  city: string;
  sector: string;
  created_at: string;
}
