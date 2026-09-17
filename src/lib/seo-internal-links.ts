import type { ContentPage } from "@/data/types";
import { services } from "@/data/services";
import { navCaseTypeLinks } from "@/data/nav";

export type RelatedLink = { href: string; label: string };
type Link = RelatedLink;

const CONTACT_LINK: Link = { href: "/contact", label: "Contact" };
const INSTRUCT_LINK: Link = {
  href: "/how-to-instruct",
  label: "How to Instruct",
};
const DISPUTE_TYPES_LINK: Link = {
  href: "/dispute-types",
  label: "Types of Accounting Disputes",
};

const STANDARD_CASE_TYPE_LINKS: Link[] = [
  DISPUTE_TYPES_LINK,
  INSTRUCT_LINK,
  CONTACT_LINK,
];

const STANDARD_SECTOR_LINKS: Link[] = [
  DISPUTE_TYPES_LINK,
  { href: "/qualifications", label: "Qualifications" },
  CONTACT_LINK,
];

const STANDARD_GUIDE_LINKS: Link[] = [
  { href: "/guides", label: "All Guides" },
  DISPUTE_TYPES_LINK,
  { href: "/who-we-help", label: "Who We Help" },
  INSTRUCT_LINK,
  CONTACT_LINK,
];

const STANDARD_BLOG_LINKS: Link[] = [
  { href: "/blog", label: "All Blog Posts" },
  { href: "/guides", label: "Guides" },
  DISPUTE_TYPES_LINK,
  INSTRUCT_LINK,
  CONTACT_LINK,
];

export const DISPUTE_TYPES_PAGE_LINKS: Link[] = [
  { href: "/case-types", label: "All Case Types" },
  ...navCaseTypeLinks,
  { href: "/services", label: "All Services" },
  ...services.map((s) => ({
    href: `/services#${s.id}`,
    label: s.name,
  })),
  { href: "/glossary", label: "Glossary" },
  { href: "/who-we-help", label: "Who We Help" },
  { href: "/who-we-help/solicitors-law-firms", label: "For Solicitors" },
  {
    href: "/who-we-help/businesses-individuals",
    label: "For Businesses",
  },
  INSTRUCT_LINK,
  CONTACT_LINK,
];

export const HOMEPAGE_SEO_LINKS: Link[] = [
  DISPUTE_TYPES_LINK,
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  CONTACT_LINK,
];

export const SOLICITORS_PAGE_LINKS: Link[] = [
  { href: "/case-types", label: "All Case Types" },
  ...navCaseTypeLinks,
  INSTRUCT_LINK,
  { href: "/qualifications", label: "Qualifications" },
  {
    href: "/guides/instructing-dispute-accountant",
    label: "Instructing a Dispute Accountant",
  },
  CONTACT_LINK,
];

export const BUSINESS_PAGE_LINKS: Link[] = [
  { href: "/case-types/fraud-financial-crime", label: "Fraud & Financial Crime" },
  { href: "/case-types/shareholder-disputes", label: "Shareholder Disputes" },
  { href: "/case-types/ma-transaction-disputes", label: "M&A Disputes" },
  {
    href: "/case-types/matrimonial-financial-disputes",
    label: "Matrimonial Financial",
  },
  { href: "/case-types/partnership-disputes", label: "Partnership Disputes" },
  {
    href: "/case-types/insurance-business-interruption",
    label: "Insurance & BI",
  },
  { href: "/what-is-dispute-accounting", label: "What Is Dispute Accounting?" },
  DISPUTE_TYPES_LINK,
  CONTACT_LINK,
];

