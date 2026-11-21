import type { Metadata } from "next";
import Link from "next/link";
import { authorBookJsonLd, serializeJsonLd, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Mike Chara | Author of A Weight of Many",
    template: "%s | Mike Chara",
  },
  description:
    "The official website of author Mike Chara. A Weight of Many is the released book in The Cadence Saints series. Also home to stories, projects, and recipes.",
  authors: [{ name: "Mike Chara", url: siteUrl.toString() }],
  creator: "Mike Chara",
  publisher: "Mike Chara",
  keywords: [
    "Mike Chara",
    "A Weight of Many",
    "The Cadence Saints",
    "author",
    "books",
    "recipes",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Mike Chara",
    title: "Mike Chara | Author of A Weight of Many",
    description:
      "Stories, projects, and recipes from Mike Chara, author of The Cadence Saints series.",
  },
  twitter: {
    card: "summary",
    title: "Mike Chara | Author of A Weight of Many",
    description:
      "The official website of Mike Chara, author of The Cadence Saints series.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(authorBookJsonLd),
          }}
        />
        <div className="site-shell">
          <header className="site-header">
            <Link className="wordmark" href="/" aria-label="Mike Chara home">
              <span className="wordmark-mark">MC</span>
              <span>Mike Chara</span>
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/blog">Journal</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/recipes">Recipes</Link>
            </nav>
            <Link className="header-note" href="/about">
              A little about me <span aria-hidden="true">↗</span>
            </Link>
          </header>
          {children}
          <footer className="site-footer">
            <Link className="footer-wordmark" href="/">
              Mike Chara
            </Link>
            <p>Stories, good things, and something worth sharing.</p>
            <div className="footer-links">
              <Link href="/blog">Journal</Link>
              <Link href="/projects">Elsewhere</Link>
              <Link href="/recipes">The recipe box</Link>
            </div>
            <span className="copyright">
              © {new Date().getFullYear()} Mike Chara
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
