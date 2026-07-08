import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/sanity/lib/fetch";
import { absoluteUrl } from "@/lib/site-url";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
  ];

  const slugs = await getPostSlugs();
  const postRoutes: MetadataRoute.Sitemap = slugs.map((s) => ({
    url: absoluteUrl(`/blog/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
