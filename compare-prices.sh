#!/bin/bash

echo "=== Preisvergleich zwischen products-database.ts und product-details-database.ts ==="
echo

# Extrahiere Preise aus products-database.ts
echo "Extrahiere Preise aus products-database.ts..."
grep -A3 -B1 "id.*:" lib/products-database.ts | grep -E "(id:|price:)" | paste - - | sed 's/[[:space:]]*//g' | sed 's/id://g' | sed 's/price://g' | sed 's/,//g' | sed "s/'//g" > /tmp/products_prices.txt

# Extrahiere Preise aus product-details-database.ts  
echo "Extrahiere Preise aus product-details-database.ts..."
grep -A3 -B1 "id.*:" lib/product-details-database.ts | grep -E "(id:|price:)" | paste - - | sed 's/[[:space:]]*//g' | sed 's/id://g' | sed 's/price://g' | sed 's/,//g' | sed "s/'//g" > /tmp/details_prices.txt

echo "Vergleiche Preise..."
echo

# Vergleiche die Dateien
while read line1 && read line2 <&3; do
    id1=$(echo $line1 | cut -d$'\t' -f1)
    price1=$(echo $line1 | cut -d$'\t' -f2)
    id2=$(echo $line2 | cut -d$'\t' -f1)
    price2=$(echo $line2 | cut -d$'\t' -f2)
    
    if [ "$id1" = "$id2" ]; then
        if [ "$price1" != "$price2" ]; then
            echo "PREISUNTERSCHIED: $id1"
            echo "  products-database.ts:        €$price1"
            echo "  product-details-database.ts: €$price2"
            echo
        fi
    else
        echo "ID MISMATCH: $id1 vs $id2"
    fi
done < /tmp/products_prices.txt 3< /tmp/details_prices.txt

echo "Vergleich abgeschlossen!"
