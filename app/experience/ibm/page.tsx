import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/content/experience";
import { profileSlides } from "@/content/profile";

export const metadata = { title: "IBM Consulting experience | Yusuf Adekola" };
export default function IBMExperiencePage() {
  const experience = experiences.find(item => item.id === "ibm-consulting-2026")!;
  return <article className="ibm-experience-page">
    <header className="ibm-experience-intro"><p className="eyebrow">Recent work experience / {experience.period}</p>
      <h1>Product design with IBM Consulting.</h1><p>{experience.title}</p><p className="lead">{profileSlides[2].body}</p>
    </header>
    <Image src="/media/profile/ibm-showcase.jpg" alt={profileSlides[2].media!.alt} width={1918} height={1280} unoptimized priority />
    <section><h2>Building Playmaker.</h2><p>{experience.summary}</p>
      <ul>{experience.contributions.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <section><h2>What we produced.</h2>{experience.teamOutcomes.map(item => <p key={item}>{item}</p>)}</section>
    <Link href="/">Back to my portfolio</Link>
  </article>;
}
