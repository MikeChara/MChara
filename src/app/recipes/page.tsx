import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Browse favourite recipes from Mike Chara, with ingredients and instructions for every dish.",
  alternates: { canonical: "/recipes" },
};

export default function RecipesPage() {
  return (
    <main className="page-main content-width">
      <header className="page-intro">
        <p className="eyebrow">The recipe box</p>
        <h1>Good food, shared.</h1>
        <p>Favourite things to cook, eat, and make again. The sort of recipes that find their way into your regular rotation.</p>
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
              <span className="recipe-card-link">View recipe <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
        <p className="recipe-note">More favourites will be added to the collection.</p>
      </section>
    </main>
  );
}