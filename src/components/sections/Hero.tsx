import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { TypingText } from "@/components/TypingText";
import resumePdf from "@/assets/Akshay_Resume.pdf";
import profile from "@/assets/profile.jpg";



export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center pt-24 sm:pt-28 pb-20 sm:pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles size={12} className="text-primary" />
              Available for internships & collaborations
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Hi, I'm <span className="gradient-text">Akshay</span>
              <br />
              Shankar Naidu
            </h1>

            <div className="mt-5 text-lg sm:text-2xl md:text-3xl font-display font-medium text-muted-foreground">
              I build as a{" "}
              <TypingText
                words={[
                  "AI Engineer",
                  "Machine Learning Developer",
                  "Software Engineer",
                  "Future Tech Innovator",
                ]}
              />
            </div>

            <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              AI & Machine Learning engineering student crafting intelligent
              systems across software, cloud, cybersecurity, and IoT. Obsessed
              with shipping products that matter.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-[0_0_60px_oklch(0.65_0.22_255/0.6)] transition-shadow"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href={resumePdf}
                download="Akshay_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                <Download size={16} />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/5 transition"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-8 text-sm">
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold gradient-text">
                  8.3
                </div>
                <div className="text-muted-foreground text-xs">CGPA</div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/10" />

              <div>
                <div className="font-display text-xl sm:text-2xl font-bold gradient-text">
                  10+
                </div>
                <div className="text-muted-foreground text-xs">
                  Technologies
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/10" />

              <div>
                <div className="font-display text-xl sm:text-2xl font-bold gradient-text">
                  3+
                </div>
                <div className="text-muted-foreground text-xs">
                  Certifications
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm"
          >
            <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />

            <div className="relative aspect-square rounded-[2rem] glass-strong p-2 animate-float gradient-border">
              <img
                src={profile}
                alt="Akshay Shankar Naidu"
                className="h-full w-full rounded-[1.6rem] object-cover"
              />

              <div className="absolute -bottom-3 left-2 sm:-left-3 glass-strong rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-glow">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium">
                    AI/ML · B.Tech '27
                  </span>
                </div>
              </div>

              <div className="absolute -top-3 right-2 sm:-right-3 glass-strong rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
                <span className="text-xs font-mono text-muted-foreground">
                  {"<engineer />"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex-col items-center gap-2 hover:text-foreground transition-colors"
      >
        Scroll
        <span className="h-8 w-0.5 bg-linear-to-b from-primary to-transparent" />
      </a>
    </section>
  );
}