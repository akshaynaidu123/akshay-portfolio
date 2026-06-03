import { motion } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";

const groups = [
  {
    title: "Programming",
    items: [
      { name: "Python", level: 92 },
      { name: "Java", level: 82 },
      { name: "C", level: 78 },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 82 },
      { name: "Scikit-Learn", level: 88 },
      { name: "NumPy", level: 90 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", level: 84 },
      { name: "SQL", level: 86 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>Tools <span className="gradient-text">I wield</span></>}
          description="A focused toolkit, sharpened through projects and certifications — not just tutorials."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="glass-strong rounded-3xl p-6 sm:p-8 gradient-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                <span className="text-xs text-muted-foreground">{g.items.length} skills</span>
              </div>
              <ul className="space-y-5">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary shadow-glow"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
