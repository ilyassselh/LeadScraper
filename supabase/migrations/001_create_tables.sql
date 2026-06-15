CREATE TABLE IF NOT EXISTS searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  city VARCHAR NOT NULL,
  sector VARCHAR NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prospects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  search_id UUID NOT NULL REFERENCES searches(id) ON DELETE CASCADE,
  company_name VARCHAR NOT NULL,
  phone VARCHAR,
  website VARCHAR,
  google_rating FLOAT,
  review_count INT,
  address VARCHAR,
  status VARCHAR DEFAULT 'Nouveau',
  performance_score INT,
  seo_score INT,
  is_responsive BOOLEAN,
  ai_pitch TEXT,
  ai_script_call TEXT,
  ai_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
