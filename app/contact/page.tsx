import { profile } from "@/content/profile";
export const metadata = { title: "Contact Yusuf" };
export default function ContactPage() {
  return <article className="contact-page"><p className="eyebrow">Contact</p><h1>Let's connect.</h1>
    <p>Get in touch about robotics, mechanical design or a project we could work on together.</p>
    <div className="contact-page-links">{profile.contacts.map(item => <a key={item.label} href={item.href}
      target={item.label === "Email" ? undefined : "_blank"} rel={item.label === "Email" ? undefined : "noreferrer"}>
      <h2>{item.label}</h2><p>{item.label === "Email" ? "yusufmoadekola@gmail.com" : item.label === "GitHub" ? "Mobolade0" : "Yusuf Adekola"}</p></a>)}</div></article>;
}
