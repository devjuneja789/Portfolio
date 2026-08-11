import { profile } from "../data/content";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-raised)] px-4 py-2 font-mono-tag text-sm text-[var(--text)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            {profile.availability}
          </div>
          <p className="font-mono-tag text-sm text-[var(--accent)]">Hi, I'm {profile.shortName}</p>
          <h1 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">{profile.tagline}</h1>
          {profile.bio.map((para) => (
            <p key={para} className="leading-relaxed text-[var(--text-dim)]">
              {para}
            </p>
          ))}

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="font-mono-tag text-sm text-[var(--text-dim)] hover:text-[var(--accent)]"
              >
                {social.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono-tag text-sm text-[var(--accent)] hover:underline"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
