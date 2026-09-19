import { experiences } from "./experience";
import type { Media } from "./types";

// Only add contact destinations and photographs confirmed by Yusuf.
export const profile = {
  name: "Yusuf Adekola",
  discipline: "MEng Robotics & AI",
  university: "University College London",
  contacts: [
    { label: "Email", href: null },
    { label: "GitHub", href: "https://github.com/Mobolade0" },
    { label: "LinkedIn", href: null },
  ] as { label: string; href: string | null }[],
};

export interface ProfileSlide {
  id: string; label: string; heading: string; body: string; detail: string;
  media: Media | null;
}
export const profileSlides: ProfileSlide[] = [
  {
    id: "about", label: "About me", heading: "Robotics with a physical purpose.",
    body: "I'm Yusuf, a Robotics and AI student at UCL. My interests bring together mechanical design, hands-on prototyping and intelligent systems.",
    detail: "Design / Build / Learn", media: null,
  },
  {
    id: "experience", label: "Experience", heading: "From the workshop to the wider team.",
    body: "Mechanical leadership with Team MarshGazers. Design and integration on DR-Hex. Agentic product development at IBM Consulting.",
    detail: experiences[0].title, media: null,
  },
  {
    id: "interests", label: "Interests", heading: "Engineering around people.",
    body: "I'm interested in physical systems that make everyday life more accessible, combining inclusive engineering with purposeful robotics.",
    detail: "Mechanical design / Robotics / Inclusion", media: null,
  },
];
