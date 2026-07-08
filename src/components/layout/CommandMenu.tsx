"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { navLinks } from "@/data/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

interface CmdItem {
  label: string;
  href: string;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<CmdItem[]>(
    () => [
      ...navLinks,
      { label: "Why TouchIT", href: "/#why" },
      { label: "Digital Transformation", href: "/#process" },
      { label: "Testimonials", href: "/#testimonials" },
      ...services.map((s) => ({ label: s.title, href: "/#services" })),
    ],
    []
  );

  const filtered = useMemo(
    () => items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSel(0);
  }, []);

  const go = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        window.location.hash = href;
      } else {
        // Handles both routes ("/blog") and homepage anchors ("/#services").
        window.location.assign(href);
      }
      close();
    },
    [close]
  );

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-cmdk", onOpen);
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-cmdk", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => setSel(0), [query]);

  const onKeyNav = (e: React.KeyboardEvent) => {
    if (!filtered.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => (s + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => (s - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(filtered[sel].href);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-start justify-center pt-[14vh]"
      style={{ background: "rgba(3,7,18,.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="w-[min(560px,92vw)] overflow-hidden rounded-[16px] border border-line-strong bg-surface shadow-glow">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyNav}
          placeholder="Search services, sections, solutions..."
          className="w-full border-b border-line bg-transparent px-5 py-[18px] text-content outline-none"
          autoComplete="off"
        />
        <div className="max-h-[320px] overflow-auto p-2">
          {filtered.length ? (
            filtered.map((item, i) => (
              <button
                key={item.label + i}
                onMouseEnter={() => setSel(i)}
                onClick={() => go(item.href)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-[10px] px-3.5 py-3 text-left text-[0.94rem] text-muted transition",
                  i === sel && "bg-bg2 text-content"
                )}
              >
                <Search size={16} className="text-azure" />
                {item.label}
              </button>
            ))
          ) : (
            <div className="px-3.5 py-3 text-[0.94rem] text-muted">No results</div>
          )}
        </div>
        <div className="flex gap-3.5 border-t border-line px-4 py-2.5 text-xs text-faint">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
