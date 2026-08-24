import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Terms of Use | DisputeAccounting.com",
  description: "Terms of use for DisputeAccounting.com referral service.",
  path: "/terms",
  noindex: true,
  nofollow: false,
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Terms of Use" }]} />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>About This Service</h2>
          <p>
            DisputeAccounting.com is a referral and matching service that
            connects legal teams, businesses, and individuals with qualified
            dispute accountants worldwide. We are not a law firm and do not
            provide legal advice.
          </p>

          <h2>No Client Relationship</h2>
          <p>
            Submitting an enquiry does not create a solicitor-client relationship
            with DisputeAccounting.com. Any engagement is directly between you
            and the instructed expert.
          </p>

          <h2>Expert Selection</h2>
          <p>
            We endeavour to match enquiries with suitably qualified experts based
            on the information provided. Final selection and instruction remain
            the responsibility of the instructing solicitor.
          </p>

          <h2>Expert Engagement</h2>
          <p>
            Terms of engagement with experts are agreed directly between the
            instructing party and the expert. We do not charge referral fees to
            legal teams unless separately agreed in writing.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, DisputeAccounting.com accepts
            no liability for the content of expert reports, oral evidence, or any
            outcome of litigation or arbitration. Our liability is limited to the
            matching service itself.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by applicable law. Any disputes shall be
            subject to the exclusive jurisdiction of competent courts.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <SiteEmailLink className="text-accent hover:underline" />.
          </p>

          <p className="text-sm text-body/70">Last updated: May 2025</p>
        </article>
      </Section>
    </>
  );
}
