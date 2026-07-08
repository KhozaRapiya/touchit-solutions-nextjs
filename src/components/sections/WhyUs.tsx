import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/data/site";

export function WhyUs() {
  return (
    <section id="why" className="py-[100px]">
      <Container>
        <SectionHeading
          tag="Why TouchIT"
          title="A technology partner you can build on"
          subtitle="Certified expertise, enterprise-grade delivery and a customer-first approach — every engagement."
        />
        <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 5) * 0.04}>
              <div className="glass-panel h-full p-[22px] text-center transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-azure">
                <div className="mx-auto mb-3 grid h-[46px] w-[46px] place-items-center rounded-[12px] bg-accent text-white">
                  <r.icon size={22} strokeWidth={1.8} />
                </div>
                <h4 className="mb-1.5 text-[0.98rem] font-bold">{r.title}</h4>
                <span className="text-[0.8rem] text-muted">Enterprise-grade delivery</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
