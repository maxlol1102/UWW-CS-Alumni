# Project Retrospective Log

Append-only.
One entry per feature or significant session.

Promotion rule:
Promote a lesson into CLAUDE.md (Confirmed Patterns) when it appears 2+ times or causes high-impact failure or confusion.

---

## 2026-05-27 — Feature Planning: alumni-directory scaffold

### What was built
- Full React + Vite + TypeScript + Tailwind project scaffold
- Supabase client configured (awaiting real credentials)
- All components: Header, Footer, AlumniCard, AlumniDetail, SearchBar, FilterPanel, MentorBadge, LoadingState, EmptyState
- Two hooks: useFilters (filter state) and useAlumni (Supabase query with 300ms debounce)
- DirectoryPage wires all components together
- Supabase migration SQL + seed data SQL ready to run
- Production build: 86 modules, 0 TypeScript errors, clean bundle

### What changed
- Project went from docs-only to a working React application
- Auth model confirmed: public read, admin-only write (Option A)
- Project status confirmed: personal/student initiative

### What broke / gotchas
- 5 moderate npm audit warnings in esbuild/vite dev server — dev-only, not a production risk
- UWW logo is a text placeholder in Header.tsx — real asset still needed

### Patterns confirmed
- Confirming auth model before Supabase client code prevents rework
- TypeScript strict mode from day one caught no issues (clean start pays off)

### Decisions made
- Auth model: Option A — public read, service-role-only write [CONFIRMED]
- Project status: personal/student initiative [CONFIRMED]
- AlumniDetail as modal overlay (no routing) for MVP simplicity

### Docs updated
- TRACKER.md, RETROSPECTIVE.md, docs/decisions.md, CLAUDE.md

### Tests / verification
- `npx tsc --noEmit` → 0 errors
- `npm run build` → success, 86 modules

### Promote to permanent rules?
- [ ] Not yet

### Next session should know
- Create a Supabase project, run the migration, run the seed SQL, drop real credentials into .env.local
- UWW logo placeholder is in Header.tsx — comment shows where to swap it

---

## 2026-05-27 — Project Kickstart

### What was built
- Initial project brain created (CLAUDE.md)
- Setup mode selected: Claude-only
- Five-agent workflow defined and installed
- Documentation Lead Mode checklist created
- Continuous Learning Loop installed (TRACKER.md + RETROSPECTIVE.md)
- All docs stubs created (product, design, architecture, decisions, changelog)
- First feature packet created: alumni-directory

### What changed
- Project moved from README idea to structured AI-native operating system
- All assumptions and open questions surfaced and labeled

### What broke / gotchas
- None yet — no application code exists

### Patterns confirmed
- Start with project brain before writing any code
- Label every assumption [ASSUMED] so it can be revisited cleanly
- Setup mode (Claude-only) determines where source of truth lives

### Decisions made
- Setup mode: Claude-only
- First feature: alumni-directory (browseable, searchable alumni profiles)
- Tech stack: React + Supabase (confirmed by user), Tailwind + TypeScript + Vercel (assumed)
- UWW branding: purple (#4B2580) + gold (#FFC629) + logo (asset source TBD)

### Docs updated
- CLAUDE.md (new)
- TRACKER.md (new)
- RETROSPECTIVE.md (new)
- docs/product.md (new)
- docs/design.md (new)
- docs/architecture.md (new)
- docs/decisions.md (new)
- docs/changelog.md (new)
- features/alumni-directory/* (new)

### Tests / verification
- No application code yet — nothing to test

### Promote to permanent rules?
- [ ] None yet — patterns need at least 2 occurrences before promotion

### Next session should know
- Open questions must be resolved before implementation starts
- Auth model decision is the most blocking architectural question
- Product Strategist should validate MVP scope first
- CTO Architect should define auth strategy and confirm data model second
- Product Designer should source UWW logo and define color/typography rules third
