# ACoolAGENT — AI-Powered Ecosystem Command Center

> **Powered by Claude claude-sonnet-4-6 · WhatsApp Business API · Los Angeles, CA**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ACoolNERD/acoolagent&env=ANTHROPIC_API_KEY,WHATSAPP_ACCESS_TOKEN,WHATSAPP_PHONE_NUMBER_ID,WHATSAPP_VERIFY_TOKEN)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-≥18.0-green.svg)](https://nodejs.org)
[![Claude](https://img.shields.io/badge/AI-Claude%20Sonnet%204.6-blueviolet.svg)](https://anthropic.com)

---

## What Is ACoolAGENT?

ACoolAGENT is the operational AI brain of **ACoolECOSYSTEM** — a 22-entity organizational network founded by **Keith McPherson (ACoolNERD)** in Los Angeles, California.

It works on two levels:

**1. LA Business Navigator** — A WhatsApp-native AI assistant that helps any LA entrepreneur register a business, find funding, navigate permits, and connect to city resources. Free. Bilingual. Available 24/7.

**2. Ecosystem Strategic Advisor** — An internal command center for the ACoolECOSYSTEM board and team: entity tracking, board management, 90-day sprint dashboards, and organizational intelligence — all in a single shareable HTML file.

```
User WhatsApp → Meta Cloud API → /webhook → ACoolAGENT Server
                                               ↓
                                     MessageRouter (fast commands)
                                               ↓
                                     Claude claude-sonnet-4-6 (AI replies)
                                               ↓
                                     ConversationStore (session memory)
                                               ↓
                                     Reply → User WhatsApp
```

---

## Live Dashboard

The [ACoolECOSYSTEM Command Center](./index.html) is a zero-dependency, single-file HTML dashboard with 9 tabs:

| Tab | What It Shows |
|-----|--------------|
| 📊 Overview | KPIs, entity progress, roadmap chart |
| 🏛️ Org Chart | Interactive hierarchy with hover tooltips |
| 📋 Entity Table | All 22 entities — type, cluster, status, priority |
| ✅ Board Hub | 14 real board members · yes/no interest tracking · one-click email |
| 🤖 ACoolAGENT | Simulated WhatsApp chat interface |
| 💬 WhatsApp | Deployment status + command reference |
| 🗺️ Roadmap | 26-task milestone tracker with progress bars |
| 🎯 Priorities | Eisenhower matrix + 90-day sprint dashboard |
| 🏙️ LA Resources | All 5 EWDD BusinessSource Center locations + funding programs |

**Deploy the dashboard in 30 seconds:**
```bash
# Option 1: Open locally
open index.html

# Option 2: Host on GitHub Pages (auto-configured in this repo)
# Push to main → Settings → Pages → Deploy from main branch

# Option 3: One-command Netlify drop
npx netlify-cli deploy --dir . --open
```

---

## WhatsApp Backend

### Architecture

```
whatsapp-webhook/
├── server.js           — Express server · webhook verification · Claude integration
├── messageRouter.js    — Fast command routing (no AI cost for known commands)
├── conversationStore.js — Session memory · 24-hr TTL · Redis upgrade path
├── package.json        — ESM modules · Node ≥18
├── vercel.json         — One-click Vercel deployment config
├── .env.example        — All required environment variables
└── DEPLOY.md           — Step-by-step setup guide
```

### WhatsApp Commands

Users text any of these to the ACoolAGENT business number:

| Command | Response |
|---------|----------|
| `START` / `HOLA` | Onboarding flow — what can I help you with? |
| `HELP` | Full command list |
| `FUNDING` | LA funding sources (EWDD, NCI, SBA, fire relief, ULA) |
| `REGISTER` | Business registration checklist (EIN → FBN → City Tax Cert) |
| `PERMITS` | Permit requirements by business type |
| `BSC` | All 5 BusinessSource Center locations with address + phone |
| `MICROLOAN` | NCI lending, MCS $5K BAP, SBA Microloan programs |
| `WOMEN` | NEW org, PACE programs, Mujeres y Dinero, homebuyer |
| `VENDOR` | 3-layer vendor permit process (City BSS + County Health + CDTFA) |
| `FIRE` | NCI $2,500 forgivable loan + ULA $19K fire relief |
| `ACADEMY` | ACoolACADEMY enrollment + curriculum overview |
| `DOCS` | Document checklist for business formation |
| `RESOURCES` | Full LA agency directory |
| `BOARD` | ACoolBOARD membership information |
| `ADVISOR` | Connect to strategic advisor mode |
| `STATUS` | Check registration progress |
| *(anything else)* | Claude AI responds with context-aware guidance |

### Quick Start (Local Dev)

**Requirements:** Node.js ≥18, ngrok, Meta WhatsApp Business App, Anthropic API key

```bash
# 1. Clone and install
git clone https://github.com/ACoolNERD/acoolagent.git
cd acoolagent/whatsapp-webhook
npm install

# 2. Set environment variables
cp .env.example .env
# Edit .env with your keys — see Environment Variables section below

# 3. Start the server
npm run dev
# → Running on http://localhost:3000

# 4. Expose to internet for Meta webhook verification
npx ngrok http 3000
# → Copy the https://xxxx.ngrok.io URL
```

Then in Meta Developer Console:
- Callback URL: `https://xxxx.ngrok.io/webhook`
- Verify Token: `acoolagent_verify_2025`
- Subscribe: `messages`

Test it:
```bash
curl http://localhost:3000/health
# → {"status":"ok","service":"ACoolAGENT WhatsApp Backend",...}
```

### Deploy to Vercel (Production)

```bash
cd whatsapp-webhook
npm install -g vercel

vercel login
vercel                          # follow prompts

# Add secrets
vercel env add ANTHROPIC_API_KEY
vercel env add WHATSAPP_ACCESS_TOKEN
vercel env add WHATSAPP_PHONE_NUMBER_ID
vercel env add WHATSAPP_VERIFY_TOKEN

vercel --prod
# → Your webhook URL: https://your-project.vercel.app/webhook
```

Or click the deploy button at the top of this README.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | ✅ | From [console.anthropic.com](https://console.anthropic.com) |
| `WHATSAPP_ACCESS_TOKEN` | ✅ | Meta App → WhatsApp → API Setup |
| `WHATSAPP_PHONE_NUMBER_ID` | ✅ | Meta App → WhatsApp → API Setup |
| `WHATSAPP_VERIFY_TOKEN` | ✅ | Set to `acoolagent_verify_2025` or your own value |
| `PORT` | — | Default: 3000 |
| `UPSTASH_REDIS_REST_URL` | — | For persistent sessions across Vercel instances |
| `UPSTASH_REDIS_REST_TOKEN` | — | Pair with URL above |

---

## The ACoolECOSYSTEM — 22 Entities

```
ACoolTRUST (Family Trust)
└── ACoolHOLDINGS (LLC — Parent Holding Company)
    ├── Education Cluster
    │   ├── ACoolACADEMY      501c3  — 8-week LA business resource training
    │   ├── ACoolDATASET      LLC    — Business intelligence & data
    │   └── ACoolKNOWLEDGEBASE LLC  — IP management & best practices
    ├── Business Cluster
    │   ├── ACoolBUSINESS     S-Corp — Primary commercial revenue engine
    │   ├── ACoolENTERPRISE   C-Corp — Large-scale / investor structure
    │   ├── ACoolLTD          LLC    — International operations
    │   └── ACoolJOBBOARD     LLC    — Workforce development platform
    ├── Social Impact Cluster
    │   ├── ACoolCAUSE        501c3  — Community charitable programs
    │   ├── ACoolENDOWMENT    501c3  — Long-term asset management
    │   ├── ACoolGRANT        501c3  — Grant securing & distribution
    │   └── ACoolCOOP         Coop   — Member-owned shared services
    ├── Technology Cluster
    │   ├── ACoolAI           LLC    — AI development · powers ACoolAGENT
    │   ├── ACoolFRAMEWORK    LLC    — Methodologies & systems IP
    │   └── ACoolINFRASTRUCTURE LLC — Physical & digital infrastructure
    ├── Health Cluster
    │   └── ACoolHEALTH       501c3  — Wellness & healthcare accessibility
    ├── Leadership Cluster
    │   ├── ACoolLEADERSHIP   LLC    — Executive coaching & consulting
    │   ├── ACoolLEADER       LLC    — Individual leadership training
    │   └── ACoolBOARD        501c6  — Business association & governance
    └── Services Cluster
        ├── ACoolNERD         S-Corp — Technical consulting · core revenue
        ├── ACoolOSINT        LLC    — Intelligence & risk assessment
        └── ACoolMOU          LLC    — Inter-entity agreement management
```

---

## Board of Directors

14 confirmed board members spanning economic development, law, finance, education, and civic leadership across Los Angeles.

| Name | Role | Organization |
|------|------|-------------|
| **Kenn Phillips** | Chair | Valley Economic Alliance — CEO |
| **Dennis Zine** | Vice Chair | LA City Council (12yr) · LAPD (33yr) |
| **Kecia Washington** | Secretary/Treasurer | LADWP — Community Investment Director |
| **Dr. Dianne F. Harrison** | ACoolACADEMY Chair | CSU Northridge — President Emerita |
| **Tarry Kang CFRE** | Fundraising Lead | CSUN Development |
| **Richard Katz** | Business Growth | LADWP Board President · Former CA Assembly |
| **Stuart Waldman** | ACoolBUSINESS Chair | VICA — President |
| **David Moon** | Innovation Lead | IntersectLA — Chief Instigator |
| **Michael Hadley** | Government Relations | Western Municipal Water District |
| **Vahid Khorsand** | Civic Engagement | Former Commissioner & Equities Analyst |
| **Vickie Bourdas Martinez** | Community Relations | CEO |
| **Alexander S. Kasendorf** | Legal Affairs | Managing Partner |
| **Vijay Amarshi** | Financial Strategy | Financial Advisor |
| **Pegi Matsuda** | Board Development | On Board Business & Community Consulting |

---

## LA BusinessSource Centers

5 EWDD-funded locations — **all services FREE** to LA businesses.

| Location | Operator | Address | Phone |
|----------|----------|---------|-------|
| Hollywood | PACE | 1370 N. St. Andrews Pl #215, LA 90028 | (213) 989-3158 |
| Pico-Union / Westlake | PACE | 1055 Wilshire Blvd #900-B, LA 90017 | (213) 353-9400 |
| East LA / Boyle Heights | NEW | 1780 E. First Street, LA 90033 | (323) 568-1520 |
| Southeast LA | CRCD | 3761 S. Hill St. Unit #1, LA 90007 | (213) 743-6193 |
| West Valley / Koreatown | MCS | 3333 Wilshire Blvd Suite 405, LA 90010 | (213) 355-5300 |

Text `BSC` to ACoolAGENT on WhatsApp for the full interactive directory.

---

## Estimated Costs

### One-Time Setup
| Item | Cost |
|------|------|
| CA LLC-1 (ACoolHOLDINGS) | $70 |
| CA ARTS-GS (501c3 corps) | $30 each |
| IRS Form 1023-EZ (501c3) | $275 each |
| IRS EIN applications | FREE |
| LA County FBN filings | ~$26 each |
| **Total (first 3 entities)** | **~$500–700** |

### Monthly Operating
| Service | Cost |
|---------|------|
| Vercel (Hobby) | FREE |
| Claude API (~1,000 conversations) | ~$10–30 |
| WhatsApp Business API | ~$15–40 |
| **Total** | **~$25–70/mo** |

---

## File Structure

```
acoolagent/
├── index.html                          ← Dashboard (GitHub Pages entry point)
├── ACoolECOSYSTEM_master_dashboard.html ← Master dashboard source
├── ACOOLAGENT_LAUNCH_MANIFEST.html     ← Interactive launch checklist
├── README.md                           ← This file
├── .gitignore
│
├── whatsapp-webhook/                   ← Backend — deploy this to Vercel
│   ├── server.js                       ← Express server + Claude integration
│   ├── messageRouter.js                ← Command routing (cost optimization)
│   ├── conversationStore.js            ← Session memory (in-memory / Redis)
│   ├── package.json
│   ├── vercel.json
│   ├── .env.example
│   └── DEPLOY.md                       ← Detailed deployment guide
│
└── docs/                               ← Supporting documentation
    ├── api-specifications.json         ← Full API spec
    ├── implementation-plan.mermaid     ← Architecture diagrams
    ├── data-management.mermaid         ← Data flow diagrams
    ├── onboarding-framework.md         ← User onboarding design
    ├── contact-strategy.md             ← Board outreach strategy
    ├── investment-pitch.md             ← Investor narrative
    ├── seed-funding.md                 ← Funding strategy
    └── implementation-team.md         ← Team build-out plan
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| AI | Claude claude-sonnet-4-6 (Anthropic) |
| Messaging | WhatsApp Business Cloud API (Meta) |
| Backend | Node.js 20 + Express 4 (ESM modules) |
| Hosting | Vercel (serverless) |
| Session Storage | In-memory (dev) / Upstash Redis (prod) |
| Dashboard | Vanilla HTML/CSS/JS + Chart.js |
| Version Control | Git + GitHub |

---

## Roadmap

- [x] 22-entity organizational architecture
- [x] Interactive ecosystem dashboard (9 tabs)
- [x] WhatsApp webhook backend with Claude AI
- [x] 14 board member profiles + outreach system
- [x] Full BSC directory (5 locations) in dashboard + WhatsApp
- [x] LA Resources tab with funding programs
- [x] Launch manifest with terminal commands
- [ ] Deploy ACoolAGENT to production Vercel
- [ ] Connect to live Meta WhatsApp Business Number
- [ ] File ACoolHOLDINGS LLC (CA SOS)
- [ ] Send board interest checklists
- [ ] File 501c3 for ACoolACADEMY + ACoolCAUSE
- [ ] ACoolACADEMY first cohort enrollment
- [ ] Upstash Redis for persistent conversations
- [ ] Multi-language support (Spanish primary)

---

## Contributing

This is an active, founder-led project. If you're a board member, technical collaborator, or LA-based entrepreneur who wants to get involved:

**Keith McPherson — Founder & CEO**
- Email: [iam@acoolnerd.com](mailto:iam@acoolnerd.com)
- GitHub: [@ACoolNERD](https://github.com/ACoolNERD)

For bugs, enhancements, or integration requests — open an issue or PR.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

The ACoolECOSYSTEM brand, entity names, and board member information are proprietary to ACoolTRUST / Keith McPherson. The underlying code is open source.

---

<div align="center">

**Built in Los Angeles · Powered by Anthropic Claude · Serving the Community**

*ACoolECOSYSTEM — 22 entities. One vision. LA's future.*

</div>
