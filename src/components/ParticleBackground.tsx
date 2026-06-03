import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; r: number };

export function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion: skip entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Treat small or coarse-pointer screens as "mobile-ish" — lighter render
    const isSmall = window.matchMedia("(max-width: 767px)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const light = isSmall || isCoarse;

    let raf = 0;
    let particles: P[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, light ? 1.25 : 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const density = light ? 42000 : 18000;
      const cap = light ? 32 : 90;
      const count = Math.min(cap, Math.floor((window.innerWidth * window.innerHeight) / density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        vy: (Math.random() - 0.5) * 0.3 * dpr,
        r: (Math.random() * 1.4 + 0.4) * dpr,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 200, 255, 0.6)";
        ctx.fill();
      }
      // Skip O(n^2) line connections on light mode — biggest mobile win
      if (!light) {
        const maxDist = 130 * dpr;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i], b = particles[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < maxDist) {
              const alpha = (1 - d / maxDist) * 0.25;
              ctx.strokeStyle = `rgba(140, 180, 255, ${alpha})`;
              ctx.lineWidth = dpr * 0.6;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-50 sm:opacity-60"
      aria-hidden
    />
  );
}
