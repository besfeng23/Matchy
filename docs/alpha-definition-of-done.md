# Alpha Definition of Done

This checklist defines when Matchy Alpha V1 is actually done. A feature is not done because the UI looks finished. A feature is done only when billing, permissions, audit, disclosure, security, and tests are handled or explicitly documented as not applicable.

## 1. Product truth

- [ ] The platform is documented as a disclosed operator-assisted social chat platform.
- [ ] The platform is explicitly not a hidden impersonation system.
- [ ] Users are told what they are paying for.
- [ ] Users are told what they are not guaranteed.
- [ ] Operator-assisted, delegated support, fictional/demo, and creator-owned profile modes are defined.
- [ ] Forbidden operator actions are documented.
- [ ] Required logs are documented.

Evidence: `docs/product-operating-model.md`, `docs/risks-and-controls.md`, exact disclosure copy, and clear red lines.

## 2. Disclosure

- [ ] Canonical disclosure text exists.
- [ ] Disclosure text is versioned.
- [ ] Disclosure is shown on signup.
- [ ] Disclosure is shown on relevant profile cards.
- [ ] Disclosure is shown on profile detail pages.
- [ ] Disclosure is shown before first message.
- [ ] Disclosure is shown before payment.
- [ ] Disclosure acceptance is logged.
- [ ] Users are required to re-accept after material disclosure changes.

Evidence: disclosure table/config, acceptance event sample, proof disclosure appears before chat/payment, test proving message blocked without acceptance.

## 3. Authentication and roles

- [ ] Authentication exists.
- [ ] Customer/member role exists.
- [ ] Profile owner/creator role exists where applicable.
- [ ] Operator role exists.
- [ ] Senior moderator role exists.
- [ ] Admin role exists.
- [ ] Finance admin role exists.
- [ ] System/service role behavior is defined.
- [ ] Route access is protected server-side.
- [ ] Role changes are audited.

Evidence: auth helper files, role/permission schema, denied-access tests, audit row for role change.

## 4. Database schema and RLS

- [ ] Core user/account tables exist.
- [ ] Profile tables exist.
- [ ] Disclosure tables/events exist.
- [ ] Conversation/message tables exist.
- [ ] Operator assignment/moderation tables exist.
- [ ] Credit account and ledger tables exist.
- [ ] Subscription tables exist.
- [ ] Payment intent and webhook event tables exist.
- [ ] Email event table exists.
- [ ] Memory link table exists.
- [ ] Audit log table exists.
- [ ] RLS is enabled on sensitive tables.
- [ ] Indexes exist for common access paths.
- [ ] No destructive migration is used for alpha setup.

Evidence: migration filenames, migration apply result, RLS confirmation, table/index list, access-control query tests.

## 5. Profiles

- [ ] Customers can browse published profiles.
- [ ] Customers can view profile detail pages.
- [ ] Profile type is visible.
- [ ] Assisted/entertainment/fictional profiles are labeled clearly.
- [ ] Admins can create/update profiles.
- [ ] Profiles cannot be published without disclosure metadata.
- [ ] Profiles cannot be published without authorization metadata or fictional/demo status.
- [ ] Profile publish/unpublish is audited.
- [ ] Suspended/unpublished profiles cannot receive new conversations.

Evidence: profile routes/pages, publish validation test, audit sample, screenshot or route output.

## 6. Messaging and operator routing

- [ ] Authenticated user can start a conversation with an eligible published profile.
- [ ] User cannot message without accepting disclosure.
- [ ] First message creates or reuses a conversation.
- [ ] System disclosure message is inserted at chat start.
- [ ] Customer message is routed to operator queue where appropriate.
- [ ] Message sender type is stored.
- [ ] Operators cannot see conversations outside permission rules.
- [ ] Senior moderator escalation path exists.
- [ ] Blocked or suspended profiles cannot receive new paid messages.

Evidence: send test, first-message gating test, sample conversation/message rows, operator queue output.

## 7. Operator console

- [ ] Operator dashboard exists.
- [ ] Operators can see claimable queue.
- [ ] Operators can see assigned conversations.
- [ ] Operators can claim/release conversations.
- [ ] Operator replies are stored with internal operator ID.
- [ ] Customer-facing label is consistent with disclosure.
- [ ] Internal notes exist where needed.
- [ ] Escalation action exists.
- [ ] Block/refund-review placeholder or workflow exists.
- [ ] Operator actions are audited.

Evidence: operator routes, claim/reply sample rows, audit sample, unauthorized operator access tests.

## 8. Credits and subscriptions

- [ ] Credit account exists per user.
- [ ] Credit ledger is append-only.
- [ ] Ledger entry types include purchase, message debit, bonus, adjustment, reversal, refund pending/completed.
- [ ] Balance is derived safely from ledger or cached with reconciliation.
- [ ] Message send checks credits/subscription server-side.
- [ ] Insufficient credits block paid send.
- [ ] Reversal creates a new ledger entry instead of editing old rows.
- [ ] Subscription plans exist.
- [ ] User subscription lifecycle exists.
- [ ] Finance adjustments require reason and audit log.
- [ ] Idempotency prevents double debit.

Evidence: ledger schema/function, debit/reversal tests, sample ledger before/after, insufficient-credit test.

## 9. Yoursafe payment integration

