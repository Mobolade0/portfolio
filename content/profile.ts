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
  id: string; label: string; heading: string; body: string; href: string;
  media: Media | null;
}
export const profileSlides: ProfileSlide[] = [
  {
    id: "about", label: "Who am I", href: "/about", heading: "Robotics, mechatronics and purposeful design.",
    body: "I'm a final-year Robotics and Artificial Intelligence student at UCL and an Aspire Award Scholar through UCL Computer Science and the Windsor Fellowship. From mechanical leadership on Mars rovers to an IBM-partnered disaster-response robot, my work connects hands-on engineering with intelligent systems. I'm interested in practical design that serves people, and I share that interest through teaching, mentoring and outreach at UCL.",
    media: { kind: "image", src: "/media/profile/yusuf-portrait.jpg", alt: "Portrait of Yusuf Adekola", width: 794, height: 758 },
  },
  {
    id: "interests", label: "My interests", href: "/about#interests", heading: "From an idea to something useful.",
    body: "I aspire to work across robotics, mechatronics, mechanics and design, bringing together hands-on prototyping and intelligent systems. I'm especially interested in engineering that improves people's independence and everyday lives. I enjoy leading a project, collaborating across disciplines and working with a team to turn an idea into a practical result.",
    media: null,
  },
  {
    id: "ibm", label: "Recent work experience", href: "/experience/ibm", heading: "Product design with the wider team.",
    body: "During my summer internship with IBM Consulting, I worked in a five-person team on Playmaker, an agentic product development toolkit for sport and entertainment. We brought together AI, automation and human review across research, design, development and testing, and demonstrated the toolkit through a proof of concept for the official England Football App.",
    media: { kind: "image", src: "/media/profile/ibm-showcase.jpg", alt: "Yusuf presenting the product development workflow at the IBM internship showcase", width: 1918, height: 1280 },
  },
];
