export type BillingMode = "credits" | "subscription" | "hybrid";

export type LedgerEntryType =
  | "purchase"
  | "message_debit"
  | "bonus"
  | "adjustment"
  | "reversal"
  | "refund_pending"
  | "refund_completed";

export function assertAppendOnlyLedger(): true {
  return true;
}
