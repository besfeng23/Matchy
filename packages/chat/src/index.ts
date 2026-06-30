export type MessageSenderType = "customer" | "operator" | "moderator" | "system";

export type ConversationStatus = "open" | "queued" | "assigned" | "escalated" | "blocked" | "closed";

export function requiresOperatorQueue(profileMode: string): boolean {
  return profileMode === "operator_assisted_entertainment" || profileMode === "creator_owned_with_delegated_support";
}
