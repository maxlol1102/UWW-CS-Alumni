# UWW CS Alumni Network — Project Brain

## Project Summary

The University of Wisconsin–Whitewater CS Alumni Network is a full-scale web application that connects UWW Computer Science alumni (2013–present) with current students and faculty. It surfaces alumni career data, industry paths, and mentorship availability in a searchable, browseable directory backed by React and Supabase.

---

## Setup Mode

**Claude-only**
This project brain lives here in CLAUDE.md and in `.claude/`.
All agents read this file as their primary source of truth.

---

## Business Goal

Build a centralized, publicly accessible alumni directory for the UWW CS Department that strengthens career connections, supports mentorship, and gives students visibility into real career outcomes from their program.

---

## Target Users

| User | Primary Need |
|------|-------------|
| CS Students | Discover where alumni work, find mentors, explore career paths |
| CS Alumni | Share their career journey, offer mentorship, stay connected |
| CS Professors / Department | Track program outcomes, connect students with professionals |

---

## Problem Statement

There is no centralized, up-to-date record of where UWW CS graduates work, what roles they hold, or who is willing to mentor. Students lack visibility into career outcomes from their own program. Alumni have no shared space to stay connected or give back.

---

## Tech Stack

| Layer | Technology | Status |
|-------|-----------|--------|
| Frontend | React (Vite) | [CONFIRMED] |
| Styling | Tailwind CSS | [ASSUMED] |
| Language | TypeScript | [ASSUMED] |
| Database | Supabase (PostgreSQL) | [CONFIRMED] |
| Auth | Supabase Auth | [ASSUMED] |
| Hosting | Vercel | [ASSUMED] |
| Branding | UWW official logo + purple/gold palette | [CONFIRMED] |

---

## MVP Scope

- Alumni directory: browseable list of alumni profiles
- Profile data: name, graduation year, company, title, industry, location, LinkedIn, mentorship flag
- Search and filter: by name, year, industry, company, mentorship availability
- Mentor inquiry: simple contact mechanism for students to reach mentors
- UWW branding: logo, color scheme, department identity

## Non-Goals (MVP)

- Alumni self-registration portal (Phase 2)
- Job board or internship listings (Phase 2)
- Messaging or chat system (Phase 3)
- Integration with UWW's official systems or SSO (future)
- Mobile app (future)

---

## Success Metrics

- [NEEDS DECISION] Target number of alumni profiles at launch
- [NEEDS DECISION] Monthly active student visitors
- [NEEDS DECISION] Mentor connection rate (students who reach out vs. mentors available)
- [ASSUMED] Site is live and publicly accessible within agreed timeline

---

## Data Model (Initial)

### alumni_profiles table
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| first_name | text | required |
| last_name | text | required |
| graduation_year | integer | 2013–present |
| degree | text | e.g. BS Computer Science |
| current_company | text | |
| current_title | text | |
| industry | text | |
| location_city | text | |
| location_state | text | |
| linkedin_url | text | |
| willing_to_mentor | boolean | default false |
| mentor_topics | text[] | e.g. [Software Engineering, ML] |
| bio | text | optional |
| email | text | [NEEDS DECISION] public or private |
| created_at | timestamptz | auto |
| updated_at | timestamptz | auto |

---

## Open Questions

- [CONFIRMED] Authentication model: public read, admin-only write via Supabase dashboard
- [CONFIRMED] Project status: personal/student initiative (not official UWW)
- [NEEDS DECISION] How will initial alumni data be collected? CSV import? Google Form?
- [NEEDS DECISION] Is alumni email visible publicly or only to admins?
- [NEEDS DECISION] Domain name (uww-cs-alumni.vercel.app or custom domain?)

---

## Five-Agent Operating Model

Each agent reads CLAUDE.md before acting. Agents do not invent new requirements — they work within what is defined here or flag gaps as [NEEDS DECISION].

See `.claude/agents/` for each agent's full role definition.

1. **product-strategist** — owns goals, PRD, personas, acceptance criteria
2. **product-designer** — owns branding, UX, user flows, components
3. **cto-architect** — owns architecture, data model, API, security, testing strategy
4. **full-stack-engineer** — owns implementation, feature tasks, code, tests
5. **qa-release-engineer** — owns test plans, release readiness, changelog, rollback

---

## Confirmed Patterns

These are rules learned from actual implementation.
Promote a retrospective lesson here when it appears 2+ times or causes a significant failure.

*(None yet — project just initialized.)*

---

## Documentation Lead Mode

After every major product, design, architecture, development, QA, or adapter change — run the Documentation Lead Mode checklist.

See `.claude/checklists/documentation-lead-mode.md`.

---

## File Index

| File | Purpose |
|------|---------|
| CLAUDE.md | Permanent project brain |
| TRACKER.md | Build ledger and current state |
| RETROSPECTIVE.md | Append-only learning log |
| docs/product.md | Full product spec |
| docs/design.md | Design strategy and brand rules |
| docs/architecture.md | Architecture decisions |
| docs/decisions.md | Decision log |
| docs/changelog.md | Project-level changelog |
| features/alumni-directory/ | First feature packet |
| .claude/agents/ | Agent role definitions |
| .claude/checklists/ | Operational checklists |

---

## Branding Notes

- UWW Primary Purple: `#4B2580`
- UWW Gold: `#FFC629`
- White: `#FFFFFF`
- UWW logo must appear in the site header
- Typography should feel professional and academic
- [NEEDS DECISION] Exact logo file source and usage rights
