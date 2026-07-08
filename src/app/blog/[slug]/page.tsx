import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PostBody } from "@/components/blog/PortableText";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { PostCard } from "@/components/blog/PostCard";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { readingTime } from "@/sanity/lib/readingTime";
import { absoluteUrl } from "@/lib/site-url";
import { siteConfig } from "@/data/site";

export const revalidate = 60;

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || siteConfig.description;
  const ogImage = urlForImage(post.mainImage)?.width(1200).height(630).url();
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      tags: post.categories?.map((c) => c.title),
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const body = post.body ?? [];
  const minutes = readingTime(body);
  const heroUrl = urlForImage(post.mainImage)?.width(1600).height(840).url();
  const authorImg = urlForImage(post.author?.image)?.width(80).height(80).url();
  const url = absoluteUrl(`/blog/${post.slug}`);
  const categorySlugs = post.categories?.map((c) => c.slug) ?? [];
  const related = await getRelatedPosts(post.slug, categorySlugs);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    author: post.author?.name ? { "@type": "Person", name: post.author.name } : undefined,
    publisher: { "@type": "Organization", name: siteConfig.name },
    image: heroUrl ? [heroUrl] : undefined,
    mainEntityOfPage: url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="pb-[100px] pt-[130px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Container>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-faint">
          <Link href="/" className="transition hover:text-azure">Home</Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="transition hover:text-azure">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-muted line-clamp-1">{post.title}</span>
        </nav>

        <div className="mx-auto max-w-[760px] text-center">
          {post.categories?.length ? (
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {post.categories.map((c) => (
                <span key={c.slug} className="sec-tag">{c.title}</span>
              ))}
            </div>
          ) : null}
          <h1 className="text-[clamp(2rem,4.2vw,3rem)]">{post.title}</h1>
          {post.excerpt ? <p className="mt-4 text-lg text-muted">{post.excerpt}</p> : null}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-faint">
            {post.author?.name ? (
              <span className="flex items-center gap-2">
                {authorImg ? (
                  <Image src={authorImg} alt={post.author.name} width={28} height={28} className="rounded-full" />
                ) : null}
                <span className="text-muted">{post.author.name}</span>
                {post.author.role ? <span>· {post.author.role}</span> : null}
              </span>
            ) : null}
            <span className="flex items-center gap-1.5"><CalendarDays size={15} />{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} />{minutes} min read</span>
          </div>
        </div>

        {heroUrl ? (
          <div className="relative mx-auto mt-10 aspect-[16/9] max-w-[1000px] overflow-hidden rounded-xl2 border border-line">
            <Image src={heroUrl} alt={post.title} fill priority sizes="(max-width:1000px) 100vw, 1000px" className="object-cover" />
          </div>
        ) : null}

        {/* Body + sidebar */}
        <div className="mx-auto mt-12 grid max-w-[1000px] gap-10 lg:grid-cols-[1fr_260px]">
          <div className="min-w-0 text-[1.05rem]">
            {body.length ? <PostBody value={body} /> : <p className="text-muted">This article has no content yet.</p>}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <ShareButtons url={url} title={post.title} />
              <Link href="/blog" className="btn btn-ghost">
                <ArrowLeft size={16} /> All articles
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents body={body} />
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 ? (
          <div className="mx-auto mt-20 max-w-[1000px]">
            <h2 className="mb-6 text-[1.6rem] font-extrabold">Related articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r._id} post={r} />
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </article>
  );
}
