#!/bin/bash

echo "=== Detaillierter Preisvergleich zwischen den Datenbanken ==="
echo

# Erstelle temporäre Dateien für Preise aus beiden Datenbanken
grep -E "id: '[^']+'" lib/products-database.ts | sed "s/.*id: '//; s/'.*//" > temp_products_ids.txt
grep -E "price: [0-9.]+" lib/products-database.ts | sed "s/.*price: //; s/,//" > temp_products_prices.txt

grep -E "id: '[^']+'" lib/product-details-database.ts | sed "s/.*id: '//; s/'.*//" > temp_details_ids.txt
grep -E "price: [0-9.]+" lib/product-details-database.ts | sed "s/.*price: //; s/,//" > temp_details_prices.txt

# Kombiniere IDs und Preise
paste temp_products_ids.txt temp_products_prices.txt > temp_products_combined.txt
paste temp_details_ids.txt temp_details_prices.txt > temp_details_combined.txt

echo "Suche nach Preisunterschieden..."
echo

# Vergleiche Preise basierend auf IDs
while IFS=$'\t' read -r id price_products; do
    # Finde entsprechende ID in details database
    price_details=$(grep "^$id" temp_details_combined.txt | cut -f2)
    
    if [ -n "$price_details" ]; then
        if [ "$price_products" != "$price_details" ]; then
            echo "PREISUNTERSCHIED: $id"
            echo "  products-database.ts: €$price_products"
            echo "  product-details-database.ts: €$price_details"
            echo
        fi
    else
        echo "ID NICHT GEFUNDEN in product-details-database.ts: $id (€$price_products)"
        echo
    fi
done < temp_products_combined.txt

echo "Prüfe auf IDs die nur in product-details-database.ts existieren..."
echo

while IFS=$'\t' read -r id price_details; do
    if ! grep -q "^$id" temp_products_combined.txt; then
        echo "ID NUR IN DETAILS: $id (€$price_details)"
    fi
done < temp_details_combined.txt

# Aufräumen
rm temp_products_ids.txt temp_products_prices.txt temp_details_ids.txt temp_details_prices.txt temp_products_combined.txt temp_details_combined.txt

echo
echo "Vergleich abgeschlossen!"
