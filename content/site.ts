export const site = {
  brandName: "Vardex Bilservice",
  description:
    "Vardex Bilservice erbjuder bilservice, bromsservice, oljebyte och felsökning. Skicka en bokningsförfrågan.",
  phone: "[TELEFON]",
  email: "[E-POST]",
  address: "[GATUADRESS]",
  city: "[ORT]",
  openingStatus: "Öppnar snart",
  openingHours: "[ÖPPETTIDER]",
  home: {
    heroDescription:
      "Behöver bilen service, bromsarbete, oljebyte eller felsökning? Skicka en förfrågan så återkommer vi om en tid.",
    servicesDescription:
      "Välj en tjänst för att läsa mer och skicka en bokningsförfrågan.",
    processDescription:
      "Skicka in vad du behöver hjälp med. Vi återkommer innan någon tid är bokad.",
    bookingNote:
      "En bokningsförfrågan är inte bekräftad förrän vi har svarat och bekräftat en tid.",
    whyDescription:
      "Hos oss börjar det med en förfrågan. Vi går igenom ditt ärende och återkommer innan en tid bekräftas.",
    contactTitle: "Berätta vad du behöver hjälp med",
    contactDescription:
      "Skicka en bokningsförfrågan eller kontakta oss direkt med dina frågor.",
    steps: [
      {
        title: "Skicka en förfrågan",
        description: "Berätta vilken hjälp bilen behöver och lämna dina kontaktuppgifter.",
      },
      {
        title: "Vi bekräftar en tid",
        description: "Vi går igenom din förfrågan och återkommer med en tid.",
      },
      {
        title: "Vi tar hand om din bil",
        description: "När tiden är bekräftad tar vi emot bilen för den överenskomna tjänsten.",
      },
    ],
    whyUs: [
      {
        title: "Tydlig återkoppling",
        description: "Du får svar från oss innan en bokning är bekräftad.",
      },
      {
        title: "Flera tjänster",
        description: "Skicka en förfrågan om bilservice, bromsservice, oljebyte eller felsökning.",
      },
      {
        title: "Börja med en förfrågan",
        description: "Beskriv bilens behov så går vi igenom det inför en bokad tid.",
      },
    ],
  },
  services: [
    {
      name: "Bilservice",
      slug: "bilservice",
      icon: "wrench",
      shortDescription: "Läs mer om bilservice och skicka en bokningsförfrågan.",
      description:
        "Skicka en förfrågan om bilservice. Beskriv bilens behov så återkommer vi om en tid.",
    },
    {
      name: "Bromsservice",
      slug: "bromsservice",
      icon: "brakes",
      shortDescription: "Skicka en förfrågan om bilens bromsar.",
      description:
        "Skicka en förfrågan om bromsservice och berätta vad du har märkt. Vi återkommer om en tid.",
    },
    {
      name: "Oljebyte",
      slug: "oljebyte",
      icon: "oil",
      shortDescription: "Läs mer om oljebyte och fråga om en tid.",
      description:
        "Skicka en förfrågan om oljebyte. Vi återkommer för att prata om en lämplig tid.",
    },
    {
      name: "Felsökning",
      slug: "felsokning",
      icon: "diagnostics",
      shortDescription: "Beskriv bilens symtom och skicka en förfrågan.",
      description:
        "Berätta vad du har märkt med bilen så kan vi gå igenom din förfrågan och återkomma om en tid.",
    },
  ],
  navigation: [
    { label: "Startsida", href: "/" },
    { label: "Tjänster", href: "/#services" },
    { label: "Priser", href: "/#pricing" },
    { label: "Om oss", href: "/#about" },
    { label: "Bilguider", href: "/#guides" },
    { label: "Kontakt", href: "/#contact" },
  ],
  footerLinks: [
    { label: "Startsida", href: "/" },
    ...[
      { label: "Bilservice", href: "/tjanster/bilservice" },
      { label: "Bromsservice", href: "/tjanster/bromsservice" },
      { label: "Oljebyte", href: "/tjanster/oljebyte" },
      { label: "Felsökning", href: "/tjanster/felsokning" },
    ],
    { label: "Boka tid", href: "/boka" },
    { label: "Kontakt", href: "/#contact" },
    { label: "Integritetspolicy", href: "/integritetspolicy" },
  ],
  settings: {
    SHOW_DEMO_BANNER: false,
    ALLOW_INDEXING: false,
  },
} as const;
