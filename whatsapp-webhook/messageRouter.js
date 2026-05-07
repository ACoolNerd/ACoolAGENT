/**
 * ACoolAGENT Message Router
 * Handles keyword commands without hitting Claude API — fast, cheap, reliable.
 */

export class MessageRouter {
  route(upper) {
    if (/^(START|HOLA|HELLO|HI|BEGIN|COMENZAR)$/.test(upper)) return this.onboard();
    if (/^(HELP|AYUDA|\?)$/.test(upper)) return this.help();
    if (/^(FUNDING|FUNDS|DINERO|FINANCIAMIENTO|GRANTS?)$/.test(upper)) return this.funding();
    if (/^(REGISTER|REGISTRO|REGISTRAR)$/.test(upper)) return this.register();
    if (/^(PERMITS?|PERMISOS?)$/.test(upper)) return this.permits();
    if (/^(ACADEMY|ACADEMIA|COURSES?|CLASES?)$/.test(upper)) return this.academy();
    if (/^(STATUS|ESTADO|PROGRESS)$/.test(upper)) return this.status();
    if (/^(DOCS?|DOCUMENTS?|DOCUMENTOS?)$/.test(upper)) return this.docs();
    if (/^(RESOURCES?|RECURSOS?)$/.test(upper)) return this.resources();
    if (/^(BSC|BUSINESSSOURCE|BUSINESS SOURCE|CENTRO DE NEGOCIOS)$/.test(upper)) return this.bscDirectory();
    if (/^(MICROLOAN|MICROPRESTAMO|MICRO LOAN|MICRO PRESTAMO)$/.test(upper)) return this.microloans();
    if (/^(WOMEN|MUJERES|WOMENS|MUJER)$/.test(upper)) return this.womenResources();
    if (/^(VENDOR|VENDEDOR|SIDEWALK VENDOR|STREET VENDOR)$/.test(upper)) return this.vendorPermit();
    if (/^(FIRE|ALTADENA|DISASTER RELIEF|AYUDA INCENDIO)$/.test(upper)) return this.fireRelief();
    if (/^(BOARD|JUNTA)$/.test(upper)) return this.board();
    if (/^(ADVISOR|CONSEJERO|STRATEGY|ESTRATEGIA)$/.test(upper)) return this.advisor();
    return null; // Falls through to Claude
  }

  onboard() {
    return `Welcome to *ACoolAGENT*! 👋

I'm your Los Angeles business navigator, powered by the ACoolECOSYSTEM.

I can help you:
✅ Register your business step-by-step
💰 Find LA funding opportunities
📋 Get the right permits
🎓 Enroll in ACoolACADEMY
🤖 Connect to strategic advisors

*Quick start — tell me:*
1️⃣ What type of business are you starting?
2️⃣ Where are you in the process?

Or use these commands:
• REGISTER — start registration
• FUNDING — find money
• ACADEMY — our free courses
• HELP — see all commands`;
  }

  help() {
    return `*ACoolAGENT Commands* 📱

*Business Setup*
• REGISTER — step-by-step registration
• PERMITS — permit requirements
• DOCS — document checklist

*Money & Funding*
• FUNDING — all LA funding sources
• MICROLOAN — microloans $500–$50K
• FIRE — Altadena fire relief loans

*Free Support Centers*
• BSC — all BusinessSource Centers
• WOMEN — women entrepreneur resources
• VENDOR — sidewalk/street vendor permits

*Education*
• ACADEMY — ACoolACADEMY enrollment
• RESOURCES — full agency directory

*Strategy*
• ADVISOR — strategic consultation
• BOARD — ACoolBOARD membership
• STATUS — check your progress

Hablo español 🇲🇽 — escríbeme en español
Questions? iam@acoolnerd.com`;
  }

