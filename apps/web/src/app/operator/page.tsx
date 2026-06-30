import { ShellCard } from "@/components/shell-card";

export default function OperatorPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-10">
      <ShellCard
        eyebrow="Operator shell"
        title="Operator console placeholder"
        description="This route will become the authenticated operator workspace for queue claiming, assigned conversations, internal notes, escalation, reply creation, and audit-backed workflow."
        items={[
          "No operator can reply without internal traceability.",
          "No assisted conversation should hide its disclosed service model.",
          "Prompt 7 will build claim/release/reply/escalation flows.",
          "Prompt 12 will add admin moderation oversight.",
        ]}
      />
    </main>
  );
}
