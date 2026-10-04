"use client";
import { useState, type FormEvent } from "react";
export function createContactDraft(name:string,email:string,subject:string,message:string) {
  return `mailto:yusufmoadekola@gmail.com?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()}\nReply to: ${email.trim()}`)}`;
}
export function ContactForm() {
  const [draftReady,setDraftReady]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    window.location.href=createContactDraft(String(data.get("name")),String(data.get("email")),String(data.get("subject")),String(data.get("message")));
    setDraftReady(true);
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="contact-form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100}/></label><label>Your email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label></div>
    <label>What would you like to discuss?<input name="subject" required maxLength={150} placeholder="A project, an opportunity, or a hello"/></label>
    <label>Your message<textarea name="message" required rows={6} maxLength={3000}/></label>
    <p className="contact-form-note">This opens your email app with your message ready to send.</p><button type="submit">Open email draft ↗</button>
    {draftReady && <p role="status">Your draft is ready in your email app. If it hasn’t opened, email <a href="mailto:yusufmoadekola@gmail.com">yusufmoadekola@gmail.com</a> directly.</p>}
  </form>;
}
