import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { guides } from "@/content/guides";
import { site } from "@/content/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) return { title: `Bilguider – ${site.brandName}` };

  return {
    title: `${guide.title} – ${site.brandName} i ${site.city}`,
    description: guide.excerpt,
    authors: [{ name: guide.author }],
    robots: {
      index: site.settings.ALLOW_INDEXING,
      follow: site.settings.ALLOW_INDEXING,
    },
  };
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) notFound();

  const publishedDate = new Date(`${guide.publishedAt}T12:00:00`).toLocaleDateString(
    "sv-SE",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/bilguider"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold-light"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Alla bilguider
        </Link>

        <header className="mt-10 border-b border-white/10 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            Bilguide · {site.city}
          </p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 leading-7 text-muted">{guide.excerpt}</p>
          <p className="mt-5 text-sm text-muted">
            Publicerad {publishedDate} · Av {guide.author}
          </p>
        </header>

        <div className="mt-8 space-y-6">
          {guide.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-10 grid gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:grid-cols-2 sm:items-center">
          <Link
            href={`/tjanster/${guide.serviceSlug}`}
            className="inline-flex items-center gap-2 font-semibold text-gold-light hover:text-white"
          >
            Läs om {guide.serviceLabel.toLocaleLowerCase("sv-SE")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href={site.bookingPath} className="btn-gold sm:justify-self-end">
            {site.bookingLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
