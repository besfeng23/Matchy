export type YoursafePaymentStatus = "pending" | "succeeded" | "failed" | "cancelled" | "unknown";

export type YoursafeWebhookParseResult = {
  providerEventId: string;
  status: YoursafePaymentStatus;
  rawType: string;
};

export function createYoursafeStubNotice(): string {
  return "Yoursafe adapter contract is prepared, but live API calls must wait for official provider documentation and sandbox credentials.";
}
