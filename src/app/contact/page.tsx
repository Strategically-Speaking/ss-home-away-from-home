import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { getPage } from "@/lib/content";
import IntakeForm from "@/components/forms/IntakeForm";
import type { ContactOption } from "@/lib/types";

export function generateMetadata(): Metadata {
  const { seo } = getPage("contact");
  return { title: seo.title, description: seo.description };
}

const iconMap = {
  email: Mail,
  phone: Phone,
  address: MapPin,
};

export default function ContactPage() {
  const page = getPage("contact");
  const { hero, sections } = page;

  const optionsSection = sections.find((s) => s.id === "contact-options");
  const formSection = sections.find((s) => s.id === "intake-form");
  const options = (optionsSection?.options as ContactOption[] | undefined) ?? [];

  return (
    <>
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-semibold text-primary-dark sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-lg text-neutral-600">{hero.subheadline}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div className="space-y-4">
            {options.map((option) => {
              const Icon = iconMap[option.type];
              const content = (
                <div className="flex gap-4 rounded-2xl border border-secondary/50 bg-surface p-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-primary-dark">{option.label}</p>
                    <p className="mt-1 text-sm text-neutral-600">{option.description}</p>
                    {option.action && (
                      <span className="mt-2 inline-block text-sm font-semibold text-primary">
                        {option.action}
                      </span>
                    )}
                  </div>
                </div>
              );

              return option.url ? (
                <a key={option.label} href={option.url} className="block">
                  {content}
                </a>
              ) : (
                <div key={option.label}>{content}</div>
              );
            })}
          </div>

          <div>
            {formSection?.fields && (
              <IntakeForm
                heading={formSection.heading}
                description={formSection.description}
                fields={formSection.fields}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
