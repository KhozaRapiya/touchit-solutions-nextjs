import Image from "next/image";
import { Linkedin, Twitter, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Cloud Solutions", href: "/#services" },
      { label: "Cybersecurity", href: "/#services" },
      { label: "Microsoft 365", href: "/#services" },
      { label: "Dynamics GP", href: "/#services" },
      { label: "Software Dev", href: "/#services" },
      { label: "Networking", href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#why" },
      { label: "Partners", href: "/#partners" },
      { label: "Clients", href: "/#clients" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/blog" },
      { label: "White Papers", href: "#" },
      { label: "Guides", href: "/blog" },
      { label: "Brochures", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Insights", href: "/blog" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Desk", href: "/#contact" },
      { label: "Log a Ticket", href: "/#contact" },
      { label: "Client Portal", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-[70px] text-slate-300">
      <Container>
        <div className="mb-11 grid grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3 font-display text-[19px] font-extrabold text-white">
              <Image src="/logo.jpeg" alt="TouchIT" width={40} height={40} className="rounded-full" />
              <span>
                Touch<span className="text-azure">IT</span> Solutions
              </span>
            </div>
            <p className="mb-5 max-w-[290px] text-sm text-slate-400">{siteConfig.description}</p>
            <ul className="mb-5 flex flex-col gap-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-azure" />
                <span>
                  <a href={`tel:${siteConfig.phoneIntl}`} className="text-slate-300 transition hover:text-azure">
                    {siteConfig.phone}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition hover:text-azure"
                  >
                    WhatsApp
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-azure" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-300 transition hover:text-azure">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-azure" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition hover:text-azure"
                >
                  {siteConfig.location}
                </a>
              </li>
            </ul>
            <div className="flex gap-2.5">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-white/5 text-slate-300 transition hover:bg-azure hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h5 className="mb-4 font-display text-[13px] uppercase tracking-wider text-white">{col.heading}</h5>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="mb-2.5 block text-sm text-slate-400 transition hover:text-azure">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13px] text-slate-500">
          <span>© {new Date().getFullYear()} TouchIT Solutions. All rights reserved.</span>
          <span>{siteConfig.tagline}</span>
        </div>
      </Container>
    </footer>
  );
}
