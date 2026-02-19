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

          <!-- HEADER BANNER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0533 0%,#0d1f4d 50%,#001a33 100%);border-radius:16px 16px 0 0;padding:0;overflow:hidden;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:28px 32px 0 32px;vertical-align:bottom;width:60%;">
                    <div style="font-size:11px;font-weight:800;letter-spacing:4px;text-transform:uppercase;margin-bottom:8px;color:#ff6b35;">Daily Briefing</div>
                    <h1 style="margin:0 0 6px;font-size:28px;font-weight:900;color:#ffffff;line-height:1.1;letter-spacing:-0.5px;">
                      🎧 AI Audio<br>
                      <span style="color:#ff2d87;">Trends Report</span>
                    </h1>
                    <p style="margin:0 0 24px;color:#8899cc;font-size:13px;">${today}</p>
                  </td>
                  <td style="padding:0;vertical-align:bottom;text-align:right;width:40%;">
                    <svg width="155" height="175" viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-left:auto;">
                      <rect x="45" y="105" width="70" height="75" rx="8" fill="#ff2d87"/>
                      <rect x="45" y="105" width="30" height="75" rx="4" fill="#e0196f"/>
                      <polygon points="75,105 85,105 80,125" fill="#ffffff" opacity="0.9"/>
                      <polygon points="75,105 65,105 70,125" fill="#ffffff" opacity="0.7"/>
                      <rect x="18" y="108" width="28" height="14" rx="7" fill="#ff2d87" transform="rotate(-20 32 115)"/>
                      <rect x="114" y="108" width="28" height="14" rx="7" fill="#ff2d87" transform="rotate(20 128 115)"/>
                      <circle cx="22" cy="128" r="10" fill="#ffe0c0"/>
                      <circle cx="138" cy="128" r="10" fill="#ffe0c0"/>
                      <rect x="68" y="90" width="24" height="18" rx="4" fill="#ffe0c0"/>
                      <ellipse cx="80" cy="68" rx="34" ry="36" fill="#ffe0c0"/>
                      <ellipse cx="80" cy="38" rx="36" ry="22" fill="#ff6b35"/>
                      <ellipse cx="46" cy="52" rx="14" ry="22" fill="#ff6b35" transform="rotate(-20 46 52)"/>
                      <ellipse cx="114" cy="52" rx="14" ry="22" fill="#ff6b35" transform="rotate(20 114 52)"/>
                      <ellipse cx="60" cy="30" rx="10" ry="18" fill="#ff8c42" transform="rotate(-30 60 30)"/>
                      <ellipse cx="100" cy="30" rx="10" ry="18" fill="#ff8c42" transform="rotate(30 100 30)"/>
                      <ellipse cx="80" cy="24" rx="12" ry="16" fill="#ff6b35"/>
                      <ellipse cx="66" cy="68" rx="11" ry="13" fill="#ffffff"/>
                      <ellipse cx="94" cy="68" rx="11" ry="13" fill="#ffffff"/>
                      <ellipse cx="66" cy="70" rx="8" ry="9" fill="#4466ff"/>
                      <ellipse cx="94" cy="70" rx="8" ry="9" fill="#4466ff"/>
                      <ellipse cx="66" cy="70" rx="5" ry="6" fill="#1a1a2e"/>
                      <ellipse cx="94" cy="70" rx="5" ry="6" fill="#1a1a2e"/>
                      <circle cx="69" cy="67" r="2.5" fill="#ffffff"/>
                      <circle cx="97" cy="67" r="2.5" fill="#ffffff"/>
                      <path d="M55 56 Q66 51 77 56" stroke="#cc4400" stroke-width="3" fill="none" stroke-linecap="round"/>
                      <path d="M83 56 Q94 51 105 56" stroke="#cc4400" stroke-width="3" fill="none" stroke-linecap="round"/>
                      <path d="M62 84 Q80 96 98 84" stroke="#cc6644" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                      <ellipse cx="56" cy="78" rx="8" ry="5" fill="#ffaaaa" opacity="0.6"/>
                      <ellipse cx="104" cy="78" rx="8" ry="5" fill="#ffaaaa" opacity="0.6"/>
                      <path d="M46 60 Q46 30 80 28 Q114 30 114 60" stroke="#b44fff" stroke-width="6" fill="none" stroke-linecap="round"/>
                      <rect x="38" y="56" width="16" height="22" rx="8" fill="#b44fff"/>
                      <rect x="106" y="56" width="16" height="22" rx="8" fill="#b44fff"/>
                      <rect x="41" y="59" width="10" height="16" rx="5" fill="#8822dd"/>
                      <rect x="109" y="59" width="10" height="16" rx="5" fill="#8822dd"/>
                      <line x1="28" y1="62" x2="22" y2="62" stroke="#ff6b35" stroke-width="2.5" stroke-linecap="round"/>
                      <line x1="26" y1="56" x2="18" y2="52" stroke="#ff2d87" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
                      <line x1="26" y1="68" x2="18" y2="72" stroke="#b44fff" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
                      <line x1="132" y1="62" x2="138" y2="62" stroke="#ff6b35" stroke-width="2.5" stroke-linecap="round"/>
                      <line x1="134" y1="56" x2="142" y2="52" stroke="#ff2d87" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
                      <line x1="134" y1="68" x2="142" y2="72" stroke="#b44fff" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
                      <text x="6" y="44" font-size="14" fill="#ffdd00">✦</text>
                      <text x="140" y="34" font-size="10" fill="#ff6b35">✦</text>
                      <text x="148" y="54" font-size="8" fill="#b44fff">✦</text>
                    </svg>
                  </td>
                </tr>
              </table>
              <!-- WAVEFORM -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 32px 20px;">
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
              </table>
            </td>
          </tr>

          <!-- INTRO SPEECH BUBBLE -->
          <tr>
            <td style="background:#111128;padding:20px 32px 8px;">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background:#1a0d33;border:1px solid #ff2d87;border-radius:12px;padding:14px 18px;">
                    <p style="margin:0;color:#ffffff;font-size:14px;line-height:1.6;">
                      <strong style="color:#ff6b35;">Yo! 👋</strong> Your AI audio homie is back with the freshest trends dropping in the industry right now. Let's get into it! 🔥
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- TRENDS CONTENT -->
          <tr>
            <td style="background:#111128;padding:8px 32px 24px;">
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
