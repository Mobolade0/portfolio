"use client";

import { useEffect, useId, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Media } from "@/content/types";

export type BuildFrame = { media: Media; title: string; caption: string; context: string };

export function BuildCarousel({ frames, label }: { frames: BuildFrame[]; label: string }) {
  const previewId = useId();
  const [carouselViewport, carousel] = useEmblaCarousel({ align: "center", loop: true, duration: 30 });
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

  useEffect(() => {
    if (!carousel) return;
    const update = () => setPosition(carousel.selectedScrollSnap());
    update();
    carousel.on("select", update).on("reInit", update);
    return () => { carousel.off("select", update).off("reInit", update); };
  }, [carousel]);

  function move(direction: number) {
    const jump = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!carousel || frames.length < 2) return;
    if (direction < 0) {
      if (carousel.canScrollPrev()) carousel.scrollPrev(jump);
      else carousel.scrollTo(frames.length - 1, jump);
    } else {
      if (carousel.canScrollNext()) carousel.scrollNext(jump);
      else carousel.scrollTo(0, jump);
    }
  }

  return <div className="hex-carousel">
    <div className="hex-carousel-controls">
      <p aria-live="polite" aria-atomic="true">{String(position + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}</p>
      <button type="button" className="hex-carousel-arrow hex-carousel-prev" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft aria-hidden="true" /></button>
      <button type="button" className="hex-carousel-arrow hex-carousel-next" onClick={() => move(1)} aria-label="Next image"><ArrowRight aria-hidden="true" /></button>
    </div>
    <div className="hex-carousel-track" ref={carouselViewport} tabIndex={0} role="region" aria-roledescription="carousel" aria-label={label}
      onKeyDown={event => {
        if (event.target !== event.currentTarget || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
        event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1);
      }}>
      <div className="hex-carousel-container">
      {frames.map((frame, index) => <div className="hex-carousel-slide" key={frame.media.src} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${frames.length}: ${frame.title}`}>
      <figure className={`hex-build-card${index === position ? " is-active" : ""}`}>
        <button type="button" className="hex-image-button" aria-label={`Enlarge image: ${frame.title}`}
          onClick={event => { opener.current = event.currentTarget; setSelected(frame); }}>
          <img src={frame.media.src} alt={frame.media.alt} width={frame.media.width} height={frame.media.height} loading="lazy" draggable={false} />
        </button>
        <figcaption><h3>{frame.title}</h3><p>{frame.caption}</p>
          <button type="button" className="hex-stage-details" aria-label={`Read more: ${frame.title}`}
            onClick={event => { opener.current = event.currentTarget; setSelected(frame); }}>Learn more</button>
        </figcaption>
      </figure></div>)}
      </div>
    </div>
    <dialog className="hex-lightbox" ref={dialog} aria-labelledby={`${previewId}-title`} aria-describedby={`${previewId}-context`}
      onCancel={event => { event.preventDefault(); setSelected(null); }}
      onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <button type="button" className="hex-lightbox-close" aria-label="Close photo preview" onClick={() => setSelected(null)} autoFocus>×</button>
      {selected && <figure>
        <img src={selected.media.src} alt={selected.media.alt} width={selected.media.width} height={selected.media.height} />
        <figcaption><h2 id={`${previewId}-title`}>{selected.title}</h2><p id={`${previewId}-context`}>{selected.context}</p></figcaption>
      </figure>}
    </dialog>
  </div>;
}

