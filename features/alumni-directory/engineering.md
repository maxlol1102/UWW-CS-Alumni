# Feature: Alumni Directory — Engineering Spec

**Owner:** CTO Architect
**Last Updated:** 2026-05-27
**Status:** Draft — auth model decision required before implementation

---

## Technical Approach

React SPA fetches alumni data from Supabase (PostgreSQL via PostgREST) using the Supabase JS SDK. All reads are public — no authentication required to browse the directory. Data is filtered client-side for simple queries; Supabase query filters used for search/filter to minimize data transfer.

---

## Frontend Impact

### New Files (expected)
```
src/
  components/
    AlumniCard.tsx
    AlumniDetail.tsx
    SearchBar.tsx
    FilterPanel.tsx
    MentorBadge.tsx
    Header.tsx
    Footer.tsx
    LoadingState.tsx
    EmptyState.tsx
  pages/
    DirectoryPage.tsx
  hooks/
    useAlumni.ts        # Supabase query hook
    useFilters.ts       # Filter state management
  lib/
    supabase.ts         # Supabase client init
  types/
    alumni.ts           # AlumniProfile TypeScript type
```

### State Management
- Local React state for search/filter values (no Redux/Zustand needed for MVP)
- `useAlumni` hook fetches profiles on mount and re-fetches when filters change
- Debounce text search input (300ms) before triggering query

---

## Backend Impact

No custom backend — Supabase serves as the API layer.

### Supabase Configuration Required
- Create `alumni_profiles` table (see architecture.md for schema)
- Enable Row Level Security (RLS)
- Add RLS policy: public SELECT for all rows
- [NEEDS DECISION] RLS policy for INSERT/UPDATE — admin only or self-service?

---

## API Impact

No custom API endpoints. All data access via Supabase JS SDK.

### Query Patterns

```typescript
// List all (default)
supabase.from('alumni_profiles').select('*').order('graduation_year', { ascending: false })

// Search by name
supabase.from('alumni_profiles')
  .select('*')
  .or(`first_name.ilike.%${term}%,last_name.ilike.%${term}%`)

// Filter by industry
supabase.from('alumni_profiles').select('*').eq('industry', industry)

// Filter by mentor
supabase.from('alumni_profiles').select('*').eq('willing_to_mentor', true)

// Combine filters (chained)
let query = supabase.from('alumni_profiles').select('*')
if (industry) query = query.eq('industry', industry)
if (mentorOnly) query = query.eq('willing_to_mentor', true)
if (year) query = query.eq('graduation_year', year)
```

---

## Database Impact

### Migration Required
- Create `alumni_profiles` table
- Enable RLS
- Add SELECT policy (public read)
- Add INSERT/UPDATE policy (pending auth model decision)

### Seed Data
- [NEEDS DECISION] Initial alumni data import method
- [ASSUMED] At least a handful of sample profiles for development

---

## Auth / Security Impact

### For MVP (Option A — admin only write)
- Frontend only uses `VITE_SUPABASE_ANON_KEY`
- Anon key is safe to expose — RLS restricts all writes
- No auth UI needed on the frontend for Phase 1
- Service role key used only in Supabase dashboard / scripts — never in frontend

### Environment Variables
```
VITE_SUPABASE_URL=https://[project-ref].supabase.co
VITE_SUPABASE_ANON_KEY=[anon-key]
```
Add to `.env.local` (gitignored) and Vercel project settings.

---

## Performance Considerations
- Paginate or limit query results if alumni count grows large (> 500 profiles)
- Consider Supabase full-text search (`textsearch`) if name search becomes slow
- Lazy load alumni detail data (only fetch full profile on card click)

---

## Risks

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| Auth model decision delayed | MEDIUM | Use hardcoded admin-only assumption and proceed; note as [ASSUMED] |
| Supabase RLS misconfiguration exposes private data | MEDIUM | Test with anon client before launch; review RLS policies in Supabase dashboard |
| Filter performance with large dataset | LOW | Add DB indexes on `industry`, `graduation_year`, `willing_to_mentor` |
| TypeScript type drift from DB schema | LOW | Use Supabase CLI to generate types from schema |

---

## Open Questions

1. [NEEDS DECISION] Auth model — must be resolved before writing Supabase client code
2. [NEEDS DECISION] Should industry values be freeform text or a controlled enum?
3. [NEEDS DECISION] Pagination or infinite scroll for large alumni lists?
4. [NEEDS DECISION] Profile detail: modal (no routing) or separate route (/alumni/[id])?
