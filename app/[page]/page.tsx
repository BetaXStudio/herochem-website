// ...existing code...

import Prose from 'components/prose';
import type { Metadata } from 'next';

// Dummy page data for demo
const dummyPages: Record<string, { title: string; body: string; seo?: { title?: string; description?: string }; createdAt?: string; updatedAt?: string; bodySummary?: string }> = {
  about: {
    title: 'Über uns',
    body: '<p>Willkommen bei HeroChem! Wir sind Ihr zuverlässiger Partner für hochwertige Produkte.</p>',
    seo: { title: 'Über uns - HeroChem', description: 'Erfahren Sie mehr über HeroChem.' },
    createdAt: '2025-01-01',
    updatedAt: '2025-07-01',
    bodySummary: 'Willkommen bei HeroChem!'
  },
  kontakt: {
    title: 'Kontakt',
    body: '<p>Kontaktieren Sie uns für weitere Informationen.</p>',
    seo: { title: 'Kontakt - HeroChem', description: 'Kontaktieren Sie HeroChem.' },
    createdAt: '2025-01-01',
    updatedAt: '2025-07-01',
    bodySummary: 'Kontaktieren Sie uns.'
  }
};

export async function generateMetadata(props: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const params = await props.params;
  const page = dummyPages[params.page];

  if (!page) {
    return {
      title: 'Seite nicht gefunden',
      description: 'Die angeforderte Seite existiert nicht.'
    };
  }

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params;
  let page = dummyPages[params.page];
  if (!page) {
    page = {
      title: params.page.charAt(0).toUpperCase() + params.page.slice(1),
      body: `<p>Dies ist eine generische Beispielseite für <strong>${params.page}</strong>.</p>`,
      updatedAt: '2025-07-01'
    };
  }
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body} />
      <p className="text-sm italic">
        {`Dieses Dokument wurde zuletzt aktualisiert am ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt || '2025-07-01'))}.`}
      </p>
    </>
  );
}
