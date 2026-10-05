"use client";
import { useRef, type ReactNode } from "react";
import { useScrollReveals } from "./use-scroll-reveals";
export function RevealPage({ children, className }: {children: ReactNode; className: string}) {
 const root = useRef<HTMLElement>(null); useScrollReveals(root);
 return <article ref={root} className={`${className} project-story-study`}>{children}</article>;
}
