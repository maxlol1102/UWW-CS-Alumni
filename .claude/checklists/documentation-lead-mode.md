# Documentation Lead Mode Checklist

Run this checklist after every major product, design, architecture, development, QA, or adapter change.

This is not an agent. It is a required verification step.

---

## Trigger Conditions

Run after any of the following:
- A product requirement is added, changed, or removed
- A design decision is made or a screen spec is updated
- An architecture decision is made (data model, API, auth, deployment)
- A feature task is completed
- A bug is fixed
- A release is cut
- A [NEEDS DECISION] item is resolved

---

## Checklist

### 1. CLAUDE.md (Project Brain)
- [ ] Does CLAUDE.md reflect the current tech stack? (update if changed)
- [ ] Are new [CONFIRMED] decisions recorded and old [ASSUMED] labels updated?
- [ ] Are new [NEEDS DECISION] items added if gaps were found?
- [ ] Is the Confirmed Patterns section current?

### 2. TRACKER.md (Build Ledger)
- [ ] Is the Current Phase correct?
- [ ] Is the Active Feature correct?
- [ ] Are completed tasks moved to Completed?
- [ ] Are new blockers added to Known Blockers?
- [ ] Is the File Inventory up to date?
- [ ] Is Last Updated set to today?

### 3. Feature Packet (if a feature changed)
- [ ] features/[feature]/product.md — requirements and AC still accurate?
- [ ] features/[feature]/design.md — design spec matches what was built?
- [ ] features/[feature]/engineering.md — technical approach accurate?
- [ ] features/[feature]/tasks.md — completed tasks marked done?
- [ ] features/[feature]/test-plan.md — tests added for new behavior?
- [ ] features/[feature]/changelog.md — entry added for this change?

### 4. Docs
- [ ] docs/product.md — product spec current?
- [ ] docs/design.md — design decisions current?
- [ ] docs/architecture.md — architecture current?
- [ ] docs/decisions.md — decision logged with date, options, rationale?
- [ ] docs/changelog.md — project changelog updated?

### 5. RETROSPECTIVE.md (if session is ending)
- [ ] New entry added for this session
- [ ] Patterns worth promoting identified
- [ ] Next session context written

---

## Sign-Off

Documentation Lead Mode is complete when all applicable boxes are checked.
Do not begin a new feature or session without completing this checklist.
