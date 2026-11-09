import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Boka tid i ${site.city} – ${site.brandName}`,
  description: `Skicka en bokningsförfrågan till ${site.brandName} i ${site.city}. Vi återkommer för att bekräfta en tid.`,
  robots: {
    index: site.settings.ALLOW_INDEXING,
    follow: site.settings.ALLOW_INDEXING,
  },
};

export default function BookingLayout({ children }: LayoutProps<"/boka-tid">) {
  return children;
}
