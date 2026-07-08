import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/site";

export function Industries() {
  return (
    <section id="industries" className="py-[100px]">
      <Container>
        <SectionHeading
          tag="Industries We Serve"
          title="Deep experience across the sectors that matter"
          subtitle="Trusted by public sector and private enterprise alike."
        />
        <Reveal>
          <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div key={ind} className="glass-panel flex items-center gap-2.5 px-[18px] py-3 text-[0.95rem] font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-azure hover:text-azure">
                <CheckCircle2 size={18} className="text-azure" />
                {ind}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
