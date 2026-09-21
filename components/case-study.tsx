import type { Media, Project } from "@/content/types";
function Points({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return <section><h2>{title}</h2><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}
function MediaFigure({ media, eager = false }: { media: Media; eager?: boolean }) {
  return <figure className="case-media">
    {media.kind === "image" ? <a href={media.src} target="_blank" rel="noreferrer" aria-label={`Open full image: ${media.alt}`}><img src={media.src} alt={media.alt} width={media.width} height={media.height} loading={eager ? "eager" : "lazy"} /></a> : <video src={media.src} aria-label={media.alt} controls preload="metadata" />}
    {media.caption && <figcaption>{media.caption}{media.documentSrc && <> <a href={media.documentSrc} target="_blank" rel="noreferrer">Open drawing PDF</a></>}</figcaption>}
  </figure>;
}
export function CaseStudy({ project }: { project: Project }) {
  const comparison = project.media.filter(media => media.group === "slam-comparison");
  return <article className="case-study"><header><p className="metadata">{project.period}</p>
    <h1>{project.title}</h1><p className="lead">{project.summary}</p><p>{project.role}</p></header>
    {project.media[0] && <MediaFigure media={project.media[0]} eager />}
    <Points title="My contribution" items={project.contributions} />
    <Points title="Engineering decisions" items={project.decisions} />
    <Points title="Team outcomes" items={project.teamOutcomes} />
    <Points title="Evidence boundaries" items={project.evidenceLimits} />
    {project.media.length > 1 && <section aria-label="Project media" className="case-gallery"><h2>Build and process</h2>{project.media.slice(1).filter(media => !media.group).map(media => <MediaFigure key={media.src} media={media} />)}</section>}
    {comparison.length > 0 && <section aria-labelledby="slam-comparison"><h2 id="slam-comparison">SLAM: scene and map</h2><div className="media-comparison">{comparison.map(media => <MediaFigure key={media.src} media={media} />)}</div></section>}
  </article>;
}
