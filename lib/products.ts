// Export product types and data for use across the app

export type CategoryLabel = 
  | 'INJECTION'
  | 'ORAL'
  | 'PEPTIDES & HGH'
  | 'SARMS'
  | 'POST CYCLE THERAPY'
  | 'FAT BURN'
  | 'AMINO ACIDS'
  | 'SEXUAL HEALTH'
  | 'ALL PRODUCTS';

export type Brand = 'deus' | 'astera';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: CategoryLabel;
  brand: Brand;
  filterType?: string;
};

// Import products from categories page - this will need to be extracted
// For now, I'll re-export a subset to avoid circular imports
export const getAllProducts = (): Product[] => {
  // This will contain all products from the categories page
  // We'll import this data to avoid duplication
  return [];
};

export const searchProducts = (query: string, products: Product[]): Product[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  ).slice(0, 6); // Limit to 6 results for dropdown
};
