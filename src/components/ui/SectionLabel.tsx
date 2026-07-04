import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
