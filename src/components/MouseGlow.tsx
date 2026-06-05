import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({
    x: -1000,
    y: -1000,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsPointer =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!supportsPointer) return;

    setEnabled(true);

    let animationFrame = 0;
    let nextPosition = { x: 0, y: 0 };

    const handleMove = (e: MouseEvent) => {
      nextPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
          setPosition(nextPosition);
          animationFrame = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Main Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            500px circle at ${position.x}px ${position.y}px,
            rgba(0, 170, 255, 0.12),
            transparent 60%
          )`,
        }}
      />

      {/* Secondary Purple Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            350px circle at ${position.x}px ${position.y}px,
            rgba(180, 0, 255, 0.08),
            transparent 65%
          )`,
        }}
      />

      {/* Center Dot */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.9)]"
        style={{
          left: position.x - 6,
          top: position.y - 6,
        }}
      />
    </>
  );
}