const REQUIRED_CASE_TYPE_LINKS: Record<string, Link[]> = {
  "commercial-contract-disputes": [
    { href: "/guides/loss-quantification-guide", label: "Loss Quantification Guide" },
    { href: "/services#loss-quantification", label: "Loss Quantification Service" },
    { href: "/glossary#hadley-v-baxendale", label: "Hadley v Baxendale" },
    { href: "/dispute-types#commercial-contract-disputes", label: "Dispute Types Overview" },
  ],
  "shareholder-disputes": [
    { href: "/guides/shareholder-dispute-accounting-guide", label: "Shareholder Dispute Guide" },
    { href: "/services#business-share-valuation", label: "Business & Share Valuation" },
    { href: "/glossary#s994-petition", label: "S994 Petition" },
    { href: "/who-we-help/solicitors-law-firms", label: "For Solicitors" },
    { href: "/dispute-types#shareholder-disputes", label: "Dispute Types Overview" },
  ],
  "fraud-financial-crime": [
    { href: "/guides/fraud-investigation-civil-recovery", label: "Fraud Investigation Guide" },
    { href: "/services#fraud-investigation", label: "Fraud Investigation" },
    { href: "/services#asset-tracing", label: "Asset Tracing" },
    { href: "/glossary#poca", label: "POCA" },
    { href: "/dispute-types#fraud-financial-crime", label: "Dispute Types Overview" },
  ],
  "ma-transaction-disputes": [
    { href: "/guides/ma-dispute-accounting-guide", label: "M&A Dispute Guide" },
    { href: "/services#ma-transaction-disputes", label: "M&A Dispute Accounting" },
    { href: "/glossary#completion-accounts", label: "Completion Accounts" },
    { href: "/dispute-types#ma-transaction-disputes", label: "Dispute Types Overview" },
  ],
  "matrimonial-financial-disputes": [
    { href: "/services#matrimonial-financial", label: "Matrimonial Financial" },
    { href: "/services#business-share-valuation", label: "Business Valuation" },
    { href: "/qualifications", label: "FPR Part 25 Qualifications" },
    { href: "/dispute-types#matrimonial-financial-disputes", label: "Dispute Types Overview" },
  ],
  "insolvency-administration": [
    { href: "/dispute-types#insolvency-administration", label: "Dispute Types Overview" },
    { href: "/services#business-share-valuation", label: "Asset Valuation" },
    { href: "/glossary#wrongful-trading-s214", label: "Wrongful Trading (s214)" },
  ],
  "partnership-disputes": [
    { href: "/sectors/professional-practices", label: "Professional Practices" },
    { href: "/services#shareholder-partnership-disputes", label: "Partnership Disputes" },
    { href: "/dispute-types#partnership-disputes", label: "Dispute Types Overview" },
  ],
  "professional-negligence": [
    { href: "/guides/loss-quantification-guide", label: "Loss Quantification Guide" },
    { href: "/services#loss-quantification", label: "Loss Quantification" },
    { href: "/glossary#saamco-principle", label: "SAAMCo Principle" },
    { href: "/dispute-types#professional-negligence", label: "Dispute Types Overview" },
  ],
  "tax-disputes-hmrc": [
    { href: "/services#business-share-valuation", label: "Business Valuation" },
    { href: "/sectors/financial-services", label: "Financial Services" },
    { href: "/qualifications", label: "Qualifications" },
    { href: "/dispute-types#tax-disputes-hmrc", label: "Dispute Types Overview" },
  ],
  "insurance-business-interruption": [
    { href: "/services#loss-quantification", label: "Loss Quantification" },
    { href: "/sectors/retail-hospitality", label: "Retail & Hospitality" },
    {
      href: "/dispute-types#insurance-business-interruption",
      label: "Dispute Types Overview",
    },
  ],
};

const REQUIRED_SECTOR_LINKS: Record<string, Link[]> = {
  "financial-services": [
    { href: "/case-types/fraud-financial-crime", label: "Fraud & Financial Crime" },
    { href: "/glossary#isda-master-agreement", label: "ISDA Master Agreement" },
    { href: "/services#business-share-valuation", label: "Business Valuation" },
  ],
  "construction-engineering": [
    { href: "/case-types/commercial-contract-disputes", label: "Commercial Contract Disputes" },
    { href: "/guides/loss-quantification-guide", label: "Loss Quantification Guide" },
    { href: "/glossary#emden-formula", label: "Emden Formula" },
  ],
  "technology-software": [
    { href: "/case-types/ma-transaction-disputes", label: "M&A Transaction Disputes" },
    { href: "/case-types/commercial-contract-disputes", label: "Commercial Contract Disputes" },
  ],
  "professional-practices": [
    { href: "/case-types/partnership-disputes", label: "Partnership Disputes" },
    { href: "/case-types/shareholder-disputes", label: "Shareholder Disputes" },
  ],
  "retail-hospitality": [
    { href: "/case-types/insurance-business-interruption", label: "Insurance & BI" },
    { href: "/case-types/commercial-contract-disputes", label: "Commercial Contract Disputes" },
  ],
  "manufacturing-supply-chain": [
    { href: "/case-types/commercial-contract-disputes", label: "Commercial Contract Disputes" },
    { href: "/services#loss-quantification", label: "Loss Quantification" },
  ],
};

