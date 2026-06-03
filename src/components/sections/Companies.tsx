import { SectionHeading } from "@/components/SectionHeading";

const companies = [
  "Google", "Microsoft", "Amazon", "OpenAI", "NVIDIA",
  "Oracle", "Infosys", "TCS", "Accenture", "IBM",
];

export function Companies() {
  const row = [...companies, ...companies];
  return (
    <section id="companies" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dream Companies"
          title={<>Where I want to <span className="gradient-text">build next</span></>}
          description="Teams whose ambition and craft I deeply admire."
        />
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-3 sm:gap-4 animate-marquee w-max">
          {row.map((name, i) => (
            <div
              key={i}
              className="glass-strong rounded-2xl px-6 sm:px-8 py-4 sm:py-6 min-w-[150px] sm:min-w-[200px] grid place-items-center gradient-border hover:bg-white/[0.08] transition"
            >
              <span className="font-display text-base sm:text-xl font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
