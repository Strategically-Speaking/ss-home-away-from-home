import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { getService, getServices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: { absolute: "Service Not Found | Home Away from Home" },
      description: "The requested service could not be found.",
    };
  }

  return buildMetadata(
    {
      title: `${service.name} | Home Away from Home`,
      description: service.shortDescription,
    },
    `/services/${slug}`,
  );
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-dark hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all services
          </Link>

          <div className="mt-8">
            <SectionLabel>Service Details</SectionLabel>
            <h1 className="font-heading text-4xl font-semibold text-primary-dark sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-primary">
              {service.tagline}
            </p>
            <p className="mt-5 text-neutral-700">{service.fullDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          <article className="rounded-2xl border border-secondary/50 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-primary-dark">
              Who It Is For
            </h2>
            <p className="mt-3 text-neutral-700">{service.whoItsFor}</p>
          </article>

          <article className="rounded-2xl border border-secondary/50 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-primary-dark">
              Typical Outcomes
            </h2>
            <ul className="mt-3 space-y-2 text-neutral-700">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span
                    className="mt-1 h-2 w-2 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
            Ready to talk through fit and availability?
          </h2>
          <p className="mt-4 text-neutral-700">
            Starting rate: {service.startingRate}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Start an Intake
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
