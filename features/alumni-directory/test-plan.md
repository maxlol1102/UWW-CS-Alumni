# Feature: Alumni Directory — Test Plan

**Owner:** QA Release Engineer
**Last Updated:** 2026-05-27
**Status:** Planned — no application code yet

---

## Unit Tests (Vitest)

### AlumniCard
- [ ] Renders name, grad year, company, title, industry, location
- [ ] Shows MentorBadge when `willing_to_mentor = true`
- [ ] Does not show MentorBadge when `willing_to_mentor = false`
- [ ] Shows LinkedIn link when `linkedin_url` is provided
- [ ] Does not show LinkedIn link when `linkedin_url` is null/empty
- [ ] Has correct `aria-label` attribute

### SearchBar
- [ ] Renders input with correct placeholder
- [ ] Clear button appears when input has text
- [ ] Clear button disappears when input is empty
- [ ] `onChange` fires with correct value

### FilterPanel
- [ ] Graduation Year dropdown renders correct options
- [ ] Industry dropdown renders correct options
- [ ] Mentor toggle renders correctly
- [ ] Each filter fires the correct callback on change

### useAlumni hook
- [ ] Returns loading state while fetching
- [ ] Returns data on success
- [ ] Returns error state on Supabase error
- [ ] Applies search term filter correctly
- [ ] Applies industry filter correctly
- [ ] Applies mentor filter correctly
- [ ] Applies graduation year filter correctly

---

## Integration Tests (Vitest + Supabase test project)

- [ ] `GET alumni_profiles` returns all profiles without auth
- [ ] Search by name returns matching profiles
- [ ] Filter by industry returns only matching industry
- [ ] Filter by `willing_to_mentor = true` returns only mentor profiles
- [ ] Filter by graduation_year returns correct year cohort
- [ ] Combined filters (industry + mentor + year) return correct intersection
- [ ] Empty result set returned correctly (no error) when filters match nothing
- [ ] INSERT without service role key is rejected by RLS (security test)

---

## E2E Tests (Playwright)

### Core flows
- [ ] Page loads and displays alumni grid with real data
- [ ] Search by last name narrows grid in real time
- [ ] Filtering by industry narrows grid correctly
- [ ] Filtering by "Willing to Mentor" shows only mentor-flagged profiles
- [ ] Clearing filters restores full alumni list
- [ ] Empty state message appears when filters produce no results
- [ ] Clicking an alumni card opens detail view
- [ ] Detail view shows all expected fields
- [ ] LinkedIn button opens correct URL in new tab
- [ ] Detail view closes correctly (modal dismiss or back navigation)
- [ ] Contact/mentor button triggers expected behavior

### Responsive flows (Playwright viewport override)
- [ ] Mobile (375×812): single column grid, filter drawer collapses
- [ ] Tablet (768×1024): 2-column grid, filters in horizontal row
- [ ] Desktop (1280×800): 3–4 column grid

---

## Accessibility Checks (axe-core via Playwright)

- [ ] No critical axe violations on directory page load
- [ ] No critical axe violations with filters applied
- [ ] No critical axe violations in alumni detail view
- [ ] Keyboard: Tab reaches all interactive elements
- [ ] Keyboard: Enter/Space activates alumni card
- [ ] Keyboard: ESC closes detail modal
- [ ] Keyboard: Focus returns to card after modal closes
- [ ] All images have descriptive alt text (including UWW logo)
- [ ] Color contrast: all text/background combinations pass WCAG 2.1 AA

---

## Security Checks

- [ ] Supabase anon key does not allow INSERT/UPDATE/DELETE on alumni_profiles
- [ ] No service role key present in frontend build artifacts
- [ ] `.env.local` is gitignored and not in repository
- [ ] LinkedIn URLs are validated before rendering (no `javascript:` protocol)
- [ ] No XSS vectors in rendered alumni data (Supabase data escaped by React)

---

## Release Gate

This feature is NOT ready for release until:
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] All E2E core flows pass
- [ ] No critical accessibility violations
- [ ] Security checks complete
- [ ] Product Strategist has verified all acceptance criteria from product.md
- [ ] Product Designer has reviewed visual output against design.md
- [ ] changelog.md updated
- [ ] docs/changelog.md updated
- [ ] TRACKER.md updated
