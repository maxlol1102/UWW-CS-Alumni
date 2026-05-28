# Feature: Alumni Directory — Implementation Tasks

**Owner:** Full-Stack Engineer
**Last Updated:** 2026-05-27
**Status:** Planned — waiting for architecture sign-off

Each task must have a user-visible outcome before it is marked done.

---

## Pre-Implementation Gate

Before starting Task 1, confirm all of these are resolved:
- [ ] Auth model decided (CTO Architect)
- [ ] Supabase schema approved (CTO Architect)
- [ ] Supabase project created (CTO Architect)
- [ ] Design spec reviewed (Product Designer)
- [ ] `.env.local` configured with Supabase credentials

---

## Phase 0 — Project Scaffold

### Task 0.1 — Scaffold React + Vite project
- Command: `npm create vite@latest uww-cs-alumni -- --template react-ts`
- Done criteria: `npm run dev` starts a working dev server at localhost

### Task 0.2 — Install dependencies
- Install: `tailwindcss`, `@supabase/supabase-js`, `@supabase/auth-helpers-react`
- Configure Tailwind with UWW color tokens
- Done criteria: Tailwind classes apply in components, Supabase client can be imported

### Task 0.3 — Configure Supabase client
- Create `src/lib/supabase.ts`
- Read URL and anon key from `import.meta.env`
- Done criteria: `supabase.from('alumni_profiles').select('*')` returns data in browser console

### Task 0.4 — Define TypeScript types
- Create `src/types/alumni.ts` with `AlumniProfile` interface matching DB schema
- Done criteria: TypeScript compiles without errors

---

## Phase 1 — Core Directory

### Task 1.1 — Create Header component
- UWW logo + site title "UWW CS Alumni Network"
- User-visible outcome: Header visible on page with correct branding
- Done criteria: Logo renders, accessible alt text, responsive at all breakpoints

### Task 1.2 — Create Footer component
- UWW CS Department name + link to uww.edu
- User-visible outcome: Footer visible at bottom of page
- Done criteria: Link opens correctly, footer is accessible

### Task 1.3 — Fetch alumni profiles from Supabase
- Implement `useAlumni` hook
- Fetch all profiles ordered by graduation_year descending
- User-visible outcome: Profile data visible in browser console / React DevTools
- Done criteria: Data loads without error; loading and error states handled

### Task 1.4 — Build AlumniCard component
- Display: name, grad year, company, title, industry, location
- MentorBadge if `willing_to_mentor = true`
- LinkedIn icon if URL provided
- User-visible outcome: Card grid visible with real data on screen
- Done criteria: Cards render correctly; accessible; responsive

### Task 1.5 — Build alumni card grid layout
- Responsive grid: 1 col mobile / 2 col tablet / 3–4 col desktop
- User-visible outcome: Grid fills page with multiple alumni cards
- Done criteria: Layout correct at 375px, 768px, 1280px

### Task 1.6 — Build LoadingState and EmptyState components
- LoadingState: skeleton cards while Supabase fetches
- EmptyState: message + clear filters button when no results
- User-visible outcome: Loading skeleton visible on initial load; empty state visible with no results

---

## Phase 2 — Search and Filter

### Task 2.1 — Build SearchBar component
- Text input, debounced 300ms
- Filters results by first_name or last_name
- User-visible outcome: Typing a name filters the card grid in real time
- Done criteria: Search works; clear button clears input and restores full list

### Task 2.2 — Build FilterPanel component
- Dropdowns: Graduation Year, Industry
- Toggle: Willing to Mentor
- User-visible outcome: Selecting a filter narrows the alumni grid
- Done criteria: Each filter works independently and in combination

### Task 2.3 — Combine search and filters
- Search and filter state managed together in `useFilters` hook
- User-visible outcome: Search + multiple filters work simultaneously
- Done criteria: Combined query returns correct results from Supabase

### Task 2.4 — Show active filter chips and result count
- Active filters shown as removable chips
- Result count: "Showing X alumni"
- User-visible outcome: User can see what filters are active and remove them

---

## Phase 3 — Profile Detail

### Task 3.1 — Build AlumniDetail component
- Full profile view: all fields
- LinkedIn button + Contact/Mentor button
- User-visible outcome: Clicking a card opens full profile detail
- Done criteria: All fields display correctly; buttons work; keyboard accessible

### Task 3.2 — Profile detail open/close
- Modal or route (pending design decision)
- User-visible outcome: Detail view opens on click, closes on dismiss
- Done criteria: Focus trap in modal; ESC closes modal; focus returns to card

---

## Phase 4 — Polish

### Task 4.1 — Add UWW brand tokens to Tailwind config
- Purple, gold, white, gray tokens
- Done criteria: All components use brand colors from config (not hardcoded hex)

### Task 4.2 — Accessibility audit
- Keyboard nav, ARIA labels, contrast check
- Done criteria: All AlumniCards, filters, and detail view pass keyboard-only navigation

### Task 4.3 — Responsive smoke test
- Test at 375px, 768px, 1280px
- Done criteria: No layout breaks at any tested breakpoint

---

## Completed Tasks
*(None yet)*
