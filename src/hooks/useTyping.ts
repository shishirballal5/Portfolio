import { useEffect, useState } from "react";

export default function useTyping(phrases: string[], speed = 75) {
  const [txt, setTxt] = useState("");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = phrases[pi];
    const delay = del ? 38 : ci === cur.length ? 2200 : speed;
    const t = setTimeout(() => {
      if (!del && ci < cur.length) { setTxt(cur.slice(0, ci + 1)); setCi((c) => c + 1); }
      else if (!del && ci === cur.length) setDel(true);
      else if (del && ci > 0) { setTxt(cur.slice(0, ci - 1)); setCi((c) => c - 1); }
      else { setDel(false); setPi((p) => (p + 1) % phrases.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, del, pi, phrases, speed]);
  return txt;
}
