import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-primary opacity-60 animate-pulse" />

          <div className="relative h-24 w-24 rounded-full border border-primary/30 glass-strong flex items-center justify-center">
            <span className="text-3xl font-bold gradient-text">
              A
            </span>
          </div>
        </div>

        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>

          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="font-display text-lg font-semibold gradient-text">
            Akshay Portfolio
          </h2>

          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Initializing AI Systems...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-56">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 text-center text-xs text-muted-foreground">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}