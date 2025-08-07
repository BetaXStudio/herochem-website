import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';

// Dummy category and product data for demo
const dummyCategories: Record<string, { title: string; description: string }> = {
  injektion: { title: 'INJEKTION', description: 'Produkte für Injektion.' },
  oral: { title: 'ORAL', description: 'Produkte für orale Einnahme.' },
  postcycle: { title: 'POSTCYCLE', description: 'Produkte für Postcycle.' },
  'fat-burner': { title: 'FAT BURNER', description: 'Produkte für Fettverbrennung.' },
  'sexual-wellness': { title: 'SEXUAL WELLNESS', description: 'Produkte für Sexual Wellness.' },
  'peptide-hgh': { title: 'PEPTIDE & HGH', description: 'Peptide und HGH Produkte.' },
  sarms: { title: 'SARMS', description: 'SARMS Produkte.' },
  aminosaeuren: { title: 'AMINOSÄUREN', description: 'Aminosäuren Produkte.' },
};

const dummyProducts = [
  { id: '1', name: 'Produkt 1', image: '/placeholder.png', price: '19.99', category: 'injektion' },
  { id: '2', name: 'Produkt 2', image: '/placeholder.png', price: '29.99', category: 'oral' },
  { id: '3', name: 'Produkt 3', image: '/placeholder.png', price: '39.99', category: 'postcycle' },
  { id: '4', name: 'Produkt 4', image: '/placeholder.png', price: '49.99', category: 'fat-burner' },
  { id: '5', name: 'Produkt 5', image: '/placeholder.png', price: '59.99', category: 'sexual-wellness' },
  { id: '6', name: 'Produkt 6', image: '/placeholder.png', price: '69.99', category: 'peptide-hgh' },
  { id: '7', name: 'Produkt 7', image: '/placeholder.png', price: '79.99', category: 'sarms' },
  { id: '8', name: 'Produkt 8', image: '/placeholder.png', price: '89.99', category: 'aminosaeuren' },
];

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const categoryData = dummyCategories[collection];
  if (!categoryData) {
    return {
      title: 'Kategorie nicht gefunden',
      description: 'Die angeforderte Kategorie existiert nicht.'
    };
  }
  return {
    title: categoryData.title,
    description: categoryData.description
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const categoryData = dummyCategories[collection];
  if (!categoryData) {
    return <p className="py-3 text-lg">Kategorie nicht gefunden</p>;
  }
  const products = dummyProducts.filter((p) => p.category === collection);
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">{categoryData.title}</h1>
      <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">{categoryData.description}</p>
      {products.length === 0 ? (
        <p className="py-3 text-lg">Keine Produkte in dieser Kategorie gefunden.</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
