import type { MetadataRoute } from "next";
import { recipes } from "@/lib/recipes";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/blog", "/projects", "/recipes"];

  return [
    ...pages.map((page) => ({
      url: new URL(page, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7,
    })),
    ...recipes.map((recipe) => ({
      url: new URL(`/recipes/${recipe.slug}`, siteUrl).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}