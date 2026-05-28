# Architecture — UWW CS Alumni Network

**Owner:** CTO Architect
**Last Updated:** 2026-05-27
**Status:** Draft — auth model decision is blocking

---

## Tech Stack

| Layer | Technology | Version | Status |
|-------|-----------|---------|--------|
| Frontend framework | React | 18+ | [CONFIRMED] |
| Build tool | Vite | latest | [ASSUMED] |
| Language | TypeScript | 5+ | [ASSUMED] |
| Styling | Tailwind CSS | 3+ | [ASSUMED] |
| Database | Supabase (PostgreSQL) | latest | [CONFIRMED] |
| Auth | Supabase Auth | built-in | [ASSUMED] |
| Hosting | Vercel | — | [ASSUMED] |
| Testing (unit) | Vitest | latest | [ASSUMED] |
| Testing (E2E) | Playwright | latest | [ASSUMED] |

---

## Architecture Overview

```
Browser (React + Vite)
  │
  ├── Supabase JS Client
  │     ├── Auth (Supabase Auth)
  │     ├── Database queries (PostgREST)
  │     └── Storage (future: profile photos)
  │
Supabase (hosted PostgreSQL)
  ├── alumni_profiles table
  ├── Row Level Security policies
  └── (future) auth.users table for alumni self-registration

Vercel (hosting)
  ├── Static React build
  └── Environment variables (SUPABASE_URL, SUPABASE_ANON_KEY)
```

---

## Data Model

### Table: alumni_profiles

```sql
CREATE TABLE alumni_profiles (
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
  willing_to_mentor boolean DEFAULT false,
  mentor_topics   text[],
  bio             text,
  email           text,         -- [NEEDS DECISION] RLS visibility
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);
```

### RLS Policies (initial — subject to auth model decision)

```sql
-- Everyone can read profiles (public directory)
CREATE POLICY "Public read" ON alumni_profiles
  FOR SELECT USING (true);

-- [NEEDS DECISION] Insert/update: admin only, or authenticated alumni?
```

---

## Auth Model

**[NEEDS DECISION]** — This decision blocks all RLS policy finalization.

### Option A: Admin-only write (simplest for MVP)
- All reads are public (no login required to browse)
- Only admins (service role or Supabase dashboard) can insert/update/delete
- No user accounts for alumni in Phase 1
- **Pros:** Simple, fast to build, no auth UI needed
- **Cons:** Alumni cannot self-manage profiles

### Option B: Alumni self-registration (Phase 2 complexity now)
- Public read
- Alumni sign up with email, can create/edit their own profile
- Admin retains override capability
- **Pros:** Scalable, keeps data current
- **Cons:** More complex, requires email verification, profile claim logic

**Recommendation:** Start with Option A for MVP. Build Option B in Phase 2.

---

## API Surface (via Supabase PostgREST)

All client queries use the Supabase JS SDK. No custom REST API needed for MVP.

| Operation | Method | Notes |
|-----------|--------|-------|
| List all alumni | `supabase.from('alumni_profiles').select('*')` | Public |
| Search by name | `.ilike('last_name', '%term%')` | Public |
| Filter by industry | `.eq('industry', value)` | Public |
| Filter by year | `.eq('graduation_year', value)` | Public |
| Filter by mentor | `.eq('willing_to_mentor', true)` | Public |
| Insert profile | Service role only | Admin |
| Update profile | Service role only | Admin |

---

## Environment Variables

```
VITE_SUPABASE_URL=https://[project].supabase.co
VITE_SUPABASE_ANON_KEY=[anon key]
```

Never commit these to source control. Use `.env.local` for development, Vercel environment variables for production.

---

## Deployment

[ASSUMED] Vercel auto-deploy from `main` branch on GitHub.

```
GitHub push to main
  → Vercel build (npm run build)
  → Deploy to production URL
```

Local development:
```
npm run dev        # Vite dev server
npx supabase start # local Supabase (optional)
```

---

## Testing Strategy

| Type | Tool | Coverage Target |
|------|------|----------------|
| Unit | Vitest | Components, utilities |
| Integration | Vitest + Supabase test project | DB queries |
| E2E | Playwright | Core user flows |
| Accessibility | axe-core (Playwright plugin) | All pages |

---

## Security Checklist

- [ ] RLS enabled on all tables before going to production
- [ ] Anon key is safe to expose (Supabase design) — verify RLS is the guard
- [ ] Service role key NEVER in frontend code
- [ ] No PII exposed without explicit RLS policy decision
- [ ] Input validation on all form fields (prevent XSS)
- [ ] CORS configured on Supabase project

---

## Open Questions

1. [NEEDS DECISION] Auth model (Option A vs B — recommendation: A for MVP)
2. [NEEDS DECISION] Should alumni email be in a separate private table?
3. [NEEDS DECISION] Do we need a custom admin UI or use Supabase dashboard for data entry?
4. [NEEDS DECISION] Local Supabase dev environment or hosted dev project?
5. [NEEDS DECISION] CI/CD: GitHub Actions or Vercel-only?
