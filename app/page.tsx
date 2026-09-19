import Link from "next/link";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";
import { ProjectCard } from "@/components/project-card";
export default function Home() {
  return <><header className="intro"><p className="metadata">MEng Robotics and AI / UCL</p>
    <h1>Yusuf Adekola</h1><p className="lead">Mechanical design, robotics and inclusive engineering.</p></header>
    <section><h2>Physical builds</h2><div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
    <Link href="/projects">All projects</Link></section>
    <section><h2>Experience</h2>{experiences.map(experience => <article key={experience.id} className="experience">
      <p className="metadata">{experience.organisation} / {experience.period}</p><h3>{experience.title}</h3>
      <p>{experience.summary}</p><ul>{experience.contributions.map(item => <li key={item}>{item}</li>)}</ul>
      <h4>Team outcome</h4>{experience.teamOutcomes.map(item => <p key={item}>{item}</p>)}
    </article>)}</section></>;
}
