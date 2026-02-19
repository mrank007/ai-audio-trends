import Groq from "groq-sdk";

async function searchTavily(query: string): Promise<string> {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.TAVILY_API_KEY ?? "placeholder",
      query,
      max_results: 5,
      include_answer: false,
      search_depth: "advanced",
    }),
  });
  const data = await response.json();
  return data.results
    .map((r: any) => `Title: ${r.title}\nURL: ${r.url}\nSummary: ${r.content}`)
    .join("\n\n");
}

export async function getTrends(): Promise<string> {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY ?? "placeholder" });

  const today = new Date().toLocaleDateString("en-AU", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    timeZone: "Australia/Hobart",
  });

  // Search for real articles first
  const searchResults = await searchTavily(
    "AI artificial intelligence audio production music technology trends 2025"
  );

  const prompt = `Today is ${today}.

You are an expert in music technology and audio production. Below are real articles from the web about AI in audio production. Use these as your source material to write the TOP 5 current trends. For each trend, include the source article link.

ARTICLES:
${searchResults}

Format your response as clean HTML (no backtick fences) for an email body, using exactly this structure:

<h2 style="color:#1a1a2e;font-family:Arial,sans-serif;margin:0 0 4px;">🎧 Top 5 AI Trends in Audio Production</h2>
<p style="color:#888;font-family:Arial,sans-serif;font-size:13px;margin:0 0 24px;">Your daily briefing — ${today}</p>

Then for each of the 5 trends:
<div style="background:#f9f9f9;border-left:4px solid #6c63ff;padding:12px 16px;margin:0 0 16px;border-radius:4px;font-family:Arial,sans-serif;">
  <h3 style="margin:0 0 6px;color:#1a1a2e;font-size:15px;">1. [Trend Title]</h3>
  <p style="margin:0 0 8px;color:#444;font-size:14px;line-height:1.6;">[2-3 sentence summary based on the articles above.]</p>
  <a href="[article URL]" style="color:#6c63ff;font-size:13px;text-decoration:none;">Read more →</a>
</div>

End with:
<p style="color:#bbb;font-family:Arial,sans-serif;font-size:11px;margin-top:24px;border-top:1px solid #eee;padding-top:16px;">
  AI Audio Trends Bot · Powered by Groq, Tavily &amp; Vercel · Delivered free daily
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
