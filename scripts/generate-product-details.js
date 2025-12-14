const fs = require("fs");
const path = require("path");

// RTF zu HTML Konverter - vereinfacht
function rtfToHtml(rtfContent, productName) {
  // RTF-Markup entfernen und bereinigen
  let text = rtfContent
    // RTF-Header und Befehle entfernen
    .replace(/\{\\rtf1[^}]*\}/g, "")
    .replace(/\{\\fonttbl[^}]*\}/g, "")
    .replace(/\{\\colortbl[^}]*\}/g, "")
    .replace(/\{\\[^}]*\}/g, "")
    .replace(/\\[a-zA-Z]+\d*\s*/g, " ")
    .replace(/\\[^a-zA-Z\s]/g, "")
    // Geschweifte Klammern und Steuerzeichen entfernen
    .replace(/[{}]/g, "")
    .replace(/\\\\/g, "")
    // Mehrfache Leerzeichen reduzieren
    .replace(/\s+/g, " ")
    .trim();

  // Text in Zeilen aufteilen
  const lines = text.split(/\\par|\n|\\/).filter((line) => line.trim());

  // HTML generieren
  let html = `
    <div class="product-details">
      <h1 class="product-title">${productName}</h1>`;

  let sections = [];
  let currentSection = "";

  for (let line of lines) {
    line = line.trim();
    if (line) {
      // Chemische Formel oder CAS-Nummer als erste Zeile
      if (
        line.includes("CAS number") ||
        line.includes("Molecular Weight") ||
        line.includes("Formula")
      ) {
        if (!html.includes('<h2 class="chemical-description">')) {
          html += `<h2 class="chemical-description">Chemische Eigenschaften</h2>`;
        }
        sections.push(`<p><strong>${line}</strong></p>`);
      }
      // Überschriften erkennen
      else if (
        line.length < 50 &&
        (line.includes("Overview") ||
          line.includes("Dosage") ||
          line.includes("Side Effects") ||
          line.includes("Mechanism") ||
          line.includes("Interactions") ||
          line.includes("Composition"))
      ) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = `<p><strong>${line}:</strong>`;
      }
      // Normale Textzeilen
      else if (line.length > 10) {
        if (currentSection) {
          currentSection += ` ${line}</p>`;
          sections.push(currentSection);
          currentSection = "";
        } else {
          sections.push(`<p>${line}</p>`);
        }
      }
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  // Sections zu HTML hinzufügen
  if (sections.length > 0) {
    html += '<div class="product-description">';
    html += sections.join("");
    html += "</div>";
  }

  html += `
    </div>
    <style>
      .product-details {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        line-height: 1.6;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      .product-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #1a1a1a;
        border-bottom: 3px solid #3b82f6;
        padding-bottom: 0.75rem;
        text-align: center;
      }
      .chemical-description {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color: #374151;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 5px solid #3b82f6;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .product-description {
        font-size: 1rem;
        color: #4b5563;
      }
      .product-description p {
        margin-bottom: 1.25rem;
        text-align: justify;
        padding: 0.75rem;
        background: #f9fafb;
        border-radius: 6px;
        border-left: 3px solid #e5e7eb;
      }
      .product-description p:last-child {
        margin-bottom: 0;
      }
      .product-description strong {
        color: #1f2937;
        font-weight: 600;
      }
    </style>`;

  return html;
}

