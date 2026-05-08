// ── ENTITIES ──────────────────────────────────────────────────────────
const ENTITIES = [
  {name:'ACoolTRUST',type:'Family Trust',cluster:'Governance',purpose:'Top-level asset protection & succession planning',priority:'high'},
  {name:'ACoolHOLDINGS',type:'Manager-Managed LLC',cluster:'Governance',purpose:'Parent holding company for all subsidiaries',priority:'high'},
  {name:'ACoolACADEMY',type:'501c3',cluster:'Education',purpose:'Workforce training, certification & LA resource navigation',priority:'high'},
  {name:'ACoolDATASET',type:'LLC',cluster:'Education',purpose:'Data collection, analysis & business intelligence',priority:'med'},
  {name:'ACoolKNOWLEDGEBASE',type:'LLC',cluster:'Education',purpose:'Centralized IP, best practices & knowledge management',priority:'med'},
  {name:'ACoolBUSINESS',type:'S-Corp',cluster:'Business',purpose:'Core revenue-generating operating entity',priority:'high'},
  {name:'ACoolENTERPRISE',type:'C-Corp',cluster:'Business',purpose:'Large-scale growth, investment & future public offering',priority:'med'},
  {name:'ACoolLTD',type:'LLC',cluster:'Business',purpose:'International business & cross-border transactions',priority:'low'},
  {name:'ACoolJOBBOARD',type:'LLC',cluster:'Business',purpose:'Workforce placement & employment marketplace',priority:'med'},
  {name:'ACoolCAUSE',type:'501c3',cluster:'Social Impact',purpose:'Charitable programs & mission-driven community initiatives',priority:'high'},
  {name:'ACoolENDOWMENT',type:'501c3',cluster:'Social Impact',purpose:'Long-term asset management funding nonprofit activities',priority:'med'},
  {name:'ACoolGRANT',type:'501c3',cluster:'Social Impact',purpose:'Grant acquisition & distribution to aligned orgs',priority:'med'},
  {name:'ACoolCOOP',type:'Cooperative Corp',cluster:'Social Impact',purpose:'Member-owned shared services & democratic governance',priority:'low'},
  {name:'ACoolFRAMEWORK',type:'LLC',cluster:'Infrastructure',purpose:'Standardized methodologies & process IP',priority:'med'},
  {name:'ACoolINFRASTRUCTURE',type:'LLC',cluster:'Infrastructure',purpose:'Tech, facilities & operational systems management',priority:'med'},
  {name:'ACoolAI',type:'LLC',cluster:'Infrastructure',purpose:'AI development, ACoolAGENT & integration across entities',priority:'high'},
  {name:'ACoolHEALTH',type:'501c3',cluster:'Health',purpose:'Health promotion, wellness education & healthcare access',priority:'med'},
  {name:'ACoolLEADERSHIP',type:'LLC',cluster:'Leadership',purpose:'Executive coaching & strategic consulting services',priority:'low'},
  {name:'ACoolLEADER',type:'LLC',cluster:'Leadership',purpose:'Individual leadership training & personal development',priority:'low'},
  {name:'ACoolBOARD',type:'501c6',cluster:'Leadership',purpose:'Business league promoting governance best practices',priority:'med'},
  {name:'ACoolNERD',type:'S-Corp',cluster:'Leadership',purpose:'Technical consulting & implementation services (revenue NOW)',priority:'high'},
  {name:'ACoolOSINT',type:'LLC',cluster:'Leadership',purpose:'Open-source intelligence & strategic risk assessment',priority:'low'},
  {name:'ACoolMOU',type:'LLC',cluster:'Leadership',purpose:'MOU development & formal agreement management',priority:'low'},
];

