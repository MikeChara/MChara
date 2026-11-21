import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mike Chara",
  description:
    "The official website of Mike Chara: author of A Weight of Many, journal writer, maker, and curator of stories and recipes.",
  path: "/",
  keywords: [
    "Mike Chara",
    "A Weight of Many",
    "The Cadence Saints",
    "author",
    "journal",
    "projects",
    "recipes",
  ],
  type: "website",
});

export default function Home() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbJsonLd([{ name: "Home", path: "/" }])],
  };

  return (
    <main>
      <JsonLd data={pageJsonLd} />
      <section className="home-hero" aria-labelledby="home-title">
        <div
          className="hero-image"
          role="img"
          aria-label="A quiet path through a green landscape"
        />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            Writer · maker · curious person
          </p>
          <h1 id="home-title">
            A life in stories
            <br />
            and side roads.
          </h1>
          <p className="hero-intro">
            Notes from wherever curiosity leads: the things I make and the food
            I keep coming back to.
          </p>
          <Link className="text-link light-link" href="/about">
            Come on in <span aria-hidden="true">→</span>
          </Link>
        </div>
        <span className="hero-caption">
          A collection of things by Mike Chara
        </span>
      </section>

      <section
        className="featured-section content-width"
        aria-labelledby="featured-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">From the journal</p>
            <h2 id="featured-title">Latest story</h2>
          </div>
          <Link className="text-link" href="/blog">
            All writing <span aria-hidden="true">→</span>
          </Link>
        </div>
        <article className="featured-story">
          <Link
            className="story-image story-image-coast"
            href="/blog/the-cadence-saints"
            aria-label="Read The Cadence Saints"
          />
          <div className="story-copy">
            <p className="eyebrow">
              Writing update <span>·</span> 2 min read
            </p>
            <h3>
              <Link href="/blog/the-cadence-saints">The Cadence Saints</Link>
            </h3>
            <p>
              A first-book update, progress on book two, and a thank-you to
              everyone reading the series.
            </p>
            <Link className="text-link" href="/blog/the-cadence-saints">
              Read the story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </section>

      <section className="discovery-section">
        <div className="content-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few good rabbit holes</p>
              <h2>Take a look around</h2>
            </div>
          </div>
          <div className="discovery-grid">
            <Link className="discovery-card card-journal" href="/blog">
              <span className="card-number">01 / WORDS</span>
              <span className="card-title">The journal</span>
              <span className="card-description">
                Stories, observations, and things I had to write down.
              </span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link className="discovery-card card-projects" href="/projects">
              <span className="card-number">02 / IN PROGRESS</span>
              <span className="card-title">Projects & places</span>
              <span className="card-description">
                Current experiments and corners of the internet.
              </span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link className="discovery-card card-recipes" href="/recipes">
              <span className="card-number">03 / AT THE TABLE</span>
              <span className="card-title">The recipe box</span>
              <span className="card-description">
                Favourite things to cook, eat, and make again.
              </span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-note content-width">
        <p className="eyebrow">Glad you found your way here</p>
        <p className="closing-copy">
          Make yourself at home.
          <br />
          <span>There’s always something new brewing.</span>
        </p>
        <Link className="text-link" href="/about">
          A little more about me <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
