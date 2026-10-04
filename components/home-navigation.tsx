"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function HomeNavigation({ onExperience }: { onExperience?: () => void }) {
  const [open, setOpen] = useState(false);
  const navigation = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!navigation.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const resize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  return <nav className="home-navigation" aria-label="Main navigation" ref={navigation}>
    <button className="home-menu-toggle" type="button" ref={toggle}
      aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}
      aria-controls="home-navigation-links" onClick={() => setOpen(value => !value)}>
      {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
    </button>
    <div className={`home-navigation-links${open ? " is-open" : ""}`} id="home-navigation-links" onClick={() => setOpen(false)}>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      {onExperience ? <button type="button" onClick={onExperience}>Experience</button> : <Link href="/experience/ibm">Experience</Link>}
      <Link href="/contact">Contact</Link>
    </div>
  </nav>;
}
