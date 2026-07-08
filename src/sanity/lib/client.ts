import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "../env";

/**
 * Shared Sanity read client. Null until a project id is configured so the app
 * builds and renders empty states without credentials.
 */
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached reads for published content
    })
  : null;
