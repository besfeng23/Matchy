---
name: repo-execution-discipline
description: Use before commits, PRs, large refactors, roadmap work, dependency changes, or broad multi-file tasks.
---

# Repo Execution Discipline

Use before starting or finishing significant work.

Rules:
- Keep changes small and reviewable.
- Do not mix unrelated refactors with product behavior.
- Do not add new dependencies without a reason.
- Do not leave TODOs where required logic must exist.
- Report billing, security, compliance, and test impact for every serious change.

Checks:
- What is the smallest safe change?
- What files should not be touched?
- What tests or checks prove the change?
- What is the rollback path?
- Did the task expand beyond the request?

Done:
- Summary is clear.
- Validation evidence is listed.
- Risks are stated.
- Follow-ups are explicit.
