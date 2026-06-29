---
name: database-ledger-design
description: Use when changing schema, migrations, wallets, ledger rows, provider records, subscriptions, event logs, audit logs, or data lifecycle rules.
---

# Database + Ledger Design Skill

## Mission
Protect account records, event history, audit evidence, and data integrity.

## Non-negotiable rules
- Account balances must be supported by immutable ledger entries.
- Provider events must be stored before processing.
- Use idempotency for external events and recurring grants.
- Sensitive admin and moderator actions require audit logs.
- Avoid destructive migrations unless there is a reviewed rollback plan.
- Add indexes for queue, billing, audit, and lookup paths.

## Required checks
- Is the write transactional?
- What row is the source of truth?
- Can the operation be replayed safely?
- What happens during retry or duplicate event delivery?
- Does RLS or service-role access need updating?

## Acceptance criteria
- Migration is additive or has a clear rollback.
- Ledger and account balance reconcile.
- External events cannot double-apply.
- Audit records exist for sensitive changes.
