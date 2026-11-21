import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import { getJournalPostBySlug, journalPosts } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return journalPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    return { title: "Journal post not found" };
  }

  const path = `/blog/${post.slug}`;
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path,
    keywords: [post.title, "Mike Chara", "journal", "writing"],
    image: post.image,
    type: "article",
  });
}

export default async function JournalPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      articleJsonLd({
        title: post.title,
        description: post.description,
        path,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        image: post.image,
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/blog" },
        { name: post.title, path },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <JsonLd data={pageJsonLd} />
      <article className="page-content">
        <header className="page-intro">
          <p className="eyebrow">From the journal · {post.readingTime}</p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <time dateTime={post.datePublished}>{post.datePublished}</time>
        </header>
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {post.linkUrl && post.linkLabel && (
          <p>
            <Link
              href={post.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {post.linkLabel}
            </Link>
          </p>
        )}
      </article>
    </main>
  );
}
