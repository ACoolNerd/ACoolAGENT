# ACoolAGENT WhatsApp Backend — Deployment Guide

## Architecture

```
User WhatsApp → Meta Cloud API → /webhook POST → ACoolAGENT Server
                                                      ↓
                                            MessageRouter (fast commands)
                                                      ↓
                                            Claude claude-sonnet-4-6 (AI replies)
                                                      ↓
                                            ConversationStore (session memory)
                                                      ↓
                                            sendWhatsAppMessage → User
```

---

## Step 1 — Meta Developer Setup

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create App → **Business** type
3. Add **WhatsApp** product
4. Go to **WhatsApp → API Setup**
5. Note your **Phone Number ID** and **Access Token**
6. Under **Configuration → Webhook**:
   - Callback URL: `https://your-vercel-url.vercel.app/webhook`
   - Verify Token: `acoolagent_verify_2025`
   - Subscribe to: `messages`

---

## Step 2 — Get Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create API Key
3. Add billing (pay-as-you-go, ~$3 per 1M input tokens)

---

## Step 3 — Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# From the whatsapp-webhook directory:
cd whatsapp-webhook
npm install

# Deploy
vercel

# Set environment variables
vercel env add ANTHROPIC_API_KEY
vercel env add WHATSAPP_ACCESS_TOKEN
vercel env add WHATSAPP_PHONE_NUMBER_ID
vercel env add WHATSAPP_VERIFY_TOKEN

# Redeploy with env vars
vercel --prod
```

Your webhook URL will be: `https://your-project.vercel.app/webhook`

---

## Step 4 — Connect Webhook to Meta

1. In Meta Developer Console → WhatsApp → Configuration
2. Paste your Vercel URL as the Callback URL
3. Enter `acoolagent_verify_2025` as Verify Token
4. Click **Verify and Save**
5. Subscribe to `messages` field

---

## Step 5 — Test

Send a WhatsApp message to your business number:
- Type `START` → should get onboarding message
- Type `FUNDING` → should get funding list
- Type anything else → Claude AI responds

---

## Estimated Monthly Costs

| Service | Usage | Cost |
|---------|-------|------|
| Vercel | Hobby tier | FREE |
| Claude API | 1,000 conversations/mo | ~$10–30 |
| WhatsApp API | 1,000 conversations/mo | ~$15–40 |
| **Total** | | **~$25–70/mo** |

---

## Local Development

```bash
npm install
cp .env.example .env
# Fill in your keys

# Install ngrok for local webhook testing
npm install -g ngrok
ngrok http 3000

# In another terminal:
npm run dev
```

Use the ngrok URL as your webhook callback URL during development.

---

## Production Upgrade: Redis Sessions

For persistent conversations across Vercel serverless instances:

1. Add Upstash Redis to your Vercel project (free tier available)
2. Uncomment the Redis code in `conversationStore.js`
3. Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` env vars

---

## Files

```
whatsapp-webhook/
├── server.js           — Main Express server + webhook handler
├── messageRouter.js    — Fast command routing (no AI cost for known commands)
├── conversationStore.js — Session memory (in-memory dev / Redis prod)
├── package.json        — Dependencies
├── vercel.json         — Vercel deployment config
├── .env.example        — Environment variable template
└── DEPLOY.md           — This file
```
