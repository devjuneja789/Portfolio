import { skillGroups } from "../data/content";
import Tag from "../components/Tag";

export default function Skills() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[var(--text)]">Skills</h1>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-6">
            <h2 className="mb-4 text-lg font-medium text-[var(--text)]">{group.title}</h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
