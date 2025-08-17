import fs from 'fs';
import { productDetails } from './lib/product-details-database.js';
import { products } from './lib/products-database.js';

// Create a map of product IDs to prices from products-database
const priceMap = new Map();
products.forEach(product => {
  priceMap.set(product.id, product.price);
});

// Read the product-details-database file
let fileContent = fs.readFileSync('./lib/product-details-database.ts', 'utf8');

// Track updates
let updatesCount = 0;
const updates = [];

// Check each product detail for price mismatches
productDetails.forEach(productDetail => {
  const correctPrice = priceMap.get(productDetail.id);
  if (correctPrice !== undefined && correctPrice !== productDetail.price) {
    updates.push({
      id: productDetail.id,
      name: productDetail.name,
      oldPrice: productDetail.price,
      newPrice: correctPrice
    });
    
    // Create a regex to find and replace the price for this specific product
    const idPattern = new RegExp(`(\\{\\s*id:\\s*'${productDetail.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[^}]*price:\\s*)${productDetail.price}`, 'g');
    fileContent = fileContent.replace(idPattern, `$1${correctPrice}`);
    updatesCount++;
  }
});

// Write the updated file
fs.writeFileSync('./lib/product-details-database.ts', fileContent);

// Report results
console.log(`✅ Price synchronization complete!`);
console.log(`📊 Updated ${updatesCount} products:`);
updates.forEach(update => {
  console.log(`   ${update.name}: €${update.oldPrice} → €${update.newPrice}`);
});
