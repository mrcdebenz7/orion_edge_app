import React, { useState } from "react";

export default function OrionPitchDeckV1() {
  const slides: Slide[] = [
    {
      h: "The Problem",
      sub: "Slow replies → lost carts",
      bullets: [
        "Shoppers expect instant answers at the moment of decision.",
        "DMs & inboxes overflow with repetitive FAQs (WISMO, sizing, shades, dimensions).",
        "Teams miss after‑hours inquiries → abandoned carts & poor CX."
      ],
      tag: "Context",
    },
    {
      h: "Buyer Reality",
      sub: "Beauty • Pets • Home & Garden",
      bullets: [
        "Beauty: shade match, ingredients, routine questions block first purchases.",
        "Pets: sizing confusion, WISMO, dietary/allergen questions.",
        "Home & Garden: fit/dimensions, delivery windows, care/materials."
      ],
      tag: "Pain by vertical",
    },
    {
      h: "Our Solution",
      sub: "Orion AI Bots (Hybrid Rules → AI)",
      bullets: [
        "Deterministic flows for policies & product facts; AI fallback for edge cases.",
        "Human handoff + lead capture when answers need a person.",
        "Omnichannel: Website widget + IG/FB DMs (WhatsApp optional)."
      ],
      tag: "Product",
    },
    {
      h: "Why Now",
      sub: "Expectations & social commerce",
      bullets: [
        "Shoppers treat chat like the store associate — everywhere, 24/7.",
        "AI maturity enables accuracy with guardrails (no hallucinations).",
        "Automation reduces support load while raising conversion."
      ],
      tag: "Timing",
    },
    {
      h: "How It Works",
      sub: "Connect → Configure → Launch & Learn",
      bullets: [
        "Connect: drop‑in chat + IG/FB DMs; optional order lookup & alerts.",
        "Configure: preload FAQs, tone, policies; rule flows first, AI fallback second.",
        "Launch & Learn: go live in ~1 week; weekly transcript reviews for quick wins."
      ],
      tag: "Flow",
    },
    {
      h: "Use Cases",
      sub: "3 examples by vertical",
      bullets: [
        "Beauty: Shade Finder + photo match; Ingredient flags; Routine micro‑guides.",
        "Pets: Guided sizing (breed/weight); 1‑tap order status; Restock alerts.",
        "Home & Garden: Dimension quick‑cards; Delivery scheduling info; Care PDFs."
      ],
      tag: "Examples",
    },
    {
      h: "Results",
      sub: "Proof of impact",
      bullets: [
        "Conversion lift from chat (up to 4×).",
        "Ticket deflection on repetitive FAQs (≈30% fewer hours).",
        "Lead capture from escalations & restock alerts."
      ],
      tag: "Outcomes",
    },
    {
      h: "Plans & Inclusions",
      sub: "DIY • DFY • Premium",
      bullets: [
        "DIY — $300 setup + $75/mo: core FAQ flows, email capture, monthly tune‑up.",
        "DFY — $600 setup + $200/mo: custom flows, order lookup, weekly tune‑up.",
        "Premium — $1,200 setup + $400/mo: multi‑channel + priority SLA."
      ],
      tag: "Pricing",
    },
    {
      h: "Implementation",
      sub: "Under one week",
      bullets: [
        "Day 0–1: kickoff & intake (access, FAQs, tone).",
        "Day 2–3: build & config; rule flows + AI fallback; branding.",
        "Day 4–5: QA & staging; Day 6–7: go live + monitoring."
      ],
      tag: "Rollout",
    },
    {
      h: "Call to Action",
      sub: "Never lose a sale to a slow reply again.",
      bullets: [
        "Book a 15‑min fit call.",
        "See it on your store (staging demo).",
        "contact@orionapexcapital.com"
      ],
      tag: "Next steps",
    },
  ];

  const [i, setI] = useState(0);
  const s = slides[i];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto flex items-center gap-2 p-3">
          <CrestLogo />
          <h1 className="font-semibold text-slate-700 mr-4">Orion AI Bots — Pitch Deck v1</h1>
          <div className="ml-auto flex items-center gap-3 text-sm">
            <span className="hidden md:inline text-slate-500">Slide {i + 1} / {slides.length}</span>
            <button onClick={() => window.print()} className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50">Print / Save PDF</button>
          </div>
        </div>
      </div>

      {/* Slide */}
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <div className="rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 md:p-12 bg-gradient-to-br from-white to-slate-50">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{s.tag}</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-1">{s.h}</h2>
            <p className="text-slate-600 mb-6">{s.sub}</p>
            <ul className="text-slate-800 text-[15px] space-y-2 list-disc list-inside">
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
              <SampleImage label={s.h} />
              <div className="text-sm text-slate-600">
                <p className="mb-2">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  <Chip>24/7 replies</Chip>
                  <Chip>Rules → AI fallback</Chip>
                  <Chip>Human handoff</Chip>
                  <Chip>Weekly insights</Chip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t p-4">
            <button onClick={() => setI((v) => Math.max(0, v - 1))} className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50">Prev</button>
            <div className="text-sm text-slate-500">{i + 1} / {slides.length}</div>
            <button onClick={() => setI((v) => Math.min(slides.length - 1, v + 1))} className="px-4 py-2 rounded-xl text-white" style={{ background: "linear-gradient(90deg, #B87654, #E6B089)" }}>Next</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* Types */
type Slide = { h: string; sub?: string; bullets: string[]; tag?: string };

/* Shared bits */
function Footer() {
  return (
    <footer className="mt-4 text-sm text-slate-600 border-t pt-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <p>© {new Date().getFullYear()} Orion Apex Capital — Privacy‑by‑design. Discloses AI identity. Escalates when unsure.</p>
      <div className="md:ml-auto">Contact: <a className="underline" href="mailto:contact@orionapexcapital.com">contact@orionapexcapital.com</a> • @orionapex</div>
    </footer>
  );
}

function CrestLogo() {
  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center" title="Orion Crest" style={{ background: "linear-gradient(135deg, #B87654, #E6B089)" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#0D1B2A" strokeWidth="1.5" fill="white"/>
        <path d="M12 5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L6.2 9.2l4-.6L12 5z" fill="#0D1B2A"/>
      </svg>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">{children}</span>;
}

function SampleImage({ label }: { label?: string }) {
  return (
    <div className="w-full h-48 md:h-64 rounded-xl border bg-white/60 overflow-hidden relative" style={{ borderColor: "#E6B089" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f8fafc, #e2e8f0)" }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#B87654 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-500">
        {label || "Sample Image"}
      </div>
    </div>
  );
}
