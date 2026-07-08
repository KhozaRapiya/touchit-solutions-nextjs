import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { authorType } from "./authorType";
import { postType } from "./postType";

export const schemaTypes: SchemaTypeDefinition[] = [
  postType,
  authorType,
  categoryType,
  blockContentType,
];
