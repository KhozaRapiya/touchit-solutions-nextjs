import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CircuitMesh } from "@/components/ui/CircuitMesh";

export function CtaBanner() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink p-10 text-center text-white md:p-[60px]">
            <CircuitMesh className="absolute inset-0 z-0 h-full w-full opacity-50" count={34} dist={120} dot={1.8} />
            <div className="relative z-[2]">
              <h2 className="mb-3.5 text-[clamp(1.8rem,3.4vw,2.7rem)]">Ready to accelerate your digital transformation?</h2>
              <p className="mx-auto mb-[30px] max-w-[560px] text-white/75">
                Book a free consultation with a TouchIT ICT consultant and get a tailored roadmap for your organisation.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <a href="#contact" className="btn btn-primary">Book a Technology Assessment</a>
                <a href="#contact" className="btn btn-ghost border-white/30 bg-white/10 text-white">Download Company Profile</a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
