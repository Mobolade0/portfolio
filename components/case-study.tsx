import type { Project } from "@/content/types";
function Points({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return <section><h2>{title}</h2><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}
export function CaseStudy({ project }: { project: Project }) {
  return <article className="case-study"><header><p className="metadata">{project.period}</p>
    <h1>{project.title}</h1><p className="lead">{project.summary}</p><p>{project.role}</p></header>
    <Points title="My contribution" items={project.contributions} />
    <Points title="Engineering decisions" items={project.decisions} />
    <Points title="Team outcomes" items={project.teamOutcomes} />
    <Points title="Evidence boundaries" items={project.evidenceLimits} />
    {project.media.length > 0 && <section aria-label="Project media">{project.media.map(media => <figure key={media.src}>
      {media.kind === "image" ? <img src={media.src} alt={media.alt} loading="lazy" /> : <video src={media.src} aria-label={media.alt} controls preload="metadata" />}
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>)}</section>}
  </article>;
}
