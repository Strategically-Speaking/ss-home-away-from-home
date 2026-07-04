import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Home Away from Home",
  description:
    "Learn how Home Away from Home collects, uses, and protects personal information, including policies for live camera access.",
};

export default function PrivacyPolicyPage() {
  const { contact } = getSiteSettings();

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-heading text-4xl font-semibold text-primary-dark sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-600">
            Last updated: July 3, 2026
          </p>
          <p className="mt-5 max-w-3xl text-neutral-700">
            Home Away from Home values your privacy and your family&apos;s
            trust. This policy explains what information we collect, how we use
            it, and how we protect access to care-related information.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6">
          <article>
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              Information we collect
            </h2>
            <p className="mt-3 text-neutral-700">
              We may collect contact details, intake information, care
              preferences, billing information, and communications you send us
              through forms, email, or phone.
            </p>
          </article>

          <article>
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              How we use information
            </h2>
            <p className="mt-3 text-neutral-700">
              We use information to provide care services, coordinate
              scheduling, communicate with families, support safety, process
              payments, and meet legal or regulatory obligations.
            </p>
          </article>

          <article>
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              Live camera access policy
            </h2>
            <p className="mt-3 text-neutral-700">
              Authorized clients will be able to log in and check in on their
              loved ones through real-time camera views around our facility.
              Camera access is limited to approved users and is intended for
              safety, transparency, and peace of mind.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
              <li>Access is restricted to authorized account holders.</li>
              <li>
                Credentials must not be shared with unauthorized individuals.
              </li>
              <li>
                Camera feeds are provided for live monitoring and may be subject
                to security controls, logging, and access review.
              </li>
              <li>
                Recording, redistribution, or public sharing of camera content
                may be restricted by policy and applicable law.
              </li>
            </ul>
          </article>

          <article>
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              Data security
            </h2>
            <p className="mt-3 text-neutral-700">
              We use administrative, technical, and physical safeguards designed
              to reduce unauthorized access, use, or disclosure of personal
              information.
            </p>
          </article>

          <article>
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              Contact us about privacy
            </h2>
            <p className="mt-3 text-neutral-700">
              For privacy questions or requests, contact us at {contact.email}{" "}
              or call {contact.phone}.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
