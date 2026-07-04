import type { Metadata } from "next";
import Image from "next/image";
import { getPage } from "@/lib/content";
import { placeholderImage } from "@/lib/utils";
import SectionLabel from "@/components/ui/SectionLabel";
import type { ValueListItem } from "@/lib/types";

export function generateMetadata(): Metadata {
  const { seo } = getPage("about");
  return { title: seo.title, description: seo.description };
}

export default function AboutPage() {
  const page = getPage("about");
  const { hero, sections } = page;

  const story = sections.find((s) => s.id === "story");
  const founder = sections.find((s) => s.id === "founder");
  const values = sections.find((s) => s.id === "values");
  const valueItems = (values?.items as ValueListItem[] | undefined) ?? [];

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

      {story && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
            <div className="relative order-2 h-72 overflow-hidden rounded-3xl shadow-md md:order-1 md:h-96">
              <Image
                src={placeholderImage("about-story", 800, 900)}
                alt="Home Away from Home team caring for a client in a warm setting"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionLabel>Our story</SectionLabel>
              <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
                {story.heading}
              </h2>
              <p className="mt-4 text-neutral-600">{story.body}</p>
            </div>
          </div>
        </section>
      )}

      {founder && (
        <section className="bg-secondary/30 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-md sm:h-120">
              <Image
                src={placeholderImage("about-founder", 900, 1200)}
                alt="Founder placeholder portrait"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <SectionLabel>Leadership</SectionLabel>
              <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
                {founder.heading}
              </h2>
              <p className="mt-4 text-neutral-700">{founder.body}</p>
            </div>
          </div>
        </section>
      )}

      {values && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <SectionLabel>What we stand for</SectionLabel>
              <h2 className="font-heading text-3xl font-semibold text-primary-dark sm:text-4xl">
                {values.heading}
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {valueItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-secondary/50 bg-surface p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
