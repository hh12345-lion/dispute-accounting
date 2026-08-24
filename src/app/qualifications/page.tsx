import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { CPR_PART_35_CONTENT, FPR_PART_25_CONTENT } from "@/data/shared-content";

export const metadata = createMetadata({
  title: "Dispute Accounting Qualifications | ACA, CFE & Forensic Credentials",
  description:
    "What credentials should a dispute accountant hold? ACA, FCA, CFE, CIMA, ACCA, and CPR Part 35 compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Qualifications", path: "/qualifications" },
        ])}
      />
      <PageHero
        title="Dispute Accounting Qualifications & Credentials"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Core Credentials</h2>
          <h3>ACA / FCA (ICAEW)</h3>
          <p>
            Primary chartered accountancy qualification, essential baseline
            for dispute accountants providing expert witness evidence on
            accounting matters.
          </p>
          <h3>ACCA / FCCA</h3>
          <p>
            Association of Chartered Certified Accountants, widely recognised
            in litigation and international arbitration.
          </p>
          <h3>CFE (Certified Fraud Examiner)</h3>
          <p>
            Issued by ACFE, the primary credential for fraud investigation and
            forensic accounting in civil and criminal proceedings.
          </p>
          <h3>CIMA / FCMA</h3>
          <p>
            Chartered Institute of Management Accountants, relevant for
            management accounting disputes and financial modelling in loss
            quantification.
          </p>
          <h3>CFA (Chartered Financial Analyst)</h3>
          <p>
            Relevant for valuation-heavy dispute accounting and investment
            disputes in financial services.
          </p>
          <h3>ICAEW Forensic & Expert Witness Accreditation</h3>
          <p>
            ICAEW&apos;s specialist accreditation for forensic accounting and
            expert witness work.
          </p>
          <h3>Fellow of Expert Witness Institute (FEWI)</h3>
          <p>Leading expert witness professional body.</p>

          <h2>Experience Requirements</h2>
          <ul>
            <li>Active professional practice</li>
            <li>10+ years forensic / dispute accounting experience</li>
            <li>CPR Part 35 report history</li>
            <li>Prior court or arbitration testimony</li>
            <li>Professional indemnity insurance</li>
          </ul>

          <h2>CPR Part 35 & FPR Part 25</h2>
          {CPR_PART_35_CONTENT.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <p>{FPR_PART_25_CONTENT}</p>

          <h2>Red Flags</h2>
          <ul>
            <li>Full-time expert witness with no active practice</li>
            <li>No prior court testimony</li>
            <li>Cannot explain methodology clearly to non-accountants</li>
            <li>Prior adverse judicial comments on methodology</li>
            <li>No professional indemnity insurance</li>
          </ul>
          <p>
            <Link href="/how-to-instruct" className="text-accent">
              How to instruct →
            </Link>
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
