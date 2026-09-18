import { NextResponse } from "next/server";

type ChatMessage = { role: "user" | "assistant"; content: string };
type Lead = { name?: string; email?: string; business?: string; project?: string };

function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try { return JSON.parse(match[0]) as { reply?: string; lead?: Lead; ready?: boolean }; }
  catch { return null; }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { messages?: ChatMessage[]; lead?: Lead };
    const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
    const lead = body.lead || {};
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({ reply: "The chat assistant is being configured. Please email huangfxs789@gmail.com and we’ll get back to you." }, { status: 503 });

    const prompt = `You are the friendly HF Web Studio website assistant. Answer concise questions about website design, restaurant ordering links, local SEO, domains, and project process. Never promise rankings, revenue, prices, or timelines. When the visitor shows interest, collect these one at a time: name, email, business name, and project needs. After all four are present, ask them to confirm before marking ready. Return JSON only with exactly these keys: reply (string), lead (object with any known name/email/business/project), ready (boolean). Current lead: ${JSON.stringify(lead)}. Conversation: ${JSON.stringify(messages)}`;
    const ai = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: "gpt-5", input: prompt }),
    });
    if (!ai.ok) throw new Error(`OpenAI request failed: ${ai.status}`);
    const data = await ai.json() as { output_text?: string; output?: Array<{ content?: Array<{ text?: string }> }> };
    const raw = data.output_text || data.output?.flatMap(item => item.content || []).map(item => item.text || "").join(" ") || "";
    const parsed = extractJson(raw) || { reply: raw || "Could you tell me a little more about your project?", lead, ready: false };
    const merged: Lead = { ...lead, ...(parsed.lead || {}) };
    const complete = Boolean(parsed.ready && merged.name && merged.email && merged.business && merged.project);
    if (complete && process.env.RESEND_API_KEY && process.env.LEAD_EMAIL) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        body: JSON.stringify({ from: "HF Web Studio <onboarding@resend.dev>", to: [process.env.LEAD_EMAIL], subject: `New website lead: ${merged.business}`, text: `New lead from HF Web Studio\n\nName: ${merged.name}\nEmail: ${merged.email}\nBusiness: ${merged.business}\nNeeds: ${merged.project}\n\nPlease follow up personally.` }),
      });
    }
    return NextResponse.json({ reply: parsed.reply || "Thanks—could you tell me more?", lead: merged, submitted: complete });
  } catch (error) {
    console.error("lead-chat error", error);
    return NextResponse.json({ reply: "I’m sorry, I couldn’t process that just now. Please email huangfxs789@gmail.com and we’ll help you directly." }, { status: 500 });
  }
}
