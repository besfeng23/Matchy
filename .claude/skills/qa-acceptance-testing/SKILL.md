---
name: qa-acceptance-testing
description: Use when finishing a feature, changing tests, reviewing a PR, or validating billing, queue, email, memory, security, or UI behavior.
---

# QA + Acceptance Testing

Use before claiming work is complete.

Rules:
- UI existing is not enough.
- Test the backend rule that makes the UI true.
- Test retries, duplicates, invalid states, and permission failures.
- Add acceptance tests for billing, queue, provider events, memory events, email consent, and disclosures.
- If tests cannot run, explain exactly why and what manual checks were done.

Checks:
- What can break silently?
- What can duplicate?
- What can be accessed by the wrong role?
- What user-visible promise must be proven?

Done:
- Relevant tests are added or updated.
- Critical flows have acceptance criteria.
- Failure states are covered.
- Completion report lists test evidence.
