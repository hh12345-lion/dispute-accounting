import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Contact | DisputeAccounting.com",
  description:
    "Submit a confidential enquiry to be matched with a qualified dispute accountant. Legal teams and businesses worldwide welcome.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Get in Touch"
        subtitle="Send a short enquiry and we will respond within one business day. All matters are handled confidentially."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="mx-auto grid min-w-0 max-w-3xl gap-8">
          <div className="rounded-[var(--radius-card)] border border-border bg-section-alt p-6 sm:p-8">
            <ContactForm />
          </div>
          <p className="text-center text-sm text-body">
            Prefer email?{" "}
            <SiteEmailLink className="font-medium text-accent hover:underline" />
          </p>
        </div>
      </Section>
    </>
  );
}
