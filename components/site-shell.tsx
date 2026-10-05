"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeNavigation } from "./home-navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (["localhost", "127.0.0.1"].includes(window.location.hostname)) return;

    function hardNavigate(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const url = new URL(anchor.href, window.location.href);
      if (!["http:", "https:"].includes(url.protocol) || url.origin !== window.location.origin) return;

      const samePage =
        url.pathname === window.location.pathname &&
        url.search === window.location.search;

      if (samePage && url.hash) return;

      event.preventDefault();
      event.stopPropagation();
      window.location.assign(url.href);
    }

    document.addEventListener("click", hardNavigate, true);
    return () => document.removeEventListener("click", hardNavigate, true);
  }, []);

  const home = pathname === "/";
  const drHex = pathname === "/projects/dr-hex" || pathname === "/projects/dr-hex/";
  const exoskeleton = pathname === "/projects/exoskeleton" || pathname === "/projects/exoskeleton/";
  const marsh = pathname === "/marshgazers" || pathname === "/marshgazers/" || pathname.startsWith("/projects/olympus-");
  const tree = pathname.startsWith("/projects/tree-climbing-robot");
  const fullPage = ["/projects", "/about", "/contact"].includes(pathname.replace(/\/$/, ""));
  const personal = pathname === "/about" || pathname === "/about/" || pathname === "/contact" || pathname === "/contact/" || pathname.startsWith("/experience/");

  if (home) return <main id="main" className="home-main">{children}</main>;

  return <div className={drHex ? "dr-hex-shell project-story-shell" : exoskeleton ? "exoskeleton-shell project-story-shell" : marsh ? "marshgazers-shell project-story-shell" : tree ? "tree-shell project-story-shell" : personal ? "personal-story-shell project-story-shell" : fullPage ? "full-page-shell project-story-shell" : undefined}><header className="site-nav"><Link className="site-name" href="/">Yusuf Adekola</Link><HomeNavigation /></header>
    <main id="main" className="document-main">{children}</main><footer className="site-footer"><p>Want to know more? Let’s connect.</p><div className="contact-links"><a href="mailto:yusufmoadekola@gmail.com">Email</a><a href="https://www.linkedin.com/in/yusuf-adekola/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Mobolade0" target="_blank" rel="noreferrer">GitHub</a></div></footer></div>;
}
