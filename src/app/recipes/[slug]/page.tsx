import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRecipeBySlug, recipes } from "@/lib/recipes";
import PortionIngredients from "./portion-ingredients";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe not found" };
  }

  const canonical = `/recipes/${recipe.slug}`;

  return createPageMetadata({
    title: recipe.name,
    description: recipe.description,
    path: canonical,
    keywords: [recipe.name, recipe.category, "Mike Chara", "recipe"],
    image: recipe.image,
    type: "article",
  });
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Recipe",
        name: recipe.name,
        description: recipe.description,
        image: [recipe.image],
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
        recipeIngredient: [
          ...recipe.ingredients.map(
            (ingredient) =>
              `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`,
          ),
          ...recipe.otherIngredients.flatMap((requirement) =>
            requirement.choices.map((choice) => choice),
          ),
        ],
        recipeInstructions: recipe.instructions.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Recipes", path: "/recipes" },
        { name: recipe.name, path: `/recipes/${recipe.slug}` },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <JsonLd data={recipeJsonLd} />
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
          <p>
            <span>Prep</span>
            {recipe.prepTimeMinutes} min hands-on
          </p>
          <p>
            <span>Ferment</span>2–5 days, best on day 3
          </p>
          <p>
            <span>Bake</span>About {recipe.cookTimeMinutes} min
          </p>
        </div>
        <div className="recipe-detail-columns">
          <section
            className="equipment-section"
            aria-labelledby="equipment-heading"
          >
            <h2 id="equipment-heading">Equipment</h2>
            <ul>
              {recipe.equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <PortionIngredients
          ingredients={recipe.ingredients}
          basePortions={recipe.servings}
        />
        <section
          className="other-ingredients"
          aria-labelledby="other-ingredients-heading"
        >
          <div className="other-ingredients-heading">
            <p className="eyebrow">Build your pizza</p>
            <h2 id="other-ingredients-heading">Other ingredients</h2>
          </div>
          <div className="other-ingredient-grid">
            {recipe.otherIngredients.map((requirement) => (
              <section
                className="other-ingredient-group"
                aria-labelledby={`${recipe.slug}-${requirement.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}-heading`}
                key={requirement.title}
              >
                <h3
                  id={`${recipe.slug}-${requirement.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-heading`}
                >
                  {requirement.title}
                </h3>
                <ul>
                  {requirement.choices.map((choice) => (
                    <li key={choice}>{choice}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
        <section
          className="recipe-notes"
          aria-labelledby="recipe-notes-heading"
        >
          <div className="recipe-section-heading">
            <p className="eyebrow">A few things worth knowing</p>
            <h2 id="recipe-notes-heading">Notes</h2>
          </div>
          <ul>
            {recipe.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
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
                <span className="method-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