const REQUIRED_GUIDE_LINKS: Record<string, Link[]> = {
  "what-forensic-accountants-do-disputes": [
    { href: "/what-is-dispute-accounting", label: "What Is Dispute Accounting?" },
    { href: "/services#expert-witness-reports", label: "Expert Witness Reports" },
    { href: "/qualifications", label: "Qualifications" },
  ],
  "loss-quantification-guide": [
    { href: "/case-types/commercial-contract-disputes", label: "Commercial Contract Disputes" },
    { href: "/services#loss-quantification", label: "Loss Quantification Service" },
    { href: "/glossary#but-for-analysis", label: "But-For Analysis" },
  ],
  "fraud-investigation-civil-recovery": [
    { href: "/case-types/fraud-financial-crime", label: "Fraud & Financial Crime" },
    { href: "/services#fraud-investigation", label: "Fraud Investigation" },
    { href: "/glossary#norwich-pharmacal", label: "Norwich Pharmacal Order" },
  ],
  "shareholder-dispute-accounting-guide": [
    { href: "/case-types/shareholder-disputes", label: "Shareholder Disputes" },
    { href: "/who-we-help/solicitors-law-firms", label: "For Solicitors" },
    { href: "/glossary#s994-petition", label: "S994 Petition" },
  ],
  "ma-dispute-accounting-guide": [
    { href: "/case-types/ma-transaction-disputes", label: "M&A Transaction Disputes" },
    { href: "/services#ma-transaction-disputes", label: "M&A Dispute Accounting" },
    { href: "/glossary#locked-box", label: "Locked Box Mechanism" },
  ],
  "instructing-dispute-accountant": [
    { href: "/how-to-instruct", label: "How to Instruct (full guide)" },
    { href: "/qualifications", label: "Qualifications" },
    { href: "/who-we-help/solicitors-law-firms", label: "For Solicitors" },
  ],
};

function mergeLinks(
  existing: Link[] | undefined,
  required: Link[],
  standard: Link[] = []
): Link[] {
  const seen = new Set<string>();
  const result: Link[] = [];
  for (const link of [...(existing ?? []), ...required, ...standard]) {
    if (!seen.has(link.href)) {
      seen.add(link.href);
      result.push(link);
    }
  }
  return result;
}

export function mergeCaseTypeLinks(slug: string, existing?: Link[]): Link[] {
  return mergeLinks(
    existing,
    REQUIRED_CASE_TYPE_LINKS[slug] ?? [
      { href: `/dispute-types#${slug}`, label: "Dispute Types Overview" },
    ],
    STANDARD_CASE_TYPE_LINKS
  );
}

export function mergeSectorLinks(slug: string, existing?: Link[]): Link[] {
  return mergeLinks(existing, REQUIRED_SECTOR_LINKS[slug] ?? [], STANDARD_SECTOR_LINKS);
}

export function mergeGuideLinks(slug: string, existing?: Link[]): Link[] {
  return mergeLinks(existing, REQUIRED_GUIDE_LINKS[slug] ?? [], STANDARD_GUIDE_LINKS);
}

export function mergeBlogLinks(_slug: string, existing?: Link[]): Link[] {
  return mergeLinks(existing, [], STANDARD_BLOG_LINKS);
}

export function getCaseTypeRelatedServices(page: ContentPage): Link[] {
  const map: Record<string, Link[]> = {
    "commercial-contract-disputes": [
      { href: "/services#loss-quantification", label: "Loss Quantification" },
    ],
    "shareholder-disputes": [
      { href: "/services#business-share-valuation", label: "Business & Share Valuation" },
      { href: "/services#shareholder-partnership-disputes", label: "Shareholder Disputes" },
    ],
    "fraud-financial-crime": [
      { href: "/services#fraud-investigation", label: "Fraud Investigation" },
      { href: "/services#asset-tracing", label: "Asset Tracing" },
    ],
    "ma-transaction-disputes": [
      { href: "/services#ma-transaction-disputes", label: "M&A Dispute Accounting" },
    ],
    "matrimonial-financial-disputes": [
      { href: "/services#matrimonial-financial", label: "Matrimonial Financial" },
    ],
    "insolvency-administration": [
      { href: "/services#business-share-valuation", label: "Business Valuation" },
    ],
    "partnership-disputes": [
      { href: "/services#shareholder-partnership-disputes", label: "Partnership Disputes" },
    ],
    "professional-negligence": [
      { href: "/services#loss-quantification", label: "Loss Quantification" },
    ],
    "tax-disputes-hmrc": [
      { href: "/services#business-share-valuation", label: "Business Valuation" },
    ],
    "insurance-business-interruption": [
      { href: "/services#loss-quantification", label: "Loss Quantification" },
    ],
  };
  return map[page.slug] ?? [];
}
