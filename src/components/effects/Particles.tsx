export default function Particles() {
  const pts = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${(i * 4.7 + 2) % 100}%`,
    size: 1 + (i % 3),
    dur: 14 + (i % 12),
    delay: (i * 1.1) % 22,
    color: i % 4 === 0 ? "#00f0ff" : i % 4 === 1 ? "#bf5af2" : i % 4 === 2 ? "#ffd60a" : "#ffffff",
    opacity: 0.1 + (i % 5) * 0.06,
  }));
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pts.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-8px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
