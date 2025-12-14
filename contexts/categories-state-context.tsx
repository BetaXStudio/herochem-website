"use client";

import React, { createContext, useContext, useState } from "react";

interface CategoriesState {
  scrollPosition: number;
  query: string;
  selectedBrand: "deus" | "astera" | null;
  currentCategory: string;
}

interface CategoriesStateContextType {
  savedState: CategoriesState | null;
  saveState: (state: CategoriesState) => void;
  clearState: () => void;
  shouldFreezePage: boolean;
  setShouldFreezePage: (freeze: boolean) => void;
  cachedPageHTML: string | null;
  setCachedPageHTML: (html: string | null) => void;
}

const CategoriesStateContext = createContext<CategoriesStateContextType | undefined>(undefined);

export function CategoriesStateProvider({ children }: { children: React.ReactNode }) {
  const [savedState, setSavedState] = useState<CategoriesState | null>(null);
  const [shouldFreezePage, setShouldFreezePage] = useState(false);
  const [cachedPageHTML, setCachedPageHTML] = useState<string | null>(null);

  const saveState = (state: CategoriesState) => {
    setSavedState(state);
  };

  const clearState = () => {
    setSavedState(null);
    setShouldFreezePage(false);
    setCachedPageHTML(null);
  };

  return (
    <CategoriesStateContext.Provider 
      value={{ 
        savedState, 
        saveState, 
        clearState,
        shouldFreezePage,
        setShouldFreezePage,
        cachedPageHTML,
        setCachedPageHTML
      }}
    >
      {children}
    </CategoriesStateContext.Provider>
  );
}

export function useCategoriesState() {
  const context = useContext(CategoriesStateContext);
  if (context === undefined) {
    throw new Error("useCategoriesState must be used within CategoriesStateProvider");
  }
  return context;
}
