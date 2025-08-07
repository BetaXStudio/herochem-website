import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Dummy function to replace Shopify getProduct
async function getProduct(handle: string) {
  // Return null to trigger notFound
  return null;
}

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  return {
    title: 'Product Not Found',
    description: 'The requested product could not be found.'
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
        <h1 className="mb-6 text-5xl font-medium">Product Not Found</h1>
        <div className="prose mx-auto max-w-6xl text-black prose-headings:text-black prose-a:text-black dark:text-white dark:prose-headings:text-white dark:prose-a:text-white">
          <p>The requested product could not be found.</p>
        </div>
      </div>
    </div>
  );
}