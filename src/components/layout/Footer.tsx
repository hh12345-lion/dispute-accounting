import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

const linkGroups = [
  {
    label: "Practice",
    links: [
      { href: "/services", label: "Services" },
      { href: "/dispute-types", label: "Dispute types" },
      { href: "/case-types", label: "Case types" },
      { href: "/sectors", label: "Sectors" },
    ],
  },
  {
    label: "Audience",
    links: [
      { href: "/who-we-help/solicitors-law-firms", label: "Legal teams" },
      { href: "/who-we-help/businesses-individuals", label: "Businesses" },
      { href: "/how-to-instruct", label: "How to instruct" },
      { href: "/qualifications", label: "Qualifications" },
    ],
  },
  {
    label: "Reference",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/glossary", label: "Glossary" },
      { href: "/faq", label: "FAQ" },
      { href: "/what-is-dispute-accounting", label: "Definition" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-accent px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold">Instruct an expert</p>
            <p className="mt-1 max-w-md text-sm text-white/90">
              Confidential enquiries for litigation, arbitration, and complex financial disputes worldwide.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] w-full items-center justify-center border-2 border-white bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:bg-white/90 sm:w-auto"
          >
            Submit enquiry
          </Link>
        </div>
      </div>

      <div className="bg-primary px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <p className="font-display text-2xl font-semibold leading-tight">
                Dispute
                <br />
                <span className="text-accent">Accounting</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Independent expert matching for legal teams and businesses. Not a law firm — no legal advice.
              </p>
              <p className="mt-4 text-sm">
                <SiteEmailLink className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white" />
              </p>
            </div>

            <div className="min-w-0 flex-1 space-y-6 lg:max-w-2xl">
              {linkGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-block rounded-sm border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 transition-colors hover:border-accent hover:bg-white/10 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#12102e] px-4 py-4 text-white/55 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 DisputeAccounting</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
