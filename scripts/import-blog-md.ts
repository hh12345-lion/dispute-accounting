/**
 * One-off helper: convert the financial-records markdown into src/data/blog.ts
 * Run: npx tsx scripts/import-blog-md.ts
 */
import fs from "fs";
import path from "path";

const mdPath =
  process.argv[2] ||
  path.join(
    process.env.USERPROFILE || "",
    "Downloads",
    "what-financial-records-matter-in-commerical-dispute 1.md",
  );

const raw = fs.readFileSync(mdPath, "utf8");
const lines = raw.replace(/\r\n/g, "\n").split("\n");

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "disclaimer"; text: string };

function rewriteLinks(text: string): string {
  return text
    .replace(/https:\/\/disputeaccounting\.com\/dispute-types\/?/g, "/dispute-types")
    .replace(
      /https:\/\/disputeaccounting\.com\/guides\/loss-quantification-guide\/?/g,
      "/guides/loss-quantification-guide",
    )
    .replace(
      /https:\/\/disputeaccounting\.com\/guides\/instructing-dispute-accountant\/?/g,
      "/guides/instructing-dispute-accountant",
    );
}

const blocks: Block[] = [];
let i = 0;
let title = "";
let lastReviewed = "September 2026";

while (i < lines.length) {
  const line = lines[i];
  if (line.startsWith("# ")) {
    title = line.slice(2).trim();
    i++;
    continue;
  }
  if (line.startsWith("## ")) {
    blocks.push({ type: "h2", text: line.slice(3).trim() });
    i++;
    continue;
  }
  if (line.startsWith("### ")) {
    blocks.push({ type: "h3", text: line.slice(4).trim() });
    i++;
    continue;
  }
  if (line.startsWith("- ")) {
    const items: string[] = [];
    while (i < lines.length && lines[i].startsWith("- ")) {
      items.push(rewriteLinks(lines[i].slice(2).trim()));
      i++;
    }
    blocks.push({ type: "ul", items });
    continue;
  }
  if (line.startsWith("**Disclaimer:**")) {
    blocks.push({ type: "disclaimer", text: rewriteLinks(line.replace(/^\*\*Disclaimer:\*\*\s*/, "").trim()) });
    i++;
    continue;
  }
  if (line.startsWith("*Last Reviewed:")) {
    lastReviewed = line.replace(/^\*Last Reviewed:\s*/, "").replace(/\*$/, "").trim();
    i++;
    continue;
  }
  if (!line.trim()) {
    i++;
    continue;
  }
  // paragraph (may span until blank)
  const paras: string[] = [];
  while (i < lines.length && lines[i].trim() && !lines[i].startsWith("#") && !lines[i].startsWith("- ") && !lines[i].startsWith("*") && !lines[i].startsWith("**Disclaimer")) {
    paras.push(lines[i].trim());
    i++;
  }
  if (paras.length) {
    blocks.push({ type: "p", text: rewriteLinks(paras.join(" ")) });
  }
}

const excerpt =
  blocks.find((b) => b.type === "p")?.type === "p"
    ? (blocks.find((b) => b.type === "p") as { type: "p"; text: string }).text
    : "";

const metaDescription =
  "Key financial records in commercial disputes: statutory accounts, management accounts, ledgers, bank statements, invoices, forecasts, and how solicitors should organise them for expert review.";

const out = `import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "what-financial-records-matter-in-commercial-dispute",
    title: ${JSON.stringify(title)},
    h1: ${JSON.stringify(title)},
    metaTitle: "Financial Records in Commercial Disputes | Dispute Accounting Blog",
    metaDescription: ${JSON.stringify(metaDescription)},
    datePublished: "2026-09-17",
    dateModified: "2026-09-17",
    lastReviewed: ${JSON.stringify(lastReviewed)},
    excerpt: ${JSON.stringify(excerpt.slice(0, 220) + (excerpt.length > 220 ? "…" : ""))},
    image: "/blog/financial-records-commercial-dispute.jpg",
    imageAlt: "Professional reviewing financial documents and calculating figures for a commercial dispute",
    relatedLinks: [
      { href: "/dispute-types", label: "Types of Accounting Disputes" },
      { href: "/guides/loss-quantification-guide", label: "Loss Quantification Guide" },
      { href: "/guides/instructing-dispute-accountant", label: "Instructing a Dispute Accountant" },
      { href: "/guides", label: "All Guides" },
      { href: "/contact", label: "Contact" },
    ],
    blocks: ${JSON.stringify(blocks, null, 6).replace(/^/gm, "    ").trimStart()},
  },
];

export const blogSlugs = blogPosts.map((p) => p.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
`;

const dest = path.join(process.cwd(), "src/data/blog.ts");
fs.writeFileSync(dest, out);
console.log("Wrote", dest, "blocks:", blocks.length);
