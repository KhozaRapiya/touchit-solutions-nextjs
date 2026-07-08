import type { PortableTextBlock } from "sanity";

/** Rough reading time (minutes) from Portable Text body, ~200 wpm. */
export function readingTime(blocks: PortableTextBlock[] | undefined): number {
  if (!blocks?.length) return 1;
  const words = blocks
    .filter((b) => b._type === "block")
    .map((b) =>
      ((b as { children?: { text?: string }[] }).children ?? [])
        .map((c) => c.text ?? "")
        .join(" ")
    )
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** URL-safe slug from heading text, used for TOC anchors. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
