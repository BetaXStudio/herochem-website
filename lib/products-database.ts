export type CategoryLabel =
  | 'INJECTION'
  | 'ORAL'
  | 'POST CYCLE'
  | 'FAT BURN'
  | 'SEXUAL WELLNESS'
  | 'PEPTIDES & HGH'
  | 'SARMS'
  | 'AMINO ACIDS'
  | 'ALL PRODUCTS';

export type Brand = 'deus' | 'astera';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: CategoryLabel;
  brand: Brand;
  filterType?: string;
};

// Produktdatenbank
export const products: Product[] = [
  // INJECTION - DEUS
  {
    id: 'inj-deus-001',
    name: 'DEUS 3-TRENBOMED 150',
    description: 'Trenbolone Enanthate 50mg, Trenbolone Acetate 50mg, Trenbolone Hexahydrobenzylcarbonate 50mg',
    price: 45.00,
    image: '/products/deus inject/DEUS 3-TRENBOMED 150.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-002',
    name: 'DEUS EQUIMED 250',
    description: 'Boldenone Undecylenate 250mg',
    price: 38.00,
    image: '/products/deus inject/DEUS EQUIMED 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-003',
    name: 'DEUS DECAMED 250',
    description: 'Nandrolone Decanoate 250mg',
    price: 38.00,
    image: '/products/deus inject/DEUS DECAMED 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-004',
    name: 'DEUS DECAMED PP 100',
    description: 'Nandrolone Phenylpropionate 100mg',
    price: 31.00,
    image: '/products/deus inject/DEUS DECAMED PP 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-005',
    name: 'DEUS DHB-MED 100',
    description: 'Dihydroboldenone Cypionate 100mg',
    price: 50.00,
    image: '/products/deus inject/DEUS DHB-MED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-006',
    name: 'DEUS DIANAMED 100',
    description: 'Methandienone 100mg',
    price: 36.00,
    image: '/products/deus inject/DEUS DIANAMED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-007',
    name: 'DEUS TESTOMED C 250',
    description: 'Testosterone Cypionate 250mg',
    price: 30.00,
    image: '/products/deus inject/DEUS TESTOMED C 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'inj-deus-008',
    name: 'DEUS TESTOMED E 250',
    description: 'Testosterone Enanthate 250mg',
    price: 30.00,
    image: '/products/deus inject/DEUS TESTOMED E 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'inj-deus-009',
    name: 'DEUS MASTERMED E 200',
    description: 'Drostanolone Enanthate 200mg',
    price: 50.00,
    image: '/products/deus inject/DEUS MASTERMED E 200.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-010',
    name: 'DEUS MASTERMED P 100',
    description: 'Drostanolone Propionate 100mg',
    price: 40.00,
    image: '/products/deus inject/DEUS MASTERMED P 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-011',
    name: 'DEUS PARAMED 76.5',
    description: 'Trenbolone Hexahydrobenzylcarbonate 76.5mg',
    price: 50.00,
    image: '/products/deus inject/DEUS PARAMED 76.5.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-012',
    name: 'DEUS PRIMOMED 100',
    description: 'Methenolone Enanthate 100mg',
    price: 59.00,
    image: '/products/deus inject/DEUS PRIMOMED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-013',
    name: 'DEUS SUSTAMED 250',
    description: 'Testosterone Phenylpropionate 60mg, Testosterone Isocaproate 60mg, Testosterone Decanoate 100mg, Testosterone Propionate 30mg',
    price: 32.00,
    image: '/products/deus inject/DEUS SUSTAMED 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-014',
    name: 'DEUS TESTOMED 100',
    description: 'Testosterone Base 100mg',
    price: 28.00,
    image: '/products/deus inject/DEUS TESTOMED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-015',
    name: 'DEUS TESTOMED P 100',
    description: 'Testosterone Propionate 100mg',
    price: 26.00,
    image: '/products/deus inject/DEUS TESTOMED P 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-016',
    name: 'DEUS TESTOMED PP 100',
    description: 'Testosterone Phenylpropionate 100mg',
    price: 26.00,
    image: '/products/deus inject/DEUS TESTOMED PP 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-017',
    name: 'DEUS TESTOMED U 250',
    description: 'Testosterone Undecanoate 250mg',
    price: 30.00,
    image: '/products/deus inject/DEUS TESTOMED U 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-018',
    name: 'DEUS TRENBOMED A 100',
    description: 'Trenbolone Acetate 100mg',
    price: 41.00,
    image: '/products/deus inject/DEUS TRENBOMED A 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-019',
    name: 'DEUS TRENBOMED E 200',
    description: 'Trenbolone Enanthate 200mg',
    price: 50.00,
    image: '/products/deus inject/DEUS TRENBOMED E 200.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-deus-020',
    name: 'DEUS TRESTOLONE A 100',
    description: 'Trestolone Acetate 100mg',
    price: 100.00,
    image: '/products/deus inject/DEUS TRESTOLONE A 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-021',
    name: 'DEUS TRESTOLONE E 100',
    description: 'Trestolone Enanthate 100mg',
    price: 100.00,
    image: '/products/deus inject/DEUS TRESTOLONE E 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'inj-deus-022',
    name: 'DEUS WINIMED 50',
    description: 'Stanozolol 50mg',
    price: 33.00,
    image: '/products/deus inject/DEUS WINIMED 50.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'inj-placeholder-001',
    name: 'Coming Soon - Premium Injection',
    description: 'New premium injection product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'INJECTION',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // ORAL - DEUS
  {
    id: 'oral-deus-001',
    name: 'DEUS ANADROMED 50',
    description: 'Oxymetholone 50mg',
    price: 27.00,
    image: '/products/deus oral/DEUS ANADROMED 50.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'oral-deus-002',
    name: 'DEUS ANAVAMED 10',
    description: 'Oxandrolone 10mg',
    price: 23.00,
    image: '/products/deus oral/DEUS ANAVAMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'oral-deus-003',
    name: 'DEUS DIANAMED 10',
    description: 'Methandienone 10mg',
    price: 10.00,
    image: '/products/deus oral/DEUS DIANAMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'oral-deus-004',
    name: 'DEUS HALOMED 5',
    description: 'Fluoxymesterone 5mg',
    price: 45.00,
    image: '/products/deus oral/DEUS HALOMED 5.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'oral-deus-005',
    name: 'DEUS PRIMOMED 25',
    description: 'Methenolone Acetate 25mg',
    price: 75.00,
    image: '/products/deus oral/DEUS PRIMOMED 25.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'oral-deus-006',
    name: 'DEUS PROVIMED 25',
    description: 'Mesterolone 25mg',
    price: 23.00,
    image: '/products/deus oral/DEUS PROVIMED 25.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'oral-deus-007',
    name: 'DEUS SUPERMED 10',
    description: 'Methyldrostanolone 10mg',
    price: 41.00,
    image: '/products/deus oral/DEUS SUPERMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'oral-deus-008',
    name: 'DEUS TURIMED 10',
    description: '4-Chlorodehydromethyltestosterone 10mg',
    price: 17.00,
    image: '/products/deus oral/DEUS TURIMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'oral-deus-009',
    name: 'DEUS WINIMED 10',
    description: 'Stanozolol 10mg',
    price: 11.00,
    image: '/products/deus oral/DEUS WINIMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'oral-placeholder-001',
    name: 'Coming Soon - Premium Oral',
    description: 'New premium oral product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'ORAL',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // SARMS - DEUS (9 Produkte)
  {
    id: 'sarms-deus-001',
    name: 'DEUS GW501516 10 CARDARINE',
    description: 'SARM 10mg',
    price: 35.00,
    image: '/products/deus sarms/DEUS GW501516 10 CARDARINE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-002',
    name: 'DEUS LGD4033 10 LIGANDROL',
    description: 'SARM 10mg',
    price: 60.00,
    image: '/products/deus sarms/DEUS LGD4033 10 LIGANDROL.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-003',
    name: 'DEUS MK677 10 IBUTAMOREN',
    description: 'SARM 10mg',
    price: 40.00,
    image: '/products/deus sarms/DEUS MK677 10 IBUTAMOREN.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-004',
    name: 'DEUS MK2866 10 OSTARINE',
    description: 'SARM 10mg',
    price: 33.00,
    image: '/products/deus sarms/DEUS MK2866 10 OSTARINE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-005',
    name: 'DEUS RAD140 10 TESTOLONE',
    description: 'SARM 10mg',
    price: 50.00,
    image: '/products/deus sarms/DEUS RAD140 10 TESTOLONE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-006',
    name: 'DEUS S4 25 ANDARINE',
    description: 'SARM 25mg',
    price: 45.00,
    image: '/products/deus sarms/DEUS S4 25 ANDARINE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-007',
    name: 'DEUS S23 10',
    description: 'SARM 10mg',
    price: 35.00,
    image: '/products/deus sarms/DEUS S23 10.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-008',
    name: 'DEUS SR9009 10 STENABOLIC',
    description: 'SARM 10mg',
    price: 35.00,
    image: '/products/deus sarms/DEUS SR9009 10 STENABOLIC.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-deus-009',
    name: 'DEUS YK11 5',
    description: 'SARM 5mg',
    price: 55.00,
    image: '/products/deus sarms/DEUS YK11 5.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround'
  },
  {
    id: 'sarms-placeholder-001',
    name: 'Coming Soon - Premium SARM',
    description: 'New premium SARM product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'SARMS',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // PEPTIDES & HGH - DEUS
  {
    id: 'peptides-deus-001',
    name: 'DEUS BPC-157',
    description: 'BPC-157 Pentadecapeptide 5mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS BPC-157.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-002',
    name: 'DEUS CJC-1295 DAC',
    description: 'Tetrasubstitued 30-Amino Acid Peptide Hormone 2mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS CJC-1295 DAC.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-003',
    name: 'DEUS DEUSTROPIN 4/12',
    description: 'Recombinant Human Growth Hormone [rDNA origin] 12IU',
    price: 190.00,
    image: '/products/deus peptides & hgh/DEUS DEUSTROPIN 4:12.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-004',
    name: 'DEUS DSIP',
    description: 'Delta Sleep-Inducing Peptide 5mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS DSIP.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-005',
    name: 'DEUS EPITHALON',
    description: 'Epithalamine 10mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS EPITHALON.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-006',
    name: 'DEUS EPO',
    description: 'Erythropoietin 3000IU',
    price: 0.00,
    image: '/products/deus peptides & hgh/DEUS EPO.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-007',
    name: 'DEUS FOLLISTATIN',
    description: 'Activin-Binding Protein 1mg',
    price: 60.00,
    image: '/products/deus peptides & hgh/DEUS FOLLISTATIN.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-008',
    name: 'DEUS GHRP-2',
    description: 'Growth Hormone-Releasing Peptide 2 10mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS GHRP-2.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-009',
    name: 'DEUS GHRP-6',
    description: 'Growth Hormone-Releasing Peptide 6 10mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS GHRP-6.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-010',
    name: 'DEUS HCG',
    description: 'Human Chorionic Gonadotropin 5000IU',
    price: 40.00,
    image: '/products/deus peptides & hgh/DEUS HCG.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-011',
    name: 'DEUS HEXARELIN',
    description: 'Growth Hormone-Releasing Peptide 2mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS HEXARELIN.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-012',
    name: 'DEUS HGH FRAGMENT 176-191',
    description: 'Recombinant Human Growth Hormone Fragment 176-191 5mg',
    price: 40.00,
    image: '/products/deus peptides & hgh/DEUS HGH FRAGMENT 176-191.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'peptides-deus-013',
    name: 'DEUS HMG',
    description: 'Human Menopausal Gonadotropin 0.15mg',
    price: 40.00,
    image: '/products/deus peptides & hgh/DEUS HMG.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-014',
    name: 'DEUS IGF-1 DES',
    description: 'Insulin-Like Growth Factor 1 DES 1mg',
    price: 0.00,
    image: '/products/deus peptides & hgh/DEUS IGF-1 DES.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-015',
    name: 'DEUS IGF-1 LR3',
    description: 'Long Arginine 3-IGF-1 1mg',
    price: 0.00,
    image: '/products/deus peptides & hgh/DEUS IGF-1 LR3.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-016',
    name: 'DEUS IPAMORELIN',
    description: 'Growth Hormone-Releasing Peptide 2mg',
    price: 20.00,
    image: '/products/deus peptides & hgh/DEUS IPAMORELIN.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-017',
    name: 'DEUS MELANOTAN II',
    description: 'Melanotan II Peptide Hormone 10mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS MELANOTAN II.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-018',
    name: 'DEUS MOD GRF 1-29',
    description: 'Tetrasubstitued 29-Amino Acid Peptide Hormone 2mg',
    price: 20.00,
    image: '/products/deus peptides & hgh/DEUS MOD GRF 1-29.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-019',
    name: 'DEUS MOTS-C',
    description: 'Mitochondrial-Derived Peptide 10mg',
    price: 50.00,
    image: '/products/deus peptides & hgh/DEUS MOTS-C.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-020',
    name: 'DEUS PEG MGF',
    description: 'Pegylated Mechano Growth Factor 2mg',
    price: 33.00,
    image: '/products/deus peptides & hgh/DEUS PEG MGF.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain'
  },
  {
    id: 'peptides-deus-021',
    name: 'DEUS PNC-27',
    description: 'PNC-27 Anti-Cancer Peptide 5mg',
    price: 50.00,
    image: '/products/deus peptides & hgh/DEUS PNC-27.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-022',
    name: 'DEUS PT-141',
    description: 'Bremelanotide 10mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS PT-141.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-023',
    name: 'DEUS SELANK',
    description: 'Seelank Anxiolytic Peptide 5mg',
    price: 15.00,
    image: '/products/deus peptides & hgh/DEUS SELANK.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-024',
    name: 'DEUS SEMAGLUTIDE',
    description: 'Glucagon-Like Peptide-1 GLP-1 5mg',
    price: 100.00,
    image: '/products/deus peptides & hgh/DEUS SEMAGLUTIDE.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'peptides-deus-025',
    name: 'DEUS SEMAX',
    description: 'Semax Heptapeptide 5mg',
    price: 15.00,
    image: '/products/deus peptides & hgh/DEUS SEMAX.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-026',
    name: 'DEUS TB-500',
    description: 'Thymosin Beta-4 2mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS TB-500.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-027',
    name: 'DEUS THYMOSIN A1',
    description: 'Thymic Factor 10mg',
    price: 60.00,
    image: '/products/deus peptides & hgh/DEUS THYMOSIN A1.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'peptides-deus-028',
    name: 'DEUS TIRZEPATIDE',
    description: 'GIP and GLP-1 Receptor agonist 10mg',
    price: 100.00,
    image: '/products/deus peptides & hgh/DEUS TIRZEPATIDE.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'peptides-placeholder-001',
    name: 'Coming Soon - Premium Peptide',
    description: 'New premium peptide product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'PEPTIDES & HGH',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // FAT BURN - DEUS
  {
    id: 'fatburn-deus-001',
    name: 'DEUS CLENOMED 40',
    description: 'Clenbuterol HCL 40mcg',
    price: 11.00,
    image: '/products/deus fat burn/DEUS CLENOMED 40.png',
    category: 'FAT BURN',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'fatburn-deus-002',
    name: 'DEUS CYTOMED 25',
    description: 'Liothyronine Sodium T3',
    price: 12.00,
    image: '/products/deus fat burn/DEUS CYTOMED 25.png',
    category: 'FAT BURN',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'fatburn-deus-003',
    name: 'DEUS THYROMED 50',
    description: 'Levothyroxine Sodium T4',
    price: 9.00,
    image: '/products/deus fat burn/DEUS THYROMED 50.png',
    category: 'FAT BURN',
    brand: 'deus',
    filterType: 'Definition'
  },
  {
    id: 'fatburn-placeholder-001',
    name: 'Coming Soon - Premium Fat Burner',
    description: 'New premium fat burn product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'FAT BURN',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // POST CYCLE - DEUS
  {
    id: 'pct-deus-001',
    name: 'DEUS ARIMIMED 1',
    description: 'Anastrozole 1mg',
    price: 27.00,
    image: '/products/deus post cycle/DEUS ARIMIMED 1.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-002',
    name: 'DEUS AROMAMED 25',
    description: 'Exemestane 25mg',
    price: 30.00,
    image: '/products/deus post cycle/DEUS AROMAMED 25.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-003',
    name: 'DEUS CABERMED 0.5',
    description: 'Cabergoline 0.5mg',
    price: 60.00,
    image: '/products/deus post cycle/DEUS CABERMED 0.5.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-004',
    name: 'DEUS CLOMIMED 50',
    description: 'Clomiphene Citrate 50mg',
    price: 21.00,
    image: '/products/deus post cycle/DEUS CLOMIMED 50.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-005',
    name: 'DEUS ENCLOMIMED 25',
    description: 'Enclomiphene Citrate 25mg',
    price: 60.00,
    image: '/products/deus post cycle/DEUS ENCLOMIMED 25.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-006',
    name: 'DEUS EVIMED 60',
    description: 'Raloxifene 60mg',
    price: 25.00,
    image: '/products/deus post cycle/DEUS EVIMED 60.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-007',
    name: 'DEUS FEMAMED 2.5',
    description: 'Letrozole 2.5mg',
    price: 35.00,
    image: '/products/deus post cycle/DEUS FEMAMED 2.5.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-deus-008',
    name: 'DEUS NOLVAMED 20',
    description: 'Tamoxifen Citrate 20mg',
    price: 23.00,
    image: '/products/deus post cycle/DEUS NOLVAMED 20.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'pct-placeholder-001',
    name: 'Coming Soon - Premium PCT',
    description: 'New premium post cycle therapy product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'POST CYCLE',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // SEXUAL WELLNESS - DEUS
  {
    id: 'sexual-deus-001',
    name: 'DEUS CIAMED 5',
    description: 'Tadalafil 5mg',
    price: 20.00,
    image: '/products/deus sexual wellness/DEUS CIAMED 5.png',
    category: 'SEXUAL WELLNESS',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'sexual-deus-002',
    name: 'DEUS PRILIMED 30',
    description: 'Dapoxetine HCL 30mg',
    price: 15.00,
    image: '/products/deus sexual wellness/DEUS PRILIMED 30.png',
    category: 'SEXUAL WELLNESS',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'sexual-deus-003',
    name: 'DEUS VIAMED 20',
    description: 'Sildenafil Citrate 20mg',
    price: 11.00,
    image: '/products/deus sexual wellness/DEUS VIAMED 20.png',
    category: 'SEXUAL WELLNESS',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'sexual-placeholder-001',
    name: 'Coming Soon - Premium Sexual Wellness',
    description: 'New premium sexual wellness product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'SEXUAL WELLNESS',
    brand: 'astera',
    filterType: 'Base'
  },
  
  // INJECTION - ASTERA
  {
    id: 'amino-deus-001',
    name: 'Deus BCAA Complex',
    description: 'Verzweigtkettige Aminosäuren',
    price: 28.99,
    image: '/products/deus-bcaa.jpg',
    category: 'AMINO ACIDS',
    brand: 'deus',
    filterType: 'Base'
  },
  {
    id: 'amino-placeholder-001',
    name: 'Coming Soon - Premium Amino Acids',
    description: 'New premium amino acid product coming soon to our catalog',
    price: 0.00,
    image: '/products/placeholder.png',
    category: 'AMINO ACIDS',
    brand: 'astera',
    filterType: 'Base'
  }
];

// Helper function to get filtered products
export const getFilteredProducts = (
  category: CategoryLabel,
  brand: Brand | null,
  filterType: string,
  sortBy: string
) => {
  let filtered = products;

  if (category !== 'ALL PRODUCTS') {
    filtered = filtered.filter(product => product.category === category);
  }

  if (brand) {
    filtered = filtered.filter(product => product.brand === brand);
  }

  if (filterType) {
    filtered = filtered.filter(product => product.filterType === filterType);
  }

  // Sort products
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return filtered;
};

// Helper function to get unique filter types for a category
export const getAvailableFilters = (category: CategoryLabel) => {
  let categoryProducts = products;
  if (category !== 'ALL PRODUCTS') {
    categoryProducts = products.filter(product => product.category === category);
  }
  const filters = [...new Set(categoryProducts.map(p => p.filterType).filter(Boolean))];
  return filters;
};
