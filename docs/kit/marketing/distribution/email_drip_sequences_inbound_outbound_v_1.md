# Email & Drip Sequences — v1
*Inbound (demo request → close), Outbound (cold → warm), re‑engagement, and post‑demo follow‑ups. Copy blocks are ready to paste into your ESP/CRM. Swap placeholders and UTM tags as needed.*

---

## Global Settings
**Merge tags:** `{first_name}`, `{brand_name}`, `{site_url}`, `{vertical}`, `{pain_point}`, `{value_prop}`, `{demo_link}`, `{loom_link}`, `{case_study_link}`, `{pricing_link}`  
**From/Reply‑To:** contact@orionapexcapital.com  
**Brand tone:** friendly, concise, confident; 1 clear CTA per email  
**UTM base:** `utm_source=email&utm_medium={{flow}}&utm_campaign={{vertical}}&utm_content={{step}}`

---

## Inbound — Demo Request → Close (5‑step)
**Trigger:** form submit / lead capture on landing page

### E0 — Instant Auto‑Reply (send immediately)
**Subject (A/B):**
- A: Your 7‑day launch plan + quick calendar link  
- B: Thanks — here’s how we’ll get you live in a week

**Preview:** We’ll connect, configure FAQs + tone, and launch next week.  
**Body:**
Hi {first_name},

Love that you reached out. Here’s the **7‑day launch** in one glance:
1) Connect: site chat + IG/FB DMs  
2) Configure: top FAQs, tone, order lookup  
3) Launch & learn: go live, then tune weekly

Grab a slot that works for you: **{demo_link}**

— Orion AI Bots

**CTA:** {demo_link}  
**UTM:** `flow=inbound&step=E0`

---

### E1 — Social Proof + Quick Wins (send T+1 day)
**Subject (A/B):**
- A: 3 fast wins we’ll ship in week one  
- B: What success looks like by day 7

**Preview:** The 3 intents that typically move your numbers first.

**Body:**
Hey {first_name},

For {brand_name}, I’d start with these **3 quick wins**:
- **{vertical win 1}** (e.g., Beauty: Shade Finder + photo match)
- **{vertical win 2}** (e.g., Pets: 1‑tap order lookup)
- **{vertical win 3}** (e.g., Home: Dimension quick‑cards)

This combo usually means **more carts, fewer tickets** by week one.

Want to see it on your PDPs? **{demo_link}**

— Orion

**CTA:** {demo_link}  
**UTM:** `flow=inbound&step=E1`

---

### E2 — “See it on your store” (send T+3 days)
**Subject (A/B):**
- A: 60‑sec walkthrough on your PDP  
- B: Here’s how the bot answers your top questions

**Preview:** A quick loom showing 2–3 intents with your product pages.

**Body:**
Hi {first_name},

I recorded a **60‑sec loom** showing how we’d answer your top questions on {site_url}. Two examples that matter most:
- {pain_point 1} → {value_prop 1}
- {pain_point 2} → {value_prop 2}

Watch here: **{loom_link}**  
Like what you see? Book a 15‑min fit call: **{demo_link}**

— Orion

**CTA:** {loom_link} (primary) • {demo_link} (secondary)  
**UTM:** `flow=inbound&step=E2`

---

### E3 — Pricing & ROI Math (send T+5 days)
**Subject (A/B):**
- A: Simple ROI math on DIY / DFY / Premium  
- B: Pricing, timelines, and how we measure lift

**Preview:** Quick table: cost vs. ticket hours saved + cart lift.

**Body:**
Hey {first_name},

Teams pick a plan based on **speed vs. lift**:
- **DIY — $300 + $75/mo:** core FAQ flows; monthly tune‑up  
- **DFY — $600 + $200/mo:** custom flows; order lookup; weekly tune‑up  
- **Premium — $1,200 + $400/mo:** multi‑channel; priority SLA

Even modest gains (e.g., +5% PDP→Cart, –20% FAQ hours) tend to cover cost fast. Full details here: **{pricing_link}**

— Orion

**CTA:** {pricing_link}  
**UTM:** `flow=inbound&step=E3`

---

### E4 — Close/Coach (send T+7–10 days)
**Subject (A/B):**
- A: If we start Monday, you’ll be live next week  
- B: Want me to set up the first 3 intents for you?

**Preview:** We’ll stage it first — no pressure to go live until you like it.

**Body:**
Hi {first_name},

If we start Monday, **you’re live next week**. We’ll stage the bot first and only point it live when you’re happy.

