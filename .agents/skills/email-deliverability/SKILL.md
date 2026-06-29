---
name: email-deliverability
description: Use for email jobs, templates, sending domains, consent, suppression, delivery events, provider health, or send limits.
---

# Email Deliverability

Rules:
- Separate transactional and campaign streams.
- Check consent and suppression before campaign sends.
- Delivery failures update suppression and health metrics.
- Send limits decrease or pause on bad signals.
- Transactional mail has priority.

Done:
- Send path records email events.
- Suppression works.
- Send limits are enforced.
