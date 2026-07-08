"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-[22px] right-[22px] z-[110] grid h-[46px] w-[46px] place-items-center rounded-[14px]",
        "border border-line-strong text-content backdrop-blur-md transition-all duration-300 ease-smooth hover:border-azure hover:text-azure",
        show ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      style={{ background: "var(--glass)" }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
