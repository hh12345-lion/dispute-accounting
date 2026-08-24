"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { SiteNavOverlay } from "./SiteNavOverlay";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/dispute-types", label: "Disputes" },
  { href: "/who-we-help", label: "Who we help" },
  { href: "/guides", label: "Guides" },
];

export function Header() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-accent bg-primary text-white">
        <div className="mx-auto flex min-w-0 max-w-7xl items-stretch gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 shrink flex-col justify-center py-4 pr-4 sm:pr-6 lg:border-r lg:border-white/15 lg:py-5"
          >
            <span className="font-display text-lg font-semibold leading-none tracking-tight sm:text-xl">
              Dispute
            </span>
            <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent sm:text-xs">
              Accounting
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 py-3 sm:gap-4 lg:justify-between lg:py-4">
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Quick links"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setOverlayOpen(true)}
                className="inline-flex min-h-[44px] min-w-0 max-w-[14rem] flex-1 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-left text-sm text-white/90 transition-colors hover:border-white/35 hover:bg-white/10 sm:max-w-none sm:flex-none sm:px-4 lg:min-w-[220px]"
                aria-expanded={overlayOpen}
                aria-controls="site-nav-overlay"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="truncate">Browse all topics</span>
              </button>

              <Link
                href="/contact"
                className="hidden min-h-[44px] items-center gap-1 border-b-2 border-transparent px-1 text-sm font-semibold text-white transition-colors hover:border-accent sm:inline-flex"
              >
                Enquire
                <span aria-hidden>↗</span>
              </Link>

              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/20 lg:hidden"
                aria-label="Open navigation"
                aria-expanded={overlayOpen}
                onClick={() => setOverlayOpen(true)}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-primary/95 px-4 py-2 sm:px-6 lg:hidden">
          <p className="truncate text-center text-xs text-white/70">
            Global dispute accounting —{" "}
            <SiteEmailLink className="text-white hover:underline" />
          </p>
        </div>
      </header>

      <SiteNavOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
