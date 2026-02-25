import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

export async function sendTrendsEmail(htmlBody: string): Promise<void> {
const today = new Date().toLocaleDateString("en-AU", {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "Australia/Hobart",
});
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>AI Audio Trends</title>
</head>
<body style="margin:0;padding:0;background:#0d0d1a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d1a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0533 0%,#0d1f4d 50%,#001a33 100%);border-radius:16px 16px 0 0;padding:36px 36px 0 36px;">
              <div style="font-size:11px;font-weight:800;letter-spacing:4px;text-transform:uppercase;margin-bottom:10px;color:#ff6b35;">Daily Briefing</div>
              <h1 style="margin:0 0 8px;font-size:32px;font-weight:900;color:#ffffff;line-height:1.1;letter-spacing:-0.5px;">
                🎧 AI Audio<br>
                <span style="color:#ff2d87;">Trends Report</span>
              </h1>
              <p style="margin:0 0 28px;color:#8899cc;font-size:14px;">${today}</p>

              <!-- WAVEFORM -->
              <svg width="100%" height="28" viewBox="0 0 400 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#ff6b35"/>
                    <stop offset="50%" style="stop-color:#ff2d87"/>
                    <stop offset="100%" style="stop-color:#b44fff"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="11" width="3" height="6" rx="1" fill="url(#wg)" opacity="0.4"/>
                <rect x="6" y="7" width="3" height="14" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="12" y="3" width="3" height="22" rx="1" fill="url(#wg)"/>
                <rect x="18" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
                <rect x="24" y="5" width="3" height="18" rx="1" fill="url(#wg)"/>
                <rect x="30" y="1" width="3" height="26" rx="1" fill="url(#wg)"/>
                <rect x="36" y="8" width="3" height="12" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="42" y="4" width="3" height="20" rx="1" fill="url(#wg)"/>
                <rect x="48" y="10" width="3" height="8" rx="1" fill="url(#wg)" opacity="0.5"/>
                <rect x="54" y="6" width="3" height="16" rx="1" fill="url(#wg)"/>
                <rect x="60" y="2" width="3" height="24" rx="1" fill="url(#wg)"/>
                <rect x="66" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
                <rect x="72" y="5" width="3" height="18" rx="1" fill="url(#wg)"/>
                <rect x="78" y="11" width="3" height="6" rx="1" fill="url(#wg)" opacity="0.4"/>
                <rect x="84" y="3" width="3" height="22" rx="1" fill="url(#wg)"/>
                <rect x="90" y="7" width="3" height="14" rx="1" fill="url(#wg)" opacity="0.8"/>
                <rect x="96" y="1" width="3" height="26" rx="1" fill="url(#wg)"/>
                <rect x="102" y="8" width="3" height="12" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="108" y="4" width="3" height="20" rx="1" fill="url(#wg)"/>
                <rect x="114" y="10" width="3" height="8" rx="1" fill="url(#wg)" opacity="0.5"/>
                <rect x="120" y="6" width="3" height="16" rx="1" fill="url(#wg)"/>
                <rect x="126" y="2" width="3" height="24" rx="1" fill="url(#wg)"/>
                <rect x="132" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
                <rect x="138" y="5" width="3" height="18" rx="1" fill="url(#wg)"/>
                <rect x="144" y="11" width="3" height="6" rx="1" fill="url(#wg)" opacity="0.4"/>
                <rect x="150" y="3" width="3" height="22" rx="1" fill="url(#wg)"/>
                <rect x="156" y="7" width="3" height="14" rx="1" fill="url(#wg)" opacity="0.8"/>
                <rect x="162" y="1" width="3" height="26" rx="1" fill="url(#wg)"/>
                <rect x="168" y="8" width="3" height="12" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="174" y="4" width="3" height="20" rx="1" fill="url(#wg)"/>
                <rect x="180" y="10" width="3" height="8" rx="1" fill="url(#wg)" opacity="0.5"/>
                <rect x="186" y="6" width="3" height="16" rx="1" fill="url(#wg)"/>
                <rect x="192" y="2" width="3" height="24" rx="1" fill="url(#wg)"/>
                <rect x="198" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
                <rect x="204" y="5" width="3" height="18" rx="1" fill="url(#wg)"/>
                <rect x="210" y="11" width="3" height="6" rx="1" fill="url(#wg)" opacity="0.4"/>
                <rect x="216" y="3" width="3" height="22" rx="1" fill="url(#wg)"/>
                <rect x="222" y="7" width="3" height="14" rx="1" fill="url(#wg)" opacity="0.8"/>
                <rect x="228" y="1" width="3" height="26" rx="1" fill="url(#wg)"/>
                <rect x="234" y="8" width="3" height="12" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="240" y="4" width="3" height="20" rx="1" fill="url(#wg)"/>
                <rect x="246" y="10" width="3" height="8" rx="1" fill="url(#wg)" opacity="0.5"/>
                <rect x="252" y="6" width="3" height="16" rx="1" fill="url(#wg)"/>
                <rect x="258" y="2" width="3" height="24" rx="1" fill="url(#wg)"/>
                <rect x="264" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
                <rect x="270" y="5" width="3" height="18" rx="1" fill="url(#wg)"/>
                <rect x="276" y="11" width="3" height="6" rx="1" fill="url(#wg)" opacity="0.4"/>
                <rect x="282" y="3" width="3" height="22" rx="1" fill="url(#wg)"/>
                <rect x="288" y="7" width="3" height="14" rx="1" fill="url(#wg)" opacity="0.8"/>
                <rect x="294" y="1" width="3" height="26" rx="1" fill="url(#wg)"/>
                <rect x="300" y="8" width="3" height="12" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="306" y="4" width="3" height="20" rx="1" fill="url(#wg)"/>
                <rect x="312" y="10" width="3" height="8" rx="1" fill="url(#wg)" opacity="0.5"/>
                <rect x="318" y="6" width="3" height="16" rx="1" fill="url(#wg)"/>
                <rect x="324" y="2" width="3" height="24" rx="1" fill="url(#wg)"/>
                <rect x="330" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
                <rect x="336" y="5" width="3" height="18" rx="1" fill="url(#wg)"/>
                <rect x="342" y="11" width="3" height="6" rx="1" fill="url(#wg)" opacity="0.4"/>
                <rect x="348" y="3" width="3" height="22" rx="1" fill="url(#wg)"/>
                <rect x="354" y="7" width="3" height="14" rx="1" fill="url(#wg)" opacity="0.8"/>
                <rect x="360" y="1" width="3" height="26" rx="1" fill="url(#wg)"/>
                <rect x="366" y="8" width="3" height="12" rx="1" fill="url(#wg)" opacity="0.6"/>
                <rect x="372" y="4" width="3" height="20" rx="1" fill="url(#wg)"/>
                <rect x="378" y="10" width="3" height="8" rx="1" fill="url(#wg)" opacity="0.5"/>
                <rect x="384" y="6" width="3" height="16" rx="1" fill="url(#wg)"/>
                <rect x="390" y="2" width="3" height="24" rx="1" fill="url(#wg)"/>
                <rect x="396" y="9" width="3" height="10" rx="1" fill="url(#wg)" opacity="0.7"/>
              </svg>
            </td>
          </tr>

          <!-- TRENDS CONTENT -->
          <tr>
            <td style="background:#111128;padding:24px 32px;">
              ${htmlBody}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0533 0%,#0d1f4d 100%);border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;">
              <p style="margin:0 0 8px;color:#8899cc;font-size:11px;letter-spacing:2px;text-transform:uppercase;">AI Audio Trends Bot</p>
              <p style="margin:0;color:#445577;font-size:11px;">
                Powered by Groq &amp; Tavily · Delivered by Vercel ·
                <a href="https://oistudios.com.au" style="color:#ff2d87;text-decoration:none;">oistudios.com.au</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "AI Audio Trends <onboarding@resend.dev>",
    to: process.env.RECIPIENT_EMAIL!,
    subject: `🎧 AI Audio Trends Drop — ${today}`,
    html: fullHtml,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
