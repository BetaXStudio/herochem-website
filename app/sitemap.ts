import { MetadataRoute } from "next";

const baseUrl = "https://herochem.com";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static demo routes
  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date().toISOString() },
  ];
}
