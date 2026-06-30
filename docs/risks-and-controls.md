# Risks and Controls

This document identifies major risks in the Matchy alpha system and the controls required before launch. This is not legal advice. Final terms, disclosures, privacy policy, refunds, and jurisdiction-specific compliance should be reviewed by qualified counsel before production launch.

## 1. Risk register

| Risk | Why it matters | Required controls |
|---|---|---|
| Misrepresentation risk | If users believe they are directly chatting with a specific real woman while replies are operator-written, the platform creates deception, disputes, and reputation damage. | Clear disclosure at signup, profile, chat entry, and payment. Profile labels. Versioned acceptance. Operator rules forbidding hidden impersonation. |
| Chargeback risk | Users may dispute payments if they feel misled about what credits/subscriptions purchased. | Payment-screen disclosure, receipts, ledger, webhook audit, refund workflow, no-outcome guarantee. |
| Payment provider shutdown risk | Payment processors can terminate accounts if the model appears deceptive or dispute-heavy. | Transparent terms, disclosed model, refund policy, audit logs, reconciliation, no fake romance guarantees. |
| User trust risk | Hidden staff replies or unclear profile types destroy trust. | Profile badges, chat entry disclosure, system disclosure message, support/refund path. |
| Operator misconduct risk | Operators may promise meetings, manipulate users, request money, or violate safety rules. | Role-based console, mandatory audit logs, forbidden-action policy, escalation, moderator review, operator monitoring. |
| Data privacy risk | The system handles messages, payment events, identity/account records, and behavioral data. | Data minimization, RLS/server-side access, consent gates, retention limits, no secrets in logs, access audits. |
| Memory/privacy risk | Pandora memory could store too much sensitive data or raw conversations without consent. | Consent/purpose gate, server-only token, memory allowlist, sensitive-data denylist, memory_links audit, failure isolation. |
| SMTP/deliverability risk | Reckless email sending or fake warm-up can cause spam classification and shutdown. | Transactional baseline, SPF/DKIM/DMARC, bounce/suppression handling, marketing consent, no fake engagement warm-up. |
| Refund/dispute risk | Without records, the team cannot resolve complaints fairly. | Ledger entries, message timeline, disclosure logs, webhook events, refund review states, admin/finance notes. |
| Role escalation risk | Staff or compromised accounts could access data or money controls. | Least privilege, admin/finance/operator separation, server-side role gates, RLS, audited role changes. |
| Client-side security risk | Frontend-only checks can be bypassed. | Server guards, RLS, API authorization, denied-access tests. |
| Ledger integrity risk | Editing balances directly causes reconciliation failure and fraud risk. | Append-only ledger, reversal entries, idempotency keys, finance-only adjustment workflow. |
| Webhook replay risk | Payment webhooks may retry/replay and double-credit users. | Signature verification, idempotency, raw event storage, process-once semantics. |
| Underage/safety risk | Chat platforms can attract illegal or unsafe content. | Age policy, no minor sexual content, moderation flags, escalation, profile review. |
| Profile authorization risk | Real profile owners may not have authorized a profile or delegated support. | Authorization records, publication gate, ownership audit, suspension workflow. |

## 2. Control measures

### Disclosure controls

Required controls:

- canonical disclosure sentence;
- versioned disclosure text;
- disclosure at signup;
- disclosure on profile cards where applicable;
- disclosure on profile detail pages;
- disclosure before first message;
- disclosure before payment;
- logged acceptance;
- re-acceptance after material disclosure changes.

Control objective: users must not be able to honestly say the platform hid operator assistance, fictional/demo profiles, or the limits of what credits/subscriptions purchase.

### Audit log controls

Required logs:

- disclosure shown/accepted;
- profile view;
- chat start;
- message send;
- message queued;
- operator claim/release;
- operator reply;
- escalation;
- credit debit/reversal;
- payment webhook;
- subscription lifecycle;
- refund review;
- role/admin/finance action.

Control objective: every sensitive action must have a reviewable timeline for disputes, compliance review, or internal investigation.

### Role-based access controls

Required roles:

- customer/member;
- profile owner/creator;
- operator;
- senior moderator;
- admin;
- finance admin;
- system/service role.

Required enforcement:

- server-side authorization helpers;
- RLS on sensitive tables;
- no client-side-only gates;
- least privilege by default;
- finance and moderation separated;
- role changes audited.

### RLS / server-side enforcement

Required:

- users read only their own account, conversations, payment/ledger history;
- operators read assigned conversations or claimable queue based on role;
- admins access admin views;
- finance admins access payment/ledger views;
- service role handles webhooks/jobs;
- all mutations verified server-side.

### Ledger controls

Required:

