import { PAGE_LABELS, type Page } from "@/data/navigation";
import { EMAIL } from "@/data/profile";

interface Props { page: Page }

export default function Footer({ page }: Props) {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,240,255,.08)",
        background: "rgba(3,7,18,.8)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm text-[#6a8aaa]">© 2026 Shishir Ballal. All rights reserved.</span>
        <span
          className="text-xs text-[#6a8aaa]"
          style={{ fontFamily: "'JetBrains Mono',monospace" }}
        >
          {PAGE_LABELS[page]} · {EMAIL}
        </span>
      </div>
    </footer>
  );
}
