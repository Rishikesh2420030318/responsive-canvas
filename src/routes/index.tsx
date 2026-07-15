import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera — Product Designer & Frontend Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Rivera, a product designer and frontend engineer building responsive, accessible web experiences.",
      },
      { property: "og:title", content: "Alex Rivera — Portfolio" },
      {
        property: "og:description",
        content: "Responsive, CSS-driven portfolio showcasing design systems and frontend engineering work.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Lumen Analytics",
    tag: "Dashboard · 2025",
    desc: "A realtime analytics suite with a custom charting language and collaborative annotations.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "from-[oklch(0.72_0.18_45)] to-[oklch(0.65_0.22_15)]",
  },
  {
    title: "Field Notes",
    tag: "Mobile · 2024",
    desc: "Offline-first journaling app for researchers working in remote environments.",
    accent: "from-[oklch(0.75_0.14_170)] to-[oklch(0.55_0.15_210)]",
  },
  {
    title: "Kern Type Foundry",
    tag: "Brand · 2024",
    desc: "Editorial site and specimen viewer for an independent type foundry.",
    accent: "from-[oklch(0.78_0.12_85)] to-[oklch(0.62_0.18_50)]",
  },
  {
    title: "Halcyon OS",
    tag: "Design System · 2023",
    desc: "Cross-platform design system serving 40+ product teams and 200+ components.",
    span: "lg:col-span-2",
    accent: "from-[oklch(0.65_0.2_290)] to-[oklch(0.55_0.22_330)]",
  },
];

const skills = [
  { label: "CSS Grid & Flexbox", level: 96 },
  { label: "TypeScript & React", level: 92 },
  { label: "Design Systems", level: 90 },
  { label: "Motion & Interaction", level: 84 },
  { label: "Accessibility (WCAG)", level: 88 },
];

