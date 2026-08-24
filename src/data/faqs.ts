import type { FAQ } from "./types";

export const faqs: FAQ[] = [
  {
    question: "What is dispute accounting?",
    answer:
      "Dispute accounting is the specialist application of forensic accounting, valuation, and financial investigation to legal disputes. A dispute accountant quantifies loss (quantum), traces misappropriated assets, values businesses and shareholdings, and prepares expert reports for courts, tribunals, and arbitration. Unlike routine audit or tax work, dispute accounting is adversarial in context: every figure must be supported by evidence, withstand cross-examination, and comply with applicable expert evidence rules.",
  },
  {
    question:
      "What is the difference between dispute accounting and forensic accounting?",
    answer:
      "Forensic accounting is the broader investigative discipline encompassing fraud detection, asset tracing, and litigation support. Dispute accounting is the subset focused on quantifying claims and producing court-admissible expert evidence in active litigation or arbitration. In practice the terms overlap considerably, most dispute accountants are forensic accountants, but not all forensic accountants give expert witness evidence.",
  },
  {
    question: "Which disputes need a dispute accountant?",
    answer:
      "Any dispute where the court or parties must determine a monetary figure beyond straightforward invoice claims typically requires a dispute accountant. Common examples include commercial breach of contract, shareholder unfair prejudice (S994), partnership dissolution, M&A completion accounts and earn-out disputes, matrimonial financial remedies, fraud and asset recovery, professional negligence, and insolvency office-holder claims.",
  },
  {
    question: "How does a dispute accountant differ from a regular accountant?",
    answer:
      "A regular accountant prepares accounts, tax returns, and audit opinions on a historical, non-adversarial basis. A dispute accountant works within a legal framework, addresses causation, remoteness, mitigation, and scope of duty, and produces reports for disclosure to the court and opposing party. They must maintain independence under the Ikarian Reefer duties and are subject to cross-examination, skills rarely required in general practice.",
  },
  {
    question: "What is CPR Part 35?",
    answer:
      "CPR Part 35 is the section of the Civil Procedure Rules governing expert evidence in civil proceedings. It requires experts to provide independent opinions, confirms their overriding duty to the court, and sets out rules on instructions, report format, joint expert meetings, and oral evidence. Practice Direction 35 contains the detailed requirements for report content and conduct.",
  },
  {
    question:
      "What is the difference between a Single Joint Expert (SJE) and a Party-Appointed Expert (PAE)?",
    answer:
      "A Single Joint Expert is appointed jointly by both parties or directed by the court to provide one opinion on a defined issue, reducing duplication of costs. A Party-Appointed Expert is instructed separately by each side and produces their own report, followed typically by a joint meeting and joint statement. SJE appointment suits narrower, agreed issues; PAE appointment is common in high-value disputes where each party wants independent analysis.",
  },
  {
    question: "What credentials should a dispute accountant hold?",
    answer:
      "Look for ACA or FCA (ICAEW), ACCA or FCCA, CFA, or CFE credentials with demonstrable forensic and litigation experience. For construction-related quantum, MRICS or FRICS is relevant. Beyond qualifications, the expert should have a track record of CPR Part 35 or FPR Part 25 compliant reports, professional indemnity insurance, and experience giving oral evidence. Sector expertise, financial services, property, technology, is often as important as the credential itself.",
  },
  {
    question: "Can a business instruct a dispute accountant without a solicitor?",
    answer:
      "A business may engage a dispute accountant directly for internal investigation, without-prejudice settlement discussions, or expert determination. For court proceedings, instruction is normally through solicitors so that privilege, disclosure obligations, and the letter of instruction comply with CPR Part 35. Direct instruction for litigation support is possible but the expert's report will be disclosable and the client should understand the limits of without-prejudice engagement.",
  },
  {
    question: "How early should I instruct a dispute accountant?",
    answer:
      "Instruct as early as possible, ideally at the pre-action protocol stage or immediately upon issuing proceedings, to allow adequate time for document review, analysis, and report preparation before court deadlines. Early instruction also allows the expert to advise on document preservation, the viability of the quantum claim, and whether additional disclosure should be sought before costs escalate.",
  },
  {
    question: "What documents should I provide when instructing a dispute accountant?",
    answer:
      "Provide the contract or constitutional documents, financial statements and management accounts for relevant periods, bank statements, correspondence relating to the dispute, and any existing expert or without-prejudice quantum correspondence. For shareholder disputes include board minutes and related-party schedules; for M&A disputes the SPA, completion accounts, and disclosure letter; for matrimonial cases Form E and tax returns. A clear letter of instruction setting out the legal framework and specific questions is essential.",
  },
  {
    question: "What is a shadow expert?",
    answer:
      "A shadow expert is retained by one party to advise solicitors and counsel on case strategy, critique the opposing expert's report, and assist with cross-examination, without producing a report for court disclosure or giving oral evidence. Shadow experts are valuable in complex quantum disputes but proper engagement terms must be observed, as their involvement may become disclosable in certain circumstances.",
  },
];

/** @deprecated Use `faqs` instead */
export const faqItems = faqs;
