import { groq } from "next-sanity";

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  "author": author->{name, "slug": slug.current, image, role},
  "categories": categories[]->{title, "slug": slug.current}
`;

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields},
    body,
    seoTitle,
    seoDescription
  }
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug && count(categories[@->slug.current in $categorySlugs]) > 0]
    | order(publishedAt desc)[0...3] {
    ${postFields}
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc){ title, "slug": slug.current }
`;
