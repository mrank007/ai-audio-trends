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

  const searchResults = await searchTavily(
    "AI artificial intelligence audio production music technology trends 2025"
  );

  const prompt = `Today is ${today}.

You are an expert in music technology and audio production. Below are real articles from the web. Use them to write the TOP 5 current AI audio production trends. For each trend include the source article link.

ARTICLES:
${searchResults}

Format your response as clean HTML (no backtick fences). Use exactly this card format for each of the 5 trends:

<div style="background:#1a0d33;border:1px solid #2a1a4d;border-left:4px solid #ff2d87;padding:16px 18px;margin:0 0 14px;border-radius:8px;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="display:inline-block;background:#ff2d87;color:#ffffff;font-size:10px;font-weight:800;letter-spacing:2px;padding:3px 8px;border-radius:4px;text-transform:uppercase;margin-bottom:10px;">Trend 1</div>
  <h3 style="margin:0 0 8px;color:#ffffff;font-size:15px;font-weight:800;">[Trend Title]</h3>
  <p style="margin:0 0 12px;color:#aabbdd;font-size:13px;line-height:1.7;">[2-3 sentence summary based on the articles above.]</p>
  <a href="[article URL]" style="color:#ff6b35;font-size:12px;text-decoration:none;font-weight:600;">Read more →</a>
</div>

Use these badge colors for trends 1-5 in order: #ff2d87, #ff6b35, #b44fff, #4466ff, #00ccaa

Only output the HTML cards — no explanations, no preamble, no backticks.`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1800,
    temperature: 0.7,
  });

  return completion.choices[0].message.content ?? "";
}
