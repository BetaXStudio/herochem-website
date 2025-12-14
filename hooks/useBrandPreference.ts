"use client";

import { useEffect, useState } from "react";

export type Brand = "deus" | "astera" | null;

const BRAND_STORAGE_KEY = "herochem_preferred_brand";

export function useBrandPreference() {
  const [preferredBrand, setPreferredBrand] = useState<Brand>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load brand preference from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(BRAND_STORAGE_KEY);
      if (stored && (stored === "deus" || stored === "astera")) {
        setPreferredBrand(stored as Brand);
      }
    } catch (error) {
      console.error("Error loading brand preference:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save brand preference to localStorage
  const setBrandPreference = (brand: Brand) => {
    try {
      if (brand) {
        localStorage.setItem(BRAND_STORAGE_KEY, brand);
      } else {
        localStorage.removeItem(BRAND_STORAGE_KEY);
      }
      setPreferredBrand(brand);
    } catch (error) {
      console.error("Error saving brand preference:", error);
    }
  };

  // Get URL with brand parameter
  const getBrandUrl = (basePath: string, category?: string) => {
    if (!preferredBrand) {
      return category
        ? `${basePath}?category=${encodeURIComponent(category)}`
        : basePath;
    }

    const params = new URLSearchParams();
    if (category) {
      params.append("category", category);
    }
    params.append("brand", preferredBrand);

    return `${basePath}?${params.toString()}`;
  };

  return {
    preferredBrand,
    setBrandPreference,
    getBrandUrl,
    isLoaded,
  };
}
