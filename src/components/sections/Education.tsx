import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  {
    title: "Bachelor of Technology — AI & Machine Learning",
    school: "Swarnaandhra College of Engineering & Technology",
    period: "2023 — 2027",
    detail: "CGPA: 8.3",
  },
  {
    title: "Intermediate Education",
    school: "Surya Junior College",
    period: "2021 — 2023",
    detail: "Mathematics, Physics, Chemistry",
  },
  {
    title: "Secondary Education",
    school: "Surya School",
    period: "Until 2021",
    detail: "Foundations in science & computing",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="gradient-text">timeline</span></>}
          description="Building strong fundamentals while shipping real projects in parallel."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent sm:-translate-x-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid sm:grid-cols-2 gap-4 sm:gap-12 items-center ${
                  i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right" : ""}`}>
                  <div className="glass-strong rounded-2xl p-5 sm:p-6 inline-block w-full gradient-border">
                    <div className="text-xs uppercase tracking-wider text-primary mb-2">
                      {it.period}
                    </div>
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{it.school}</p>
                    <p className="text-sm mt-2 font-medium">{it.detail}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 grid place-items-center h-8 w-8 rounded-full bg-background border border-primary shadow-glow">
                  <GraduationCap size={14} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
