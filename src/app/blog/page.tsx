import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts, getCategories } from "@/sanity/lib/fetch";
import { isSanityConfigured } from "@/sanity/env";
import { absoluteUrl } from "@/lib/site-url";
import { siteConfig } from "@/data/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Technology Insights",
  description:
    "Insights on cloud, cybersecurity, Microsoft technologies, IoT and digital transformation from the TouchIT Solutions team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — Technology Insights | ${siteConfig.name}`,
    description: "Practical ICT insights for South African organisations.",
    type: "website",
    url: absoluteUrl("/blog"),
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()]);

  return (
    <section className="pb-[100px] pt-[150px]">
      <Container>
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <span className="sec-tag">Knowledge Centre</span>
          <h1 className="mt-3.5 text-[clamp(2.2rem,4vw,3.2rem)]">
            Technology <span className="grad-text">Insights</span> & Articles
          </h1>
          <p className="mt-4 text-[1.06rem] text-muted">
            Cloud, cybersecurity, Microsoft technologies, IoT and digital transformation — explained by our engineers.
          </p>
        </div>

        {posts.length > 0 ? (
          <BlogList posts={posts} categories={categories} />
        ) : (
          <div className="glass-panel mx-auto max-w-xl p-10 text-center">
            <h2 className="mb-2 text-xl font-bold">No posts yet</h2>
            <p className="text-muted">
              {isSanityConfigured
                ? "Publish your first article in the Studio at /studio and it will appear here."
                : "Connect a Sanity project (see .env.local.example) and open /studio to start publishing."}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
