export type WorkerDomain = "payment_webhooks" | "email_jobs" | "message_queue" | "memory_jobs";

export function describeWorkerDomain(domain: WorkerDomain): string {
  return `Matchy ${domain} worker placeholder. Real jobs will be implemented after database, billing, and provider contracts exist.`;
}
