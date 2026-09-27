export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="sec-label">
      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
      {children}
    </div>
  );
}
