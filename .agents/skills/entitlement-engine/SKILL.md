---
name: entitlement-engine
description: Use for account entitlement logic, plan state, pricing rules, and access checks.
---

# Entitlement Engine

Rules:
- Keep final entitlement decisions on the server.
- UI displays state but does not create final state.
- Record durable events for state changes.
- Replayed events must be safe.

Done:
- Access checks are tested.
- State changes are recorded.
- Duplicate events are safe.
