---
name: pandora-memory
description: Use when changing Pandora events, memory summaries, conversation continuity, profile persona memory, risk notes, or retention signals.
---

# Pandora Memory

Use before editing memory capture or summary logic.

Rules:
- Pandora may summarize, suggest, and flag context.
- Pandora must not bypass entitlement checks, consent checks, or human review.
- Store only useful event payloads; avoid unnecessary sensitive raw data.
- Separate namespaces for user behavior, conversation context, profile persona, risk, and retention.
- Memory summaries must be attributable and refreshable.

Checks:
- What event is emitted?
- Which namespace owns it?
- What minimal payload is needed?
- Where does the summary appear?
- What prevents stale or contradictory context?

Done:
- Events are emitted.
- Summaries load in the operator console.
- Failures are logged and retried safely.
