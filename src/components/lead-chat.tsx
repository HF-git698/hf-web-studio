"use client";
import { useState } from "react";

type Message = { role: "user" | "assistant"; content: string };
type Lead = { name?: string; email?: string; business?: string; project?: string };

export function LeadChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Hi! I’m the HF Web Studio assistant. I can answer questions about websites, ordering links, SEO, and the project process. If you’re interested in working together, I can collect a few details for a follow-up." }]);
  const [lead, setLead] = useState<Lead>({});
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  async function send(event: React.FormEvent) {
    event.preventDefault(); if (!input.trim() || busy) return;
    const next = [...messages, { role: "user" as const, content: input.trim() }]; setMessages(next); setInput(""); setBusy(true);
    try { const res = await fetch("/api/lead-chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next, lead }) }); const data = await res.json(); setLead(data.lead || lead); setMessages([...next, { role: "assistant", content: data.reply || "Could you tell me more?" }]); }
    catch { setMessages([...next, { role: "assistant", content: "Please email huangfxs789@gmail.com and we’ll get back to you." }]); }
    finally { setBusy(false); }
  }
  return <div className="lead-chat"><button className="lead-chat-launch" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "Close chat" : "Chat with HF Studio ↗"}</button>{open && <section className="lead-chat-panel" aria-label="HF Web Studio chat assistant"><div className="lead-chat-head"><strong>HF Web Studio</strong><span>Ask a question</span></div><div className="lead-chat-messages">{messages.map((message, index) => <p key={index} className={message.role}>{message.content}</p>)}{busy && <p className="assistant">Thinking…</p>}</div><form onSubmit={send}><input value={input} onChange={event => setInput(event.target.value)} placeholder="Type your question…" aria-label="Chat message" maxLength={1000}/><button type="submit" disabled={busy}>Send</button></form><small>With your permission, details you share may be sent to HF Web Studio for follow-up.</small></section>}</div>;
}
