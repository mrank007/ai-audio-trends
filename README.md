# 🎧 AI Audio Production Trends Bot — Vercel Edition

A Next.js app that sends you a **daily email with the top 5 AI trends in audio production**, completely free. Runs on Vercel's cloud, triggered by a built-in cron job.

**Stack:** Next.js · Groq API (free) · Resend (free) · Vercel (free)

---

## 📁 Project Structure

```
ai-audio-trends/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Simple homepage
│   └── api/cron/send-trends/
│       └── route.ts                  # ← The cron endpoint Vercel calls daily
├── lib/
│   ├── groq.ts                       # Calls Groq AI to generate trends
│   └── email.ts                      # Sends email via Resend
├── vercel.json                        # Cron schedule config
├── .env.example                       # Required environment variables
├── package.json
└── tsconfig.json
```

---

## 🚀 Setup Guide (~10 minutes)

### Step 1 — Get a Free Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up (free, no credit card)
3. Go to **API Keys → Create API Key**
4. Copy the key (starts with `gsk_...`)

---

### Step 2 — Get a Free Resend API Key

Resend is a developer-friendly email service with 3,000 free emails/month.

1. Go to [resend.com](https://resend.com) and sign up (free)
2. Go to **API Keys → Create API Key**
3. Copy the key (starts with `re_...`)

> **Note:** On the free tier you can send to any email using `onboarding@resend.dev` as the sender — no domain needed. The app is already configured this way.

---

### Step 3 — Deploy to Vercel

#### Option A: Deploy via GitHub (recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up (free)
3. Click **"Add New Project"** → Import your GitHub repo
4. Vercel will auto-detect Next.js — click **Deploy**

#### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

### Step 4 — Add Environment Variables in Vercel

In your Vercel project dashboard go to **Settings → Environment Variables** and add:

| Variable Name    | Value                                      |
|------------------|--------------------------------------------|
| `GROQ_API_KEY`   | Your Groq key (`gsk_...`)                  |
| `RESEND_API_KEY` | Your Resend key (`re_...`)                 |
| `RECIPIENT_EMAIL`| Email address to receive the daily digest  |
| `CRON_SECRET`    | A random secret string you make up (generate one at https://generate-secret.vercel.app/32) |

After adding variables, trigger a **Redeploy** from the Vercel dashboard for them to take effect.

---

### Step 5 — Test It Manually

Once deployed, visit this URL in your browser to trigger a test email immediately:

```
https://your-project.vercel.app/api/cron/send-trends
```

> You'll get a 401 Unauthorized response in the browser — that's correct and expected (the endpoint requires the `CRON_SECRET` header). To test properly, use curl:

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  https://your-project.vercel.app/api/cron/send-trends
```

You should get `{"success":true,"message":"Trends email sent!"}` and receive the email within seconds.

---

## ⏰ Changing the Schedule

Edit the cron expression in `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/send-trends",
      "schedule": "0 8 * * *"
    }
  ]
}
```

Some examples (all times UTC):

| Cron Expression | Meaning                    |
|-----------------|----------------------------|
| `0 8 * * *`     | Every day at 8:00 AM UTC   |
| `0 21 * * *`    | Every day at 8:00 AM AEDT  |
| `0 7 * * 1-5`   | Weekdays only at 7:00 AM   |

> 🇦🇺 Hobart/AEDT is UTC+11 in summer, UTC+10 in winter. Adjust accordingly.

Use [crontab.guru](https://crontab.guru) to preview your schedule.

---

## 💰 Cost Breakdown

| Service         | Free Tier                          |
|-----------------|------------------------------------|
| Vercel          | Unlimited deployments, 2 cron jobs |
| Groq API        | ~14,400 requests/day               |
| Resend          | 3,000 emails/month                 |
| **Total**       | **$0.00 / month**                  |

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.example .env.local

# Run locally
npm run dev

# Test the cron endpoint locally
curl -H "Authorization: Bearer your_cron_secret" \
  http://localhost:3000/api/cron/send-trends
```
