"use client";

import { useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, profileSlides } from "@/content/profile";
import { useDesktopReel } from "@/components/use-desktop-reel";
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
  const [showPhotos, setShowPhotos] = useState(false);
  const profileTrack = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointer: number; startX: number; startY: number; width: number; axis: "pending" | "horizontal" | "vertical" } | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const reel = useDesktopReel();

  function showSlide(index: number) {
    setSlideIndex(Math.max(0, Math.min(profileSlides.length - 1, index)));
    setDragOffset(0);
    reel.pause();
  }
  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    reel.pause();
    drag.current = { pointer: event.pointerId, startX: event.clientX, startY: event.clientY,
      width: event.currentTarget.clientWidth, axis: "pending" };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const gesture = drag.current;
    if (!gesture || gesture.pointer !== event.pointerId) return;
    const dx = event.clientX - gesture.startX;
    const dy = event.clientY - gesture.startY;
    if (gesture.axis === "pending" && Math.max(Math.abs(dx), Math.abs(dy)) > 8) {
      gesture.axis = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
    }
    if (gesture.axis !== "horizontal") return;
    setDragging(true);
    const beyondEdge = (slideIndex === 0 && dx > 0) || (slideIndex === profileSlides.length - 1 && dx < 0);
    setDragOffset(Math.max(-gesture.width, Math.min(gesture.width, beyondEdge ? dx * .2 : dx)));
  }
  function finishDrag(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const gesture = drag.current;
    if (!gesture || gesture.pointer !== event.pointerId) return;
    drag.current = null;
    const dx = event.clientX - gesture.startX;
    if (!cancelled && gesture.axis === "horizontal" && Math.abs(dx) > Math.min(100, gesture.width * .18)) {
      showSlide(slideIndex + (dx < 0 ? 1 : -1));
    }
    setDragOffset(0);
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function showExperience() {
    document.getElementById("profile")?.scrollIntoView({ block: "nearest" });
    showSlide(2);
  }

  return <div className={`portfolio-home${showPhotos ? " show-photos" : ""}`}>
      <nav className="home-navigation" aria-label="Main navigation">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Button variant="ghost" onClick={showExperience}>Experience</Button>
        <Link href="/contact">Contact</Link>
      </nav>
    <div className="home-left">
    <header className="home-header">
      <div className="identity"><h1>{profile.name}</h1></div>

    </header>

    <aside className="personal-panel" aria-label="About Yusuf">
      <section className="profile-carousel" id="profile" aria-roledescription="carousel" aria-label="Meet Yusuf">
        <div className="profile-tabs" role="tablist" aria-label="About Yusuf sections">
          {profileSlides.map((item, index) => <button type="button" key={item.id} id={`profile-tab-${item.id}`}
            role="tab" aria-selected={slideIndex === index} aria-controls={`profile-panel-${item.id}`}
            tabIndex={slideIndex === index ? 0 : -1} onClick={() => showSlide(index)}
            onKeyDown={event => {
              const next = event.key === "ArrowRight" ? (index + 1) % profileSlides.length
                : event.key === "ArrowLeft" ? (index + profileSlides.length - 1) % profileSlides.length
                : event.key === "Home" ? 0 : event.key === "End" ? profileSlides.length - 1 : null;
              if (next === null) return;
              event.preventDefault();
              showSlide(next);
              document.getElementById(`profile-tab-${profileSlides[next].id}`)?.focus();
            }}>{item.label}</button>)}
        </div>
        <div className={`profile-track${dragging ? " is-dragging" : ""}`} ref={profileTrack}
          onPointerDown={startDrag} onPointerMove={moveDrag}
          onPointerUp={event => finishDrag(event)} onPointerCancel={event => finishDrag(event, true)}
          onLostPointerCapture={event => finishDrag(event, true)}>
          <div className="profile-panels" style={{ transform: `translateX(calc(${-slideIndex * 100}% + ${dragOffset}px))` }}>
          {profileSlides.map((item, index) => <div key={item.id} id={`profile-panel-${item.id}`}
            className={`profile-slide profile-slide-${item.id}`} role="tabpanel" aria-labelledby={`profile-tab-${item.id}`} inert={slideIndex !== index}>
            {item.media?.kind === "image" && <div className={`profile-panel-media${item.id === "about" ? " profile-portrait" : ""}`}>
              <Image src={item.media.src} alt={item.media.alt} width={item.media.width} height={item.media.height}
                sizes="(max-width: 600px) 85vw, 22vw" unoptimized priority={index === 0} draggable={false} />
            </div>}
            <div className="profile-copy"><h2>{item.heading}</h2><p className="profile-body">{item.body}</p></div>
          </div>)}
          </div>
        </div>
      </section>
      <footer className="personal-footer" aria-label="Contact Yusuf">
        <p className="eyebrow">Let’s connect</p>
        <div className="contact-links">{profile.contacts.map(item => item.href ? <a href={item.href} key={item.label} target="_blank" rel="noreferrer">{item.label}<ArrowUpRight size={14} aria-hidden="true" /></a> : <span key={item.label} className="contact-pending">{item.label}<small>To be added</small></span>)}</div>
      </footer>
    </aside>
    </div>

    <section className="work-panel" id="work" aria-label="Selected engineering projects">
      <div className="work-toolbar"><h2 className="eyebrow">Selected projects <span className="work-count">/ 0{projects.length}</span></h2>
        {reel.available ? <button type="button" className="reel-control" aria-pressed={!reel.enabled}
          aria-label={reel.enabled ? "Pause automatic scrolling" : "Resume automatic scrolling"} onClick={reel.toggle}>
          {reel.enabled ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
          {reel.enabled ? "Pause scroll" : "Resume scroll"}
        </button> : <span className="eyebrow">Scroll to explore <ArrowDown size={12} aria-hidden="true" /></span>}
      </div>
      <div id="project-gallery" className="project-feed" tabIndex={0} role="region" aria-label="Project gallery">
        {projects.map((project, index) => {
          const media = project.media[0];
          const coverSrc = project.slug === "tree-climbing-robot"
            ? "/media/tree-climbing-robot/tree-climbing-robot.webp"
            : media?.kind === "image" ? media.src : undefined;
          const sketch = media?.kind === "image" ? projectSketches[project.slug] : undefined;
          return <article className="gallery-project" key={project.slug} data-project={project.slug}
            onMouseEnter={reel.pause} onPointerDown={reel.pause} onFocusCapture={reel.pause}>
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
            <div className="project-caption"><div><p className="eyebrow">0{index + 1} / {project.period}</p><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3></div><div><p className="project-summary">{project.summary}</p></div></div>
          </article>;
        })}
        <div className="gallery-end"><p>More of the process.</p><Link href="/projects">Explore all projects <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </div>
    </section>
    <button type="button" className="photo-view-toggle" role="switch" aria-checked={showPhotos}
      aria-label="Show real project photos" aria-controls="project-gallery"
      onClick={() => setShowPhotos(value => !value)}>
      <span className="photo-view-track" aria-hidden="true"><span /></span>
      <span>{showPhotos ? "Real photos" : "AI sketches"}</span>
    </button>
  </div>;
}
