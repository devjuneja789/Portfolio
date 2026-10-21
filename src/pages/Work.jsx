import { experiences, involvement } from "../data/content";

export default function Work() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text)]">Experience</h1>
      </div>

      {experiences && experiences.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="font-mono-tag text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            Work Experience
          </h2>
          {experiences.map((item) => (
            <article
              key={item.company + item.role}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6"
            >
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-[var(--text)]">{item.role}</h3>
                <span className="font-mono-tag text-xs text-[var(--text-dim)]">{item.period}</span>
              </div>
              <p className="mb-3 text-sm text-[var(--accent)]">
                {item.company} &bull; {item.location}
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
        </section>
      )}
    </div>
  );
}
