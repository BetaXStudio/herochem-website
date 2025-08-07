
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

// Dummy product data for demo
const dummyProducts = [
  { 
    id: '1', 
    handle: 'produkt-1',
    title: 'Produkt 1', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 1' },
    priceRange: { minVariantPrice: { amount: '19.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '19.99', currencyCode: 'EUR' } },
    category: 'injektion' 
  },
  { 
    id: '2', 
    handle: 'produkt-2',
    title: 'Produkt 2', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 2' },
    priceRange: { minVariantPrice: { amount: '29.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '29.99', currencyCode: 'EUR' } },
    category: 'oral' 
  },
  { 
    id: '3', 
    handle: 'produkt-3',
    title: 'Produkt 3', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 3' },
    priceRange: { minVariantPrice: { amount: '39.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '39.99', currencyCode: 'EUR' } },
    category: 'postcycle' 
  },
  { 
    id: '4', 
    handle: 'produkt-4',
    title: 'Produkt 4', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 4' },
    priceRange: { minVariantPrice: { amount: '49.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '49.99', currencyCode: 'EUR' } },
    category: 'fat-burner' 
  },
  { 
    id: '5', 
    handle: 'produkt-5',
    title: 'Produkt 5', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 5' },
    priceRange: { minVariantPrice: { amount: '59.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '59.99', currencyCode: 'EUR' } },
    category: 'sexual-wellness' 
  },
  { 
    id: '6', 
    handle: 'produkt-6',
    title: 'Produkt 6', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 6' },
    priceRange: { minVariantPrice: { amount: '69.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '69.99', currencyCode: 'EUR' } },
    category: 'peptide-hgh' 
  },
  { 
    id: '7', 
    handle: 'produkt-7',
    title: 'Produkt 7', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 7' },
    priceRange: { minVariantPrice: { amount: '79.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '79.99', currencyCode: 'EUR' } },
    category: 'sarms' 
  },
  { 
    id: '8', 
    handle: 'produkt-8',
    title: 'Produkt 8', 
    featuredImage: { url: '/placeholder.png', altText: 'Produkt 8' },
    priceRange: { minVariantPrice: { amount: '89.99', currencyCode: 'EUR' }, maxVariantPrice: { amount: '89.99', currencyCode: 'EUR' } },
    category: 'aminosaeuren' 
  },
];

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  // Get category from URL (simulate Next.js dynamic route)
  let category = 'all';
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const match = path.match(/\/search\/(\w+)/);
    if (match) category = match[1] || 'all';
  }

  // Filter products by category
  const products = category === 'all'
    ? dummyProducts
    : dummyProducts.filter((p) => p.category === category);

  return (
    <>
      <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProductGridItems products={products} />
      </Grid>
    </>
  );
}
