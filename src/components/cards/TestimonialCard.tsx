import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export default function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={
        featured
          ? "rounded-2xl bg-white p-8 shadow-sm sm:p-10"
          : "rounded-2xl border border-secondary/50 bg-white p-6"
      }
    >
      <Quote
        className="h-8 w-8 text-secondary-dark"
        aria-hidden="true"
      />
      <blockquote
        className={
          featured
            ? "mt-4 font-heading text-xl italic text-neutral-800 sm:text-2xl"
            : "mt-4 text-base italic text-neutral-700"
        }
      >
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-primary-dark">{testimonial.name}</span>
        <span className="text-neutral-500"> — {testimonial.title}</span>
      </figcaption>
    </figure>
  );
}
