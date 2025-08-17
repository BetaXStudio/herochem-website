#!/bin/bash

echo "Korrigiere SARMS-Preise..."

# SARMS-004: €59.99 -> €33.00
sed -i '' '/id: .sarms-deus-004.,/{n;n;n;s/price: 59.99,/price: 33.00,/;}' lib/product-details-database.ts

# SARMS-005: €59.99 -> €50.00
sed -i '' '/id: .sarms-deus-005.,/{n;n;n;s/price: 59.99,/price: 50.00,/;}' lib/product-details-database.ts

# SARMS-006: €59.99 -> €45.00
sed -i '' '/id: .sarms-deus-006.,/{n;n;n;s/price: 59.99,/price: 45.00,/;}' lib/product-details-database.ts

# SARMS-007: €59.99 -> €35.00
sed -i '' '/id: .sarms-deus-007.,/{n;n;n;s/price: 59.99,/price: 35.00,/;}' lib/product-details-database.ts

# SARMS-008: €59.99 -> €35.00
sed -i '' '/id: .sarms-deus-008.,/{n;n;n;s/price: 59.99,/price: 35.00,/;}' lib/product-details-database.ts

# SARMS-009: €59.99 -> €55.00
sed -i '' '/id: .sarms-deus-009.,/{n;n;n;s/price: 59.99,/price: 55.00,/;}' lib/product-details-database.ts

echo "SARMS-Preise korrigiert!"

echo
echo "Korrigiere PEPTIDES-Preise..."

# PEPTIDES-001: €89.99 -> €35.00
sed -i '' '/id: .peptides-deus-001.,/{n;n;n;s/price: 89.99,/price: 35.00,/;}' lib/product-details-database.ts

# PEPTIDES-002: €79.99 -> €30.00
sed -i '' '/id: .peptides-deus-002.,/{n;n;n;s/price: 79.99,/price: 30.00,/;}' lib/product-details-database.ts

# PEPTIDES-003: €199.99 -> €190.00
sed -i '' '/id: .peptides-deus-003.,/{n;n;n;s/price: 199.99,/price: 190.00,/;}' lib/product-details-database.ts

# PEPTIDES-004: €69.99 -> €35.00
sed -i '' '/id: .peptides-deus-004.,/{n;n;n;s/price: 69.99,/price: 35.00,/;}' lib/product-details-database.ts

# PEPTIDES-005: €99.99 -> €30.00
sed -i '' '/id: .peptides-deus-005.,/{n;n;n;s/price: 99.99,/price: 30.00,/;}' lib/product-details-database.ts

# PEPTIDES-006: €149.99 -> €0.00 (wird als kostenloses Produkt gesetzt)
sed -i '' '/id: .peptides-deus-006.,/{n;n;n;s/price: 149.99,/price: 0.00,/;}' lib/product-details-database.ts

# PEPTIDES-007: €179.99 -> €60.00
sed -i '' '/id: .peptides-deus-007.,/{n;n;n;s/price: 179.99,/price: 60.00,/;}' lib/product-details-database.ts

# PEPTIDES-008: €79.99 -> €35.00
sed -i '' '/id: .peptides-deus-008.,/{n;n;n;s/price: 79.99,/price: 35.00,/;}' lib/product-details-database.ts

# PEPTIDES-009: €79.99 -> €35.00
sed -i '' '/id: .peptides-deus-009.,/{n;n;n;s/price: 79.99,/price: 35.00,/;}' lib/product-details-database.ts

# PEPTIDES-010: €69.99 -> €40.00
sed -i '' '/id: .peptides-deus-010.,/{n;n;n;s/price: 69.99,/price: 40.00,/;}' lib/product-details-database.ts

# PEPTIDES-011: €89.99 -> €30.00
sed -i '' '/id: .peptides-deus-011.,/{n;n;n;s/price: 89.99,/price: 30.00,/;}' lib/product-details-database.ts

