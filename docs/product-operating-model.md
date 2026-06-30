# Product Operating Model

## 1. Product description

Matchy is a disclosed operator-assisted social chat platform with subscription and credit billing. Members can browse published profiles, accept clear disclosures, start conversations, purchase credits or subscriptions, and communicate inside a controlled platform messaging environment.

Depending on the profile type, replies may come from a real profile owner, a creator-authorized delegated support team, a disclosed operator-assisted entertainment profile, or a fictional/demo profile. The product must preserve that truth in the data model, UI, billing copy, audit logs, and operator workflow.

The platform is built around transparency, role separation, auditability, payment integrity, moderation, consent, and dispute readiness.

## 2. What the platform is not

Matchy is not a hidden impersonation system. It must never be designed to make users believe they are privately messaging a specific real woman when replies are actually written by undisclosed staff.

The platform does not guarantee romance, sexual access, dating success, real-world meetings, direct private access, exclusive attention, emotional commitment, marriage, travel, or off-platform contact.

The system must not create fake promises, fake emergencies, manipulation scripts, coercive credit spending, or deceptive urgency.

## 3. Canonical disclosure sentence

**Some profiles and conversations on this platform may be operator-assisted, moderated, fictional, or managed on behalf of a profile owner; credits and subscriptions pay for platform chat and entertainment access, not guaranteed romance, meetings, direct access, or any relationship outcome.**

This sentence is the minimum required disclosure. It must not be softened, hidden, or buried only inside Terms.

## 4. User-facing disclosure model

### Signup

Users must see and actively accept a versioned disclosure before account use:

> Some profiles and conversations on this platform may be operator-assisted, moderated, fictional, or managed on behalf of a profile owner. By creating an account, you understand that the platform provides chat, entertainment, and communication services only. Credits or subscriptions do not guarantee romance, meetings, direct access, exclusivity, off-platform contact, or any relationship outcome.

Log the user ID, disclosure version, timestamp, acceptance status, source screen, actor type, IP/device metadata where appropriate, and whether re-acceptance is required.

### Profile cards

Profile cards must show the profile interaction type. Assisted, entertainment, and fictional/demo profiles must display visible badges such as:

- `Operator-assisted / entertainment profile`
- `Managed profile`
- `Creator-owned with inbox support`
- `Fictional/demo profile`

### Profile detail pages

Profile detail pages must show profile-mode disclosure before the message button.

For operator-assisted profiles:

> This profile may be supported by trained platform operators. Replies may be assisted, moderated, or managed according to platform rules.

For fictional/demo profiles:

> This is a fictional or demo profile for entertainment, testing, or demonstration purposes. It does not represent a private direct conversation with a real person.

For delegated support profiles:

> This profile is connected to a creator or profile owner, but inbox responses may be assisted or managed by authorized support operators.

### Chat entry

Before the first message in a conversation:

> Before you message: this conversation may be operator-assisted, moderated, fictional, or managed on behalf of a profile owner. You are paying for platform chat/service access, not guaranteed romance, meetings, direct access, exclusivity, or off-platform contact.

The user must actively confirm before the first message.

### Payment screen

Before purchase:

> Credits and subscriptions pay for platform chat, entertainment, and service access. They do not guarantee romance, real-world meetings, direct access to any specific person, off-platform communication, exclusivity, sexual content, or any relationship outcome.

The checkout flow must log the disclosure version shown during checkout.

### Terms and policies

Terms must explain profile types, operator assistance, delegated inbox support, fictional/demo profiles, payment meaning, no outcome guarantee, refunds/disputes, moderation, account restrictions, data handling, and audit logs.

## 5. Roles

### Customer / member

Can create an account, accept disclosures, browse published profiles, start eligible conversations, send messages, buy credits or subscriptions, view own balance/history, request support, and manage preferences.

Cannot access operator/admin queues, view internal notes, edit balances, bypass disclosures, view other users' conversations, or force direct contact with a profile owner.

### Profile owner / creator

Can own or authorize a profile, provide profile content, authorize delegated inbox support, review allowed high-level analytics, and revoke authorization under defined rules.

Cannot bypass safety rules, request undisclosed impersonation, access private customer data outside policy, or modify financial records.

### Operator

Can view assigned/claimable conversations, reply within disclosed platform context, use approved context notes, use approved tone guidelines, escalate risk, mark conversations for refund/review, leave internal notes, and release conversations if allowed.

Cannot hide operator assistance, claim to be a real person without authorization, ask for off-platform money, promise romance/sex/marriage/meetings/travel/exclusivity, manipulate users into spending credits, access unauthorized conversations, or modify money/roles.

### Senior moderator

Can review escalations, assign/reassign operators, block conversations, recommend refunds/reversals, review operator misconduct, approve/reject flagged replies, and suspend conversations/profiles pending admin review.

Cannot mutate financial ledger unless separately granted finance role, delete audit logs, or override disclosure requirements.

### Admin

Can manage users, roles, operators, profiles, disclosures, policy settings, moderation settings, and admin dashboards. Can publish/unpublish profiles and view audit logs.

