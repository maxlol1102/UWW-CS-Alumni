# Decision Log — UWW CS Alumni Network

Append-only. Each decision gets one entry with: date, options considered, rationale, and who decided.

---

## 2026-05-27 — Setup Mode: Claude-only

**Decision:** Use Claude-only setup mode.
**Options considered:**
- Claude-only: project brain in CLAUDE.md + .claude/
- Codex-only: project brain in AGENTS.md + .codex/
- Claude + Codex: shared brain in .ai-os/

**Rationale:** User specified Claude-only. Single-tool setup is simpler to maintain and avoids sync complexity. Can upgrade to Claude + Codex later if needed.

**Decided by:** User

---

## 2026-05-27 — Tech Stack: React + Supabase

**Decision:** Frontend in React (Vite), database via Supabase (PostgreSQL).
**Status:** [CONFIRMED by user]

**Remaining stack assumptions to confirm:**
- TypeScript: [ASSUMED]
- Tailwind CSS: [ASSUMED]
- Hosting: Vercel [ASSUMED]
- Testing: Vitest + Playwright [ASSUMED]

---

## 2026-05-27 — Auth Model: Option A — Admin-only write

**Decision:** Public read, admin-only write for MVP.
**Status:** [CONFIRMED]

All reads are public (no login required to browse). Alumni profiles are entered via the Supabase dashboard or CSV import. No auth UI is needed in Phase 1. Alumni self-registration is deferred to Phase 2.

RLS: `SELECT` open to everyone. `INSERT/UPDATE/DELETE` restricted to service role only.

**Decided by:** User

---

## 2026-05-27 — Project Status: Personal/student initiative

**Decision:** This is a personal/student project, not officially sponsored by UWW CS Department.
**Status:** [CONFIRMED]

**Implications:**
- UWW logo used under fair use / attribution — do not use for commercial purposes
- No FERPA obligations (alumni data only, voluntarily submitted)
- Hosted on Vercel free tier under personal domain
- No UWW IT approval required

**Decided by:** User

---

## [OPEN] Initial Data Entry Method

**Status:** [NEEDS DECISION]
**Options:**
- CSV import via Supabase dashboard (recommended)
- Google Form → manual import
- Direct Supabase dashboard row entry

---

## [OPEN] Hosting Domain

**Status:** [NEEDS DECISION — low priority]
- Vercel default: `uww-cs-alumni.vercel.app` [ASSUMED]
- Custom domain: possible later