// Hauptfunktion
function generateProductDetailsDatabase() {
  console.log("🚀 Starte Generierung der product-details-database.ts...");

  const dbPath = path.join(__dirname, "../lib/products-database.ts");
  const rtfDir = path.join(__dirname, "../lib/rtf_temp");
  const outputPath = path.join(__dirname, "../lib/product-details-database.ts");

  // Prüfe ob Dateien existieren
  if (!fs.existsSync(dbPath)) {
    console.error("❌ products-database.ts nicht gefunden");
    return;
  }

  if (!fs.existsSync(rtfDir)) {
    console.error("❌ rtf_temp Verzeichnis nicht gefunden");
    return;
  }

  // Produktdatenbank lesen
  const dbContent = fs.readFileSync(dbPath, "utf8");

  // RTF-Dateien laden
  const rtfFiles = fs.readdirSync(rtfDir).filter((f) => f.endsWith(".rtf"));
  console.log(`📁 ${rtfFiles.length} RTF-Dateien gefunden`);

  // Produkte aus Datenbank extrahieren
  const productRegex =
    /{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*description:\s*'([^']*)',\s*price:\s*([\d.]+),\s*image:\s*'([^']*)',\s*category:\s*'([^']*)',\s*brand:\s*'([^']*)',\s*filterType:\s*'([^']*)'\s*}/g;

  const products = [];
  let match;
  while ((match = productRegex.exec(dbContent)) !== null) {
    const [, id, name, description, price, image, category, brand, filterType] =
      match;

    // Nur DEUS-Produkte (keine Platzhalter)
    if (brand === "deus" && !name.includes("Coming Soon")) {
      products.push({
        id,
        name,
        description,
        price,
        image,
        category,
        brand,
        filterType,
      });
    }
  }

  console.log(`🔍 ${products.length} DEUS-Produkte extrahiert`);

  // Neue Datenbank generieren
  let output = `import { CategoryLabel, Brand } from './products-database';

export type ProductDetail = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: CategoryLabel;
  brand: Brand;
  filterType?: string;
  details: string; // HTML-formatted product details
};

// Produktdetails-Datenbank mit RTF-Inhalten
export const productDetails: ProductDetail[] = [
`;

  let processedCount = 0;

  for (const product of products) {
    // RTF-Datei suchen
    const rtfFile = rtfFiles.find((file) => {
      const nameWithoutExt = file.replace(".rtf", "").trim();
      return nameWithoutExt === product.name;
    });

    let details = `<div class="product-details"><h1>${product.name}</h1><p>Details werden geladen...</p></div>`;

    if (rtfFile) {
      try {
        const rtfPath = path.join(rtfDir, rtfFile);
        const rtfContent = fs.readFileSync(rtfPath, "utf8");
        details = rtfToHtml(rtfContent, product.name);
        processedCount++;
        console.log(`✅ ${product.name} - RTF verarbeitet`);
      } catch (error) {
        console.warn(`⚠️  Fehler bei ${rtfFile}: ${error.message}`);
      }
    } else {
      console.warn(`⚠️  Keine RTF-Datei für "${product.name}" gefunden`);
    }

    // Produkt zur Datenbank hinzufügen
    output += `  {
    id: '${product.id}',
    name: '${product.name}',
    description: '${product.description}',
    price: ${product.price},
    image: '${product.image}',
    category: '${product.category}',
    brand: '${product.brand}',
    filterType: '${product.filterType}',
    details: \`${details.replace(/`/g, "\\`")}\`
  },
`;
  }

  output += `];

// Helper-Funktion um Produktdetails nach ID zu finden
export const getProductDetails = (productId: string): ProductDetail | undefined => {
  return productDetails.find(product => product.id === productId);
};

// Helper-Funktion um Produktdetails nach Name zu finden
export const getProductDetailsByName = (productName: string): ProductDetail | undefined => {
  return productDetails.find(product => product.name === productName);
};

// Helper-Funktion um alle verfügbaren Produktdetails zu bekommen
export const getAllProductDetails = (): ProductDetail[] => {
  return productDetails;
};
`;

  // Datei schreiben
  fs.writeFileSync(outputPath, output, "utf8");

  console.log(`✅ product-details-database.ts erfolgreich erstellt!`);
  console.log(
    `📊 ${processedCount}/${products.length} Produkte mit RTF-Details verarbeitet`,
  );
  console.log(`💾 Datei gespeichert: ${outputPath}`);
}

// Script ausführen
if (require.main === module) {
  generateProductDetailsDatabase();
}

module.exports = { generateProductDetailsDatabase };
