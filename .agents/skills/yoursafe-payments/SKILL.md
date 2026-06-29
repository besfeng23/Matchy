---
name: yoursafe-payments
description: Use for Yoursafe provider integration, checkout sessions, recurring plan status, external event handlers, reconciliation, and provider abstractions.
---

# Yoursafe Integration

Rules:
- Keep Yoursafe behind a provider interface.
- Browser return pages are not final confirmation.
- Store raw external events first.
- Process each event only once.
- Entitlement changes go through the ledger service.

Done:
- Duplicate events are safe.
- Failed events do not grant access.
- Recurring events grant once per period.
- Manual corrections are recorded.
