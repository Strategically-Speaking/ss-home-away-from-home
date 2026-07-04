import type { MetadataRoute } from "next";
import { getServices } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/privacy-policy",
  ];
  const serviceRoutes = getServices().map((service) => `/services/${service.slug}`);

  const lastModified = new Date();

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
