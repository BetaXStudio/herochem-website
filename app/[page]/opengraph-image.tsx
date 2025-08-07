
import OpengraphImage from 'components/opengraph-image';

// Dummy page data for demo
const dummyPages: Record<string, { title: string; seo?: { title?: string } }> = {
  about: {
    title: 'Über uns',
    seo: { title: 'Über uns - HeroChem' }
  },
  kontakt: {
    title: 'Kontakt',
    seo: { title: 'Kontakt - HeroChem' }
  }
};

export default async function Image({ params }: { params: { page: string } }) {
  const page = dummyPages[params.page] || { title: 'Seite nicht gefunden' };
  const title = page.seo?.title || page.title;
  return await OpengraphImage({ title });
}