  funding() {
    return `💰 *LA Funding Opportunities*

*FREE City Programs (via EWDD BSCs)*
📍 Microloans through BSC operators — $500–$50K
📍 NCI Community Investments (via NEW) — small biz lending
📍 LACDBG Microenterprise Grants
📍 BusinessSource Centers — free loan packaging help
📍 MCS Business Accelerator — $5K microloan + training

*Federal Programs*
🏛️ SBA 7(a) Loans — up to $5M
🏛️ SBA Microloans — $5K–$50K (via SBDC)
🏛️ SBDC at LA Valley College — (818) 947-2957
🏛️ CDFI Fund — Community Development Finance

*Disaster / Emergency Relief*
🆘 NCI Altadena Fire Relief — $2,500 forgivable loan
🆘 ULA Emergency Income Support — up to $19,000 (seniors/disabled renters)
→ Apply in person at NEW, Canoga Park: (818) 887-3872

*Women & BIPOC Specific*
👩 NEW Women's Business Center — neweconomicsforwomen.org
👩 Mujeres y Dinero Program (NEW) — Spanish language financial coaching
👩 PACE Women's Business programs

*To Apply You'll Need:*
✅ Business plan (BSC can help you write it — free)
✅ EIN number
✅ 2 years financials or projections
✅ Credit score (BSC can help with credit repair too)

Reply *BSC* to find your nearest free help center
Reply *MICROLOAN* for loan-specific details`;
  }

  register() {
    return `📝 *LA Business Registration — 5 Steps*

*Step 1: EIN (Federal)*
→ IRS.gov → Apply for EIN online
→ Free, takes 10 minutes
→ You need this before everything else

*Step 2: Business Name*
→ LA County Registrar-Recorder
→ Fictitious Business Name (FBN)
→ Cost: ~$26 + publication fee

*Step 3: City Tax Certificate*
→ LA Office of Finance
→ finance.lacity.org/businesstax
→ Required to operate in LA city

*Step 4: Permits & Licenses*
→ Varies by business type
→ Reply PERMITS for your specific list

*Step 5: Business Bank Account*
→ Bring EIN + formation docs
→ Keep personal & business separate!

*Which step are you on?* Reply with the number and I'll give you exact instructions, links, and costs.`;
  }

  permits() {
    return `📋 *Permits by Business Type*

*Food & Restaurant* 🍽️
→ LA County Health Permit
→ LADBS Certificate of Occupancy
→ Fire inspection clearance

*Retail Store* 🏪
→ Business License + Seller's Permit (CDTFA)
→ Certificate of Occupancy

*Home-Based Business* 🏠
→ Home Occupation Permit (LADBS)
→ Zoning verification first

*Professional Services* 💼
→ State professional license (varies)
→ City Business Tax Registration

*Construction/Contracting* 🔨
→ CSLB Contractor License
→ City building permits per project

*Which type is your business?* Reply with your industry and I'll give you the exact permit list, fees, and application links.`;
  }

  academy() {
    return `🎓 *ACoolACADEMY — Open Enrollment*

*8-Week: Navigating LA Business Resources*

What you'll learn:
✅ Federal requirements & EIN registration
✅ Business name registration & county filing
✅ City registration & tax compliance
✅ Permits, licenses & regulatory compliance
✅ Financial management & banking
✅ LA funding strategy & applications
✅ Launch strategy & ongoing support

*Program Details*
📅 Weekly 3-hour sessions (6–9PM)
💻 Hybrid: In-person + virtual
👥 20 students max per cohort
🏆 Certification upon completion
💰 FREE for qualified applicants

*You'll get:*
→ Personalized LA Business Roadmap
→ Direct agency referrals
→ 1-year mentorship access

Reply *ENROLL* to secure your spot or ask me any questions about the program.`;
  }

  status() {
    return `📊 *Check Your Business Registration Status*

To look up your specific filings, visit:

*EIN Status*
→ IRS.gov → Check EIN application

*FBN / Business Name*
→ lavote.net → Business Filings Search

*City Tax Registration*
→ finance.lacity.org → Account lookup

*State LLC/Corp Status*
→ bizfile.sos.ca.gov → Entity search

*Permits*
→ ladbs.org → Permit Status

Need help interpreting what you find? Tell me what you're seeing and I'll help you figure out the next step.`;
  }

