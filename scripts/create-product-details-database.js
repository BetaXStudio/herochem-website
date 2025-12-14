const fs = require("fs");
const path = require("path");

// Funktion zum Lesen und Konvertieren von RTF zu HTML
function convertRtfToHtml(rtfContent, productName) {
  // RTF-Content bereinigen (entfernt RTF-Markup)
  let cleanContent = rtfContent
    .replace(/\\rtf1.*?\\deff0/g, "") // RTF Header entfernen
    .replace(/\\[a-z]+\d*\s?/g, "") // RTF Befehle entfernen
    .replace(/[{}]/g, "") // Geschweifte Klammern entfernen
    .replace(/\\\\/g, "") // Backslashes entfernen
    .replace(/\\'/g, "") // Escaped quotes entfernen
    .replace(/\s+/g, " ") // Mehrfache Leerzeichen reduzieren
    .trim();

  // HTML-Format erstellen
  const lines = cleanContent.split("\n").filter((line) => line.trim());

  let htmlContent = `
    <div class="product-details">
      <h1 class="product-title">${productName}</h1>
  `;

  // Erste Zeile nach dem Titel als chemische Beschreibung behandeln
  if (lines.length > 0) {
    htmlContent += `<h2 class="chemical-description">${lines[0].trim()}</h2>`;
  }

  // Restliche Zeilen als Produktbeschreibung
  if (lines.length > 1) {
    htmlContent += '<div class="product-description">';
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        htmlContent += `<p>${lines[i].trim()}</p>`;
      }
    }
    htmlContent += "</div>";
  }

  htmlContent += `
    </div>
    <style>
      .product-details {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        line-height: 1.6;
      }
      .product-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #1a1a1a;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.5rem;
      }
      .chemical-description {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #374151;
        background: #f9fafb;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 4px solid #3b82f6;
      }
      .product-description {
        font-size: 1rem;
        color: #4b5563;
      }
      .product-description p {
        margin-bottom: 1rem;
        text-align: justify;
      }
      .product-description p:last-child {
        margin-bottom: 0;
      }
    </style>
  `;

  return htmlContent;
}

// Hauptfunktion
async function createProductDetailsDatabase() {
  try {
    console.log("📚 Erstelle product-details-database.ts...");

    // Produktdatenbank einlesen
    const dbPath = path.join(__dirname, "../lib/products-database.ts");
    const dbContent = fs.readFileSync(dbPath, "utf8");

    // RTF-Verzeichnis
    const rtfDir = path.join(__dirname, "../lib/rtf_temp");

    // Prüfen ob RTF-Verzeichnis existiert
    if (!fs.existsSync(rtfDir)) {
      console.error("❌ RTF-Verzeichnis nicht gefunden:", rtfDir);
      return;
    }

    // RTF-Dateien lesen
    const rtfFiles = fs.readdirSync(rtfDir).filter((f) => f.endsWith(".rtf"));
    console.log(`📁 ${rtfFiles.length} RTF-Dateien gefunden`);

    // Produktnamen extrahieren
    const productMatches = dbContent.match(/name: '([^']+)'/g);
    const products = productMatches
      .map((match) => match.replace(/name: '/, "").replace(/'$/, ""))
      .filter(
        (name) => name.startsWith("DEUS") && !name.includes("Coming Soon"),
      );

    console.log(`🔍 ${products.length} DEUS-Produkte gefunden`);

    // Details für jedes Produkt sammeln
    const productDetails = {};
    let processedCount = 0;

    for (const productName of products) {
      // Entsprechende RTF-Datei finden
      const rtfFileName = rtfFiles.find((file) => {
        const nameWithoutExt = file.replace(".rtf", "").trim();
        return nameWithoutExt === productName;
      });

      if (rtfFileName) {
        try {
          const rtfPath = path.join(rtfDir, rtfFileName);
          const rtfContent = fs.readFileSync(rtfPath, "utf8");
          const htmlDetails = convertRtfToHtml(rtfContent, productName);

          productDetails[productName] = htmlDetails;
          processedCount++;

          if (processedCount % 10 === 0) {
            console.log(
              `✅ ${processedCount}/${products.length} Produkte verarbeitet`,
            );
          }
        } catch (error) {
          console.warn(
            `⚠️  Fehler beim Lesen von ${rtfFileName}:`,
            error.message,
          );
          productDetails[productName] =
            `<div class="product-details"><h1>${productName}</h1><p>Details werden geladen...</p></div>`;
        }
      } else {
        console.warn(`⚠️  Keine RTF-Datei für "${productName}" gefunden`);
        productDetails[productName] =
          `<div class="product-details"><h1>${productName}</h1><p>Details werden geladen...</p></div>`;
      }
    }

    // Neue Datenbank-Datei erstellen
    let newDbContent = `import { CategoryLabel, Brand } from './products-database';

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

    // Originale Produktdatenbank parsen und Details hinzufügen
    const productRegex =
      /{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*description:\s*'([^']*)',\s*price:\s*([\d.]+),\s*image:\s*'([^']*)',\s*category:\s*'([^']*)',\s*brand:\s*'([^']*)',\s*filterType:\s*'([^']*)'\s*}/g;

    let match;
    while ((match = productRegex.exec(dbContent)) !== null) {
      const [
        ,
        id,
        name,
        description,
        price,
        image,
        category,
        brand,
        filterType,
      ] = match;

      // Nur DEUS-Produkte (keine Platzhalter)
      if (brand === "deus" && !name.includes("Coming Soon")) {
        const details =
          productDetails[name] ||
          `<div class="product-details"><h1>${name}</h1><p>Details werden geladen...</p></div>`;

        newDbContent += `  {
    id: '${id}',
    name: '${name}',
    description: '${description}',
    price: ${price},
    image: '${image}',
    category: '${category}',
    brand: '${brand}',
    filterType: '${filterType}',
    details: \`${details.replace(/`/g, "\\`")}\`
  },
`;
      }
    }

    newDbContent += `];

// Helper-Funktion um Produktdetails nach ID zu finden
export const getProductDetails = (productId: string): ProductDetail | undefined => {
  return productDetails.find(product => product.id === productId);
};

// Helper-Funktion um Produktdetails nach Name zu finden
export const getProductDetailsByName = (productName: string): ProductDetail | undefined => {
  return productDetails.find(product => product.name === productName);
};
`;

    // Datei schreiben
    const outputPath = path.join(
      __dirname,
      "../lib/product-details-database.ts",
    );
    fs.writeFileSync(outputPath, newDbContent, "utf8");

    console.log(`✅ product-details-database.ts erfolgreich erstellt!`);
    console.log(`📊 ${processedCount} Produkte mit Details verarbeitet`);
    console.log(`💾 Datei gespeichert: ${outputPath}`);
  } catch (error) {
    console.error("❌ Fehler beim Erstellen der Datenbank:", error);
  }
}

// Script ausführen
createProductDetailsDatabase();
