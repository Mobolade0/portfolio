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
  const comparison = project.media.filter(media => media.group === "slam-comparison");
  return <article className="case-study"><header><p className="metadata">{project.period}</p>
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

function DrHexStudy({ project }: { project: Project }) {
  const hero = project.media.find(media => media.src.endsWith("/hexapod-side.webp")) ?? project.media[0];
  const build = project.media.filter(media => media !== hero && !media.group);
  const comparison = project.media.filter(media => media.group === "slam-comparison");
  return <article className="dr-hex-study">
    <header className="hex-hero">
      <div className="hex-intro">
        <p className="eyebrow hex-enter">UCL / Disaster-response robotics</p>
        <h1><span className="hex-title">DR HEX</span></h1>
        <p className="hex-summary hex-enter">{project.summary}</p>
        <dl className="hex-facts hex-enter">
          <div><dt>Timeline</dt><dd>{project.period}</dd></div>
          <div><dt>My role</dt><dd>{project.role}</dd></div>
        </dl>
        <a className="hex-explore hex-enter" href="#hex-contribution">Explore the project <span aria-hidden="true">↓</span></a>
      </div>
      {hero && <div className="hex-hero-image"><MediaFigure media={hero} eager /></div>}
    </header>
    <div id="hex-contribution" className="hex-block hex-dark">
      <div className="hex-block-inner hex-two-column">
        <Points title="My contribution" items={project.contributions} />
        <Points title="Engineering decisions" items={project.decisions} />
      </div>
    </div>
    {build.length > 0 && <section className="hex-block hex-light" aria-labelledby="hex-build">
      <div className="hex-block-inner">
        <p className="eyebrow">From design to prototype</p>
        <h2 id="hex-build">Build and process</h2>
        <div className="hex-build-grid">{build.map(media => <MediaFigure key={media.src} media={media} />)}</div>
      </div>
    </section>}
    <div className="hex-block hex-dark">
      <div className="hex-block-inner">
        {comparison.length > 0 && <section aria-labelledby="hex-slam">
          <p className="eyebrow">Integration and testing</p>
          <h2 id="hex-slam">SLAM: scene and map</h2>
          <div className="media-comparison">{comparison.map(media => <MediaFigure key={media.src} media={media} />)}</div>
        </section>}
        <div className="hex-two-column hex-outcomes">
          <Points title="Team outcomes" items={project.teamOutcomes} />
          <Points title="Evidence boundaries" items={project.evidenceLimits} />
        </div>
        <a className="hex-back" href="/projects">← All projects</a>
      </div>
    </div>
  </article>;
}
