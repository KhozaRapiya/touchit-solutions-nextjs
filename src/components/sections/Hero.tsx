import Image from "next/image";
import { ArrowRight, Cloud, Shield, LayoutGrid, Cpu, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CircuitMesh } from "@/components/ui/CircuitMesh";

const chips = [
  { icon: Cloud, label: "Cloud", pos: "left-[-4%] top-[6%]", delay: "0s" },
  { icon: Shield, label: "Cybersecurity", pos: "right-[-8%] top-[26%]", delay: "1s" },
  { icon: LayoutGrid, label: "Microsoft 365", pos: "left-[-8%] bottom-[20%]", delay: ".5s" },
  { icon: Cpu, label: "IoT", pos: "right-[2%] bottom-[2%]", delay: "1.6s" },
  { icon: Sparkles, label: "AI", pos: "left-[34%] top-[48%]", delay: "2.1s" },
];

export function Hero() {
  return (
    <section id="top" className="hero-glow relative flex min-h-screen items-center overflow-hidden pb-20 pt-[130px]">
      <CircuitMesh className="absolute inset-0 z-0 h-full w-full" />

      <Container className="relative z-[3]">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center md:text-left">
            <span className="eyebrow">
              <span className="h-2 w-2 animate-pulse-ring rounded-full bg-success" />
              South African ICT Solutions Provider
            </span>
            <h1 className="my-5 text-[clamp(2.5rem,5.4vw,4.15rem)]">
              Empowering Digital Transformation Through <span className="grad-text">Innovative ICT</span> Solutions
            </h1>
            <p className="mx-auto max-w-[600px] text-[clamp(1.02rem,1.5vw,1.22rem)] text-muted md:mx-0">
              TouchIT Solutions delivers secure, scalable and future-ready technology that helps organisations modernise
              operations, lift productivity and accelerate growth.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3.5 md:justify-start">
              <a href="#contact" className="btn btn-primary">
                Request a Consultation
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn btn-ghost">
                Explore Our Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 md:justify-start">
              {[
                ["12+", "Years' Experience"],
                ["500+", "Projects Delivered"],
                ["24/7", "Support"],
              ].map(([num, label]) => (
                <div key={label} className="text-[13px] text-faint">
                  <b className="block font-display text-[26px] font-extrabold tracking-tight text-content">{num}</b>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[440px] md:block">
            <div className="orb animate-spin-slow" />
            <div className="orb orb--two animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "12s" }} />
            <div className="glass-panel absolute inset-0 m-auto grid h-[150px] w-[150px] place-items-center rounded-full border-line-strong shadow-glow">
              <Image src="/logo.jpeg" alt="TouchIT" width={104} height={104} className="rounded-full" />
            </div>
            {chips.map((c) => (
              <div key={c.label} className={`chip animate-float absolute ${c.pos}`} style={{ animationDelay: c.delay }}>
                <c.icon size={15} className="text-azure" />
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
