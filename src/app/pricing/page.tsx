import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { getPage, getServices } from "@/lib/content";

export function generateMetadata(): Metadata {
  const { seo } = getPage("pricing");
  return { title: seo.title, description: seo.description };
}

export default function PricingPage() {
  const page = getPage("pricing");
  const { hero, sections } = page;
  const services = getServices();
  const pricingNote = sections.find((section) => section.id === "pricing-note");
  const familyAccess = sections.find(
    (section) => section.id === "family-access",
  );
  const pricingCta = sections.find((section) => section.id === "pricing-cta");

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="font-heading text-4xl font-semibold text-primary-dark sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-600">{hero.subheadline}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.slug}
                className="flex h-full flex-col rounded-2xl border border-secondary/50 bg-white p-6 shadow-sm"
              >
                <h2 className="min-h-14 font-heading text-xl font-semibold text-primary-dark">
                  {service.name}
                </h2>
                <p className="mt-2 min-h-10 text-sm text-neutral-600">
                  {service.tagline}
                </p>
                <div className="mt-5 min-h-16">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Starting rate
                  </p>
                  <p className="mt-1 text-base font-semibold text-primary-dark">
                    {service.startingRate}
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="outline"
                    className="w-full"
                  >
                    Service details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {pricingNote && (
        <section className="bg-surface py-14 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              {pricingNote.heading}
            </h2>
            <p className="mt-4 text-neutral-700">{pricingNote.body}</p>
          </div>
        </section>
      )}

      {familyAccess && (
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 sm:px-8">
            <h2 className="font-heading text-2xl font-semibold text-primary-dark sm:text-3xl">
              {familyAccess.heading}
            </h2>
            <p className="mt-4 text-neutral-700">{familyAccess.body}</p>
          </div>
        </section>
      )}

      {pricingCta && pricingCta.cta && (
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
            <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
              {pricingCta.heading}
            </h2>
            <p className="max-w-2xl text-neutral-700">{pricingCta.body}</p>
            <Button href={pricingCta.cta.href} variant="primary">
              {pricingCta.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
