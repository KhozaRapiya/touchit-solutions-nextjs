/** Canonical, absolute site URL used for metadata, canonicals, OG and sitemap. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.touchitsolutions.co.za"
).replace(/\/$/, "");

/** Build an absolute URL from a path. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
