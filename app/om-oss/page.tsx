import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Om ${site.brandName} i ${site.city}`,
  description: `Läs om ${site.brandName} i ${site.city}, våra tjänster och hur en bokningsförfrågan går till.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

function hasPlaceholder(value: string) {
  return /\[[^\]]+\]/.test(value);
}

export default function AboutPage() {
  const ownerInfo = [
    site.ownerMechanic.name,
    site.ownerMechanic.role,
    site.ownerMechanic.experience,
  ];
  const ownerInfoHasPlaceholder = ownerInfo.some(hasPlaceholder);

  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName} · {site.city}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Om oss</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            {site.brandName} erbjuder bilservice, bromsservice, oljebyte och
            felsökning. Här kan du läsa om verksamheten och hur du kontaktar oss.
          </p>
        </header>

        <section className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
          {site.aboutText.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
          <h2 className="text-2xl">Ägare och mekaniker</h2>
          {ownerInfoHasPlaceholder ? (
            <p className="mt-3 text-sm text-muted">Information kommer</p>
          ) : (
            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-muted">Namn</dt>
                <dd className="mt-1">{site.ownerMechanic.name}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Roll</dt>
                <dd className="mt-1">{site.ownerMechanic.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Erfarenhet</dt>
                <dd className="mt-1">{site.ownerMechanic.experience}</dd>
              </div>
            </dl>
          )}
        </section>
      </div>
    </main>
  );
}