Shall I reserve a slot? **{demo_link}**

— Orion

**CTA:** {demo_link}  
**UTM:** `flow=inbound&step=E4`

---

## Outbound — Cold → Warm (3‑touch)
**Trigger:** target list by vertical; manual or sequenced

### O1 — Problem → Outcome (Day 0)
**Subject (A/B):**
- A: You’re losing carts to slow replies (fast fix)  
- B: Turning your PDP questions into conversions

**Preview:** Instant answers on site + DMs without hiring.

**Body:**
Hi {first_name},

{brand_name} looks great. Most brands lose carts when **shade/size/dimension** questions go unanswered fast enough.

Orion AI Bots gives **instant answers 24/7** on your site + DMs (rules first, AI second) with **human handoff** when needed.
Worth a quick 15‑min fit call? **{demo_link}**

— Orion

**CTA:** {demo_link}  
**UTM:** `flow=outbound&step=O1`

---

### O2 — Loom Proof (Day 3)
**Subject (A/B):**
- A: 60‑sec on your PDP (2 examples)  
- B: Here’s how we’d answer your top questions

**Preview:** Short screen recording with your PDP + flows.

**Body:**
Hey {first_name},

Recorded a **60‑sec loom** showing how we’d solve two friction points on {site_url}. Quick watch: **{loom_link}**

If it resonates, book 15 min here: **{demo_link}**

— Orion

**CTA:** {loom_link} (primary) • {demo_link} (secondary)  
**UTM:** `flow=outbound&step=O2`

---

### O3 — Final Nudge (Day 7)
**Subject (A/B):**
- A: Want this running on a staging page next week?  
- B: Happy to set up the first 3 intents for you

**Preview:** Low‑lift: we stage it privately first.

**Body:**
Hi {first_name},

We can stage the first **3 intents** next week (no charge). If you like it, we point it live.

Worth a try? **{demo_link}**

— Orion

**CTA:** {demo_link}  
**UTM:** `flow=outbound&step=O3`

---

## Re‑engagement & Post‑Demo

### R1 — No‑Show (send 30–60 min after missed meeting)
**Subject:** Can I send a 60‑sec recap instead?

**Body:**
Hey {first_name}, sorry we missed each other. I can record a **60‑sec recap** showing how we’d answer your top two questions on {site_url}. Should I send it over?

— Orion

**CTA:** {loom_link} (to be sent next)  
**UTM:** `flow=reactivation&step=R1`

---

### R2 — Post‑Demo Summary (send +2 hours)
**Subject:** Recap + 7‑day launch plan

**Body:**
Thanks for the time, {first_name}. Here’s the **recap**:
- Goals: {goal_1}, {goal_2}  
- Intents to launch: {intent_1}, {intent_2}, {intent_3}  
- Timeline: staging by {date_1}, live by {date_2}

Next step: pick a slot to kick off: **{demo_link}**

— Orion

**CTA:** {demo_link}  
**UTM:** `flow=postdemo&step=R2`

---

### R3 — Pricing Follow‑up (send +2 days)
**Subject:** Which plan fits your target?

**Body:**
Quick check, {first_name} — are you leaning DIY, DFY, or Premium? If you’d like, I’ll map **ROI** to your traffic + ticket volume and send it back.

— Orion

**CTA:** {pricing_link}  
**UTM:** `flow=postdemo&step=R3`

---

## Deliverability Notes
- Set up **SPF/DKIM/DMARC**, use a dedicated tracking domain, and warm new domains.  
- Keep 1 clear CTA; avoid spammy words; 30–50% image coverage max.  
- Send windows that match buyer behavior:  
  - Beauty: 8–11am local, Tue/Thu  
  - Pets: 9am–12pm local, Tue/Fri  
  - Home & Garden: 7–10am local, Wed/Thu  
- Sequence stops on reply or booked meeting event.

---

## GA4 / Event Mapping (suggested)
- `cta_click` — label with step (E0/E1/… O1/O2/O3)  
- `booked_demo` — when calendar tool fires  
- `loom_view` — add loom query param for attribution  
- `case_download` — if case study PDF viewed  

---

## Snippets (drop‑in blocks)
**Signature:**  
— Orion AI Bots  
Orion Apex Capital  
contact@orionapexcapital.com  

**PS lines:**  
- PS: Want us to stage it first? No obligation to go live until you like it.  
- PS: If you send two URLs, we’ll wire the first 3 intents where they matter most.

