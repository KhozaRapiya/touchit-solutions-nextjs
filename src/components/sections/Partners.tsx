import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners } from "@/data/site";

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div
        className="marquee-track flex w-max animate-marquee gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((p, i) => (
          <div
            key={p + i}
            className="glass-panel flex h-20 min-w-[170px] items-center justify-center font-display text-[1.05rem] font-bold tracking-tight text-muted transition duration-300 hover:scale-105 hover:border-azure hover:text-royal dark:hover:text-azure"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  const half = Math.ceil(partners.length / 2);
  return (
    <section id="partners" className="border-y border-line bg-bg2 py-[100px]">
      <Container>
        <SectionHeading
          tag="Technology Partners"
          title="Backed by the world's leading vendors"
          subtitle="Accredited partnerships that give our clients the best of enterprise technology."
        />
      </Container>
      <div className="flex flex-col gap-4">
        <Row items={partners.slice(0, half)} />
        <Row items={partners.slice(half)} reverse />
      </div>
    </section>
  );
}
