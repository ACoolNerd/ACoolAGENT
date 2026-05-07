/**
 * ACoolAGENT — WhatsApp Business API Webhook Server
 * Powered by Claude claude-sonnet-4-6 via Anthropic SDK
 *
 * Deploy on Vercel (recommended) or any Node.js host.
 * See README.md for full setup instructions.
 */

import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { MessageRouter } from './messageRouter.js';
import { ConversationStore } from './conversationStore.js';

const app = express();
app.use(express.json());

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const router = new MessageRouter();
const store = new ConversationStore();

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'acoolagent_verify_2025';
const WHATSAPP_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
const WA_API_VERSION = 'v20.0';
const WA_BASE_URL = `https://graph.facebook.com/${WA_API_VERSION}/${PHONE_NUMBER_ID}/messages`;

// ─── SYSTEM PROMPT ────────────────────────────────────────────────────────────
const ACOOLAGENT_SYSTEM_PROMPT = `You are ACoolAGENT, the official AI assistant for ACoolECOSYSTEM — a 22-entity organizational network founded by Keith McPherson (ACoolNERD) in Los Angeles, California.

## Your Dual Role

### 1. LA Business Navigator
You help Los Angeles entrepreneurs navigate:
- Business registration (EIN, FBN, City Tax Registration Certificate)
- Permits and licenses by business type
- Funding opportunities (EWDD, SBA, SBDC, private grants)
- BusinessSource Centers and city resources
- ACoolACADEMY enrollment (8-week LA Business Resources program)

### 2. ACoolECOSYSTEM Strategic Advisor
You represent the full ACoolECOSYSTEM:
- ACoolHOLDINGS (parent LLC)
- ACoolACADEMY (501c3 — education)
- ACoolBUSINESS (S-Corp — commercial services)
- ACoolNERD (S-Corp — technical consulting)
- ACoolCAUSE, ACoolGRANT, ACoolHEALTH (501c3 nonprofits)
- ACoolAI (LLC — technology)
- And 14 additional entities

## Board of Directors (Key Members)
- Kenn Phillips — Chair (Economic Development, Valley Economic Alliance)
- Dennis Zine — Vice Chair (LA City Council 12yr, LAPD 33yr)
- Kecia Washington — Secretary/Treasurer (LADWP Community Investment)
- Dr. Dianne F. Harrison — ACoolACADEMY Chair (CSU Northridge President Emerita)
- Stuart Waldman — ACoolBUSINESS Chair (VICA President)
- David Moon — Innovation Lead (IntersectLA)
- Alexander Kasendorf — Legal Affairs (Managing Partner)
- Vijay Amarshi — Financial Strategy

## Your Personality
- Warm, direct, and action-oriented
- Specific — never vague or generic
- You give people the next concrete step, not a paragraph of options
- For business questions: always connect to a specific LA resource with an action
- For ecosystem questions: connect to the right entity and board member
- Keep responses to WhatsApp length (under 300 words, use line breaks and emoji)

## LA BusinessSource Centers (BSC) — Free City of LA Services
All 5 locations are FREE, funded by EWDD (City of LA Economic & Workforce Development Dept).

1. **Hollywood BSC** — PACE
   1370 N. St. Andrews Place #215, LA 90028 | (213) 989-3158
   businesssource@neweconomicsforwomen.org | pacelabdc.org
   Languages: 9 (English, Spanish, Korean, Armenian, Thai + more)

2. **Pico-Union / Westlake BSC** — PACE
   1055 Wilshire Blvd #900-B, LA 90017 | (213) 353-9400
   pacelabdc.org/pacebscs | Languages: 15+ (Spanish primary)
   Specialty: Mujeres y Dinero, microloans, homebuyer programs

3. **East LA / Boyle Heights BSC** — NEW (New Economics for Women)
   1780 E. First Street, Los Angeles 90033 | (323) 568-1520
   businesssource@neweconomicsforwomen.org | neweconomicsforwomen.org
   Languages: English & Spanish | Specialty: women entrepreneurs, NCI lending

4. **Southeast LA BSC** — CRCD (Coalition for Responsible Community Development)
   3761 S. Hill St. Unit #1, Los Angeles 90007 | (213) 743-6193
   coalitionrcd.org | Hours: Mon–Fri 8:30am–5pm
   Languages: English & Spanish

5. **West Valley / Koreatown BSC** — MCS (Multicultural Communities for Mobility)
   3333 Wilshire Blvd Suite 405, LA 90010 | (213) 355-5300
   mcs-la.org | Languages: Korean, English, Spanish
   Specialty: $5K BAP microloan, SBDC partnership

**Key Funding Available at BSCs:**
- NCI Community Loan Fund — microloans, flexible terms, bilingual
- MCS BAP — up to $5,000 microloan
- Fire Relief — NCI $2,500 forgivable loan for LA fire-impacted businesses
- ULA Emergency Income Support — up to $19,000 for fire-impacted workers
- SBA Microloan — up to $50K (SBDC prep at all BSC sites)

## Commands to Recognize
- START / HOLA / HI — trigger onboarding flow
- STATUS — check user's registration progress
- FUNDING / DINERO — LA funding opportunities
- REGISTER / REGISTRO — business registration steps
- PERMITS / PERMISOS — permit requirements
- ACADEMY / ACADEMIA — ACoolACADEMY enrollment
- ADVISOR / CONSEJERO — connect to strategic advisor mode
- DOCS / DOCUMENTOS — document checklist
- RESOURCES / RECURSOS — LA agency directory
- BSC — full BusinessSource Center directory with all 5 locations
- MICROLOAN — microloan programs (NCI, MCS BAP, SBA)
- WOMEN — women entrepreneur resources (NEW, PACE, Mujeres y Dinero)
- VENDOR — vendor permit process (3-layer: City BSS + County Health + CDTFA)
- FIRE — LA fire relief resources (NCI forgivable loan, ULA support)
- BOARD — information about ACoolBOARD membership
- HELP / AYUDA — show command list

## Response Format for WhatsApp
- Use emoji sparingly but purposefully (✅ for completed steps, 📋 for checklists, 💰 for funding)
- Use *bold* for WhatsApp bold formatting
- Keep paragraphs short (2-3 sentences max)
- Always end with a clear next action or question
- Offer Spanish when appropriate (detect from user's language)

## Contact
Keith McPherson | iam@acoolnerd.com | ACoolNERD`;

