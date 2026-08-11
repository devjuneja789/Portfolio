import { involvement } from "../data/content";

export default function Work() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Work</h1>
      {involvement.map((item) => (
        <article key={item.role + item.period} className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-medium text-[var(--text)]">{item.role}</h2>
            <span className="font-mono-tag text-xs text-[var(--text-dim)]">{item.period}</span>
          </div>
          <p className="mb-3 text-sm text-[var(--accent)]">
            {item.org} - {item.location}
          </p>
          <ul className="flex flex-col gap-1.5">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-[var(--text-dim)]">
                <span className="text-[var(--accent)]">-</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
