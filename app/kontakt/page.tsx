import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Kontakta bilverkstad i ${site.city} – ${site.brandName}`,
  description: `Kontakta ${site.brandName} i ${site.city} om bilservice, bromsservice, oljebyte eller felsökning.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function displayedValue(value: string) {
  return isPlaceholder(value) ? "Meddelas inom kort" : value;
}

export default function ContactPage() {
  const addressIsPlaceholder = isPlaceholder(site.address);
  const city = isPlaceholder(site.city) ? "" : site.city;
  const address = addressIsPlaceholder
    ? site.openingStatus
    : [site.address, city].filter(Boolean).join(", ");

  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName} · {site.city}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Kontakta oss</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Har du en fråga om bilen eller våra tjänster? Här hittar du våra
            kontaktuppgifter och öppettider.
          </p>
        </header>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <dt className="flex items-center gap-3 text-lg font-medium">
              <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
              Telefon
            </dt>
            <dd className="mt-3 pl-8 text-muted">{displayedValue(site.phone)}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <dt className="flex items-center gap-3 text-lg font-medium">
              <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
              E-post
            </dt>
            <dd className="mt-3 pl-8 text-muted">{displayedValue(site.email)}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <dt className="flex items-center gap-3 text-lg font-medium">
              <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              Adress
            </dt>
            <dd className="mt-3 pl-8 text-muted">{address}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface p-6">
            <dt className="flex items-center gap-3 text-lg font-medium">
              <Clock3 className="h-5 w-5 text-gold" aria-hidden="true" />
              Öppettider
            </dt>
            <dd className="mt-3 pl-8 text-muted">
              {displayedValue(site.openingHours)}
            </dd>
          </div>
        </dl>

        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-2xl leading-7 text-muted">
            Skicka en bokningsförfrågan så återkommer vi för att bekräfta en tid.
          </p>
          <Link href={site.bookingPath} className="btn-gold mt-5 shrink-0 sm:mt-0">
            {site.bookingLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
