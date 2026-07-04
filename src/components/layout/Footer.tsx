import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { getSiteSettings } from "@/lib/content";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";

export default function Footer() {
  const { name, nav, contact, social, footer } = getSiteSettings();

  const socialLinks = [
    {
      key: "instagram",
      href: social.instagram,
      label: "Instagram",
      Icon: InstagramIcon,
    },
    {
      key: "facebook",
      href: social.facebook,
      label: "Facebook",
      Icon: FacebookIcon,
    },
    {
      key: "linkedin",
      href: social.linkedin,
      label: "LinkedIn",
      Icon: LinkedinIcon,
    },
  ].filter((s) => s.href && !s.href.startsWith("PLACEHOLDER"));

  return (
    <footer className="border-t border-secondary/40 bg-primary-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold">{name}</p>
            <p className="mt-2 text-sm text-white/80">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="mb-3 font-semibold uppercase tracking-wide text-white/60">
              Navigate
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="mb-3 font-semibold uppercase tracking-wide text-white/60">
              Contact
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/80 hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="text-white/80 hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-white/80">{contact.address}</span>
              </li>
            </ul>
          </div>

          {socialLinks.length > 0 && (
            <div className="text-sm">
              <p className="mb-3 font-semibold uppercase tracking-wide text-white/60">
                Follow
              </p>
              <ul className="flex gap-3">
                {socialLinks.map(({ key, href, label, Icon }) => (
                  <li key={key}>
                    <a
                      href={href}
                      aria-label={label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">{footer.copyright}</p>
          <div className="mt-3 text-xs text-white/70">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
