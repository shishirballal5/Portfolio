import SectionLabel from "@/components/ui/SectionLabel";
import useReveal from "@/hooks/useReveal";
import useSkillAnim from "@/hooks/useSkillAnim";
import { SKILL_BARS, SKILL_CATS, COL_MAP, HDR_MAP, BDR_MAP } from "@/data/skills";

export default function SkillsPage() {
  const { ref, on } = useSkillAnim();

  useReveal();

  return (
    <div className="min-h-screen page-enter page-glow-purple" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
      <div className="max-w-7xl mx-auto px-5">

        {/* header */}
        <div className="reveal text-center mb-14">
          <SectionLabel>Technical Arsenal</SectionLabel>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mt-4 mb-3">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-[#6a8aaa] max-w-lg mx-auto">
            3+ years of hands-on engineering across fintech, real-time systems, and cloud infrastructure.
          </p>
        </div>

        {/* proficiency bars */}
        <div
          ref={ref}
          className="reveal card-neo p-7 mb-10"
          style={{ background: "#070f21" }}
        >
          <div
            className="text-xs text-[#6a8aaa] mb-6"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}
          >
            // proficiency levels
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {SKILL_BARS.map((s, i) => (
              <div key={s.label} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#cce4ff]">{s.label}</span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      color: s.beginner ? "#bf5af2" : "#00f0ff",
                    }}
                  >
                    {s.beginner ? "beginner" : `${s.pct}%`}
                  </span>
                </div>
                <div className="bar-track">
                  <div
                    className={`bar-fill bg-gradient-to-r ${s.color} ${on ? "ani" : ""}`}
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 80 + 200}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-5 p-3 rounded-lg text-xs leading-relaxed"
            style={{
              background: "rgba(191,90,242,.06)",
              border: "1px solid rgba(191,90,242,.18)",
              color: "#c084fc",
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            ✦ React currently being explored — actively building toward full-stack development.
          </div>
        </div>

        {/* skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATS.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal card-neo p-5 d${Math.min(i + 1, 6)}`}
              style={{ background: "#070f21", borderColor: BDR_MAP[cat.color] }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                  style={{
                    background: BDR_MAP[cat.color].replace("0.2", "0.1"),
                    border: `1px solid ${BDR_MAP[cat.color]}`,
                  }}
                >
                  {cat.icon}
                </span>
                <h3 className={`text-sm font-semibold ${HDR_MAP[cat.color]}`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((t) => (
                  <span key={t} className={`tag ${COL_MAP[cat.color]}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
