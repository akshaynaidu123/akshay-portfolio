# AI Engineer Portfolio — Akshay Shankar Naidu

A single-page, dark-mode portfolio with a futuristic AI aesthetic: glassmorphism cards, animated particle background, mouse-follow glow, gradient accents (navy/black base, cyan/blue/purple highlights), and Framer Motion scroll reveals.

## Structure

One scrolling landing route at `/` with anchored sections, plus a sticky glass navbar for jump links. Each section is its own component for clean reuse.

```text
src/
  routes/
    __root.tsx          (dark theme, fonts, meta, particle canvas mount)
    index.tsx           (composes all sections)
  components/
    Navbar.tsx
    ParticleBackground.tsx
    MouseGlow.tsx
    TypingHero.tsx
    SectionHeading.tsx
    GlassCard.tsx
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Education.tsx
      Projects.tsx
      Certifications.tsx
      Achievements.tsx
      Vision.tsx
      Companies.tsx
      Stats.tsx
      Contact.tsx
      Footer.tsx
  assets/
    profile.jpg          (generated)
    project-iot.jpg      (generated)
    project-garudax.jpg  (generated)
```

## Design System (src/styles.css)

- Base: `#05060f` background, near-black surfaces with subtle blue tint
- Accents: cyan `#22d3ee`, blue `#3b82f6`, purple `#a855f7`
- Gradient tokens: `--gradient-primary` (cyan→blue→purple), `--gradient-glow`
- Glass tokens: `--glass-bg` (white 4% alpha), `--glass-border` (white 8%), `--shadow-glow`
- Fonts: Space Grotesk (headings) + Inter (body) via Google Fonts
- Tailwind utilities for `glass`, `gradient-text`, `glow-border`, `hover-scale`

Dark mode is forced (`.dark` class on `<html>`). No light theme toggle.

## Sections

1. **Hero** — Full-viewport, particle canvas behind, profile avatar (generated), name in large gradient text, typing animation cycling through 4 roles (custom hook, no external lib), 3 CTA buttons (primary gradient, ghost glass), animated scroll indicator.
2. **About** — Two-column glass card: portrait left, intro paragraph + interest pills right.
3. **Skills** — Grouped grid (Programming / Web / AI&ML / Database). Each skill is a glass card with Lucide icon, name, animated progress bar (Framer Motion `whileInView`) and % indicator.
4. **Education** — Vertical timeline with glowing dots and glass cards alternating sides on desktop, stacked on mobile.
5. **Projects** — Two large feature cards (image, title, description, role/duration meta, tech badges, GitHub + Live Demo buttons, hover lift + glow). Project images generated via imagegen.
6. **Certifications** — 3 badge cards with award icon, issuer, and shimmer hover.
7. **Achievements** — 4 stat-style glass tiles with icons.
8. **Career Vision** — Two-column roadmap: Short-Term vs Long-Term with connected node visual.
9. **Dream Companies** — Marquee/auto-scrolling row of 10 company name cards with gradient borders and hover glow (text-based, no logos to avoid trademark assets).
10. **Stats** — 4 animated counters (count-up on scroll into view).
11. **Contact** — Two-column: contact info + working contact form (client-side; submit shows success toast via sonner — no backend). Action buttons: LinkedIn, GitHub, Email (mailto), WhatsApp (wa.me link).
12. **Footer** — Branding line, social icons, copyright.

## Global Effects

- `ParticleBackground`: lightweight canvas with ~80 floating dots + connecting lines, throttled
- `MouseGlow`: fixed radial gradient that follows cursor (pointer-events-none)
- Framer Motion scroll reveals on every section (`whileInView`, once)
- Smooth scroll via CSS `scroll-behavior` and Navbar anchor links
- Loading screen: brief gradient splash on first mount

## Resume

"Download Resume" links to `/resume.pdf` in `public/` — file placeholder noted; user can drop their PDF there.

## Tech Notes

- Framer Motion (`motion`) for animations
- `lucide-react` for icons (already available)
- No new heavy deps beyond `motion`
- SEO: per-route `head()` with title, description, og tags, JSON-LD Person schema
- Fully responsive (mobile-first, tablet, desktop breakpoints)
- Accessibility: semantic landmarks, alt text, focus rings, reduced-motion respect

## Out of Scope

- No backend, no auth, no DB (Lovable Cloud not needed)
- Contact form is client-only; wiring to email requires a follow-up
- Company logos use styled text (avoids trademark/asset issues)
