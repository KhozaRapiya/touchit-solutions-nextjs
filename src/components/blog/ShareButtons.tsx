"use client";

import { useState } from "react";
import { Linkedin, Twitter, Facebook, LinkIcon, Check } from "lucide-react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const e = encodeURIComponent;

  const links = [
    { label: "Share on LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}` },
    { label: "Share on X", icon: Twitter, href: `https://twitter.com/intent/tweet?url=${e(url)}&text=${e(title)}` },
    { label: "Share on Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${e(url)}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — no-op */
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-sm font-semibold text-muted">Share</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="grid h-10 w-10 place-items-center rounded-[11px] border border-line text-content transition hover:border-azure hover:text-azure"
          style={{ background: "var(--glass-2)" }}
        >
          <l.icon size={17} />
        </a>
      ))}
      <button
        onClick={copy}
        aria-label="Copy link"
        className="grid h-10 w-10 place-items-center rounded-[11px] border border-line text-content transition hover:border-azure hover:text-azure"
        style={{ background: "var(--glass-2)" }}
      >
        {copied ? <Check size={17} className="text-success" /> : <LinkIcon size={17} />}
      </button>
    </div>
  );
}
