"use client";

import { useState, type FormEvent } from "react";
import type { FormField } from "@/lib/types";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export default function IntakeForm({
  heading,
  description,
  fields,
}: {
  heading?: string;
  description?: string;
  fields: FormField[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
      >
        <h3 className="font-heading text-xl font-semibold text-primary-dark">
          Thank you — we received your message
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          A team member will follow up shortly to talk through next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-secondary/50 bg-white p-6 sm:p-8"
    >
      {heading && (
        <h2 className="font-heading text-2xl font-semibold text-primary-dark">
          {heading}
        </h2>
      )}
      {description && (
        <p className="mt-2 text-sm text-neutral-600">{description}</p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const isFullWidth = field.type === "textarea" || field.type === "select";
          return (
            <div
              key={field.name}
              className={cn("flex flex-col gap-1.5", isFullWidth && "sm:col-span-2")}
            >
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-neutral-800"
              >
                {field.label}
                {field.required && <span aria-hidden="true"> *</span>}
                {field.required && <span className="sr-only"> (required)</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  rows={4}
                  className="rounded-lg border border-secondary bg-surface px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  defaultValue=""
                  className="rounded-lg border border-secondary bg-surface px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="rounded-lg border border-secondary bg-surface px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                />
              )}
            </div>
          );
        })}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          {formspreeId
            ? "Something went wrong sending your message. Please try again or call us directly."
            : "This form isn't fully connected yet — please call or email us directly for now."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
