import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Integritetspolicy – ${site.brandName}`,
  description: `Information om hur ${site.brandName} hanterar personuppgifter vid bokningsförfrågningar.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

const rights = [
  "begära tillgång till dina personuppgifter",
  "begära rättelse av felaktiga uppgifter",
  "begära radering eller begränsning av behandlingen när förutsättningarna är uppfyllda",
  "invända mot behandling som grundas på berättigat intresse",
  "begära dataportabilitet när rätten är tillämplig",
  "lämna klagomål till Integritetsskyddsmyndigheten (IMY)",
];

export default function PrivacyPolicyPage() {
  const confirmedContact = (value: string) =>
    value.startsWith("[") && value.endsWith("]") ? "[BEKRÄFTAS]" : value;

  return (
    <main className="min-h-[65vh] bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <p className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light">
          Utkast – ska granskas innan lansering
        </p>

        <header className="mt-8 border-b border-white/10 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-light">
            {site.brandName}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Integritetspolicy</h1>
          <p className="mt-5 leading-7 text-muted">
            Här beskriver vi vilka personuppgifter som hanteras när du skickar en
            bokningsförfrågan och hur du kan utöva dina rättigheter.
          </p>
        </header>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl">Vem ansvarar för uppgifterna?</h2>
            <p className="mt-3 leading-7 text-muted">
              Verksamheten bedrivs under namnet {site.brandName}. Juridiskt
              företagsnamn och fullständiga uppgifter för den
              personuppgiftsansvarige: <strong className="text-foreground">[BEKRÄFTAS]</strong>.
              Kontaktuppgifter för integritetsfrågor:{" "}
              <strong className="text-foreground">[BEKRÄFTAS]</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Vilka uppgifter samlar bokningsformuläret in?</h2>
            <p className="mt-3 leading-7 text-muted">
              Formuläret ber om namn, telefonnummer och bilens registreringsnummer.
              Just nu skickas namn, telefonnummer, vald tjänst, önskat datum och
              klockslag samt bokningsstatus till databasen. Registreringsnumret
              efterfrågas i formuläret men sparas för närvarande inte i
              databasinsättningen. Formuläret har inget fält för e-postadress.
              Bokningsuppgifterna som skickas sparas via Supabase.
            </p>
            <p className="mt-3 leading-7 text-muted">
              Bokningssidan hämtar också upptagna tider från databasen för att visa
              tillgänglighet. Den hämtningen är inte i sig en insamling av ytterligare
              kontaktuppgifter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Varför behandlas uppgifterna?</h2>
            <p className="mt-3 leading-7 text-muted">
              Uppgifterna används för att ta emot och hantera din förfrågan, kontakta
              dig om en tid och planera den efterfrågade tjänsten. Den valda tjänsten
              och bokningsuppgifterna hjälper till att hantera förfrågan.
              Registreringsnumret efterfrågas i formuläret men sparas inte i den
              nuvarande databasinsättningen. Uppgifter kan även behöva behandlas för att hantera frågor om
              förfrågan eller uppfylla skyldigheter enligt lag:{" "}
              <strong className="text-foreground">[BEKRÄFTAS]</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Rättslig grund</h2>
            <p className="mt-3 leading-7 text-muted">
              Den möjliga rättsliga grunden för att hantera en bokningsförfrågan är
              att behandlingen behövs för att på din begäran vidta åtgärder innan ett
              avtal ingås. Vilken grund som gäller för respektive behandling, och om
              andra grunder används, ska fastställas av den
              personuppgiftsansvarige: <strong className="text-foreground">[BEKRÄFTAS]</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Hur länge sparas uppgifterna?</h2>
            <p className="mt-3 leading-7 text-muted">
              Lagringstider för obesvarade förfrågningar, genomförda bokningar och
              uppgifter som behöver bevaras enligt lag:{" "}
              <strong className="text-foreground">[BEKRÄFTAS]</strong>. Uppgifter
              ska inte sparas längre än vad ändamålet eller tillämplig lag kräver.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Mottagare och personuppgiftsbiträden</h2>
            <p className="mt-3 leading-7 text-muted">
              Bokningsformuläret använder Supabase via paketen{" "}
              <code className="text-gold-light">@supabase/ssr</code> och{" "}
              <code className="text-gold-light">@supabase/supabase-js</code> för
              databasförfrågningar och lagring. Supabase är därmed en faktisk
              tjänsteleverantör i den nuvarande implementationen. Information om
              projektets region, tillämpligt personuppgiftsbiträdesavtal och
              eventuella överföringar utanför EU/EES:{" "}
              <strong className="text-foreground">[BEKRÄFTAS]</strong>.
            </p>
            <p className="mt-3 leading-7 text-muted">
              Webbhotellets leverantör och dess roll i behandlingen:{" "}
              <strong className="text-foreground">[BEKRÄFTAS]</strong>. Vi har inte
              hittat någon integration med en e-postleverantör i webbplatsens kod.
              Eventuell e-post- eller SMS-tjänst som används utanför webbplatsen,
              och vilka uppgifter som i så fall lämnas dit:{" "}
              <strong className="text-foreground">[BEKRÄFTAS]</strong>.
            </p>
            <p className="mt-3 leading-7 text-muted">
              Uppgifter ska inte säljas. Andra utlämnanden sker endast när det finns
              en laglig grund, exempelvis om en myndighet begär uppgifter med stöd
              av lag.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Dina rättigheter</h2>
            <p className="mt-3 leading-7 text-muted">
              Du kan, när förutsättningarna i dataskyddsreglerna är uppfyllda:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted">
              {rights.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
            <p className="mt-3 leading-7 text-muted">
              Du har också rätt att återkalla ett samtycke om behandlingen grundas
              på samtycke. Det påverkar inte behandling som redan skett innan
              samtycket återkallades. Kontakta oss för att utöva dina rättigheter;
              vi kan behöva kontrollera din identitet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Kontakt och klagomål</h2>
            <p className="mt-3 leading-7 text-muted">
              Kontakta {site.brandName} om du har frågor eller vill använda dina
              rättigheter. Telefon: {confirmedContact(site.phone)}; e-post:{" "}
              {confirmedContact(site.email)}; adress: {confirmedContact(site.address)},{" "}
              {confirmedContact(site.city)}. Uppgifterna behöver bekräftas innan
              lansering.
            </p>
            <p className="mt-3 leading-7 text-muted">
              Om du anser att dina personuppgifter hanteras felaktigt kan du lämna
              klagomål till Integritetsskyddsmyndigheten (IMY):{" "}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gold-light underline underline-offset-4 hover:text-white"
              >
                imy.se
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
