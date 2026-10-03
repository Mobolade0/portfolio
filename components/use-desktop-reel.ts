"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** A gentle page reel that yields to intentional pointer, keyboard and wheel input. */
export function useDesktopReel() {
  const [enabled, setEnabled] = useState(true);
  const [available, setAvailable] = useState(false);
  const pausedUntil = useRef(0);
  const pause = useCallback(() => { pausedUntil.current = performance.now() + 8000; }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1000px) and (min-height: 700px) and (hover: hover)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAvailable(desktop.matches && !reduced.matches);
    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => { desktop.removeEventListener("change", update); reduced.removeEventListener("change", update); };
  }, []);

  useEffect(() => {
    if (!available || !enabled) return;
    let frame = 0;
    let previous = 0;
    let position = window.scrollY;
    let speed = 0;
    pausedUntil.current = performance.now() + 1800;
    const step = (now: number) => {
      const elapsed = previous ? Math.min(now - previous, 64) : 0;
      previous = now;
      const keyboardReading = document.activeElement?.closest(".project-feed, .profile-carousel");
      if (document.hidden || now < pausedUntil.current || keyboardReading || document.body.style.overflow === "hidden") {
        position = window.scrollY;
        speed = 0;
      } else {
        // Keep fractional progress: rounding each tiny scrollBy call can stall a slow reel.
        if (Math.abs(window.scrollY - position) > 2) position = window.scrollY;
        speed += (0.018 - speed) * (1 - Math.exp(-elapsed / 1400));
        const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        position = Math.min(maximum, position + elapsed * speed);
        window.scrollTo({ top: position, behavior: "instant" });
        if (position >= maximum) return;
      }
      frame = requestAnimationFrame(step);
    };
    const key = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) pause();
    };
    window.addEventListener("wheel", pause, { passive: true });
    window.addEventListener("touchstart", pause, { passive: true });
    window.addEventListener("keydown", key);
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", pause);
      window.removeEventListener("touchstart", pause);
      window.removeEventListener("keydown", key);
    };
  }, [available, enabled, pause]);

  return { available, enabled, pause, toggle: () => setEnabled(value => !value) };
}
