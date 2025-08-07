
import { MetadataRoute } from 'next';

const baseUrl = 'https://herochem.com';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static demo routes
  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/injektion`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/oral`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/postcycle`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/fat-burner`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/sexual-wellness`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/peptide-hgh`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/sarms`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/search/aminosaeuren`, lastModified: new Date().toISOString() },
  ];
}
