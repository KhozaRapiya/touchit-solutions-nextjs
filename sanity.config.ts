"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

/**
 * Sanity Studio configuration — mounted at /studio.
 * `projectId` falls back to a placeholder so the app builds before a real
 * project is connected; set NEXT_PUBLIC_SANITY_PROJECT_ID to go live.
 */
export default defineConfig({
  name: "touchit-studio",
  title: "TouchIT Solutions — Content",
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
