"use client";
import { useState, type FormEvent } from "react";
export function QuoteForm({ email }: { email: string }) {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ["HF Web Studio — Project inquiry", "", ...Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`)].join("\n");
    setDraft(body);
    setStatus("Your brief is ready. Open it in your email app, or copy it into your preferred email service. Review and send to request your quote.");
  }
  async function copyDraft() {
    try { await navigator.clipboard.writeText(draft); setStatus("Brief copied. Paste it into an email to " + email + ". Nothing has been sent automatically."); }
    catch { setStatus("Please select and copy the brief below, then email it to " + email + "."); }
  }
  return <form className="quote-form" onSubmit={handleSubmit} onChange={() => { setDraft(""); setStatus(""); }}>
    <div className="form-row"><label>Your name<input name="Name" autoComplete="name" required maxLength={100} placeholder="Jane Smith"/></label><label>Email address<input type="email" name="Email" autoComplete="email" required maxLength={200} placeholder="jane@yourbusiness.com"/></label></div>
    <div className="form-row"><label>Business name<input name="Business" autoComplete="organization" required maxLength={150} placeholder="Your business"/></label><label>Industry<select name="Industry" required defaultValue=""><option value="" disabled>Select your industry</option><option>Restaurants & cafés</option><option>Home services</option><option>Beauty & wellness</option><option>Professional services</option><option>Other</option></select></label></div>
    <label>What would you like to build?<textarea name="Project" required minLength={10} maxLength={3000} rows={3} placeholder="Tell us about your business, your current website, and what you have in mind."/></label>
    <p className="form-note">Prepare your project brief, then send it using your email app. Your details are not submitted through this website.</p>
    <button className="button button-green" type="submit">Prepare My Free Quote Request <span aria-hidden="true">↗</span></button>
    <p className="form-status" role="status">{status}</p>
    {draft && <div className="draft-panel"><label>Your email brief<textarea readOnly value={draft} rows={6}/></label><div className="actions"><a className="button button-green" href={`mailto:${email}?subject=${encodeURIComponent("Website project inquiry")}&body=${encodeURIComponent(draft)}`}>Open Email App ↗</a><button className="button button-outline" type="button" onClick={copyDraft}>Copy Brief</button></div></div>}
  </form>;
}