  docs() {
    return `📄 *Document Checklist — Business Registration*

*Required for Most Businesses*
☐ Government-issued ID (driver's license / passport)
☐ Social Security Number or ITIN
☐ Business address (physical or virtual)
☐ Business name (check availability first)
☐ Business description (2-3 sentences)

*For LLCs & Corporations*
☐ Articles of Organization / Incorporation
☐ Operating Agreement
☐ Initial Statement of Information (CA Form SI-100)

*For Funding Applications*
☐ Business plan
☐ 2 years tax returns (personal + business)
☐ Bank statements (3–6 months)
☐ Credit report
☐ Collateral documentation (if applicable)

*For 501c3 Applications*
☐ Mission statement
☐ Board of directors list
☐ Conflict of interest policy
☐ Financial projections (3 years)
☐ IRS Form 1023 or 1023-EZ

Which type applies to you? Reply and I'll refine this list for your specific situation.`;
  }

  resources() {
    return `🗂️ *LA Business Resource Directory*

*FREE BusinessSource Centers (EWDD)*
Reply *BSC* for full directory with addresses & hours

*EWDD Main Line*
📞 213-744-7300 | ewdd.lacity.gov

*BSC Operators*
🏢 PACE — Hollywood + Pico-Union | pacelabdc.org
🏢 NEW — East LA/Boyle Heights | neweconomicsforwomen.org
🏢 CRCD — Southeast LA | coalitionrcd.org
🏢 MCS — West Valley + more | mcscareergroup.com

*Registration Agencies*
🏛️ IRS.gov — EIN (free, instant)
🏛️ bizfile.sos.ca.gov — LLC/Corp filings
🏛️ lavote.gov — FBN (business name)
🏛️ finance.lacity.gov — City Tax Certificate

*Permits & Compliance*
🔑 ladbs.org — Building & Safety permits
🔑 publichealth.lacounty.gov — Health permits
🔑 cdtfa.ca.gov — Seller's Permit (free)

*Lending & Capital*
💰 NCI Community Investments — neweconomicsforwomen.org
💰 SBA LA District — (818) 552-3210
💰 SBDC at LA Valley College — (818) 947-2957
💰 SCORE LA — score.org/losangeles

*Government Contracting*
📋 rampla.org — City of LA contracts
📋 doingbusiness.lacounty.gov — County contracts

Reply *BSC* for nearest center | *FUNDING* for money | *WOMEN* for women-specific programs`;
  }

  bscDirectory() {
    return `🏢 *BusinessSource Centers — All Locations*
Operated by EWDD City of LA | All services FREE

━━━━━━━━━━━━━━━━━━
🎬 *HOLLYWOOD*
📍 1370 N. St. Andrews Place #215, LA 90028
📞 (213) 989-3158
✉️ hollywoodlabsc@pacela.org
🏢 Operator: PACE
🗣️ English, Korean, Thai, Mandarin, Cantonese, Tagalog, Spanish, Armenian, Farsi
🌐 pacelabdc.org

━━━━━━━━━━━━━━━━━━
🏙️ *PICO-UNION / WESTLAKE*
📍 1055 Wilshire Blvd #900-B, LA 90017
📞 (213) 353-9400
✉️ PicoUnionLABSC@pacela.org
🏢 Operator: PACE
🗣️ English, Spanish, Korean, Mandarin, Cantonese, French, Tagalog, Thai, Armenian, Farsi, Hindi, Punjabi + more
🌐 pacelabdc.org

━━━━━━━━━━━━━━━━━━
🌮 *EAST LA / BOYLE HEIGHTS*
📍 1780 E. First Street, LA 90033
📞 (323) 568-1520
✉️ ELABSC@neworg.us
🏢 Operator: New Economics for Women
🗣️ English, Spanish
🌐 neweconomicsforwomen.org

━━━━━━━━━━━━━━━━━━
🏘️ *SOUTHEAST LOS ANGELES*
📍 3761 S. Hill St. Unit #1, LA 90007
📞 (213) 743-6193
✉️ info@coalitionrcd.org
🏢 Operator: CRCD
⏰ Mon–Fri 8:30am–5pm (eve/Sat by appt)
📍 Alt location: 200 E. Washington Blvd, LA 90015
🌐 coalitionrcd.org

━━━━━━━━━━━━━━━━━━
🌄 *WEST VALLEY*
📍 3333 Wilshire Blvd, Suite 405, LA 90010
📞 (213) 355-5300
✉️ info@mcscareergroup.com
🏢 Operator: MCS (Social Purpose Corp)
🌐 mcscareergroup.com

━━━━━━━━━━━━━━━━━━
📞 EWDD Main: (213) 744-7300
🌐 ewdd.lacity.gov

*All centers offer:*
✅ Free one-on-one consulting
✅ Business plan development
✅ Access to microloans
✅ Permit & license assistance
✅ Multilingual advisors

Tell me your neighborhood and I'll find your closest center!`;
  }

