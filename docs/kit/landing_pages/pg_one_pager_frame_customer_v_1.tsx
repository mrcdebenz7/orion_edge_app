import React from "react";

export default function PGOnePagerFrame() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center gap-2 p-3">
          <CrestLogo />
          <h1 className="font-semibold text-slate-700 mr-4">Orion AI Bots — PG Workflow One‑Pager</h1>
          <div className="ml-auto flex items-center gap-3 text-sm">
            <span className="hidden md:inline text-slate-500">contact@orionapexcapital.com</span>
            <button onClick={() => window.print()} className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50">Print / Save PDF</button>
          </div>
        </div>
      </div>

      {/* Page container */}
      <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
        <Hero
          kicker="Customer‑Facing Overview"
          title="7‑Day Launch Workflow"
          subtitle="A store‑branded assistant that answers pre‑purchase questions 24/7 on your site and DMs. Rules first for accuracy, AI when needed, human handoff when it matters."
          ctaPrimary="Book a 15‑min fit call"
          ctaSecondary="Start your 7‑day launch"
        />

        {/* What it is */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What it is (30‑sec)</h2>
          <p className="text-slate-600">Instant, on‑brand answers to shade/size/dimensions, order status, and more — boosting conversion and reducing tickets. <span className="text-slate-500 text-xs align-super">ANJ</span> Rules → AI reduces off‑policy answers.</p>
        </section>

        {/* Steps */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7‑Day Launch Plan — exactly how we roll out</h2>
          <Steps
            steps={[
              { n: 1, title: "Day 0–1 — Kickoff & Intake", body: "Connect channels (site chat + IG/FB DMs); gather top FAQs & policies; align success targets. ANJ: Canonical answers = brand‑safe." },
              { n: 2, title: "Day 2–3 — Build & Brand", body: "Preload flows (Shipping, Returns, Shade/Size/Dimensions, Order Status, Restock); configure AI fallback; set human handoff + lead capture. ANJ: No dead‑ends." },
              { n: 3, title: "Day 4–5 — QA & Staging", body: "Test site + socials; targets: <2s rules, <5s AI; confirm disclosures; embed on staging for UAT. ANJ: Zero‑risk preview." },
              { n: 4, title: "Day 6–7 — Go Live & Learn", body: "Flip live; monitor real conversations; weekly insights add new FAQs & prompt tweaks. ANJ: Continuous lift." },
            ]}
          />
        </section>

        {/* Plans */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What you get (by plan)</h2>
          <Plans />
          <p className="text-xs text-slate-500">ANJ: Even DIY covers the high‑impact flows; DFY/Premium add speed + breadth.</p>
        </section>

        {/* What we need */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">What we need from you</h2>
          <Grid3
            items={[
              { title: "Access & Approver", body: "Admin access for selected channels + 1 point of contact. ANJ: One approver keeps velocity high." },
              { title: "Policies & Tone", body: "Shipping/returns links + tone examples. ANJ: Consistency beats creativity." },
              { title: "Fast UAT", body: "One consolidated feedback round on staging. ANJ: Keeps timeline under a week." },
            ]}
          />
        </section>

        {/* Privacy & FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Privacy & Disclosures</h2>
          <Chips items={["Bot identifies as AI", "Data minimization", "Human on request", "Configurable retention"]} />

          <h3 className="text-lg font-medium pt-2">FAQ</h3>
          <FAQ
            items={[
              { q: "How accurate is it?", a: "Rules first; AI only when needed; handoff if unsure. ANJ" },
              { q: "Will it match our voice?", a: "Yes — we configure brand tone up front. ANJ" },
              { q: "How do we measure ROI?", a: "Dashboards track conversion lift, ticket deflection, and leads. ANJ" },
            ]}
          />
        </section>

        {/* Final CTA */}
        <section id="cta" className="rounded-2xl border border-slate-200 p-6 md:p-8 bg-white shadow-sm text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Never lose a sale to a slow reply again.</h2>
          <p className="text-slate-600 mb-4">Launch a store‑branded assistant in 7 days. DIY, DFY, or Premium.</p>
          <a href="#" className="inline-block px-5 py-3 rounded-xl text-white shadow hover:opacity-90" style={{ background: "linear-gradient(90deg, #B87654, #E6B089)" }}>Book a 15‑min fit call</a>
        </section>

        <Footer />
      </div>
    </div>
  );
}

/* Components */
function Hero({ kicker, title, subtitle, ctaPrimary, ctaSecondary }: { kicker?: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string }) {
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
        </div>
        <div className="relative">
          <SampleImage label="Workflow — Steps Overview" />
        </div>
      </div>
    </section>
  );
}

function Grid3({ items }: { items: { title: string; body: string }[] }) {
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
    <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span key={i} className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
      ))}
    </div>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y border rounded-2xl">
      {items.map((it, i) => (
        <details key={i} className="p-4 group">
          <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
            {it.q}
            <span className="text-slate-400 group-open:rotate-180 transition">⌃</span>
          </summary>
          <p className="text-sm text-slate-600 pt-2">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

function Plans() {
  const data = [
    { name: "DIY", price: "$300 setup + $75/mo", features: ["Core FAQ flows", "Email capture", "Monthly tune‑up"] },
    { name: "DFY", price: "$600 setup + $200/mo", features: ["Custom flows", "Order lookup", "Weekly tune‑up"] },
    { name: "Premium", price: "$1,200 setup + $400/mo", features: ["All DFY +", "Multi‑channel (IG/FB)", "Priority SLA"] },
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
