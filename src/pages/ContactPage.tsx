import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import useReveal from "@/hooks/useReveal";
import { CONTACTS } from "@/data/contact";
import { EMAIL, LINKEDIN_URL } from "@/data/profile";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  useReveal();

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen page-enter page-glow-cyan" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
      <div className="max-w-5xl mx-auto px-5">

        {/* header */}
        <div className="reveal text-center mb-14">
          <SectionLabel>Let's Connect</SectionLabel>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mt-4 mb-4">
            Ready to <span className="gradient-text">collaborate?</span>
          </h2>
          <p className="text-[#6a8aaa] max-w-lg mx-auto text-base leading-relaxed">
            I'm actively seeking opportunities in{" "}
            <span className="text-white font-medium">Mangaluru or Bengaluru</span>. If you have a role,
            a project, or want to talk backend architecture — reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* contact cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#6a8aaa] uppercase tracking-widest mb-5"
              style={{ fontFamily: "'JetBrains Mono',monospace" }}>
              Contact Info
            </h3>
            {CONTACTS.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`reveal d${i + 1} flex items-center gap-4 p-4 rounded-xl transition-all duration-250 group block`}
                style={{
                  background: "#070f21",
                  border: `1px solid ${c.color}18`,
                  boxShadow: "0 2px 20px rgba(0,0,0,.4)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}50`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${c.color}12, 0 4px 24px rgba(0,0,0,.6)`;
                  (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c.color}18`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(0,0,0,.4)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{
                    background: `${c.color}12`,
                    border: `1px solid ${c.color}28`,
                  }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#6a8aaa] mb-0.5">{c.label}</div>
                  <div
                    className="text-sm font-medium truncate"
                    style={{ color: c.color, fontFamily: "'JetBrains Mono',monospace" }}
                  >
                    {c.value}
                  </div>
                </div>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  style={{ color: c.color, opacity: 0.5, flexShrink: 0 }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* right panel */}
          <div className="flex flex-col gap-5">
            {/* availability card */}
            <div
              className="reveal-r rounded-2xl p-6"
              style={{
                background: "#070f21",
                border: "1px solid rgba(0,240,255,.2)",
                boxShadow: "0 0 40px rgba(0,240,255,.07)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-3 h-3 rounded-full bg-[#39ff14]"
                  style={{ boxShadow: "0 0 10px #39ff14" }}
                />
                <span className="text-sm font-semibold text-white">Available for Opportunities</span>
              </div>
              <div
                className="text-sm text-[#8aaac8] leading-relaxed mb-5 italic"
                style={{ borderLeft: "2px solid #00f0ff", paddingLeft: "12px" }}
              >
                Currently exploring my next Developer opportunity in{" "}
                <span className="text-white not-italic font-medium">Mangaluru or Bengaluru</span>, where I
                can build on backend experience, take bigger technical challenges, and step toward becoming a
                well-rounded{" "}
                <span className="text-[#00f0ff] not-italic font-medium">Full-Stack Developer</span>.
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Open to",  val: "Full-time roles" },
                  { label: "Domain",   val: "Backend / Fintech" },
                  { label: "Location", val: "Mangaluru / Bengaluru" },
                  { label: "Notice",   val: "Available now" },
                ].map((i) => (
                  <div
                    key={i.label}
                    className="rounded-lg p-3"
                    style={{ background: "rgba(0,240,255,.04)", border: "1px solid rgba(0,240,255,.1)" }}
                  >
                    <div className="text-xs text-[#6a8aaa] mb-0.5">{i.label}</div>
                    <div className="text-sm text-white font-medium">{i.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* quick copy + CTA */}
            <div className="reveal-r d2 flex gap-3">
              <button
                onClick={copyEmail}
                className="flex-1 btn-primary py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                {copied ? (
                  <><span>✓</span> Copied!</>
                ) : (
                  <><span>📋</span> Copy Email</>
                )}
              </button>
              <a
                href={`mailto:${EMAIL}`}
                className="flex-1 btn-secondary py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>✉</span> Send Email
              </a>
            </div>

            {/* CTA for linkedin */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-r d3 flex items-center justify-between p-4 rounded-xl transition-all"
              style={{
                background: "rgba(191,90,242,.07)",
                border: "1px solid rgba(191,90,242,.25)",
                color: "#bf5af2",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(191,90,242,.14)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(191,90,242,.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(191,90,242,.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <span className="text-sm font-medium">Connect on LinkedIn</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
