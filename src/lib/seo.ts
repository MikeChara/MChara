import type { Metadata } from "next";
import { siteUrl } from "./site";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
  noIndex = false,
}: PageSeo): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  const imageUrl = image ? new URL(image, siteUrl).toString() : undefined;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      ...(imageUrl
        ? { images: [{ url: imageUrl, alt: title }] }
        : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function webpageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: new URL(path, siteUrl).toString(),
    isPartOf: { "@id": `${siteUrl.toString()}#website` },
    author: { "@id": `${siteUrl.toString()}#mike-chara` },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: new URL(path, siteUrl).toString(),
    datePublished,
    dateModified: dateModified ?? datePublished,
    ...(image ? { image: [new URL(image, siteUrl).toString()] } : {}),
    author: {
      "@type": "Person",
      name: "Mike Chara",
      url: siteUrl.toString(),
    },
  };
}
