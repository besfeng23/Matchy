---
name: yoursafe-payments
description: Use when implementing Yoursafe provider integration, checkout sessions, subscription status, external event handlers, reconciliation, or provider abstractions.
---

# Yoursafe Integration Skill

## Mission
Keep the Yoursafe integration reliable, repeatable, auditable, and easy to replace if another provider is added later.

## Non-negotiable rules
- Yoursafe calls must live behind a provider interface.
- Browser return pages are not final confirmation.
- Store raw external events before processing them.
- Verify external event authenticity where available.
- Process each external event only once.
- Any account entitlement change must go through the ledger service.

## Required checks
- Is the external event stored?
- Is the event idempotent?
- Is status mapped to an internal enum?
- Does retrying the handler produce the same final state?
- Is there an audit trail for manual intervention?

## Acceptance criteria
- Duplicate external events are safe.
- Failed events do not grant access.
- Recurring plan events grant once per period.
- Manual corrections create ledger and audit entries.
