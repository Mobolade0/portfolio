"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeNavigation } from "./home-navigation";
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";
  const drHex = pathname === "/projects/dr-hex" || pathname === "/projects/dr-hex/";
  const exoskeleton = pathname === "/projects/exoskeleton" || pathname === "/projects/exoskeleton/";
  const marsh = pathname === "/marshgazers" || pathname === "/marshgazers/" || pathname.startsWith("/projects/olympus-");
  const tree = pathname.startsWith("/projects/tree-climbing-robot");
  const fullPage = ["/projects", "/about", "/contact"].includes(pathname.replace(/\/$/, ""));
  if (home) return <main id="main" className="home-main">{children}</main>;
  return <div className={drHex ? "dr-hex-shell project-story-shell" : exoskeleton ? "exoskeleton-shell project-story-shell" : marsh ? "marshgazers-shell project-story-shell" : tree ? "tree-shell project-story-shell" : fullPage ? "full-page-shell project-story-shell" : undefined}><header className="site-nav"><Link className="site-name" href="/">Yusuf Adekola</Link><HomeNavigation /></header>
    <main id="main" className="document-main">{children}</main><footer className="site-footer"><p>Want to know more? Let’s connect.</p><div className="contact-links"><a href="mailto:yusufmoadekola@gmail.com">Email</a><a href="https://www.linkedin.com/in/yusuf-adekola/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Mobolade0" target="_blank" rel="noreferrer">GitHub</a></div></footer></div>;
}

