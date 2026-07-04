import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import StatCard from "@/components/cards/StatCard";
import { getPage, getServices, getFeaturedTestimonial, getStats } from "@/lib/content";
import { placeholderImage } from "@/lib/utils";

export function generateMetadata(): Metadata {
  const { seo } = getPage("home");
  return { title: seo.title, description: seo.description };
}

export default function HomePage() {
  const page = getPage("home");
  const { hero } = page;
  const services = getServices();
  const testimonial = getFeaturedTestimonial(0);
  const stats = getStats();

  const servicesSection = page.sections.find((s) => s.id === "services-preview");
  const socialProofSection = page.sections.find((s) => s.id === "social-proof");
  const ctaSection = page.sections.find((s) => s.id === "cta-section");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-primary-dark sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-neutral-600">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {hero.ctaPrimary && (
                <Button href={hero.ctaPrimary.href} variant="primary">
                  {hero.ctaPrimary.label}
                </Button>
              )}
              {hero.ctaSecondary && (
                <Button href={hero.ctaSecondary.href} variant="outline">
                  {hero.ctaSecondary.label}
                </Button>
              )}
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-lg md:h-[28rem] md:translate-y-6">
            <Image
              src={placeholderImage("home-hero", 900, 900)}
              alt={hero.imageAlt ?? ""}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      {servicesSection && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <SectionLabel>How We Help</SectionLabel>
              <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
                {servicesSection.heading}
              </h2>
              <p className="mt-3 text-neutral-600">{servicesSection.subheading}</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social proof */}
      {socialProofSection && testimonial && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <SectionLabel>{socialProofSection.heading ?? "What families say"}</SectionLabel>
            <div className="mt-6 text-left">
              <TestimonialCard testimonial={testimonial} featured />
            </div>
          </div>
        </section>
      )}

      {/* Stats strip */}
      {stats.length > 0 && (
        <section className="bg-primary-dark py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {ctaSection && (
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
            <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
              {ctaSection.heading}
            </h2>
            <p className="max-w-2xl text-neutral-700">{ctaSection.body}</p>
            {ctaSection.cta && (
              <Button href={ctaSection.cta.href} variant="primary">
                {ctaSection.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            )}
          </div>
        </section>
      )}
    </>
  );
}
