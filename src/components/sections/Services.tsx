import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="py-[100px]">
      <Container>
        <SectionHeading
          tag="What We Do"
          title="End-to-end ICT solutions, engineered for growth"
          subtitle="From cloud and cybersecurity to enterprise software and infrastructure, we design, deploy and support the technology that keeps South African organisations moving forward."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <article className="glass-card h-full">
                <div className="mb-[18px] grid h-[52px] w-[52px] place-items-center rounded-[14px] text-royal dark:text-azure"
                  style={{ background: "linear-gradient(135deg,rgba(0,82,204,.14),rgba(0,174,239,.14))" }}>
                  <s.icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2.5 text-[1.24rem] font-bold">{s.title}</h3>
                <p className="mb-4 text-[0.95rem] text-muted">{s.description}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-lg border border-line px-2.5 py-[5px] text-[11.5px] font-semibold text-faint"
                      style={{ background: "var(--glass-2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
