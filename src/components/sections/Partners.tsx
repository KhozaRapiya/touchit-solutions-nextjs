import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners, type Partner } from "@/data/site";

function Row({ items, reverse = false }: { items: Partner[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div
        className="marquee-track flex w-max animate-marquee gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((p, i) => (
          <div
            key={p.name + i}
            className="flex h-24 min-w-[190px] items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            title={p.name}
          >
            <Image
              src={p.logo}
              alt={`${p.name} partner logo`}
              width={220}
              height={92}
              className="h-auto max-h-[56px] w-auto max-w-[150px] object-contain"
            />
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
