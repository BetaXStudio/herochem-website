# Safari VRAM Overflow Fix - Dokumentation für zukünftige Referenz

## Problem
Safari crasht nach mehreren Suchen oder längerem Scrollen, weil zu viele Bilder im VRAM (Video RAM) geladen bleiben. Safari hat im Vergleich zu Chrome/Firefox ein aggressiveres Memory-Management und entlädt Bilder nicht automatisch aus dem VRAM wenn sie nicht mehr sichtbar sind.

## Symptome
- Safari Tab wird nach mehreren Suchen langsam
- Safari Tab crasht komplett nach intensiver Nutzung
- Besonders betroffen: Suchergebnisse-Dropdown, horizontale Scroll-Sektionen (Featured Products)

## Lösung: IntersectionObserver mit Bild-Unloading

### Kernkonzept
Statt Bilder nur beim ersten Sichtbarwerden zu laden (lazy loading), werden Bilder **aktiv entladen** wenn sie den Viewport verlassen. Dies gibt VRAM frei.

### Implementation Pattern

```tsx
// 1. States für Visibility-Tracking
const [imageLoaded, setImageLoaded] = useState(false);
const [isVisible, setIsVisible] = useState(false);
const [imageSrc, setImageSrc] = useState<string | null>(null);
const containerRef = useRef<HTMLDivElement>(null);
const isMountedRef = useRef(true);

// 2. IntersectionObserver der NICHT unobserved nach erstem Intersect
useEffect(() => {
  isMountedRef.current = true;
  const container = containerRef.current;
  if (!container) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!isMountedRef.current) return;
        
        if (entry.isIntersecting) {
          // Element ist sichtbar -> Bild laden
          setIsVisible(true);
          setImageSrc(product.image);
        } else {
          // Element ist NICHT mehr sichtbar -> Bild entladen!
          setIsVisible(false);
          setImageSrc(null);
          setImageLoaded(false); // Reset für nächstes Laden
        }
      });
      // WICHTIG: Kein observer.unobserve() hier!
    },
    { 
      rootMargin: "100px", // Etwas Puffer für smoothes Laden
      threshold: 0 
    }
  );

  observer.observe(container);

  return () => {
    isMountedRef.current = false;
    observer.disconnect();
  };
}, [product.image]);

// 3. Bild nur rendern wenn imageSrc gesetzt ist
{imageSrc && (
  <Image
    src={imageSrc}
    alt={product.name}
    fill
    className={`object-contain transition-opacity duration-300 ${
      imageLoaded ? "opacity-100" : "opacity-0"
    }`}
    onLoad={() => setImageLoaded(true)}
    loading="lazy"
    sizes="..."
  />
)}

// 4. Loading-Spinner nur zeigen wenn sichtbar UND noch nicht geladen
{isVisible && !imageLoaded && (
  <div className="absolute inset-0 flex items-center justify-center">
    <div 
      className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300"
      style={{ borderTopColor: brandColor }}
    />
  </div>
)}
```

### Wichtige Details

1. **Kein `unobserve()`**: Der Observer muss weiterlaufen um auch das Verlassen des Viewports zu erkennen.

2. **`imageSrc` auf `null` setzen**: Dadurch wird das `<Image>` Component komplett aus dem DOM entfernt und Safari gibt den VRAM frei.

3. **`imageLoaded` zurücksetzen**: Beim nächsten Sichtbarwerden muss der Loading-Spinner wieder angezeigt werden.

4. **`isMountedRef` Check**: Verhindert State-Updates auf unmounted Components (React Warning).

5. **`isVisible && !imageLoaded`**: Loading-Spinner nur zeigen wenn das Element sichtbar ist UND das Bild noch lädt. Sonst würden unsichtbare Elemente auch Spinner rendern.

### Angewendet auf

1. **`/components/layout/navbar/search.tsx`** - `SearchResultItem` Component
   - Suchergebnis-Dropdown mit vielen Produktbildern
   - rootMargin: 100px (vertikal)

2. **`/components/categories/featured-products-section.tsx`** - `FeaturedProductCard` Component
   - Horizontale Scroll-Sektionen (Best Sellers, Best Rated)
   - rootMargin: 150px (mehr Puffer für horizontales Scrollen)

### Brand-spezifische Farben
- **Deus Medical**: `#ef4444` (Rot)
- **Astera**: `#d67f3f` (Orange)

Die Farbe wird über den Produktnamen erkannt:
```tsx
const getProductBrandColor = (productName: string): string => {
  const lowerName = productName.toLowerCase();
  if (lowerName.includes('astera') || lowerName.includes('ast-')) {
    return '#d67f3f'; // Astera Orange
  }
  return '#ef4444'; // Deus Red (default)
};
```

## Warum funktioniert das?

Safari's WebKit Engine behält Bilder im GPU-Memory selbst wenn sie mit CSS versteckt werden (`display: none`, `visibility: hidden`, `opacity: 0`). Nur durch **komplettes Entfernen aus dem DOM** (`imageSrc = null` → kein `<Image>` gerendert) wird der VRAM tatsächlich freigegeben.

## Alternativen die NICHT funktionieren

- `loading="lazy"` alleine - lädt nur verzögert, entlädt nicht
- CSS `display: none` - Bild bleibt im VRAM
- CSS `visibility: hidden` - Bild bleibt im VRAM
- `opacity: 0` - Bild bleibt im VRAM
- Nur einmaliges lazy loading mit `unobserve()` - entlädt nie

## Performance-Überlegungen

- Bilder werden bei jedem Scroll in/aus dem Viewport neu geladen
- Trade-off: Mehr Netzwerk-Requests vs. stabiler Safari
- Next.js Image-Caching hilft: Bilder kommen aus dem Browser-Cache
- rootMargin gibt Puffer für "pre-loading" bevor Element sichtbar wird

---

*Erstellt: 15. Dezember 2025*
*Betrifft: Safari auf macOS und iOS*
*Getestet mit: Next.js 14, React 18*
