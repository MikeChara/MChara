import ConstructionBanner from "@/components/construction-banner";

export default function BlogPage() {
  return (
    <main className="page-main content-width">
      <header className="page-intro">
        <p className="eyebrow">The journal</p>
        <h1>Thoughts worth keeping.</h1>
        <p>Small observations, longer stories, and notes from whatever has caught my attention lately.</p>
      </header>
      <ConstructionBanner message="The journal is not published yet. The entries below are sample copy and will be replaced as stories are ready." />
      <section className="page-content" aria-label="Recent writing">
        <div className="post-list">
          <article className="post-row">
            <time className="post-date" dateTime="2026-10-12">12 October 2026</time>
            <div><h2>Notes from the long way round</h2><p>On getting lost, looking up, and letting a day unfold at its own pace.</p></div>
          </article>
          <article className="post-row">
            <time className="post-date" dateTime="2026-09-04">4 September 2026</time>
            <div><h2>The case for making things slowly</h2><p>A reminder that the best parts of a project are often the bits you didn’t plan.</p></div>
          </article>
          <article className="post-row">
            <time className="post-date" dateTime="2026-07-19">19 July 2026</time>
            <div><h2>A Sunday with nowhere to be</h2><p>Good bread, an open window, and the luxury of an unhurried afternoon.</p></div>
          </article>
        </div>
      </section>
    </main>
  );
}