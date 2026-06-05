import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav
          className={`relative flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 overflow-hidden ${
            scrolled
              ? "glass-strong shadow-glow"
              : "glass border border-white/10"
          }`}
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-primary opacity-[0.03] pointer-events-none" />

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group relative z-10">
            <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-primary text-primary-foreground font-bold shadow-glow animate-pulse-glow">
              A
            </div>

            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold tracking-tight">
                Akshay
                <span className="gradient-text">.AI</span>
              </div>

              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                AI Engineer
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2 relative z-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-all duration-300 relative z-10"
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-10 p-2 rounded-lg hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl hover:bg-white/5 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex justify-center rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}