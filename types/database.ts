export interface Search {
  id: string;
  city: string;
  sector: string;
  created_at: string;
}

export interface Prospect {
  id: string;
  search_id: string;
  company_name: string;
  phone: string | null;
  website: string | null;
  google_rating: number | null;
  review_count: number | null;
  address: string | null;
  status: string;
  performance_score: number | null;
  seo_score: number | null;
  is_responsive: boolean | null;
  ai_pitch: string | null;
  ai_script_call: string | null;
  ai_email: string | null;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      searches: {
        Row: Search;
        Insert: Omit<Search, "id" | "created_at">;
        Update: Partial<Omit<Search, "id" | "created_at">>;
      };
      prospects: {
        Row: Prospect;
        Insert: Omit<Prospect, "id" | "created_at">;
        Update: Partial<Omit<Prospect, "id" | "created_at">>;
      };
    };
  };
}
