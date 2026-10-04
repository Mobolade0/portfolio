"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";
  const drHex = pathname === "/projects/dr-hex" || pathname === "/projects/dr-hex/";
  const exoskeleton = pathname === "/projects/exoskeleton" || pathname === "/projects/exoskeleton/";
  if (home) return <main id="main" className="home-main">{children}</main>;
  return <div className={drHex ? "dr-hex-shell project-story-shell" : exoskeleton ? "exoskeleton-shell project-story-shell" : undefined}><nav className="site-nav" aria-label="Main navigation"><Link href="/">Yusuf Adekola</Link><Link href="/projects">Projects</Link></nav>
    <main id="main" className="document-main">{children}</main><footer className="site-footer">Yusuf Adekola / Engineering portfolio</footer></div>;
}

