type ShellCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  items?: string[];
};

export function ShellCard({ eyebrow, title, description, items = [] }: ShellCardProps) {
  return (
    <section className="shell-card">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{description}</p>
      {items.length > 0 ? (
        <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
