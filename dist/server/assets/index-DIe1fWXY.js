import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import { useState, useEffect, useRef } from "react";
import { X, Menu, Sparkles, ArrowRight, Download, Mail, Brain, Code2, Cloud, Shield, Cpu, Users, GraduationCap, Clock, Github, ExternalLink, Award, BadgeCheck, Crown, Trophy, Target, Rocket, Phone, MapPin, Linkedin, MessageCircle, Send } from "lucide-react";
import { motion, useInView } from "motion/react";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass-strong shadow-lg" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxs("a", { href: "#hero", className: "flex items-center gap-2 group", children: [
                /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow", children: "A" }),
                /* @__PURE__ */ jsxs("span", { className: "hidden sm:block font-display font-semibold tracking-tight", children: [
                  "Akshay",
                  /* @__PURE__ */ jsx("span", { className: "gradient-text", children: ".dev" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: l.href,
                  className: "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5",
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: "hidden md:inline-flex items-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-glow",
                  children: "Hire Me"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "md:hidden p-2 rounded-lg hover:bg-white/5",
                  onClick: () => setOpen((v) => !v),
                  "aria-label": "Toggle menu",
                  children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-1", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "block px-3 py-2 rounded-lg text-sm hover:bg-white/5",
            children: l.label
          }
        ) }, l.href)) }) })
      ] })
    }
  );
}
function ParticleBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isSmall = window.matchMedia("(max-width: 767px)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const light = isSmall || isCoarse;
    let raf = 0;
    let particles = [];
    const dpr = Math.min(window.devicePixelRatio || 1, light ? 1.25 : 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const density = light ? 42e3 : 18e3;
      const cap = light ? 32 : 90;
      const count = Math.min(cap, Math.floor(window.innerWidth * window.innerHeight / density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        vy: (Math.random() - 0.5) * 0.3 * dpr,
        r: (Math.random() * 1.4 + 0.4) * dpr
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 200, 255, 0.6)";
        ctx.fill();
      }
      if (!light) {
        const maxDist = 130 * dpr;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i], b = particles[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < maxDist) {
              const alpha = (1 - d / maxDist) * 0.25;
              ctx.strokeStyle = `rgba(140, 180, 255, ${alpha})`;
              ctx.lineWidth = dpr * 0.6;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref,
      className: "pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-50 sm:opacity-60",
      "aria-hidden": true
    }
  );
}
function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    let raf = 0;
    let next = { x: 0, y: 0 };
    const onMove = (e) => {
      next = { x: e.clientX, y: e.clientY };
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setPos(next);
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300",
      style: {
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(0.65 0.22 255 / 0.12), transparent 60%)`
      }
    }
  );
}
function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-100 grid place-items-center bg-background transition-opacity", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-16 w-16", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-2 rounded-full bg-gradient-primary opacity-70 blur-md" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Initializing" })
  ] }) });
}
function TypingText({ words, className }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, sub.length + 1);
        setSub(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, sub.length - 1);
        setSub(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [sub, deleting, idx, words]);
  return /* @__PURE__ */ jsxs("span", { className, children: [
    /* @__PURE__ */ jsx("span", { className: "gradient-text", children: sub }),
    /* @__PURE__ */ jsx("span", { className: "inline-block w-0.5 h-[1em] translate-y-0.5 ml-1 bg-primary animate-pulse" })
  ] });
}
const resumePdf = "/assets/Akshay_Resume-BvZwuAAv.pdf";
const profile = "/assets/profile-BicgWioT.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-svh flex items-center pt-24 sm:pt-28 pb-20 sm:pb-16 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg", "aria-hidden": true }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 relative", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground", children: [
                  /* @__PURE__ */ jsx(Sparkles, { size: 12, className: "text-primary" }),
                  "Available for internships & collaborations"
                ] }),
                /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-[2.25rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance", children: [
                  "Hi, I'm ",
                  /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Akshay" }),
                  /* @__PURE__ */ jsx("br", {}),
                  "Shankar Naidu"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-5 text-lg sm:text-2xl md:text-3xl font-display font-medium text-muted-foreground", children: [
                  "I build as a",
                  " ",
                  /* @__PURE__ */ jsx(
                    TypingText,
                    {
                      words: [
                        "AI Engineer",
                        "Machine Learning Developer",
                        "Software Engineer",
                        "Future Tech Innovator"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed", children: "AI & Machine Learning engineering student crafting intelligent systems across software, cloud, cybersecurity, and IoT. Obsessed with shipping products that matter." }),
                /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col sm:flex-row flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#projects",
                      className: "group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-[0_0_60px_oklch(0.65_0.22_255/0.6)] transition-shadow",
                      children: [
                        "View Projects",
                        /* @__PURE__ */ jsx(
                          ArrowRight,
                          {
                            size: 16,
                            className: "group-hover:translate-x-1 transition-transform"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: resumePdf,
                      download: "Akshay_Resume.pdf",
                      className: "inline-flex items-center justify-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold hover:bg-white/10 transition",
                      children: [
                        /* @__PURE__ */ jsx(Download, { size: 16 }),
                        "Download Resume"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#contact",
                      className: "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/5 transition",
                      children: [
                        /* @__PURE__ */ jsx(Mail, { size: 16 }),
                        "Contact Me"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-8 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display text-xl sm:text-2xl font-bold gradient-text", children: "8.3" }),
                    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs", children: "CGPA" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "hidden sm:block h-8 w-px bg-white/10" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display text-xl sm:text-2xl font-bold gradient-text", children: "10+" }),
                    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs", children: "Technologies" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "hidden sm:block h-8 w-px bg-white/10" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display text-xl sm:text-2xl font-bold gradient-text", children: "3+" }),
                    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs", children: "Certifications" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.92 },
              animate: { opacity: 1, scale: 1 },
              transition: {
                duration: 0.9,
                ease: "easeOut",
                delay: 0.15
              },
              className: "relative mx-auto w-full max-w-[18rem] sm:max-w-sm",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" }),
                /* @__PURE__ */ jsxs("div", { className: "relative aspect-square rounded-[2rem] glass-strong p-2 animate-float gradient-border", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: profile,
                      alt: "Akshay Shankar Naidu",
                      className: "h-full w-full rounded-[1.6rem] object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 left-2 sm:-left-3 glass-strong rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-glow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "AI/ML · B.Tech '27" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-3 right-2 sm:-right-3 glass-strong rounded-2xl px-3 sm:px-4 py-2 sm:py-3", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-muted-foreground", children: "<engineer />" }) })
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#about",
            className: "hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex-col items-center gap-2 hover:text-foreground transition-colors",
            children: [
              "Scroll",
              /* @__PURE__ */ jsx("span", { className: "h-8 w-0.5 bg-linear-to-b from-primary to-transparent" })
            ]
          }
        )
      ]
    }
  );
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `mb-10 sm:mb-14 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground tracking-wide uppercase", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-primary animate-pulse" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-[1.75rem] leading-tight sm:text-4xl md:text-5xl font-bold text-balance", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-sm sm:text-base md:text-lg text-balance", children: description })
      ]
    }
  );
}
const interests = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Code2, label: "Software Development" },
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Cpu, label: "IoT Systems" },
  { icon: Users, label: "Team Leadership" }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "About",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The mind behind ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "the code" })
        ] }),
        description: "I'm an AI & Machine Learning undergraduate driven by a simple idea: technology should make people's lives meaningfully better."
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7 },
        className: "relative mx-auto max-w-5xl glass-strong rounded-3xl p-6 sm:p-10 gradient-border",
        children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-start", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-4", children: "Engineering at the intersection of AI and impact." }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Currently pursuing my Bachelor of Technology in AI & ML at Swarnaandhra College of Engineering & Technology, I love turning ambiguous problems into shipped, production-quality software. From training models to wiring up real-world sensors, I move across the stack." }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
              "I've led teams, built end-to-end IoT systems, and earned internships from",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: " AWS" }),
              " and",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: " Google" }),
              ". My north star is building products at the scale of ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Google, Microsoft, OpenAI" }),
              " and ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "NVIDIA" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: interests.map(({ icon: Icon, label }, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.05 },
              className: "glass rounded-2xl p-4 hover:bg-white/10 transition-colors",
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "text-primary mb-2", size: 20 }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: label })
              ]
            },
            label
          )) })
        ] })
      }
    )
  ] }) });
}
const groups = [
  {
    title: "Programming",
    items: [
      { name: "Python", level: 92 },
      { name: "Java", level: 82 },
      { name: "C", level: 78 }
    ]
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 }
    ]
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 82 },
      { name: "Scikit-Learn", level: 88 },
      { name: "NumPy", level: 90 }
    ]
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", level: 84 },
      { name: "SQL", level: 86 }
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Skills",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Tools ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "I wield" })
        ] }),
        description: "A focused toolkit, sharpened through projects and certifications — not just tutorials."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: groups.map((g, gi) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: gi * 0.08 },
        className: "glass-strong rounded-3xl p-6 sm:p-8 gradient-border",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: g.title }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
              g.items.length,
              " skills"
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: g.items.map((s) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: s.name }),
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground tabular-nums", children: [
                s.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-2 w-full rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { width: 0 },
                whileInView: { width: `${s.level}%` },
                viewport: { once: true },
                transition: { duration: 1.1, ease: "easeOut" },
                className: "h-full rounded-full bg-gradient-primary shadow-glow"
              }
            ) })
          ] }, s.name)) })
        ]
      },
      g.title
    )) })
  ] }) });
}
const items$1 = [
  {
    title: "Bachelor of Technology — AI & Machine Learning",
    school: "Swarnaandhra College of Engineering & Technology",
    period: "2023 — 2027",
    detail: "CGPA: 8.3"
  },
  {
    title: "Intermediate Education",
    school: "Surya Junior College",
    period: "2021 — 2023",
    detail: "Mathematics, Physics, Chemistry"
  },
  {
    title: "Secondary Education",
    school: "Surya School",
    period: "Until 2021",
    detail: "Foundations in science & computing"
  }
];
function Education() {
  return /* @__PURE__ */ jsx("section", { id: "education", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Education",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Academic ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "timeline" })
        ] }),
        description: "Building strong fundamentals while shipping real projects in parallel."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent sm:-translate-x-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: items$1.map((it, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, delay: i * 0.1 },
          className: `relative grid sm:grid-cols-2 gap-4 sm:gap-12 items-center ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-2xl p-5 sm:p-6 inline-block w-full gradient-border", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary mb-2", children: it.period }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: it.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: it.school }),
              /* @__PURE__ */ jsx("p", { className: "text-sm mt-2 font-medium", children: it.detail })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "hidden sm:block" }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 grid place-items-center h-8 w-8 rounded-full bg-background border border-primary shadow-glow", children: /* @__PURE__ */ jsx(GraduationCap, { size: 14, className: "text-primary" }) })
          ]
        },
        it.title
      )) })
    ] })
  ] }) });
}
const iot = "/assets/project-iot-CeoQzr3z.jpg";
const garuda = "/assets/project-garudax-CNlA0K4e.jpg";
const transport = "/assets/project-transport.-D2tQKM-F.png";
const projects = [
  {
    title: "IoT-Driven Water Quality Monitoring",
    image: iot,
    description: "An IoT system using temperature and dissolved oxygen sensors to collect real-time water quality data, streamed wirelessly to cloud platforms and mobile applications for instant alerts.",
    role: "Team Lead",
    duration: "6 Months",
    tech: ["Arduino", "ESP32", "Python", "MQTT", "AWS IoT", "React"],
    features: [
      "Real-time monitoring",
      "Cloud integration",
      "Wireless communication",
      "Mobile alerts"
    ],
    github: "https://github.com/akshayenaganti",
    demo: "#"
  },
  {
    title: "GarudaX — AI Security Platform",
    image: garuda,
    description: "An advanced AI-powered security and monitoring platform featuring intelligent surveillance, anomaly detection, threat analysis, and automation dashboards.",
    role: "Founder & Engineer",
    duration: "Ongoing",
    tech: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "FastAPI",
      "React",
      "PostgreSQL"
    ],
    features: [
      "Smart surveillance",
      "Threat detection",
      "AI analytics",
      "Security automation"
    ],
    github: "https://github.com/akshayenaganti",
    demo: "#"
  },
  {
    title: "Advanced AI Monitoring Public Transportation System",
    image: transport,
    description: "AI-powered public transportation monitoring platform designed for government agencies. The system provides real-time vehicle tracking, passenger analytics, route monitoring, driver behavior analysis, and safety alert generation.",
    role: "AI/ML Developer",
    duration: "Completed",
    tech: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Machine Learning",
      "IoT",
      "GPS"
    ],
    features: [
      "Vehicle tracking",
      "Passenger analytics",
      "Route optimization",
      "Safety alerts"
    ],
    github: "https://github.com/akshayenaganti",
    demo: "#"
  }
];
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Featured Work",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Things ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "I've built" })
        ] }),
        description: "Hands-on engineering — from IoT systems to AI-powered platforms and intelligent monitoring solutions."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-10", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7 },
        className: `group glass-strong rounded-3xl overflow-hidden gradient-border grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-16/10 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-tr from-background/60 via-transparent to-background/40 z-10" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.image,
                alt: p.title,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 lg:p-10 flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Users, { size: 12 }),
                p.role
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Clock, { size: 12 }),
                p.duration
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl sm:text-3xl font-bold leading-tight", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: p.description }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm", children: p.features.map((feature) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-primary" }),
                  feature
                ]
              },
              feature
            )) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.tech.map((tech) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "rounded-full glass px-3 py-1 text-xs text-foreground/90",
                children: tech
              },
              tech
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition",
                  children: [
                    /* @__PURE__ */ jsx(Github, { size: 14 }),
                    "GitHub"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: p.demo,
                  className: "inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition",
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
                    "Live Demo"
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const certs = [
  {
    title: "NPTEL — Social Networks",
    issuer: "IIT / NPTEL",
    year: "2024"
  },
  {
    title: "AWS Cloud Virtual Internship",
    issuer: "Amazon Web Services",
    year: "2024"
  },
  {
    title: "Google AI & ML Virtual Internship",
    issuer: "Google for Developers",
    year: "2024"
  }
];
function Certifications() {
  return /* @__PURE__ */ jsx("section", { id: "certifications", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Certifications",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Credentials ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "earned" })
        ] }),
        description: "Programs completed with hands-on labs, capstones, and graded assessments."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: certs.map((c, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: i * 0.1, duration: 0.6 },
        className: "group glass-strong rounded-3xl p-6 gradient-border relative overflow-hidden hover:-translate-y-1 transition-transform",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow mb-4", children: /* @__PURE__ */ jsx(Award, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold leading-snug", children: c.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.issuer }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: c.year }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-primary", children: [
                /* @__PURE__ */ jsx(BadgeCheck, { size: 12 }),
                " Verified"
              ] })
            ] })
          ] })
        ]
      },
      c.title
    )) })
  ] }) });
}
const items = [
  { icon: Crown, title: "Team Lead", text: "Led the IoT water-quality project end-to-end." },
  { icon: Sparkles, title: "AI & ML Undergrad", text: "Specialized B.Tech in AI & Machine Learning." },
  { icon: Trophy, title: "3+ Internships", text: "AWS, Google AI/ML, and NPTEL credentials." },
  { icon: GraduationCap, title: "Academic Excellence", text: "Sustained CGPA of 8.3 across semesters." }
];
function Achievements() {
  return /* @__PURE__ */ jsx("section", { id: "achievements", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Achievements",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Milestones ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "so far" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: i * 0.08 },
        className: "glass rounded-2xl p-5 hover:bg-white/[0.07] transition",
        children: [
          /* @__PURE__ */ jsx(Icon, { className: "text-primary mb-3", size: 22 }),
          /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: text })
        ]
      },
      title
    )) })
  ] }) });
}
const shortTerm = [
  "Become a strong, versatile Software Engineer",
  "Master modern AI and Machine Learning systems",
  "Build impactful, real-world products"
];
const longTerm = [
  "AI Engineer at a world-class lab or product team",
  "Software Architect designing systems at scale",
  "Technology entrepreneur shipping AI-first products",
  "Innovation leader mentoring the next generation"
];
function Vision() {
  return /* @__PURE__ */ jsx("section", { id: "vision", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Career Vision",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "roadmap" })
        ] }),
        description: "Where I'm headed — near, and far."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      { icon: Target, title: "Short-Term Goals", items: shortTerm, kicker: "Next 1–2 years" },
      { icon: Rocket, title: "Long-Term Goals", items: longTerm, kicker: "5+ years" }
    ].map((col, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { delay: i * 0.15, duration: 0.6 },
        className: "glass-strong rounded-3xl p-6 sm:p-8 gradient-border relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-gradient-primary opacity-15 blur-3xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
              /* @__PURE__ */ jsx("div", { className: "grid place-items-center h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(col.icon, { size: 18 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: col.kicker })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mt-3 mb-5", children: col.title }),
            /* @__PURE__ */ jsx("ol", { className: "space-y-3", children: col.items.map((it, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 group", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-1 grid place-items-center h-6 w-6 rounded-full glass text-xs font-mono text-primary", children: String(j + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground/90 group-hover:text-foreground transition-colors", children: it })
            ] }, it)) })
          ] })
        ]
      },
      col.title
    )) })
  ] }) });
}
const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "OpenAI",
  "NVIDIA",
  "Oracle",
  "Infosys",
  "TCS",
  "Accenture",
  "IBM"
];
function Companies() {
  const row = [...companies, ...companies];
  return /* @__PURE__ */ jsxs("section", { id: "companies", className: "relative py-16 sm:py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Dream Companies",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Where I want to ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "build next" })
        ] }),
        description: "Teams whose ambition and craft I deeply admire."
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-3 sm:gap-4 animate-marquee w-max", children: row.map((name, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "glass-strong rounded-2xl px-6 sm:px-8 py-4 sm:py-6 min-w-[150px] sm:min-w-[200px] grid place-items-center gradient-border hover:bg-white/[0.08] transition",
          children: /* @__PURE__ */ jsx("span", { className: "font-display text-base sm:text-xl font-semibold tracking-tight", children: name })
        },
        i
      )) })
    ] })
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxs("div", { ref, className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold gradient-text tabular-nums", children: [
    n,
    suffix
  ] });
}
const stats = [
  { value: 8, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Certifications" },
  { value: 12, suffix: "+", label: "Technologies Learned" },
  { value: 4, suffix: "+", label: "Years of Learning" }
];
function Stats() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-12 sm:py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-6 sm:p-10 md:p-12 gradient-border relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-soft pointer-events-none", style: { background: "var(--gradient-soft)" } }),
    /* @__PURE__ */ jsx("div", { className: "relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground uppercase tracking-wider", children: s.label })
    ] }, s.label)) })
  ] }) }) });
}
const phone = "+91 9392977189";
const phoneRaw = "919392977189";
const email = "akshayenaganti@gmail.com";
function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const msg = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(msg + `

— ${name} (${data.get("email")})`);
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setSending(false);
      form.reset();
    }, 300);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative py-16 sm:py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Contact",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Let's build ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "something" })
        ] }),
        description: "Open to internships, collaborations, and ambitious AI projects."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-6 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "glass-strong rounded-3xl p-6 sm:p-8 gradient-border space-y-5",
          children: [
            /* @__PURE__ */ jsxs("a", { href: `tel:${phoneRaw}`, className: "flex items-start gap-4 group", children: [
              /* @__PURE__ */ jsx("div", { className: "grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0", children: /* @__PURE__ */ jsx(Phone, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Phone" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium group-hover:text-primary transition-colors", children: phone })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("a", { href: `mailto:${email}`, className: "flex items-start gap-4 group", children: [
              /* @__PURE__ */ jsx("div", { className: "grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Email" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium break-all group-hover:text-primary transition-colors", children: email })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0", children: /* @__PURE__ */ jsx(MapPin, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Location" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Andhra Pradesh, India" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-white/10 grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://linkedin.com/in/akshay-enaganti",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition",
                  children: [
                    /* @__PURE__ */ jsx(Linkedin, { size: 14 }),
                    " LinkedIn"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://github.com/akshayenaganti",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition",
                  children: [
                    /* @__PURE__ */ jsx(Github, { size: 14 }),
                    " GitHub"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `mailto:${email}`,
                  className: "inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition",
                  children: [
                    /* @__PURE__ */ jsx(Mail, { size: 14 }),
                    " Email"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://wa.me/${phoneRaw}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium hover:bg-white/10 transition",
                  children: [
                    /* @__PURE__ */ jsx(MessageCircle, { size: 14 }),
                    " WhatsApp"
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          onSubmit,
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "glass-strong rounded-3xl p-6 sm:p-8 gradient-border space-y-4",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Your name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    name: "name",
                    required: true,
                    className: "mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition",
                    placeholder: "Ada Lovelace"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "block", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Email" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    name: "email",
                    type: "email",
                    required: true,
                    className: "mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition",
                    placeholder: "you@company.com"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Message" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "message",
                  required: true,
                  rows: 6,
                  className: "mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none",
                  placeholder: "Tell me about the role, project, or opportunity…"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                disabled: sending,
                className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition disabled:opacity-50",
                children: [
                  /* @__PURE__ */ jsx(Send, { size: 14 }),
                  " ",
                  sending ? "Sending…" : "Send Message"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-white/10 py-10 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary text-primary-foreground font-display font-bold", children: "A" }),
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Enaganti Akshay Shankar Naidu — Built with care."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/akshay-enaganti", target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg hover:bg-white/5 hover:text-foreground", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { size: 16 }) }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/akshayenaganti", target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg hover:bg-white/5 hover:text-foreground", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(Github, { size: 16 }) }),
      /* @__PURE__ */ jsx("a", { href: "mailto:akshayenaganti@gmail.com", className: "p-2 rounded-lg hover:bg-white/5 hover:text-foreground", "aria-label": "Email", children: /* @__PURE__ */ jsx(Mail, { size: 16 }) }),
      /* @__PURE__ */ jsx("a", { href: "https://wa.me/919392977189", target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg hover:bg-white/5 hover:text-foreground", "aria-label": "WhatsApp", children: /* @__PURE__ */ jsx(MessageCircle, { size: 16 }) })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsx(ParticleBackground, {}),
    /* @__PURE__ */ jsx(MouseGlow, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Education, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Certifications, {}),
      /* @__PURE__ */ jsx(Achievements, {}),
      /* @__PURE__ */ jsx(Vision, {}),
      /* @__PURE__ */ jsx(Companies, {}),
      /* @__PURE__ */ jsx(Stats, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "bottom-right" })
  ] });
}
export {
  Index as component
};
