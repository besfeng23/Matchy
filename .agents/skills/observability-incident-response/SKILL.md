---
name: observability-incident-response
description: Use for logs, metrics, dashboards, alerts, reconciliation, queue health, external event health, email health, or incident handling.
---

# Observability + Incident Response

Rules:
- Important state transitions need logs and correlation ids where possible.
- Dashboards must show queue, ledger, external event, email, and system health.
- Alerts must catch event failures, mismatches, queue backlog, and delivery problems.
- Runbooks must explain first checks and safe recovery.

Done:
- Logs and metrics exist.
- Alert conditions are documented.
- Runbook notes are updated.
