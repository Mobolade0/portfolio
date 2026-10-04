import Image from "next/image";
import Link from "next/link";
import { profileSlides } from "@/content/profile";
export const metadata = { title: "About Yusuf" };
export default function AboutPage() {
  return <article className="about-page"><p className="eyebrow">About Yusuf</p><h1>{profileSlides[0].heading}</h1>
    <div className="about-introduction"><Image src="/media/profile/yusuf-portrait.jpg" alt="Portrait of Yusuf Adekola" width={794} height={758} unoptimized priority />
    <div><p>{profileSlides[0].body}</p></div></div>
    <section id="interests"><h2>{profileSlides[1].heading}</h2><p>{profileSlides[1].body}</p></section>
    <section><h2>My latest experience</h2><p>{profileSlides[2].body}</p>
    <Image src="/media/profile/ibm-showcase.jpg" alt={profileSlides[2].media!.alt} width={1918} height={1280} unoptimized />
    <Link href="/experience/ibm">Learn more about my IBM experience</Link></section><Link href="/projects">Explore my projects</Link></article>;
}