  microloans() {
    return `💵 *Microloan Programs — LA Area*

*Through BusinessSource Centers (FREE help applying)*
BSC advisors help you apply at no cost to you.

🏢 *NCI Community Investments* (via NEW)
→ Serving minority communities, Greater LA
→ Altadena Fire Relief: $2,500 forgivable loan
→ neweconomicsforwomen.org | (323) 568-1520

🏢 *MCS Business Accelerator Program (BAP)*
→ 5-week program + $5K microloan opportunity
→ English & Spanish cohorts
→ Register: tinyurl.com/mcs-bap | (747) 265-6201

🏛️ *SBA Microloan Program*
→ $500–$50,000 for startups & small businesses
→ Flexible terms, lower credit requirements
→ Apply through SBDC: (818) 947-2957

🏛️ *SBDC Loan Prep (Free)*
→ Free 1-on-1 help getting loan-ready
→ Credit coaching, business plan, financials
→ LA Valley College SBDC: (818) 947-2957

📋 *What you typically need:*
✅ Business plan (BSC helps write it — free)
✅ EIN number
✅ 3–6 months bank statements
✅ Credit score (most programs: 550+)
✅ 2 years tax returns (or projections for new biz)

*Pro tip:* Visit your nearest BSC first — they package your loan application for FREE and know which lenders are currently funded.

Reply *BSC* for nearest center address`;
  }

  womenResources() {
    return `👩‍💼 *Women Entrepreneur Resources — LA*

🏢 *New Economics for Women (NEW)*
→ Founded 1985 — first Latina-led economic dev nonprofit
→ Serves women, BIPOC & immigrant entrepreneurs
→ East LA BSC: 1780 E. First St | (323) 568-1520
→ Canoga Park: 21400 Saticoy St | (818) 887-3872
→ Services: business consulting, lending, housing
→ neweconomicsforwomen.org

*NEW Programs:*
✅ Women's Business Center (WBC)
✅ Mujeres y Dinero — financial coaching (Spanish)
✅ NCI Small Business Lending
✅ Homebuyer Programs & pathways to ownership
✅ Affordable housing (1,700+ units in LA)
✅ Youth education & homeless prevention

🏢 *PACE Business Development Center*
→ Hollywood + Pico-Union locations
→ Serves women, Asian/Pacific Islander & immigrant entrepreneurs
→ Business training in 10+ languages
→ (213) 989-3158 | pacelabdc.org

🏢 *CRCD Women's Services*
→ Southeast LA | Workforce + entrepreneurship
→ (213) 743-6193 | coalitionrcd.org

*Funding Specific to Women:*
💰 Mujeres y Dinero Program (NEW)
💰 SBA Women-Owned Small Business program
💰 WBC grants and loan referrals
💰 LACDBG Microenterprise Grants (women-priority)

Reply *BSC* for nearest center | *MICROLOAN* for financing`;
  }

