import { ShellCard } from "@/components/shell-card";
import { CANONICAL_DISCLOSURE } from "@/lib/disclosure";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10">
      <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
        <strong className="text-lg text-slate-950">Matchy</strong>
        <div className="flex gap-4">
          <a href="/app">Member app</a>
          <a href="/operator">Operator</a>
          <a href="/admin">Admin</a>
        </div>
      </nav>

      <ShellCard
        eyebrow="Alpha foundation"
        title="Disclosed operator-assisted social chat"
        description="Matchy is being built with the boring controls that keep the business alive: disclosure, billing discipline, audit logs, role gates, payments, memory consent, and email deliverability."
        items={[
          "Subscription and credit billing will use append-only ledger logic.",
          "Operator-assisted conversations must remain disclosed and internally traceable.",
          "Payment provider webhooks are payment truth, not frontend success pages.",
          "Pandora memory and SMTP are server-only integrations with consent controls.",
        ]}
      />

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
        <strong>Disclosure baseline:</strong> {CANONICAL_DISCLOSURE}
      </section>
    </main>
  );
}
