import { useEffect, useState } from "react";

export function TypingText({ words, className }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, sub.length + 1);
        setSub(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, idx, words]);

  return (
    <span className={className}>
      <span className="gradient-text">{sub}</span>
      <span className="inline-block w-0.5 h-[1em] translate-y-0.5 ml-1 bg-primary animate-pulse" />
    </span>
  );
}
