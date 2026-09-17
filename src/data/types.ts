export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentPage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  relatedLinks?: { href: string; label: string }[];
}

export interface GuidePage extends ContentPage {
  aboutServiceId?: string;
  sections: { heading: string; content: string }[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "disclaimer"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  relatedLinks?: { href: string; label: string }[];
  blocks: BlogBlock[];
}
