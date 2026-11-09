import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/content/guides";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Bilguider i ${site.city} – ${site.brandName}`,
  description: `Läs guider om bilservice, bromsar och motorlampor från ${site.brandName} i ${site.city}.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

export default function GuidesPage() {
  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName} · {site.city}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Bilguider</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Läs om service, bromsar och varningslampor. Råd kan skilja sig mellan
            bilmodeller; följ alltid bilens instruktionsbok och kontakta en
            fackperson när du är osäker.
          </p>
        </header>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <li
              key={guide.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 sm:p-8"
            >
              <p className="text-sm text-gold-light">
                {new Date(`${guide.publishedAt}T12:00:00`).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-3 text-2xl">{guide.title}</h2>
              <p className="mt-3 flex-1 leading-7 text-muted">{guide.excerpt}</p>
              <Link
                href={`/bilguider/${guide.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white"
              >
                Läs guiden
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
