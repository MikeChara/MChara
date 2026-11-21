export const siteUrl = new URL("https://mikechara.co.uk");

const authorId = `${siteUrl.toString()}#mike-chara`;
const seriesId = `${siteUrl.toString()}#the-cadence-saints`;

export const authorBookJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl.toString()}#website`,
      url: siteUrl.toString(),
      name: "Mike Chara",
      inLanguage: "en-GB",
      publisher: { "@id": authorId },
    },
    {
      "@type": "Person",
      "@id": authorId,
      name: "Mike Chara",
      url: siteUrl.toString(),
      jobTitle: "Author",
      workExample: { "@id": `${siteUrl.toString()}#a-weight-of-many` },
    },
    {
      "@type": "BookSeries",
      "@id": seriesId,
      name: "The Cadence Saints",
      author: { "@id": authorId },
    },
    {
      "@type": "Book",
      "@id": `${siteUrl.toString()}#a-weight-of-many`,
      name: "A Weight of Many",
      author: { "@id": authorId },
      isPartOf: { "@id": seriesId },
    },
  ],
};

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}