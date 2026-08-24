export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.disputeaccounting.com";

export const SITE_NAME = "DisputeAccounting";
export const SITE_EMAIL = "contact@disputeaccounting.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/dispute-accounting";

export const SITE_TAGLINE = "Global dispute accounting network";

export const COLORS = {
  primary: "#1E1B4B",
  accent: "#059669",
  accentHover: "#047857",
  background: "#FFFFFF",
  sectionAlt: "#EEF2FF",
  border: "#C7D2FE",
  heading: "#1E1B4B",
  body: "#334155",
} as const;
