# Feature: Alumni Directory — Design Spec

**Owner:** Product Designer
**Last Updated:** 2026-05-27
**Status:** Draft — no wireframes yet

---

## User Flow

```
User arrives at site
  ↓
Sees hero section: "UWW CS Alumni Network" + brief description
  ↓
Sees search bar + filter controls
  ↓
Sees alumni card grid (default: all alumni, sorted by most recent grad year)
  ↓
User applies filter or types in search
  ↓
Grid updates to show matching profiles
  ↓
User clicks an alumni card
  ↓
Alumni detail view opens (modal or expanded card)
  ↓
If mentor: user sees "Contact" button → opens mailto or form
  ↓
User clicks LinkedIn → opens LinkedIn in new tab
```

---

## Screen States

### Default State
- Header: UWW logo (left) + site title "UWW CS Alumni Network" (center or right)
- Hero: 1–2 sentence description of the site
- Search bar + filter panel below hero
- Alumni card grid (3–4 columns on desktop)
- Footer: UWW CS Department link, contact info

### Filtered State
- Same layout
- Card grid updates to show only matching alumni
- Active filters shown as removable chips/tags
- Result count shown: "Showing 12 alumni"

### Empty State
- Search/filter returned no results
- Message: "No alumni match your filters. Try adjusting your search."
- Clear filters button

### Loading State
- Skeleton cards shown while data loads from Supabase

### Profile Detail (modal or expanded)
- Full profile: name, grad year, degree, company, title, industry, location
- LinkedIn button (if URL provided)
- Contact/Mentor button (if willing_to_mentor = true)
- Mentor topics list (if provided)
- Bio (if provided)

---

## Component Design Notes

### AlumniCard
- Shows: full name, grad year, company, title, industry, location (city/state)
- Mentor badge: purple pill labeled "Open to Mentor" if willing_to_mentor = true
- LinkedIn icon link (if URL provided)
- Hover state: subtle shadow elevation or border highlight
- Click: opens detail view

### SearchBar
- Single text input, placeholder: "Search by name or company..."
- Clear button (X) when text is entered
- Real-time filtering (debounced, ~300ms)

### FilterPanel
- Graduation Year: dropdown (2013–present)
- Industry: dropdown (dynamically populated from DB or predefined list)
- Willing to Mentor: toggle or checkbox
- Company: text search [NEEDS DECISION: dropdown vs. text input]
- "Clear All Filters" button

### MentorBadge
- Color: UWW Gold (#FFC629) background, dark text
- Text: "Open to Mentor"
- Must not use color alone — include label text

### Header
- UWW logo (left-aligned)
- Site title: "UWW CS Alumni Network"
- [NEEDS DECISION] Navigation links (e.g., About, Contact Department)

### Footer
- UWW CS Department name
- Link to uww.edu or CS department page
- [NEEDS DECISION] Copyright / data disclaimer text

---

## Responsive Behavior

| Breakpoint | Alumni Grid | Filter Panel |
|-----------|------------|-------------|
| Mobile < 768px | 1 column | Collapsible drawer |
| Tablet 768–1023px | 2 columns | Horizontal row |
| Desktop ≥ 1024px | 3–4 columns | Horizontal row |

---

## Accessibility Notes

- AlumniCard: must have a unique `aria-label` (e.g., "View profile for Jane Smith")
- MentorBadge: role="status" or visible text label (not color alone)
- FilterPanel: all dropdowns need `<label>` associations
- Modal/detail view: focus must trap inside modal when open, return to card on close
- LinkedIn links: `target="_blank"` must include `rel="noopener noreferrer"` and visually indicate "opens in new tab"

---

## Design Risks

| Risk | Mitigation |
|------|-----------|
| UWW logo asset not available as SVG | Request from UWW or CS department; fallback to text wordmark |
| Color contrast fails for gold on white | Test with Contrast Checker before implementing; adjust shade if needed |
| Filter panel gets cluttered on mobile | Use collapsible drawer pattern for mobile |
| Alumni card grid feels dense | Use generous padding and whitespace; limit fields shown on card |

---

## Open Questions

1. [NEEDS DECISION] Alumni profile photos — show or not? If yes, how sourced?
2. [NEEDS DECISION] Profile detail: modal overlay or separate page/route?
3. [NEEDS DECISION] Header navigation: just logo + title, or add nav links?
4. [NEEDS DECISION] "About this site" — standalone page or hero section only?
5. [NEEDS DECISION] UWW official font — confirm from brand guide
