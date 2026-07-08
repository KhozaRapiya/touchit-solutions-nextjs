import type { PortableTextBlock } from "sanity";
import { slugify } from "@/sanity/lib/readingTime";

interface Heading {
  text: string;
  id: string;
  level: number;
}

function extractHeadings(blocks: PortableTextBlock[]): Heading[] {
  return blocks
    .filter((b) => b._type === "block" && (b.style === "h2" || b.style === "h3"))
    .map((b) => {
      const text = ((b as { children?: { text?: string }[] }).children ?? [])
        .map((c) => c.text ?? "")
        .join("");
      return { text, id: slugify(text), level: b.style === "h3" ? 3 : 2 };
    })
    .filter((h) => h.text.length > 0);
}

export function TableOfContents({ body }: { body: PortableTextBlock[] }) {
  const headings = extractHeadings(body);
  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="glass-panel p-5">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-faint">On this page</p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
            <a href={`#${h.id}`} className="text-muted transition hover:text-azure">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
