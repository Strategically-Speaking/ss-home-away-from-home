import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/types";
import { placeholderImage } from "@/lib/utils";

export default function ServiceCard({ service }: { service: Service }) {
  const detailHref =
    service.cta.href === "/services"
      ? `/services/${service.slug}`
      : service.cta.href;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-secondary/50 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={placeholderImage(service.slug, 800, 500)}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold text-primary-dark">
          {service.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">
          {service.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm text-neutral-600">
          {service.shortDescription}
        </p>
        <Link
          href={detailHref}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-primary"
        >
          {service.cta.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
