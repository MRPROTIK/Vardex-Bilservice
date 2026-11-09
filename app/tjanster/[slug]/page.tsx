import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { site } from "@/content/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return site.services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return site.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: site.brandName };

  return {
    title: `${service.name} i ${site.city} – ${site.brandName}`,
    description: `${service.description} ${site.city}.`,
    robots: {
      index: site.settings.ALLOW_INDEXING,
      follow: site.settings.ALLOW_INDEXING,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold-light"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Alla tjänster
        </Link>
        <section className="mt-12 rounded-3xl border border-white/10 bg-surface p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl">{service.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {service.description}
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            {site.home.bookingNote}
          </p>
          <Link href={site.bookingPath} className="btn-gold mt-8">
            {site.bookingLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
