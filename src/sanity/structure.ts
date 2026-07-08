import type { StructureResolver } from "sanity/structure";
import { DocumentTextIcon, UserIcon, TagIcon } from "@sanity/icons";

/** Custom desk structure grouping the blog content types. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog Posts")
        .icon(DocumentTextIcon)
        .child(S.documentTypeList("post").title("Blog Posts")),
      S.listItem()
        .title("Authors")
        .icon(UserIcon)
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Categories")
        .icon(TagIcon)
        .child(S.documentTypeList("category").title("Categories")),
    ]);
