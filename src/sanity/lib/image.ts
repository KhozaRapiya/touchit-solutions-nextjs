import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId, isSanityConfigured } from "../env";

const builder = isSanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

/** Returns a Sanity image URL builder, or null if no image / not configured. */
export function urlForImage(source: Image | undefined | null) {
  if (!builder || !source || !(source as { asset?: unknown }).asset) return null;
  return builder.image(source).auto("format").fit("max");
}