- [ ] Payment provider interface exists.
- [ ] Yoursafe adapter exists or clean stub exists if docs are missing.
- [ ] No fake undocumented live API behavior is invented.
- [ ] Payment intent/session flow exists.
- [ ] Webhook endpoint exists.
- [ ] Webhook signature verification exists or is cleanly stubbed pending real docs.
- [ ] Webhook events are stored.
- [ ] Idempotency prevents duplicate credit grants.
- [ ] Successful payment creates ledger credit exactly once.
- [ ] Unknown webhook events are stored but do not mutate money.
- [ ] Payment errors do not expose secrets.

Evidence: adapter files, webhook route, idempotency test, invalid-signature test, webhook event row, ledger credit row.

## 10. Pandora memory

- [ ] Pandora client is server-only.
- [ ] Pandora token is never exposed to browser code.
- [ ] Memory event allowlist exists.
- [ ] Sensitive-data denylist exists.
- [ ] Memory writes require consent/purpose gate.
- [ ] memory_links table records local entity and Pandora reference.
- [ ] Memory failures do not break messaging.
- [ ] Operator/admin UI shows safe memory context indicator where applicable.
- [ ] Tests cover consent-blocked and successful/stubbed write paths.

Evidence: server-only client, consent gate, memory_links sample/stub, tests, client-bundle token check.

## 11. SMTP email

- [ ] SMTP module is server-only.
- [ ] SMTP credentials are never exposed.
- [ ] Transactional templates exist.
- [ ] Payment receipt notification exists.
- [ ] Operator reply notification exists.
- [ ] Refund/reversal notice exists.
- [ ] email_events table logs sends.
- [ ] Suppression/bounce/preference checks exist.
- [ ] Marketing is disabled unless consent exists.
- [ ] Deliverability doc exists covering SPF, DKIM, DMARC, bounce handling, unsubscribe/preferences, and legitimate warm-up.

Evidence: email module, templates, email_events row, suppression test, deliverability doc.

## 12. Admin dashboard

- [ ] Admin dashboard exists.
- [ ] Admin can view users.
- [ ] Admin can view profiles.
- [ ] Admin can view active conversations.
- [ ] Admin can view unassigned queue count.
- [ ] Admin can view escalations.
- [ ] Audit log viewer exists.
- [ ] Finance admin page exists for payment intents, ledger entries, webhook events, and reconciliation.
- [ ] Moderation admin page exists for escalations, blocked conversations, and operator basics.
- [ ] Admin routes are role-protected.

Evidence: admin routes, audit viewer output, finance page output, moderation page output, denied-access test.

## 13. Audit logs

Audit logs must exist for:

- disclosure version shown/accepted;
- profile viewed;
- chat started;
- message sent/routed;
- operator claim/release/reply;
- credit debit/reversal;
- subscription activation/cancellation;
- payment webhook;
- refund/review;
- escalation;
- block/suspension;
- role change;
- admin/finance action.

Evidence: audit schema, sample rows across categories, server-side logging functions, tests/smoke proof for role, message, money, and operator actions.

## 14. Tests and smoke checks

- [ ] install succeeds.
- [ ] typecheck succeeds.
- [ ] lint succeeds or pre-existing issues documented.
- [ ] unit tests pass or critical failures fixed.
- [ ] build succeeds.
- [ ] `/api/health` returns safe non-secret status.
- [ ] anonymous protected route denied.
- [ ] customer cannot access operator/admin.
- [ ] operator cannot access finance admin.
- [ ] user cannot message without disclosure.
- [ ] profile cannot publish without disclosure metadata.
- [ ] credit debit idempotency works.
- [ ] webhook idempotency works.
- [ ] memory write blocked without consent.
- [ ] SMTP test mode does not expose credentials.

Evidence: command outputs, smoke test script, severity-ranked failure list, no hidden critical failures.

## 15. Deployment readiness

- [ ] `.env.example` exists with placeholders only.
- [ ] Production env var list exists.
- [ ] Database migrations are applied.
- [ ] RLS verification is documented.
- [ ] Yoursafe webhook endpoint configured.
- [ ] SMTP DNS checklist exists.
- [ ] Pandora token configured server-side.
- [ ] Test accounts exist.
- [ ] Seed script exists with disclosed/demo labels.
- [ ] Backup/recovery plan exists.
- [ ] Monitoring/logging plan exists.
- [ ] Go/no-go report exists.

Evidence: `docs/deployment-checklist.md`, `docs/alpha-go-no-go.md`, migration status, env checklist, smoke test output.

## 16. Secret safety

- [ ] No real API keys committed.
- [ ] No service role key committed.
- [ ] No SMTP password committed.
- [ ] No Yoursafe key committed.
- [ ] No Pandora token committed.
- [ ] No secrets printed in tests, logs, docs, or screenshots.
- [ ] `.env.example` contains placeholders only.
- [ ] `.gitignore` excludes local env files.

Evidence: secret scan/manual confirmation, `.env.example`, `.gitignore`, go/no-go confirmation.

## 17. Go / no-go rule

Alpha is **NO-GO** if any of these are missing:

- disclosure acceptance before messaging;
- server-side role enforcement;
- RLS/equivalent data access enforcement;
- append-only ledger;
- operator reply auditability;
- payment webhook idempotency;
- no-secret confirmation;
- admin/finance separation;
- critical smoke tests;
- go/no-go report.

Alpha may be **GO for private internal testing only** if all core controls are implemented, unresolved items are non-critical and documented, test users understand the disclosed model, no real money is processed unless payment controls are verified, and no public marketing starts before legal/policy review.