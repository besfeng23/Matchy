---
name: email-deliverability
description: Use when changing email jobs, templates, sending domains, consent, suppression, delivery events, provider health, or send limits.
---

# Email Deliverability

Use before editing email sending logic.

Rules:
- Separate transactional and campaign streams.
- Check consent and suppression before campaign sends.
- Delivery failures update suppression and health metrics.
- Send limits must decrease or pause on bad signals.
- Transactional mail has priority over campaign jobs.

Checks:
- Which stream sends this email?
- What consent is required?
- What happens on delivery failure?
- Which domain or pool is used?
- Are daily and hourly limits enforced?

Done:
- Send path records email events.
- Suppression works.
- Send limits are enforced.
