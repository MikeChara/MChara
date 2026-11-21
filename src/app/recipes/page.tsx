import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd, createPageMetadata, webpageJsonLd } from "@/lib/seo";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = createPageMetadata({
  title: "Recipes",
  description:
    "Browse favourite recipes from Mike Chara, with ingredients and instructions for every dish.",
  path: "/recipes",
  keywords: [
    "Mike Chara recipes",
    "slow ferment pizza",
    "thin crust pizza",
    "home cooking",
  ],
  type: "website",
});

export default function RecipesPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webpageJsonLd({
        name: "Mike Chara recipes",
        description: "A collection of favourite recipes.",
        path: "/recipes",
        type: "CollectionPage",
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Recipes", path: "/recipes" },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <header className="page-intro">
        <p className="eyebrow">The recipe box</p>
        <h1>Good food.</h1>
        <p>
          A collection of recipes I’ve enjoyed making, adjusted to my own taste
          over time, and frankly needed somewhere to dump so I don’t forget
          them.
        </p>
      </header>
      <section className="page-content" aria-label="Favourite recipes">
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <Link
              className="recipe-item"
              href={`/recipes/${recipe.slug}`}
              key={recipe.slug}
            >
              <Image
                className="recipe-card-image"
                src={recipe.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 360px"
              />
              <p className="eyebrow">{recipe.category}</p>
              <h2>{recipe.name}</h2>
              <span className="recipe-card-link">
                View recipe <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
        <p className="recipe-note">
          More favourites will be added to the collection.
        </p>
      </section>
      <JsonLd data={pageJsonLd} />
    </main>
  );
}
