import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <div ref={ref} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold gradient-text tabular-nums">
      {n}
      {suffix}
    </div>
  );
}

const stats = [
  { value: 8, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Certifications" },
  { value: 12, suffix: "+", label: "Technologies Learned" },
  { value: 4, suffix: "+", label: "Years of Learning" },
];

export function Stats() {
  return (
    <section className="relative py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass-strong rounded-3xl p-6 sm:p-10 md:p-12 gradient-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-soft pointer-events-none" style={{ background: "var(--gradient-soft)" }} />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
