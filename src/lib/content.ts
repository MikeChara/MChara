export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  image?: string;
  paragraphs: string[];
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
    slug: "notes-from-the-long-way-round",
    title: "Notes from the long way round",
    description: "On getting lost, looking up, and letting a day unfold at its own pace.",
    datePublished: "2026-10-12",
    readingTime: "6 min read",
    paragraphs: [
      "The quickest route is not always the one that leaves the most room for noticing. A small change of direction can turn an ordinary journey into a collection of details worth remembering.",
      "I am learning to treat curiosity as useful information rather than distraction. It is often the detour that reveals where an idea really wants to go.",
    ],
  },
  {
    slug: "the-case-for-making-things-slowly",
    title: "The case for making things slowly",
    description: "A reminder that the best parts of a project are often the bits you did not plan.",
    datePublished: "2026-09-04",
    readingTime: "5 min read",
    paragraphs: [
      "Making slowly creates time to notice whether the original plan still makes sense. Good work rarely follows a perfectly straight line.",
      "The pauses are part of the process: a place to test, revise, discard, and begin again with a little more understanding.",
    ],
  },
  {
    slug: "a-sunday-with-nowhere-to-be",
    title: "A Sunday with nowhere to be",
    description: "Good bread, an open window, and the luxury of an unhurried afternoon.",
    datePublished: "2026-07-19",
    readingTime: "4 min read",
    paragraphs: [
      "An empty afternoon can feel strange before it feels restful. Once the day stops asking to be optimised, small rituals begin to take up the space.",
      "Fresh bread, an open window, and no particular deadline are a modest collection of things. Together, they are enough.",
    ],
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