// ── BOARD MEMBERS ──────────────────────────────────────────────────────
const BOARD = [
  {
    name:'Kenn Phillips',role:'Chair, ACoolHOLDINGS Board',title:'Strategic Oversight Lead',
    accent:'#f97316',initials:'KP',entities:'ACoolHOLDINGS · ACoolTRUST',
    bg:'Former President/CEO, The Valley Economic Alliance. 25+ years economic development, public-private partnerships, workforce development.',
    expertise:['Economic Development','Business Strategy','Public-Private Partnerships','Workforce Development'],
    email:'kenn.phillips@acoolecosystem.com'
  },
  {
    name:'Dennis Zine',role:'Vice Chair, ACoolHOLDINGS Board',title:'Regulatory Affairs Lead',
    accent:'#06b6d4',initials:'DZ',entities:'ACoolBUSINESS · ACoolENTERPRISE',
    bg:'LA City Councilman (3 terms), LAPD 33 years. Deep expertise navigating complex regulatory environments and government relations.',
    expertise:['Government Relations','Regulatory Compliance','Public Policy','Municipal Operations'],
    email:'dennis.zine@acoolecosystem.com'
  },
  {
    name:'Kecia Washington',role:'Secretary/Treasurer, ACoolHOLDINGS Board',title:'Operational Integration Lead',
    accent:'#8b5cf6',initials:'KW',entities:'ACoolENDOWMENT · ACoolGRANT',
    bg:'Director of Community Investment, LADWP. 20+ years public utilities & community investment. Managed multi-million dollar budgets.',
    expertise:['Community Investment','Financial Oversight','Operational Integration','Strategic Planning'],
    email:'kecia.washington@acoolecosystem.com'
  },
  {
    name:'Dianne F. Harrison',role:'Chair, ACoolACADEMY Board',title:'Academic Leadership',
    accent:'#10b981',initials:'DH',entities:'ACoolACADEMY · ACoolKNOWLEDGEBASE',
    bg:'President Emerita, CSU Northridge. 30+ years higher education. Led CSUN and CSU Monterey Bay. Champion of student success and equity.',
    expertise:['Higher Education','Academic Governance','Educational Strategy','Institutional Partnerships'],
    email:'dianne.harrison@acoolecosystem.com'
  },
  {
    name:'Tarry Kang, CFRE',role:'Director, ACoolACADEMY Board',title:'Educational Fundraising',
    accent:'#f43f5e',initials:'TK',entities:'ACoolACADEMY · ACoolENDOWMENT',
    bg:'Certified Fund Raising Executive (CFRE), CSUN Development. Led major gift campaigns, scholarship programs, and donor stewardship.',
    expertise:['Educational Fundraising','Higher Ed Development','Donor Relations','Campaign Management'],
    email:'tarry.kang@acoolecosystem.com'
  },
  {
    name:'Richard Katz',role:'Director, ACoolHOLDINGS Board',title:'Business Growth Lead',
    accent:'#eab308',initials:'RK',entities:'ACoolBUSINESS · ACoolLTD',
    bg:'President, LADWP Board of Commissioners. CA State Assembly 16 years, chaired Transportation Committee. Infrastructure and P3 expert.',
    expertise:['Public Policy','Utilities Management','Business Strategy','Infrastructure Development'],
    email:'richard.katz@acoolecosystem.com'
  },
  {
    name:'Stuart Waldman',role:'Chair, ACoolBUSINESS Board',title:'Business Leadership',
    accent:'#f97316',initials:'SW',entities:'ACoolBUSINESS · ACoolENTERPRISE',
    bg:'President, Valley Industry & Commerce Association (VICA). 15+ years business advocacy, policy development, and ecosystem building in San Fernando Valley.',
    expertise:['Business Advocacy','Policy Development','Government Relations','Ecosystem Building'],
    email:'stuart.waldman@acoolecosystem.com'
  },
  {
    name:'David Moon',role:'Director, ACoolHOLDINGS Board',title:'Innovation Strategy Lead',
    accent:'#06b6d4',initials:'DM',entities:'ACoolFRAMEWORK · ACoolAI',
    bg:'Chief Instigator, IntersectLA. 20+ years innovation strategy, design thinking, digital transformation. Combines creative vision with practical execution.',
    expertise:['Innovation Strategy','Technology Integration','Design Thinking','Digital Transformation'],
    email:'david.moon@acoolecosystem.com'
  },
  {
    name:'Michael Hadley',role:'Director, ACoolHOLDINGS Board',title:'Government Relations Lead',
    accent:'#8b5cf6',initials:'MH',entities:'ACoolLEADERSHIP · ACoolBOARD',
    bg:'Government Relations Officer, Western Municipal Water District. 15+ years navigating regulatory environments, public affairs, and P3 infrastructure funding.',
    expertise:['Government Relations','Public Affairs','Infrastructure Development','Regulatory Navigation'],
    email:'michael.hadley@acoolecosystem.com'
  },
  {
    name:'Vahid Khorsand',role:'Director, ACoolACADEMY Board',title:'Civic Engagement',
    accent:'#10b981',initials:'VK',entities:'ACoolACADEMY · ACoolCAUSE',
    bg:'Commissioner & recovering equities analyst. Transitioned from Wall Street to community leadership. Financial analysis meets economic development.',
    expertise:['Civic Engagement','Financial Analysis','Economic Development','Community Investment'],
    email:'vahid.khorsand@acoolecosystem.com'
  },
  {
    name:'Vickie Bourdas Martinez',role:'Director, ACoolACADEMY Board',title:'Community Relations',
    accent:'#f43f5e',initials:'VB',entities:'ACoolACADEMY · ACoolCOOP',
    bg:'CEO with extensive community relations, event management, and marketing communications experience. Expert relationship builder and outreach strategist.',
    expertise:['Community Relations','Event Management','Marketing Communications','Organizational Leadership'],
    email:'vickie.bourdas@acoolecosystem.com'
  },
  {
    name:'Alexander S. Kasendorf',role:'Director, ACoolBUSINESS Board',title:'Legal Affairs',
    accent:'#eab308',initials:'AK',entities:'ACoolBUSINESS · ACoolMOU',
    bg:'Managing Partner, prominent law firm. 20+ years business law, regulatory compliance, and corporate governance across multiple industries.',
    expertise:['Business Law','Regulatory Compliance','Contract Management','Corporate Governance'],
    email:'alex.kasendorf@acoolecosystem.com'
  },
  {
    name:'Vijay Amarshi',role:'Director, ACoolBUSINESS Board',title:'Financial Strategy',
    accent:'#f97316',initials:'VA',entities:'ACoolBUSINESS · ACoolLTD',
    bg:'Financial management executive. Led organizations through significant growth. Expert in financial strategy, operational efficiency, and multi-unit P&L management.',
    expertise:['Financial Management','Strategic Planning','Operational Efficiency','Business Growth'],
    email:'vijay.amarshi@acoolecosystem.com'
  },
  {
    name:'Pegi Matsuda',role:'Board Development Consultant',title:'On Board Business & Community Consulting',
    accent:'#8b5cf6',initials:'PM',entities:'All Boards & Advisory Councils',
    bg:'Founder, On Board Business & Community Consulting. 25+ years board development, governance design, and organizational strategy across multiple sectors.',
    expertise:['Board Development','Governance Structures','Strategic Planning','Leadership Development'],
    email:'pegi.matsuda@acoolecosystem.com'
  },
];

