export interface AlumniProfile {
  id: string
  first_name: string
  last_name: string
  graduation_year: number
  degree: string | null
  current_company: string | null
  current_title: string | null
  industry: string | null
  location_city: string | null
  location_state: string | null
  linkedin_url: string | null
  willing_to_mentor: boolean
  mentor_topics: string[] | null
  bio: string | null
  email: string | null
  created_at: string
  updated_at: string
}
