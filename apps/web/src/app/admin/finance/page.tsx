import { ShellCard } from "@/components/shell-card";

export default function FinanceAdminPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10">
      <ShellCard
        eyebrow="Finance admin shell"
        title="Billing and reconciliation placeholder"
        description="This route will become the finance-only area for payment intents, Yoursafe webhook events, credit ledger entries, subscription lifecycle, refunds, reversals, and reconciliation notes."
        items={[
          "Frontend success pages are not payment proof.",
          "Provider webhooks are payment truth.",
          "Credit balance changes must go through an immutable ledger.",
          "Prompt 8 and Prompt 9 will add the money-safe implementation.",
        ]}
      />
    </main>
  );
}
