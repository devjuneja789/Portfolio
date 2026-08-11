import { profile } from "../data/content";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Contact</h1>
      <section className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6">
        <p className="mb-6 leading-relaxed text-[var(--text-dim)]">
          I am open to AI/ML, full-stack, and internship opportunities. The fastest way to reach me is email.
        </p>
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <a className="font-mono-tag text-[var(--accent)] hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="font-mono-tag text-[var(--accent)] hover:underline" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
            {profile.phone}
          </a>
          {profile.socials
            .filter((social) => social.label !== "Email")
            .map((social) => (
              <a
                key={social.label}
                className="font-mono-tag text-[var(--text-dim)] hover:text-[var(--accent)]"
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          <a
            className="font-mono-tag text-[var(--text-dim)] hover:text-[var(--accent)]"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
