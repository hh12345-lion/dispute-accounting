export interface Expert {
  name: string;
  jobTitle: string;
  description: string;
  credentials: string[];
}

export const experts: Expert[] = [
  {
    name: "Sarah Mitchell FCA CFE",
    jobTitle: "Lead Dispute Accountant, Fraud & Financial Crime",
    description:
      "Sarah is a Fellow of the Institute of Chartered Accountants in England and Wales and a Certified Fraud Examiner with over 18 years of forensic accounting experience. She specialises in fraud investigation, asset tracing, and expert witness reports in High Court commercial fraud proceedings. She has given oral evidence in fraud and civil recovery cases and has acted as Single Joint Expert in complex financial crime matters.",
    credentials: [
      "Fraud investigation",
      "Asset tracing",
      "POCA confiscation",
      "CPR Part 35 expert reports",
    ],
  },
  {
    name: "James Harrington ACA",
    jobTitle: "Dispute Accountant, Valuation & Shareholder Disputes",
    description:
      "James is an ICAEW chartered accountant with extensive experience in share valuation for unfair prejudice petitions under Companies Act 2006 s994, M&A completion accounts disputes, and matrimonial business valuations under FPR Part 25. He has prepared joint expert reports and given evidence in the Chancery Division and Family Court.",
    credentials: [
      "Share valuation",
      "M&A disputes",
      "Matrimonial business valuation",
      "S994 unfair prejudice",
    ],
  },
  {
    name: "Priya Sharma FCA CIMA",
    jobTitle: "Dispute Accountant, Loss Quantification & Commercial Disputes",
    description:
      "Priya combines ACA and CIMA qualifications with 15 years of dispute accounting practice focused on loss quantification in commercial contract disputes, insurance business interruption claims, and professional negligence matters. She is experienced in but-for modelling, Hadley v Baxendale remoteness analysis, and rebuttal of opposing accounting expert evidence.",
    credentials: [
      "Loss quantification",
      "Commercial contract disputes",
      "Business interruption",
      "Expert rebuttal reports",
    ],
  },
];
