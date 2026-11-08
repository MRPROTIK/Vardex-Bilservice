import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const stats = [
  { value: "12k+", label: "Vehicles serviced" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "96%", label: "Repeat clients" },
  { value: "48h", label: "Average turnaround" },
];

const features: Feature[] = [
  {
    icon: Wrench,
    title: "Full Service & Repair",
    description:
      "Diagnostics, scheduled maintenance, brakes, suspension, and engine work done with precision.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Workshop Quality",
    description:
      "Certified technicians and transparent service reports keep your vehicle in peak condition.",
  }, {
    icon: Gauge,
    title: "Performance Upgrades",
    description:
      "From tuning to inspections, we optimize reliability, efficiency, and driving confidence.",
  },
];

const services = [
  "Engine diagnostics",
  "Brake & suspension",
  "Oil & filter service",
  "Air conditioning",
  "Tire & alignment",
  "Bodywork & detailing",
];

const process = [
  {
    step: "01",
    title: "Book Your Service",
    description: "Choose your preferred time and describe the maintenance or issue you need resolved.",
  },
  {
    step: "02",
    title: "Precision Inspection",
    description: "We assess your vehicle, explain the condition, and provide a transparent recommendation.",
  },
  {
    step: "03",
    title: "Drive Away Confident",
    description: "Receive expert workmanship, quality checks, and a smooth, reliable return to the road.",
  },
];

const testimonials = [
  {
    quote:
      "Fast, professional, and brutally honest. Vardexo fixed our service warning and explained everything clearly.",
    name: "Lina M.",
    role: "BMW owner",
  },
  {
    quote:
      "The workshop feels premium and the attention to detail is obvious. My car runs smoother than ever.",
    name: "Oskar N.",
    role: "Volvo owner",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 shadow-lg shadow-amber-500/30">
                <CarFront className="h-5 w-5 text-slate-950" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-[0.14em] text-white">VARDEXO</p>
                <p className="text-[10px] uppercase tracking-[0.32em] text-slate-400">Bilservice</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#services" className="transition hover:text-white">Tjänster</a>
              <a href="#why-us" className="transition hover:text-white">Varför oss</a>
              <a href="#process" className="transition hover:text-white">Process</a>
              <a href="#reviews" className="transition hover:text-white">Recensioner</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-amber-400/60 hover:bg-amber-400/10 sm:inline-flex"
              >
                Boka tid
              </a>
              <a
                href="tel:+46701234567"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                <PhoneCall className="h-4 w-4" />
                Ring oss
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),transparent_20%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.18),transparent_25%)]" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-sm text-amber-200">
                <Sparkles className="h-4 w-4" />
                Premium bilservice för varje resa
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Din bil, <span className="text-amber-400">vår expertis.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Från service och reparationer till förebyggande underhåll — vi håller din bil i toppform med högkvalitativt arbete, smarta lösningar och en kundupplevelse i toppklass.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Boka service
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Se tjänster
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                {[
                  "Kvalitetsgaranti",
                  "Snabb respons",
                  "Transparent prissättning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-amber-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-2xl shadow-slate-950/50">
                <div className="rounded-[24px] border border-white/10 bg-slate-950/80 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Service status</p>
                      <h2 className="mt-2 text-2xl font-bold text-white">Bil klar för nästa resa</h2>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 p-2 text-emerald-400">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Nästa besiktning</p>
                      <p className="mt-3 text-2xl font-bold text-white">14 apr</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Köra säkert</p>
                      <p className="mt-3 text-2xl font-bold text-white">97%</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-amber-100">Servicecheck</span>
                      <span className="text-sm font-semibold text-amber-300">På gång</span>
                    </div>
                    <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      "Oljebyte genomfört",
                      "Bromsar kontrollade",
                      "Däckens skick verifierat",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-900/80 p-3 text-slate-200">
                        <div className="rounded-full bg-emerald-500/15 p-1 text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Våra tjänster</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Helhetslösningar för din bil</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200">
              Schemalägg service <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-lg shadow-slate-950/40">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/12 text-amber-300 ring-1 ring-amber-400/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-900/80 p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-amber-400" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Varför Vardexo</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Service som ger trygghet och resultat</h2>

              <div className="mt-8 space-y-5">
                {[
                  "Erfarna mekaniker med fokus på kvalitet och precision",
                  "Transparent kommunikation innan, under och efter arbetet",
                  "Modern utrustning för diagnos och förebyggande underhåll",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="mt-0.5 rounded-full bg-amber-400/12 p-1 text-amber-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-amber-400/15 blur-3xl" />
              <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-blue-500/15 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-slate-900/80 p-6 sm:p-8">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Kundnöjdhet</p>
                    <p className="mt-2 text-3xl font-black text-white">4.9/5</p>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5">
                    <Clock3 className="h-8 w-8 text-amber-400" />
                    <p className="mt-4 text-2xl font-bold text-white">48h</p>
                    <p className="mt-1 text-sm text-slate-300">Snabb återkomst</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5">
                    <Gauge className="h-8 w-8 text-amber-400" />
                    <p className="mt-4 text-2xl font-bold text-white">100%</p>
                    <p className="mt-1 text-sm text-slate-300">Kontrollerad kvalitet</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4 text-sm leading-7 text-slate-200">
                  <div className="flex items-center gap-2 text-amber-200">
                    <MapPin className="h-4 w-4" />
                    Centralt beläget i Skövde
                  </div>
                  <p className="mt-3">
                    Flexibla tider, noggrann kvalitet och personligt bemötande för både privatpersoner och företag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-16">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Så fungerar det</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">En enkel process, ett starkt resultat</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {process.map(({ step, title, description }) => (
              <div key={step} className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{step}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Recensioner</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Det säger våra kunder</h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {testimonials.map(({ quote, name, role }) => (
              <div key={name} className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
                <div className="mb-5 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-sm text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-[32px] border border-amber-400/25 bg-gradient-to-r from-amber-400/15 via-slate-900 to-slate-900 p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Boka idag</p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Låt oss ta hand om din bil</h2>
                <p className="mt-3 max-w-xl text-slate-300">
                  Kontakta oss för ett gratis samtal om din bil, ditt behov och den bästa lösningen för dig.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="tel:+46701234567"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  <PhoneCall className="h-4 w-4" />
                  +46 70 123 45 67
                </a>
                <a
                  href="mailto:info@vardexo.se"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/30"
                >
                  info@vardexo.se
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-400">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500">
                <CarFront className="h-4 w-4 text-slate-950" />
              </div>
              <span className="font-semibold tracking-[0.14em] text-white">VARDEXO</span>
            </div>
            <p>© 2026 Vardexo Bilservice. Alla rättigheter förbehållna.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
