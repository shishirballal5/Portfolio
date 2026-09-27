import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import useReveal from "@/hooks/useReveal";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<number | null>(0);

  useReveal();

  return (
    <div className="min-h-screen page-enter page-glow-gold" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
      <div className="max-w-6xl mx-auto px-5">

        {/* header */}
        <div className="reveal text-center mb-14">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mt-4 mb-3">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#6a8aaa] max-w-md mx-auto">
            Production systems handling real money, real users, and real-time data at scale.
          </p>
        </div>

        {/* project cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              className={`reveal d${i + 1} text-left rounded-2xl overflow-hidden transition-all duration-300`}
              style={{
                background: "#070f21",
                border: `1px solid ${expanded === i ? p.accent + "55" : p.accent + "18"}`,
                boxShadow:
                  expanded === i
                    ? `0 0 0 1px ${p.accent}30, 0 12px 60px ${p.accent}14, 0 4px 30px rgba(0,0,0,.6)`
                    : "0 4px 24px rgba(0,0,0,.5)",
                transform: expanded === i ? "translateY(-4px)" : "none",
              }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* card top band */}
              <div
                className="p-5 pb-4"
                style={{
                  background: `linear-gradient(135deg,${p.accent}0e,transparent)`,
                  borderBottom: `1px solid ${p.accent}14`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `${p.accent}12`,
                      border: `1px solid ${p.accent}30`,
                      boxShadow: expanded === i ? `0 0 20px ${p.accent}30` : "none",
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      color: p.accent,
                      opacity: 0.7,
                    }}
                  >
                    {p.period}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-1" style={{ fontSize: "1rem" }}>{p.title}</h3>
                <p className="text-xs text-[#6a8aaa]">{p.subtitle}</p>
              </div>

              {/* metrics */}
              <div className="grid grid-cols-3 divide-x" style={{ borderBottom: `1px solid ${p.accent}12` }}>
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="py-2.5 text-center"
                    style={{ borderColor: `${p.accent}12` }}
                  >
                    <div
                      className="text-base font-bold font-display"
                      style={{ color: p.accent }}
                    >
                      {m.val}
                    </div>
                    <div className="text-[9px] text-[#6a8aaa] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* tags + expand toggle */}
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: `${p.accent}0a`,
                        border: `1px solid ${p.accent}22`,
                        color: p.accent,
                        fontFamily: "'JetBrains Mono',monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: p.accent }}
                >
                  {expanded === i ? "Collapse" : "View details"}
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: expanded === i ? "rotate(180deg)" : "none", transition: "transform .3s" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* expanded detail panel */}
        {expanded !== null && (
          <div
            className="reveal rounded-2xl p-7"
            style={{
              background: "#070f21",
              border: `1px solid ${PROJECTS[expanded].accent}30`,
              boxShadow: `0 0 50px ${PROJECTS[expanded].accent}0a`,
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{PROJECTS[expanded].icon}</span>
              <div>
                <h3 className="font-bold text-white">{PROJECTS[expanded].title}</h3>
                <span
                  className="text-xs"
                  style={{ color: PROJECTS[expanded].accent, fontFamily: "'JetBrains Mono',monospace" }}
                >
                  {PROJECTS[expanded].period}
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {PROJECTS[expanded].points.map((pt, j) => (
                <li key={j} className="flex gap-3 text-sm text-[#8aaac8] leading-relaxed">
                  <span className="mt-1 shrink-0" style={{ color: PROJECTS[expanded].accent }}>▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
