import { motion } from "motion/react";
import { Rocket, Target } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const shortTerm = [
  "Become a strong, versatile Software Engineer",
  "Master modern AI and Machine Learning systems",
  "Build impactful, real-world products",
];
const longTerm = [
  "AI Engineer at a world-class lab or product team",
  "Software Architect designing systems at scale",
  "Technology entrepreneur shipping AI-first products",
  "Innovation leader mentoring the next generation",
];

export function Vision() {
  return (
    <section id="vision" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career Vision"
          title={<>The <span className="gradient-text">roadmap</span></>}
          description="Where I'm headed — near, and far."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Short-Term Goals", items: shortTerm, kicker: "Next 1–2 years" },
            { icon: Rocket, title: "Long-Term Goals", items: longTerm, kicker: "5+ years" },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-strong rounded-3xl p-6 sm:p-8 gradient-border relative overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gradient-primary opacity-15 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-1">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <col.icon size={18} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {col.kicker}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mt-3 mb-5">{col.title}</h3>
                <ol className="space-y-3">
                  {col.items.map((it, j) => (
                    <li key={it} className="flex items-start gap-3 group">
                      <span className="mt-1 grid place-items-center h-6 w-6 rounded-full glass text-xs font-mono text-primary">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground/90 group-hover:text-foreground transition-colors">
                        {it}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