- append-only credit ledger;
- no direct balance edits;
- reversal entries for corrections/refunds;
- idempotent debit/credit functions;
- payment webhook idempotency;
- manual finance adjustments require reason;
- every ledger-impacting action audited.

### Operator controls

Required:

- operator policy visible in console;
- operator replies stored with internal operator ID;
- customer-facing label consistent with disclosure;
- forbidden actions documented;
- escalation required for risky situations;
- senior moderator review for flagged conversations;
- operator assignment logs.

### Escalation workflow controls

Escalation reasons must include:

- harassment/threats;
- self-harm/harm threats;
- underage content risk;
- off-platform payment request;
- chargeback/refund risk;
- operator uncertainty;
- privacy/safety concern;
- suspected fraud/scam;
- profile authorization concern.

### Refund review controls

Refund review must track:

- reason category;
- related payment intent;
- related ledger entries;
- related conversation/profile;
- reviewer;
- decision;
- reversal/refund entries where approved;
- customer communication record.

### Consent and data minimization controls

Required:

- disclosure consent before messaging;
- marketing consent separate from transactional notices;
- memory write consent/purpose check;
- sensitive-data denylist;
- no raw secrets in logs;
- no unnecessary raw payment data stored;
- limited internal notes.

### Secret handling controls

Required:

- `.env.example` only contains placeholders;
- service role keys server-only;
- SMTP password server-only;
- Yoursafe keys server-only;
- Pandora token server-only;
- no secrets in client bundle;
- no secrets in logs, screenshots, or docs.

### Testing controls

Minimum checks:

- anonymous protected route denied;
- user cannot access operator/admin routes;
- operator cannot access unassigned conversation unless allowed;
- user cannot message without disclosure acceptance;
- profile cannot publish without disclosure mode;
- credit debit does not double-charge on retry;
- webhook invalid signature rejected;
- webhook idempotency prevents duplicate credits;
- memory write blocked without consent;
- email suppressed when recipient is blocked/suppressed.

## 3. Red lines

### Product red lines

Never build:

- hidden operator impersonation;
- fake direct dating promises;
- fake guaranteed romance/sex/marriage/meeting;
- fake exclusivity;
- fake emergency stories to force spending;
- hidden fictional profiles presented as real direct access;
- denial of operator assistance on assisted profiles;
- manipulative jealousy/fear scripts to force credit purchases.

### Payment red lines

Never build:

- payment logic without append-only ledger;
- direct balance edits without adjustment/reversal entries;
- webhook processing without signature verification;
- webhook processing without idempotency;
- credit sales without clear payment meaning;
- hidden refund rules;
- charging for blocked undelivered messages without a defined policy.

### Security red lines

Never build:

- client-side-only permission enforcement;
- exposed service role keys;
- exposed Yoursafe keys;
- exposed SMTP credentials;
- exposed Pandora token;
- default operator access to all conversations;
- admin/finance actions without audit logs;
- audit deletion to cover mistakes.

### Email / SMTP red lines

Never build:

- spam behavior;
- fake engagement warm-up;
- purchased recipient lists;
- marketing without consent;
- repeated sends to bounced/suppressed addresses;
- SMTP password logging;
- sensitive secret delivery through email.

### Memory / AI red lines

Never build:

- memory without consent/purpose gates;
- raw payment/bank data to memory;
- secrets/tokens to memory;
- full sensitive conversations without policy approval;
- memory-based manipulation to sell credits;
- exposing memory context to unauthorized operators.

### Operator red lines

Never allow operators to:

- ask for off-platform money;
- make false claims about being a real profile owner;
- promise off-platform meetings or sexual access;
- threaten, shame, or coerce users;
- escalate romantic pressure to sell credits;
- disclose private staff identity;
- delete or alter their own history.

## 4. Minimum launch controls

The alpha cannot launch publicly unless:

1. Disclosure text exists and is versioned.
2. Users cannot message without accepting disclosure.
3. Profiles cannot publish without profile type and disclosure metadata.
4. Operator-assisted profiles are labeled.
5. Operator replies are internally traceable.
6. Credits/subscriptions use append-only ledger logic.
7. Yoursafe webhook handling is idempotent and signature-verified or safely stubbed until real docs exist.
8. Admin, operator, and finance roles are separated.
9. RLS/server-side access control exists.
10. No secrets are committed or exposed.
11. SMTP is transactional and consent-aware.
12. Pandora memory writes are server-only and consent-gated.
13. Smoke tests or documented manual checks exist.
14. A go/no-go report exists.

## 5. Review cadence

Before every major sprint merge, review this document against the changed code. Any feature that touches billing, messaging, operator workflow, identity, email, memory, moderation, or admin permissions must explicitly state its security, privacy, billing, and disclosure impact.