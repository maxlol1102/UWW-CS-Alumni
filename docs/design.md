# Design Specification — UWW CS Alumni Network

**Owner:** Product Designer
**Last Updated:** 2026-05-27
**Status:** Draft — pending logo asset and brand guide confirmation

---

## Brand Strategy

This site represents the UWW Computer Science Department. The design must feel:
- **Professional** — trustworthy for alumni and employers
- **Academic** — connected to the university identity
- **Approachable** — welcoming for students exploring career options
- **Clean** — information-first, not decoration-first

---

## Color Palette

| Token | Value | Status |
|-------|-------|--------|
| Primary Purple | `#4B2580` | [ASSUMED — verify against UWW brand guide] |
| Gold / Accent | `#FFC629` | [ASSUMED — verify against UWW brand guide] |
| White | `#FFFFFF` | [CONFIRMED] |
| Light Gray (backgrounds) | `#F5F5F5` | [ASSUMED] |
| Dark Gray (body text) | `#1A1A1A` | [ASSUMED] |
| Border / Divider | `#E0E0E0` | [ASSUMED] |

Accessibility requirement: all text/background combinations must meet WCAG 2.1 AA contrast ratio (4.5:1 minimum for body text, 3:1 for large text).

---

## Typography

| Role | Font | Status |
|------|------|--------|
| Headings | [NEEDS DECISION — check UWW brand guide] | |
| Body | [NEEDS DECISION — check UWW brand guide] | |
| Fallback | Georgia, serif (headings) / system-ui, sans-serif (body) | [ASSUMED] |

---

## Logo Usage

- UWW official logo must appear in the site header [CONFIRMED by user]
- [NEEDS DECISION] Source of logo asset (PNG/SVG) and file location
- [NEEDS DECISION] Minimum clear space and sizing rules
- Logo must link to the UWW CS Department homepage or uww.edu [ASSUMED]

---

## UX Strategy

### Information Architecture

```
Home / Directory
  ├── Hero: What is this site? (3 sentences max)
  ├── Search + Filter bar
  ├── Alumni Profile Cards (grid)
  └── Footer (UWW branding, department link, contact)

Alumni Profile Detail (modal or page)
  ├── Name, title, company
  ├── Grad year, degree
  ├── Industry, location
  ├── LinkedIn link
  ├── Mentor badge (if willing)
  └── Contact/Inquiry button (if mentor)
```

### Key User Flows

**Flow 1 — Student finds a mentor**
1. Student lands on directory
2. Filters by "Willing to Mentor" = Yes
3. Browses cards
4. Clicks profile to see detail
5. Clicks contact button to reach mentor

**Flow 2 — Student explores career paths**
1. Student lands on directory
2. Filters by industry or graduation year
3. Browses alumni cards
4. Sees companies and roles
5. Clicks LinkedIn links to research further

**Flow 3 — Professor checks program outcomes**
1. Professor lands on directory
2. Searches or filters by industry
3. Scans visible data (companies, roles, years)
4. [Future] Exports or views aggregate stats

---

## Component Inventory (Initial)

| Component | Description | Status |
|-----------|-------------|--------|
| Header | UWW logo + site title + nav | Planned |
| SearchBar | Text input + filter dropdowns | Planned |
| FilterPanel | Year, industry, company, mentor toggle | Planned |
| AlumniCard | Profile card for directory grid | Planned |
| AlumniDetail | Expanded profile (modal or page) | Planned |
| MentorBadge | Visual indicator on mentor profiles | Planned |
| Footer | UWW branding, links | Planned |
| EmptyState | "No results" messaging | Planned |
| LoadingState | Skeleton or spinner while fetching | Planned |

---

## Responsive Rules

| Breakpoint | Layout |
|-----------|--------|
| Mobile (< 768px) | Single column card list |
| Tablet (768px–1023px) | 2-column card grid |
| Desktop (≥ 1024px) | 3–4 column card grid |

[NEEDS DECISION] Is mobile a P1 or P2 priority for MVP?

---

## Accessibility Requirements

- All interactive elements must be keyboard navigable
- Focus states must be visible (not relying on browser default only)
- Images (logo, avatars) must have descriptive alt text
- Color must not be the only indicator of meaning (e.g., mentor badge needs text + color)
- Screen reader testing: NVDA or VoiceOver minimum
- Minimum contrast: 4.5:1 for normal text, 3:1 for large text

---

## Open Questions

1. [NEEDS DECISION] Official UWW font — confirm from brand guide
2. [NEEDS DECISION] Logo asset source and format
3. [NEEDS DECISION] Does the alumni profile show a photo? If so, how is it sourced/uploaded?
4. [NEEDS DECISION] Does the mentor contact mechanism open an email client or a form?
5. [NEEDS DECISION] Should the site have a separate "About" or "How it Works" page?