// ── BSC LOCATIONS ──────────────────────────────────────────────────────
const BSC_LOCATIONS = [
  {region:'Hollywood',name:'Hollywood BSC',address:'1370 N. St. Andrews Place #215, LA 90028',phone:'213-989-3158',operator:'PACE',langs:'English, Korean, Thai, Mandarin, Cantonese, Tagalog, Spanish, Armenian, Farsi',email:'hollywoodlabsc@pacela.org'},
  {region:'Pico-Union / Westlake',name:'Pico-Union/Westlake BSC',address:'1055 Wilshire Blvd #900-B, LA 90017',phone:'213-353-9400',operator:'PACE',langs:'English, Spanish, Korean, Mandarin, Cantonese, French, Lingala, Tagalog, Thai, Armenian, Farsi, Hindi, Gujarati, Marathi, Punjabi',email:'PicoUnionLABSC@pacela.org'},
  {region:'East LA / Boyle Heights',name:'East LA BSC',address:'1780 East First Street, LA 90033',phone:'323-568-1520',operator:'New Economics for Women',langs:'English, Spanish',email:'ELABSC@neworg.us'},
  {region:'Southeast LA',name:'Southeast LA BSC',address:'3761 S. Hill St. Unit #1, LA 90007',phone:'213.743.6193',operator:'CRCD',langs:'English, Spanish',email:'info@coalitionrcd.org'},
  {region:'Southeast LA (Alt)',name:'Southeast LA BSC (Alt)',address:'200 E. Washington Blvd, LA 90015',phone:'213.743.6193',operator:'CRCD',langs:'English, Spanish',email:'info@coalitionrcd.org'},
  {region:'West Valley',name:'West Valley BSC',address:'Contact MCS for address',phone:'747-265-6201',operator:'MCS',langs:'English, Spanish',email:'info@mcscareergroup.com'},
  {region:'Central LA',name:'Central LA WorkSource / BSC',address:'3333 Wilshire Blvd Suite 405, LA 90010',phone:'213.355.5300',operator:'MCS',langs:'English, Spanish',email:'info@mcscareergroup.com'},
  {region:'San Fernando Valley',name:'Valley BSC (EWDD)',address:'Contact EWDD for current location',phone:'213-744-7300',operator:'EWDD Partner',langs:'English, Spanish, Armenian',email:'ewdd@lacity.org'},
  {region:'Harbor',name:'Harbor BSC',address:'Contact EWDD for current location',phone:'213-744-7300',operator:'EWDD Partner',langs:'English, Spanish',email:'ewdd@lacity.org'},
  {region:'South LA',name:'South LA BSC',address:'Contact EWDD for current location',phone:'213-744-7300',operator:'EWDD Partner',langs:'English, Spanish',email:'ewdd@lacity.org'},
  {region:'West LA',name:'West LA BSC',address:'Contact EWDD for current location',phone:'213-744-7300',operator:'EWDD Partner',langs:'English, Spanish',email:'ewdd@lacity.org'},
  {region:'Pomona Valley',name:'Pomona Valley AJCC',address:'Contact MCS for address',phone:'213.355.5300',operator:'MCS',langs:'English, Spanish',email:'info@mcscareergroup.com'},
  {region:'East San Gabriel Valley',name:'East San Gabriel AJCC',address:'Contact MCS for address',phone:'213.355.5300',operator:'MCS',langs:'English, Spanish',email:'info@mcscareergroup.com'},
  {region:'Orange County',name:'OC Senior Employment (SCSEP)',address:'Contact MCS for OC location',phone:'213.355.5300',operator:'MCS',langs:'English, Spanish',email:'info@mcscareergroup.com'},
];

