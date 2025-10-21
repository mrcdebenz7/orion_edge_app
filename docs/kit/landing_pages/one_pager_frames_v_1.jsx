import React, { useState } from "react";

export default function OnePagerFramesV11() {
  const [tab, setTab] = useState("beauty");
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center gap-2 p-3">
          <CrestLogo />
          <h1 className="font-semibold text-slate-700 mr-4">Orion AI Bots — One‑Pager Frames v1.1</h1>
          {(["beauty", "pets", "home"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                tab === k ? "bg-slate-900 text-white border-slate-900" : "hover:bg-slate-100 border-slate-300"
              }`}
            >
              {k === "beauty" ? "Beauty" : k === "pets" ? "Pets" : "Home & Garden"}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-3 text-sm">
            <span className="hidden md:inline text-slate-500">contact@orionapexcapital.com</span>
            <button onClick={() => window.print()} className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50">Print / Save PDF</button>
          </div>
        </div>
      </div>

      {/* Frame container */}
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        {tab === "beauty" && <BeautyFrame />}
        {tab === "pets" && <PetsFrame />}
        {tab === "home" && <HomeGardenFrame />}
        <Footer />
      </div>
    </div>
  );
}

function Hero({ kicker, title, subtitle, ctaPrimary, ctaSecondary, imageLabel }: { kicker?: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; imageLabel?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
        <div className="flex flex-col gap-4">
          {kicker && <p className="uppercase tracking-wider text-xs text-slate-500">{kicker}</p>}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-slate-600 md:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#cta" className="px-4 py-2 rounded-xl text-white shadow hover:opacity-90" style={{ background: "linear-gradient(90deg, #B87654, #E6B089)" }}>{ctaPrimary}</a>
            <a href="#cta" className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50">{ctaSecondary}</a>
          </div>
          <div className="flex gap-2 pt-4 text-xs text-slate-500">
            <span className="px-2 py-1 rounded-full bg-white border">24/7 Replies</span>
            <span className="px-2 py-1 rounded-full bg-white border">Rules → AI Fallback</span>
            <span className="px-2 py-1 rounded-full bg-white border">Human Handoff</span>
          </div>
        </div>
        <div className="relative">
          <SampleImage label={imageLabel || "Product Visual"} />
        </div>
      </div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span key={i} className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">
          {t}
        </span>
      ))}
    </div>
  );
}

function GridCards({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((it, i) => (
        <div key={i} className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm">
          <h4 className="font-semibold mb-1">{it.title}</h4>
          <p className="text-sm text-slate-600">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

function Steps({ steps }: { steps: { n: number; title: string; body: string }[] }) {
  return (
    <ol className="grid md:grid-cols-3 gap-4">
      {steps.map((s) => (
        <li key={s.n} className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm">
          <div className="w-8 h-8 rounded-full text-white flex items-center justify-center font-semibold mb-2" style={{ backgroundColor: "#0D1B2A" }}>{s.n}</div>
          <h4 className="font-semibold mb-1">{s.title}</h4>
          <p className="text-sm text-slate-600">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((t, i) => (
        <div key={i} className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm">
          <p className="text-sm font-medium">{t}</p>
        </div>
      ))}
    </div>
  );
}

function Plans() {
  const data = [
    { name: "DIY", price: "$300 setup + $75/mo", features: ["Basic FAQ flows", "Email capture", "Monthly tune-up"] },
    { name: "DFY", price: "$600 setup + $200/mo", features: ["Custom flows", "Order lookup", "Weekly tune-up"] },
    { name: "Premium", price: "$1,200 setup + $400/mo", features: ["All DFY +", "Multi-channel (IG/FB)", "Priority SLA"] },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data.map((p, i) => (
        <div key={i} className={`rounded-2xl border p-5 bg-white shadow-sm ${i === 1 ? "" : "border-slate-200"}`} style={i === 1 ? { borderColor: "#B87654" } : {}}>
          <h4 className="font-semibold text-lg">{p.name}</h4>
          <p className="text-slate-600 mb-3">{p.price}</p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
            {p.features.map((f, j) => (
              <li key={j}>{f}</li>
            ))}
          </ul>
          <a href="#cta" className={`mt-4 inline-block px-4 py-2 rounded-xl border ${i === 1 ? "text-white border-0" : "border-slate-300 hover:bg-slate-50"}`} style={i === 1 ? { background: "linear-gradient(90deg, #B87654, #E6B089)" } : {}}>Choose {p.name}</a>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 text-sm text-slate-600 border-t pt-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <p>© 2025 Orion Ascend Media LLC. Used under license by Orion Intelligence Agency and affiliates.</p>
      <div className="md:ml-auto">Contact: <a className="underline" href="mailto:contact@orionapexcapital.com">contact@orionapexcapital.com</a> • @orionapex</div>
    </footer>
  );
}

/* =========================
   BRAND CREST LOGO (inline SVG)
   ========================= */
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

/* =========================
   SAMPLE IMAGE BLOCK (placeholder)
   ========================= */
function SampleImage({ label }: { label?: string }) {
  return (
    <div className="w-full h-64 md:h-full rounded-xl border bg-white/60 overflow-hidden relative" style={{ borderColor: "#E6B089" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f8fafc, #e2e8f0)" }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#B87654 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-500">
        {label || "Sample Image"}
      </div>
    </div>
  );
}

/* =========================
   BEAUTY FRAME
   ========================= */
function BeautyFrame() {
  return (
    <div className="space-y-8">
      <Hero
        kicker="Beauty — Skincare / Makeup / Hair"
        title="Shade‑matched answers. Same‑day conversions."
        subtitle="A store‑branded assistant that resolves shade, ingredient, and routine questions 24/7—so shoppers add to cart with confidence."
        ctaPrimary="Book a 15‑min fit call"
        ctaSecondary="Start your 7‑day launch"
        imageLabel="Beauty — Model / Flatlay"
      />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Pain → Solution</h3>
        <GridCards
          items={[
            { title: "Shade confusion", body: "Shade Finder + DM photo match for undertone & depth." },
            { title: "Ingredient sensitivity", body: "Instant ingredient lookups with clear flags & links." },
            { title: "Routine uncertainty", body: "Mini how‑to guides on PDP and in chat." },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">How It Works</h3>
        <Steps
          steps={[
            { n: 1, title: "Connect", body: "Your site widget + IG DMs." },
            { n: 2, title: "Preload", body: "Shades, ingredients, policies & tone." },
            { n: 3, title: "Launch", body: "Go live in a week, then tune weekly from transcripts." },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Feature Highlights</h3>
        <FeatureGrid
          items={[
            "24/7 instant replies",
            "Rules → AI fallback (accuracy first)",
            "Human handoff + lead capture",
            "Shade quiz + photo match",
            "Ingredient lookups + allergen flags",
            "Weekly insights (top questions, gaps)",
          ]}
        />
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">Proof / Trust</h3>
        <Chips items={["Up to 4× conversion from chat", "~30% fewer support hours", "★★★★★"]} />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Plans</h3>
        <Plans />
      </section>
    </div>
  );
}

/* =========================
   PETS FRAME
   ========================= */
function PetsFrame() {
  return (
    <div className="space-y-8">
      <Hero
        kicker="Pets — Harnesses / Food / Grooming"
        title="Fewer barks in the inbox. More tails at checkout."
        subtitle="Answers sizing, order status, and dietary questions 24/7—so shoppers buy with confidence."
        ctaPrimary="Book a 15‑min fit call"
        ctaSecondary="Start your 7‑day launch"
        imageLabel="Pets — Harness / Bed / Food"
      />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Pain → Solution</h3>
        <GridCards
          items={[
            { title: "Sizing confusion", body: "Guided size chart with breed/weight prompts." },
            { title: "WISMO (Where’s my order?)", body: "One‑tap order status + tracking link." },
            { title: "Dietary concerns", body: "Ingredient deep‑links with clear vet disclaimer." },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">How It Works</h3>
        <Steps
          steps={[
            { n: 1, title: "Connect", body: "Site widget + IG/FB DMs." },
            { n: 2, title: "Preload", body: "Size charts, policies, tone." },
            { n: 3, title: "Launch", body: "Go live in a week; weekly tuning from transcripts." },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Feature Highlights</h3>
        <FeatureGrid
          items={[
            "24/7 instant replies",
            "1‑tap order lookup + tracking",
            "Guided sizing (breed/weight)",
            "Restock alerts on variants",
            "Human handoff + email capture",
            "Weekly insights (unknowns → new FAQs)",
          ]}
        />
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">Proof / Trust</h3>
        <Chips items={["WISMO tickets ↓", "Harness PDP→Cart ↑", "AOV ↑ with bundles"]} />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Plans</h3>
        <Plans />
      </section>
    </div>
  );
}

/* =========================
   HOME & GARDEN FRAME
   ========================= */
function HomeGardenFrame() {
  return (
    <div className="space-y-8">
      <Hero
        kicker="Home & Garden — Furniture / Décor / Outdoor"
        title="Right fit. Right now. Right at home."
        subtitle="Answers dimensions, delivery, and care questions 24/7—so customers check out with confidence."
        ctaPrimary="Book a 15‑min fit call"
        ctaSecondary="Start your 7‑day launch"
        imageLabel="Home — Room Scene"
      />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Pain → Solution</h3>
        <GridCards
          items={[
            { title: "Will it fit?", body: "Dimension quick‑cards + tape‑outline tip." },
            { title: "Delivery windows", body: "Carrier scheduling info + ETA updates." },
            { title: "Care / materials", body: "Care PDF + materials breakdown." },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">How It Works</h3>
        <Steps
          steps={[
            { n: 1, title: "Connect", body: "Site widget." },
            { n: 2, title: "Preload", body: "Dimensions library, care PDFs, policies & tone." },
            { n: 3, title: "Launch", body: "Go live in a week; weekly tuning from transcripts." },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Feature Highlights</h3>
        <FeatureGrid
          items={[
            "24/7 instant replies",
            "Dimension quick‑cards on PDP",
            "Delivery scheduling info",
            "Care PDFs on tap",
            "Human handoff + email capture",
            "Weekly insights (unknowns → new FAQs)",
          ]}
        />
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-semibold">Proof / Trust</h3>
        <Chips items={["Oversize returns ↓", "Scheduling time ↓", "Furniture PDP→Cart ↑"]} />
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Plans</h3>
        <Plans />
      </section>
    </div>
  );
}
