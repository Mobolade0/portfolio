"use client";

import { useEffect, type RefObject } from "react";

export function useScrollReveals(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      const targets = element.querySelectorAll<HTMLElement>("[data-reveal]");
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight * .95 && rect.bottom > 0) target.dataset.visible = "true";
        observer?.observe(target);
      });
      element.classList.add("motion-ready");
    }
    const urgency = element.querySelector<HTMLElement>(".hex-urgency");
    let frame = 0;
    const updateUrgency = () => {
      frame = 0;
      if (!urgency) return;
      const rect = urgency.getBoundingClientRect();
      // Turn red while the line is still on screen, and reverse when scrolling back up.
      urgency.classList.toggle("is-urgent", rect.top + rect.height / 2 < window.innerHeight * .65);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateUrgency); };
    if (urgency) {
      updateUrgency();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }
    return () => {
      observer?.disconnect();
      element.classList.remove("motion-ready");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [root]);
}