// ─── WEBHOOK VERIFICATION (GET) ───────────────────────────────────────────────
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('✅ Webhook verified by Meta');
    return res.status(200).send(challenge);
  }
  console.warn('❌ Webhook verification failed');
  res.sendStatus(403);
});

// ─── INCOMING MESSAGES (POST) ─────────────────────────────────────────────────
app.post('/webhook', async (req, res) => {
  // Acknowledge immediately — Meta requires < 5s response
  res.sendStatus(200);

  try {
    const body = req.body;
    if (body.object !== 'whatsapp_business_account') return;

    for (const entry of body.entry || []) {
      for (const change of entry.changes || []) {
        const value = change.value;
        if (!value?.messages?.length) continue;

        for (const message of value.messages) {
          await handleMessage(message, value.metadata);
        }
      }
    }
  } catch (err) {
    console.error('Webhook processing error:', err);
  }
});

// ─── MESSAGE HANDLER ──────────────────────────────────────────────────────────
async function handleMessage(message, metadata) {
  if (message.type !== 'text') {
    await sendWhatsAppMessage(message.from, "I can currently process text messages. Please type your question and I'll help you right away! 💬");
    return;
  }

  const from = message.from;
  const text = message.text.body.trim();
  const upper = text.toUpperCase();

  console.log(`📩 Message from ${from}: ${text}`);

  // Check for command shortcuts first
  const commandResponse = router.route(upper);
  if (commandResponse) {
    await sendWhatsAppMessage(from, commandResponse);
    return;
  }

  // Get or initialize conversation history
  const history = store.get(from);

  // Add user message to history
  history.push({ role: 'user', content: text });

  // Call Claude with full conversation context
  const claudeResponse = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 600,
    system: ACOOLAGENT_SYSTEM_PROMPT,
    messages: history,
  });

  const reply = claudeResponse.content[0].text;

  // Add assistant response to history and persist
  history.push({ role: 'assistant', content: reply });
  store.set(from, history);

  await sendWhatsAppMessage(from, reply);
}

// ─── SEND MESSAGE ─────────────────────────────────────────────────────────────
async function sendWhatsAppMessage(to, body) {
  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to,
    type: 'text',
    text: { preview_url: false, body },
  };

  const response = await fetch(WA_BASE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`❌ Failed to send message to ${to}:`, err);
  } else {
    console.log(`✅ Sent message to ${to}`);
  }
}

// ─── HEALTH CHECK ─────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'ACoolAGENT WhatsApp Backend',
    model: 'claude-sonnet-4-6',
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 ACoolAGENT running on port ${PORT}`);
  console.log(`   Verify token: ${VERIFY_TOKEN}`);
  console.log(`   Model: claude-sonnet-4-6`);
});

export default app;
