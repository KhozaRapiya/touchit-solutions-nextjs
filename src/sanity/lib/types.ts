import type { Image, PortableTextBlock } from "sanity";

export interface Author {
  name: string;
  slug?: string;
  role?: string;
  image?: Image;
}

export interface Category {
  title: string;
  slug: string;
}

export interface PostCardData {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: Image;
  publishedAt?: string;
  author?: Author;
  categories?: Category[];
}

export interface Post extends PostCardData {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}
