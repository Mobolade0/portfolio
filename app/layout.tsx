import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Yusuf Adekola | Engineering Portfolio", template: "%s | Yusuf Adekola" },
  description: "Mechanical design, robotics and inclusive engineering by Yusuf Adekola, MEng Robotics and AI student at UCL.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>
    <nav aria-label="Main navigation"><Link href="/">Yusuf Adekola</Link><Link href="/projects">Projects</Link></nav>
    <main id="main">{children}</main><footer>Yusuf Adekola / Engineering portfolio</footer></body></html>;
}
