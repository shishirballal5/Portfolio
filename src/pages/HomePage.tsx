import profilePhoto from "@/assets/images/profile.png";
import useReveal from "@/hooks/useReveal";
import useTyping from "@/hooks/useTyping";
import type { Page } from "@/data/navigation";
import { STATS, TYPED_ROLES } from "@/data/profile";

interface Props { setPage: (p: Page) => void }

export default function HomePage({ setPage }: Props) {
  const typed = useTyping(TYPED_ROLES);

  useReveal();

  return (
    <div className="min-h-screen page-enter page-glow-cyan grid-bg relative" style={{ paddingTop: "80px" }}>
      {/* strong top beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          height: "220px",
          background: "linear-gradient(180deg,#00f0ff,transparent)",
          boxShadow: "0 0 30px 6px rgba(0,240,255,.25)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── left ── */}
          <div>
            {/* availability badge */}
            <div
              className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(0,240,255,.07)",
                border: "1px solid rgba(0,240,255,.25)",
                fontFamily: "'JetBrains Mono',monospace",
                color: "#00f0ff",
                boxShadow: "0 0 20px rgba(0,240,255,.1)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              Open to opportunities · Mangaluru / Bengaluru
            </div>

            <h1
              className="font-display font-bold leading-[1.03] mb-5"
              style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}
            >
              <span className="text-white">Shishir</span>
              <br />
              <span className="gradient-text glow-cyan">Ballal</span>
            </h1>

            <div
              className="mb-5 h-9 text-xl"
              style={{ fontFamily: "'JetBrains Mono',monospace", color: "#00f0ff" }}
            >
              {typed}<span className="cursor" />
            </div>

            <p className="text-[#8aaac8] text-base leading-relaxed mb-4 max-w-lg">
              Backend Software Developer with{" "}
              <span className="text-white font-semibold">3+ years</span> building scalable REST APIs,
              real-time applications, and multi-tenant systems using{" "}
              <span className="text-[#00f0ff]">NestJS</span>,{" "}
              <span className="text-[#00f0ff]">TypeScript</span>, and SQL. Specializes in{" "}
              <span className="text-white font-semibold">fintech & investment platforms</span>.
            </p>

            {/* opportunity statement */}
            <div
              className="relative mb-8 p-4 rounded-xl text-sm text-[#8aaac8] leading-relaxed max-w-lg italic"
              style={{
                background: "rgba(0,240,255,.04)",
                borderLeft: "3px solid #00f0ff",
                boxShadow: "inset 0 0 30px rgba(0,240,255,.03)",
              }}
            >
              <span
                className="absolute -top-3 left-4 text-xs px-2 py-0.5 rounded"
                style={{
                  background: "#030712",
                  border: "1px solid rgba(0,240,255,.2)",
                  color: "#00f0ff",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontStyle: "normal",
                }}
              >
                seeking next role
              </span>
              Currently exploring my next Developer opportunity in{" "}
              <span className="text-white not-italic font-medium">Mangaluru or Bengaluru</span>, where I can
              build on my backend experience, take on bigger technical challenges, and take the next step
              toward becoming a well-rounded{" "}
              <span className="text-[#00f0ff] not-italic font-medium">Full-Stack Developer</span>.
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => setPage("projects")}
                className="btn-primary px-6 py-3 rounded-xl text-sm relative z-10"
              >
                View Projects
              </button>
              <button
                onClick={() => setPage("contact")}
                className="btn-secondary px-6 py-3 rounded-xl text-sm"
              >
                Get in Touch
              </button>
            </div>

            {/* stats */}
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="stat-chip">
                  <div
                    className="text-xl font-bold gradient-text font-display"
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] text-[#6a8aaa] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── right ── */}
          <div className="reveal-r flex flex-col gap-5">
            {/* photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* outer glow ring */}
                <div
                  className="absolute -inset-3 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg,rgba(0,240,255,.3),rgba(191,90,242,.3))",
                    filter: "blur(18px)",
                    opacity: 0.6,
                  }}
                />
                <div
                  className="relative w-48 h-56 rounded-2xl overflow-hidden"
                  style={{
                    border: "1.5px solid rgba(0,240,255,.4)",
                    boxShadow: "0 0 0 6px rgba(0,240,255,.06), 0 20px 60px rgba(0,0,0,.7)",
                  }}
                >
                  <img
                    src={profilePhoto}
                    alt="Shishir Ballal"
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to top,rgba(10,20,40,.7),transparent)" }}
                  />
                  <div
                    className="absolute bottom-3 left-0 right-0 text-center text-xs font-medium"
                    style={{ color: "#00f0ff", fontFamily: "'JetBrains Mono',monospace" }}
                  >
                    Senior Software Dev
                  </div>
                </div>
              </div>
            </div>

            {/* terminal */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#070f21",
                border: "1px solid rgba(0,240,255,.15)",
                boxShadow: "0 0 50px rgba(0,240,255,.07), 0 20px 60px rgba(0,0,0,.7)",
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,.06)", background: "#0a1428" }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                <span className="ml-3 text-xs text-[#6a8aaa]" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  shishir ~ node profile.ts
                </span>
              </div>
              <div
                className="p-5 text-sm leading-7"
                style={{ fontFamily: "'JetBrains Mono',monospace", color: "#6a8aaa" }}
              >
                <div><span style={{color:"#00f0ff"}}>const</span> <span style={{color:"#e8f4ff"}}>dev</span> <span style={{color:"#bf5af2"}}>=</span> <span style={{color:"#00f0ff"}}>{"{"}</span></div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>name</span>{": "}<span style={{color:"#7dea9e"}}>"Shishir Ballal"</span>,</div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>role</span>{": "}<span style={{color:"#7dea9e"}}>"Senior Software Developer"</span>,</div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>stack</span>{": ["}<span style={{color:"#7dea9e"}}>"NestJS"</span>{", "}<span style={{color:"#7dea9e"}}>"TS"</span>{", "}<span style={{color:"#7dea9e"}}>"AWS"</span>{"],"}</div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>apis</span>{": "}<span style={{color:"#ffd60a"}}>70</span>,</div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>users</span>{": "}<span style={{color:"#ffd60a"}}>"50K+"</span>,</div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>goal</span>{": "}<span style={{color:"#7dea9e"}}>"Full-Stack Dev"</span>,</div>
                <div className="pl-4"><span style={{color:"#a0d4ff"}}>location</span>{": "}<span style={{color:"#7dea9e"}}>"Mangaluru/Bengaluru"</span>,</div>
                <div><span style={{color:"#00f0ff"}}>{"}"}</span>;</div>
                <div className="mt-2" style={{color:"#28c840"}}>✓ {">"} Profile loaded successfully!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
