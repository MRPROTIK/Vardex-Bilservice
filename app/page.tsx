import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CarFront,
  Disc3,
  Droplets,
  Mail,
  MapPin,
  Phone,
  ScanSearch,
  Send,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/content/site";

const serviceIcons: Record<(typeof site.services)[number]["icon"], LucideIcon> = {
  wrench: Wrench,
  brakes: Disc3,
  oil: Droplets,
  diagnostics: ScanSearch,
};

const pageTitle = `${site.brandName} – Bilverkstad i ${site.city}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: site.description,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

function isPlaceholder(value: string) {
  return value.startsWith("[") && value.endsWith("]");
}

function getPhoneHref() {
  return isPlaceholder(site.phone)
    ? "#contact"
    : `tel:${site.phone.replace(/[^\d+]/g, "")}`;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {site.settings.SHOW_DEMO_BANNER && (
        <p className="bg-gold px-4 py-2 text-center text-sm font-medium text-background">
          Demoläge – kontaktuppgifterna kan vara platshållare.
        </p>
      )}

      <section className="relative isolate border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_38%,rgba(201,162,75,0.13),transparent_38%),linear-gradient(135deg,#141414_0%,#0A0A0A_65%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-36">
          <div className="fade-in max-w-3xl">
            {site.openingStatus === "Öppnar snart" && (
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light">
                <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                {site.openingStatus}
              </p>
            )}
            <h1 className="max-w-3xl text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Bilservice med en tydlig bokningsprocess.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {site.home.heroDescription}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.bookingPath} className="btn-gold">
                {site.bookingLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={getPhoneHref()} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ring oss
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <section id="services" className="scroll-mt-24 py-16 sm:py-20">
          <div className="fade-in mb-9 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
              Våra tjänster
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Tjänster för din bil</h2>
            <p className="mt-4 leading-7 text-muted">{site.home.servicesDescription}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.map((service, index) => {
              const Icon = serviceIcons[service.icon];

              return (
                <li
                  key={service.slug}
                  className="fade-in rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-gold/50"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-xl">{service.name}</h3>
                  <p className="mt-2 min-h-14 text-sm leading-6 text-muted">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/tjanster/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white"
                  >
                    Läs mer
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="border-t border-white/10 py-16 sm:py-20">
          <div className="fade-in mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
              Nästa steg
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Så fungerar det</h2>
            <p className="mt-4 leading-7 text-muted">{site.home.processDescription}</p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {site.home.steps.map((step, index) => {
              const icons = [Send, CalendarCheck, CarFront];
              const Icon = icons[index];

              return (
                <li
                  key={step.title}
                  className="fade-in rounded-2xl border border-white/10 bg-surface p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold-light">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold tracking-[0.14em] text-gold">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl">{step.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{step.description}</p>
                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-gold/30 bg-gold/5 px-5 py-4 text-center text-sm leading-6 text-gold-light">
            {site.home.bookingNote}
          </p>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
          <div className="fade-in mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
              Om verkstaden
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Varför {site.brandName}?</h2>
            <p className="mt-4 leading-7 text-muted">{site.home.whyDescription}</p>
          </div>
          <ul className="mt-9 grid gap-4 md:grid-cols-3">
            {site.home.whyUs.map((reason, index) => (
              <li
                key={reason.title}
                className="fade-in rounded-2xl border border-white/10 bg-surface p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm font-semibold tracking-[0.14em] text-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl">{reason.title}</h3>
                <p className="mt-2 leading-7 text-muted">{reason.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
          <div className="fade-in grid gap-8 rounded-3xl border border-gold/30 bg-[linear-gradient(120deg,rgba(201,162,75,0.09),#141414_48%)] p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
                Kontakta oss
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{site.home.contactTitle}</h2>
              <p className="mt-3 max-w-xl leading-7 text-muted">
                {site.home.contactDescription}
              </p>
              <dl className="mt-6 grid gap-4 text-sm text-muted sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Telefon</dt>
                    <dd>
                      {isPlaceholder(site.phone) ? (
                        site.phone
                      ) : (
                        <a href={getPhoneHref()} className="hover:text-gold-light">
                          {site.phone}
                        </a>
                      )}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">E-post</dt>
                    <dd>
                      {isPlaceholder(site.email) ? (
                        site.email
                      ) : (
                        <a href={`mailto:${site.email}`} className="hover:text-gold-light">
                          {site.email}
                        </a>
                      )}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Adress</dt>
                    <dd>
                      {isPlaceholder(site.address)
                        ? site.openingStatus
                        : `${site.address}, ${site.city}`}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={site.bookingPath} className="btn-gold">
                {site.bookingLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={getPhoneHref()} className="btn-outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ring oss
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
