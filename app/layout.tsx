import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Yusuf Adekola | Engineering Portfolio", template: "%s | Yusuf Adekola" },
  description: "Mechanical design, robotics and inclusive engineering by Yusuf Adekola, MEng Robotics and AI student at UCL.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteShell>{children}</SiteShell></body></html>;
}
