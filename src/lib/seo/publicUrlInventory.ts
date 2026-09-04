import { caseTypeSlugs } from "@/data/case-types";
import { sectorSlugs } from "@/data/sectors";
import { guideSlugs } from "@/data/guides";

import { getPublicSiteUrl } from "@/lib/site";

/** Canonical host for sitemap, robots.txt, and schema @id values. */
export const CANONICAL_HOST = getPublicSiteUrl();

/**
 * Indexable static marketing routes.
 * Add new first-class pages here, then run: npm run seo:generate
 */
export const APP_STATIC_PATHS = [
  "/",
  "/services",
  "/dispute-types",
  "/who-we-help",
  "/who-we-help/solicitors-law-firms",
  "/who-we-help/businesses-individuals",
  "/case-types",
  "/sectors",
  "/what-is-dispute-accounting",
  "/qualifications",
  "/how-to-instruct",
  "/faq",
  "/guides",
  "/experts",
  "/glossary",
  "/cookies",
] as const;

/**
 * Routes that exist in the app but must NOT appear in sitemap.xml.
 * /contact is indexable (metadata) but excluded from sitemap per SEO-ARCHITECTURE.md.
 * /thank-you, /privacy, /terms use noindex in page metadata.
 */
export const SITEMAP_EXCLUDED_PATHS = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
] as const;

export interface PublicUrlInventory {
  allPaths: string[];
  allUrls: string[];
  counts: {
    static: number;
    caseTypes: number;
    sectors: number;
    guides: number;
    total: number;
  };
}

export function buildPublicUrlInventory(): PublicUrlInventory {
  const caseTypePaths = caseTypeSlugs.map((slug) => `/case-types/${slug}`);
  const sectorPaths = sectorSlugs.map((slug) => `/sectors/${slug}`);
  const guidePaths = guideSlugs.map((slug) => `/guides/${slug}`);

  const staticPaths = [...APP_STATIC_PATHS];
  const dynamicPaths = [...caseTypePaths, ...sectorPaths, ...guidePaths];

  const excluded = new Set<string>(SITEMAP_EXCLUDED_PATHS);
  const allPaths = [...new Set([...staticPaths, ...dynamicPaths])]
    .filter((path) => !excluded.has(path))
    .sort((a, b) => a.localeCompare(b));

  return {
    allPaths,
    allUrls: allPaths.map((path) => toAbsoluteUrl(path)),
    counts: {
      static: staticPaths.length,
      caseTypes: caseTypePaths.length,
      sectors: sectorPaths.length,
      guides: guidePaths.length,
      total: allPaths.length,
    },
  };
}

export function toAbsoluteUrl(path: string): string {
  if (path === "/") return `${CANONICAL_HOST}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_HOST}${normalized}`;
}

export function getSitemapChangefreq(path: string): string {
  if (path === "/") return "weekly";
  return "monthly";
}

/** Priorities per docs/SEO-ARCHITECTURE.md Appendix B */
export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/dispute-types") return 0.95;
  if (path === "/who-we-help") return 0.93;
  if (path === "/case-types") return 0.92;
  if (path === "/sectors") return 0.9;
  if (
    path === "/what-is-dispute-accounting" ||
    path === "/who-we-help/solicitors-law-firms" ||
    path === "/who-we-help/businesses-individuals"
  ) {
    return 0.9;
  }
  if (path === "/qualifications" || path === "/how-to-instruct") {
    return 0.88;
  }
  if (path.startsWith("/case-types/")) return 0.88;
  if (path === "/faq" || path === "/guides") return 0.87;
  if (path.startsWith("/sectors/")) return 0.86;
  if (path === "/experts") return 0.8;
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/cookies") return 0.65;
  return 0.7;
}