// ── ROADMAP PHASES ─────────────────────────────────────────────────────
const PHASES = [
  {
    num:'0', title:'System Prep', sub:'This week — 15 min',
    tasks:[
      'Run: nvm use 20 && nvm alias default 20',
      'Run: npm install -g vercel && vercel login',
      'Install ngrok: brew install ngrok',
      'Verify: node --version (must be v20+)',
    ]
  },
  {
    num:'1', title:'Legal Foundation', sub:'Weeks 1–4',
    tasks:[
      'File ACoolHOLDINGS LLC — bizfile.sos.ca.gov ($70)',
      'Get EIN for ACoolHOLDINGS — IRS.gov (free, instant)',
      'File Fictitious Business Name — LA County Registrar ($26)',
      'Register ACoolNERD S-Corp with CA SOS',
      'Get City of LA Business Tax Registration Certificate',
      'Open business bank account (Chase, BofA, or credit union)',
      'File IRS Form 8832 (entity classification) if needed',
    ]
  },
  {
    num:'2', title:'API & Accounts', sub:'Week 2 — 1 hour',
    tasks:[
      'Get Anthropic API key — console.anthropic.com',
      'Create Meta Business Account — business.facebook.com',
      'Apply for WhatsApp Business API access',
      'Create Vercel account — vercel.com',
      'Set up GitHub repo for whatsapp-webhook backend',
    ]
  },
  {
    num:'3', title:'Deploy ACoolAGENT', sub:'Week 3 — 45 min',
    tasks:[
      'Clone whatsapp-webhook template from GitHub',
      'Copy .env.example → .env, fill in all keys',
      'Run: npm install && node server.js (local test)',
      'Start ngrok: ngrok http 3000',
      'Paste ngrok URL into Meta webhook config + verify',
      'Run: vercel --prod to deploy live',
      'Send test WhatsApp message: START',
    ]
  },
  {
    num:'4', title:'Board Campaign', sub:'Week 2–3',
    tasks:[
      'Send interest email to Kenn Phillips (Chair)',
      'Send interest email to Dennis Zine (Vice Chair)',
      'Send interest email to Kecia Washington (Sec/Treasurer)',
      'Send remaining 11 board member emails',
      'Track YES/NO responses in Board Hub tab',
      'Schedule first board orientation call',
      'Confirm Pegi Matsuda as board consultant',
    ]
  },
  {
    num:'5', title:'501c3 Filings', sub:'After Phase 1',
    tasks:[
      'File ACoolACADEMY 501c3 — IRS Form 1023-EZ (~$275)',
      'File ACoolCAUSE 501c3',
      'File ACoolGRANT 501c3',
      'File ACoolHEALTH 501c3',
      'Register with CA AG Registry of Charitable Trusts',
      'Apply for CA tax-exempt status (FTB Form 3500A)',
    ]
  },
  {
    num:'6', title:'Revenue Sprint', sub:'This week — NOW',
    tasks:[
      'Define $3,500 ACoolNERD consulting package',
      'List 10 warm contacts who need tech/AI consulting',
      'Make 10 calls/DMs offering discovery session',
      'Close first client → send invoice via Wave (free)',
      'Use revenue to fund Holdings filing + bank account',
      'Target: $10K in 30 days via ACoolNERD',
    ]
  },
  {
    num:'7', title:'BSC & Partnerships', sub:'Month 2',
    tasks:[
      'Schedule intake at nearest BSC (free consulting)',
      'Apply for ACoolACADEMY partnership with NEW/PACE',
      'Connect ACoolJOBBOARD with MCS workforce pipeline',
      'Apply for CRCD/MCS micro-grant ($5K available)',
      'Attend EWDD business workshop (free)',
      'Submit ACoolCAUSE for City of LA grant programs',
    ]
  },
];

