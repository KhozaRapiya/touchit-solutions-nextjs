"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[120]">
        <div
          className={cn(
            "mx-auto mt-3 flex h-[74px] max-w-site items-center gap-5 rounded-[18px] border border-line px-5",
            "backdrop-blur-xl transition-all duration-300 ease-smooth",
            scrolled && "border-line-strong shadow-glow"
          )}
          style={{ background: "var(--glass)" }}
        >
          <a href="/#top" className="flex items-center gap-3 font-display text-[19px] font-extrabold tracking-tight">
            <Image src="/logo.jpeg" alt="TouchIT Solutions logo" width={42} height={42} className="rounded-full shadow-primary" priority />
            <span>
              Touch<span className="text-royal dark:text-azure">IT</span> Solutions
            </span>
          </a>

          <nav className="ml-auto hidden gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-[10px] px-3.5 py-2.5 text-[14.5px] font-medium text-muted transition hover:bg-[color:var(--glass-2)] hover:text-content"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2.5 md:ml-0">
            <button
              aria-label="Open search"
              title="Search (Ctrl K)"
              onClick={() => window.dispatchEvent(new CustomEvent("open-cmdk"))}
              className="grid h-10 w-10 place-items-center rounded-[11px] border border-line text-content transition hover:border-azure hover:text-azure"
              style={{ background: "var(--glass-2)" }}
            >
              <Search size={18} />
            </button>

            <button
              aria-label="Toggle colour theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="grid h-10 w-10 place-items-center rounded-[11px] border border-line text-content transition hover:border-azure hover:text-azure"
              style={{ background: "var(--glass-2)" }}
            >
              {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="/#contact" className="btn btn-primary hidden sm:inline-flex" style={{ padding: "11px 18px" }}>
              Request Consultation
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-[11px] border border-line text-content transition hover:border-azure hover:text-azure md:hidden"
              style={{ background: "var(--glass-2)" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <nav className="fixed inset-x-3 top-[96px] z-[119] flex flex-col gap-1 rounded-[16px] border border-line-strong bg-surface p-3.5 shadow-glow md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-[10px] px-4 py-3 font-medium text-muted transition hover:bg-bg2 hover:text-content"
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </>
  );
}
