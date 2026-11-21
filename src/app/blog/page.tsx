import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { journalPosts } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "The journal",
  description:
    "Read stories and observations from Mike Chara's journal on writing, creativity, travel, projects, and everyday life.",
  path: "/blog",
  keywords: [
    "Mike Chara journal",
    "Mike Chara stories",
    "writing",
    "creative journal",
    "personal essays",
  ],
  type: "website",
});

export default function BlogPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webpageJsonLd({
        name: "The journal",
        description: "Stories and observations from Mike Chara.",
        path: "/blog",
        type: "CollectionPage",
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <JsonLd data={pageJsonLd} />
      <header className="page-intro">
        <p className="eyebrow">The journal</p>
        <h1>Quick blogs.</h1>
        <p>I don’t write these often.</p>
      </header>
      <section className="page-content" aria-label="Recent writing">
        <div className="post-list">
          {journalPosts.map((post) => (
            <article className="post-row" key={post.slug}>
              <time className="post-date" dateTime={post.datePublished}>
                {new Date(`${post.datePublished}T12:00:00`).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </time>
              <div>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
