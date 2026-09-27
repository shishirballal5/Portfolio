import { useState, useEffect } from "react";
import { PAGES, type Page } from "@/data/navigation";

interface NavProps {
  page: Page;
  setPage: (p: Page) => void;
}

export default function Nav({ page, setPage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function go(p: Page) {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(3,7,18,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,240,255,.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* logo */}
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{
              background: "linear-gradient(135deg,rgba(0,240,255,.2),rgba(191,90,242,.2))",
              border: "1px solid rgba(0,240,255,.35)",
              boxShadow: "0 0 16px rgba(0,240,255,.2)",
              color: "#00f0ff",
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            SB
          </div>
          <span
            className="hidden sm:block text-sm text-[#6a8aaa] group-hover:text-[#00f0ff] transition-colors"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}
          >
            ./portfolio
          </span>
        </button>

        {/* desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {PAGES.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => go(p.id)}
                className={`nav-btn px-4 py-2 text-sm font-medium rounded transition-colors ${
                  page === p.id ? "text-[#00f0ff] active" : "text-[#6a8aaa] hover:text-white"
                }`}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>

        {/* hire me cta */}
        <button
          onClick={() => go("contact")}
          className="btn-primary hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
        >
          Hire Me
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-[#6a8aaa] hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><path d="M18 6L6 18M6 6l12 12" /></>
              : <><path d="M3 6h18M3 12h18M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {/* mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(3,7,18,.97)", borderTop: "1px solid rgba(0,240,255,.1)" }}
        >
          {PAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => go(p.id)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                page === p.id
                  ? "bg-[rgba(0,240,255,.1)] text-[#00f0ff]"
                  : "text-[#6a8aaa] hover:text-white hover:bg-white/5"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
