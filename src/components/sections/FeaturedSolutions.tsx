import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredSolutions } from "@/data/site";

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
          {featuredSolutions.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <article className="group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-xl2 border border-line p-7 text-white transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:shadow-glow">
                <div className="absolute inset-0 z-0 transition-transform duration-500 ease-smooth group-hover:scale-105" style={{ background: f.gradient }} />
                <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg,rgba(11,18,32,.15),rgba(11,18,32,.82))" }} />
                <h3 className="relative z-[2] mb-1.5 text-[1.35rem]">{f.title}</h3>
                <p className="relative z-[2] text-[0.92rem] opacity-90">{f.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
