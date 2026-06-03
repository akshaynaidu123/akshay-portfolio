import { motion } from "motion/react";
import { Brain, Cloud, Code2, Cpu, Shield, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const interests = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Code2, label: "Software Development" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Cpu, label: "IoT Systems" },
  { icon: Users, label: "Team Leadership" },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title={<>The mind behind <span className="gradient-text">the code</span></>}
          description="I'm an AI & Machine Learning undergraduate driven by a simple idea: technology should make people's lives meaningfully better."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl glass-strong rounded-3xl p-6 sm:p-10 gradient-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Engineering at the intersection of AI and impact.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor of Technology in AI & ML at Swarnaandhra College
                of Engineering & Technology, I love turning ambiguous problems into shipped,
                production-quality software. From training models to wiring up real-world sensors,
                I move across the stack.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I've led teams, built end-to-end IoT systems, and earned internships from
                <span className="text-foreground"> AWS</span> and
                <span className="text-foreground"> Google</span>. My north star is building
                products at the scale of <span className="text-foreground">Google, Microsoft,
                OpenAI</span> and <span className="text-foreground">NVIDIA</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {interests.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-4 hover:bg-white/10 transition-colors"
                >
                  <Icon className="text-primary mb-2" size={20} />
                  <div className="text-sm font-medium">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
