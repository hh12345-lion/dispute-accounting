import type { GuidePage } from "./types";

const guides: GuidePage[] = [
  {
    slug: "what-forensic-accountants-do-disputes",
    title: "What Forensic Accountants Do in Disputes",
    h1: "What Forensic Accountants Do in Legal Disputes: A Complete Guide",
    metaTitle:
      "What Forensic Accountants Do in Legal Disputes | Dispute Accounting Guide",
    metaDescription:
      "Roles of dispute accountants in litigation: expert witness, investigator, shadow expert, SJE and expert determiner. When solicitors need each role and how they differ under CPR Part 35.",
    aboutServiceId: "expert-witness-reports",
    paragraphs: [
      "Dispute accounting is the application of forensic accounting expertise to legal disputes, quantifying loss, investigating financial misconduct, valuing businesses, and giving independent expert evidence to the court. The term encompasses every accounting-related role in litigation and arbitration, from pre-action advisory work through to trial testimony under CPR Part 35.",
      "Solicitors instruct dispute accountants in distinct capacities depending on the stage of the case, the forum, and whether the parties require a single independent opinion or adversarial expert evidence. Understanding which role is appropriate, and the duties that attach to each, is essential to effective case management and cost control.",
    ],
    sections: [
      {
        heading: "What Is a Dispute Accountant?",
        content:
          "A dispute accountant (often called a forensic accountant in legal contexts) is an accountant who specialises in applying accounting, auditing, and financial investigation skills to disputes. Unlike a general auditor, whose primary duty is to the company being audited, a dispute accountant instructed as an expert witness owes an overriding duty to the court under CPR Part 35.3, their opinion must be independent, objective, and based on sufficient data.\n\nDispute accountants typically hold qualifications such as ACA, FCA, ACCA, or CFA, with additional training in forensic accounting and expert witness report writing. Their work product ranges from preliminary case assessments and document review lists to full CPR Part 35 expert reports, oral evidence, and participation in joint expert meetings.",
      },
      {
        heading: "Expert Witness (Party-Appointed Expert)",
        content:
          "The party-appointed expert (PAE) is instructed by one solicitor to provide an independent expert report for use in proceedings. Under Practice Direction 35, the report must state the substance of all material instructions, identify matters of opinion, and set out the range of opinion where there is a material range.\n\nThe PAE's primary function is to assist the court on matters within their expertise, not to advocate for the instructing party. In practice, each side instructs its own expert; the court then compares competing reports, directs a joint statement of agreed and disputed issues, and may order a single joint expert if appropriate.\n\n| Role | Instructed by | Duty | Typical output |\n| --- | --- | --- | --- |\n| Party-appointed expert | One party's solicitor | Court (CPR 35.3) | Part 35 report, JSM, trial evidence |\n| Single joint expert | Both parties jointly | Court | One report for both parties |\n| Shadow expert | One party (advisory) | Instructing party | Advice not for court |\n| Expert determiner | Contractual appointment | Contract / scheme rules | Binding or advisory determination |",
      },
      {
        heading: "Fraud Investigator and Financial Investigator",
        content:
          "Where civil fraud, asset tracing, or undisclosed transactions are alleged, the dispute accountant acts as investigator before or alongside the expert witness role. Investigative work includes analysis of bank statements, general ledgers, related-party transactions, and forensic data analytics to identify suspicious patterns, hidden income, or diversion of assets.\n\nInvestigation findings may support Norwich Pharmacal applications, freezing injunctions, and disclosure orders. The investigator's report may remain privileged as litigation advice until the solicitor elects to rely on expert evidence. Careful separation between investigative work and expert witness duties avoids contamination of the expert's independence if the same individual later gives CPR Part 35 evidence.",
      },
      {
        heading: "Shadow Expert and Advisory Accountant",
        content:
          "A shadow expert (advisory accountant) is retained by one party to review the opponent's expert report, advise on weaknesses, prepare cross-examination questions, and assist the legal team in understanding financial issues. Shadow experts do not owe a duty to the court and their work is protected by litigation privilege, their reports are not disclosed to the opponent.\n\nShadow experts are valuable in high-value commercial, shareholder, and M&A disputes where the quantum report is lengthy and technically complex. They attend counsel conferences, contribute to without-prejudice settlement negotiations, and may draft supplemental questions for the joint experts' meeting. They must not be confused with the party-appointed expert: the shadow expert cannot give evidence at trial unless separately instructed as an expert witness.",
      },
      {
        heading: "Single Joint Expert and Expert Determiner",
        content:
          "A single joint expert (SJE) is instructed jointly by both parties under CPR 35.7 to provide one report on agreed questions. SJEs reduce cost where the quantum issues are narrow and both parties want an independent figure without full adversarial expert proceedings. The court may appoint an SJE if the parties cannot agree on joint instruction terms.\n\nAn expert determiner is appointed under a contractual expert determination clause, common in commercial contracts, construction subcontracts, and partnership agreements, to resolve defined disputes without litigation. The determination may be binding or advisory depending on the contract. ICAEW and RICS run expert determination schemes. The determiner's role is contractual rather than CPR Part 35, though the same financial expertise is required.\n\nSolicitors should select the role at instruction: pre-action advisory and shadow work for strategy; PAE or SJE once proceedings are issued; investigator where fraud or asset tracing is in issue; determiner where the contract mandates it.",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between a dispute accountant and an auditor?",
        answer:
          "An auditor expresses an opinion on whether financial statements give a true and fair view for a defined period. A dispute accountant analyses financial issues in a specific dispute, loss quantification, fraud, valuation, and may give expert evidence to the court. The dispute accountant's duty when acting as expert witness is to the court, not to the instructing client.",
      },
      {
        question: "When should a solicitor instruct a shadow expert?",
        answer:
          "Instruct a shadow expert when the opponent has served a substantial quantum or forensic report and the legal team needs independent advice on assumptions, methodology, and cross-examination without disclosing that analysis. Shadow experts are common in shareholder, M&A, and high-value commercial disputes.",
      },
    ],
    relatedLinks: [
      {
        href: "/guides/instructing-dispute-accountant",
        label: "How to Instruct a Dispute Accountant",
      },
      {
        href: "/qualifications",
        label: "CPR Part 35 Qualifications",
      },
      {
        href: "/services#expert-witness-reports",
        label: "Expert Witness Reports",
      },
    ],
  },
  {
    slug: "loss-quantification-guide",
    title: "Loss Quantification Guide",
    h1: "Loss Quantification in Disputes: Methodology & Expert Evidence",
    metaTitle:
      "Loss Quantification Guide | But-For, Hadley v Baxendale & Expert Evidence",
    metaDescription:
      "How dispute accountants quantify loss: but-for methodology, expectation vs reliance damages, Hadley v Baxendale remoteness, mitigation, and building defensible loss models for court.",
    aboutServiceId: "loss-quantification",
    paragraphs: [
      "Loss quantification is the forensic process of translating a legal wrong, breach of contract, tort, or unfair prejudice, into a monetary figure the court can award. Under the compensatory principle in Robinson v Harman [1848], the claimant should be placed in the position they would have been in but for the wrong, so far as money can do so.",
      "Dispute accountants build structured loss models that compare actual financial performance with a counterfactual but-for scenario, address remoteness under Hadley v Baxendale [1854], and credit mitigation. This guide explains the principal measures of damages, the methodology courts expect, and how solicitors should frame expert instructions.",
    ],
    sections: [
      {
        heading: "Expectation Loss and the But-For Methodology",
        content:
          "Expectation damages, often quantified as lost profits, restore the benefit of the bargain. The but-for test asks: what would the claimant's financial position have been absent the defendant's breach? The dispute accountant constructs a counterfactual using pre-breach accounts, contractual terms, and contemporaneous forecasts, then compares it to actual post-breach performance.\n\n| Stage | What the expert does | Key evidence |\n| --- | --- | --- |\n| Baseline | Establish pre-breach trading pattern | Audited accounts, MI |\n| But-for projection | Model performance absent breach | Contract, budgets, market data |\n| Actual outcome | Document post-breach results | MI, ERP, sales data |\n| Net loss | Difference less avoided variable costs | Workings, sensitivity table |\n\nCourts scrutinise projections that assume unrealistic growth or ignore external market factors unrelated to the breach. Sensitivity analysis on material assumptions, margin, volume, loss period, demonstrates rigour and assists settlement.",
      },
      {
        heading: "Reliance Loss and Wasted Expenditure",
        content:
          "Reliance loss returns the claimant to the position before the contract was made. Under Anglia Television Ltd v Reed [1972] and CCC Films (London) Ltd v Impact Quadrant Films Ltd [1985], wasted expenditure incurred in reliance on performance is recoverable where expectation loss cannot be proved or where the claimant elects reliance damages.\n\nThe dispute accountant identifies expenditure incurred in contemplation of contract performance, allocates shared costs fairly, and addresses the bad bargain defence, whether the claimant would have recovered the expenditure even if the contract had been performed. Reliance and expectation are alternative measures, not cumulative top-ups.",
      },
      {
        heading: "Hadley v Baxendale and Remoteness",
        content:
          "Hadley v Baxendale [1854] limits recoverable loss to damages arising naturally from the breach (Limb 1) or within the parties' reasonable contemplation at contracting as the probable result of breach (Limb 2). Victoria Laundry (Windsor) Ltd v Newman Industries Ltd [1949] illustrates the distinction: ordinary profit loss on delayed machinery was Limb 1; exceptional government contract profits failed Limb 2 without specific disclosure.\n\nDispute accountants structure reports with a remoteness section for each consequential head, third-party penalties, downstream customer loss, supply chain disruption, identifying the limb relied upon and the knowledge evidence. Experts quantify on an 'if the court finds recoverability' basis where liability for a head is disputed, clearly labelling alternative scenarios.",
      },
      {
        heading: "Causation, Mitigation, and Contributory Factors",
        content:
          "Causation requires the breach to have caused the loss on the balance of probabilities. Where multiple causes exist, market downturn, claimant's own conduct, third-party default, the expert apportions or explains the loss attributable to the defendant's breach. Mitigation under British Westinghouse Electric Co Ltd v Underground Electric Railways [1912] requires the claimant to take reasonable steps to reduce loss; failure to mitigate reduces recoverable damages.\n\nThe expert documents mitigation actually achieved (alternative supplier, redeployment of staff) and costs that would have been incurred in any event. Double-counting of revenue or failure to deduct avoided variable costs are common attack points at trial.",
      },
      {
        heading: "Building a Defensible Loss Model",
        content:
          "A defensible model rests on contemporaneous evidence: pre-breach forecasts prepared before the dispute arose carry significant weight. The expert states every material assumption, provides reconciliations to audited accounts, and prepares a joint experts' meeting agenda addressing disputed variables.\n\nSolicitors should instruct the expert to: define the loss period; identify each head of loss and the measure claimed; address remoteness for consequential heads; quantify mitigation; and present sensitivity analysis. Early instruction allows the expert to advise on document preservation and whether the quantum claim is viable before substantial costs are incurred, see our loss quantification service for typical deliverables.",
      },
    ],
    faqs: [
      {
        question: "What is the but-for methodology in simple terms?",
        answer:
          "The but-for methodology compares what actually happened financially after the breach with what would have happened had the breach not occurred. The difference, after appropriate cost adjustments, is the quantified loss. It is the standard approach to expectation damages in commercial litigation.",
      },
      {
        question:
          "When should a claimant claim reliance loss instead of lost profits?",
        answer:
          "Reliance loss is appropriate where lost profits cannot be established with sufficient certainty, where the claimant elects wasted expenditure under Anglia TV v Reed, or where the bad bargain defence makes expectation loss unattractive. The expert should advise on the appropriate measure early in the instruction.",
      },
    ],
    relatedLinks: [
      {
        href: "/dispute-types",
        label: "Types of Loss in Disputes",
      },
      {
        href: "/glossary#hadley-v-baxendale",
        label: "Hadley v Baxendale Glossary",
      },
      {
        href: "/services#loss-quantification",
        label: "Loss Quantification Service",
      },
    ],
  },
  {
    slug: "fraud-investigation-civil-recovery",
    title: "Fraud Investigation & Civil Recovery",
    h1: "Fraud Investigation & Civil Recovery: A Dispute Accounting Guide",
    metaTitle:
      "Fraud Investigation & Civil Recovery | Asset Tracing & POCA Guide",
    metaDescription:
      "Civil fraud claims, investigative methodology, asset tracing, POCA, Norwich Pharmacal orders and freezing injunctions, the dispute accountant's role in civil recovery for solicitors.",
    aboutServiceId: "fraud-investigation",
    paragraphs: [
      "Civil fraud and asset recovery proceedings require accounting evidence at every stage: to establish dishonest misappropriation, to quantify loss, to trace misapplied funds through bank accounts and corporate structures, and to support without-notice applications for freezing and disclosure orders.",
      "Dispute accountants acting as investigators or expert witnesses combine forensic accounting, data analytics, and an understanding of civil procedure and proceeds-of-crime legislation. This guide sets out the structure of civil fraud claims, investigative methodology, and the accounting evidence solicitors need for recovery.",
    ],
    sections: [
      {
        heading: "Structure of Civil Fraud Claims",
        content:
          "Civil fraud claims typically plead deceit, unlawful means conspiracy, or breach of fiduciary duty, with damages or an account of profits as remedies. The claimant must prove dishonesty (Ivey v Genting Casinos [2017] applied to civil claims), causation, and loss. Dishonest assistance and knowing receipt claims against third parties require proof of knowledge and participation.\n\nThe dispute accountant supports liability and quantum: identifying transactions inconsistent with legitimate business purpose, quantifying the net loss to the claimant, and calculating disgorgement of profits where an account of profits is sought. Parallel criminal investigation does not stay civil proceedings, but privilege and disclosure issues require careful coordination with the legal team.",
      },
      {
        heading: "Investigative Methodology",
        content:
          "Forensic investigation follows a structured workflow: preservation of books and records (litigation hold on email, ERP, and cloud storage); collection of bank statements and accounting records; reconciliation of ledgers to bank; identification of related-party and off-book transactions; and application of Benford's Law, trend analysis, and journal entry testing where appropriate.\n\n| Phase | Activity | Output |\n| --- | --- | --- |\n| Scoping | Understand allegations and entities | Investigation plan |\n| Data collection | Bank, GL, payroll, CRM | Normalised dataset |\n| Analysis | Tracing, profiling, interviews | Suspicious transaction schedule |\n| Reporting | Findings and quantification | Investigative report / expert report |\n\nInterviews of finance staff and directors may be conducted with solicitor present. Findings should distinguish proven misappropriation from suspicious items requiring further disclosure.",
      },
      {
        heading: "Asset Tracing and Following the Money",
        content:
          "Asset tracing follows misapplied funds through subsequent accounts and acquisitions. The forensic accountant applies the lowest intermediate balance rule where accounts contain mixed funds, and identifies dissipation into property, investments, or third-party recipients. Tracing supports claims against recipients in knowing receipt and proprietary remedies where a constructive trust is arguable.\n\nComplex structures, offshore entities, nominee directors, cryptocurrency, require enhanced data sources and may involve joint instruction of insolvency practitioners where the fraudster is insolvent. Early identification of recoverable assets informs security for costs and enforcement strategy.",
      },
      {
        heading: "POCA, Freezing Injunctions, and Norwich Pharmacal Orders",
        content:
          "The Proceeds of Crime Act 2002 provides civil recovery and management of assets in serious cases, often pursued by enforcement authorities; private claimants more commonly rely on freezing injunctions under the court's inherent jurisdiction and Mareva principles. A freezing order restrains the defendant from dealing with assets up to the value of the claim plus costs, typically supported by full and frank disclosure and an undertaking in damages.\n\nNorwich Pharmacal orders compel innocent third parties, usually banks, to disclose account information identifying wrongdoers or trace funds. Accounting evidence in the supporting affidavit explains why the claimant believes funds passed through the account and the approximate sums involved. Dispute accountants prepare schedules of suspected flows for counsel's affidavit evidence.\n\nWorldwide freezing orders and proprietary injunctions require corresponding accounting analysis of asset values and locations. Renewal applications need updated asset schedules.",
      },
      {
        heading: "The Expert's Role Through to Trial",
        content:
          "Once proceedings are issued, the investigator may be instructed as CPR Part 35 expert witness to give independent opinion on transactions, loss, and tracing. The expert report must comply with Practice Direction 35, including statement of duty to the court and identification of documents relied upon.\n\nAt trial, the expert may be cross-examined on methodology, alternative innocent explanations, and the completeness of disclosure. Solicitors should ensure investigative privilege is not waived inadvertently when converting investigative findings into expert evidence. For fraud investigation instructions, provide bank mandates, complete general ledgers, and authority to contact third-party accountants where possible.",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between an investigative accountant and an expert witness in fraud cases?",
        answer:
          "The investigative accountant gathers and analyses evidence, often under litigation privilege, to advise the solicitor on whether fraud occurred and where assets are located. The expert witness gives independent CPR Part 35 evidence to the court. The same firm may perform both roles sequentially, but the expert's report must meet independence standards and not read as advocacy.",
      },
      {
        question: "Can civil claimants use POCA to recover assets?",
        answer:
          "POCA civil recovery is primarily used by enforcement authorities. Private claimants typically pursue tracing claims, constructive trust remedies, freezing injunctions, and judgment enforcement. Accountants support these routes by tracing funds and valuing recoverable assets.",
      },
    ],
    relatedLinks: [
      {
        href: "/glossary#asset-tracing",
        label: "Asset Tracing Glossary",
      },
      {
        href: "/glossary#norwich-pharmacal-order",
        label: "Norwich Pharmacal Order",
      },
      {
        href: "/services#fraud-investigation",
        label: "Fraud Investigation Service",
      },
    ],
  },
  {
    slug: "shareholder-dispute-accounting-guide",
    title: "Shareholder Dispute Accounting Guide",
    h1: "Shareholder Disputes: Accounting Evidence Guide for Solicitors",
    metaTitle:
      "Shareholder Dispute Accounting Guide | S994, Valuation & Hidden Assets",
    metaDescription:
      "Accounting evidence in shareholder disputes: S994 unfair prejudice petitions, valuation vs investigation, hidden transactions, expert meetings and joint statements for solicitors.",
    aboutServiceId: "shareholder-partnership-disputes",
    paragraphs: [
      "Shareholder and partnership disputes under section 994 of the Companies Act 2006, just and equitable winding-up petitions, and breach of shareholders' agreement claims depend heavily on accounting evidence, to establish unfair prejudice, to value the petitioner's interest, and to uncover diversion or undisclosed benefits.",
      "Dispute accountants instruct on valuation methodology, forensic review of management accounts, and preparation of CPR Part 35 reports for trial or buy-out orders. This guide addresses when valuation suffices, when investigation is required, and how the expert process unfolds.",
    ],
    sections: [
      {
        heading: "S994 and the Accounting Issues",
        content:
          "An unfair prejudice petition under s994 requires the petitioner to show that the company's affairs are being conducted in a manner unfairly prejudicial to their interests. Accounting evidence supports both liability and remedy: demonstrating minority exclusion from dividends, excessive remuneration to majority directors, related-party transactions on non-arm's length terms, or diversion of corporate opportunity.\n\nThe court's remedy often includes a buy-out of the petitioner's shares at fair value. O'Neill v Phillips [1999] HL establishes that valuation should generally be on a pro rata basis without a minority discount unless the unfairly prejudicial conduct justifies a different approach. The dispute accountant must understand which valuation basis the court is likely to adopt on the pleaded facts.",
      },
      {
        heading: "Valuation vs Investigation",
        content:
          "Valuation instructions assume the financial records are materially reliable. The expert applies DCF, earnings multiples, or net asset approaches, normalising directors' remuneration and related-party charges. Investigation is required where the petitioner alleges hidden income, undisclosed assets, or manipulated accounts, common in owner-managed companies.\n\n| Scenario | Primary expert work |\n| --- | --- |\n| Clean accounts, buy-out only | Independent valuation |\n| Alleged diversion / hidden income | Forensic investigation then valuation |\n| Deadlock, just and equitable winding up | Liquidation basis or going concern valuation |\n| Breach of SHA dividend policy | Quantification of underpaid distributions |\n\nInvestigation may reveal off-book sales, personal expenses through the company, or undervalued disposals to connected parties. Findings feed into a fair value calculation that adds back misappropriated funds or adjusts normalised earnings.",
      },
      {
        heading: "Hidden Transactions and Forensic Review",
        content:
          "Forensic review targets related-party transactions, journal entries around year-end, cash withdrawals, and inconsistencies between VAT returns, payroll, and reported revenue. Bank statement analysis remains fundamental where bookkeeping is poor. Experts compare director lifestyle and disclosed remuneration, and review intercompany flows in group structures.\n\nDiscovery of hidden transactions may support separate breach of duty claims and criminal referrals, but the immediate litigation priority is quantifying impact on share value. The expert should clearly separate proven adjustments from suspicious items requiring further disclosure.",
      },
      {
        heading: "Expert Meetings and Joint Statements",
        content:
          "CPR Part 35 requires experts to discuss issues in dispute and endeavour to reach agreement. In shareholder disputes, joint meetings typically address: valuation date; methodology (earnings vs DCF vs assets); normalisation adjustments; minority discount; and treatment of known forensic adjustments.\n\nThe joint statement (JSM) records agreed facts, agreed methodology where possible, and narrow disagreements for trial. Solicitors should agree a agenda with counsel before the meeting. A well-run JSM reduces trial length and can catalyse settlement when both parties see the range of likely outcomes.\n\nWhere one expert has conducted forensic investigation and the other has relied on management accounts only, the meeting should first address whether the accounts are reliable enough to value without adjustment.",
      },
      {
        heading: "Practical Instruction Points for Solicitors",
        content:
          "Provide: companies house filings; audited and management accounts for five years; shareholders' agreement; board minutes and dividend records; directors' service contracts; and any forensic findings from preliminary investigation. Instruct the expert on the valuation date (often petition date or trial date per case law), whether a minority discount is disputed, and whether a pro rata buy-out is sought.\n\nEarly joint instruction of a single joint expert may be appropriate where both parties accept a buy-out in principle and only disagree on value. Adversarial experts are standard where conduct and forensic issues are heavily contested.",
      },
    ],
    faqs: [
      {
        question: "Should a minority discount apply in S994 buy-out valuations?",
        answer:
          "The starting point after O'Neill v Phillips is pro rata fair value without a minority discount, reflecting what the petitioner should have received but for unfair prejudice. A discount may apply in exceptional circumstances. The expert should address the issue explicitly with legal input on the pleaded conduct.",
      },
      {
        question:
          "When is forensic investigation necessary before valuation?",
        answer:
          "Investigation is necessary where there are credible allegations of undisclosed income, assets stripped before petition, or manipulated accounts. Valuing unreliable accounts without investigation risks a report that cannot withstand scrutiny and may require costly revision.",
      },
    ],
    relatedLinks: [
      {
        href: "/sectors/professional-practices",
        label: "Professional Practices Sector",
      },
      {
        href: "/glossary#s994-petition",
        label: "S994 Petition Glossary",
      },
      {
        href: "/services#shareholder-partnership-disputes",
        label: "Shareholder & Partnership Disputes",
      },
    ],
  },
  {
    slug: "ma-dispute-accounting-guide",
    title: "M&A Dispute Accounting Guide",
    h1: "M&A Transaction Disputes: Dispute Accounting Guide",
    metaTitle:
      "M&A Dispute Accounting Guide | Completion Accounts, Earn-Out & Warranty",
    metaDescription:
      "Dispute accountants in M&A litigation: completion accounts disputes, warranty and indemnity claims, earn-outs, locked box mechanisms, and accounting expert evidence for solicitors.",
    aboutServiceId: "ma-transaction-disputes",
    paragraphs: [
      "M&A disputes arise when parties disagree on the price paid, the financial position at completion, or post-completion performance affecting deferred consideration. Accounting experts interpret sale and purchase agreements, apply GAAP and agreed accounting policies, and quantify adjustments, warranty losses, and earn-out shortfalls.",
      "These disputes are document-heavy and time-sensitive: completion accounts mechanisms impose strict deadlines; warranty claims require notification within contractual limits. Early instruction of a dispute accountant familiar with transaction structures prevents procedural defaults and strengthens quantum.",
    ],
    sections: [
      {
        heading: "Completion Accounts Disputes",
        content:
          "Completion accounts adjust the headline price to reflect the actual financial position at completion, typically net debt and working capital against agreed targets. The SPA defines accounting policies, preparation methodology, and dispute resolution (expert determination or arbitration).\n\nThe dispute accountant reviews draft completion accounts, identifies departures from the agreed policy (revenue recognition, capitalisation, provisions, normalisation), and quantifies each adjustment's impact on price. Common battlegrounds include: stock valuation and obsolescence; debtors and bad debt provisions; classification of exceptional items; and timing of recognition around completion date.\n\n| Issue | Expert focus |\n| --- | --- |\n| Working capital target | Normalised WC vs actual |\n| Net debt | Cash, debt-like items, leases |\n| Accounting policy | GAAP vs SPA-specific rules |\n| Leakage (locked box) | Permitted vs prohibited distributions |",
      },
      {
        heading: "Warranty and Indemnity Claims",
        content:
          "Warranty claims allege that statements in the disclosure letter or warranties were untrue, causing loss. The buyer must prove breach, loss, and mitigation; tax warranties may involve gross-up calculations. Dispute accountants quantify the diminution in value or specific costs flowing from the breach, for example, overstated inventory causing write-downs, or undisclosed liabilities.\n\nIndemnities for known risks operate differently from general warranties; the expert analyses whether the claimed loss falls within the indemnified category and caps. Contingent liabilities discovered post-completion require assessment of probability and timing under applicable accounting standards and SPA definitions.",
      },
      {
        heading: "Earn-Out Disputes",
        content:
          "Earn-outs link deferred consideration to post-completion performance. Disputes arise when the seller alleges the buyer manipulated results, stripping resources, changing accounting policies, diverting revenue, or failing to run the business in the ordinary course. The expert constructs a but-for model of what the business would have achieved absent alleged conduct, applying the earn-out formula in the SPA.\n\nMaterial issues include: definition of EBITDA or revenue; add-backs for synergies and central costs; treatment of new contracts; and whether the buyer complied with operating covenants. Expert determination clauses are common; the accountant may act as determiner or as party expert.",
      },
      {
        heading: "Locked Box Mechanisms",
        content:
          "Locked box pricing fixes equity value at a historical accounts date; the buyer receives the economic benefit from that date to completion. Leakage, value transferred from the target to the seller or affiliates between locked box date and completion, reduces the price pound for pound unless permitted.\n\nThe dispute accountant reviews dividends, management charges, bonuses, and related-party transactions in the locked box period. Permitted leakage schedules in the SPA must be applied precisely. Unlike completion accounts, there is no true-up for working capital, leakage analysis is the primary forensic focus.",
      },
      {
        heading: "The Accounting Expert's Role and Instruction",
        content:
          "Instruct the expert with the SPA, disclosure letter, completion accounts, management accounts, due diligence reports, and all correspondence on disputes. Specific questions should address each pleaded adjustment or warranty head, with clear loss periods and causation.\n\nMany SPAs appoint the expert as determiner on completion accounts, an impartial role requiring independence from both parties. Where acting as party-appointed expert in litigation, the expert addresses the same accounting issues under CPR Part 35. Coordination with corporate lawyers on contractual interpretation is essential; accountants do not construe contracts but apply agreed or determined policies to figures.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between completion accounts and locked box?",
        answer:
          "Completion accounts adjust price post-completion based on actual net debt and working capital at completion. Locked box fixes price at an earlier date and adjusts only for prohibited leakage to the seller before completion. The expert's analysis focuses on different mechanisms but both require strict application of SPA accounting definitions.",
      },
      {
        question: "How are earn-out shortfalls quantified?",
        answer:
          "The expert applies the contractual earn-out formula to a but-for performance figure, what the target would have achieved had the buyer not breached operating covenants or manipulated results, and compares it to actual performance. The difference in formula output is the shortfall in deferred consideration.",
      },
    ],
    relatedLinks: [
      {
        href: "/case-types/ma-transaction-disputes",
        label: "Earn-Out & M&A Case Type",
      },
      {
        href: "/sectors/technology-software",
        label: "Technology & Software Sector",
      },
      {
        href: "/services#ma-transaction-disputes",
        label: "M&A Transaction Disputes Service",
      },
    ],
  },
  {
    slug: "instructing-dispute-accountant",
    title: "Instructing a Dispute Accountant",
    h1: "How to Instruct a Dispute Accountant: A Solicitor's Guide",
    metaTitle:
      "How to Instruct a Dispute Accountant | Letter of Instruction & CPR Part 35",
    metaDescription:
      "Solicitor guide to instructing dispute accountants: preliminary review, letter of instruction, documents, CPR Part 35 compliance, and single joint expert joint instructions.",
    aboutServiceId: "expert-witness-reports",
    paragraphs: [
      "The quality of accounting expert evidence depends on the instruction. A clear letter of instruction aligns the expert's work with the pleaded case, defines scope, and satisfies CPR Part 35 requirements. Poor instructions produce unfocused reports, scope disputes, and vulnerable evidence at trial.",
      "This guide covers preliminary assessment, essential contents of the instruction, document packs, engagement terms, Part 35 duties, and joint instruction of a single joint expert.",
    ],
    sections: [
      {
        heading: "Preliminary Review and Early Instruction",
        content:
          "A preliminary review, sometimes called a quantum screening, allows the solicitor to assess whether expert evidence is justified, what documents exist, and the approximate range of loss before issuing proceedings. The dispute accountant reviews key contracts and accounts under litigation privilege and advises on: viability of the quantum claim; further disclosure needed; appropriate measure of damages; and whether investigation or valuation is required.\n\nEarly instruction supports without-prejudice negotiation, litigation hold on accounting systems, and mitigation advice. It also avoids instructing the wrong specialist, for example, a valuer where forensic investigation is needed first.",
      },
      {
        heading: "Essential Contents of the Letter of Instruction",
        content:
          "Every letter of instruction should include: parties and proceedings reference; the expert's defined role (CPR Part 35 expert, adviser, or determiner); background facts agreed and in dispute; legal framework and measure of damages; specific questions for the expert; documents provided and anticipated further disclosure; timetable and hearing date; and confirmation of the expert's overriding duty to the court.\n\nAvoid asking the expert to 'support the claimant's case.' CPR Part 35.3 requires independence. Questions should be neutral and precise, for example: 'What was the claimant's lost gross profit between [dates] but for the breach, and what assumptions underpin that figure?'\n\n| Element | Purpose |\n| --- | --- |\n| Specific questions | Define scope and report structure |\n| Agreed/disputed facts | Focus analysis |\n| Legal framework | Align measure of damages |\n| Assumptions on liability | Alternative scenarios if needed |\n| Timetable | Manage court deadlines |",
      },
      {
        heading: "Documents to Provide",
        content:
          "Core documents for commercial loss claims: contract and variations; correspondence on breach and mitigation; audited accounts (three years pre-breach); management accounts for the loss period; budgets and forecasts; invoices for wasted expenditure; and prior expert reports.\n\nShareholder disputes: Companies House filings, SHA, board minutes, dividend records. M&A: SPA, disclosure letter, completion accounts, due diligence files. Fraud: bank statements, general ledger, payroll, CRM exports. Construction: contract with amendments, programmes, EOT notices, cost ledgers.\n\nOrganise documents with an index; use a data room for large matters. Confirm litigation hold covers email, ERP, and cloud storage before the expert begins.",
      },
      {
        heading: "Engagement Agreement and Timetable",
        content:
          "Agree scope, deliverables, and timetable in writing before work starts. Contingency or success-based expert fees are impermissible — the expert must have no interest in the outcome.\n\nMilestones might include: document review and request list (2 weeks); draft report (4–8 weeks); final report after comments; joint meeting; trial attendance. Urgent adjudication or injunction support requires agreed availability and turnaround times.",
      },
      {
        heading: "CPR Part 35 and Single Joint Expert Instructions",
        content:
          "Practice Direction 35 requires the expert report to contain: the expert's qualifications; material instructions; documents relied upon; factual assumptions; opinions and range of opinion; statement that the expert understands the duty to the court; and declaration of compliance.\n\nFor a single joint expert (SJE), both parties must agree the joint instruction, typically signed by both solicitors after circulating a draft. Agree: neutral questions; simultaneous document provision; procedure for supplemental questions; and dispute resolution on instruction disagreements (CPR 35.7 court application).\n\nSJE instructions must not favour one party's formulation. Party-appointed experts remain common in high-value disputes where adversarial testing is required. The Ikarian Reefer [1993] principles, independence, transparency, and assistance to the tribunal, apply to all expert roles.",
      },
    ],
    faqs: [
      {
        question: "When should a solicitor instruct a dispute accountant?",
        answer:
          "Instruct as early as possible once financial issues are in dispute, at pre-action protocol stage for screening, and certainly before trial directions if expert evidence is required. Early instruction preserves documents, informs pleadings, and supports settlement.",
      },
      {
        question: "Can supplemental instructions be sent after the report is served?",
        answer:
          "Yes, for matters arising after the original instruction or to clarify scope, but material changes may require an addendum report and disclosure to the other side. Supplemental instructions must not turn the expert into an advocate.",
      },
    ],
    relatedLinks: [
      {
        href: "/how-to-instruct",
        label: "How to Instruct Hub",
      },
      {
        href: "/qualifications",
        label: "Expert Qualifications & CPR Part 35",
      },
      {
        href: "/contact",
        label: "Instruct a Dispute Accountant",
      },
    ],
  },
];

export { guides };

export const guideSlugs = guides.map((g) => g.slug);

export function getGuide(slug: string): GuidePage | undefined {
  return guides.find((g) => g.slug === slug);
}
