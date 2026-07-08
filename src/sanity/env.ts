/**
 * Sanity environment configuration.
 *
 * These are read from NEXT_PUBLIC_* vars so both the Studio (browser) and the
 * Next.js server can use them. The values are intentionally NOT asserted at
 * import time so the app still builds before a project is connected — data
 * fetches degrade gracefully to empty states until `projectId` is set.
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/** True once a real Sanity project id is present. */
export const isSanityConfigured = projectId.length > 0;
