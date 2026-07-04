import type { Metadata } from "next";
import type { SEO } from "@/lib/types";

/**
 * Canonical production domain. Update DNS/Vercel domain settings separately;
 * this constant drives metadataBase, canonical URLs, and the sitemap.
 */
export const SITE_URL = "https://homeawayfromhome.com";

/**
 * Builds page metadata from a page's SEO fields.
 *
 * Uses `title.absolute` so the page's full SEO title is used as-is instead
 * of being run through the root layout's `%s | Home Away from Home`
 * template (which would double up the brand name — every page's SEO title
 * already includes it).
 */
export function buildMetadata(seo: SEO, path: string): Metadata {
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: seo.title,
      description: seo.description,
    },
  };
}
