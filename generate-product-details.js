const fs = require('fs');
const path = require('path');

// RTF zu Text konvertieren (vereinfacht)
function extractTextFromRtf(rtfContent) {
  return rtfContent
    .replace(/\{\\rtf[^}]*\}/g, '')
    .replace(/\\[a-z]+\d*\s?/g, ' ')
    .replace(/[{}]/g, '')
    .replace(/\\\\/g, '')
    .replace(/\\'/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/\\par/g, '\n')
    .trim();
}

// HTML generieren für Produktdetails
function generateProductDetailsHtml(productName, rtfContent) {
  const cleanText = extractTextFromRtf(rtfContent);
  const lines = cleanText.split('\n').filter(line => line.trim());
  
  let htmlContent = `
      <div class="product-details">
        <h1 class="product-title">${productName}</h1>`;

  if (lines.length > 1) {
    htmlContent += `<h2 class="chemical-description">${lines[1].trim()}</h2>`;
  }

  htmlContent += '<div class="product-description">';
  
  // Text in Abschnitte aufteilen
  const sections = cleanText.split(/(?=CAS|Molecular|Formula|Overview|Mechanism|Dosage|Side|Interaction|Composition)/i);
  
  sections.forEach(section => {
    const trimmed = section.trim();
    if (trimmed) {
      const isHeading = /^(CAS|Molecular|Formula|Overview|Mechanism|Dosage|Side|Interaction|Composition)/i.test(trimmed);
      
      if (isHeading) {
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex > 0) {
          const title = trimmed.substring(0, colonIndex + 1);
          const content = trimmed.substring(colonIndex + 1).trim();
          htmlContent += `<p><strong>${title}</strong> ${content}</p>`;
        } else {
          htmlContent += `<p><strong>${trimmed}</strong></p>`;
        }
      } else if (trimmed.length > 10) {
        htmlContent += `<p>${trimmed}</p>`;
      }
    }
  });

  htmlContent += `</div>
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

  return htmlContent;
}

console.log('🚀 Generating complete product-details-database.ts...');

try {
  // Originale Produktdatenbank lesen
  const dbPath = './lib/products-database.ts';
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  
  // RTF-Dateien lesen
  const rtfDir = './lib/rtf_temp';
  const rtfFiles = fs.readdirSync(rtfDir).filter(f => f.endsWith('.rtf'));
  
  console.log(`📁 ${rtfFiles.length} RTF files found`);
  
  // RTF-Inhalte einlesen
  const rtfData = {};
  rtfFiles.forEach(file => {
    try {
      const productName = file.replace('.rtf', '').trim();
      const rtfContent = fs.readFileSync(path.join(rtfDir, file), 'utf8');
      rtfData[productName] = rtfContent;
      
      // Debug: Log für problematische Datei
      if (productName.includes('3-TRENBOMED')) {
        console.log(`🔍 Found RTF file: "${productName}" from file: "${file}"`);
      }
    } catch (error) {
      console.warn(`⚠️ Error reading ${file}:`, error.message);
    }
  });

  // Produkte aus der originalen Datenbank extrahieren
  const productRegex = /{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*description:\s*'([^']*)',\s*price:\s*([\d.]+),\s*image:\s*'([^']*)',\s*category:\s*'([^']*)',\s*brand:\s*'([^']*)',\s*filterType:\s*'([^']*)'\s*}/g;

  const products = [];
  let match;
  while ((match = productRegex.exec(dbContent)) !== null) {
    const [, id, name, description, price, image, category, brand, filterType] = match;
    
    if (brand === 'deus' && !name.includes('Coming Soon')) {
      products.push({ id, name, description, price, image, category, brand, filterType });
    }
  }

  console.log(`🔍 ${products.length} DEUS products found`);

  // Neue Datenbank generieren
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

  let processedCount = 0;

  products.forEach(product => {
    let rtfContent = rtfData[product.name];
    
    // Debug für 3-TRENBOMED
    if (product.name.includes('3-TRENBOMED')) {
      console.log(`🔍 Looking for product: "${product.name}" (length: ${product.name.length})`);
      const availableKeys = Object.keys(rtfData).filter(k => k.includes('3-TRENBOMED'));
      console.log(`🔍 Available RTF keys: ${availableKeys.map(k => `"${k}" (length: ${k.length})`)}`);
      console.log(`🔍 Direct access result: ${rtfContent ? 'FOUND' : 'NOT FOUND'}`);
      
      // Try exact match with all available keys
      for (const key of availableKeys) {
        if (key === product.name) {
          console.log(`✅ Exact match found with key: "${key}"`);
          rtfContent = rtfData[key];
          break;
        } else {
          console.log(`❌ Key "${key}" !== "${product.name}"`);
        }
      }
    }
    
    // Handle naming inconsistencies
    if (!rtfContent) {
      const variations = [
        product.name.replace(' A 100', ' A100'),  // TRESTOLONE A 100 -> A100
        product.name.replace('S23', 's23'),       // S23 -> s23
        product.name.replace('4/12', '4:12'),     // 4/12 -> 4:12
        product.name + ' ',                       // Add trailing space
        product.name.replace(' ', ''),            // Remove spaces
        product.name.trim()                       // Trim whitespace
      ];
      
      // Add all RTF keys for 3-TRENBOMED to variations
      if (product.name.includes('3-TRENBOMED')) {
        const trenbomeKeys = Object.keys(rtfData).filter(k => k.includes('3-TRENBOMED'));
        variations.push(...trenbomeKeys);
      }
      
      for (const variation of variations) {
        if (rtfData[variation]) {
          rtfContent = rtfData[variation];
          console.log(`✅ Found RTF for ${product.name} using variation: "${variation}"`);
          break;
        }
      }
    }
    
    let details;
    
    if (rtfContent) {
      details = generateProductDetailsHtml(product.name, rtfContent);
      processedCount++;
    } else {
      console.warn(`⚠️ No RTF file for: ${product.name}`);
      details = `<div class="product-details"><h1>${product.name}</h1><p>Details loading...</p></div>`;
    }

    newDbContent += `  {
    id: '${product.id}',
    name: '${product.name}',
    description: '${product.description}',
    price: ${product.price},
    image: '${product.image}',
    category: '${product.category}',
    brand: '${product.brand}',
    filterType: '${product.filterType}',
    details: \`${details.replace(/`/g, '\\`')}\`
  },
`;
  });

  newDbContent += `];

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
  fs.writeFileSync('./lib/product-details-database.ts', newDbContent, 'utf8');

  console.log(`✅ product-details-database.ts successfully created!`);
  console.log(`📊 ${processedCount}/${products.length} products processed with RTF details`);

} catch (error) {
  console.error('❌ Error:', error.message);
}
