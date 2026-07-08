import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-bg2 py-[100px]">
      <Container>
        <SectionHeading
          tag="Digital Transformation"
          title="How we take you from legacy to leading"
          subtitle="A proven, low-risk path that meets you where you are and scales as you grow."
        />
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={(i % 6) * 0.04}>
              <div className="glass-panel h-full p-[22px_18px] transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-azure">
                <div className="mb-3.5 grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-accent font-display text-[1.1rem] font-extrabold text-white">
                  {p.step}
                </div>
                <h4 className="mb-1.5 text-[1rem]">{p.title}</h4>
                <p className="text-[0.82rem] text-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
