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
          <p className="eyebrow hero-eyebrow">Writer · software engineer</p>
          <h1 id="home-title">
            I like stories
            <br />
            and side roads
          </h1>
          <p className="hero-intro">and building and learning things.</p>
          <Link className="text-link light-link" href="/about">
            More about me <span aria-hidden="true">→</span>
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
            <p className="eyebrow">Blogs and articles</p>
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
              <p className="eyebrow">Areas to explore</p>
              <h2>Behold, my stuff.</h2>
            </div>
          </div>
          <div className="discovery-grid">
            <Link className="discovery-card card-journal" href="/blog">
              <span className="card-number">01 / WRITING</span>
              <span className="card-title">Blogs and Articles</span>
              <span className="card-description">Wordy.</span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link className="discovery-card card-projects" href="/projects">
              <span className="card-number">02 / Builds</span>
              <span className="card-title">Projects</span>
              <span className="card-description">Shiny.</span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link className="discovery-card card-recipes" href="/recipes">
              <span className="card-number">03 / AT THE TABLE</span>
              <span className="card-title">The recipe box</span>
              <span className="card-description">Tasty.</span>
              <span className="card-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-note content-width">
        <p className="eyebrow">Glad you found your way here.</p>
        <p className="closing-copy">
          To the bottom of the page.
          <br />
          <span>Where I have run out of things to say.</span>
        </p>
        <Link className="text-link" href="/about">
          So have another link to the about me page{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
