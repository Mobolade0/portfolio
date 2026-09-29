"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, profileSlides } from "@/content/profile";
import type { Project } from "@/content/types";

// Homepage sketch images. Add future sketch paths here.
const projectSketches: Partial<Record<string, string>> = {
  "dr-hex": "/media/dr-hex/hexapod-sketch-final.png",
  "olympus-advanced": "/media/olympus-advanced/rover-sketch-advanced.png",
  "olympus-basic": "/media/olympus-basic/rover-sketch-basic.png",
  "exoskeleton": "/media/exoskeleton/exo-sketch.webp",
  "tree-climbing-robot": "/media/tree-climbing-robot/tree-climbing-sketch.webp",
};

export function PortfolioHome({ projects }: { projects: Project[] }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [currentProject, setCurrentProject] = useState(1);
  const feed = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLElement>(null);
  const slide = profileSlides[slideIndex];

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1000px) and (min-height: 700px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setDesktop(wide.matches); setMotionAllowed(!reduced.matches); };
    update();
    wide.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => { wide.removeEventListener("change", update); reduced.removeEventListener("change", update); };
  }, []);

  useEffect(() => {
    if (!desktop || !motionAllowed || !playing || hovered) return;
    let frame = 0;
    let previous = 0;
    const step = (now: number) => {
      if (document.hidden) { previous = 0; frame = requestAnimationFrame(step); return; }
      if (previous) window.scrollBy(0, Math.min(now - previous, 64) * 0.009);
      previous = now;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        setPlaying(false); setAtEnd(true); return;
      }
      frame = requestAnimationFrame(step);
    };
    const delay = window.setTimeout(() => { frame = requestAnimationFrame(step); }, 1800);
    return () => { clearTimeout(delay); cancelAnimationFrame(frame); };
  }, [desktop, motionAllowed, playing, hovered]);

  useEffect(() => {
    const stop = () => setPlaying(false);
    const track = () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-project]"));
      const visible = cards.findIndex(card => card.getBoundingClientRect().bottom > 100);
      setCurrentProject(visible < 0 ? projects.length : visible + 1);
      setAtEnd(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1);
    };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("scroll", track, { passive: true });
    return () => {
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("scroll", track);
    };
  }, [projects.length]);

  function pause() { setPlaying(false); }
  function showSlide(index: number) {
    setSlideIndex(index);
    if (!desktop) document.getElementById("profile")?.scrollIntoView({ behavior: "auto", block: "start" });
  }
  function showWork() {
    pause();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function toggleMotion() {
    if (playing) pause();
    else {
      if (atEnd) { window.scrollTo({ top: 0, behavior: "auto" }); setAtEnd(false); }
      setPlaying(true);
    }
  }

  return <div className="portfolio-home">
    <div className="home-left">
    <header className="home-header">
      <div className="identity"><h1>{profile.name}</h1><p className="eyebrow">{profile.discipline} <span>/</span> UCL</p></div>
      <nav className="home-navigation" aria-label="Main navigation">
        <Button variant="ghost" onClick={showWork}>Work</Button>
        <Button variant="ghost" onClick={() => showSlide(0)}>About</Button>
        <Button variant="ghost" onClick={() => showSlide(1)}>Experience</Button>
        <Button variant="ghost" onClick={() => { contact.current?.scrollIntoView({ block: "nearest" }); contact.current?.focus(); }}>Contact</Button>
      </nav>
    </header>

    <aside className="personal-panel" aria-label="About Yusuf">
      <section className="profile-carousel" id="profile" aria-roledescription="carousel" aria-label="Meet Yusuf">
        <div className="profile-topline"><p className="eyebrow">A little about me</p><span className="eyebrow">0{slideIndex + 1} / 0{profileSlides.length}</span></div>
        <div id="profile-slide" className="profile-slide" aria-live="polite" aria-atomic="true">
          <div className="portrait-space">
            {slide.media?.kind === "image" ? <Image src={slide.media.src} alt={slide.media.alt} fill sizes="(max-width: 600px) 120px, 150px" unoptimized /> : <><span className="portrait-initials" aria-hidden="true">YA</span><span className="image-note">{slideIndex === 0 ? "Portrait to follow" : "Image to follow"}</span></>}
          </div>
          <div className="profile-copy" key={slide.id}><p className="eyebrow slide-label">{slide.label}</p><h2>{slide.heading}</h2><p className="profile-body">{slide.body}</p><p className="profile-detail">{slide.detail}</p></div>
        </div>
        <div className="slide-controls" role="group" aria-label="Choose introduction slide">
          {profileSlides.map((item, index) => <Button key={item.id} variant="ghost" className="slide-dot" aria-label={`Show ${item.label.toLowerCase()}`} aria-pressed={slideIndex === index} aria-controls="profile-slide" onClick={() => setSlideIndex(index)}><span /></Button>)}
          <span className="eyebrow">{slide.label}</span>
        </div>
      </section>
      <footer className="personal-footer" ref={contact} tabIndex={-1} aria-label="Contact Yusuf">
        <p className="eyebrow">Let’s connect</p>
        <div className="contact-links">{profile.contacts.map(item => item.href ? <a href={item.href} key={item.label} target="_blank" rel="noreferrer">{item.label}<ArrowUpRight size={14} aria-hidden="true" /></a> : <span key={item.label} className="contact-pending">{item.label}<small>To be added</small></span>)}</div>
        <p className="footer-note">Mechanical design. Intelligent systems. Human purpose.</p>
      </footer>
    </aside>
    </div>

    <section className="work-panel" id="work" aria-label="Selected engineering projects">
      <div className="work-toolbar"><h2 className="eyebrow">Selected projects <span className="work-count">/ 0{projects.length}</span></h2>
        {desktop && motionAllowed ? <Button variant="ghost" className="motion-toggle" onClick={toggleMotion} aria-label={playing ? "Pause automatic project scrolling" : atEnd ? "Replay project scrolling" : "Resume automatic project scrolling"}>
          {playing ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}<span>{playing ? "Pause scroll" : atEnd ? "Replay" : "Play scroll"}</span></Button> : <span className="eyebrow">Scroll to explore <ArrowDown size={12} aria-hidden="true" /></span>}
      </div>
      <div className="project-feed" ref={feed} tabIndex={0} role="region" aria-label="Project gallery"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onWheel={pause} onTouchStart={pause} onPointerDown={pause} onFocusCapture={pause}
        onKeyDown={event => { if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) pause(); }}>
        {projects.map((project, index) => {
          const media = project.media[0];
          const coverSrc = project.slug === "tree-climbing-robot"
            ? "/media/tree-climbing-robot/tree-climbing-robot.webp"
            : media?.kind === "image" ? media.src : undefined;
          const sketch = media?.kind === "image" ? projectSketches[project.slug] : undefined;
          return <article className="gallery-project" key={project.slug} data-project={project.slug}>
            <Link className={`project-visual${sketch ? " has-sketch" : ""}`} href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
              {media?.kind === "image" ? <Image src={coverSrc!} alt={media.alt} fill sizes="(max-width: 999px) 100vw, 54vw" unoptimized priority={index === 0} /> : media?.kind === "video" ? <video src={media.src} aria-label={media.alt} controls preload="metadata" /> : <div className="media-placeholder"><span className="placeholder-index" aria-hidden="true">0{index + 1}</span><div><span className="eyebrow">{project.tags[0]}</span><p>{project.title}</p><span className="image-note">Project photograph to follow</span></div></div>}
              {sketch && (
                <div className="project-sketch-layer" aria-hidden="true">
                  <Image
                    className="project-sketch"
                    src={sketch}
                    alt=""
                    fill
                    sizes="(max-width: 999px) 100vw, 54vw"
                    unoptimized
                  />
                </div>
              )}
              <span className="project-open" aria-hidden="true"><ArrowUpRight size={23} /></span>
            </Link>
            <div className="project-caption"><div><p className="eyebrow">0{index + 1} / {project.period}</p><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3></div><div><p className="project-role">{project.role}</p><p className="project-summary">{project.summary}</p></div></div>
          </article>;
        })}
        <div className="gallery-end"><p>More of the process.</p><Link href="/projects">Explore all projects <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </div>
      <div className="work-bottom" aria-hidden="true"><span>Engineering / Selected work</span><span>0{currentProject} <span className="muted">/ 0{projects.length}</span></span></div>
    </section>
  </div>;
}
