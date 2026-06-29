---
name: moderator-operations
description: Use when changing message queues, claim/reply flows, operator tools, persona cards, escalation, notes, QA, or assignment logic.
---

# Moderator Operations

Use before editing queue or operator-console work.

Rules:
- Two operators cannot claim the same queue item.
- Every operator reply records actor id and profile context.
- Operators cannot edit account balances, provider records, pricing, or audit logs.
- Persona rules and disclosure notes must be visible before reply.
- Escalation and report paths must stay available.

Checks:
- Is the queue item locked safely?
- Is reply attribution stored?
- Are role checks server-side?
- Is the action audited?

Done:
- Claim/reply/escalate flows work.
- Concurrent claim test passes.
- Audit trail is complete.
