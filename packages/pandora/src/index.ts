export type MemoryEventType =
  | "onboarding_preference_summary"
  | "conversation_summary_checkpoint"
  | "operator_note_summary"
  | "safety_escalation_summary";

export type MemoryWritePolicy = {
  requiresConsent: true;
  serverOnly: true;
  allowedEventTypes: MemoryEventType[];
};

export const defaultMemoryWritePolicy: MemoryWritePolicy = {
  requiresConsent: true,
  serverOnly: true,
  allowedEventTypes: [
    "onboarding_preference_summary",
    "conversation_summary_checkpoint",
    "operator_note_summary",
    "safety_escalation_summary",
  ],
};
