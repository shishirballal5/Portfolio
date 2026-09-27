import { useEffect, useRef, useState } from "react";

/** Flips `on` to true once the referenced element is 25% visible. */
export default function useSkillAnim() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !on) setOn(true); }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [on]);
  return { ref, on };
}
