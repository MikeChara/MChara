import Link from "next/link";
import ConstructionBanner from "@/components/construction-banner";

export default function ProjectsPage() {
  return (
    <main className="page-main content-width">
      <header className="page-intro">
        <p className="eyebrow">Things in motion</p>
        <h1>Projects & places.</h1>
        <p>A few things I’m building, exploring, or sharing beyond this little corner of the web.</p>
      </header>
      <section className="page-content" aria-label="Projects and social links">
        <section className="project-group" aria-labelledby="software-projects">
          <header className="project-group-heading">
            <p className="eyebrow">01 / Digital</p>
            <h2 id="software-projects">Software projects</h2>
            <p>Websites, tools, and experiments built in code.</p>
          </header>
          <div className="project-list">
            <article className="project-item"><p className="eyebrow">In development</p><h3>MikeChara.co.uk</h3><p>A personal website bringing together writing, projects, and recipes.</p></article>
            <article className="project-item">
              <p className="eyebrow">Live project</p>
              <h3>Ice skating coach</h3>
              <p>A website for Coach Chantelle, offering ice skating lessons in Slough.</p>
              <div className="project-actions">
                <Link href="https://coachchantelle.app" target="_blank" rel="noreferrer">Visit website <span aria-hidden="true">↗</span></Link>
                <Link href="https://github.com/MikeChara/iceskatingcoach" target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </section>
        <section className="project-group" aria-labelledby="non-software-projects">
          <header className="project-group-heading">
            <p className="eyebrow">02 / Beyond the screen</p>
            <h2 id="non-software-projects">Non-software projects</h2>
            <p>Stories, food, and creative work made away from the keyboard.</p>
          </header>
          <ConstructionBanner message="This part of the portfolio is still taking shape. More non-software projects and details will be added here." />
          <div className="project-list">
            <article className="project-item"><p className="eyebrow">Writing</p><h3>The journal</h3><p>Personal stories, field notes, and ideas still finding their shape.</p></article>
            <article className="project-item"><p className="eyebrow">At the table</p><h3>The recipe box</h3><p>A growing collection of favourite meals and well-used recipes.</p></article>
          </div>
        </section>
        <div className="social-links" aria-label="Social media">
          <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</Link>
        </div>
      </section>
    </main>
  );
}