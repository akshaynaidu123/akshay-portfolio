import { motion } from "motion/react";
import { Award, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const certs = [
  {
    title: "NPTEL — Social Networks",
    issuer: "IIT / NPTEL",
    year: "2024",
  },
  {
    title: "AWS Cloud Virtual Internship",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "Google AI & ML Virtual Internship",
    issuer: "Google for Developers",
    year: "2024",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Credentials <span className="gradient-text">earned</span></>}
          description="Programs completed with hands-on labs, capstones, and graded assessments."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass-strong rounded-3xl p-6 gradient-border relative overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
                  <Award size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{c.year}</span>
                  <span className="inline-flex items-center gap-1 text-primary">
                    <BadgeCheck size={12} /> Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
