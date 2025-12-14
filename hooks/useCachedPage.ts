import { useRef } from "react";

/**
 * Hook zum Caching und Freezing von Seiten beim Navigieren
 * Die Seite wird im Speicher behalten und nicht neu gerendert
 */
export function useCachedPage() {
  const cachedDOMRef = useRef<HTMLElement | null>(null);
  const isCachedRef = useRef(false);

  /**
   * Speichert den aktuellen DOM ab
   */
  const cacheCurrentPage = (selector: string = "main") => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      // Klone den aktuellen DOM
      cachedDOMRef.current = element.cloneNode(true) as HTMLElement;
      isCachedRef.current = true;
      return true;
    }
    return false;
  };

  /**
   * Stellt die gecachte Seite wieder her
   */
  const restoreCachedPage = (selector: string = "main"): boolean => {
    const container = document.querySelector(selector) as HTMLElement;
    if (container && cachedDOMRef.current && isCachedRef.current) {
      // Ersetze den Inhalt mit dem gecachten
      container.replaceWith(cachedDOMRef.current.cloneNode(true));
      return true;
    }
    return false;
  };

  /**
   * Clearet den Cache
   */
  const clearCache = () => {
    cachedDOMRef.current = null;
    isCachedRef.current = false;
  };

  return {
    cacheCurrentPage,
    restoreCachedPage,
    clearCache,
    isCached: isCachedRef.current,
  };
}
