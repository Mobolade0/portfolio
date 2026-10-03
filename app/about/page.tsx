import Image from "next/image";
import Link from "next/link";
import { profileSlides } from "@/content/profile";
export const metadata = { title: "About Yusuf" };
export default function AboutPage() {
  return <article className="about-page"><p className="eyebrow">About Yusuf</p><h1>Engineering with a purpose.</h1>
    <div className="about-introduction"><Image src="/media/profile/yusuf-portrait.jpg" alt="Portrait of Yusuf Adekola" width={794} height={758} unoptimized priority />
    <div><p>{profileSlides[0].body}</p><p>{profileSlides[1].body}</p></div></div>
    <section><h2>My latest experience</h2><p>{profileSlides[2].body}</p>
    <Image src="/media/profile/ibm-showcase.jpg" alt={profileSlides[2].media!.alt} width={1918} height={1280} unoptimized />
    </section><Link href="/projects">Explore my projects</Link></article>;
}
