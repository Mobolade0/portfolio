import { profile } from "@/content/profile";
import { ContactForm } from "@/components/contact-form";
export const metadata = { title: "Contact Yusuf" };
export default function ContactPage() {
  return <article className="connect-page"><header><p className="eyebrow">Contact</p><h1>Let’s connect.</h1><p>Have a project in mind, an opportunity to share, or a question about something I’ve built? I’d love to hear from you.</p></header><div className="connect-grid"><ContactForm/><aside><h2>Find me here.</h2>{profile.contacts.map(item=><a key={item.label} href={item.href} target={item.label==="Email"?undefined:"_blank"} rel={item.label==="Email"?undefined:"noreferrer"}>{item.label} ↗</a>)}</aside></div></article>;
}
