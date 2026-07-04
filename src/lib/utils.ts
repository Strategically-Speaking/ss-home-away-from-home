import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Deterministic dev placeholder image from picsum.photos using a fixed seed
 * so the same slot always renders the same image across reloads/builds.
 */
export function placeholderImage(
  seed: string,
  width = 800,
  height = 600
): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
