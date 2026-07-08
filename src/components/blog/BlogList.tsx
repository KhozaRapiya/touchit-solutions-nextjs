"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/blog/PostCard";
import type { Category, PostCardData } from "@/sanity/lib/types";
import { cn } from "@/lib/utils";

export function BlogList({ posts, categories }: { posts: PostCardData[]; categories: Category[] }) {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((p) => p.categories?.some((c) => c.slug === active));
  }, [posts, active]);

  const pills = [{ title: "All", slug: "all" }, ...categories];

  return (
    <>
      {categories.length > 0 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {pills.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                active === c.slug
                  ? "border-transparent bg-accent text-white"
                  : "border-line text-muted hover:border-azure hover:text-azure"
              )}
              style={active === c.slug ? undefined : { background: "var(--glass-2)" }}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-muted">No articles in this category yet.</p>
      )}
    </>
  );
}
