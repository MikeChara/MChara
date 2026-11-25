import type { Metadata } from "next";
import Link from "next/link";
import ConstructionBanner from "@/components/construction-banner";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd, createPageMetadata, webpageJsonLd } from "@/lib/seo";
import { projects } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Projects & clients",
  description:
    "Explore Mike Chara's software projects, client websites, and creative work beyond the keyboard.",
  path: "/projects",
  keywords: [
    "Mike Chara projects",
    "Mike Chara clients",
    "web developer",
    "software projects",
    "ice skating coach website",
    "creative projects",
  ],
  type: "website",
});

export default function ProjectsPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webpageJsonLd({
        name: "Projects & clients",
        description: "Software projects, client work, and non-software projects by Mike Chara.",
        path: "/projects",
        type: "CollectionPage",
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Projects & clients", path: "/projects" },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <JsonLd data={pageJsonLd} />
      <header className="page-intro">
        <p className="eyebrow">Things</p>
        <h1>Projects &amp; clients.</h1>
        <p>
          A few things I’ve built, am building, or am otherwise messing around
          with.
        </p>
      </header>
      <section className="page-content" aria-label="Projects, clients, and social links">
        <section className="project-group" aria-labelledby="software-projects">
          <header className="project-group-heading">
            <p className="eyebrow">01 / Digital</p>
            <h2 id="software-projects">Software projects</h2>
            <p>Websites etc.</p>
          </header>
          <div className="project-list">
            {projects
              .filter((project) => project.category === "Software")
              .map((project) => (
                <article className="project-item" key={project.slug}>
                  <p className="eyebrow">{project.status}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {(project.url || project.sourceUrl) && (
                    <div className="project-actions">
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit website <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                      {project.sourceUrl && (
                        <Link
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              ))}
          </div>
        </section>
        <section className="project-group" aria-labelledby="client-work">
          <header className="project-group-heading">
            <p className="eyebrow">02 / Client work</p>
            <h2 id="client-work">Recent clients</h2>
            <p>Websites built for other people.</p>
          </header>
          <div className="project-list">
            {projects
              .filter((project) => project.category === "Client")
              .map((project) => (
                <article className="project-item" key={project.slug}>
                  <p className="eyebrow">{project.status}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {(project.url || project.sourceUrl) && (
                    <div className="project-actions">
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit website <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                      {project.sourceUrl && (
                        <Link
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              ))}
          </div>
        </section>
        <section
          className="project-group"
          aria-labelledby="non-software-projects"
        >
          <header className="project-group-heading">
            <p className="eyebrow">03 / Other projects</p>
            <h2 id="non-software-projects">Non-software projects</h2>
            <p>Random projects.</p>
          </header>
          <ConstructionBanner message="This part of the portfolio is still taking shape. More non-software projects and details will be added here." />
          <div className="project-list">
            {projects
              .filter((project) => project.category === "Non-software")
              .map((project) => (
                <article className="project-item" key={project.slug}>
                  <p className="eyebrow">{project.status}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
          </div>
        </section>
        <div className="social-links" aria-label="Social media">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
