import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-10 sm:mb-14 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground tracking-wide uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary animate-pulse" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[1.75rem] leading-tight sm:text-4xl md:text-5xl font-bold text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-sm sm:text-base md:text-lg text-balance">{description}</p>
      )}
    </motion.div>
  );
}
