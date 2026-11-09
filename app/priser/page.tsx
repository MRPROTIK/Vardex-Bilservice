import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Priser på bilservice i ${site.city} – ${site.brandName}`,
  description: `Se prisinformation för bilservice, bromsservice, oljebyte och felsökning hos ${site.brandName} i ${site.city}.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName} · {site.city}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Priser och offerter</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Priset beror på vilken bil det gäller och vilket arbete som behövs.
            Kontakta oss för en offert utifrån just din bil och tjänst.
          </p>
        </header>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.services.map((service) => (
            <li
              key={service.slug}
              className="flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-surface p-6 sm:flex-row sm:items-center"
            >
              <div>
                <h2 className="text-2xl">{service.name}</h2>
                <p className="mt-2 leading-7 text-muted">
                  {service.fromPrice === undefined
                    ? "Kontakta oss för offert"
                    : `Från ${service.fromPrice.toLocaleString("sv-SE")} kr ${
                        site.pricesIncludeVat ? "inkl." : "exkl."
                      } moms`}
                </p>
              </div>
              <Link
                href={`/tjanster/${service.slug}`}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-light hover:text-white"
              >
                Läs mer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-10 rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
          <h2 className="text-2xl">Vad påverkar priset?</h2>
          <p className="mt-4 leading-7 text-muted">
            Priset påverkas bland annat av bilmodell, vilka reservdelar som behövs
            och hur lång tid arbetet tar. Priser som anges här är{" "}
            {site.pricesIncludeVat ? "inklusive" : "exklusive"} moms.
          </p>
        </section>

        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-2xl leading-7 text-muted">{site.home.bookingNote}</p>
          <Link href={site.bookingPath} className="btn-gold shrink-0">
            {site.bookingLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
