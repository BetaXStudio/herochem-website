import Link from 'next/link';

// Define the Product type
type Product = {
  handle: string;
  featuredImage: {
    url: string;
  };
  title: string;
  priceRange: {
    maxVariantPrice: {
      amount: number | string;
      currencyCode: string;
    };
  };
};

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2 border rounded-lg bg-white shadow-sm' : 'md:col-span-2 md:row-span-1 border rounded-lg bg-white shadow-sm'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <span className="text-gray-400 text-4xl">🖼️</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-2 bg-white bg-opacity-80 border-t">
          <div className="font-semibold text-sm text-gray-800">{item.title}</div>
          <div className="text-xs text-gray-500">{item.priceRange?.maxVariantPrice?.amount} {item.priceRange?.maxVariantPrice?.currencyCode}</div>
        </div>
      </Link>
    </div>
  );
}

export default function ThreeItemGrid() {
  // Hier später Supabase-Logik einfügen
  const products: Product[] = [
    {
      handle: 'produkt-1',
      featuredImage: { url: '' },
      title: 'Produkt 1',
      priceRange: { maxVariantPrice: { amount: '19.99', currencyCode: 'EUR' } }
    },
    {
      handle: 'produkt-2',
      featuredImage: { url: '' },
      title: 'Produkt 2',
      priceRange: { maxVariantPrice: { amount: '29.99', currencyCode: 'EUR' } }
    },
    {
      handle: 'produkt-3',
      featuredImage: { url: '' },
      title: 'Produkt 3',
      priceRange: { maxVariantPrice: { amount: '39.99', currencyCode: 'EUR' } }
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, i) => (
        <ThreeItemGridItem key={product.handle} item={product} size={i === 0 ? 'full' : 'half'} />
      ))}
    </div>
  );
}
