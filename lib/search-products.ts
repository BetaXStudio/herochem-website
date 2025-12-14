// Suchfunktionen für die Produktdatenbank
// Diese Datei nutzt die zentrale Produktdatenbank aus products-database.ts

import { products, type Product } from "./products-database";

// Type alias für die Suchfunktion (kompatibel mit SearchProduct)
export type SearchProduct = Product;

// Suchfunktion mit erweiterten Filteroptionen
export const searchProductsDatabase = (
  query: string,
  limit?: number,
): SearchProduct[] => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();

  // Gewichtetes Scoring-System für bessere Suchergebnisse
  const scoredResults = products.map((product) => {
    let score = 0;

    // Exakte Name-Übereinstimmung (höchste Priorität)
    if (product.name.toLowerCase().includes(searchTerm)) {
      if (product.name.toLowerCase().startsWith(searchTerm)) {
        score += 100; // Name beginnt mit Suchterm
      } else {
        score += 50; // Name enthält Suchterm
      }
    }

    // Beschreibung (mittlere Priorität)
    if (product.description.toLowerCase().includes(searchTerm)) {
      score += 20;
    }

    // Kategorie (niedrige Priorität)
    if (product.category.toLowerCase().includes(searchTerm)) {
      score += 10;
    }

    // Brand (niedrige Priorität)
    if (product.brand.toLowerCase().includes(searchTerm)) {
      score += 10;
    }

    // FilterType (niedrige Priorität)
    if (
      product.filterType &&
      product.filterType.toLowerCase().includes(searchTerm)
    ) {
      score += 5;
    }

    return { product, score };
  });

  // Filtern und sortieren nach Score
  return scoredResults
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit || scoredResults.length) // Only apply limit if provided
    .map((item) => item.product);
};

// Hilfsfunktion für Kategorie-Filter
export const getProductsByCategory = (category: string): SearchProduct[] => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );
};

// Hilfsfunktion für Brand-Filter
export const getProductsByBrand = (brand: string): SearchProduct[] => {
  return products.filter(
    (product) => product.brand.toLowerCase() === brand.toLowerCase(),
  );
};

// Statistiken für Debug/Info
export const getProductStats = () => {
  const stats = {
    total: products.length,
    byCategory: {} as Record<string, number>,
    byBrand: {} as Record<string, number>,
  };

  products.forEach((product) => {
    stats.byCategory[product.category] =
      (stats.byCategory[product.category] || 0) + 1;
    stats.byBrand[product.brand] = (stats.byBrand[product.brand] || 0) + 1;
  });

  return stats;
};