# PEPTIDES-012: €89.99 -> €40.00
sed -i '' '/id: .peptides-deus-012.,/{n;n;n;s/price: 89.99,/price: 40.00,/;}' lib/product-details-database.ts

# PEPTIDES-013: €79.99 -> €40.00
sed -i '' '/id: .peptides-deus-013.,/{n;n;n;s/price: 79.99,/price: 40.00,/;}' lib/product-details-database.ts

# PEPTIDES-014: €159.99 -> €0.00 (wird als kostenloses Produkt gesetzt)
sed -i '' '/id: .peptides-deus-014.,/{n;n;n;s/price: 159.99,/price: 0.00,/;}' lib/product-details-database.ts

# PEPTIDES-015: €159.99 -> €0.00 (wird als kostenloses Produkt gesetzt)
sed -i '' '/id: .peptides-deus-015.,/{n;n;n;s/price: 159.99,/price: 0.00,/;}' lib/product-details-database.ts

# PEPTIDES-016: €89.99 -> €20.00
sed -i '' '/id: .peptides-deus-016.,/{n;n;n;s/price: 89.99,/price: 20.00,/;}' lib/product-details-database.ts

# PEPTIDES-017: €69.99 -> €30.00
sed -i '' '/id: .peptides-deus-017.,/{n;n;n;s/price: 69.99,/price: 30.00,/;}' lib/product-details-database.ts

# PEPTIDES-018: €79.99 -> €20.00
sed -i '' '/id: .peptides-deus-018.,/{n;n;n;s/price: 79.99,/price: 20.00,/;}' lib/product-details-database.ts

# PEPTIDES-019: €129.99 -> €50.00
sed -i '' '/id: .peptides-deus-019.,/{n;n;n;s/price: 129.99,/price: 50.00,/;}' lib/product-details-database.ts

# PEPTIDES-020: €139.99 -> €33.00
sed -i '' '/id: .peptides-deus-020.,/{n;n;n;s/price: 139.99,/price: 33.00,/;}' lib/product-details-database.ts

# PEPTIDES-021: €199.99 -> €50.00
sed -i '' '/id: .peptides-deus-021.,/{n;n;n;s/price: 199.99,/price: 50.00,/;}' lib/product-details-database.ts

# PEPTIDES-022: €89.99 -> €30.00
sed -i '' '/id: .peptides-deus-022.,/{n;n;n;s/price: 89.99,/price: 30.00,/;}' lib/product-details-database.ts

# PEPTIDES-023: €79.99 -> €15.00
sed -i '' '/id: .peptides-deus-023.,/{n;n;n;s/price: 79.99,/price: 15.00,/;}' lib/product-details-database.ts

# PEPTIDES-024: €149.99 -> €100.00
sed -i '' '/id: .peptides-deus-024.,/{n;n;n;s/price: 149.99,/price: 100.00,/;}' lib/product-details-database.ts

# PEPTIDES-025: €79.99 -> €15.00
sed -i '' '/id: .peptides-deus-025.,/{n;n;n;s/price: 79.99,/price: 15.00,/;}' lib/product-details-database.ts

# PEPTIDES-026: €119.99 -> €30.00
sed -i '' '/id: .peptides-deus-026.,/{n;n;n;s/price: 119.99,/price: 30.00,/;}' lib/product-details-database.ts

# PEPTIDES-027: €99.99 -> €60.00
sed -i '' '/id: .peptides-deus-027.,/{n;n;n;s/price: 99.99,/price: 60.00,/;}' lib/product-details-database.ts

# PEPTIDES-028: €189.99 -> €100.00
sed -i '' '/id: .peptides-deus-028.,/{n;n;n;s/price: 189.99,/price: 100.00,/;}' lib/product-details-database.ts

echo "PEPTIDES-Preise korrigiert!"
echo "Preiskorrektur abgeschlossen!"
