import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Privacy Policy | DisputeAccounting.com",
  description: "Privacy policy for DisputeAccounting.com, GDPR compliant.",
  path: "/privacy",
  noindex: true,
  nofollow: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Data Controller</h2>
          <p>
            DisputeAccounting.com is the data controller for personal data
            submitted through this website. Contact:{" "}
            <SiteEmailLink className="text-accent hover:underline" />.
          </p>

          <h2>What Data We Collect</h2>
          <p>
            When you submit an enquiry form, we collect your name, email address,
            organisation (if provided), and any message you choose to share. We
            process contact form submissions via a secure webhook to our internal
            systems (and optionally Formspree as a backup when configured).
          </p>

          <h2>Lawful Basis</h2>
          <p>
            We process your data on the basis of legitimate interests (responding
            to your enquiry and matching you with suitable expert witnesses) and,
            where applicable, your consent.
          </p>

          <h2>How We Use Your Data</h2>
          <p>
            We use your data solely to respond to your enquiry, match you with
            qualified dispute accountants, and communicate about your case. We do
            not sell your data to third parties.
          </p>

          <h2>Data Retention</h2>
          <p>
            Enquiry data is retained for up to 24 months unless a longer period is
            required for ongoing case matching or legal obligations.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, rectify, erase, restrict
            processing, object, and data portability. You may lodge a complaint
            with the Information Commissioner&apos;s Office (ICO). Contact us at{" "}
            <SiteEmailLink className="text-accent hover:underline" /> to exercise your
            rights.
          </p>

          <h2>Cookies & Analytics</h2>
          <p>
            We use cookies and similar technologies as described in our{" "}
            <a href="/cookies">Cookie Policy</a>. Non-essential cookies (analytics,
            marketing, preferences) are only placed after you consent via our cookie
            banner. You can update your choices anytime using Cookie Settings in
            the footer. We implement Google Consent Mode v2 where Google services
            are used.
          </p>

          <h2>International Transfers</h2>
          <p>
            Form data may be processed by our automation provider and, if used,
            third-party form services outside your country. Appropriate safeguards
            are in place including Standard Contractual Clauses where applicable.
          </p>

          <p className="text-sm text-body/70">Last updated: May 2025</p>
        </article>
      </Section>
    </>
  );
}
