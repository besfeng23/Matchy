---
name: database-ledger-design
description: Use for schema, migrations, account ledgers, provider event records, recurring grants, audit logs, and data lifecycle rules.
---

# Database + Ledger Design

Rules:
- Account balances must reconcile with ledger events.
- External events are stored before processing.
- Replayed events must be safe.
- Sensitive admin/operator actions require audit logs.
- Destructive migrations need rollback notes.

Done:
- Migration is reviewed.
- Ledger/state reconcile.
- Duplicate events are safe.
- Audit records exist.
