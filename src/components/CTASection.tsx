import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export function CTASection({
  title = "Need a Dispute Accountant?",
  description = "Tell us about your matter and we will connect you with a qualified expert. Confidential enquiries welcome — response within one business day.",
  buttonLabel = "Submit an enquiry",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-14 md:py-16">
      <div
        className="pointer-events-none absolute -right-16 top-0 h-full w-1/3 bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 text-white/85">{description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {buttonLabel}
          </Link>
          <p className="mt-6 text-sm text-white/75">
            Or email{" "}
            <SiteEmailLink className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white" />
          </p>
        </div>
      </div>
    </section>
  );
}
