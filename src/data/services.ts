import {
  Cloud,
  LayoutGrid,
  BarChart3,
  ShieldCheck,
  Cpu,
  Code2,
  Globe,
  HardDrive,
  Server,
  Headset,
  Network,
  Compass,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Azure, migration, backup, hybrid cloud and cloud security built for scale.",
    tags: ["Azure", "Migration", "Backup", "Hybrid", "Cloud Security"],
  },
  {
    icon: LayoutGrid,
    title: "Microsoft Solutions",
    description: "Microsoft 365, Exchange, SharePoint, Teams and the Power Platform.",
    tags: ["Microsoft 365", "Teams", "SharePoint", "Power BI", "Entra ID"],
  },
  {
    icon: BarChart3,
    title: "Microsoft Dynamics GP",
    description: "Implementation, customisation, training, upgrades and reporting.",
    tags: ["Implementation", "Support", "Customization", "Integration"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Endpoint, network and email protection with managed threat detection.",
    tags: ["Endpoint", "Firewall", "Email Security", "Threat Detection"],
  },
  {
    icon: Cpu,
    title: "Internet of Things",
    description: "Smart devices, industrial IoT, remote monitoring and automation.",
    tags: ["Smart Devices", "Industrial IoT", "Automation", "Sensors"],
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Enterprise, web and mobile applications, APIs and integrations.",
    tags: ["Web Apps", "Mobile", "APIs", "Automation"],
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Corporate sites, portals and eCommerce with UI/UX, SEO and hosting.",
    tags: ["Corporate", "eCommerce", "UI/UX", "SEO"],
  },
  {
    icon: HardDrive,
    title: "Domain & Hosting",
    description: "Domains, email, website and cloud hosting with SSL certificates.",
    tags: ["Domains", "Email", "SSL", "Cloud Hosting"],
  },
  {
    icon: Server,
    title: "Hardware Solutions",
    description: "Desktops, laptops, servers, networking gear and custom builds.",
    tags: ["Servers", "Laptops", "Networking", "Custom Builds"],
  },
  {
    icon: Headset,
    title: "Technical Support",
    description: "Remote and onsite support, managed IT and preventative maintenance.",
    tags: ["Remote", "Onsite", "Managed IT", "Help Desk"],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "LAN, WAN, Wi-Fi, VPN, structured cabling and virtualization.",
    tags: ["LAN/WAN", "Wi-Fi", "VPN", "Virtualization"],
  },
  {
    icon: Compass,
    title: "ICT Consulting",
    description: "Digital transformation strategy, advisory and readiness assessments.",
    tags: ["Strategy", "Advisory", "Cloud Readiness", "Assessments"],
  },
];
