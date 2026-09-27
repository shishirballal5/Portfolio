import SectionLabel from "@/components/ui/SectionLabel";
import useReveal from "@/hooks/useReveal";
import { EXPERIENCE } from "@/data/experience";

export default function ExperiencePage() {
  useReveal();

  return (
    <div className="min-h-screen page-enter page-glow-cyan" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-5">

        {/* header */}
        <div className="reveal text-center mb-14">
          <SectionLabel>Career Journey</SectionLabel>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mt-4 mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#6a8aaa] max-w-md mx-auto">
            3+ years at Mindstack Technologies — growing from sole backend dev to Senior Developer.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 tl-line hidden md:block"
            style={{ opacity: 0.35 }}
          />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className={`reveal d${i + 1} md:pl-16 relative`}>
                {/* timeline dot */}
                <div
                  className="hidden md:flex absolute left-[14px] top-7 w-5 h-5 rounded-full items-center justify-center z-10"
                  style={{
                    background: exp.current ? exp.color : "#0a1428",
                    border: `2px solid ${exp.color}`,
                    boxShadow: exp.current ? `0 0 16px ${exp.color}` : "none",
                  }}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-[#030712] animate-ping absolute" />
                  )}
                </div>

                {/* card */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#070f21",
                    border: `1px solid ${exp.color}22`,
                    boxShadow: exp.current
                      ? `0 0 40px ${exp.color}12, 0 10px 40px rgba(0,0,0,.5)`
                      : "0 4px 30px rgba(0,0,0,.5)",
                  }}
                >
                  {/* card header band */}
                  <div
                    className="px-6 py-4"
                    style={{
                      background: `linear-gradient(135deg,${exp.color}10,transparent)`,
                      borderBottom: `1px solid ${exp.color}18`,
                    }}
                  >
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3
                            className="text-xl font-bold"
                            style={{ color: exp.color }}
                          >
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: `${exp.color}18`,
                                border: `1px solid ${exp.color}45`,
                                color: exp.color,
                                fontFamily: "'JetBrains Mono',monospace",
                                boxShadow: `0 0 12px ${exp.color}30`,
                              }}
                            >
                              ● current
                            </span>
                          )}
                        </div>
                        <div className="text-white font-medium">{exp.company}</div>
                        <div
                          className="text-xs text-[#6a8aaa] mt-0.5"
                          style={{ fontFamily: "'JetBrains Mono',monospace" }}
                        >
                          {exp.location}
                        </div>
                      </div>
                      <div
                        className="text-xs px-3 py-2 rounded-lg shrink-0"
                        style={{
                          background: `${exp.color}0c`,
                          border: `1px solid ${exp.color}28`,
                          color: exp.color,
                          fontFamily: "'JetBrains Mono',monospace",
                        }}
                      >
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* metrics row */}
                  <div
                    className="grid grid-cols-4 divide-x px-0"
                    style={{ borderBottom: `1px solid ${exp.color}14` }}
                  >
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="py-3 text-center"
                        style={{ borderColor: `${exp.color}14` }}
                      >
                        <div
                          className="text-lg font-bold font-display"
                          style={{ color: exp.color, textShadow: `0 0 14px ${exp.color}60` }}
                        >
                          {m.val}
                        </div>
                        <div className="text-[9px] text-[#6a8aaa] leading-tight mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* bullet points */}
                  <div className="px-6 py-5">
                    <ul className="space-y-2.5 mb-5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-sm text-[#8aaac8] leading-relaxed">
                          <span className="mt-1 shrink-0" style={{ color: exp.color }}>▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* stack tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            background: `${exp.color}0a`,
                            border: `1px solid ${exp.color}28`,
                            color: exp.color,
                            fontFamily: "'JetBrains Mono',monospace",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
