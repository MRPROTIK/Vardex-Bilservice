import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.settings.ALLOW_INDEXING) return [];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be set before enabling sitemap indexing.",
    );
  }

  const baseUrl = siteUrl.replace(/\/+$/, "");
  const paths = [
    "/",
    "/tjanster",
    "/priser",
    "/kontakt",
    "/om-oss",
    "/bilguider",
    "/integritetspolicy",
    site.bookingPath,
    ...site.services.map(({ slug }) => `/tjanster/${slug}`),
    ...guides.map(({ slug }) => `/bilguider/${slug}`),
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
