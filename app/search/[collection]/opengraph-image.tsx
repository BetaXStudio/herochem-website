
import OpengraphImage from 'components/opengraph-image';

// Dummy category data for demo
const dummyCategories: Record<string, { title: string }> = {
  injektion: { title: 'INJEKTION' },
  oral: { title: 'ORAL' },
  postcycle: { title: 'POSTCYCLE' },
  'fat-burner': { title: 'FAT BURNER' },
  'sexual-wellness': { title: 'SEXUAL WELLNESS' },
  'peptide-hgh': { title: 'PEPTIDE & HGH' },
  sarms: { title: 'SARMS' },
  aminosaeuren: { title: 'AMINOSÄUREN' },
};

export default async function Image({ params }: { params: { collection: string } }) {
  const collection = dummyCategories[params.collection] || { title: 'Kategorie nicht gefunden' };
  const title = collection.title;
  return await OpengraphImage({ title });
}
