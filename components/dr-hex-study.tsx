"use client";

import { useEffect, useRef, useState } from "react";
import type { Media, Project } from "@/content/types";

type BuildFrame = { media: Media; title: string; caption: string; context: string };

function buildFrames(project: Project): BuildFrame[] {
  const stages = [
    { file: "rhex-reference.webp", title: "Finding a starting point", caption: "RHex provided a reference for simple movement over uneven ground.", context: "Boston Dynamics RHex was a reference for the six-legged architecture. This is a separate robot, not our prototype: its curved legs gave us a starting point for thinking about simple locomotion over uneven ground." },
    { file: "cad-views.webp", title: "Turning the concept into CAD", caption: "Packaging the chassis, motors, legs and sensors into one assembly.", context: "I led the final CAD and mechanical layout, bringing the chassis, motors, legs and sensor positions into one buildable assembly. These views show the design we used to work through packaging and assembly decisions." },
    { file: "hexapod-side.webp", title: "Developing the legs", caption: "Compliant legs and a tripod gait shaped through material experiments.", context: "The side view shows the curved, compliant legs. I experimented with printed materials and infill, combined printed parts with PVC reinforcement, and tuned a tripod gait to balance structural support with compliance." },
    { file: "hexapod-isometric.webp", title: "Bringing it together", caption: "The assembled prototype brings locomotion and sensing onto one platform.", context: "The assembled team prototype brought locomotion and sensing onto one platform. Alongside the mechanical build, I collaborated on SLAM and thermal-detection integration and testing, and kept IBM updated as the project developed." },
    { file: "test-scene.webp", title: "Testing around a person", caption: "A controlled scene for exploring the disaster-response concept.", context: "This overhead photograph records a physical test scene with a seated person. It provided a controlled setting for exploring how the robot and its sensing could support the disaster-response concept; it was not a real rescue or field trial." },
    { file: "slam-map.webp", title: "Mapping the scene", caption: "A SLAM view of the robot and the corresponding test surroundings.", context: "The SLAM visualisation corresponds to the preceding test scene. It shows the robot and mapped surroundings, giving us a way to inspect the navigation work alongside the physical setup." },
  ];
  return stages.flatMap(stage => {
    const media = project.media.find(item => item.src.endsWith("/" + stage.file));
    return media ? [{ media, title: stage.title, caption: stage.caption, context: stage.context }] : [];
  });
}

function BuildCarousel({ frames }: { frames: BuildFrame[] }) {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<BuildFrame | null>(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!selected || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!element.open) element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [selected]);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>(".hex-build-card");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? element.clientWidth) + 24), behavior: reduced ? "auto" : "smooth" });
  }

  return <div className="hex-carousel">
    <div className="hex-carousel-controls">
      <p aria-live="polite">{String(position + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}</p>
      <div>
        <button type="button" onClick={() => move(-1)} disabled={position === 0} aria-label="Previous build image">Previous</button>
        <button type="button" onClick={() => move(1)} disabled={position === frames.length - 1} aria-label="Next build image">Next</button>
      </div>
    </div>
    <div className="hex-carousel-track" ref={track} tabIndex={0} role="region" aria-label="DR-Hex build story"
      onScroll={() => {
        const element = track.current;
        if (!element) return;
        const cards = Array.from(element.querySelectorAll<HTMLElement>(".hex-build-card"));
        const left = element.getBoundingClientRect().left;
        let nearest = 0;
        let distance = Infinity;
        cards.forEach((card, index) => {
          const next = Math.abs(card.getBoundingClientRect().left - left);
          if (next < distance) { nearest = index; distance = next; }
        });
        if (element.scrollLeft + element.clientWidth >= element.scrollWidth - 2) nearest = frames.length - 1;
        setPosition(nearest);
      }}>
      {frames.map(frame => <figure className="hex-build-card" key={frame.media.src}>
        <button type="button" className="hex-image-button" aria-label={`Enlarge image: ${frame.title}`}
          onClick={event => { opener.current = event.currentTarget; setSelected(frame); }}>
          <img src={frame.media.src} alt={frame.media.alt} width={frame.media.width} height={frame.media.height} loading="lazy" />
          <span className="hex-enlarge" aria-hidden="true">View photo</span>
        </button>
        <figcaption><h3>{frame.title}</h3><p>{frame.caption}</p>
          <button type="button" className="hex-stage-details" aria-label={`Read more: ${frame.title}`}
            onClick={event => { opener.current = event.currentTarget; setSelected(frame); }}>Learn more</button>
        </figcaption>
      </figure>)}
    </div>
    <dialog className="hex-lightbox" ref={dialog} aria-labelledby="hex-preview-title" aria-describedby="hex-preview-context"
      onCancel={event => { event.preventDefault(); setSelected(null); }}
      onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <button type="button" className="hex-lightbox-close" aria-label="Close photo preview" onClick={() => setSelected(null)} autoFocus>×</button>
      {selected && <figure>
        <img src={selected.media.src} alt={selected.media.alt} width={selected.media.width} height={selected.media.height} />
        <figcaption><h2 id="hex-preview-title">{selected.title}</h2><p id="hex-preview-context">{selected.context}</p></figcaption>
      </figure>}
    </dialog>
  </div>;
}

