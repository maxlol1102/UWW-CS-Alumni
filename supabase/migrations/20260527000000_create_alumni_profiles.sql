-- Migration: create alumni_profiles table
-- Auth model: public SELECT, service-role-only INSERT/UPDATE/DELETE

CREATE TABLE IF NOT EXISTS public.alumni_profiles (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name      text NOT NULL,
  last_name       text NOT NULL,
  graduation_year integer NOT NULL CHECK (graduation_year >= 2013),
  degree          text,
  current_company text,
  current_title   text,
  industry        text,
  location_city   text,
  location_state  text,
  linkedin_url    text,
  willing_to_mentor boolean NOT NULL DEFAULT false,
  mentor_topics   text[],
  bio             text,
  email           text,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- Indexes for common filter patterns
CREATE INDEX IF NOT EXISTS idx_alumni_graduation_year
  ON public.alumni_profiles (graduation_year DESC);

CREATE INDEX IF NOT EXISTS idx_alumni_industry
  ON public.alumni_profiles (industry);

CREATE INDEX IF NOT EXISTS idx_alumni_mentor
  ON public.alumni_profiles (willing_to_mentor)
  WHERE willing_to_mentor = true;

CREATE INDEX IF NOT EXISTS idx_alumni_name
  ON public.alumni_profiles (last_name, first_name);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER alumni_profiles_updated_at
  BEFORE UPDATE ON public.alumni_profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Enable Row Level Security
ALTER TABLE public.alumni_profiles ENABLE ROW LEVEL SECURITY;

-- Anyone can read all profiles (public directory)
CREATE POLICY "public_read_alumni"
  ON public.alumni_profiles
  FOR SELECT
  USING (true);

-- No INSERT/UPDATE/DELETE policies for anon or authenticated users.
-- All writes go through the Supabase dashboard using the service role key.
