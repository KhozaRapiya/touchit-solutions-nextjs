import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-line bg-bg2 py-[100px]">
      <Container>
        <SectionHeading tag="Testimonials" title="What our clients say" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={(i % 3) * 0.06}>
              <figure className="glass-card h-full">
                <div className="mb-3.5 flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mb-[18px] text-[1rem] italic text-content">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <b className="block text-[0.92rem]">{t.author}</b>
                    <span className="text-[0.8rem] text-faint">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
