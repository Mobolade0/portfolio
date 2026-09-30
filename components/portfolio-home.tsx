"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
  const [showPhotos, setShowPhotos] = useState(false);
  const contact = useRef<HTMLElement>(null);
  const slide = profileSlides[slideIndex];

  function showSlide(index: number) {
    setSlideIndex(index);
    if (!window.matchMedia("(min-width: 1000px) and (min-height: 700px)").matches) {
      document.getElementById("profile")?.scrollIntoView({ block: "start" });
    }
  }
  function showWork() {
    document.getElementById("work")?.scrollIntoView({ block: "start" });
  }

  return <div className={`portfolio-home${showPhotos ? " show-photos" : ""}`}>
      <nav className="home-navigation" aria-label="Main navigation">
        <Button variant="ghost" onClick={showWork}>Work</Button>
        <Button variant="ghost" onClick={() => showSlide(0)}>About</Button>
        <Button variant="ghost" onClick={() => showSlide(1)}>Experience</Button>
        <Button variant="ghost" onClick={() => { contact.current?.scrollIntoView({ block: "nearest" }); contact.current?.focus(); }}>Contact</Button>
      </nav>
    <div className="home-left">
    <header className="home-header">
      <div className="identity"><h1>{profile.name}</h1><p className="eyebrow">{profile.discipline} <span>/</span> UCL</p></div>

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
        <span className="eyebrow">Scroll to explore <ArrowDown size={12} aria-hidden="true" /></span>
      </div>
      <div id="project-gallery" className="project-feed" tabIndex={0} role="region" aria-label="Project gallery">
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
    </section>
    <button type="button" className="photo-view-toggle" role="switch" aria-checked={showPhotos}
      aria-label="Show real project photos" aria-controls="project-gallery"
      onClick={() => setShowPhotos(value => !value)}>
      <span className="photo-view-track" aria-hidden="true"><span /></span>
      <span>{showPhotos ? "Real photos" : "Sketches"}</span>
    </button>
  </div>;
}
