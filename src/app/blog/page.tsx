import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blog";

export const metadata = createMetadata({
  title: "Blog | Dispute Accounting Insights for Solicitors",
  description:
    "Practical articles on dispute accounting, financial records, forensic analysis, and instructing experts in commercial litigation.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        title="Blog"
        subtitle="Practical insights on dispute accounting, financial evidence, and instructing forensic accountants in commercial disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[var(--radius-card)] border border-border border-l-4 border-l-accent bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-muted)]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                  {post.datePublished}
                </p>
                <h2 className="font-display mt-2 text-lg font-semibold text-heading">
                  {post.title}
                </h2>
                <p className="mt-2 text-body leading-relaxed">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
