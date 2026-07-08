import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="border-y border-line py-[70px]" style={{ background: "linear-gradient(180deg,transparent,var(--bg-2))" }}>
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="block bg-accent bg-clip-text font-display text-[clamp(2rem,3.5vw,2.9rem)] font-extrabold text-transparent"
                />
                <span className="text-[13.5px] font-medium text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
