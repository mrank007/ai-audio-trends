export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getTrends } from "../../../../lib/groq";
import { sendTrendsEmail } from "../../../../lib/email";

// Vercel will call this endpoint on the cron schedule in vercel.json
export async function GET(request: Request) {
 

  try {
    console.log("🔍 Fetching AI audio trends from Groq...");
    const trendsHtml = await getTrends();

    console.log("📧 Sending email via Resend...");
    await sendTrendsEmail(trendsHtml);

    console.log("✅ Done!");
    return NextResponse.json({ success: true, message: "Trends email sent!" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Error:", message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
