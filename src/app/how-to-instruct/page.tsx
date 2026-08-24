import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { SJE_VS_PAE_CONTENT } from "@/data/shared-content";

export const metadata = createMetadata({
  title: "How to Instruct a Dispute Accountant | Step-by-Step Guide",
  description:
    "Step-by-step guide on finding, vetting, and instructing the right dispute accountant for your case, for solicitors and businesses.",
  path: "/how-to-instruct",
});

const solicitorSteps = [
  {
    title: "Identify the Accounting Issue",
    content:
      "Loss quantification? Valuation? Fraud investigation? Completion accounts review? Each determines the expert profile needed.",
  },
  {
    title: "Civil or Family?",
    content:
      "CPR Part 35 for civil proceedings or FPR Part 25 for family financial remedy? Court permission may be required before expert evidence is adduced.",
  },
  {
    title: "SJE or PAE?",
    content:
      "Has the court directed a Single Joint Expert, or will each party appoint their own expert?",
  },
  {
    title: "Credentials Check",
    content:
      "ACA for accounting; CFE for fraud; ICAEW/CFA for valuation; sector experience relevant to the dispute.",
  },
  {
    title: "Preliminary Review",
    content:
      "Most dispute accountants offer an initial review to assess whether expert evidence adds value before formal instruction.",
  },
  {
    title: "Letter of Instruction",
    content:
      "Scope, specific questions, documents, and timetable. Joint letter for SJE appointments.",
  },
  {
    title: "Provide Documents",
    content:
      "Accounts, contracts, correspondence, management information, and any opposing expert reports for rebuttal.",
  },
];

const businessSteps = [
  {
    title: "Describe the Financial Issue",
    content:
      "What do you believe has gone wrong? Fraud, shareholder conflict, M&A dispute, or contract loss?",
  },
  {
    title: "Gather Financial Records",
    content:
      "Accounts, bank statements, contracts, and correspondence, the dispute accountant needs these for preliminary assessment.",
  },
  {
    title: "Preliminary Review",
    content:
      "A dispute accountant can assess whether formal expert evidence is needed and whether to engage solicitors.",
  },
  {
    title: "Investigation or Report",
    content:
      "Scope may be investigative (fact-finding) or report-focused (court-ready expert evidence).",
  },
  {
    title: "Engage Solicitors if Needed",
    content:
      "The dispute accountant can liaise with your solicitors if proceedings follow, providing continuity of analysis.",
  },
  {
    title: "Written Agreement",
    content:
      "Agree scope and deliverables in writing before work commences.",
  },
  {
    title: "Ongoing Advisory",
    content:
      "Dispute accountants can support negotiation and settlement throughout the dispute process.",
  },
];

const timeline = [
  ["Day 1–3", "Enquiry submitted", "Initial response within 1 business day"],
  ["Week 1", "Preliminary review", "Scope agreed"],
  ["Week 1–2", "Instruction letter signed", "Documents provided"],
  ["Weeks 2–8", "Analysis and investigation", "Interim queries addressed"],
  ["Weeks 4–12", "Draft report", "Comments incorporated"],
  ["Final", "Signed report", "Disclosure / exchange per court timetable"],
];

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to Instruct", path: "/how-to-instruct" },
        ])}
      />
      <PageHero
        title="How to Instruct a Dispute Accountant"
        subtitle="A step-by-step guide for legal teams and for businesses facing financial disputes, from preliminary review to CPR Part 35 compliant expert reports."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How to Instruct" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Section 1: For Solicitors</h2>
          {solicitorSteps.map((step, i) => (
            <div key={step.title}>
              <h3>
                Step {i + 1}, {step.title}
              </h3>
              <p>{step.content}</p>
            </div>
          ))}

          <h2>Section 2: For Businesses</h2>
          <p>
            Businesses and individuals can instruct a dispute accountant
            directly, you do not always need a solicitor first. The dispute
            accountant can work with you to understand the financial position,
            then liaise with solicitors if formal proceedings are warranted.
          </p>
          {businessSteps.map((step, i) => (
            <div key={step.title}>
              <h3>
                Step {i + 1}, {step.title}
              </h3>
              <p>{step.content}</p>
            </div>
          ))}

          <h2>Typical Engagement Timeline</h2>
        </article>
        <ResponsiveTable className="mx-auto mt-4 max-w-3xl">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Stage
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Activity
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Outcome
                </th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row) => (
                <tr key={row[0]}>
                  <td className="border border-border px-4 py-3 text-body">
                    {row[0]}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {row[1]}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>

        <article className="prose-content mx-auto mt-10 max-w-3xl">
          <h2>SJE vs Party-Appointed</h2>
          {SJE_VS_PAE_CONTENT.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}

          <h2>Red Flags When Selecting an Expert</h2>
          <ul>
            <li>No active professional practice</li>
            <li>Cannot provide examples of CPR Part 35 reports</li>
            <li>Unwilling to confirm independence in writing</li>
            <li>No professional indemnity insurance</li>
            <li>Scope or timetable promises that seem unrealistic without explanation</li>
          </ul>
          <p>
            <Link href="/guides/instructing-dispute-accountant" className="text-accent">
              Solicitor&apos;s instruction guide →
            </Link>{" "}
            |{" "}
            <Link href="/qualifications" className="text-accent">
              Qualifications →
            </Link>
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
