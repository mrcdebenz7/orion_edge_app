import React, { useState } from "react";

export default function LandingPageWireframe() {
  const [tab, setTab] = useState("beauty");
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center gap-2 p-3">
          <CrestLogo />
          <h1 className="font-semibold text-slate-700 mr-4">Orion AI Bots — Landing Page Wireframe</h1>
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

      {/* Page container */}
      <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
        <Hero
          kicker="Store‑branded AI Assistant"
          title="Instant answers. Real revenue."
          subtitle="Answer pre‑purchase questions 24/7 across your site and DMs. Reduce tickets, recover carts, and capture leads without adding headcount."
          ctaPrimary="Book a 15‑min fit call"
          ctaSecondary="Start your 7‑day launch"
        />

        {/* Trust chips */}
        <section className="flex flex-wrap gap-2">
          <Chip>Up to 4× conversion from chat</Chip>
          <Chip>~30% fewer support hours</Chip>
          <Chip>Rules → AI fallback</Chip>
          <Chip>Human handoff + lead capture</Chip>
        </section>

        {/* Pain → Outcome */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Why shoppers bounce — and how we stop it</h2>
          <Grid3
            items={[
              { title: "Slow replies", body: "Instant answers keep buyers moving instead of leaving for competitors." },
              { title: "Confusion on PDP", body: "Clear shade/size/dimension guidance removes friction at the moment of decision." },
              { title: "Inbox overload", body: "Automate 70–80% of repetitive FAQs so your team focuses on high‑value cases." },
            ]}
          />
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">How it works</h2>
          <Steps
            steps={[
              { n: 1, title: "Connect", body: "Drop‑in website widget + IG/FB DMs." },
              { n: 2, title: "Configure", body: "Preload FAQs, tone, policies; enable order lookup & alerts." },
              { n: 3, title: "Launch & learn", body: "Go live in a week; review transcripts weekly for quick wins." },
            ]}
          />
        </section>

        {/* Feature grid */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Features</h2>
          <Grid6
            items={[
              "24/7 instant replies",
              "Rules → AI fallback (accuracy first)",
              "Human handoff + lead capture",
              "Order lookup & WISMO deflection",
              "Restock alerts & lead capture",
              "Weekly insights & tuning",
            ]}
          />
        </section>

        {/* Vertical tabs with screenshots per vertical */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">See it by vertical</h2>
          <div className="flex gap-2 pb-2">
            <TabButton label="Beauty" active={tab === "beauty"} onClick={() => setTab("beauty")} />
            <TabButton label="Pets" active={tab === "pets"} onClick={() => setTab("pets")} />
            <TabButton label="Home & Garden" active={tab === "home"} onClick={() => setTab("home")} />
          </div>
          {tab === "beauty" && (
            <Showcase
              title="Beauty — Shade / Ingredients / Routine"
              bullets={["Shade Finder + photo match", "Ingredient lookups with flags", "Routine micro‑guides"]}
            />
          )}
          {tab === "pets" && (
            <Showcase
              title="Pets — Sizing / WISMO / Dietary"
              bullets={["Guided sizing (breed/weight)", "1‑tap order lookup", "Ingredient deep‑links + vet disclaimer"]}
            />
          )}
          {tab === "home" && (
            <Showcase
              title="Home & Garden — Dimensions / Delivery / Care"
              bullets={["Dimension quick‑cards", "Delivery scheduling info", "Care PDFs"]}
            />
          )}
        </section>

        {/* Proof */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Proof</h2>
          <div className="flex flex-wrap gap-2">
            <Chip>Case snapshot: tickets ↓ ~30%</Chip>
            <Chip>Chat‑assisted revenue ↑</Chip>
            <Chip>★★★★★ founder quote here</Chip>
          </div>
        </section>

        {/* Plans */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Plans & Compare</h2>
          <Plans />
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <FAQ
            items={[
              { q: "How fast can we launch?", a: "Most stores launch within 5–7 days once we have policies and access." },
              { q: "Will it match our voice?", a: "Yes—core answers are scripted; AI fallback uses your tone guidelines." },
              { q: "What if the bot can't answer?", a: "It captures contact + context and escalates to your team instantly." },
              { q: "Which channels are supported?", a: "Website chat + Instagram & Facebook DMs; WhatsApp optional." },
              { q: "Is this secure?", a: "We use a privacy‑by‑design approach; no sensitive data is stored unnecessarily." },
              { q: "How do we measure ROI?", a: "Dashboards track conversion lift, ticket deflection, leads, and chat‑assisted revenue." },
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
          <SampleImage label="Hero / Store + Chat" />
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">{children}</span>;
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

function Grid6({ items }: { items: string[] }) {
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

function TabButton({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-full text-sm border transition ${active ? "bg-slate-900 text-white border-slate-900" : "hover:bg-slate-100 border-slate-300"}`}>{label}</button>
  );
}

function Showcase({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <SampleImage label={title} />
      <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
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
