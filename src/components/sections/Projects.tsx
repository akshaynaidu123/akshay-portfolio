import { motion } from "motion/react";
import { Clock, ExternalLink, Github, Users } from "lucide-react";
import iot from "@/assets/project-iot.jpg";
import garuda from "@/assets/project-garudax.jpg";
import transport from "@/assets/project-transport..png";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "IoT-Driven Water Quality Monitoring",
    image: iot,
    description:
      "An IoT system using temperature and dissolved oxygen sensors to collect real-time water quality data, streamed wirelessly to cloud platforms and mobile applications for instant alerts.",
    role: "Team Lead",
    duration: "6 Months",
    tech: ["Arduino", "ESP32", "Python", "MQTT", "AWS IoT", "React"],
    features: [
      "Real-time monitoring",
      "Cloud integration",
      "Wireless communication",
      "Mobile alerts",
    ],
    github: "https://github.com/akshayenaganti",
    demo: "#",
  },

  {
    title: "GarudaX — AI Security Platform",
    image: garuda,
    description:
      "An advanced AI-powered security and monitoring platform featuring intelligent surveillance, anomaly detection, threat analysis, and automation dashboards.",
    role: "Founder & Engineer",
    duration: "Ongoing",
    tech: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "FastAPI",
      "React",
      "PostgreSQL",
    ],
    features: [
      "Smart surveillance",
      "Threat detection",
      "AI analytics",
      "Security automation",
    ],
    github: "https://github.com/akshayenaganti",
    demo: "#",
  },

  {
    title: "Advanced AI Monitoring Public Transportation System",
    image: transport,
    description:
      "AI-powered public transportation monitoring platform designed for government agencies. The system provides real-time vehicle tracking, passenger analytics, route monitoring, driver behavior analysis, and safety alert generation.",
    role: "AI/ML Developer",
    duration: "Completed",
    tech: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Machine Learning",
      "IoT",
      "GPS",
    ],
    features: [
      "Vehicle tracking",
      "Passenger analytics",
      "Route optimization",
      "Safety alerts",
    ],
    github: "https://github.com/akshayenaganti",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Things <span className="gradient-text">I've built</span>
            </>
          }
          description="Hands-on engineering — from IoT systems to AI-powered platforms and intelligent monitoring solutions."
        />

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`group glass-strong rounded-3xl overflow-hidden gradient-border grid lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-background/60 via-transparent to-background/40 z-10" />

                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={12} />
                    {p.role}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} />
                    {p.duration}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                  {p.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {p.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full glass px-3 py-1 text-xs text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition"
                  >
                    <Github size={14} />
                    GitHub
                  </a>

                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}