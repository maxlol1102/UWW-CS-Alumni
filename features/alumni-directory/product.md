# Feature: Alumni Directory — Product Spec

**Owner:** Product Strategist
**Last Updated:** 2026-05-27
**Status:** Planned — pending open question resolution

---

## Business Goal

Give students, professors, and the public a clear, searchable view of where UWW CS alumni (2013–present) work, what roles they hold, and who is willing to mentor — without requiring any login.

---

## User Stories

**As a CS student,** I want to browse alumni by industry and graduation year so I can understand the career paths available to UWW CS grads.

**As a CS student,** I want to filter alumni by "willing to mentor" so I can find someone to reach out to for career advice.

**As a CS alumnus,** I want my profile card to appear in the directory so current students can find and contact me.

**As a CS professor,** I want to see where alumni work by industry and year so I can advise students with real data.

---

## Requirements

| # | Requirement | Status |
|---|------------|--------|
| R1 | Display alumni profiles in a browseable card grid | [CONFIRMED] |
| R2 | Show: name, graduation year, company, title, industry, location, mentor flag | [CONFIRMED] |
| R3 | Search by alumni name | [CONFIRMED] |
| R4 | Filter by graduation year | [CONFIRMED] |
| R5 | Filter by industry | [CONFIRMED] |
| R6 | Filter by willing-to-mentor | [CONFIRMED] |
| R7 | Filter by company name | [CONFIRMED] |
| R8 | Each profile links to alumni LinkedIn (if provided) | [CONFIRMED] |
| R9 | Mentor profiles include a contact mechanism | [NEEDS DECISION — email link or form?] |
| R10 | UWW logo and branding visible in header | [CONFIRMED] |
| R11 | Empty state shown when no results match filters | [CONFIRMED] |
| R12 | Loading state shown while data fetches | [CONFIRMED] |

---

## Acceptance Criteria

- [ ] Directory loads and displays at least 1 profile without error
- [ ] Search by last name returns matching profiles in < 500ms
- [ ] Filtering by industry correctly narrows the card list
- [ ] Filtering by "willing to mentor" shows only mentor-flagged profiles
- [ ] Each LinkedIn URL opens correctly in a new tab
- [ ] UWW logo is visible and correctly sized in the header
- [ ] Page is responsive at 375px, 768px, and 1280px widths
- [ ] All interactive elements are keyboard navigable
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Empty state message appears when filters produce no results

---

## Out of Scope

- Alumni creating or editing their own profiles (Phase 2)
- Alumni photos (Phase 2)
- Aggregate statistics or charts (Phase 3)
- Export or download of alumni data
- Private or login-gated data

---

## Open Questions

| Question | Owner | Priority |
|----------|-------|----------|
| Mentor contact: email link or form? | Product Strategist | HIGH |
| How many alumni profiles will be in the system at launch? | Product Strategist | MEDIUM |
| Should filter dropdowns be populated dynamically from DB or hardcoded? | CTO Architect | MEDIUM |
| Should company name filter be a text search or a dropdown? | Product Designer | LOW |
