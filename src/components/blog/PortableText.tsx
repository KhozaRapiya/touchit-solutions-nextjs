import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import { slugify } from "@/sanity/lib/readingTime";

function textOf(children: unknown): string {
  if (Array.isArray(children)) return children.map(textOf).join("");
  if (typeof children === "string") return children;
  return "";
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 id={slugify(textOf(children))} className="scroll-mt-28 text-[1.7rem] font-extrabold mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={slugify(textOf(children))} className="scroll-mt-28 text-[1.35rem] font-bold mt-9 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => <h4 className="text-[1.1rem] font-bold mt-7 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="my-4 leading-8 text-content/90">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-azure pl-5 italic text-muted">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 text-content/90">{children}</ul>,
    number: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 text-content/90">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-content">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded-md border border-line bg-bg2 px-1.5 py-0.5 font-mono text-[0.85em] text-royal dark:text-azure">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <Link
          href={href}
          className="font-medium text-royal underline underline-offset-2 dark:text-azure"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const url = urlForImage(value)?.width(1400).url();
      if (!url) return null;
      const alt = (value as { alt?: string })?.alt ?? "";
      return (
        <figure className="my-8 overflow-hidden rounded-xl2 border border-line">
          <Image src={url} alt={alt} width={1400} height={800} className="h-auto w-full" />
          {alt ? <figcaption className="px-4 py-2 text-center text-sm text-faint">{alt}</figcaption> : null}
        </figure>
      );
    },
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
