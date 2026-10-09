"use client";

import { useRef } from "react";
import { BuildCarousel, type BuildFrame } from "./build-carousel";
import { useScrollReveals } from "./use-scroll-reveals";
import type { Project } from "@/content/types";

function exoskeletonFrames(project: Project): BuildFrame[] {
  const stages = [
    { file: "movement-phases.webp", title: "Start with the movement", caption: "A reference for the stages of rising from a chair.", context: "This reference breaks sit-to-stand into phases, helping frame where assistance might be useful. Understanding the movement came before deciding how a wearable should act on it; the illustration captures that research starting point." },
    { file: "sit-to-stand.webp", title: "Understand the transition", caption: "Looking at posture and the sequence of the movement.", context: "The annotated sit-to-stand reference helped us consider how posture and joint movement change through the transition. The aim was to connect the user's task to practical design requirements, rather than begin with an actuator and look for a use for it." },
    { file: "leg-muscles.webp", title: "Look beneath the surface", caption: "Anatomy as a starting point for wearable placement.", context: "This anatomical reference supported research into lower-limb movement and device positioning. My research work connected existing evidence, physical constraints and user needs to requirements for the team." },
    { file: "quadriceps.webp", title: "Focus around the knee", caption: "A reference for the quadriceps and patella.", context: "The quadriceps and patella reference helped ground discussions of knee extension and where the wearable would sit. A useful assistive mechanism has to respect the body it is attached to; this image records part of that research." },
    { file: "model-visualisation.webp", title: "Imagine it on the body", caption: "The concept brought into a wearable arrangement.", context: "The team visualisation shows how the wearable was arranged around the legs and torso. It connects the early research to a physical layout, making placement, attachment and the relationship between components easier to discuss." },
    { file: "adjustable-thigh.webp", title: "Make room for adjustment", caption: "An adjustable thigh bracket in CAD.", context: "This CAD view shows the adjustable thigh bracket. Adjustment and the device-body interface were important considerations in the team's mechanical work: the hardware needed to attach to a person while providing a route for the actuator's pulling force." },
    { file: "thigh-bracket.webp", title: "Shape the upper attachment", caption: "The thigh bracket as a mechanical component.", context: "The thigh bracket CAD render shows one of the wearable's upper attachment components. I worked within the mechanical team, connecting research and requirements to the project's engineering direction. The component belongs to the wider team design." },
    { file: "calf-bracket.webp", title: "Complete the lower attachment", caption: "The calf bracket and the other end of the force path.", context: "This render documents the lower attachment bracket. Alongside the thigh bracket, it helps explain the physical path between the wearable and the string-driven mechanism. Attachment feasibility and routing were central questions in the team's development plan." },
    { file: "knee-cap.webp", title: "Work around the joint", caption: "A closer look at the knee-area component.", context: "The knee-area CAD component records another part of the team's wearable layout. Bringing the design around the joint meant considering the space available, the route of the strings and the movement the device was intended to support." },
    { file: "routing.webp", title: "Give the pull a path", caption: "The string route between the thigh and calf brackets.", context: "The diagram illustrates the proposed string path around the knee and between the attachment brackets. A twisted string actuator generates a pulling motion as its strings shorten. Routing and attachment geometry determine how that pull is transmitted through the wearable." },
    { file: "wearable-front.webp", title: "Bring the wearable together", caption: "The assembled prototype viewed from the front.", context: "The front photograph documents the team prototype on a seated wearer, with body-mounted hardware and an external power supply. It shows how the body attachments, hardware and power setup were brought together into a wearable assembly." },
    { file: "wearable-side.webp", title: "Check the side profile", caption: "The assembled wearable from another angle.", context: "The side view provides a different perspective on the wearable's attachments and hardware placement. Looking at the assembly from several angles helps explain its packaging and its relationship to the leg, beyond what the CAD views can show." },
    { file: "wearable-top.webp", title: "Inspect the packaging", caption: "The thigh-mounted hardware seen from above.", context: "The top view documents the hardware around the thigh. It provides another piece of the assembly story, showing how the physical components were packaged around the leg." },
    { file: "emg-test.webp", title: "Explore sensing the movement", caption: "The EMG setup on the thigh during testing.", context: "This photograph shows the EMG sensing setup on the thigh. It records the team's investigation of muscle activity alongside the wearable work. The setup connects the sensing work to the question of when the wearer needs assistance. Evaluating that relationship means looking at the signals alongside the movement and the behaviour of the actuator." },
  ];
  return stages.flatMap(stage => {
    const media = project.media.find(item => item.src.endsWith("/" + stage.file));
    return media ? [{ media, title: stage.title, caption: stage.caption, context: stage.context }] : [];
  });
}

