import type { ContentPage } from "./types";

export const caseTypes: ContentPage[] = [
  {
    slug: "commercial-contract-disputes",
    title: "Commercial Contract Disputes",
    h1: "Commercial Contract Dispute Accounting Expert",
    metaTitle:
      "Commercial Contract Dispute Accounting Expert | DisputeAccounting",
    metaDescription:
      "Dispute accountants for commercial contract claims, but-for loss quantification, expectation vs reliance damages, Hadley v Baxendale remoteness, and consequential loss analysis for solicitors.",
    paragraphs: [
      "Commercial contract disputes in many jurisdictions turn on whether the claimant's financial position would have been better had the contract been performed. A dispute accountant constructs a but-for counterfactual from the contract terms, pre-breach trading history, management accounts, and contemporaneous forecasts, then compares projected performance with actual results to quantify net loss. Expectation damages, placing the innocent party in the position they would have been in under Robinson v Harman [1848], are typically measured as lost profit through contribution margin analysis, with clear allocation between variable and fixed costs and sensitivity testing on volume, price, and cost assumptions.",
      "Solicitors must often advise on the choice between expectation loss and reliance loss (wasted expenditure). Where profits cannot be proved with sufficient certainty, or where the claimant made a bad bargain, reliance damages under Anglia Television Ltd v Reed [1972] and CCC Films (London) Ltd v Impact Quadrant Films Ltd [1985] may be appropriate. The dispute accountant explains which measure is supported by the evidence, addresses the defendant's bad bargain defence, and quantifies each head separately so the court can apply the correct remedial framework without conflating distinct categories of loss.",
      "Every head of loss must satisfy the remoteness test in Hadley v Baxendale [1854] 9 Ex Ch 341. Direct losses arising naturally from the breach fall within the first limb; consequential losses, such as loss of a known downstream contract, require proof that they were within the reasonable contemplation of both parties at the time of contracting. Expert accounting evidence structures the quantum analysis accordingly, separating direct from consequential categories, addressing mitigation, and producing CPR Part 35 compliant reports capable of withstanding scrutiny in the Commercial Court, arbitration, and expert determination.",
    ],
    faqs: [
      {
        question:
          "What does a dispute accountant do in a commercial contract case?",
        answer:
          "A dispute accountant quantifies the financial loss flowing from breach of contract by constructing a but-for model showing what the claimant would have earned or saved had the contract been performed, and comparing that counterfactual to actual results. The expert reviews the contract, management accounts, invoices, forecasts, and market data; allocates costs correctly between fixed and variable elements; addresses causation and mitigation; and prepares a CPR Part 35 compliant report with full workings and sensitivity analysis. The accountant does not advocate for the instructing party, their overriding duty is to assist the court on matters within their expertise, whether appointed as a party-appointed expert or single joint expert.",
      },
      {
        question:
          "How does Hadley v Baxendale affect accounting evidence?",
        answer:
          "Hadley v Baxendale limits recoverable damages to losses that arise naturally from the breach or were within the parties' reasonable contemplation at contracting. Accounting evidence must be structured so each head of loss can be tested against remoteness: the expert identifies whether a loss is direct or consequential, states which limb of Hadley is relied upon, and quantifies only those heads that are recoverable in law, or clearly labels alternative scenarios where recoverability is disputed. Without this structure, a large quantum figure may be undermined at trial if consequential losses fail the remoteness test. Expert witnesses therefore separate figures for direct contract loss from consequential heads such as third-party penalties, and explain the documentary basis for any Limb 2 claim.",
      },
    ],
    relatedLinks: [
      { href: "/services#loss-quantification", label: "Lost Profits Quantification" },
      {
        href: "/services#loss-quantification",
        label: "Consequential Loss Assessment",
      },
      {
        href: "/guides/loss-quantification-guide",
        label: "But-For Methodology Guide",
      },
      {
        href: "/guides/loss-quantification-guide",
        label: "Hadley v Baxendale Guide",
      },
    ],
  },
  {
    slug: "shareholder-disputes",
    title: "Shareholder Disputes",
    h1: "Shareholder Dispute Accounting Expert",
    metaTitle:
      "Shareholder Dispute Accounting Expert | S994 Valuation | DisputeAccounting",
    metaDescription:
      "Dispute accountants for shareholder disputes, unfair prejudice petitions under s994 Companies Act, fair value, minority discounts, and financial investigation for minority shareholders.",
    paragraphs: [
      "Shareholder disputes frequently require expert accounting evidence on the financial affairs of the company and the value of the claimant's interest. Under section 994 of the Companies Act 2006, a member may petition where the company's affairs are conducted in a manner unfairly prejudicial to their interests. Remedies often include a buy-out order under section 996, requiring determination of fair value as at the appropriate valuation date. A dispute accountant analyses management accounts, statutory accounts, cash flows, and related-party transactions to support fair value calculations and to investigate allegations of diverted profits, excessive remuneration, or improper distributions.",
      "Fair value is not necessarily the same as market value in a minority holding. The expert must address whether a minority discount applies, reflecting the lack of control and marketability of a non-controlling stake, or whether the court will order valuation on a pro rata basis of enterprise value without discount, as is common in unfair prejudice cases where the majority's conduct has depressed value. Financial investigation may trace undisclosed payments, analyse director loan accounts, review transfer pricing between group entities, and reconstruct normalised earnings before applying an earnings multiple or discounted cash flow approach.",
      "Complex shareholder litigation also involves quantification of past financial prejudice, for example, failure to declare dividends, exclusion from profitable opportunities, or dilution through improper share issues. The dispute accountant separates historical loss quantification from prospective buy-out valuation, ensures consistent treatment of debt and cash, and produces reports compliant with CPR Part 35 for use in the Companies Court, Chancery Division, and arbitration under shareholders' agreements.",
    ],
    faqs: [
      {
        question:
          "What accounting evidence is needed in a shareholder dispute?",
        answer:
          "Accounting evidence typically includes analysis of statutory and management accounts for multiple years, normalisation adjustments for director remuneration and related-party transactions, cash flow and working capital review, and a valuation of the claimant's shares on a fair value basis. Where unfair prejudice is alleged, the expert may reconstruct what profits should have been available for distribution, investigate alleged misappropriation, and opine on the appropriate valuation methodology, earnings multiple, DCF, or net assets, and whether a minority discount should apply. Supporting schedules should reconcile book value to enterprise value and explain each normalisation with documentary evidence.",
      },
      {
        question:
          "Can a dispute accountant investigate alleged financial misconduct in a company?",
        answer:
          "Yes. Dispute accountants routinely conduct financial investigations in shareholder disputes, tracing payments through bank statements, analysing journal entries, reviewing expense claims, and identifying related-party transactions that may constitute unfair prejudice or breach of fiduciary duty. The investigation is distinct from a regulatory enforcement action but may inform valuation, for example, by adding back misappropriated funds to normalised earnings, and supports without-prejudice settlement discussions. Findings are presented in a CPR Part 35 compliant expert report or, at an earlier stage, in a confidential investigation report for the solicitor's advice, depending on instruction.",
      },
    ],
    relatedLinks: [
      { href: "/services#expert-witness-reports", label: "Expert Determination" },
      {
        href: "/case-types/fraud-financial-crime",
        label: "Fraud & Financial Crime",
      },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/qualifications", label: "Expert Qualifications" },
    ],
  },
  {
    slug: "fraud-financial-crime",
    title: "Fraud & Financial Crime",
    h1: "Fraud Investigation & Financial Crime Accounting Expert",
    metaTitle:
      "Fraud Investigation Accounting Expert | POCA & Asset Tracing | DisputeAccounting",
    metaDescription:
      "Dispute accountants for fraud investigation, asset tracing, POCA confiscation proceedings, and civil recovery, forensic accounting expert evidence for solicitors and prosecutors.",
    paragraphs: [
      "Fraud and financial crime cases demand rigorous forensic accounting to establish how funds were misappropriated, laundered, or concealed. A dispute accountant follows the money through bank statements, general ledgers, invoices, and third-party records, reconstructing transaction flows and identifying beneficiaries. In civil fraud claims, the expert quantifies loss caused by dishonest misrepresentation, breach of fiduciary duty, or unlawful means conspiracy, linking each withdrawal or diversion to the claimant's diminution in assets.",
      "Asset tracing is central to both civil recovery and criminal confiscation. The accountant identifies the original misappropriated sum, traces it through subsequent transfers, and addresses commingling where stolen funds were mixed with legitimate assets. Reports support proprietary claims, tracing into substituted assets, and assessment of available recoveries from defendants and third-party recipients. Where multiple jurisdictions are involved, the expert coordinates with legal teams on disclosure and provides clear schedules suitable for worldwide freezing order applications.",
      "Proceeds of Crime Act 2002 proceedings require specialist accounting on benefit, available amount, and tainted gifts. In the Crown Court, forensic accountants assist with confiscation statements, respond to assumptions under section 10, and analyse contested lifestyle expenditure. Civil recovery under Part 5 POCA and High Court civil fraud claims run in parallel with commercial litigation, the same tracing skills apply, but the expert must tailor methodology to the relevant statutory framework and standard of proof.",
    ],
    faqs: [
      {
        question:
          "What is the difference between a fraud investigation and an expert witness report?",
        answer:
          "A fraud investigation is typically an internal or solicitor-instructed review to establish facts, who received what, when, and from which source, often protected by litigation privilege and not disclosed to the other side. An expert witness report under CPR Part 35 is a formal document served on all parties, in which the accountant sets out independent opinions to assist the court, with a statement of truth and compliance with Practice Direction 35. The investigation may inform whether to issue proceedings and which defendants to sue; the expert report quantifies loss and supports trial. The same accountant may perform both roles in sequence, but the duties and disclosure obligations differ materially once the expert is appointed for court proceedings.",
      },
      {
        question:
          "Can a dispute accountant help with POCA confiscation proceedings?",
        answer:
          "Yes. Dispute accountants assist in POCA confiscation by calculating criminal benefit from particular criminal conduct, analysing contested assumptions about income and expenditure, tracing assets through complex structures, and opining on available amount where the defendant disputes valuations of property or alleges third-party interests. In civil recovery cases, accountants support the enforcement authority or respondents by analysing whether property represents recoverable property and quantifying the value of assets subject to recovery. Reports must be clear enough for judges and juries without accounting training, with schedules linking each asset to the tracing exercise.",
      },
    ],
    relatedLinks: [
      { href: "/services#loss-quantification", label: "Loss Quantification" },
      {
        href: "/case-types/shareholder-disputes",
        label: "Shareholder Disputes",
      },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/guides/instructing-dispute-accountant", label: "Instruction Letter Guide" },
    ],
  },
  {
    slug: "ma-transaction-disputes",
    title: "M&A Transaction Disputes",
    h1: "M&A Transaction Dispute Accounting Expert",
    metaTitle:
      "M&A Dispute Accounting Expert | Completion Accounts & Earn-Outs | DisputeAccounting",
    metaDescription:
      "Dispute accountants for M&A litigation, completion accounts adjustments, warranty claims, earn-out disputes, and locked box mechanism disagreements in share purchase agreements.",
    paragraphs: [
      "Mergers and acquisitions generate accounting disputes long after completion. Completion accounts mechanisms adjust the purchase price by reference to the target's financial position at the closing date, typically comparing actual net debt, working capital, and cash against agreed targets or collars. Dispute accountants analyse the sale and purchase agreement's accounting policies, identify departures from GAAP or agreed definitions, and quantify the price adjustment required. Normalisation disputes, whether certain costs were one-off, whether revenue was properly recognised, and how stock and debtors were valued, are resolved through detailed review of the completion balance sheet and underlying ledgers.",
      "Warranty and indemnity claims allege that the seller misrepresented the target's financial position. The accountant quantifies loss arising from breach, for example, understated liabilities, overstated debtors, or undisclosed tax exposures, and addresses causation between the breach and the buyer's economic loss. Earn-out disputes arise when sellers allege that buyer conduct suppressed post-completion performance: diversion of customers, failure to invest, integration decisions, or accounting policies that reduce EBITDA. Experts construct but-for models showing what the business would have achieved absent alleged breach and apply the contractual earn-out formula to the resulting shortfall.",
      "Locked box transactions fix the purchase price by reference to accounts at a historical locked box date, with the seller retaining economic risk and reward until completion through permitted leakage covenants. Disputes focus on whether payments between the locked box date and completion constitute leakage, whether working capital movements were permitted, and who bears the cost of intervening events. M&A dispute accountants must understand transaction timetables, disclosure letter interactions, and the difference between price adjustment claims and damages claims for misrepresentation.",
    ],
    faqs: [
      {
        question: "What accounting disputes arise most commonly in M&A deals?",
        answer:
          "The most common disputes are completion accounts disagreements over net debt, working capital, and normalised EBITDA; warranty claims for undisclosed liabilities or overstated assets; earn-out shortfalls where the seller alleges the buyer managed the business to frustrate targets; and locked box leakage claims for dividends, management charges, or related-party payments between the locked box date and completion. Tax indemnities, pension deficits, and earn-out accounting policy disputes also feature regularly. Experts must read the SPA's definitions carefully, terms such as 'ordinary course of business' and agreed accounting principles often determine the outcome.",
      },
      {
        question: 'What is a "locked box" and why does it cause disputes?',
        answer:
          "A locked box mechanism fixes the equity price by reference to accounts at an agreed historical date (the locked box date), rather than adjusting price at completion based on closing accounts. The buyer acquires the target with the seller having managed the business from the locked box date to completion, subject to covenants restricting 'leakage', value moving out of the target to the seller or related parties. Disputes arise because parties disagree whether specific payments were permitted leakage, whether economic risk transferred appropriately, or whether the buyer inherited liabilities that should have been reflected in the locked box price. Forensic review of cash movements, intercompany balances, and board minutes between the locked box date and completion is essential.",
      },
    ],
    relatedLinks: [
      { href: "/services#loss-quantification", label: "Lost Profits Quantification" },
      { href: "/services#expert-witness-reports", label: "Expert Determination" },
      {
        href: "/case-types/commercial-contract-disputes",
        label: "Commercial Contract Disputes",
      },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
    ],
  },
  {
    slug: "matrimonial-financial-disputes",
    title: "Matrimonial Financial Disputes",
    h1: "Matrimonial Financial Dispute Accounting Expert",
    metaTitle:
      "Matrimonial Financial Dispute Accountant | Form E & Hidden Income | DisputeAccounting",
    metaDescription:
      "Dispute accountants for divorce financial remedy, FPR Part 25 expert evidence, Form E review, hidden income analysis, business valuation, and goodwill in family proceedings.",
    paragraphs: [
      "Matrimonial financial remedy proceedings under the Matrimonial Causes Act 1973 frequently require expert accounting evidence where one or both parties have business interests, complex remuneration structures, or allegations of non-disclosure. Proceedings are governed by FPR Part 25, which mirrors CPR Part 35 in imposing an overriding duty to the court. The dispute accountant provides independent analysis of business valuations, income capacity, and the accuracy of Form E financial statements, without advocating for either spouse.",
      "Form E requires full and frank disclosure of income, capital, pensions, and liabilities. Experts review tax returns, company accounts, bank statements, and management information to identify discrepancies between disclosed and actual financial position. Hidden income analysis addresses cash takings, undeclared dividends, inflated expenses, loans to family members, and corporate structures designed to reduce apparent resources available for maintenance and sharing.",
      "Business valuation in family cases raises distinct issues from commercial transactions: the treatment of goodwill, particularly personal versus enterprise goodwill in professional practices, liquidity discounts, and whether the valuing accountant should assume a notional sale or going concern basis. Experts may also opine on earning capacity, reasonable drawings, and the tax consequences of proposed orders. Joint expert appointment is common where both parties agree on a single valuer; otherwise, each party may instruct their own expert with direction for a joint statement under FPR PD 25A.",
    ],
    faqs: [
      {
        question:
          "How does a dispute accountant help in divorce proceedings?",
        answer:
          "A dispute accountant assists the court and the parties by analysing financial disclosure, valuing business interests, investigating alleged non-disclosure, and explaining complex corporate structures in clear terms. The expert may review Form E, prepare a schedule of deficiencies in disclosure, value shares or partnership interests, and opine on liquidity and realizability of assets. Reports comply with FPR Part 25 and the expert's duty is to the court, not the instructing spouse. Early instruction can narrow disputes before the FDR and reduce the need for contested final hearing evidence on quantum.",
      },
      {
        question:
          'What is "hidden income" analysis in matrimonial disputes?',
        answer:
          "Hidden income analysis is a forensic review to identify income and benefits not fully disclosed in Form E or tax returns. Techniques include comparing declared income to lifestyle expenditure, analysing bank deposits against declared turnover, reviewing expense accounts and petty cash, tracing dividends and director loan account movements, and benchmarking against industry margins. The expert quantifies the likely undeclared sum over relevant years and explains the evidential basis, documentary, circumstantial, or both, so the court can make findings on non-disclosure and adjust needs and sharing calculations accordingly.",
      },
    ],
    relatedLinks: [
      { href: "/services#expert-witness-reports", label: "Expert Determination" },
      {
        href: "/case-types/partnership-disputes",
        label: "Partnership Disputes",
      },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/qualifications", label: "Expert Qualifications" },
    ],
  },
  {
    slug: "insolvency-administration",
    title: "Insolvency & Administration",
    h1: "Insolvency & Administration Dispute Accounting Expert",
    metaTitle:
      "Insolvency Dispute Accountant | Wrongful Trading s214 | DisputeAccounting",
    metaDescription:
      "Dispute accountants for insolvency litigation, wrongful trading under s214 Insolvency Act, transactions at undervalue s238, preferences, and administrator wrongful trading claims.",
    paragraphs: [
      "When a company enters insolvency, office holders and creditors frequently pursue claims against directors and connected parties. Section 214 of the Insolvency Act 1986 imposes liability on directors who knew or ought to have concluded that there was no reasonable prospect of avoiding insolvent liquidation and failed to take every step to minimise loss to creditors. Dispute accountants reconstruct the company's financial position at relevant dates, analyse cash flow forecasts that were available to directors, and opine on when insolvency became inevitable and what steps a reasonable director should have taken.",
      "Transactions at undervalue under section 238 and preferences under section 239 require analysis of whether the company received adequate consideration and whether a transaction preferred one creditor over others. The accountant values assets transferred, reviews consideration paid, examines the company's insolvency status at the transaction date, and quantifies the amount recoverable by the office holder. Connected party transactions, management buyouts, and pre-insolvency dividends demand careful review of board minutes, valuations obtained at the time, and subsequent financial deterioration.",
      "Administration and liquidation also involve disputed proofs of debt, voidable floating charges, and claims against professional advisers. Forensic accountants support insolvency practitioners in preference payment tracing, director loan account recovery, and assessment of wrongful trading loss, typically measured as the increase in net deficit from the date when wrongful trading commenced to liquidation. Reports must be robust enough for Insolvency and Companies Court proceedings and for settlement negotiations with directors' D&O insurers.",
    ],
    faqs: [
      {
        question:
          "What accounting evidence is needed in wrongful trading claims?",
        answer:
          "Wrongful trading evidence includes management accounts and cash flow forecasts available to directors at material dates, board and management meeting minutes, correspondence with accountants and lenders, and analysis of when liabilities exceeded assets or the company could not pay debts as they fell due. The expert reconstructs the balance sheet and cash position over the critical period, assesses whether continued trading increased creditor loss, and quantifies the net deficit increase attributable to the continuation period. Evidence of steps taken to minimise creditor loss, such as ceasing trade, seeking investment, or appointing advisers, is reviewed against the s214 standard of the reasonably diligent director.",
      },
      {
        question:
          "How does a dispute accountant analyse transactions at undervalue?",
        answer:
          "The accountant identifies the transaction, establishes the consideration received by the company, and values the asset or benefit transferred using contemporaneous valuations, market evidence, or discounted cash flow as appropriate. For section 238 claims, the analysis addresses whether the company was insolvent or became insolvent as a result of the transaction, whether the transaction was at undervalue, and the period between the transaction and onset of insolvency. Schedules compare fair value to actual consideration and calculate the recoverable sum for the office holder, with clear linkage to bank payments and accounting entries in the general ledger.",
      },
    ],
    relatedLinks: [
      {
        href: "/case-types/fraud-financial-crime",
        label: "Fraud & Financial Crime",
      },
      {
        href: "/case-types/shareholder-disputes",
        label: "Shareholder Disputes",
      },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
      { href: "/services#loss-quantification", label: "Loss Quantification" },
    ],
  },
  {
    slug: "partnership-disputes",
    title: "Partnership Disputes",
    h1: "Partnership Dispute Accounting Expert",
    metaTitle:
      "Partnership Dispute Accountant | Profit Share & Goodwill | DisputeAccounting",
    metaDescription:
      "Dispute accountants for partnership and LLP disputes, profit share disagreements, capital accounts, goodwill valuation, and dissolution account analysis for solicitors.",
    paragraphs: [
      "Partnership disputes arise in general partnerships, limited partnerships, and limited liability partnerships under the Partnership Act 1890, LLP Act 2000, and bespoke partnership or members' agreements. Financial issues commonly include alleged failure to distribute agreed profit shares, improper allocation of expenses, drawings in excess of entitlement, and disputes over capital account balances on retirement or expulsion. The dispute accountant analyses partnership accounts, tax returns, and underlying ledgers to determine each partner's or member's true economic entitlement.",
      "Goodwill valuation is often contentious on dissolution or buy-out, particularly in professional practices where personal goodwill attributable to individual practitioners may be distinguished from practice goodwill attached to the firm. Experts apply earnings-based methodologies, review work-in-progress and recoverability, and address restrictive covenant impacts on value. Capital account reconciliations require tracing contributions, retained profits, drawings, and notional tax liabilities through the life of the partnership.",
      "LLP member disputes may mirror unfair prejudice analysis in companies, with allegations of exclusion from management or diversion of opportunity. Accounting evidence supports claims for an account and inquiry, dissolution under court order, or specific performance of buy-out provisions in the LLP agreement. Reports address both historic underpayments and the valuation of the departing member's interest, with clear separation of income claims and capital claims.",
    ],
    faqs: [
      {
        question:
          "What financial issues arise most commonly in partnership disputes?",
        answer:
          "Common issues include disagreement over profit allocation formulas, undisclosed or improperly classified expenses, partners taking excessive drawings, failure to make agreed capital contributions, and disputes over whether remuneration should be treated as salary or profit share. On exit, parties dispute capital account balances, the treatment of undistributed profits, and who owns work-in-progress and debtor recoveries. LLP cases may additionally involve allegations that managing members diverted work or clients. Forensic review of the partnership agreement, historic accounts, and tax treatment of distributions is the starting point for any expert instruction.",
      },
      {
        question:
          "How is goodwill valued in a professional practice dispute?",
        answer:
          "Goodwill in professional practices is typically valued using a multiple of maintainable earnings, adjusted for partner remuneration at market rates, with separate consideration of personal versus practice goodwill. Personal goodwill attaches to individual practitioners and may not transfer on sale; practice goodwill attaches to the firm, brand, and recurring client base. The expert normalises earnings, assesses sustainability of fee income, reviews age profile of clients and staff, and applies an appropriate multiple from comparable transactions where available. Restrictive covenants and earn-out structures in partnership deeds affect realizability and must be addressed in the valuation report.",
      },
    ],
    relatedLinks: [
      {
        href: "/case-types/matrimonial-financial-disputes",
        label: "Matrimonial Financial Disputes",
      },
      {
        href: "/case-types/professional-negligence",
        label: "Professional Negligence",
      },
      { href: "/services#expert-witness-reports", label: "Expert Determination" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
    ],
  },
  {
    slug: "professional-negligence",
    title: "Professional Negligence",
    h1: "Professional Negligence Dispute Accounting Expert",
    metaTitle:
      "Accountant Negligence Expert | SAAMCo & But-For | DisputeAccounting",
    metaDescription:
      "Dispute accountants for professional negligence claims, accountant negligence, but-for counterfactuals, SAAMCo scope of duty, and Allied Maples loss of chance quantification.",
    paragraphs: [
      "Professional negligence claims against accountants, tax advisers, and other financial professionals require expert evidence on the quantum of loss caused by breach of duty. The dispute accountant constructs a but-for counterfactual, what the claimant's financial position would have been had the defendant performed the retainer competently, and compares it to the actual outcome. Typical cases include negligent audit opinions, defective tax planning, failure to identify fraud, and errors in management accounts or forecasts relied upon in transactions.",
      "The SAAMCo principle (South Australia Asset Management Corp v York Montague Ltd [1997] AC 191) limits recoverable damages to loss within the scope of the defendant's duty. Where the professional provided information rather than advice on a specific transaction, liability may be limited to the additional loss caused by the information being wrong, not all losses flowing from the transaction. The accounting expert must address SAAMCo at the outset, identifying which categories of loss fall within and outside the scope of the retainer and quantifying each appropriately.",
      "Where loss depends on the hypothetical action of a third party, whether HMRC would have assessed differently, whether a lender would have advanced funds, or whether a transaction would have completed, the Allied Maples Group Ltd v Simmons & Simmons [1995] 1 WLR 1602 loss of chance approach applies. The expert quantifies the lost opportunity as a percentage probability multiplied by the full value of the opportunity, distinguishing past events (balance of probabilities) from future contingencies (reasonable probability threshold). Reports support claims in the High Court, professional indemnity insurer resolutions, and arbitration.",
    ],
    faqs: [
      {
        question:
          "What does a dispute accountant do in an accountant negligence claim?",
        answer:
          "The dispute accountant quantifies the financial loss caused by the defendant accountant's breach of duty, typically by constructing a but-for analysis of tax liabilities, transaction outcomes, or financial statements that would have resulted from competent work. The expert reviews the engagement letter, working papers, correspondence, and industry standards; identifies what was done incorrectly; and calculates the difference between the claimant's actual position and the position they would have been in but for negligence. The report addresses SAAMCo, mitigation, and any alternative causes of loss raised by the defendant, and complies with CPR Part 35 for court proceedings.",
      },
      {
        question: 'What is the "but-for" position in accountant negligence?',
        answer:
          "The but-for position is the counterfactual financial outcome if the accountant had performed the retainer competently, for example, the tax liability that would have been assessed on a correct return, the audit opinion that should have been issued, or the financial statements that should have been prepared. The expert compares this counterfactual to what actually happened and quantifies the net loss attributable to the breach, after deducting any amounts the claimant would have lost in any event. The but-for test is applied separately to each head of loss and must be supported by documentary evidence and reasonable assumptions explained in the expert report.",
      },
    ],
    relatedLinks: [
      {
        href: "/services#loss-quantification",
        label: "Professional Negligence Damages",
      },
      {
        href: "/guides/what-forensic-accountants-do-disputes",
        label: "Professional Negligence Guide",
      },
      {
        href: "/case-types/tax-disputes-hmrc",
        label: "Tax Disputes & HMRC",
      },
      { href: "/glossary", label: "Expert Witness Glossary" },
    ],
  },
  {
    slug: "tax-disputes-hmrc",
    title: "Tax Disputes & HMRC",
    h1: "Tax Dispute & HMRC Accounting Expert",
    metaTitle:
      "Tax Dispute Accountant | HMRC SAV & FTT Tax Chamber | DisputeAccounting",
    metaDescription:
      "Dispute accountants for tax disputes, HMRC Shares and Assets Valuation, IHT, CGT, transfer pricing, and expert evidence in the First-tier Tribunal (Tax Chamber).",
    paragraphs: [
      "Tax disputes with HMRC span direct and indirect taxes, with accounting experts instructed on valuation, profit allocation, and penalty-related loss quantification. Shares and Assets Valuation (SAV) teams challenge valuations in transactions between connected parties, EMI and CSOP options, and estate valuations for inheritance tax. Dispute accountants support taxpayers and solicitors by preparing independent valuations, reviewing HMRC's computations, and explaining commercial rationale for prices paid.",
      "Inheritance tax disputes often turn on business property relief and agricultural property relief, requiring analysis of trading status, investment activities, and the value of unquoted shareholdings. Capital gains tax disputes may involve valuation of assets at disposal, identification of allowable costs and enhancement expenditure, and whether transactions were undertaken otherwise than by way of a bargain at arm's length. Transfer pricing and diverted profits disputes require functional analysis and benchmarking of related-party transactions.",
      "The First-tier Tribunal (Tax Chamber) hears appeals against HMRC decisions on assessments, penalties, and clearances. Expert evidence must comply with tribunal procedure rules; the accountant's role is to assist the tribunal on valuation and accounting matters without usurping the tribunal's function on tax law. Reports should set out methodology, comparables, and sensitivities clearly enough for lay tribunal members and judges to follow.",
    ],
    faqs: [
      {
        question: "When does a tax dispute need a dispute accountant?",
        answer:
          "A dispute accountant is needed when the case turns on valuation, profit measurement, or accounting treatment rather than pure legal interpretation, for example, SAV challenges to share and property valuations, IHT business relief claims requiring trading versus investment analysis, CGT base cost disputes, transfer pricing benchmarking, and penalties based on potential lost revenue. Accountants also assist where HMRC alleges negligent or fraudulent conduct and quantification of tax at risk is required for settlement or tribunal. Early instruction helps frame disclosure to HMRC and reduces the risk of adopting an unsupportable valuation position.",
      },
      {
        question:
          "How does expert evidence work in the First-tier Tribunal (Tax Chamber)?",
        answer:
          "Parties may rely on expert evidence under the Tribunal Procedure (First-tier Tribunal) (Tax Chamber) Rules, with experts giving independent opinion to assist the tribunal. The dispute accountant prepares a written report setting out qualifications, instructions, methodology, and conclusions, and may be required to give oral evidence and answer questions from the tribunal and the other side. Unlike CPR Part 35, the framework is tribunal-specific, but the expert's duty of objectivity is the same. Joint expert directions are less common than in civil litigation but the tribunal may encourage a single joint valuation where appropriate.",
      },
    ],
    relatedLinks: [
      {
        href: "/case-types/professional-negligence",
        label: "Professional Negligence",
      },
      {
        href: "/case-types/ma-transaction-disputes",
        label: "M&A Transaction Disputes",
      },
      { href: "/services#expert-witness-reports", label: "Expert Determination" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
    ],
  },
  {
    slug: "insurance-business-interruption",
    title: "Insurance & Business Interruption",
    h1: "Insurance & Business Interruption Accounting Expert",
    metaTitle:
      "Business Interruption Insurance Expert | BI Formula | DisputeAccounting",
    metaDescription:
      "Dispute accountants for business interruption insurance claims, BI formula, loss of profit, indemnity period, and coverage disputes between policyholders and insurers.",
    paragraphs: [
      "Business interruption insurance indemnifies the policyholder for loss of profit and increased costs arising from insured material damage or specified non-damage extensions. When insurers and policyholders disagree on quantum or coverage, dispute accountants quantify the loss in accordance with the policy wording, typically applying the gross profit basis, increased cost of working provisions, and the indemnity period defined in the schedule.",
      "Loss of profit calculations require establishing what turnover the business would have achieved during the indemnity period but for the insured event, comparing it to actual turnover, and applying the rate of gross profit specified in the policy (or derived from historical accounts). Adjustments address trends, seasonality, and special circumstances, such as pandemic-related market changes, where the policy and case law permit. Increased costs of working are analysed for reasonableness and necessity, with savings from reduced expenditure credited against the claim.",
      "Coverage disputes often overlap with quantum: whether the event triggered the policy, whether supplier or customer extensions apply, and whether the indemnity period was correctly selected. Accountants work alongside coverage counsel, reviewing loss adjusters' calculations, challenging unsupported assumptions, and preparing independent schedules for negotiation, mediation, or court proceedings under the Insurance Act 2015 and FCA regulatory context where applicable.",
    ],
    faqs: [
      {
        question: "When does an insurance claim need a dispute accountant?",
        answer:
          "A dispute accountant is instructed when the policyholder and insurer cannot agree on the BI loss figure, when the loss adjuster's methodology is challenged, or when the claim is large and complex enough to justify independent analysis, for example, multi-site operations, long indemnity periods, or disputes over trends and adjustments. Accountants are also used in coverage-led litigation where quantum must be quantified on alternative scenarios, and in broker professional negligence claims arising from under-insurance. Instruction before final rejection of the claim can support without-prejudice negotiation and ADR.",
      },
      {
        question:
          "What is the BI formula and how do dispute accountants apply it?",
        answer:
          "The standard gross profit basis BI formula is: Adjusted Loss = (Standard Turnover − Actual Turnover) × Rate of Gross Profit + Increased Cost of Working − Savings. Standard turnover is what the business would have earned during the indemnity period but for the insured event, often derived from the same period in the prior year with adjustments for trend and known circumstances. Actual turnover is what was achieved. The rate of gross profit is the policy percentage or the ratio of gross profit to turnover from the financial statements. Increased cost of working covers reasonable additional expenditure to mitigate loss, and savings credit reduced variable costs during the interruption. The dispute accountant reconciles each element to accounting records and challenges unsupported adjustments by the insurer or policyholder.",
      },
    ],
    relatedLinks: [
      { href: "/services#loss-quantification", label: "Lost Profits Quantification" },
      {
        href: "/case-types/commercial-contract-disputes",
        label: "Commercial Contract Disputes",
      },
      { href: "/services#expert-witness-reports", label: "Expert Determination" },
      { href: "/how-to-instruct", label: "How to Instruct an Expert" },
    ],
  },
];

export const caseTypeSlugs = caseTypes.map((c) => c.slug);

export function getCaseType(slug: string): ContentPage | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
