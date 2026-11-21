export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  image?: string;
  paragraphs: string[];
  linkUrl?: string;
  linkLabel?: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  category: "Software" | "Non-software";
  status: "Live" | "In development" | "Writing" | "At the table";
  url?: string;
  sourceUrl?: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "the-cadence-saints",
    title: "The Cadence Saints",
    description:
      "An update on A Weight of Many, progress on the next book, and a thank-you to readers.",
    datePublished: "2026-11-21",
    readingTime: "2 min read",
    paragraphs: [
      "I’m pleased to share that the first book in The Cadence Saints series, A Weight of Many, is now available for sale.",
      "Work on the second book has begun. I’m aiming to finish it by the end of 2027, though development has to fit around my full-time work as a software developer. I’m sorry progress isn’t always as quick as I would like.",
      "Thank you to everyone who has read A Weight of Many or taken an interest in the series. If you enjoyed it, please consider leaving a review; honest reviews help other readers discover the book and mean a great deal to me.",
    ],
    linkUrl: "https://amzn.eu/d/09vWLaPq",
    linkLabel: "Get A Weight of Many",
  },
];

export const projects: Project[] = [
  {
    slug: "mikechara-co-uk",
    name: "MikeChara.co.uk",
    description: "A personal website bringing together writing, projects, and recipes.",
    category: "Software",
    status: "In development",
  },
  {
    slug: "ice-skating-coach",
    name: "Ice skating coach",
    description: "A website for Coach Chantelle, offering ice skating lessons in Slough.",
    category: "Software",
    status: "Live",
    url: "https://coachchantelle.app",
    sourceUrl: "https://github.com/MikeChara/iceskatingcoach",
  },
  {
    slug: "the-journal",
    name: "The journal",
    description: "Personal stories, field notes, and ideas still finding their shape.",
    category: "Non-software",
    status: "Writing",
  },
  {
    slug: "the-recipe-box",
    name: "The recipe box",
    description: "A growing collection of favourite meals and well-used recipes.",
    category: "Non-software",
    status: "At the table",
  },
];

export function getJournalPostBySlug(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
