@AGENTS.md

## Claude Code project guidance

Claude Code reads this file at session start. Keep root instructions short and push repeatable procedures into `.claude/skills/<skill-name>/SKILL.md`.

### How to work in this repo

- Start with a short plan before multi-file changes.
- Use the relevant project skill before editing a risky domain.
- Prefer small, reviewable commits.
- Do not remove disclosure, audit, ledger, or consent controls to make a task easier.
- Run the narrowest meaningful validation before reporting completion.

### Mandatory skills by domain

- Billing or credits: `/credit-subscription-engine` and `/database-ledger-design`.
- Payments/webhooks: `/yoursafe-payments`.
- Chat queue/moderators: `/moderator-operations`.
- Memory/events/summaries: `/pandora-memory`.
- Email/deliverability: `/smtp-deliverability-warmup`.
- Auth/RLS/privacy: `/security-privacy-rls`.
- UI: `/ui-ux-conversion`.
- Final review: `/qa-acceptance-testing` and `/repo-execution-discipline`.
