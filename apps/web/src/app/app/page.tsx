import { ShellCard } from "@/components/shell-card";

export default function MemberAppPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10">
      <ShellCard
        eyebrow="Customer app shell"
        title="Member experience"
        description="This route will become the authenticated customer area for onboarding, disclosure acceptance, profile browsing, chat, balances, subscriptions, receipts, and support."
        items={[
          "Prompt 4 will add authentication and role gates.",
          "Prompt 5 will add published profiles and disclosure badges.",
          "Prompt 6 will add the message pipeline and operator routing.",
          "Prompt 8 will add credits and subscription entitlement checks.",
        ]}
      />
    </main>
  );
}
