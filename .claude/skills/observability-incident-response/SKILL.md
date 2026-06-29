---
name: observability-incident-response
description: Use when changing logs, metrics, dashboards, alerts, reconciliation, queue health, provider event health, email health, or incident handling.
---

# Observability + Incident Response

Use before editing monitoring or operational visibility.

Rules:
- Important state transitions must be logged with correlation ids where possible.
- Dashboards must show queue health, account ledger health, external event health, email health, and system errors.
- Alerts must exist for failed external events, ledger mismatch, queue backlog, email delivery problems, and elevated complaints.
- Runbooks must explain what to check first and how to recover safely.

Checks:
- What metric proves this is healthy?
- What log lets support trace it?
- What alert catches failure early?
- What dashboard should show this?
- What is the rollback path?

Done:
- Logs and metrics exist.
- Alert conditions are documented.
- Runbook notes are updated.
