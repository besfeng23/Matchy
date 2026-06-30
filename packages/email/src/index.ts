export type TransactionalEmailType =
  | "welcome_disclosure"
  | "credit_purchase_receipt"
  | "subscription_receipt"
  | "low_credits_warning"
  | "operator_reply_notification"
  | "refund_or_reversal_notice"
  | "support_admin_alert";

export function isTransactionalEmail(type: TransactionalEmailType): boolean {
  return Boolean(type);
}
