"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientStories, clientLogos } from "@/data/site";
import { cn } from "@/lib/utils";

export function Clients() {
  const [index, setIndex] = useState(0);
  const total = clientStories.length;

  const go = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
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

        <div className="mx-auto max-w-[880px]">
          <div className="overflow-hidden rounded-xl2">
            <div
              className="flex transition-transform duration-[600ms] ease-smooth"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {clientStories.map((c) => (
                <div key={c.name} className="min-w-full border border-line p-8 md:p-10" style={{ background: "var(--glass)" }}>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="flex h-24 w-full max-w-[220px] flex-shrink-0 items-center justify-center rounded-2xl border border-line bg-white p-4">
                      <Image
                        src={c.logo}
                        alt={`${c.name} logo`}
                        width={220}
                        height={92}
                        className="h-auto max-h-[64px] w-auto max-w-[170px] object-contain"
                      />
                    </div>
                    <div>
                      <span
                        className="mb-2 inline-block rounded-full border border-line px-3 py-[5px] text-xs font-bold text-azure"
                        style={{ background: "var(--glass-2)" }}
                      >
                        {c.industry}
                      </span>
                      <h3 className="text-[1.5rem] leading-tight">{c.name}</h3>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
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

        {/* Trusted-by wall — every client logo */}
        <div className="mt-16">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-faint">
            Trusted by leading organisations
          </p>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {clientLogos.map((c) => (
              <div
                key={c.name}
                title={c.name}
                className="flex h-[74px] items-center justify-center rounded-xl border border-line bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={180}
                  height={76}
                  className="h-auto max-h-[48px] w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
