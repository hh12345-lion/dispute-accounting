import { services } from "./services";
import { caseTypes } from "./case-types";
import { sectors } from "./sectors";

export const navServiceLinks = services.map((s) => ({
  href: `/services#${s.id}`,
  label: s.name,
}));

export const navDisputeTypeLinks = [
  { href: "/dispute-types", label: "All Dispute Types, Overview" },
  {
    href: "/dispute-types#commercial-contract-disputes",
    label: "Commercial Contract Disputes",
  },
  {
    href: "/dispute-types#shareholder-disputes",
    label: "Shareholder Disputes",
  },
  {
    href: "/dispute-types#fraud-financial-crime",
    label: "Fraud & Financial Crime",
  },
  {
    href: "/dispute-types#ma-transaction-disputes",
    label: "M&A Transaction Disputes",
  },
  {
    href: "/dispute-types#matrimonial-financial-disputes",
    label: "Matrimonial Financial Disputes",
  },
  {
    href: "/dispute-types#insolvency-administration",
    label: "Insolvency & Administration",
  },
  {
    href: "/dispute-types#partnership-disputes",
    label: "Partnership Disputes",
  },
  {
    href: "/dispute-types#professional-negligence",
    label: "Professional Negligence",
  },
  { href: "/dispute-types#tax-disputes-hmrc", label: "Tax Disputes (HMRC)" },
  {
    href: "/dispute-types#insurance-business-interruption",
    label: "Insurance & Business Interruption",
  },
];

export const navCaseTypeLinks = caseTypes.map((c) => ({
  href: `/case-types/${c.slug}`,
  label: c.title,
}));

export const navSectorLinks = sectors.map((s) => ({
  href: `/sectors/${s.slug}`,
  label: s.title,
}));

/** Desktop Resources dropdown, Guides, How to Instruct, Qualifications only */
export const navResourcesMenuLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

/** Footer & secondary links */
export const navResourceLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/faq", label: "FAQ" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/what-is-dispute-accounting", label: "What Is Dispute Accounting?" },
];

export const whoWeHelpItems = [
  { href: "/who-we-help", label: "Overview" },
  { href: "/who-we-help/solicitors-law-firms", label: "Solicitors & Law Firms" },
  {
    href: "/who-we-help/businesses-individuals",
    label: "Businesses & Individuals",
  },
];
