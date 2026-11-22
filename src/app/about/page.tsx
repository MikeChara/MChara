import type { Metadata } from "next";
import ConstructionBanner from "@/components/construction-banner";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd, createPageMetadata, webpageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Mike Chara",
  description:
    "Meet Mike Chara, author of A Weight of Many and writer of stories, projects, and recipes.",
  path: "/about",
  keywords: ["Mike Chara", "author", "A Weight of Many", "The Cadence Saints"],
  type: "website",
});

export default function AboutPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webpageJsonLd({
        name: "About Mike Chara",
        description: "Meet Mike Chara, author and creator.",
        path: "/about",
        type: "AboutPage",
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <JsonLd data={pageJsonLd} />
      <header className="page-intro">
        <p className="eyebrow">Hello</p>
        <h1>I’m Mike. I occasionally make stuff.</h1>
        <p>This is a home for some of the things I’m working on.</p>
      </header>
      <ConstructionBanner message="The bio and some of the imagery are temporary while I put together the full story." />
      <section className="page-content about-layout">
        <div
          className="about-photo"
          role="img"
          aria-label="A mountain lake at the edge of a forest"
        />
        <div className="about-copy">
          <p>
            I wrote a book, the first in a three-book series. I’m writing the
            second one now and with a bit of luck, it’ll be ready sometime
            toward the end of 2027. I work full time so apologies if this
            timescale is not as fast as you’d like. I’m doing my best.
          </p>
          <p>
            To those of you who bought the first one, thank you. I hope you
            enjoyed it. To those of you who haven’t, I hope you’ll give it a
            try.
          </p>
          <p>
            I’ll probably write a blog about progress as speed starts ramping
            up.
          </p>
          <div className="about-book">
            <p className="eyebrow">Published work</p>
            <h2>A Weight of Many</h2>
            <p>
              The first book in The Cadence Saints series. It can be found{" "}
              <a
                href="https://amzn.eu/d/09vWLaPq"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