Cannot directly edit historical ledger rows, delete audit history, expose secrets, or bypass required disclosure acceptance.

### Finance admin

Can view payment intents, webhook events, ledger entries, reconciliation states, and perform documented adjustments through reversal/adjustment entries with reasons.

Cannot delete/mutate historical ledger entries or access unnecessary private message content unless needed for dispute review under policy.

### System / service role

Can process payment webhooks, run jobs, write audit logs, send transactional emails, and write approved memory events. Must use server-only credentials, enforce idempotency, and never expose secrets.

## 6. Profile types

### Real creator-owned profile

Represents a real person/creator who directly controls or participates in the conversation. Requires verified authorization, owner record, publication approval, disclosure of direct/assisted mode, and audit trail.

### Creator-owned profile with delegated inbox support

A real profile owner authorizes operators to help manage replies. Requires owner authorization, visible delegated-support disclosure, internal operator traceability, and audit logs.

### Operator-assisted entertainment profile

A chat/entertainment profile where trained operators may handle replies. Requires visible operator-assisted disclosure, no claim of private direct access, no fake relationship/meeting promises, and moderation controls.

### Fictional / demo profile

Does not represent a real person. Must be clearly labeled fictional/demo. Suitable only for demos, testing, QA, or disclosed entertainment.

### Suspended / unpublished profile

Removed from public view due to missing disclosure, missing authorization, review, policy violation, or admin action. Cannot receive new conversations.

## 7. Payment meaning

Credits and subscriptions may pay for:

- platform access;
- message delivery;
- chat interaction;
- entertainment/service access;
- profile browsing where applicable;
- premium filters/features;
- additional message volume;
- operator-assisted engagement where disclosed;
- subscription allowances.

Payments do not guarantee:

- romance;
- relationship;
- meeting;
- direct access to a specific real woman;
- exclusive attention;
- off-platform communication;
- sexual content;
- sexual access;
- marriage;
- travel;
- emotional commitment;
- immediate replies;
- any romantic, sexual, or relationship outcome.

Every credit movement must be represented by append-only ledger entries. Subscription state must be tracked separately from one-time credits.

## 8. Operator rules

Operators are allowed to:

- reply within disclosed platform context;
- use approved profile/context notes;
- use approved tone guidelines;
- ask ordinary follow-up questions;
- escalate unsafe or abusive conversations;
- mark conversations for refund/review;
- leave internal notes;
- request moderator review.

Operators are forbidden from:

- undisclosed impersonation;
- denying operator assistance on assisted profiles;
- claiming to be a specific real person if unauthorized;
- fake promises of love, sex, marriage, meetings, travel, or exclusivity;
- fake emergencies;
- pressuring users to buy credits through guilt, fear, sexual pressure, jealousy, or emotional manipulation;
- asking for off-platform money;
- requesting passwords, OTPs, private keys, bank credentials, or other sensitive credentials;
- sexual content involving minors;
- harassment, hate, doxxing, stalking, threats, or blackmail;
- encouraging users to bypass payment or safety systems;
- disclosing private operator identity to customers;
- accessing unauthorized conversations;
- altering audit history;
- changing financial balances.

## 9. Required logs

### Disclosure logs

Disclosure version shown, disclosure accepted, disclosure declined, and re-acceptance required. Fields: event ID, user ID, disclosure version, screen/source, timestamp, actor type, IP/device metadata where appropriate.

### Profile logs

Profile created, updated, submitted, published, unpublished, suspended, authorization changed, disclosure mode changed. Fields: profile ID, actor ID, role, previous state, new state, reason, timestamp.

### Messaging logs

Profile viewed, chat started, message sent, message queued, operator claim/release, operator reply, message blocked, conversation escalated, conversation closed. Fields: user ID, conversation ID, profile ID, message ID, actor ID, actor role, sender type, state transition, timestamp.

### Credit / subscription / payment logs

Credit purchase initiated, payment intent created, payment webhook received, payment status changed, credit debit, credit reversal, refund review opened, refund approved/rejected/completed, subscription created/activated/renewed/cancelled/failed/expired. Fields: payment intent ID, provider reference, idempotency key, user ID, ledger entry ID, amount, currency, status, reason, timestamp.

### Moderation logs

Escalation, block, suspension, abuse flag, operator misconduct flag, refund review flag, senior moderator decision. Fields: conversation/profile/user ID, actor ID, reason, severity, decision, timestamp.

### Role / admin logs

Role granted/revoked, admin access, finance action, operator permission change, system setting change. Fields: actor ID, target user ID, old permission, new permission, reason, timestamp.

## 10. Implementation notes

Disclosure text must have a version. If text materially changes, users must re-accept before new paid messages.

Disclosures, role gates, message access, operator assignment, and payments must be enforced server-side. UI hiding is not security.

Audit logs and financial ledgers must be append-only. Corrections require new correction/reversal events.

Customers may see a disclosed platform/profile label, but internally every operator action must store the real operator ID.