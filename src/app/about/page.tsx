import ConstructionBanner from "@/components/construction-banner";

export default function AboutPage() {
  return (
    <main className="page-main content-width">
      <header className="page-intro">
        <p className="eyebrow">A proper hello</p>
        <h1>I&apos;m Mike. I like making things.</h1>
        <p>This is a home for the ideas, projects, and everyday discoveries I want to share.</p>
      </header>
      <ConstructionBanner message="The bio and some of the imagery are temporary while I put together the full story." />
      <section className="page-content about-layout">
        <div className="about-photo" role="img" aria-label="A mountain lake at the edge of a forest" />
        <div className="about-copy">
          <p>I’ve always been happiest following a question a little further than it needs to go. Sometimes that turns into a story, sometimes a project, and sometimes dinner.</p>
          <p>This site brings those different threads together: writing from the journal, things I’m working on, and recipes that have earned a regular place at the table.</p>
          <p>It’s a work in progress, much like everything else. Thanks for stopping by.</p>
          <div className="about-book">
            <p className="eyebrow">Published work</p>
            <h2>A Weight of Many</h2>
            <p>The first book in The Cadence Saints series.</p>
          </div>
        </div>
      </section>
    </main>
  );
}