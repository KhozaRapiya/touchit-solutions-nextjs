import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import type { PostCardData } from "@/sanity/lib/types";

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-ZA", { year: "numeric", month: "short", day: "numeric" });
}

export function PostCard({ post }: { post: PostCardData }) {
  const img = urlForImage(post.mainImage)?.width(800).height(500).url();

  return (
    <Link href={`/blog/${post.slug}`} className="glass-card group flex h-full flex-col p-0">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl2 bg-bg2">
        {img ? (
          <Image
            src={img}
            alt={post.mainImage && "alt" in post.mainImage ? String(post.mainImage.alt ?? post.title) : post.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-accent opacity-90" />
        )}
        {post.categories?.[0] ? (
          <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {post.categories[0].title}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-[1.2rem] font-bold leading-snug transition group-hover:text-royal dark:group-hover:text-azure">
          {post.title}
        </h3>
        {post.excerpt ? <p className="mb-4 flex-1 text-[0.93rem] text-muted">{post.excerpt}</p> : <div className="flex-1" />}
        <div className="flex items-center gap-2 text-xs text-faint">
          <CalendarDays size={14} />
          {formatDate(post.publishedAt)}
          {post.author?.name ? <span>· {post.author.name}</span> : null}
        </div>
      </div>
    </Link>
  );
}
