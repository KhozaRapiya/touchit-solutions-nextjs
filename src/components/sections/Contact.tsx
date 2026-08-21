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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 8000);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
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
                  <input name="name" required placeholder="Your name" className="field-input" />
                </Field>
                <Field label="Company">
                  <input name="company" placeholder="Organisation" className="field-input" />
                </Field>
              </div>
              <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2">
                <Field label="Email">
                  <input name="email" type="email" required placeholder="you@company.co.za" className="field-input" />
                </Field>
                <Field label="Phone">
                  <input name="phone" type="tel" placeholder="+27..." className="field-input" />
                </Field>
              </div>
              <div className="mt-3.5">
                <Field label="Service of interest">
                  <select name="service" className="field-input">
                    {serviceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-3.5">
                <Field label="How can we help?">
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project or requirement..."
                    className="field-input min-h-[110px] resize-y"
                  />
                </Field>
              </div>

              {/* Honeypot — hidden from users, catches bots */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-2 w-full disabled:opacity-70">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" ? (
                <div
                  role="status"
                  className="mt-3.5 rounded-[11px] border px-4 py-3 text-[0.9rem] font-medium text-success"
                  style={{ background: "rgba(16,185,129,.12)", borderColor: "rgba(16,185,129,.4)" }}
                >
                  Thanks — your enquiry has been sent. A TouchIT consultant will be in touch shortly.
                </div>
              ) : null}

              {status === "error" ? (
                <div
                  role="alert"
                  className="mt-3.5 rounded-[11px] border px-4 py-3 text-[0.9rem] font-medium"
                  style={{ background: "rgba(239,68,68,.12)", borderColor: "rgba(239,68,68,.4)", color: "#ef4444" }}
                >
                  {errorMsg}{" "}
                  <a href={`mailto:${siteConfig.email}`} className="underline">
                    Email us directly
                  </a>
                  .
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
