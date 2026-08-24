import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema as buildProfessionalServiceSchema,
  serviceNode,
  websiteSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import { RelatedLinks } from "@/components/RelatedLinks";
import { HOMEPAGE_SEO_LINKS } from "@/lib/seo-internal-links";

const serviceCards = [
  { href: "/services#loss-quantification", title: "Loss Quantification & Quantum" },
  { href: "/services#fraud-investigation", title: "Fraud Investigation & Detection" },
  { href: "/services#asset-tracing", title: "Asset Tracing & Recovery" },
  { href: "/services#business-share-valuation", title: "Business & Share Valuation" },
  {
    href: "/services#shareholder-partnership-disputes",
    title: "Shareholder & Partnership Disputes",
  },
  { href: "/services#ma-transaction-disputes", title: "M&A Transaction Disputes" },
  { href: "/services#matrimonial-financial", title: "Matrimonial Financial Disputes" },
  { href: "/services#expert-witness-reports", title: "Expert Witness Reports & Testimony" },
];

const stats = [
  ["Global coverage", "Worldwide", "Cross-jurisdiction matters"],
  ["Court framework (civil)", "CPR Part 35", "Civil Procedure Rules"],
  ["Court framework (family)", "FPR Part 25", "Family Procedure Rules"],
  ["Primary credential", "ACA/FCA + CFE", "ICAEW / ACFE"],
  ["Expert roles", "PAE, SJE, Advisory", "Litigation & arbitration"],
  ["Typical report completion", "4–12 weeks", "Case-dependent"],
  ["Available as SJE", "Yes", "CPR 35.7"],
];

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      buildProfessionalServiceSchema(services.map((s) => s.name)),
      websiteSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <PageHero
        title="Dispute Accounting for Legal Teams & Businesses Worldwide"
        subtitle="When financial complexity meets legal conflict, you need forensic accountants who understand both accounting and litigation. DisputeAccounting connects legal teams and businesses globally with qualified dispute accountants for loss quantification, fraud investigation, asset tracing, and court-compliant expert reports."
      />
      <Section>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/who-we-help/solicitors-law-firms"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            I&apos;m a Legal Professional
          </Link>
          <Link
            href="/who-we-help/businesses-individuals"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-section-alt sm:w-auto"
          >
            I&apos;m a Business
          </Link>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
          What Our Dispute Accountants Cover
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <Card key={card.href} title={card.title} href={card.href} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
          Dispute Accounting: Key Facts
        </h2>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Metric
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Figure
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric}>
                  <td className="border border-border px-4 py-3 text-body">
                    {metric}
                  </td>
                  <td className="border border-border px-4 py-3 font-medium text-heading">
                    {figure}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>
        <p className="mt-4 text-sm text-body/80">
          Sources: Civil Procedure Rules Part 35; Association of Certified Fraud
          Examiners. Timelines vary by jurisdiction and case complexity.
        </p>
      </Section>

      <Section alt>
        <h2 className="font-display text-2xl font-semibold text-heading sm:text-3xl">
          Who Uses Dispute Accounting?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card
            title="Legal Teams & Law Firms"
            href="/who-we-help/solicitors-law-firms"
            description="Independent forensic accountants who produce court-compliant expert reports, give credible oral evidence, and withstand cross-examination in litigation and arbitration."
          />
          <Card
            title="Businesses & Individuals"
            href="/who-we-help/businesses-individuals"
            description="Facing fraud, shareholder conflict, or a failed transaction? A dispute accountant investigates and quantifies the financial position before or during proceedings."
          />
        </div>
        <p className="mt-8 text-body leading-relaxed">
          <strong className="text-heading">Dispute accounting</strong> applies
          accounting expertise to legal disputes — expert witness reports, loss
          quantification, fraud investigation, and more.{" "}
          <Link href="/what-is-dispute-accounting" className="text-accent underline">
            Read our full definition →
          </Link>{" "}
          or explore{" "}
          <Link href="/dispute-types" className="text-accent underline">
            types of accounting disputes
          </Link>
          .
        </p>
        <RelatedLinks links={HOMEPAGE_SEO_LINKS} title="Explore Further" />
      </Section>

      <CTASection />
    </>
  );
}
