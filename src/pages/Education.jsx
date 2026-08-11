import { education } from "../data/content";

export default function Education() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Education</h1>
      {education.map((item) => (
        <article key={item.degree} className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-medium text-[var(--text)]">{item.degree}</h2>
            <span className="font-mono-tag text-xs text-[var(--text-dim)]">{item.duration}</span>
          </div>
          <p className="text-sm text-[var(--accent)]">{item.institution}</p>
          <dl className="mt-4 grid gap-3 text-sm text-[var(--text-dim)] sm:grid-cols-3">
            <div>
              <dt className="font-mono-tag text-xs text-[var(--text)]">CGPA</dt>
              <dd>{item.cgpa}</dd>
            </div>
            <div>
              <dt className="font-mono-tag text-xs text-[var(--text)]">Status</dt>
              <dd>{item.status}</dd>
            </div>
            <div>
              <dt className="font-mono-tag text-xs text-[var(--text)]">Location</dt>
              <dd>{item.location}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
