import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import Logo from "@/components/Logo";

const currentYear = new Date().getFullYear();

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function getPhoneHref() {
  return `tel:${site.phone.replace(/[^\d+]/g, "")}`;
}

export default function SiteFooter() {
  const hasAddress = !isPlaceholder(site.address);
  const hasPhone = !isPlaceholder(site.phone);
  const hasEmail = !isPlaceholder(site.email);

  return (
    <footer className="border-t border-gold/50 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 pb-28 sm:grid-cols-2 lg:grid-cols-4 lg:pb-12">
        <div>
          <Logo variant="full" theme="dark" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">{site.description}</p>
        </div>

        <nav aria-label="Snabblänkar">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Snabblänkar
          </h2>
          <ul className="mt-5 space-y-3">
            {site.footerLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-muted transition-colors hover:text-gold-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Kontakt
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-muted">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {hasPhone ? (
                <a className="hover:text-gold-light" href={getPhoneHref()}>{site.phone}</a>
              ) : (
                <span>{site.phone}</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {hasEmail ? (
                <a className="break-all hover:text-gold-light" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              ) : (
                <span>{site.email}</span>
              )}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {hasAddress ? `${site.address}, ${site.city}` : site.openingStatus}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Öppettider
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted">{site.openingHours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} {site.brandName}</span>
          <Link
            href="/integritetspolicy"
            className="w-fit transition-colors hover:text-gold-light"
          >
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
}
