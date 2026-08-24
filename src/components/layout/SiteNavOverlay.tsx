"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  navServiceLinks,
  navDisputeTypeLinks,
  navCaseTypeLinks,
  navSectorLinks,
  navResourcesMenuLinks,
  whoWeHelpItems,
} from "@/data/nav";

const navSections = [
  { title: "Services", hub: "/services", links: navServiceLinks },
  { title: "Dispute Types", hub: "/dispute-types", links: navDisputeTypeLinks },
  {
    title: "Case Types",
    hub: "/case-types",
    links: [{ href: "/case-types", label: "All case types" }, ...navCaseTypeLinks],
  },
  {
    title: "Sectors",
    hub: "/sectors",
    links: [{ href: "/sectors", label: "All sectors" }, ...navSectorLinks],
  },
  { title: "Who We Help", hub: "/who-we-help", links: whoWeHelpItems },
  {
    title: "Resources",
    hub: "/guides",
    links: [
      ...navResourcesMenuLinks,
      { href: "/faq", label: "FAQ" },
      { href: "/glossary", label: "Glossary" },
      { href: "/what-is-dispute-accounting", label: "What Is Dispute Accounting?" },
    ],
  },
];

interface SiteNavOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SiteNavOverlay({ open, onClose }: SiteNavOverlayProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] motion-safe:animate-[fadeIn_200ms_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-primary/70 backdrop-blur-sm"
        aria-label="Close navigation"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto bg-white shadow-2xl motion-safe:animate-[slideDown_280ms_ease-out]">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-border px-4 py-4 sm:px-6 lg:px-8">
          <p className="font-display text-lg font-semibold text-primary">Browse topics</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-border text-primary hover:bg-section-alt"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-10">
          {navSections.map((section) => (
            <section key={section.title} className="min-w-0">
              <div className="mb-3 flex items-baseline justify-between gap-2 border-b border-border pb-2">
                <h2 className="font-display text-base font-semibold text-primary">{section.title}</h2>
                <Link
                  href={section.hub}
                  className="shrink-0 text-xs font-medium text-accent hover:underline"
                  onClick={onClose}
                >
                  Hub →
                </Link>
              </div>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-md py-1.5 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="border-t border-border bg-section-alt px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-body hover:text-primary"
              onClick={onClose}
            >
              Home
            </Link>
            <span className="text-border" aria-hidden>
              |
            </span>
            <Link
              href="/contact"
              className="text-sm font-semibold text-accent hover:underline"
              onClick={onClose}
            >
              Submit an enquiry →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
