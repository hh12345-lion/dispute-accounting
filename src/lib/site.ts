/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://disputeaccounting.com";

/** Public origin for sitemap/canonicals — never localhost or Netlify preview. */
export function getPublicSiteUrl(): string {
  const fallback = PRODUCTION_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.protocol = "https:";
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();

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
