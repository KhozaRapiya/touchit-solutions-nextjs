import {
  ShieldCheck,
  BadgeCheck,
  Headset,
  Scaling,
  Sparkles,
  Handshake,
  Building2,
  HeartHandshake,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "TouchIT Solutions",
  tagline: "Innovating Today. Transforming Tomorrow.",
  description:
    "A trusted South African ICT partner delivering secure, scalable and future-ready technology for government, corporate, education and SME clients.",
  phone: "076 793 0437",
  phoneIntl: "+27767930437",
  email: "info@touchitsolutions.co.za",
  whatsapp: "27767930437",
  location: "424 Long Avenue, Ferndale, Johannesburg, 2194",
  mapsQuery: "424 Long Avenue, Ferndale, Johannesburg, 2194",
  hours: "Mon–Fri 08:00–17:00 · 24/7 Emergency Support",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Partners", href: "/#partners" },
  { label: "Clients", href: "/#clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 320, suffix: "+", label: "Satisfied Clients" },
  { value: 40, suffix: "+", label: "Certified Engineers" },
  { value: 18, suffix: "+", label: "Technology Partners" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

export interface FeaturedSolution {
  title: string;
  description: string;
  gradient: string;
}

export const featuredSolutions: FeaturedSolution[] = [
  { title: "Cloud Infrastructure", description: "Resilient, scalable cloud built on Azure.", gradient: "linear-gradient(135deg,#0052CC,#00AEEF)" },
  { title: "Cybersecurity", description: "Layered defence and 24/7 threat detection.", gradient: "linear-gradient(135deg,#0B1220,#0052CC)" },
  { title: "Digital Workplace", description: "Microsoft 365 that keeps teams productive anywhere.", gradient: "linear-gradient(135deg,#00AEEF,#0EA5E9)" },
  { title: "AI & Automation", description: "Automate workflows and unlock intelligent insight.", gradient: "linear-gradient(135deg,#0052CC,#0B1220)" },
  { title: "Business Intelligence", description: "Turn data into decisions with Power BI.", gradient: "linear-gradient(135deg,#0EA5E9,#0052CC)" },
  { title: "Backup & Disaster Recovery", description: "Protect data with tested recovery plans.", gradient: "linear-gradient(135deg,#00AEEF,#0B1220)" },
];

export interface Reason {
  icon: LucideIcon;
  title: string;
}

export const reasons: Reason[] = [
  { icon: ShieldCheck, title: "Security First" },
  { icon: BadgeCheck, title: "Certified Professionals" },
  { icon: Headset, title: "Reliable 24/7 Support" },
  { icon: Scaling, title: "Scalable Solutions" },
  { icon: Sparkles, title: "Innovation Focus" },
  { icon: Handshake, title: "Trusted Partners" },
  { icon: Building2, title: "Enterprise Delivery" },
  { icon: HeartHandshake, title: "Customer-Centric" },
  { icon: Wallet, title: "Competitive Pricing" },
  { icon: Zap, title: "Fast Response" },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Assessment", description: "Audit systems, security posture and readiness." },
  { step: 2, title: "Planning", description: "Define roadmap, architecture and outcomes." },
  { step: 3, title: "Implementation", description: "Deploy solutions with minimal disruption." },
  { step: 4, title: "Migration", description: "Move data and workloads safely to the cloud." },
  { step: 5, title: "Support", description: "Managed services and 24/7 help desk." },
  { step: 6, title: "Improve", description: "Optimise continuously as needs evolve." },
];

export const industries: string[] = [
  "Government",
  "Healthcare",
  "Education",
  "Construction",
  "Financial Services",
  "Manufacturing",
  "Engineering",
  "Legal",
  "Retail",
  "SMEs",
  "Non-Profit",
  "Professional Services",
];

export interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Microsoft", logo: "/partners/microsoft.png" },
  { name: "Microsoft Cloud Solution Provider", logo: "/partners/microsoft-csp.png" },
  { name: "HP", logo: "/partners/hp.png" },
  { name: "Dell Technologies", logo: "/partners/dell.png" },
  { name: "Lenovo", logo: "/partners/lenovo.png" },
  { name: "Acer", logo: "/partners/acer.png" },
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "Adobe", logo: "/partners/adobe.png" },
  { name: "Sage", logo: "/partners/sage.png" },
  { name: "Veeam", logo: "/partners/veeam.png" },
  { name: "Kaspersky", logo: "/partners/kaspersky.png" },
  { name: "Fortinet", logo: "/partners/fortinet.png" },
];

export interface ClientStory {
  name: string;
  industry: string;
  services: string;
  outcome: string;
  logo: string;
}

export const clientStories: ClientStory[] = [
  {
    name: "Eastern Cape Office of the Premier",
    industry: "Government",
    services: "ICT infrastructure, Microsoft 365 rollout, managed support",
    outcome: "Modernised the digital workplace and improved cross-department collaboration and security posture.",
    logo: "/clients/ec-premier.png",
  },
  {
    name: "Office of the Chief Justice",
    industry: "Government / Justice",
    services: "Network infrastructure, endpoint security, help desk",
    outcome: "Hardened endpoint protection and delivered responsive support across office locations.",
    logo: "/clients/chief-justice.png",
  },
  {
    name: "Department of Water & Sanitation",
    industry: "Public Sector",
    services: "Cloud migration, backup & disaster recovery",
    outcome: "Migrated key workloads to the cloud with tested recovery, reducing downtime risk.",
    logo: "/clients/water-sanitation.png",
  },
  {
    name: "SASSETA",
    industry: "Education / SETA",
    services: "Microsoft Dynamics GP, reporting, training",
    outcome: "Streamlined finance operations and equipped staff through targeted GP training.",
    logo: "/clients/sasseta.png",
  },
  {
    name: "Konstruct SGN",
    industry: "Construction",
    services: "Hardware supply, networking, technical support",
    outcome: "Deployed reliable site connectivity and equipment with proactive maintenance.",
    logo: "/clients/konstruct.png",
  },
  {
    name: "Eastern Cape Department of Health",
    industry: "Healthcare",
    services: "Infrastructure, cybersecurity, managed IT",
    outcome: "Strengthened security and stabilised infrastructure for critical services.",
    logo: "/clients/ec-health.png",
  },
  {
    name: "Uluyolo Consultants",
    industry: "Professional Services",
    services: "Digital workplace, cloud, hosting",
    outcome: "Enabled a mobile, cloud-first way of working with secure hosting.",
    logo: "/clients/uluyolo.png",
  },
];

/** Full roster of client logos for the "trusted by" wall. */
export const clientLogos: { name: string; logo: string }[] = [
  { name: "Eastern Cape Office of the Premier", logo: "/clients/ec-premier.png" },
  { name: "Eastern Cape Department of Health", logo: "/clients/ec-health.png" },
  { name: "Office of the Chief Justice", logo: "/clients/chief-justice.png" },
  { name: "Department of Water & Sanitation", logo: "/clients/water-sanitation.png" },
  { name: "SASSETA", logo: "/clients/sasseta.png" },
  { name: "Walter Sisulu University", logo: "/clients/wsu.png" },
  { name: "King Sabata Dalindyebo Municipality", logo: "/clients/ksd.png" },
  { name: "OR Tambo District Municipality", logo: "/clients/or-tambo.png" },
  { name: "Moses Kotane Research Institute", logo: "/clients/moses-kotane.png" },
  { name: "Konstruct SGN", logo: "/clients/konstruct.png" },
  { name: "Uluyolo Consultants", logo: "/clients/uluyolo.png" },
  { name: "Isibenya Property Developers", logo: "/clients/isibenya.png" },
  { name: "Anathi Xhobani", logo: "/clients/anathi.png" },
  { name: "Bayathetha Holdings", logo: "/clients/bayathetha.png" },
  { name: "NFH", logo: "/clients/nfh.png" },
  { name: "NPG", logo: "/clients/npg.png" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "TouchIT delivered our cloud migration on time and kept our teams productive throughout. A dependable partner.",
    author: "Project Lead",
    role: "Government Department",
  },
  {
    quote: "Their security assessment gave us clear priorities and their support team is genuinely responsive.",
    author: "IT Manager",
    role: "Financial Services",
  },
  {
    quote: "From hardware to Microsoft 365, they handle it end to end. We simply trust them to get it done.",
    author: "Operations Director",
    role: "Construction",
  },
];
