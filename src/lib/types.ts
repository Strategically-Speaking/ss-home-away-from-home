// TypeScript interfaces mirroring src/data/home-away-from-home-content.json exactly.
// Do not import the JSON directly anywhere except src/lib/content.ts.

export interface LinkItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Logo {
  text: string;
  hasImage: boolean;
  imageAlt: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface SocialLinks {
  linkedin: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export interface FooterSettings {
  tagline: string;
  copyright: string;
}

export interface BrandSettings {
  primaryColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  mission: string;
  logo: Logo;
  contact: ContactInfo;
  social: SocialLinks;
  nav: LinkItem[];
  footer: FooterSettings;
  brand: BrandSettings;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Hero {
  headline: string;
  subheadline: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  imageAlt?: string;
}

export type SectionType =
  | "cards"
  | "testimonial"
  | "stats-strip"
  | "cta"
  | "text"
  | "list"
  | "contact-info"
  | "form";

export interface ValueListItem {
  title: string;
  description: string;
}

export interface ContactOption {
  type: "email" | "phone" | "address";
  label: string;
  description: string;
  action?: string;
  url?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
  options?: string[];
}

export interface PageSection {
  id: string;
  type: SectionType;
  heading?: string;
  subheading?: string;
  body?: string;
  items?: string | ValueListItem[];
  featured?: string;
  cta?: CTA;
  options?: ContactOption[];
  description?: string;
  destinationEmail?: string;
  fields?: FormField[];
}

export interface Page {
  hero: Hero;
  sections: PageSection[];
  seo: SEO;
}

export interface Pages {
  home: Page;
  about: Page;
  services: Page;
  pricing: Page;
  contact: Page;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  outcomes: string[];
  startingRate: string;
  cta: CTA;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  org: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  siteSettings: SiteSettings;
  pages: Pages;
  services: Service[];
  testimonials: Testimonial[];
  stats: Stat[];
}
