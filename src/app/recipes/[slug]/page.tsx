import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRecipeBySlug, recipes } from "@/lib/recipes";
import { serializeJsonLd, siteUrl } from "@/lib/site";
import PortionIngredients from "./portion-ingredients";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe not found" };
  }

  const canonical = `/recipes/${recipe.slug}`;

  return {
    title: recipe.name,
    description: recipe.description,
    authors: [{ name: "Mike Chara", url: siteUrl.toString() }],
    keywords: [recipe.name, recipe.category, "Mike Chara", "recipe"],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: recipe.name,
      description: recipe.description,
      images: [{ url: recipe.image, alt: recipe.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.name,
      description: recipe.description,
      images: [recipe.image],
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description,
    image: [new URL(recipe.image, siteUrl).toString()],
    author: {
      "@type": "Person",
      name: "Mike Chara",
      url: siteUrl.toString(),
    },
    prepTime: `PT${recipe.prepTimeMinutes}M`,
    cookTime: `PT${recipe.cookTimeMinutes}M`,
    totalTime: recipe.totalTimeIso,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category,
    recipeIngredient: recipe.ingredients.map(
      (ingredient) => `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`,
    ),
    recipeInstructions: recipe.instructions.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
  };

  return (
    <main className="page-main content-width">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(recipeJsonLd) }}
      />
      <header className="page-intro recipe-detail-intro">
        <p className="eyebrow">{recipe.category}</p>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
      </header>
      <article className="page-content recipe-detail">
        <Image
          className="recipe-detail-image"
          src={recipe.image}
          alt={`Finished ${recipe.name.toLowerCase()}`}
          width={1600}
          height={1200}
          priority
          sizes="(max-width: 760px) 100vw, 900px"
        />
        <div className="recipe-facts" aria-label="Recipe details">
          <p><span>Prep</span>{recipe.prepTimeMinutes} min hands-on</p>
          <p><span>Ferment</span>2–5 days, best on day 3</p>
          <p><span>Bake</span>About {recipe.cookTimeMinutes} min</p>
        </div>
        <div className="recipe-detail-columns">
          <section className="equipment-section" aria-labelledby="equipment-heading">
            <h2 id="equipment-heading">Equipment</h2>
            <ul>{recipe.equipment.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
        <PortionIngredients ingredients={recipe.ingredients} basePortions={recipe.servings} />
        <section className="recipe-notes" aria-labelledby="recipe-notes-heading">
          <div className="recipe-section-heading">
            <p className="eyebrow">A few things worth knowing</p>
            <h2 id="recipe-notes-heading">Notes</h2>
          </div>
          <ul>
            {recipe.notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </section>
        <section className="recipe-method" aria-labelledby="method-heading">
          <div className="recipe-section-heading">
            <p className="eyebrow">From mixing bowl to table</p>
            <h2 id="method-heading">Method</h2>
          </div>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={instruction}>
                <span className="method-step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{instruction}</p>
                  {recipe.instructionVideos
                    .filter((video) => video.instructionNumber === index + 1)
                    .map((video) => (
                      <a
                        className="method-video-link"
                        href={video.url}
                        key={video.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {video.title} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  {recipe.instructionImages
                    .filter((image) => image.instructionNumber === index + 1)
                    .map((image) => (
                      <figure className="method-image" key={image.src}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 760px) 100vw, 720px"
                        />
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}