# Product Specification — UWW CS Alumni Network

**Owner:** Product Strategist
**Last Updated:** 2026-05-27
**Status:** Draft — pending open question resolution

---

## Business Goal

Build a centralized, publicly accessible alumni directory for the UWW Computer Science Department. The site will help students discover career outcomes from their program, connect with mentors, and give alumni a place to share their professional journey and give back.

---

## Target Users

### Primary Users

**CS Students**
- Want to know where UWW CS grads work
- Looking for mentors in their target industry
- Exploring career paths before graduating
- Seeking internship or job leads via alumni connections

**CS Alumni (2013–present)**
- Want to share their career story
- Willing or not-willing to mentor (their choice)
- Want to stay connected to UWW CS community

**CS Professors / Department**
- Track program outcomes (industries, companies, roles)
- Connect students with professional alumni
- Use data to support curriculum and career advising

---

## Problem Statement

There is no centralized, up-to-date record of where UWW CS graduates work, what roles they hold, or who is willing to mentor current students. Students graduate without visibility into the real career outcomes from their own program. Alumni have no shared space to stay connected or give back.

---

## MVP Scope [CONFIRMED]

1. **Alumni Directory** — browseable, searchable list of alumni profiles
2. **Alumni Profile Card** — name, grad year, company, title, industry, location, LinkedIn link, mentor badge
3. **Search and Filter** — filter by graduation year, industry, company name, mentorship availability
4. **Mentor Inquiry** — mechanism for students to reach out to mentors [NEEDS DECISION: email link, form, or both?]
5. **UWW Branding** — logo, purple/gold color scheme, department identity in header/footer

---

## Non-Goals (MVP)

- Alumni self-registration portal (Phase 2)
- Alumni editing their own profiles (Phase 2)
- Job board or internship listings (Phase 2)
- Messaging or direct chat (Phase 3)
- UWW SSO or Banner integration (future)
- Mobile app (future)
- Events or networking features (future)

---

## Success Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Alumni profiles at launch | [NEEDS DECISION] | |
| Monthly unique student visitors | [NEEDS DECISION] | |
| Mentor inquiry rate | [NEEDS DECISION] | |
| Site uptime | 99.9% | [ASSUMED] |

---

## Personas

### Persona 1 — Maya, Junior CS Student
- 20 years old, exploring career options
- Wants to know what companies hire UWW CS grads
- Would love to find a mentor in software engineering or data science
- Uses LinkedIn but doesn't know how to reach alumni cold

### Persona 2 — James, UWW CS Alumnus (2019)
- Software Engineer at a mid-size tech company
- Happy to mentor but doesn't know how to find students to help
- Would update his profile if it was easy
- LinkedIn-savvy

### Persona 3 — Dr. Chen, CS Department Professor
- Advises students on careers
- Wants data on where graduates end up by industry and role
- Would share the site with current students in class

---

## Open Questions

| Question | Owner | Priority |
|----------|-------|----------|
| Auth model: admin-only vs. alumni self-registration? | Product Strategist + CTO | HIGH |
| How is initial data collected? CSV? Google Form? | Product Strategist | HIGH |
| Is alumni email address public or admin-only? | Product Strategist | HIGH |
| Is this official UWW project or personal/student initiative? | Product Strategist | MEDIUM |
| What is the mentor inquiry mechanism? Email link? Contact form? | Product Strategist | MEDIUM |
| What are the specific success metrics? | Product Strategist | MEDIUM |

---

## Roadmap (Initial)

### Phase 1 — MVP (now)
- Alumni directory with search/filter
- Static admin data entry (admin inserts profiles)
- UWW branding

### Phase 2 — Self-Service
- Alumni self-registration and profile management
- Email verification

### Phase 3 — Engagement
- Mentor connection request flow
- Event announcements
- Alumni spotlight features

### Phase 4 — Integration
- UWW SSO
- Possible Banner/registrar integration for automated data
