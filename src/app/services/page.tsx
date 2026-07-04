import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/cards/ServiceCard";
import { getPage, getServices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(getPage("services").seo, "/services");
}

export default function ServicesPage() {
  const page = getPage("services");
  const { hero, sections } = page;
  const services = getServices();
  const fitCta = sections.find((s) => s.id === "fit-cta");

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionLabel>Services</SectionLabel>
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
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {fitCta && (
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
            <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
              {fitCta.heading}
            </h2>
            <p className="max-w-2xl text-neutral-700">{fitCta.body}</p>
            {fitCta.cta && (
              <Button href={fitCta.cta.href} variant="primary">
                {fitCta.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            )}
          </div>
        </section>
      )}
    </>
  );
}
