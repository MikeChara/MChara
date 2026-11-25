import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { breadcrumbJsonLd, createPageMetadata, webpageJsonLd } from "@/lib/seo";
import ContactForm from "./contact-form";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Mike Chara about writing, software projects, client websites, or other enquiries.",
  path: "/contact",
  keywords: ["Contact Mike Chara", "Mike Chara email", "web developer"],
  type: "website",
});

export default function ContactPage() {
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webpageJsonLd({
        name: "Contact Mike Chara",
        description: "Send Mike Chara a message.",
        path: "/contact",
        type: "AboutPage",
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };

  return (
    <main className="page-main content-width">
      <JsonLd data={pageJsonLd} />
      <header className="page-intro contact-intro">
        <p className="eyebrow">Get in touch</p>
        <h1>Contact me.</h1>
        <p>
          Send a note about a project, a question, or something else you think
          should be on my radar.
        </p>
      </header>
      <section className="contact-layout" aria-label="Contact details and form">
        <aside className="contact-details">
          <p className="eyebrow">Email</p>
          <a href="mailto:mikejchara@gmail.com">mikejchara@gmail.com</a>
          <p>
            I’ll read every message and aim to reply as soon as I reasonably
            can.
          </p>
        </aside>
        <ContactForm
          siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        />
      </section>
    </main>
  );
}
