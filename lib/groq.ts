import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getTrends(): Promise<string> {
  const today = new Date().toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Australia/Hobart",
  });

  const prompt = `Today is ${today}.

You are an expert in music technology and audio production. Summarize the TOP 5 current or emerging trends in how AI is being used in audio production.

Consider areas such as:
- AI-powered mixing, mastering, and stem separation tools
- AI music generation and co-composition
- AI voice cloning and synthesis
- AI audio restoration and noise reduction
- AI in sound design and foley
- Notable new tools or industry developments

Format your response as clean HTML (no backtick fences) for an email body, using exactly this structure:

<h2 style="color:#1a1a2e;font-family:Arial,sans-serif;margin:0 0 4px;">🎧 Top 5 AI Trends in Audio Production</h2>
<p style="color:#888;font-family:Arial,sans-serif;font-size:13px;margin:0 0 24px;">Your daily briefing — ${today}</p>

Then for each of the 5 trends:
<div style="background:#f9f9f9;border-left:4px solid #6c63ff;padding:12px 16px;margin:0 0 16px;border-radius:4px;font-family:Arial,sans-serif;">
  <h3 style="margin:0 0 6px;color:#1a1a2e;font-size:15px;">1. [Trend Title]</h3>
  <p style="margin:0;color:#444;font-size:14px;line-height:1.6;">[2-3 sentence summary with specific real tools, companies, or techniques.]</p>
</div>

End with:
<p style="color:#bbb;font-family:Arial,sans-serif;font-size:11px;margin-top:24px;border-top:1px solid #eee;padding-top:16px;">
  AI Audio Trends Bot · Powered by Groq &amp; Vercel · Delivered free daily
</p>

Output only the HTML — no explanations, no preamble, no backticks.`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1500,
    temperature: 0.7,
  });

  return completion.choices[0].message.content ?? "";
}
