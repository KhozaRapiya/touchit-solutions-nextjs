"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

const serviceOptions = [
  "Cloud Solutions",
  "Cybersecurity",
  "Microsoft 365 & Dynamics GP",
  "Software Development",
  "Network Infrastructure",
  "Managed IT Support",
  "Other",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`;
  const info: { icon: typeof Phone; title: string; value: string; href?: string; external?: boolean }[] = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: `${siteConfig.phone} · WhatsApp`,
      href: `tel:${siteConfig.phoneIntl}`,
    },
    { icon: Mail, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, title: "Office", value: siteConfig.location, href: mapsHref, external: true },
    { icon: Clock, title: "Business Hours", value: siteConfig.hours },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to an API route / CRM / email service.
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="py-[100px]">
      <Container>
        <SectionHeading
          tag="Get In Touch"
          title="Let's talk about your next project"
          subtitle="Speak to an ICT consultant, request a quote, or arrange technical support."
        />

        <Reveal>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              {info.map((item) => (
                <div key={item.title} className="glass-panel mb-3.5 flex items-start gap-4 p-[22px] transition hover:border-azure">
                  <div className="grid h-[46px] w-[46px] flex-shrink-0 place-items-center rounded-[12px] text-royal dark:text-azure"
                    style={{ background: "linear-gradient(135deg,rgba(0,82,204,.14),rgba(0,174,239,.14))" }}>
                    <item.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-[1rem]">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[0.9rem] text-muted transition hover:text-azure hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[0.9rem] text-muted">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={onSubmit} className="glass-panel p-[30px]">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field label="Full name">
                  <input required placeholder="Your name" className="field-input" />
                </Field>
                <Field label="Company">
                  <input placeholder="Organisation" className="field-input" />
                </Field>
              </div>
              <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                <Field label="Email">
                  <input type="email" required placeholder="you@company.co.za" className="field-input" />
                </Field>
                <Field label="Phone">
                  <input type="tel" placeholder="+27..." className="field-input" />
                </Field>
              </div>
              <div className="mt-3.5">
                <Field label="Service of interest">
                  <select className="field-input">
                    {serviceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-3.5">
                <Field label="How can we help?">
                  <textarea placeholder="Tell us about your project or requirement..." className="field-input min-h-[110px] resize-y" />
                </Field>
              </div>

              <button type="submit" className="btn btn-primary mt-2 w-full">
                Send Message
              </button>

              {sent ? (
                <div className="mt-3.5 rounded-[11px] border px-4 py-3 text-[0.9rem] font-medium text-success"
                  style={{ background: "rgba(16,185,129,.12)", borderColor: "rgba(16,185,129,.4)" }}>
                  Thanks — your enquiry has been captured. A TouchIT consultant will be in touch shortly.
                </div>
              ) : null}
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-muted">{label}</span>
      {children}
    </label>
  );
}