export function ExoskeletonStudy({ project }: { project: Project }) {
  const study = useRef<HTMLElement>(null);
  useScrollReveals(study);
  const hero = project.media.find(item => item.src.endsWith("/wearable-side.webp"));
  const routing = project.media.find(item => item.src.endsWith("/routing.webp"));
  const frames = exoskeletonFrames(project);

  return <article className="exoskeleton-study project-story-study" ref={study}>
    <header className="hex-hero">
      <div className="hex-intro">
        <p className="eyebrow hex-enter">UCL / Third Year Group Project</p>
        <h1><span className="hex-title">Assistive Exoskeleton</span></h1>
        <p className="hex-summary hex-enter">Exploring how twisted string actuation could help with one everyday movement: getting up from a chair.</p>
      </div>
      {hero && <figure className="hex-hero-image"><img src="/media/exoskeleton/wearable-side-opening.jpg" alt="Side profile of the seated wearable prototype, showing the thigh and calf brackets and string route" width={1200} height={1278} loading="eager" /></figure>}
    </header>

    <section className="hex-disaster-banner exo-human-banner" aria-labelledby="exo-purpose">
      <img className="hex-disaster-image" src="/media/exoskeleton/independence-colour.webp" width={1024} height={512}
        alt="An older man with a walking stick being supported by two women at home" loading="lazy" />
      <div className="hex-disaster-copy" data-reveal>
        <h2 id="exo-purpose">Standing up.<br />Holding on to independence.</h2>
        <p>Could a wearable lend a hand with an everyday movement?</p>
      </div>
    </section>

    <section className="hex-section" aria-labelledby="exo-question">
      <div className="hex-section-inner">
        <div data-reveal><p className="eyebrow">01 / Begin with the person</p>
          <h2 id="exo-question">An everyday movement. A design challenge.</h2>
          <p className="hex-section-lead">Our third-year UCL group project explored sit-to-stand assistance from October 2025 to June 2026. The aim was a wearable that could support the transition from sitting to standing, with older adults and everyday independence at the centre of the idea.</p>
        </div>
        <div className="hex-story-grid">
          <div className="hex-story-card" data-reveal><h3>Start with a reason to build.</h3><p>My contribution began with researching existing assistive products, user needs and use cases. I compared approaches through the literature, considered physical constraints and translated that evidence into requirements and evaluation benchmarks.</p><p>I maintained a structured evidence base so the team could trace design decisions back to the problem we were trying to solve.</p></div>
          <div className="hex-story-card hex-story-brief" data-reveal style={{ transitionDelay: "180ms" }}><h3>Connect the body to the mechanism.</h3><p>I worked in the mechanical team, alongside a separate simulation team. The project brought together wearable placement, attachment, string routing and sensing, with the aim of making the actuator's pull useful during the movement.</p><p>The research had to shape the build: where the device would sit, how force would reach the leg, and what meaningful assistance would need to look like.</p></div>
        </div>
      </div>
    </section>

    <section className="hex-section hex-section-espresso" aria-labelledby="exo-mechanism">
      <div className="hex-section-inner">
        <div className="exo-mechanism-grid">
          <div data-reveal><p className="eyebrow">02 / The mechanism</p>
            <h2 id="exo-mechanism">Small strings.<br />A different kind of pull.</h2>
            <p className="hex-section-lead">A twisted string actuator, or TSA, turns a motor's rotation into a pulling motion. As the strings twist together, their effective length shortens. The idea was to route that pull through a wearable to explore assistance around the knee.</p>
            <p>The mechanism gave us a question to investigate: how could its contraction, placement and timing work together during sit-to-stand?</p>
            <a className="exo-research-link" href="https://iris.kaist.ac.kr/publication/rotational-twisted-string-actuator-with-linearized-output-mathematical-model-and-experimental-evaluation/" target="_blank" rel="noreferrer">Read about twisted string actuation</a>
          </div>
          {routing && <figure data-reveal><img src={routing.src} alt={routing.alt} width={routing.width} height={routing.height} loading="lazy" /><figcaption>The proposed string path around the knee.</figcaption></figure>}
        </div>
        <div className="exo-tsa-steps">
          <div className="hex-story-card" data-reveal><p className="eyebrow">01 / Rotate</p><h3>The motor turns.</h3><p>Motor rotation twists the strings, providing the input to the mechanism.</p></div>
          <div className="hex-story-card" data-reveal style={{ transitionDelay: "180ms" }}><p className="eyebrow">02 / Contract</p><h3>The strings shorten.</h3><p>Twisting changes the bundle's geometry and reduces its effective length, creating a pulling motion.</p></div>
          <div className="hex-story-card" data-reveal style={{ transitionDelay: "360ms" }}><p className="eyebrow">03 / Transmit</p><h3>The wearable carries the pull.</h3><p>The brackets and string route connect the mechanism to the body. Their geometry is part of the assistive design, alongside the actuator itself.</p></div>
        </div>
      </div>
    </section>

    {frames.length > 0 && <section className="hex-section hex-build-section" aria-labelledby="exo-build">
      <div className="hex-section-inner hex-build-introduction" data-reveal>
        <p className="eyebrow">03 / From movement to wearable</p>
        <h2 id="exo-build">The build, frame by frame.</h2>
        <p className="hex-section-lead">Follow the movement references, team CAD, string routing, assembled wearable and sensing setup. Select a frame for a larger view and the story behind it.</p>
      </div>
      <BuildCarousel frames={frames} label="Exoskeleton design and build story" />
    </section>}

    <section className="hex-section hex-section-tinted" aria-labelledby="exo-result">
      <div className="hex-section-inner hex-story-grid">
        <div className="hex-story-card" data-reveal><p className="eyebrow">04 / Bringing it together</p><h2 id="exo-result">A prototype to learn from.</h2><p>The team brought body-mounted brackets, string routing and sensing work into a wearable research prototype. The CAD and assembly photographs show how an assistive idea became a physical system.</p><p>The next question is how consistently that system can deliver useful assistance: measuring force, timing, comfort and repeatability during the movement.</p></div>
        <div className="hex-story-card" data-reveal style={{ transitionDelay: "180ms" }}><h3>Keep the purpose in view.</h3><p>For me, the project connected research and requirements with the practical questions of building something a person would wear. A mechanism is only part of that story. Its value depends on how well the whole product responds to the movement and the person using it.</p><p>The work reinforced the need to evaluate assistance as a whole: the pull of the mechanism, its timing, the comfort of the attachments and the experience of the wearer.</p></div>
      </div>
    </section>
    <div className="hex-section-inner"><a className="hex-back" href="/projects">Explore all projects</a></div>
  </article>;
}
