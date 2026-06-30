import { ShellCard } from "@/components/shell-card";

export default function AdminPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10">
      <ShellCard
        eyebrow="Admin shell"
        title="Control tower placeholder"
        description="This route will become the admin control layer for users, profiles, disclosures, conversations, operators, escalations, audit logs, system health, and go/no-go checks."
        items={[
          "Admin routes must be protected server-side, not only hidden in navigation.",
          "Role changes and admin actions must be audited.",
          "Finance controls stay separated under /admin/finance.",
          "Prompt 12 will turn this placeholder into the alpha control tower.",
        ]}
      />
    </main>
  );
}
