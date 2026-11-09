import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Bilservice och verkstadstjänster i ${site.city} – ${site.brandName}`,
  description: `Läs om bilservice, bromsservice, oljebyte och felsökning hos ${site.brandName} i ${site.city}.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName} · {site.city}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Våra tjänster</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Här kan du läsa om våra tjänster och välja vad du vill fråga om.
            Skicka en bokningsförfrågan så återkommer vi om en tid.
          </p>
        </header>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service) => (
            <li
              key={service.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6"
            >
              <h2 className="text-2xl">{service.name}</h2>
              <p className="mt-3 flex-1 leading-7 text-muted">{service.shortDescription}</p>
              <Link
                href={`/tjanster/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white"
              >
                Läs mer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-2xl leading-7 text-muted">{site.home.bookingNote}</p>
          <Link href={site.bookingPath} className="btn-gold mt-5 shrink-0 sm:mt-0">
            {site.bookingLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
