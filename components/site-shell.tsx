"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function SiteShell({ children }: { children: React.ReactNode }) {
  const home = usePathname() === "/";
  if (home) return <main id="main" className="home-main">{children}</main>;
  return <><nav className="site-nav" aria-label="Main navigation"><Link href="/">Yusuf Adekola</Link><Link href="/projects">Projects</Link></nav>
    <main id="main" className="document-main">{children}</main><footer className="site-footer">Yusuf Adekola / Engineering portfolio</footer></>;
}
