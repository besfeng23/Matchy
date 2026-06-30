export const DISCLOSURE_VERSION = "2026-07-01-alpha-001";

export const CANONICAL_DISCLOSURE =
  "Some profiles and conversations on this platform may be operator-assisted, moderated, fictional, or managed on behalf of a profile owner; credits and subscriptions pay for platform chat and entertainment access, not guaranteed romance, meetings, direct access, or any relationship outcome.";

export type ProfileDisclosureMode =
  | "creator_owned"
  | "creator_owned_with_delegated_support"
  | "operator_assisted_entertainment"
  | "fictional_demo"
  | "suspended_unpublished";

export function requiresExplicitDisclosure(mode: ProfileDisclosureMode): boolean {
  return mode !== "creator_owned";
}
