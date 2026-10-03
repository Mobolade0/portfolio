import type { Media } from "./types";

export const profile = {
  name: "Yusuf Adekola",
  discipline: "MEng Robotics & AI",
  university: "University College London",
  contacts: [
    { label: "Email", href: "mailto:yusufmoadekola@gmail.com" },
    { label: "GitHub", href: "https://github.com/Mobolade0" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yusuf-adekola/" },
  ],
};

export interface ProfileSlide {
  id: string; label: string; heading: string; body: string; detail: string;
  media: Media | null;
}
export const profileSlides: ProfileSlide[] = [
  {
    id: "about", label: "About", heading: "Engineering with a purpose.",
    body: "I'm Yusuf, a final-year Robotics and Artificial Intelligence student at UCL and an Aspire Award Scholar through the Department of Computer Science in partnership with the Windsor Fellowship. As an active ambassador for UCL East and UCL Computer Science, I'm interested in practical, product-driven design across physical and digital systems.",
    detail: "UCL / Aspire Award Scholar",
    media: { kind: "image", src: "/media/profile/yusuf-portrait.jpg", alt: "Portrait of Yusuf Adekola", width: 794, height: 758 },
  },
  {
    id: "interests", label: "Interests", heading: "From an idea to something useful.",
    body: "I aspire to work across robotics, mechatronics, mechanics and design, bringing together hands-on prototyping and intelligent systems. I'm especially interested in engineering that improves people's independence and everyday lives. I enjoy leading a project, collaborating across disciplines and working with a team to turn an idea into a practical result.",
    detail: "Robotics / Mechatronics / Mechanical design", media: null,
  },
  {
    id: "ibm", label: "IBM", heading: "Product design with the wider team.",
    body: "During my summer internship with IBM Consulting, I worked in a five-person team on Playmaker, an agentic product development toolkit for sport and entertainment. We brought together AI, automation and human review across research, design, development and testing, and demonstrated the toolkit through a proof of concept for the official England Football App.",
    detail: "Data & Insights Consultant Intern / June to September 2026",
    media: { kind: "image", src: "/media/profile/ibm-showcase.jpg", alt: "Yusuf presenting the product development workflow at the IBM internship showcase", width: 1918, height: 1280 },
  },
];
