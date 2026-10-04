"use client";
import { useRef } from "react";
import Link from "next/link";
import { BuildCarousel, type BuildFrame } from "./build-carousel";
import { useScrollReveals } from "./use-scroll-reveals";
import { roverStories } from "@/content/marshgazers";
import type { Project } from "@/content/types";

export function RoverStudy({ project }: { project: Project }) {
  const study = useRef<HTMLElement>(null);
  useScrollReveals(study);
  const basic = project.slug === "olympus-basic";
  const story = roverStories[basic ? "olympus-basic" : "olympus-advanced"];
  const hero = project.media.find(item => item.src.endsWith(basic ? "/rover-ral-space.webp" : "/rover-sand.webp"));
  const frames: BuildFrame[] = story.frames.flatMap(stage => {
    const media = project.media.find(item => item.src.endsWith("/" + stage.file));
    return media ? [{media, title:stage.title, caption:stage.caption, context:stage.context}] : [];
  });
  return <article className={`rover-study project-story-study ${basic ? "rover-basic" : "rover-advanced"}`} ref={study}>
    <header className="hex-hero">
      <div className="hex-intro"><Link className="marsh-team-link" href="/marshgazers"><img src="/media/marshgazers/logo.png" alt="" width={2048} height={962} />Meet MarshGazers</Link>
        <p className="eyebrow hex-enter">UCL East / {story.stage}</p><h1><span className="hex-title">{project.title}</span></h1><p className="hex-summary hex-enter">{story.title}</p>
      </div>
      {hero && <figure className="hex-hero-image"><img src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} loading="eager" /></figure>}
    </header>
    <section className="hex-section rover-mission" aria-labelledby="rover-mission"><div className="hex-section-inner" data-reveal><p className="eyebrow">01 / The mission</p><h2 id="rover-mission">{story.headline}</h2><p className="hex-section-lead">{story.mission}</p></div></section>
    <section className="hex-section" aria-labelledby="rover-team"><div className="hex-section-inner hex-story-grid">
      <div className="hex-story-card" data-reveal><p className="eyebrow">02 / Our starting point</p><h2 id="rover-team">{basic ? "Building our first entry." : "Taking the next step."}</h2><p>{story.introduction}</p></div>
      <div className="hex-story-card" data-reveal style={{transitionDelay:"180ms"}}><h3>My part in the team.</h3><p>{story.leadership}</p></div>
    </div></section>
    <section className="hex-section hex-section-espresso" aria-labelledby="rover-engineering"><div className="hex-section-inner"><div data-reveal><p className="eyebrow">03 / Engineering the mission</p><h2 id="rover-engineering">{basic ? "See clearly. Move reliably." : "Make every subsystem serve the sample."}</h2></div><div className="hex-engineering-grid">{story.cards.map((card,index)=><div className="hex-story-card" key={card.title} data-reveal style={{transitionDelay:`${index*180}ms`}}><h3>{card.title}</h3><p>{card.body}</p></div>)}</div></div></section>
    <section className="hex-section hex-build-section" aria-labelledby="rover-build"><div className="hex-section-inner hex-build-introduction" data-reveal><p className="eyebrow">04 / From team to terrain</p><h2 id="rover-build">The build, frame by frame.</h2><p className="hex-section-lead">Follow the hardware, preparation and competition story. Select a frame for the closer look.</p></div><BuildCarousel frames={frames} label={`${project.title} build story`} /></section>
    <section className="hex-section hex-section-tinted" aria-labelledby="rover-result"><div className="hex-section-inner hex-story-grid"><div className="hex-story-card" data-reveal><p className="eyebrow">05 / What we took forward</p><h2 id="rover-result">{basic ? "An award-winning first season." : "A design recognised."}</h2><p>{story.result}</p></div><div className="hex-story-card" data-reveal style={{transitionDelay:"180ms"}}><h3>What the season taught us.</h3><p>{story.reflection}</p></div></div></section>
    <div className="hex-section-inner rover-links"><Link href="/marshgazers">Meet the team</Link><Link href={`/projects/${basic ? "olympus-advanced" : "olympus-basic"}`}>{basic ? "Next: Olympus Advanced" : "Where it began: Olympus Basic"}</Link></div>
  </article>;
}