  vendorPermit() {
    return `🛒 *Sidewalk & Street Vendor Permit Program*

The City of LA's Sidewalk and Park Vendor Permit Program is FREE to navigate with help from any BusinessSource Center.

*Permits You Need (3 layers):*

1️⃣ *City of Los Angeles Sidewalk Vending Permit*
→ LA Bureau of Street Services
→ bss.lacity.gov/vendors
→ Cost: ~$291/yr (reduced fees for low-income)

2️⃣ *LA County Health Permit*
→ Required if selling food/beverages
→ publichealth.lacounty.gov/eh
→ Cost: based on operation size

3️⃣ *California Seller's Permit*
→ Required to collect sales tax
→ CDTFA: cdtfa.ca.gov
→ Cost: FREE

*Free Help Getting All 3:*
Bilingual advisors at any BSC will sit with you and help complete all documentation at no charge.

🏢 Nearest help: reply *BSC* for locations

*Additional Requirements:*
📋 Government-issued ID
📋 Proof of address
📋 Food handler's card (if food vendor)
📋 Cart/equipment inspection (for food)

*Important:* Operating without a permit can result in fines of $250–$1,000. Get the permit first — BSC makes it easy.

Reply *BSC* for your nearest free help center`;
  }

  fireRelief() {
    return `🔥 *LA Fire Relief — Small Business Programs*

*NCI Altadena Fire Relief Forgivable Loan*
🏢 New Economics for Women (NCI Lending)
→ $2,500 forgivable loan for businesses impacted by LA fires
→ Available to businesses in affected areas
→ neweconomicsforwomen.org
→ Apply: (323) 568-1520 | ELABSC@neworg.us

*ULA Emergency Income Support Program*
→ Up to $19,000 for low-income senior and disabled renters at risk of losing their homes
→ In-person assistance at:
📍 NEW Canoga Park: 21400 Saticoy St, Canoga Park, CA 91304
📞 (818) 887-3872
→ Application deadline: check with NEW for current status

*SBA Disaster Loans*
→ Up to $2M for businesses + homeowners affected by declared disasters
→ sba.gov/funding-programs/disaster-assistance
→ LA District SBA: (818) 552-3210

*EWDD Business Recovery Programs*
→ BusinessSource Centers providing free consulting to fire-affected businesses
→ Priority appointments for disaster-impacted entrepreneurs
→ EWDD: (213) 744-7300

*Other Relief Resources:*
📋 CA OSBA (Office of the Small Business Advocate) — business.ca.gov
📋 LA County SBDC — emergency consulting
📋 SCORE LA — free mentoring for recovery

Reply *BSC* for nearest help center | *MICROLOAN* for all loan programs`;
  }

  board() {
    return `👑 *ACoolBOARD — Governance & Leadership*

ACoolBOARD is a 501c6 business association promoting governance excellence across the ACoolECOSYSTEM.

*Current Board Leadership*
• *Kenn Phillips* — Chair (Valley Economic Alliance)
• *Dennis Zine* — Vice Chair (LA City Council, LAPD)
• *Kecia Washington* — Secretary/Treasurer (LADWP)
• *Dr. Dianne Harrison* — ACoolACADEMY (CSU Northridge)
• *Stuart Waldman* — ACoolBUSINESS (VICA)
• *David Moon* — Innovation (IntersectLA)

*Board Membership Benefits*
✅ Access to ecosystem resources
✅ Networking with LA leaders
✅ Strategic advisory access
✅ Grant and funding connections
✅ ACoolACADEMY curriculum access

Interested in joining or connecting with a board member? Reply with *JOIN BOARD* or contact iam@acoolnerd.com`;
  }

  advisor() {
    return `🤖 *ACoolAGENT — Strategic Advisor Mode*

You're now connected to advanced strategic advisory.

I can help with:
📊 Business strategy & entity structure
💡 Revenue generation tactics (30-day plans)
🏗️ Organizational design
📋 Board recruitment strategy
💰 Funding & investment planning
⚖️ Entity formation sequence
🚀 Go-to-market strategy

I'm powered by Claude AI (claude-sonnet-4-6) with deep context on the ACoolECOSYSTEM and 25+ years of LA business landscape knowledge.

*What's your #1 strategic challenge right now?*

Be specific — the more context you give me, the more targeted my advice will be.`;
  }
}
