import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi TouchIT Solutions, I'd like to enquire about your services."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[22px] left-[22px] z-[110] flex items-center gap-2.5 rounded-[14px] bg-[#25D366] px-4 py-3 text-[0.9rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
      style={{ boxShadow: "0 12px 30px -8px rgba(37,211,102,.6)" }}
    >
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>
  );
}
