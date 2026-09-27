import SectionLabel from "@/components/ui/SectionLabel";
import useReveal from "@/hooks/useReveal";
import { EDUCATION_DETAILS, LEARNING_PATH } from "@/data/education";

export default function EducationPage() {
  useReveal();

  return (
    <div className="min-h-screen page-enter page-glow-green" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
      <div className="max-w-4xl mx-auto px-5">

        {/* header */}
        <div className="reveal text-center mb-14">
          <SectionLabel>Academic Background</SectionLabel>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mt-4 mb-3">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[#6a8aaa] max-w-md mx-auto">
            A strong engineering foundation that fuels systematic, architecture-first thinking.
          </p>
        </div>

        {/* edu card */}
        <div className="reveal-l max-w-2xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#070f21",
              border: "1px solid rgba(57,255,20,.18)",
              boxShadow: "0 0 50px rgba(57,255,20,.06), 0 12px 50px rgba(0,0,0,.6)",
            }}
          >
            {/* header band */}
            <div
              className="px-7 py-6"
              style={{
                background: "linear-gradient(135deg,rgba(57,255,20,.07),transparent)",
                borderBottom: "1px solid rgba(57,255,20,.1)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{
                    background: "rgba(57,255,20,.1)",
                    border: "1px solid rgba(57,255,20,.25)",
                    boxShadow: "0 0 20px rgba(57,255,20,.15)",
                  }}
                >
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <div className="text-[#39ff14] font-medium mb-1">Mechanical Engineering</div>
                  <div className="text-[#6a8aaa] text-sm">N.M.A.M. Institute of Technology</div>
                </div>
              </div>
            </div>

            {/* details */}
            <div className="px-7 py-6 grid sm:grid-cols-3 gap-4">
              {EDUCATION_DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(57,255,20,.04)",
                    border: "1px solid rgba(57,255,20,.12)",
                  }}
                >
                  <div className="text-xl mb-2">{d.icon}</div>
                  <div className="text-xs text-[#6a8aaa] mb-1">{d.label}</div>
                  <div className="text-sm font-semibold text-white">{d.val}</div>
                </div>
              ))}
            </div>

            {/* note */}
            <div
              className="mx-7 mb-6 p-4 rounded-xl text-sm text-[#8aaac8] leading-relaxed"
              style={{
                background: "rgba(0,240,255,.04)",
                border: "1px solid rgba(0,240,255,.12)",
                borderLeft: "3px solid #00f0ff",
              }}
            >
              Transitioned from mechanical to software engineering through self-driven learning and
              continuous hands-on development — now with 3+ years of production-grade backend engineering
              experience in fintech.
            </div>
          </div>
        </div>

        {/* learning path */}
        <div className="reveal mt-10">
          <h3 className="text-center text-white font-semibold mb-6 text-lg">Continuous Learning Path</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {LEARNING_PATH.map((c) => (
              <div
                key={c.title}
                className="card-neo p-5 text-center"
                style={{
                  background: "#070f21",
                  borderColor: `${c.color}20`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mx-auto mb-3"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}28` }}
                >
                  {c.icon}
                </div>
                <h4 className="font-semibold mb-2" style={{ color: c.color }}>{c.title}</h4>
                <p className="text-xs text-[#6a8aaa] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
