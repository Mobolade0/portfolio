import { DrHexStudy } from "./dr-hex-study";
import { ExoskeletonStudy } from "./exoskeleton-study";
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
  if (project.slug === "dr-hex") return <DrHexStudy project={project} />;
  if (project.slug === "exoskeleton") return <ExoskeletonStudy project={project} />;
  const comparison = project.media.filter(media => media.group === "slam-comparison");
  return <article className="case-study" data-project={project.slug}><header className="project-title-card"><p className="metadata">{project.period}</p>
    <h1>{project.title}</h1><p className="lead">{project.summary}</p><p>{project.role}</p></header>
    {project.media[0] && <MediaFigure media={project.media[0]} eager />}
    {[{key: "cad", title: "CAD and mechanical design"}, {key: "prototype", title: "Wearable and testing"}, {key: "context", title: "Movement and routing references"}].map(group => {
      const media = project.media.filter(item => item.group === group.key);
      return media.length > 0 && <section key={group.key} aria-label={group.title}><h2>{group.title}</h2><div className="cad-gallery">{media.map(item => <MediaFigure key={item.src} media={item} />)}</div></section>;
    })}
    <Points title="My contribution" items={project.contributions} />
    <Points title="Engineering decisions" items={project.decisions} />
    <Points title="Team outcomes" items={project.teamOutcomes} />
    <Points title="Evidence boundaries" items={project.evidenceLimits} />
    {project.media.slice(1).some(media => !media.group) && <section aria-label="Project media" className="case-gallery"><h2>Build and process</h2>{project.media.slice(1).filter(media => !media.group).map(media => <MediaFigure key={media.src} media={media} />)}</section>}
    {comparison.length > 0 && <section aria-labelledby="slam-comparison"><h2 id="slam-comparison">SLAM: scene and map</h2><div className="media-comparison">{comparison.map(media => <MediaFigure key={media.src} media={media} />)}</div></section>}
  </article>;
}