export function DrHexStudy({ project }: { project: Project }) {
  const hero = project.media.find(media => media.src.endsWith("/hexapod-side.webp")) ?? project.media[0];
  const frames = buildFrames(project);
  return <article className="dr-hex-study">
    <header className="hex-hero">
      <div className="hex-intro">
        <p className="eyebrow hex-enter">UCL × IBM / Disaster-response robotics</p>
        <h1><span className="hex-title">DR HEX</span></h1>
        <p className="hex-summary hex-enter">A six-legged prototype exploring how robots could help responders reach people in unsafe environments.</p>

      </div>
      {hero && <figure className="hex-hero-image"><img src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} loading="eager" /></figure>}
    </header>

    <section id="hex-story" className="hex-disaster-banner" aria-labelledby="hex-need">
      <img className="hex-disaster-image" src="/media/dr-hex/earthquake-response.webp"
        alt="Rescue workers searching the rubble of a collapsed building" width={1920} height={1280} loading="lazy" />
      <div className="hex-disaster-copy">
        <h2 id="hex-need">In the aftermath of an earthquake,<br />every second counts.</h2>
        <p>The first 72 hours are critical for saving lives.</p>
      </div>
    </section>

    <section className="hex-section hex-section-espresso" aria-labelledby="hex-making">
      <div className="hex-section-inner">
        <p className="eyebrow">02 / Making the idea work</p>
        <h2 id="hex-making">A system built through iteration.</h2>
        <p className="hex-section-lead">As part of a UCL industrial project with IBM, our four-person team had five weeks to turn the disaster-response concept into a working prototype. I led the design and mechanical work and acted as the main IBM liaison, connecting decisions in CAD and the workshop with weekly stakeholder updates.</p>
        <div className="hex-engineering-grid">
          <div className="hex-story-card"><h3>Give the robot a body.</h3><p>I led the final CAD, mechanical configuration and assembly, adapting an RHex-inspired architecture to our resources. Printed parts and PVC reinforcement helped us balance compliance with the structural support the chassis needed.</p></div>
          <div className="hex-story-card"><h3>Find a workable gait.</h3><p>I developed the compliant legs through material and infill experiments, then engineered and tuned a tripod gait. The challenge was to make the physical design and motion work together on a platform we could actually build.</p></div>
          <div className="hex-story-card"><h3>Connect movement to purpose.</h3><p>I collaborated on SLAM and thermal-detection integration and testing. The wider team also explored voice-based triage with watsonx.ai and watsonx.data, linking the robot concept to survivor communication and reporting.</p></div>
        </div>
      </div>
    </section>

    {frames.length > 0 && <section className="hex-section" aria-labelledby="hex-build">
      <div className="hex-section-inner">
        <p className="eyebrow">03 / From reference to demonstration</p>
        <h2 id="hex-build">The build, frame by frame.</h2>
        <p className="hex-section-lead">Follow the design decisions, assembled hardware and controlled test setup. Select a photograph to see it in detail.</p>
      </div>
      <BuildCarousel frames={frames} />
    </section>}

    <section className="hex-section hex-section-tinted" aria-labelledby="hex-result">
      <div className="hex-section-inner hex-story-grid">
        <div className="hex-story-card"><p className="eyebrow">04 / The result</p><h2 id="hex-result">An integrated prototype.</h2><p>We built and demonstrated a robotic platform combining locomotion, sensing and a voice-based triage concept. I presented the final system to IBM’s Worldwide Academic Ambassador Community, explaining both the engineering work and the purpose behind it.</p></div>
        <div className="hex-story-card"><h3>What the demonstration showed.</h3><p>The project brought the different parts of the concept together within a short university build. It was a prototype demonstration, with surface-level watsonx integration, rather than a validated disaster-response product. We did not establish quantified field performance.</p><p>For me, the project was an exercise in making mechanical decisions serve a wider system, and communicating those decisions as the build evolved.</p></div>
      </div>
    </section>
    <div className="hex-section-inner"><a className="hex-back" href="/projects">Explore all projects</a></div>
  </article>;
}
