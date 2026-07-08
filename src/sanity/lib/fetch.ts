import { client } from "./client";
import {
  postsQuery,
  postSlugsQuery,
  postBySlugQuery,
  relatedPostsQuery,
  categoriesQuery,
} from "./queries";
import type { Category, Post, PostCardData } from "./types";

// Revalidate published content every 60s (ISR). Tune per your needs.
const cache = { next: { revalidate: 60 } } as const;

async function safe<T>(run: () => Promise<T>, fallback: T): Promise<T> {
  if (!client) return fallback;
  try {
    return await run();
  } catch (err) {
    console.warn("[sanity] fetch failed:", err);
    return fallback;
  }
}

export function getAllPosts() {
  return safe<PostCardData[]>(() => client!.fetch(postsQuery, {}, cache), []);
}

export function getPostSlugs() {
  return safe<{ slug: string }[]>(() => client!.fetch(postSlugsQuery, {}, cache), []);
}

export function getPostBySlug(slug: string) {
  return safe<Post | null>(() => client!.fetch(postBySlugQuery, { slug }, cache), null);
}

export function getRelatedPosts(slug: string, categorySlugs: string[]) {
  if (!categorySlugs.length) return Promise.resolve<PostCardData[]>([]);
  return safe<PostCardData[]>(
    () => client!.fetch(relatedPostsQuery, { slug, categorySlugs }, cache),
    []
  );
}

export function getCategories() {
  return safe<Category[]>(() => client!.fetch(categoriesQuery, {}, cache), []);
}
