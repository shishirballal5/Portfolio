import { useEffect } from "react";

/** Adds the `vis` class to `.reveal`, `.reveal-l` and `.reveal-r` elements as they scroll into view. */
export default function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("vis")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