function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.setProperty("--surface", dark ? "oklch(0.16 0.02 265)" : "oklch(0.985 0.005 90)");
    document.documentElement.style.setProperty("--ink", dark ? "oklch(0.97 0.01 90)" : "oklch(0.18 0.02 265)");
    document.documentElement.style.setProperty("--ink-soft", dark ? "oklch(0.7 0.02 265)" : "oklch(0.42 0.02 265)");
    document.documentElement.style.setProperty("--line", dark ? "oklch(0.28 0.02 265)" : "oklch(0.9 0.01 90)");
    document.documentElement.style.setProperty("--panel", dark ? "oklch(0.21 0.02 265)" : "oklch(1 0 0)");
    document.documentElement.style.setProperty("--brand", dark ? "oklch(0.78 0.17 55)" : "oklch(0.62 0.2 30)");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--ink)",
        minHeight: "100vh",
        fontFamily: "'Fraunces', ui-serif, Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Inter:wght@400;500;600&display=swap');
        :root { --surface: oklch(0.985 0.005 90); --ink: oklch(0.18 0.02 265); --ink-soft: oklch(0.42 0.02 265); --line: oklch(0.9 0.01 90); --panel: oklch(1 0 0); --brand: oklch(0.62 0.2 30); }
        .sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .grain::before { content:""; position:fixed; inset:0; pointer-events:none; opacity:.035; z-index:1; background-image: radial-gradient(currentColor 1px, transparent 1px); background-size: 3px 3px; }
        .page { display:grid; grid-template-columns: 1fr; gap: clamp(3rem, 6vw, 6rem); padding: clamp(1.25rem, 3vw, 2.5rem); max-width: 1400px; margin: 0 auto; }
        .nav { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding-block: 1rem; border-bottom: 1px solid var(--line); position: sticky; top:0; backdrop-filter: blur(12px); background: color-mix(in oklab, var(--surface) 82%, transparent); z-index: 20; }
        .nav-links { display:none; gap: 2rem; }
        @media (min-width: 720px){ .nav-links { display:flex; } }
        .hero { display:grid; grid-template-columns: 1fr; gap: 2rem; align-items:end; }
        @media (min-width: 900px){ .hero { grid-template-columns: 1.4fr 1fr; gap: 4rem; } }
        .display { font-size: clamp(3rem, 10vw, 8.5rem); line-height: 0.92; letter-spacing: -0.03em; font-weight: 800; }
        .display em { font-style: italic; color: var(--brand); font-weight: 600; }
        .meta-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:1.5rem; padding-top:1rem; border-top:1px solid var(--line); }
        @media (min-width: 900px){ .meta-grid { grid-template-columns: 1fr; } }
        .work { display:grid; grid-template-columns: 1fr; gap:1.25rem; }
        @media (min-width: 640px){ .work { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px){ .work { grid-template-columns: repeat(4, 1fr); grid-auto-rows: 18rem; } }
        .card { position:relative; overflow:hidden; border-radius: 1.5rem; padding: 1.75rem; display:flex; flex-direction:column; justify-content:space-between; min-height: 18rem; border:1px solid var(--line); background: var(--panel); transition: transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 30px 60px -30px color-mix(in oklab, var(--ink) 40%, transparent); }
        .card-glow { position:absolute; inset:0; opacity:.9; background: linear-gradient(135deg, var(--tw-gradient-stops)); mix-blend-mode: multiply; }
        .about { display:grid; grid-template-columns:1fr; gap:3rem; }
        @media (min-width: 900px){ .about { grid-template-columns: 1fr 1fr; gap: 6rem; } }
        .skill-row { display:grid; grid-template-columns: 1fr auto; align-items:center; gap:1rem; padding:1rem 0; border-bottom:1px solid var(--line); }
        .bar { grid-column: 1 / -1; height: 3px; background: var(--line); border-radius: 999px; overflow:hidden; }
        .bar > span { display:block; height:100%; background: var(--brand); transform-origin:left; animation: grow 1.2s cubic-bezier(.2,.8,.2,1) both; }
        @keyframes grow { from { transform: scaleX(0);} }
        .footer { display:grid; gap:2rem; padding-block: 3rem; border-top:1px solid var(--line); }
        @media (min-width: 720px){ .footer { grid-template-columns: 2fr 1fr 1fr; } }
        .toggle { display:inline-flex; align-items:center; gap:.5rem; padding:.5rem .9rem; border-radius:999px; border:1px solid var(--line); background: var(--panel); cursor:pointer; font-size:.85rem; }
        .marquee-word { font-size: clamp(4rem, 14vw, 12rem); font-weight:800; letter-spacing:-.04em; line-height:.9; }
        .stat { display:flex; flex-direction:column; gap:.25rem; }
        .stat-num { font-size: clamp(2rem, 5vw, 3.5rem); font-weight:800; letter-spacing:-.02em; }
      `}</style>

      <div className="grain" style={{ color: "var(--ink)" }} />

      <main className="page" style={{ position: "relative", zIndex: 2 }}>
        {/* NAV */}
        <nav className="nav sans">
          <a href="#top" style={{ fontWeight: 600, letterSpacing: "-.01em" }}>
            Alex Rivera<span style={{ color: "var(--brand)" }}>.</span>
          </a>
          <div className="nav-links" style={{ fontSize: ".9rem", color: "var(--ink-soft)" }}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="toggle sans" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--brand)" }} />
            {dark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* HERO */}
        <header id="top" className="hero">
          <div>
            <p className="sans" style={{ color: "var(--ink-soft)", fontSize: ".9rem", marginBottom: "1.5rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
              Portfolio · 2020 — 2026
            </p>
            <h1 className="display">
              Designing <em>quiet</em> interfaces for loud problems.
            </h1>
          </div>
          <div className="meta-grid sans" style={{ fontSize: ".95rem", color: "var(--ink-soft)" }}>
            <div>
              <p style={{ color: "var(--ink)", fontWeight: 500, marginBottom: ".25rem" }}>Now</p>
              Lead Designer at Halcyon, building the platform's design system and web tooling.
            </div>
            <div>
              <p style={{ color: "var(--ink)", fontWeight: 500, marginBottom: ".25rem" }}>Based</p>
              Lisbon, Portugal — working with teams across Europe & North America.
            </div>
          </div>
        </header>

        {/* MARQUEE */}
        <section aria-hidden style={{ borderBlock: "1px solid var(--line)", paddingBlock: "2rem", overflow: "hidden" }}>
          <div className="marquee-word" style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap" }}>
            <span>Interfaces</span>
            <span style={{ color: "var(--brand)", fontStyle: "italic", fontWeight: 500 }}>Systems</span>
            <span>Typography</span>
            <span style={{ color: "var(--brand)", fontStyle: "italic", fontWeight: 500 }}>Motion</span>
          </div>
        </section>

        {/* WORK GRID */}
        <section id="work" style={{ display: "grid", gap: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-.02em" }}>Selected Work</h2>
            <p className="sans" style={{ color: "var(--ink-soft)", fontSize: ".9rem" }}>
              {projects.length} projects · updated Jul 2026
            </p>
          </div>
          <div className="work">
            {projects.map((p) => (
              <article key={p.title} className={`card ${p.span ?? ""}`}>
                <div className={`card-glow bg-gradient-to-br ${p.accent}`} style={{ opacity: 0.18 }} />
                <div style={{ position: "relative" }}>
                  <p className="sans" style={{ fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-soft)" }}>
                    {p.tag}
                  </p>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginTop: ".5rem", letterSpacing: "-.02em" }}>{p.title}</h3>
                </div>
                <p className="sans" style={{ position: "relative", fontSize: ".95rem", color: "var(--ink-soft)", maxWidth: "38ch" }}>
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT / SKILLS */}
        <section id="about" className="about">
          <div>
            <p className="sans" style={{ color: "var(--brand)", fontSize: ".8rem", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              About
            </p>
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.3, letterSpacing: "-.01em" }}>
              I've spent a decade shaping tools that treat the interface as a
              conversation — <em style={{ color: "var(--brand)" }}>calm, precise, and legible</em> under pressure.
            </p>
            <div className="sans" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
              <div className="stat"><span className="stat-num">10+</span><span style={{ color: "var(--ink-soft)", fontSize: ".85rem" }}>Years shipping</span></div>
              <div className="stat"><span className="stat-num">40</span><span style={{ color: "var(--ink-soft)", fontSize: ".85rem" }}>Product teams</span></div>
              <div className="stat"><span className="stat-num">200+</span><span style={{ color: "var(--ink-soft)", fontSize: ".85rem" }}>Components</span></div>
            </div>
          </div>
          <div className="sans">
            <p style={{ color: "var(--ink-soft)", fontSize: ".8rem", letterSpacing: ".15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Toolkit
            </p>
            {skills.map((s) => (
              <div key={s.label} className="skill-row">
                <span style={{ fontSize: ".95rem" }}>{s.label}</span>
                <span style={{ color: "var(--ink-soft)", fontSize: ".85rem" }}>{s.level}%</span>
                <div className="bar"><span style={{ width: `${s.level}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ display: "grid", gap: "2rem", padding: "clamp(2rem, 5vw, 4rem)", borderRadius: "2rem", background: "var(--panel)", border: "1px solid var(--line)" }}>
          <h2 style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1 }}>
            Have a project?<br />
            <em style={{ color: "var(--brand)", fontWeight: 600 }}>Let's build it well.</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <a href="mailto:hello@alexrivera.co" className="sans" style={{ padding: ".9rem 1.5rem", borderRadius: 999, background: "var(--ink)", color: "var(--surface)", fontSize: ".95rem", fontWeight: 500 }}>
              hello@alexrivera.co →
            </a>
            <a href="#" className="sans" style={{ padding: ".9rem 1.5rem", borderRadius: 999, border: "1px solid var(--line)", fontSize: ".95rem" }}>
              Download résumé
            </a>
          </div>
        </section>

        <footer className="footer sans" style={{ fontSize: ".85rem", color: "var(--ink-soft)" }}>
          <div>
            <p style={{ color: "var(--ink)", fontWeight: 500, marginBottom: ".5rem" }}>Alex Rivera</p>
            © 2026 · Built with CSS Grid, Flexbox & good intentions.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
            <a href="#">Twitter / X</a><a href="#">Read.cv</a><a href="#">GitHub</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
            <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
