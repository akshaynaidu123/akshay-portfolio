import { motion } from "motion/react";
import { Crown, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  { icon: Crown, title: "Team Lead", text: "Led the IoT water-quality project end-to-end." },
  { icon: Sparkles, title: "AI & ML Undergrad", text: "Specialized B.Tech in AI & Machine Learning." },
  { icon: Trophy, title: "3+ Internships", text: "AWS, Google AI/ML, and NPTEL credentials." },
  { icon: GraduationCap, title: "Academic Excellence", text: "Sustained CGPA of 8.3 across semesters." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Milestones <span className="gradient-text">so far</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition"
            >
              <Icon className="text-primary mb-3" size={22} />
              <h3 className="font-display font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
