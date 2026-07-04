import rawContent from "@/data/home-away-from-home-content.json";
import type {
  SiteContent,
  SiteSettings,
  Page,
  Service,
  Testimonial,
  Stat,
} from "@/lib/types";

// This is the ONLY file in the codebase that imports the content JSON directly.
// Every page/component must go through these accessors.

const content = rawContent as unknown as SiteContent;

export function getSiteSettings(): SiteSettings {
  return content.siteSettings;
}

export function getPage(slug: keyof SiteContent["pages"]): Page {
  return content.pages[slug];
}

export function getServices(): Service[] {
  return content.services;
}

export function getService(slug: string): Service | undefined {
  return content.services.find((s) => s.slug === slug);
}

export function getTestimonials(): Testimonial[] {
  return content.testimonials;
}

export function getFeaturedTestimonial(index = 0): Testimonial | undefined {
  return content.testimonials[index];
}

export function getStats(): Stat[] {
  return content.stats;
}

/**
 * Resolves the "ref:collection" / "ref:collection[index]" string convention
 * used in page section JSON (e.g. items: "ref:services") to actual data.
 */
export function resolveRef(ref: string): unknown {
  const match = ref.match(/^ref:([a-zA-Z]+)(?:\[(\d+)\])?$/);
  if (!match) return ref;
  const [, collection, index] = match;

  const collections: Record<string, unknown[]> = {
    services: content.services,
    testimonials: content.testimonials,
    stats: content.stats,
  };

  const data = collections[collection];
  if (!data) return undefined;
  return index !== undefined ? data[Number(index)] : data;
}
