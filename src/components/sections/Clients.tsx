"use client";

import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientStories } from "@/data/site";
import { cn } from "@/lib/utils";

export function Clients() {
  const [index, setIndex] = useState(0);
  const total = clientStories.length;

  const go = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="clients" className="py-[100px]">
      <Container>
        <SectionHeading
          tag="Client Success Stories"
          title="Outcomes we've delivered"
          subtitle="Real engagements with government departments, agencies and private enterprise."
        />

        <div className="mx-auto max-w-[860px]">
          <div className="overflow-hidden rounded-xl2">
            <div
              className="flex transition-transform duration-[600ms] ease-smooth"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {clientStories.map((c) => (
                <div key={c.name} className="min-w-full border border-line p-10" style={{ background: "var(--glass)" }}>
                  <span
                    className="mb-4 inline-block rounded-full border border-line px-3 py-[5px] text-xs font-bold text-azure"
                    style={{ background: "var(--glass-2)" }}
                  >
                    {c.industry}
                  </span>
                  <h3 className="mb-3.5 text-[1.5rem]">{c.name}</h3>
                  <div className="mt-2 grid gap-5 sm:grid-cols-2">
                    <div>
                      <h5 className="mb-1.5 text-xs uppercase tracking-wide text-faint">Services Delivered</h5>
                      <p className="text-[0.95rem] text-muted">{c.services}</p>
                    </div>
                    <div>
                      <h5 className="mb-1.5 text-xs uppercase tracking-wide text-faint">Business Outcome</h5>
                      <p className="text-[0.95rem] text-muted">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2.5">
            {clientStories.map((c, i) => (
              <button
                key={c.name}
                aria-label={`Go to ${c.name}`}
                onClick={() => go(i)}
                className={cn(
                  "h-[9px] rounded-full transition-all duration-300",
                  i === index ? "w-[26px] bg-azure" : "w-[9px] bg-line-strong"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
