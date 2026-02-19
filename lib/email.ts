import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

export async function sendTrendsEmail(htmlBody: string): Promise<void> {
  const today = new Date().toLocaleDateString("en-AU", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Australia/Hobart",
  });

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td>
              ${htmlBody}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "AI Audio Trends <onboarding@resend.dev>",  // Change to your verified domain later
    to: process.env.RECIPIENT_EMAIL!,
    subject: `🎧 AI Audio Production Trends — ${today}`,
    html: fullHtml,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