// ── WHATSAPP RESPONSES ─────────────────────────────────────────────────
const WA_RESPONSES = {
  START: `⚡ *ACoolAGENT Command Menu*\n\n📋 *COMMANDS:*\n• *START* — This menu\n• *FUNDING* — LA funding sources\n• *BSC* — Free business centers near you\n• *BOARD* — Board member status\n• *ADVISOR* — Strategic advice (IQ 180 mode)\n• *ROADMAP* — Your launch checklist\n• *ENTITIES* — Full org structure\n• *STATUS* — Ecosystem health\n\nOr just ask me anything about your business! 🚀`,
  FUNDING: `💰 *LA Funding Sources for ACoolECOSYSTEM*\n\n🏦 *Micro-Loans (Apply Now):*\n• MCS Business Accelerator — $5K microloans (ITIN OK)\n• NEW/NCI Lending — Small business + homebuyer\n• CRCD Southeast LA BSC — SBA packaging\n\n🏛️ *City/County Grants:*\n• EWDD Business Programs (free BSC consulting)\n• Councilmember grants (check your district)\n• ULA Emergency Income Support (up to $19K)\n\n📊 *SBA Programs:*\n• SBA 7(a) loans — up to $5M\n• SBA Microloan — up to $50K\n• SBA Community Advantage\n\n➡️ Start FREE at your nearest BSC. Type *BSC* for locations.`,
  BSC: `📍 *BusinessSource Centers — 100% FREE*\n\nAll services at no cost to LA entrepreneurs:\n✅ 1-on-1 Business Consulting\n✅ Business Plan Development\n✅ Access to Capital (microloans)\n✅ Permit & License Help\n✅ Employee Hiring Support\n✅ Tax Credits & Incentives\n\n🗺️ *Key Locations:*\n• Hollywood — 1370 N. St. Andrews Pl #215 · 213-989-3158\n• Pico-Union — 1055 Wilshire Blvd #900-B · 213-353-9400\n• East LA — 1780 E. First St · 323-568-1520\n• Southeast LA — 3761 S. Hill St · 213-743-6193\n• West Valley — MCS · 747-265-6201\n\n➡️ Call EWDD: 213-744-7300 to find your nearest center.`,
  BOARD: `🧑‍💼 *ACoolBOARD Status*\n\n👥 *14 Members Identified:*\n\n🟢 *Executive Leadership:*\n• Kenn Phillips — Chair (Strategic Oversight)\n• Dennis Zine — Vice Chair (Regulatory Affairs)\n• Kecia Washington — Sec/Treasurer (Operations)\n\n📚 *Academic:*\n• Dr. Dianne Harrison — ACoolACADEMY Chair\n• Tarry Kang, CFRE — Educational Fundraising\n\n💼 *Business:*\n• Richard Katz — Business Growth Lead\n• Stuart Waldman — ACoolBUSINESS Chair\n\n🔴 *Action needed:* Send interest emails to all 14 members. Use the Board Hub tab to track responses.`,
  ADVISOR: `🧠 *ACoolAGENT — Strategic Advisor Mode*\n\n*Hard truth:* You have the structure, the board, the vision — but no revenue and no legal filings. That's a fantasy, not a business.\n\n*Your 3 moves this week:*\n1️⃣ Close ONE client through ACoolNERD (target: $3,500)\n2️⃣ Use that cash to file ACoolHOLDINGS LLC ($70)\n3️⃣ Send board emails to Kenn, Dennis, and Kecia TODAY\n\n*The leverage point:* ACoolNERD (S-Corp consulting) is your revenue engine. Everything else gets funded from there.\n\n*Your assignment:* Name 3 people you can call TODAY who need tech/AI consulting. Do it now. Don't plan — execute.\n\n💬 Ask me: "What should my consulting package look like?" or "How do I pitch ACoolNERD?"`,
  ROADMAP: `🗺️ *ACoolECOSYSTEM Launch Roadmap*\n\n*Phase 0 — Right Now:*\n☐ nvm use 20 && vercel login\n\n*Phase 1 — Legal (Weeks 1–4):*\n☐ File ACoolHOLDINGS LLC ($70)\n☐ Get EIN (free)\n☐ Open business bank account\n\n*Phase 2 — APIs (Week 2):*\n☐ Anthropic API key\n☐ Meta WhatsApp Business API\n\n*Phase 3 — Deploy Agent (Week 3):*\n☐ WhatsApp webhook live\n☐ Test: send START to your WA number\n\n*Phase 6 — Revenue (NOW):*\n☐ Define $3,500 ACoolNERD package\n☐ Close first client\n☐ Send invoice\n\n➡️ Type *ADVISOR* for strategic guidance.`,
  ENTITIES: `🏛️ *ACoolECOSYSTEM — 22 Entities*\n\n📚 Education: ACoolACADEMY (501c3) · ACoolDATASET · ACoolKNOWLEDGEBASE\n💼 Business: ACoolBUSINESS (S-Corp) · ACoolENTERPRISE (C-Corp) · ACoolLTD · ACoolJOBBOARD\n🌍 Impact: ACoolCAUSE · ACoolENDOWMENT · ACoolGRANT · ACoolCOOP\n⚙️ Tech: ACoolFRAMEWORK · ACoolINFRASTRUCTURE · ACoolAI\n❤️ Health: ACoolHEALTH\n🏛️ Leadership: ACoolLEADERSHIP · ACoolLEADER · ACoolBOARD · ACoolNERD · ACoolOSINT · ACoolMOU\n\n🔑 Governed by: ACoolTRUST → ACoolHOLDINGS`,
  STATUS: `📊 *Ecosystem Health Report*\n\n✅ GitHub Pages: LIVE\n✅ Dashboard: Deployed (score 9.5/10)\n✅ Board: 14 members identified\n✅ WhatsApp Agent: Simulator active\n🟡 ACoolHOLDINGS: Not yet filed\n🟡 Revenue: $0 (ACoolNERD needs first client)\n🟡 WhatsApp API: Pending Meta approval\n🔴 501c3 filings: Pending Holdings\n\n📈 *Next milestone:* File Holdings + close first client\n\nType *ADVISOR* for your action plan.`,
};
