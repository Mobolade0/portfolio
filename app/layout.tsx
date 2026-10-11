import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Yusuf Adekola | Engineering Portfolio", template: "%s | Yusuf Adekola" },
  description: "Robotics, AI and purposeful product design by Yusuf Adekola, MEng Robotics and Artificial Intelligence student at UCL.",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon-32.png", type: "image/png", sizes: "32x32" }], shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteShell>{children}</SiteShell></body></html>;
}
