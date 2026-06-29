---
name: entitlement-engine
description: Use for account entitlement logic, plan state, pricing rules, and access checks.
---

# Entitlement Engine

Use this skill before editing account entitlement logic.

Rules:
- Keep final decisions on the server.
- Keep a durable event record for state changes.
- Make retries safe.
- Do not let UI components change final account state directly.

Done:
- Access checks are tested.
- State changes are recorded.
- Duplicate events are safe.
