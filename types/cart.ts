// Local cart types to replace Shopify types

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: Money;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  product?: {
    id: string;
    handle: string;
    title: string;
    featuredImage: {
      url: string;
      altText: string;
      width: number;
      height: number;
    };
  };
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  variants: ProductVariant[];
  featuredImage: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  images: {
    url: string;
    altText: string;
    width: number;
    height: number;
  }[];
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
  tags: string[];
  updatedAt: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: ProductVariant;
}

export interface Cart {
  id: string | undefined;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: CartItem[];
  totalQuantity: number;
}
