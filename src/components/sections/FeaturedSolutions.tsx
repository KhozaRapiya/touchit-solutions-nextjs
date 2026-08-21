import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredSolutions } from "@/data/site";
import { featuredArt } from "./featured-art";

// Map each solution title to its illustration key.
const artKey: Record<string, string> = {
  "Cloud Infrastructure": "cloud",
  Cybersecurity: "security",
  "Digital Workplace": "workplace",
  "AI & Automation": "ai",
  "Business Intelligence": "bi",
  "Backup & Disaster Recovery": "backup",
};

export function FeaturedSolutions() {
  return (
    <section id="solutions" className="border-y border-line bg-bg2 py-[100px]">
      <Container>
        <SectionHeading
          tag="Featured Solutions"
          title="Flagship capabilities our clients rely on"
          subtitle="Purpose-built solutions that combine strategy, engineering and managed support."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.map((f, i) => {
            const art = featuredArt[artKey[f.title]];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.05}>
                <article className="glass-card group h-full overflow-hidden !p-0">
                  <div
                    className="relative flex h-[190px] items-center justify-center overflow-hidden"
                    style={{ background: "radial-gradient(120% 120% at 50% 0%, #12294d 0%, #0b1220 70%)" }}
                  >
                    <div
                      className="h-[168px] w-[230px] transition-transform duration-500 ease-smooth group-hover:-translate-y-1 group-hover:scale-[1.04]"
                      dangerouslySetInnerHTML={{ __html: art ?? "" }}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-60"
                      style={{ background: "radial-gradient(80% 60% at 50% 15%, rgba(0,174,239,.16), transparent 70%)" }}
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="mb-1.5 text-[1.3rem] font-bold">{f.title}</h3>
                    <p className="text-[0.95rem] text-muted">{f.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
