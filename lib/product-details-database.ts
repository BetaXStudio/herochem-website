import { Brand, CategoryLabel } from './products-database';

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
  {
    id: 'inj-deus-001',
    name: 'DEUS 3-TRENBOMED 150',
    description: 'Trenbolone Enanthate 50mg, Trenbolone Acetate 50mg, Trenbolone Hexahydrobenzylcarbonate 50mg',
    price: 45.00,
    image: '/products/deus inject/DEUS 3-TRENBOMED 150.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS 3-TRENBOMED 150</h1>
        <h2 class="chemical-description">Trenbolone Enanthate, Trenbolone Acetate, Trenbolone Hexahydrobenzylcarbonate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 360-70-3</p>
          <p><strong>Molecular Weight:</strong> 428.65 g/mol</p>
          <p><strong>Formula:</strong> C28H44O3</p>
          
          <p><strong>Overview:</strong> 3-TRENBOMED 150 (Trenbolone Mix) consists of a combination of trenbolone acetate, trenbolone enanthate, and trenbolone hexahydrobenzyl carbonate compounds. The base compound, trenbolone is an androgen and anabolic steroid. It is known to increase muscle mass, workout output and muscle recovery. It is usually sold as compound mixtures in order to prolong its half-life. 3-TRENBOMED 150 (Trenbolone Mix) comprises 50mg of trenbolone enanthate, 50mg of trenbolone hexahydrobenzylcarbonate, 50mg of trenbolone acetate and excipients.</p>
          
          <p><strong>Trenbolone Mechanism of Action:</strong> As an androgen and anabolic steroid, trenbolone has both androgenic and anabolic activity. It leads to an increased production of protein which can lead to increased muscle mass. It also leads to an increase in male secondary sexual characteristics and is believed to be more potent than testosterone.</p>
          
          <p><strong>Trenbolone Side Effects:</strong> Trenbolone side effects include acute, transient cough, acne, baldness, jaundice, sleeping difficulty, mood disorders, and gynecomastia.</p>
          
          <p><strong>Trenbolone Interactions:</strong> Potential interacts with antidiabetic drugs, and oral anticoagulants.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Enanthate: 50mg<br>
          Trenbolone Acetate: 50mg<br>
          Trenbolone Hexahydrobenzylcarbonate: 50mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-002',
    name: 'DEUS EQUIMED 250',
    description: 'Boldenone Undecylenate 250mg',
    price: 38.00,
    image: '/products/deus inject/DEUS EQUIMED 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EQUIMED 250</h1>
        <h2 class="chemical-description">Boldenone Undecylenate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 13103-34-9</p>
          <p><strong>Molecular Weight:</strong> 452.67 g/mol</p>
          <p><strong>Formula:</strong> C18H22O2</p>
          
          <p><strong>Overview:</strong> EQUIMED 250 (Boldenone Undecylenate) has both androgenic and anabolic properties (AAS), but is majorly used due to its potent anabolic activity. It is used to stimulate protein synthesis and appetite and also has an effect on erythropoietin for the treatment of anemias. EQUIMED 250 comes as boldenone undecylenate 250mg/ml injection, which contains boldenone undecylenate 250mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Boldenone undecylenate is a prodrug (inactive form) which is eventually converted into its active form boldenone. It acts on the androgen receptor to elicit its anabolic effects. It also stimulates the kidneys to produce erythropoietin which stimulates the bone marrow to produce more red blood cells. It does not have progestogenic effects. It has a half-life of 14 days when given as an injection via the intramuscular route.</p>
          
          <p><strong>Dosage:</strong> 100mg - 200mg weekly given as intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Side effects include acne, virilization, gynecomastia, fluid retention, and scalp hair loss.</p>
          
          <p><strong>Interactions:</strong> Boldenone Undecylenate interacts with estrogen grape seed extract.</p>
          
          <p><strong>Composition:</strong><br>
          Boldenone Undecylenate: 250mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-003',
    name: 'DEUS DECAMED 250',
    description: 'Nandrolone Decanoate 250mg',
    price: 38.00,
    image: '/products/deus inject/DEUS DECAMED 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DECAMED 250</h1>
        <h2 class="chemical-description">Nandrolone Decanoate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 360-70-3</p>
          <p><strong>Molecular Weight:</strong> 428.65 g/mol</p>
          <p><strong>Formula:</strong> C28H44O3</p>
          
          <p><strong>Overview:</strong> DECAMED 250 (Nandrolone Decanoate) belongs to the class of androgen and anabolic steroids (AAS). As a synthetic derivative of testosterone, it can be used to treat anaemia, osteoporosis and muscle wasting. It is manufactured as DECAMED 250mg/ml injection which contains 250mg of nandrolone decanoate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Like other androgen and anabolic steroids, nandrolone acts on androgen receptors to exert its anabolic and androgenic effects. However, it has far stronger anabolic effects than androgenic effects. Hence it is used often among children and women. Nandrolone also boosts red blood cell production by increasing erythropoietin production in the kidney and also stimulating bone marrow which makes it suitable for the treatment of anemia from renal insufficiency.</p>
          
          <p><strong>Dosage:</strong> Dosing is as directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Virilization (masculinization), fluid retention, infertility, testicular atrophy, elevated blood pressure, nausea and vomiting, prostate enlargement, priapism, liver injury, rashes, and allergic reactions.</p>
          
          <p><strong>Interactions:</strong> Aromatase inhibitors, selective estrogen receptor modulators, 5-alpha reductase inhibitors, and anti-androgens all interact with nandrolone.</p>
          
          <p><strong>Composition:</strong><br>
          Nandrolone Decanoate: 250mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-004',
    name: 'DEUS DECAMED PP 100',
    description: 'Nandrolone Phenylpropionate 100mg',
    price: 31.00,
    image: '/products/deus inject/DEUS DECAMED PP 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DECAMED PP 100</h1>
        <h2 class="chemical-description">Nandrolone Phenylpropionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 62-90-8</p>
          <p><strong>Molecular Weight:</strong> 406.55 g/mol</p>
          <p><strong>Formula:</strong> C27H34O3</p>
          
          <p><strong>Overview:</strong> DECAMED PP 100 (Nandrolone Phenylpropionate) is a long-lasting prodrug formulation of the drug nandrolone. Nandrolone can be used to treat anaemia, osteoporosis and muscle wasting. It can also be used to treat advanced breast cancer, defects in the metabolism of protein and stunted growth in children. It is manufactured as a DECAMED PP 100mg/ml injection which contains 100mg of nandrolone phenylpropionate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Nandrolone phenylpropionate is converted to the active form nandrolone. Nandrolone acts on androgen receptors to exert its anabolic and androgenic effects. However, it has far stronger anabolic effects than androgenic effects. Hence it is used often among children and women. Nandrolone also boosts red blood cell production by increasing erythropoietin production in the kidney and also stimulating bone marrow which makes it suitable for the treatment of anemia from renal insufficiency.</p>
          
          <p><strong>Dosage:</strong> 100mg by intramuscular injection, once a week.</p>
          
          <p><strong>Side Effects:</strong> Virilization (masculinization), fluid retention, infertility, testicular atrophy, elevated blood pressure, nausea and vomiting, prostate enlargement, priapism, liver injury, rashes, and allergic reactions.</p>
          
          <p><strong>Interactions:</strong> Aromatase inhibitors, selective estrogen receptor modulators, 5-alpha reductase inhibitors, and anti-androgens all interact with nandrolone.</p>
          
          <p><strong>Composition:</strong><br>
          Nandrolone Phenylpropionate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-005',
    name: 'DEUS DHB-MED 100',
    description: 'Dihydroboldenone Cypionate 100mg',
    price: 50.00,
    image: '/products/deus inject/DEUS DHB-MED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DHB-MED 100</h1>
        <h2 class="chemical-description">Dihydroboldenone Cypionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 65-06-5</p>
          <p><strong>Molecular Weight:</strong> 288.43 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> DHB-MED 100 (Dihydroboldenone Cypionate) is an analogue of testosterone. It is useful in hormone replacement therapy, the treatment of breast cancer, osteoporosis and decreased libido. It is manufactured as dihydroboldenone cypionate 100mg/ml injection, containing dihydroboldenone cypionate 100mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Dihydroboldenone cypionate acts on androgen receptors, exhibiting moderate androgenic properties, but high anabolic properties. It can be used in hormonal replacement therapy. It is also used to stimulate muscle growth, development and fat distribution.</p>
          
          <p><strong>Dosage:</strong> 100mg weekly by intramuscular injection, max of 400mg monthly.</p>
          
          <p><strong>Side Effects:</strong> Virilization prostate enlargement, nausea, vomiting, skin colour changes, priapism swelling of feet.</p>
          
          <p><strong>Composition:</strong><br>
          Dihydroboldenone Cypionate: 100mg<br>
          Excipients: q.s</p>
          
          <p><strong>Precautions for storage:</strong> Because of the high concentration of the product, it is susceptible to crystallization when exposed to colder temperatures. It's best to follow the process of re-dissolving the product if this has happened. Crystallization does not impact patient safety, efficacy, or product quality.</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-006',
    name: 'DEUS DIANAMED 100',
    description: 'Methandienone 100mg',
    price: 36.00,
    image: '/products/deus inject/DEUS DIANAMED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DIANAMED 100</h1>
        <h2 class="chemical-description">Methandienone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 72-63-9</p>
          <p><strong>Molecular Weight:</strong> 300.44 g/mol</p>
          <p><strong>Formula:</strong> C20H28O2</p>
          
          <p><strong>Overview:</strong> DIANAMED 100 (Methandienone) is an effective and affordable oral medication with androgenic and anabolic properties. It is typically used in the treatment of anorexia and has also been used as a form of hormonal replacement therapy. DIANAMED 100 comes as methandienone 100mg injections which contain 100mg of methandienone and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Methandienone stimulates the androgen receptor to elicit anabolic effects such as increased synthesis of protein, breakdown of glycogen and increase in muscular strength. It has limited androgenic activity and estrogenic effects. Methanedienone has a half-life of 3 - 6 hours and is eliminated through the urine.</p>
          
          <p><strong>Dosage:</strong> 100mg intramuscular injection weekly</p>
          
          <p><strong>Side Effects:</strong> Side effects include acne, virilization, hair loss on the scalp, gynecomastia, liver injury, and fluid retention.</p>
          
          <p><strong>Interactions:</strong> Methanedienone interacts with aromatase inhibitors and antifungals.</p>
          
          <p><strong>Composition:</strong><br>
          Methandienone: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-007',
    name: 'DEUS TESTOMED C 250',
    description: 'Testosterone Cypionate 250mg',
    price: 30.00,
    image: '/products/deus inject/DEUS TESTOMED C 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED C 250</h1>
        <h2 class="chemical-description">Testosterone Cypionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 58-20-8</p>
          <p><strong>Molecular Weight:</strong> 412.60 g/mol</p>
          <p><strong>Formula:</strong> C27H40O3</p>
          
          <p><strong>Overview:</strong> TESTOMED C 250 (Testosterone Cypionate) is used in men and boys to treat conditions caused by a lack of testosterone, such as delayed puberty or growth. It is recommended for males with genetic disorders, problems with certain brain structures (called the hypothalamus and pituitary) or previous chemotherapy. Testosterone injection is also used in women to treat certain types of breast cancer that have spread to other parts of the body. TESTOMED C 250 is manufactured as testosterone cypionate 250mg/ml which contains testosterone cypionate 250mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone cypionate is a prodrug of testosterone. Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. Testosterone has strong androgenic and moderate anabolic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, and bone maturation.</p>
          
          <p><strong>Dosage:</strong> 250mg every one to four weeks via intramuscular injection route.</p>
          
          <p><strong>Side Effects:</strong> Masculinization, voice changes, changes in libido, acne, allergic reactions, hypertension cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping, stroke, and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, corticosteroids, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Cypionate: 250mg<br>
          Excipients: q.s</p>
          
          <p><strong>Precautions for storage:</strong> Because of the product's high concentration, it is susceptible to crystallization when exposed to colder temperatures. It's best to follow the process of re-dissolving the product if this has happened. Crystallization does not impact patient safety, efficacy, or product quality.</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-008',
    name: 'DEUS TESTOMED E 250',
    description: 'Testosterone Enanthate 250mg',
    price: 30.00,
    image: '/products/deus inject/DEUS TESTOMED E 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED E 250</h1>
        <h2 class="chemical-description">Testosterone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 315-37-7</p>
          <p><strong>Molecular Weight:</strong> 400.59 g/mol</p>
          <p><strong>Formula:</strong> C26H40O3</p>
          
          <p><strong>Overview:</strong> TESTOMED E 250 (Testosterone Enanthate) is used in men and boys to treat conditions caused by a lack of testosterone, such as delayed puberty or growth. It is also recommended for males with genetic disorders, hypopituitarism or those who had previous chemotherapy. Testosterone injection is also used in women to treat certain types of breast cancer that have spread to other parts of the body. TESTOMED E 250 is manufactured as testosterone enanthate 250mg/ml which contains testosterone enanthate 250mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone enanthate is a prodrug of testosterone. Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. Testosterone enanthate has strong androgenic and moderate anabolic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, and bone maturation.</p>
          
          <p><strong>Dosage:</strong> 250mg every one to four weeks via intramuscular injection route.</p>
          
          <p><strong>Side Effects:</strong> Masculinization, voice changes, changes in libido, gynecomastia, acne, allergic reactions, hypertension cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping, stroke, and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, corticosteroids, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Enanthate: 250mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-009',
    name: 'DEUS MASTERMED E 200',
    description: 'Drostanolone Enanthate 200mg',
    price: 50.00,
    image: '/products/deus inject/DEUS MASTERMED E 200.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MASTERMED E 200</h1>
        <h2 class="chemical-description">Drostanolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 472-61-145</p>
          <p><strong>Molecular Weight:</strong> 416.64 g/mol</p>
          <p><strong>Formula:</strong> C27H44O3</p>
          
          <p><strong>Overview:</strong> MASTERMED E 200 (Drostanolone Enanthate) is a part of the dihydrotestosterone (DHT) family. MASTERMED E 200 (Drostanolone Enanthate) mainly is used in the medical field for lowering cholesterol levels and as an antineoplastic agent in the treatment of some cancers. MASTERMED E 200 comes as drostanolone enanthate 200mg/ml injection which contains 200mg of drostanolone enanthate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> The active substance is drostanolone which has both androgenic and anabolic properties. It acts on androgen receptors to cause protein synthesis, nitrogen and potassium retention. It is also known to inhibit prolactin and estrogen receptors which accounts for its antitumour activity. It also does not have known progestogenic activity.</p>
          
          <p><strong>Dosage:</strong> 200mg weekly via intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Side effects include acne virilization, headaches, fluid retention, and elevated calcium levels.</p>
          
          <p><strong>Interactions:</strong> Not available.</p>
          
          <p><strong>Composition:</strong><br>
          Drostanolone Enanthate: 200mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-010',
    name: 'DEUS MASTERMED P 100',
    description: 'Drostanolone Propionate 100mg',
    price: 40.00,
    image: '/products/deus inject/DEUS MASTERMED P 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MASTERMED P 100</h1>
        <h2 class="chemical-description">Drostanolone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 360.53 g/mol</p>
          <p><strong>Formula:</strong> C23H36O3</p>
          
          <p><strong>Overview:</strong> MASTERMED P 100 (Drostanolone Propionate) is a part of the dihydrotestosterone (DHT) family. It is mainly used as an antineoplastic agent in the treatment of some cancers. MASTERMED P 100 comes as drostanolone propionate 100mg/ml injection which contains 100mg of drostanolone propionate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Drostanolone propionate is a prodrug of drostanolone which has both androgenic and anabolic properties. It exhibits high anabolic properties acting on androgen receptors to cause protein synthesis, nitrogen and potassium retention. It is also known to inhibit prolactin and estrogen receptors which accounts for its antitumour activity. It also does not have known progestogenic activity.</p>
          
          <p><strong>Dosage:</strong> 100mg weekly via intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Side effects include acne virilization, headaches, fluid retention and elevated calcium levels.</p>
          
          <p><strong>Interactions:</strong> Not available.</p>
          
          <p><strong>Composition:</strong><br>
          Drostanolone Propionate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-011',
    name: 'DEUS PARAMED 76.5',
    description: 'Trenbolone Hexahydrobenzylcarbonate 76.5mg',
    price: 50.00,
    image: '/products/deus inject/DEUS PARAMED 76.5.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PARAMED 76.5</h1>
        <h2 class="chemical-description">Trenbolone Hexahydrobenzylcarbonate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 23454-33-3</p>
          <p><strong>Molecular Weight:</strong> 410.54 g/mol</p>
          <p><strong>Formula:</strong> C26H34O4</p>
          
          <p><strong>Overview:</strong> PARAMED 76.5 (Trenbolone Hexahydrobenzylcarbonate) belongs to the class of nandrolones. It is used to increase muscle growth, appetite and also treat anemia. PARAMED 76.5 comes as trenbolone hexahydrobenzylcarbonate 76.5mg/ml injections which contains 76.5mg of trenbolone hexahydrobenzylcarbonate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Trenbolone hexahydrobenzylcarbonate is an ester of trenbolone. Trenbolone exerts anabolic and androgenic effects. It leads to an increased production of protein which can lead to increased muscle mass. It also leads to an increase in male secondary sexual characteristics and is believed to be more potent than testosterone. It exerts some effect on the bone marrow to increase red blood cell production.</p>
          
          <p><strong>Dosage:</strong> Trenbolone hexahydrobenzylcarbonate 76.5mg injection once every ten days</p>
          
          <p><strong>Side Effects:</strong> Side effects include acute, transient cough, acne, baldness, jaundice, sleeping difficulty, mood disorders and gynecomastia.</p>
          
          <p><strong>Interactions:</strong> Potential interacts with antidiabetic drugs and oral anticoagulants.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Hexahydrobenzylcarbonate: 76.5mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-012',
    name: 'DEUS PRIMOMED 100',
    description: 'Methenolone Enanthate 100mg',
    price: 59.00,
    image: '/products/deus inject/DEUS PRIMOMED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PRIMOMED 100</h1>
        <h2 class="chemical-description">Methenolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 303-42-4</p>
          <p><strong>Molecular Weight:</strong> 414.64 g/mol</p>
          <p><strong>Formula:</strong> C27H42O3</p>
          
          <p><strong>Overview:</strong> PRIMOMED 100 (Methenolone Enanthate) is indicated for the treatment of aplastic anemia, breast cancer, postmenopausal osteoporosis and sarcopenia (the loss of muscle as correlated with aging). Also, the drug is utilized to treat individuals suffering from conditions in which muscle wasting and severe weight loss is a symptom, and as an immunostimulant for individuals fighting infections. PRIMOMED 100 is manufactured as methenolone enanthate 100mg/ml injections that contain 100mg of methenolone enanthate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Methenolone enanthate is an ester of methenolone, the active form of the drug. Methenolone acts on androgen receptors to exert some of its effects. It has moderate anabolic properties and weak androgenic properties. However, it also exerts some of its effect on the bone marrow which makes it suitable for the treatment of anemia. Its mechanism of action does not produce estrogenic side effects.</p>
          
          <p><strong>Dosage:</strong> 100mg intramuscular injection taken.</p>
          
          <p><strong>Side Effects:</strong> Side effects include masculinization in women, acne, increased sexual libido, and changes in voice, reversible hypogonadism.</p>
          
          <p><strong>Interactions:</strong> Betamethasone phosphate ciclesonide, budesonide.</p>
          
          <p><strong>Composition:</strong><br>
          Methenolone Enanthate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-013',
    name: 'DEUS SUSTAMED 250',
    description: 'Testosterone Phenylpropionate 60mg, Testosterone Isocaproate 60mg, Testosterone Decanoate 100mg, Testosterone Propionate 30mg',
    price: 32.00,
    image: '/products/deus inject/DEUS SUSTAMED 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SUSTAMED 250</h1>
        <h2 class="chemical-description">Testosterone Phenylpropionate, Testosterone Isocaproate, Testosterone Decanoate, Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> SUSTAMED 250 is one of the preferred methods of hormone replacement in men and boys to treat conditions caused by a lack of testosterone such as delayed puberty or growth. It is also recommended for males with genetic disorders, hypopituitarism or those who had previous chemotherapy. SUSTAMED 250 comes in the form of injections and 1ml of the injection contains 60mg of testosterone phenylpropionate, 60mg of testosterone isocaproate, 100mg of testosterone decanoate, 30mg of testosterone propionate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. It also exerts some estrogenic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, and bone maturation.</p>
          
          <p><strong>Dosage:</strong> Once every 3 to 4 weeks</p>
          
          <p><strong>Side Effects:</strong> Allergic reactions, hypertension cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping stroke and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, corticosteroids, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Phenylpropionate: 60mg<br>
          Testosterone Isocaproate: 60mg<br>
          Testosterone Decanoate: 100mg<br>
          Testosterone Propionate: 30mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-014',
    name: 'DEUS TESTOMED 100',
    description: 'Testosterone Base 100mg',
    price: 28.00,
    image: '/products/deus inject/DEUS TESTOMED 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED 100</h1>
        <h2 class="chemical-description">Testosterone Base</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 57-85-2</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> TESTOMED 100 (Testosterone Base) is used in men and boys to treat conditions caused by a lack of testosterone, such as delayed puberty or growth. It is recommended for males with genetic disorders, problems with certain brain structures (called the hypothalamus and pituitary) or previous chemotherapy. Testosterone injection is also used in women to treat certain types of breast cancer that have spread to other parts of the body. TESTOMED 100 contains Testosterone base 100mg/ml and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. It also exerts some estrogenic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, and bone maturation. The testosterone base has the advantage of preventing the negative effects of testosterone suppression which are common in other similar drugs. It also does not have any esters, just the pure potent base.</p>
          
          <p><strong>Dosage:</strong> 100mg weekly via intramuscular route.</p>
          
          <p><strong>Side Effects:</strong> Allergic reactions, hypertension cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping stroke and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, corticosteroids, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Base: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-015',
    name: 'DEUS TESTOMED P 100',
    description: 'Testosterone Propionate 100mg',
    price: 26.00,
    image: '/products/deus inject/DEUS TESTOMED P 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED P 100</h1>
        <h2 class="chemical-description">Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 57-85-2</p>
          <p><strong>Molecular Weight:</strong> 344.49 g/mol</p>
          <p><strong>Formula:</strong> C22H32O3</p>
          
          <p><strong>Overview:</strong> TESTOMED P 100 (Testosterone Propionate) is used in males to treat conditions such as hypogonadism, delayed puberty or growth. It is recommended for males with genetic disorders, in people who had previous chemotherapy and is useful in hormonal therapy. Testosterone propionate injection is also used in women to treat certain types of breast cancer that have spread to other parts of the body. TESTOMED P 100 is manufactured as testosterone propionate 100mg/ml which contains testosterone propionate 100mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone propionate is a prodrug of testosterone. Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. Testosterone propionate has strong androgenic and moderate anabolic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, and bone maturation. However, it is short-acting in duration. It is primarily used in androgen replacement therapy, but also useful in bodybuilding.</p>
          
          <p><strong>Dosage:</strong> 100mg every two to three days via intramuscular injection route.</p>
          
          <p><strong>Side Effects:</strong> Masculinization, voice changes, changes in libido, gynecomastia, acne, allergic reactions, hypertension cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping, stroke, and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, corticosteroids, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Propionate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-016',
    name: 'DEUS TESTOMED PP 100',
    description: 'Testosterone Phenylpropionate 100mg',
    price: 26.00,
    image: '/products/deus inject/DEUS TESTOMED PP 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED PP 100</h1>
        <h2 class="chemical-description">Testosterone Phenylpropionate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1255-49-8</p>
          <p><strong>Molecular Weight:</strong> 420.59 g/mol</p>
          <p><strong>Formula:</strong> C28H36O3</p>
          
          <p><strong>Overview:</strong> TESTOMED PP 100 (Testosterone Phenylpropionate) is used in men and boys to treat conditions such as hypogonadism, hypopituitarism and delayed puberty or growth. It is recommended for males with genetic disorders, in people who had previous chemotherapy and is useful in hormonal therapy. Testosterone phenylpropionate injection is also used in women to treat osteoporosis. TESTOMED PP 100 is manufactured as testosterone phenylpropionate 100mg/ml which contains testosterone phenylpropionate 100mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone phenylpropionate is an ester of testosterone. Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. Testosterone phenylpropionate has strong androgenic and moderate anabolic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, and bone maturation.</p>
          
          <p><strong>Dosage:</strong> 100 mg every two to three days via intramuscular injection route.</p>
          
          <p><strong>Side Effects:</strong> Masculinization, voice changes, changes in libido, gynecomastia, acne, allergic reactions, hypertension cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping, stroke, and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, corticosteroids, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Phenylpropionate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-017',
    name: 'DEUS TESTOMED U 250',
    description: 'Testosterone Undecanoate 250mg',
    price: 30.00,
    image: '/products/deus inject/DEUS TESTOMED U 250.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED U 250</h1>
        <h2 class="chemical-description">Testosterone Undecanoate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 5949-44-0</p>
          <p><strong>Molecular Weight:</strong> 456.71 g/mol</p>
          <p><strong>Formula:</strong> C30H48O3</p>
          
          <p><strong>Overview:</strong> TESTOMED U 250 (Testosterone Undecanoate) is one of the most popular testosterone esters. It is used in men and boys to treat conditions such as hypogonadism, delayed puberty or growth. It is recommended for males with genetic disorders, in people who had previous chemotherapy and is useful in hormonal therapy. Testosterone undecanoate injection is also used in women to treat osteoporosis. TESTOMED U 250 is manufactured as testosterone undecanoate 250mg/ml injection which contains testosterone undecanoate 250mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone undecanoate is a longer-acting prodrug or ester of testosterone. Testosterone acts on the androgen receptor to exert its androgenic and anabolic effects. It is responsible for the development of male sexual gametes and secondary sexual characteristics. Testosterone undecanoate has strong androgenic and moderate anabolic effects. Its anabolic effects include increased muscle mass and strength, increase in bone density, better body composition, and bone maturation. Its duration of action is also longer than other testosterone esters, with a half-life of about 20 days. It can also be taken orally or intramuscularly.</p>
          
          <p><strong>Dosage:</strong> Once every three months via intramuscular injection route.</p>
          
          <p><strong>Side Effects:</strong> Severe anaphylaxis reaction, masculinization, voice changes, changes in libido, gynecomastia, acne, hypertension, cardiovascular disorders, blood clots, unstable moods, hepatotoxicity, difficulty with sleeping, stroke, and swelling of ankles and feet.</p>
          
          <p><strong>Interactions:</strong> Antidiabetics, warfarin, propranolol, oxyphenbutazone.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Undecanoate: 250mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-018',
    name: 'DEUS TRENBOMED A 100',
    description: 'Trenbolone Acetate 100mg',
    price: 41.00,
    image: '/products/deus inject/DEUS TRENBOMED A 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRENBOMED A 100</h1>
        <h2 class="chemical-description">Trenbolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 10161-34-9</p>
          <p><strong>Molecular Weight:</strong> 312.41 g/mol</p>
          <p><strong>Formula:</strong> C20H24O3</p>
          
          <p><strong>Overview:</strong> TRENBOMED A 100 (Trenbolone Acetate) is a medication that is used in the management of the anemia of renal insufficiency and has been shown to increase hemoglobin and red cell mass. TRENBOMED A 100 comes as trenbolone acetate 100mg injection which contains trenbolone 100mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Trenbolone acetate is a short-acting prodrug of trenbolone in the body, with a half-life of 1 to 2 days. The active substance trenbolone, acts on the androgen receptor to stimulate both anabolic and androgenic effects. Trenbolone can also increase the amount of erythropoietin involved in red cell production. This is particularly useful in treating aplastic anemia, and research has shown that trenbolone is more potent than testosterone in exerting its effects. It also leads to muscle growth, increase in bone density and also helps in wound recovery.</p>
          
          <p><strong>Dosage:</strong> 100mg weekly taken as an intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Virilization (masculinization), acne oily skin, hypogonadism, elevation of LDL levels, gynecomastia, and Tren cough.</p>
          
          <p><strong>Interactions:</strong> Oral anticoagulants, antidiabetic, anabolic steroids, cytotoxic drugs.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Acetate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-019',
    name: 'DEUS TRENBOMED E 200',
    description: 'Trenbolone Enanthate 200mg',
    price: 50.00,
    image: '/products/deus inject/DEUS TRENBOMED E 200.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRENBOMED E 200</h1>
        <h2 class="chemical-description">Trenbolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1629618-98-9</p>
          <p><strong>Molecular Weight:</strong> 382.54 g/mol</p>
          <p><strong>Formula:</strong> C25H34O3</p>
          
          <p><strong>Overview:</strong> TRENBOMED E 200 (Trenbolone Enanthate) is a medication that is used in the management of the anemia of renal insufficiency and has been shown to increase hemoglobin and red cell mass. Trenbomed E 200 comes as trenbolone enanthate 200mg injection which contains trenbolone 200mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Trenbolone enanthate is a long-acting prodrug of trenbolone in the body, with a half-life of 11 days. The active substance trenbolone, acts on the androgen receptor to stimulate both anabolic and androgenic effects. Trenbolone can also increase the amount of erythropoietin involved in red cell production. This is particularly useful in treating aplastic anemia, and research has shown that trenbolone is more potent than testosterone in exerting its effects. It also leads to muscle growth, increase in bone density and also helps in wound recovery.</p>
          
          <p><strong>Dosage:</strong> 200mg weekly taken as an intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Virilization (masculinization), acne oily skin, hypogonadism, elevation of LDL levels, cardiovascular diseases, gynecomastia, and Tren cough.</p>
          
          <p><strong>Interactions:</strong> Oral anticoagulants, antidiabetic, anabolic steroids, cytotoxic drugs.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Enanthate: 200mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-020',
    name: 'DEUS TRESTOLONE A 100',
    description: 'Trestolone Acetate 100mg',
    price: 100.00,
    image: '/products/deus inject/DEUS TRESTOLONE A 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRESTOLONE A 100</h1>
        <h2 class="chemical-description">Trestolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 6157-87-5</p>
          <p><strong>Molecular Weight:</strong> 330.47 g/mol</p>
          <p><strong>Formula:</strong> C21H30O3</p>
          
          <p><strong>Overview:</strong> TRESTOLONE A 100 (Trestolone Acetate) is an experimental androgen, anabolic steroid (AAS) and progestogen medication which has been under development for potential use as a form of hormonal birth control for men and in androgen replacement therapy for low testosterone levels in men. TRESTOLONE A 100 is manufactured as trestolone acetate 100mg/ml injection containing trestolone acetate 100mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Trestolone acetate is a prodrug of trestolone. It is an androgen and anabolic steroid, exerting its effect on the androgen receptor. However, trestolone also has effects on the progesterone receptor, which effectively inhibits the secretion of luteinizing hormone and follicle stimulating hormone (FSH). These two hormones are required for the process of spermatogenesis, and in their absence, the process cannot take place. This also results in a reduction in the production of testosterone. Hence, it is used as a form of hormonal birth control for men. Its androgenic action allows it to be useful in androgen replacement therapy for deficient androgen conditions.</p>
          
          <p><strong>Dosage:</strong> 100mg weekly via intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Low libido, reduced bone density, erectile dysfunction.</p>
          
          <p><strong>Interactions:</strong> Oral anticoagulants, dextrose, and antidiabetic drugs.</p>
          
          <p><strong>Composition:</strong><br>
          Trestolone Acetate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-021',
    name: 'DEUS TRESTOLONE E 100',
    description: 'Trestolone Enanthate 100mg',
    price: 100.00,
    image: '/products/deus inject/DEUS TRESTOLONE E 100.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRESTOLONE E 100</h1>
        <h2 class="chemical-description">Trestolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 81005-56-3</p>
          <p><strong>Molecular Weight:</strong> 400.60 g/mol</p>
          <p><strong>Formula:</strong> C26H40O3</p>
          
          <p><strong>Overview:</strong> TRESTOLONE E 100 (Trestolone Enanthate) is an experimental androgen/anabolic steroid (AAS) and progestogen medication which has been under development for potential use as a form of hormonal birth control for men and in androgen replacement therapy for low testosterone levels in men. TRESTOLONE E 100 is manufactured as a trestolone enanthate 100mg/ml injection containing trestolone enanthate 100mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Trestolone enanthate is a prodrug of trestolone. It is an androgen and anabolic steroid, exerting its effect on the androgen receptor. However, trestolone also has effects on the progesterone receptor, which effectively inhibits the secretion of luteinizing hormone and follicle stimulating hormone (FSH). These two hormones are required for the process of spermatogenesis, and in their absence, the process cannot take place. This also results in a reduction in the production of testosterone. Hence, it is used as a form of hormonal birth control for men. Its androgenic action allows it to be useful in androgen replacement therapy for deficient androgen conditions.</p>
          
          <p><strong>Dosage:</strong> 100mg weekly via intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Low libido, reduced bone density, erectile dysfunction.</p>
          
          <p><strong>Interactions:</strong> Oral anticoagulants, dextrose and antidiabetic drugs.</p>
          
          <p><strong>Composition:</strong><br>
          Trestolone Enanthate: 100mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'inj-deus-022',
    name: 'DEUS WINIMED 50',
    description: 'Stanozolol 50mg',
    price: 33.00,
    image: '/products/deus inject/DEUS WINIMED 50.png',
    category: 'INJECTION',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS WINIMED 50</h1>
        <h2 class="chemical-description">Stanozolol</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 10418-03-8</p>
          <p><strong>Molecular Weight:</strong> 328.49 g/mol</p>
          <p><strong>Formula:</strong> C21H32N2O</p>
          
          <p><strong>Overview:</strong> WINIMED 50 (Stanozolol) is a derivative of dihydrotestosterone (DHT). It is used for the treatment of anemia and hereditary angioedema which causes episodes of swelling of the face, extremities, genitals, bowel wall, and throat. It is manufactured as 50mg/ml injections which contain stanozolol 50mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Stanozolol is an anabolic steroid and acts on androgen receptors. Stanozolol has weak androgenic properties which makes it useful in the treatment of children. It also seems to enhance the production of the C1NH protein. Shortage of this protein is implicated in the development of hereditary angioedema. Even though it has weak androgenic properties it can still act on the kidneys to increase erythropoietin which leads to an increase in red cell production.</p>
          
          <p><strong>Dosage:</strong> 50mg weekly via the intramuscular route.</p>
          
          <p><strong>Side Effects:</strong> Hepatotoxicity, increase in weight, acne, mood variation, hirsutism, and postmenopausal bleeding.</p>
          
          <p><strong>Interactions:</strong> Anticoagulants, antidiabetic drugs, insulin.</p>
          
          <p><strong>Composition:</strong><br>
          Stanozolol: 50mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-001',
    name: 'DEUS ANADROMED 50',
    description: 'Oxymetholone 50mg',
    price: 27.00,
    image: '/products/deus oral/DEUS ANADROMED 50.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ANADROMED 50</h1>
        <h2 class="chemical-description">Oxymetholone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 434-07-1</p>
          <p><strong>Molecular Weight:</strong> 332.48 g/mol</p>
          <p><strong>Formula:</strong> C21H32O3</p>
          
          <p><strong>Overview:</strong> ANADROMED 50 (Oxymetholone) is an androgen and anabolic steroid. It can be used as adjunctive therapy to promote weight gain after weight loss following extensive surgery, chronic infections, or severe trauma. This is one of the most usable steroids in medical use. This medicine also can be used in the treatment of osteoporosis and anemia. It comes in anadromed 50mg tablets that contain oxymetholone 50mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Oxymetholone acts on androgen receptors as an agonist. It is therefore useful in stimulating muscular hypertrophy, especially in patients who are malnourished or with severe weight loss. It does this via the anabolic stimulating property of the androgen receptor. Also, oxymetholone benefits patients who have anemia, as it is able to stimulate the bone marrow to produce more red cells.</p>
          
          <p><strong>Dosage:</strong> 1-5mg/kg/day Daily, orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects of oxymetholone include low moods, weakness, headaches, rapid weight gain, nausea and vomiting, difficulty sleeping, diarrhoea, and gynecomastia and it can also lead to masculinization of women.</p>
          
          <p><strong>Interactions:</strong> Major known interactions include warfarin and alcohol. But ensure you share any medications you are using, including herbal products and supplements with your doctor before using.</p>
          
          <p><strong>Composition:</strong><br>
          Oxymetholone: 50mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-002',
    name: 'DEUS ANAVAMED 10',
    description: 'Oxandrolone 10mg',
    price: 23.00,
    image: '/products/deus oral/DEUS ANAVAMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ANAVAMED 10</h1>
        <h2 class="chemical-description">Oxandrolone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 53-39-4</p>
          <p><strong>Molecular Weight:</strong> 306.44 g/mol</p>
          <p><strong>Formula:</strong> C19H30O3</p>
          
          <p><strong>Overview:</strong> ANAVAMED 10 (Oxandrolone) is an oral androgen and anabolic steroid. It is used to promote weight gain under different circumstances. It is also used in the treatment of burns, reduction of catabolic effects from extended corticosteroid use, bone pain in osteoporosis and turner syndrome. ANAVAMED 10 comes in 10mg tablets that contain oxandrolone 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Oxandrolone acts as an agonist of the androgen receptors. It has both androgenic and anabolic activity, however, it is less androgenic than anabolic. Stimulation of the androgen receptors results in protein synthesis, leading to increased muscular growth, lean body mass and bone density. An added benefit of oxandrolone is that it does not affect androgenic tissues such as the prostate, the skin and hair follicles.</p>
          
          <p><strong>Dosage:</strong> 2.5mg - 20mg daily taken orally in 2-4 divided doses.</p>
          
          <p><strong>Side Effects:</strong> Can include virilization, acne, priapism, infertility, testicular atrophy, elevated liver enzymes.</p>
          
          <p><strong>Interactions:</strong> Interacts with warfarin, oral hypoglycemic agents, and corticosteroids.</p>
          
          <p><strong>Composition:</strong><br>
          Oxandrolone: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-003',
    name: 'DEUS DIANAMED 10',
    description: 'Methandienone 10mg',
    price: 10.00,
    image: '/products/deus oral/DEUS DIANAMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DIANAMED 10</h1>
        <h2 class="chemical-description">Methandienone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 72-63-9</p>
          <p><strong>Molecular Weight:</strong> 300.44 g/mol</p>
          <p><strong>Formula:</strong> C20H28O2</p>
          
          <p><strong>Overview:</strong> DIANAMED 10 (Methandienone) is an effective and affordable oral medication with androgenic and anabolic properties. It is typically used in the treatment of anorexia and has also been used as a form of hormonal replacement therapy. DIANAMED 10 comes as methandienone 10mg tablets which contain 10mg of methandienone and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Methandienone stimulates the androgen receptor to elicit anabolic effects such as increased synthesis of protein, breakdown of glycogen and increase in muscular strength. It has limited androgenic activity and estrogenic effects. Methanedienone has a half-life of 3-6 hours and is eliminated through the urine.</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects include acne, virilization, hair loss on the scalp, gynecomastia, liver injury, and fluid retention.</p>
          
          <p><strong>Interactions:</strong> Methanedienone interacts with aromatase inhibitors and antifungals.</p>
          
          <p><strong>Composition:</strong><br>
          Methandienone: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-004',
    name: 'DEUS HALOMED 5',
    description: 'Fluoxymesterone 5mg',
    price: 45.00,
    image: '/products/deus oral/DEUS HALOMED 5.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HALOMED 5</h1>
        <h2 class="chemical-description">Fluoxymesterone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 76-43-7</p>
          <p><strong>Molecular Weight:</strong> 336.44 g/mol</p>
          <p><strong>Formula:</strong> C20H29FO3</p>
          
          <p><strong>Overview:</strong> HALOMED 5 (Fluoxymesterone) is used in the treatment of hypogonadism in males, breast cancer in females, and anaemia. HALOMED 5 is manufactured as fluoxymesterone 5mg tablets that contain 5mg of fluoxymesterone and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Fluoxymesterone is a potent androgen receptor agonist exhibiting more androgenic than anabolic properties. This makes it useful in the treatment of androgen deficiency in males. It has little or no progestogenic and appears to inhibit estrogen, which makes it useful in the treatment of breast cancer. Fluoxymesterone also has some effects on the glucocorticoid receptor. Fluoxymesterone has a half-life of 9.2 hours, metabolized in the liver and eliminated in the urine.</p>
          
          <p><strong>Dosage:</strong> 5mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Virilization in women and children, gynecomastia, hypertension, low moods, anxiety, changes in libido, and headaches.</p>
          
          <p><strong>Interactions:</strong> Anisindione, dicumarol, ketoconazole, leflunomide, mipomersen, lomitapide, pexidartinib, teriflunomide, and warfarin.</p>
          
          <p><strong>Composition:</strong><br>
          Fluoxymesterone: 5mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-005',
    name: 'DEUS PRIMOMED 25',
    description: 'Methenolone Acetate 25mg',
    price: 75.00,
    image: '/products/deus oral/DEUS PRIMOMED 25.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PRIMOMED 25</h1>
        <h2 class="chemical-description">Methenolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 434-05-9</p>
          <p><strong>Molecular Weight:</strong> 344.50 g/mol</p>
          <p><strong>Formula:</strong> C22H32O3</p>
          
          <p><strong>Overview:</strong> PRIMOMED 25 (Methenolone Acetate) is used in the management of anaemia. PRIMOMED 25 is manufactured as methenolone acetate 25mg tablets that contain 25mg of methenolone acetate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Methenolone acetate is an ester of methenolone, the active form of the drug. Methenolone acts on androgen receptors to exert some of its effects. It has moderate anabolic properties and weak androgenic properties. However, it also exerts some of its effect on the bone marrow which makes it suitable for the treatment of anemia.</p>
          
          <p><strong>Dosage:</strong> 25mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects include masculinization in women, acne, increased sexual libido, and changes in voice.</p>
          
          <p><strong>Interactions:</strong> Betamethasone phosphate ciclesonide, budesonide.</p>
          
          <p><strong>Composition:</strong><br>
          Methenolone acetate: 25mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-006',
    name: 'DEUS PROVIMED 25',
    description: 'Mesterolone 25mg',
    price: 23.00,
    image: '/products/deus oral/DEUS PROVIMED 25.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PROVIMED 25</h1>
        <h2 class="chemical-description">Mesterolone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1424-00-6</p>
          <p><strong>Molecular Weight:</strong> 304.46 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Mesterolone is an oral medication with both androgen and anabolic properties. It is used to treat androgen deficiency and infertility that is caused by low levels of testosterone in men.</p>
          
          <p><strong>Mechanism of Action:</strong> Mesterolone works on androgen receptors to exert androgenic effects, although it has stronger androgenic effects which make it useful in androgen deficiency. However, these androgenic effects are weaker compared to other similar drugs. Also, it does not exhibit estrogenic effects. Its anabolic effects also lead to improved muscular strength and physique.</p>
          
          <p><strong>Dosage:</strong> 25mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Virilization, acne, headaches, anxiety, changes in sexual libido, cardiovascular disorders.</p>
          
          <p><strong>Interactions:</strong> Corticosteroids, antidiabetic medications, dopaminergics.</p>
          
          <p><strong>Composition:</strong><br>
          Mesterolone: 25mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-007',
    name: 'DEUS SUPERMED 10',
    description: 'Methyldrostanolone 10mg',
    price: 41.00,
    image: '/products/deus oral/DEUS SUPERMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SUPERMED 10</h1>
        <h2 class="chemical-description">Methyldrostanolone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 3381-88-2</p>
          <p><strong>Molecular Weight:</strong> 318.50 g/mol</p>
          <p><strong>Formula:</strong> C21H34O2</p>
          
          <p><strong>Overview:</strong> SUPERMED 10 (Methyldrostanolone) is a medication which is used as a part of hormonal replacement therapy and treatment of hypogonadism in men. Methyldrostanolone also increases muscular mass. SUPERMED 10 comes in methyldrostanolone 10mg tablets which contain 10mg methyldrostanolone and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Methyldrostanolone acts on androgen receptors to elicit both androgenic and anabolic effects. It however has stronger anabolic than androgenic effects. Hence its widespread use in the development of muscle mass and strength.</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Hepatotoxicity, virilization, acne, headaches, anxiety, changes in sexual libido, cardiovascular disorders.</p>
          
          <p><strong>Interactions:</strong> Corticosteroids, antidiabetic medications, dopaminergic drugs and antipsychotics.</p>
          
          <p><strong>Composition:</strong><br>
          Methyldrostanolone: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-008',
    name: 'DEUS TURIMED 10',
    description: '4-Chlorodehydromethyltestosterone 10mg',
    price: 17.00,
    image: '/products/deus oral/DEUS TURIMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TURIMED 10</h1>
        <h2 class="chemical-description">4-Chlorodehydromethyltestosterone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 2446-23-3</p>
          <p><strong>Molecular Weight:</strong> 334.88 g/mol</p>
          <p><strong>Formula:</strong> C20H27ClO2</p>
          
          <p><strong>Overview:</strong> TURIMED 10 (4-Chlorodehydromethyltestosterone) is an oral anabolic-androgenic steroid (AAS). It is the 4-chloro-substituted derivative of methandienone. It has been used to treat hypogonadism, erectile dysfunction, suppression of symptoms associated with menopause, breast cancer and muscle wasting. TURIMED 10 is manufactured as 4-chlorodehydromethyltestosterone 10mg tablets which contain 4-chlorodehydromethyltestosterone 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> 4-Chlorodehydromethyltestosterone is a derivative of metandienone. It acts on the androgen receptor to exert its effects. The modifications of its chemical structure make 4-Chlorodehydromethyltestosterone non-aromatizable resulting in a very low androgenic rating and stronger anabolic rating. It also has limited estrogenic effects.</p>
          
          <p><strong>Dosage:</strong> 10mg tablets daily.</p>
          
          <p><strong>Side Effects:</strong> Bleeding, hepatotoxicity, mild acne, gynecomastia, constipation, low sex drive.</p>
          
          <p><strong>Interactions:</strong> Anticoagulants, other anabolic steroids.</p>
          
          <p><strong>Composition:</strong><br>
          4-Chlorodehydromethyltestosterone: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'oral-deus-009',
    name: 'DEUS WINIMED 10',
    description: 'Stanozolol 10mg',
    price: 11.00,
    image: '/products/deus oral/DEUS WINIMED 10.png',
    category: 'ORAL',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS WINIMED 10</h1>
        <h2 class="chemical-description">Stanozolol</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 10418-03-8</p>
          <p><strong>Molecular Weight:</strong> 328.49 g/mol</p>
          <p><strong>Formula:</strong> C21H32N2O</p>
          
          <p><strong>Overview:</strong> WINIMED 10 (Stanozolol) is a derivative of dihydrotestosterone (DHT). It is used for the treatment of anemia and hereditary angioedema which causes episodes of swelling of the face, extremities, genitals, bowel wall, and throat. It is manufactured in 10mg tablets which contain stanozolol 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> It is an anabolic steroid and acts on androgen receptors. Stanozolol has weak androgenic properties which makes it useful in the treatment of children. It also seems to enhance the production of the C1NH protein. Shortage of this protein is implicated in the development of hereditary angioedema. Even though it has weak androgenic properties it can still act on the kidneys to increase erythropoietin which leads to an increase in red cell production.</p>
          
          <p><strong>Dosage:</strong> 0.5mg - 10mg taken orally daily.</p>
          
          <p><strong>Side Effects:</strong> Hepatotoxicity, increase in weight, acne, mood variation, hirsutism, and postmenopausal bleeding.</p>
          
          <p><strong>Interactions:</strong> Anticoagulants, antidiabetic drugs, insulin.</p>
          
          <p><strong>Composition:</strong><br>
          Stanozolol: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-001',
    name: 'DEUS GW501516 10 CARDARINE',
    description: 'SARM 10mg',
    price: 35.00,
    image: '/products/deus sarms/DEUS GW501516 10 CARDARINE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS GW501516 10 CARDARINE</h1>
        <h2 class="chemical-description">Cardarine</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 317318-70-0</p>
          <p><strong>Molecular Weight:</strong> 453.49 g/mol</p>
          <p><strong>Formula:</strong> C21H18F3NO3S2</p>
          
          <p><strong>Overview:</strong> GW501516 10 (Cardarine) is a PPAR? receptor agonist, a research chemical, developed for the treatment of obesity, heart conditions and lipid disorders and also enhances endurance. It comes as GW501516 10mg tablets which contain 10mg of cardarine and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cardarine acts on the peroxisome proliferator-activated receptor delta (PPAR-delta) receptor. This receptor, when stimulated, results in increased burning of fat. During exercise, the number of PPAR? receptors increases, leading to an increase in the fat-burning capacity of cardarine.</p>
          
          <p><strong>Dosage:</strong> 10mg/day taken orally.</p>
          
          <p><strong>Side Effects:</strong> Headaches, nausea and vomiting, insomnia, and liver damage. It can also cause cancer when used over extended periods.</p>
          
          <p><strong>Interactions:</strong> Not available</p>
          
          <p><strong>Composition:</strong><br>
          GW501516: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-002',
    name: 'DEUS LGD4033 10 LIGANDROL',
    description: 'SARM 10mg',
    price: 60.00,
    image: '/products/deus sarms/DEUS LGD4033 10 LIGANDROL.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS LGD4033 10 LIGANDROL</h1>
        <h2 class="chemical-description">Ligandrol</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1165910-22-4</p>
          <p><strong>Molecular Weight:</strong> 338.25 g/mol</p>
          <p><strong>Formula:</strong> C14H12F6N2O</p>
          
          <p><strong>Overview:</strong> LGD4033 10 (Ligandrol) is a novel nonsteroidal oral selective androgen receptor modulator (SARM) that was developed for the treatment of disease conditions like muscle wasting and osteoporosis. It comes as LGD4033 10 (Ligandrol) 10mg tablets which contain 10mg of ligandrol and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Ligandrol is a selective androgen receptor modulator (SARM). SARMs are molecules that act on androgen receptors. Androgen receptors, when stimulated by androgens, are responsible for male sexual characteristics (androgenic action) and the development of muscle bulk and bone mass (anabolic action). SARMs stimulate these receptors to cause an increase in lean body mass (fat-free mass) and improvement of bone density. They are preferred because they do not stimulate the androgen receptors to cause the development of male sexual characteristics, and this is why they are tagged "selective".</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Ligandrol can increase the risk of liver damage, heart attack, stroke.</p>
          
          <p><strong>Interactions:</strong> Not Available</p>
          
          <p><strong>Composition:</strong><br>
          LGD4033: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-003',
    name: 'DEUS MK677 10 IBUTAMOREN',
    description: 'SARM 10mg',
    price: 40.00,
    image: '/products/deus sarms/DEUS MK677 10 IBUTAMOREN.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MK677 10 IBUTAMOREN</h1>
        <h2 class="chemical-description">Ibutamoren</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 159634-47-6</p>
          <p><strong>Molecular Weight:</strong> 528.67 g/mol</p>
          <p><strong>Formula:</strong> C27H36N4O5S</p>
          
          <p><strong>Overview:</strong> MK677 10 (Ibutamoren) is a drug that acts on the ghrelin receptor and also causes the production of the growth hormone. It is available as MK677 10mg tablets (ibutamoren capsules) which comprises ibutamoren 10mg and excipients. Ibutamoren benefits include an increase in lean mass, better sleep, treatment of growth hormone deficiency, reduced muscle wasting, and improved bone density. Ibutamoren supplements can also be used to improve appetite.</p>
          
          <p><strong>Mechanism of Action:</strong> Ibutamoren is a long-acting agonist of the ghrelin receptor. Ghrelin is usually referred to as the 'hunger hormone', because it increases the desire to eat. It also increases body weight. Ghrelin is also involved in glucose metabolism. Ibutamoren is a ghrelin receptor agonist that acts to produce the same effects as ghrelin. It also causes the secretion of growth hormone when it binds to the ghrelin receptor.</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Improper dosage and extended use can result in increased appetite, lethargy, joint pain, insulin resistance, and elevated prolactin levels.</p>
          
          <p><strong>Interactions:</strong> Not Available</p>
          
          <p><strong>Composition:</strong><br>
          MK677: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-004',
    name: 'DEUS MK2866 10 OSTARINE',
    description: 'SARM 10mg',
    price: 33.00,
    image: '/products/deus sarms/DEUS MK2866 10 OSTARINE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MK2866 10 OSTARINE</h1>
        <h2 class="chemical-description">Ostarine</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 841205-47-8</p>
          <p><strong>Molecular Weight:</strong> 389.33 g/mol</p>
          <p><strong>Formula:</strong> C19H14F3N3O3</p>
          
          <p><strong>Overview:</strong> MK2866 10 (Ostarine) is a research chemical that is used in the treatment of conditions such as muscle wasting and osteoporosis. MK2866 10 comes in 10mg tablets that comprise MK2866 (Ostarine) 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Ostarine is a selective androgen receptor modulator (SARM). SARMs are molecules that act on androgen receptors. Androgen receptors, when stimulated by androgens, are responsible for male sexual characteristics (androgenic action) and the development of muscle bulk and bone mass (anabolic action). SARMs stimulate these receptors to cause an increase in lean body mass (fat-free mass) and improvement of bone density. They are preferred because they do not stimulate the androgen receptors to cause the development of male sexual characteristics, and this is why they are tagged "selective".</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Ostarine can increase the risk of liver damage, heart attack, stroke.</p>
          
          <p><strong>Interactions:</strong> Not available</p>
          
          <p><strong>Composition:</strong><br>
          MK2866: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-005',
    name: 'DEUS RAD140 10 TESTOLONE',
    description: 'SARM 10mg',
    price: 50.00,
    image: '/products/deus sarms/DEUS RAD140 10 TESTOLONE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS RAD140 10 TESTOLONE</h1>
        <h2 class="chemical-description">Testolone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1182367-47-0</p>
          <p><strong>Molecular Weight:</strong> 393.83 g/mol</p>
          <p><strong>Formula:</strong> C20H16ClN5O2</p>
          
          <p><strong>Overview:</strong> RAD140 10 (Testolone) is a selective androgen receptor modulator (SARM). It is used in androgen replacement therapy as a substitute for testosterone. It comes in RAD140 10mg tablets which contain 10mg of testolone and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> SARMs like Testolone are molecules that act on androgen receptors. Androgen receptors, when stimulated by androgens, are responsible for male sexual characteristics (androgenic action) and the development of muscle bulk and bone mass (anabolic action). Testolone stimulates these receptors to cause an increase in lean body mass (fat-free mass) and improvement of bone density. They are preferred because they do not stimulate the androgen receptors to cause the development of male sexual characteristics, which are usually unwanted during treatment, and this is why they are tagged "selective". SARMs also do not cause prostate hypertrophy which is caused by exogenous androgens.</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects might include heart attack and liver injury.</p>
          
          <p><strong>Interactions:</strong> Not Available</p>
          
          <p><strong>Composition:</strong><br>
          RAD140: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-006',
    name: 'DEUS S4 25 ANDARINE',
    description: 'SARM 25mg',
    price: 45.00,
    image: '/products/deus sarms/DEUS S4 25 ANDARINE.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS S4 25 ANDARINE</h1>
        <h2 class="chemical-description">Andarine</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 401900-40-1</p>
          <p><strong>Molecular Weight:</strong> 441.36 g/mol</p>
          <p><strong>Formula:</strong> C19H18F3N3O6</p>
          
          <p><strong>Overview:</strong> S4 25 (Andarine) is a nonsteroidal selective androgen receptor modulator (SARM). It is also a partial agonist of the androgen receptor which makes it useful in the treatment of conditions such as muscle wasting (cachexia), osteoporosis (brittle, fragile bones) and benign prostatic hypertrophy (BPH). It is administered orally, existing as S4 25mg tablets containing andarine 25mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Andarine is a SARM that acts as a partial agonist on androgen receptors. Androgen receptors, when stimulated by androgens, are responsible for male sexual characteristics (androgenic action) and the development of muscle bulk and bone mass (anabolic action). Andarine stimulates these receptors to cause an increase in lean body mass (fat-free mass) and improvement of bone density. They are preferred because they do not stimulate the androgen receptors to cause the development of male sexual characteristics, which are usually unwanted during treatment, and this is why they are tagged "selective". Andarine does not cause prostate hypertrophy which is caused by exogenous androgens and is in fact used to treat prostate enlargement.</p>
          
          <p><strong>Dosage:</strong> 25mg daily, taken orally.</p>
          
          <p><strong>Side Effects:</strong> Some rare side effects include heart attack, liver injury and stroke.</p>
          
          <p><strong>Interactions:</strong> Not available</p>
          
          <p><strong>Composition:</strong><br>
          S4: 25mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-007',
    name: 'DEUS S23 10',
    description: 'SARM 10mg',
    price: 35.00,
    image: '/products/deus sarms/DEUS S23 10.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS S23 10</h1>
        <h2 class="chemical-description">S23</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1010396-29-8</p>
          <p><strong>Molecular Weight:</strong> 416.76 g/mol</p>
          <p><strong>Formula:</strong> C18H13ClF4N2O3</p>
          
          <p><strong>Overview:</strong> S23 10 is a nonsteroidal oral selective androgen receptor modulator (SARM) for use as a male hormonal contraceptive. It comes as S23 10mg tablets comprising S23 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> SARMs like S23 10 are molecules that act on androgen receptors. Androgen receptors, when stimulated by androgens, are responsible for male sexual characteristics (androgenic action) and the development of muscle bulk and bone mass (anabolic action). S23 10 stimulates these receptors to cause an increase in lean body mass (fat-free mass) and improvement of bone density. They are preferred because they do not stimulate the androgen receptors to cause the development of male sexual characteristics, which are usually unwanted during treatment, and this is why they are tagged "selective". SARMs also do not cause prostate hypertrophy which is caused by exogenous androgens. As a contraceptive, S23 10 causes negative feedback when it stimulates the androgen receptor, causing suppression of sex hormones in the brain.</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects may include an increased risk of heart attack, liver injury, or stroke.</p>
          
          <p><strong>Interactions:</strong> Not Available</p>
          
          <p><strong>Composition:</strong><br>
          S23: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-008',
    name: 'DEUS SR9009 10 STENABOLIC',
    description: 'SARM 10mg',
    price: 35.00,
    image: '/products/deus sarms/DEUS SR9009 10 STENABOLIC.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SR9009 10 STENABOLIC</h1>
        <h2 class="chemical-description">Stenabolic</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1379686-30-2</p>
          <p><strong>Molecular Weight:</strong> 437.94 g/mol</p>
          <p><strong>Formula:</strong> C20H24ClN3O4</p>
          
          <p><strong>Overview:</strong> SR9009 10 (Stenabolic) is also known as "exercise in a pill", or "workout in a pill". It is an agonist of the Rev-ErbA protein which is involved in regulating circadian patterns and the metabolic activities of the body. It is manufactured as SR9009 10mg tablets which contain 10mg of SR9009 (stenabolic) and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Stenabolic is an agonist of the Rev-ErbA protein. This protein is involved in the regulation of the circadian rhythm of the body, and also body metabolism. When stimulated, this receptor leads to increased numbers of mitochondria, which produce energy in the body. This way SR9009 benefits athletes and bodybuilders, supplying them with extra energy so they can perform longer without exhaustion. SR9009 has a half-life of 4-6 hours.</p>
          
          <p><strong>Dosage:</strong> 10mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects might include heart disease, liver injury, hormonal imbalances, difficulty sleeping, and weakness.</p>
          
          <p><strong>Interactions:</strong> Not available</p>
          
          <p><strong>Composition:</strong><br>
          SR9009: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sarms-deus-009',
    name: 'DEUS YK11 5',
    description: 'SARM 5mg',
    price: 55.00,
    image: '/products/deus sarms/DEUS YK11 5.png',
    category: 'SARMS',
    brand: 'deus',
    filterType: 'Allround',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS YK11 5</h1>
        <h2 class="chemical-description">YK11</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1370003-76-1</p>
          <p><strong>Molecular Weight:</strong> 430.54 g/mol</p>
          <p><strong>Formula:</strong> C25H34O6</p>
          
          <p><strong>Overview:</strong> YK11 5 is an oral steroidal selective androgen receptor modulator (SARM). It is a gene-selective partial agonist of the androgen receptor (AR). It comes in YK11 5mg tablets which contain YK11 5mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> YK11 acts on the androgen receptors in the body. Androgen receptors, when stimulated, are responsible for male sexual characteristics (androgenic action) and the development of muscle bulk and bone mass (anabolic action). YK11 is a partial agonist of the androgen receptors. It exhibits its anabolic actions by stimulating a hormone known as follistatin. Follistatin helps to inhibit another hormone, myostatin, which limits muscle growth in the body. So, YK11 allows muscle growth and an increase in muscular strength.</p>
          
          <p><strong>Dosage:</strong> 5mg daily orally.</p>
          
          <p><strong>Side Effects:</strong> Side effects could include testosterone suppression, excess dosage could cause cancer, liver injury, acne, decreased libido, insomnia, anxiety, nausea and vomiting.</p>
          
          <p><strong>Interactions:</strong> Interactions with other SARMs</p>
          
          <p><strong>Composition:</strong><br>
          YK11: 5mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-001',
    name: 'DEUS BPC-157',
    description: 'BPC-157 Pentadecapeptide 5mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS BPC-157.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS BPC-157</h1>
        <h2 class="chemical-description">Pentadecapeptide</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 137525-51-0</p>
          <p><strong>Molecular Weight:</strong> 1419.54 g/mol</p>
          <p><strong>Formula:</strong> C62H98N16O22</p>
          
          <p><strong>Overview:</strong> BPC-157 (Pentadecapeptide) is a novel stable 15 amino-acid compound that was partially isolated from human gastric juice. It has been used in the treatment of ulcers and several other wounds. It is manufactured as BPC-157 (Pentadecapeptide) 5mg/vial injection containing Pentadecapeptide 5mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> BPC-157 (Body Protection Compound - 157) has been shown to protect cells. The 15 amino acids that form this compound do not occur naturally but the compound is a derivative of the human gastric juice. Pentadecapeptide exerts its effect through the process of angiogenesis (blood vessel formation). This process can lead to the formation of a large vascular network, which allows for the regeneration of tissue. BPC-157 has been found to reduce the area of ulceration and help in the regeneration or healing of ulcers. Another mechanism through which it possibly achieves this is by inhibiting a growth-inhibiting factor, 4-hydroxynoneal, thereby allowing more growth and regeneration. BPC-157 (Pentadecapeptide) also protects the stomach lining from toxic agents. Due to its regenerative attributes, it has also been found to stimulate the proliferation of tendon cells and may be useful in regenerating neuronal cells.</p>
          
          <p><strong>Dosage:</strong> 200-400mcg daily, given as intramuscular injections.</p>
          
          <p><strong>Side Effects:</strong> Pain at the injection site, inflammation, fatigue, dizziness.</p>
          
          <p><strong>Interactions:</strong> Nitric oxide, dopamine.</p>
          
          <p><strong>Composition:</strong><br>
          Pentadecapeptide: 5mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-002',
    name: 'DEUS CJC-1295 DAC',
    description: 'Tetrasubstitued 30-Amino Acid Peptide Hormone 2mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS CJC-1295 DAC.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CJC-1295 DAC</h1>
        <h2 class="chemical-description">Tetrasubstituted 30-Amino Acid Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 446262-90-4</p>
          <p><strong>Molecular Weight:</strong> 3367.95 g/mol</p>
          <p><strong>Formula:</strong> C152H252N44O42</p>
          
          <p><strong>Overview:</strong> CJC-1295 DAC (Tetrasubstituted 30-Amino Acid Peptide Hormone) is a growth hormone-releasing hormone analog useful in the treatment of growth hormone-deficient adults and children with impaired linear growth. It can also be useful in the treatment of turner syndrome and wasting. It is manufactured as CJC-1295 DAC (Tetrasubstituted 30-Amino Acid Peptide Hormone) 2mg/vial injections which contain Tetrasubstituted 30-Amino Acid Peptide Hormone 2mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As a GHRH analogue, CJC-1295 DAC acts on the pituitary gland to stimulate the release of growth hormone. When linked with the Drug Affinity Complex (DAC) it has a half-life of 5-8 days which gives it a major advantage over GHRH itself with a half-life of 7 minutes. This means frequent injections are unnecessary. An added benefit is the ability of CJC-1295 DAC to promote deep sleep and memory retention.</p>
          
          <p><strong>Dosage:</strong> Twice weekly intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Fluid retention, weakness, itching, tingling sensation, insulin resistance.</p>
          
          <p><strong>Interactions:</strong> Insulin.</p>
          
          <p><strong>Composition:</strong><br>
          Tetrasubstituted 30-Amino Acid Peptide Hormone: 2mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-003',
    name: 'DEUS DEUSTROPIN 4/12',
    description: 'Recombinant Human Growth Hormone [rDNA origin] 12IU',
    price: 190.00,
    image: '/products/deus peptides & hgh/DEUS DEUSTROPIN 4:12.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DEUSTROPIN 4/12</h1>
        <h2 class="chemical-description">Recombinant Human Growth Hormone [rDNA origin]</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 12629-01-5</p>
          <p><strong>Molecular Weight:</strong> 22.260 kDa</p>
          <p><strong>Formula:</strong> C990H1529N263O299S7</p>
          
          <p><strong>Overview:</strong> DEUSTROPIN 4/12 (Recombinant Human Growth Hormone [rDNA origin]) is a growth hormone analog that is used to treat children with growth hormone deficiency. It is a polypeptide hormone that has recombinant DNA origin.</p>
          
          <p><strong>Mechanism of Action:</strong> DEUSTROPIN 4/12 is a recombinant growth hormone that acts on bone, cartilage, and muscle to stimulate growth in childhood. It acts just like the natural growth hormone. It can be used to treat both children and adults with growth hormone deficiency. It increases the concentration of Insulin-Like Growth Factor-1 (IGF-1) which plays a role in skeletal growth. It also increases the synthesis of protein and increases the lean body mass.</p>
          
          <p><strong>Dosage:</strong> Weight-based dosing as directed by a physician.</p>
          
          <p><strong>Side Effects:</strong> Headache, nausea, fatigue, vomiting, weakness, eye problems, irregular heartbeats, slurred speech, joint stiffness and impaired glucose tolerance.</p>
          
          <p><strong>Interactions:</strong> Oral hypoglycemic drugs, steroids, cyclosporine, oral contraceptive, macimorelin.</p>
          
          <p><strong>Composition:</strong><br>
          Recombinant Human Growth Hormone [rDNA origin]: 4mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-004',
    name: 'DEUS DSIP',
    description: 'Delta Sleep-Inducing Peptide 5mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS DSIP.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DSIP</h1>
        <h2 class="chemical-description">Delta Sleep-Inducing Peptide</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 62568-57-4</p>
          <p><strong>Molecular Weight:</strong> 848.81 g/mol</p>
          <p><strong>Formula:</strong> C35H48N10O15</p>
          
          <p><strong>Overview:</strong> DSIP (Delta Sleep-Inducing Peptide) is a peptide that is used to promote Delta wave activity, which is involved in deep sleep. It is commonly found in human breast milk. It can be used to treat insomnia and narcolepsy, convulsion and also opioid and alcohol withdrawal. It acts to relieve stress, depression and anxiety. It is manufactured as Delta Sleep-Inducing Peptides 5mg/vial which contains 5mg of Delta Sleep-Inducing Peptide and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> It has been detected that DSIP (Delta Sleep-Inducing Peptide) reduced the nocturnal activity of an enzyme, NAT, and might also be involved in the modulation of adrenergic transmission. It also works as an antagonist to opiate receptors which makes it useful in treating alcohol/opiate withdrawal syndrome.</p>
          
          <p><strong>Dosage:</strong> 0.1ml injection subcutaneously at bedtime.</p>
          
          <p><strong>Side Effects:</strong> Headache, nausea, fatigue, dizziness.</p>
          
          <p><strong>Interactions:</strong> Dexamethasone, exogenous hormones.</p>
          
          <p><strong>Composition:</strong><br>
          Delta Sleep-inducing Peptide: 5mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-005',
    name: 'DEUS EPITHALON',
    description: 'Epithalamine 10mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS EPITHALON.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EPITHALON</h1>
        <h2 class="chemical-description">Epithalamine</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 307297-39-8</p>
          <p><strong>Molecular Weight:</strong> 390.35 g/mol</p>
          <p><strong>Formula:</strong> C14H22N4O9</p>
          
          <p><strong>Overview:</strong> EPITHALON (Epithalamine) is a short peptide that has antiaging properties. It is manufactured as EPITHALON (Epithalamine) 10mg/vial, and each vial contains 10mg of Epithalamine and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Epithalamine has been shown to improve neural discharge in old age and patients who have low brain activity. It also activates some ribosomal genes and has been shown to decrease the mortality rate. It has antioxidant properties which can prevent the breakdown of cells in the body. Epithalamine has also been shown to induce telomere elongation in human somatic cells. This may lead to an increase in lifespan and a decrease in mortality rate.</p>
          
          <p><strong>Dosage:</strong> 5-10mg daily intramuscular injection.</p>
          
          <p><strong>Side Effects:</strong> Not reported.</p>
          
          <p><strong>Interactions:</strong> Not Available.</p>
          
          <p><strong>Composition:</strong><br>
          Epithalamine: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-006',
    name: 'DEUS EPO',
    description: 'Erythropoietin 3000IU',
    price: 0.00,
    image: '/products/deus peptides & hgh/DEUS EPO.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EPO</h1>
        <h2 class="chemical-description">Erythropoietin</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 11096-26-7</p>
          <p><strong>Molecular Weight:</strong> 18396.1 Da</p>
          <p><strong>Formula:</strong> C815H1317N233O241S5</p>
          
          <p><strong>Overview:</strong> EPO (Erythropoietin) is a recombinant type of the human hormone, erythropoietin. It is used to treat anemia usually in people with chronic kidney failure, cancer or undergoing HIV treatment with ZIdovudine. EPO (Erythropoietin) is manufactured as EPO (Erythropoietin) 10mg/vial which contains 3000IU of Erythropoietin and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Erythropoietin is a growth factor that is secreted in the kidneys. It stimulates the production of red blood cells by enhancing the differentiation of red blood cell precursor cells in the bone marrow. It typically increases reticulocyte count within 10 days of dosage initiation. And RBC count is elevated typically from 2 to 6 weeks. It acts on the erythropoietin receptor which signals a cascade of events that result in red cell differentiation and inhibition of apoptosis or cell death. It has a half-life of 4-6 hours in healthy patients.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Increased blood pressure, heart failure, blood clots, allergic reaction seizures.</p>
          
          <p><strong>Interactions:</strong> Glucocorticoids.</p>
          
          <p><strong>Composition:</strong><br>
          Erythropoietin: 3000IU<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-007',
    name: 'DEUS FOLLISTATIN',
    description: 'Activin-Binding Protein 1mg',
    price: 60.00,
    image: '/products/deus peptides & hgh/DEUS FOLLISTATIN.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS FOLLISTATIN</h1>
        <h2 class="chemical-description">Activin-Binding Protein</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 158709-61-6</p>
          <p><strong>Molecular Weight:</strong> 34.7 kDa</p>
          <p><strong>Formula:</strong> C5H6N4O2</p>
          
          <p><strong>Overview:</strong> FOLLISTATIN (Activin-Binding Protein) is a synthetic protein of the natural protein follistatin which binds activin, another protein. Activin promotes the secretion of follicle stimulating hormone and is also involved in cellular proliferation. Follistatin is used in the treatment of different types of cancers.</p>
          
          <p><strong>Mechanism of Action:</strong> Follistatin is known to inhibit activin. Activin is a protein heavily involved in the proliferation of cells in the body. When there is an overexpression of activin, there can be unrestrained proliferation of cells which can lead to cancer. Follistatin can be used to inhibit activin, to serve as a control for the cellular proliferation from activin. Follistatin binds to activin, forming a complex that renders it inactive to exert its proliferative effects. Follistatin can also reduce the severity of inflammation in diseases like asthma and colitis.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypogonadism, cardiac hypertrophy, anxiety, depression and lipid profile changes.</p>
          
          <p><strong>Interactions:</strong> Inhibin.</p>
          
          <p><strong>Composition:</strong><br>
          Activin-Binding Protein: 1mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-008',
    name: 'DEUS GHRP-2',
    description: 'Growth Hormone-Releasing Peptide 2 10mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS GHRP-2.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS GHRP-2</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide 2</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 158861-67-7</p>
          <p><strong>Molecular Weight:</strong> 817.99 g/mol</p>
          <p><strong>Formula:</strong> C45H55N9O6</p>
          
          <p><strong>Overview:</strong> GHRP-2 (Growth Hormone-Releasing Peptide 2) is a man-made agonist of ghrelin. It is used to treat children with growth hormone deficiency, adult GH deficiency, catabolic states, and obesity. It is manufactured as a GHRP-2 10mg/vial injection which contains Growth Hormone-Releasing Peptide 2 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> GHRP-2 is a synthetic analog of ghrelin. Ghrelin is well known for its actions in stimulating hunger and appetite. However, it also stimulates the release of growth hormone by acting on the ghrelin/growth hormone secretagogue receptor (GHS-R). Growth Hormone-Releasing Peptide-2 also exerts these same effects on GHSR. It is still unclear the exact mechanism for GH release after the GHSR is stimulated. However, studies have shown that it acts directly on the pituitary gland and the hypothalamus, as well as GHRH and somatostatin.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Redness, itching, increased appetite, tiredness, excess sweating.</p>
          
          <p><strong>Interactions:</strong> Insulin.</p>
          
          <p><strong>Composition:</strong><br>
          Growth Hormone-Releasing Peptide 2: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-009',
    name: 'DEUS GHRP-6',
    description: 'Growth Hormone-Releasing Peptide 6 10mg',
    price: 35.00,
    image: '/products/deus peptides & hgh/DEUS GHRP-6.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS GHRP-6</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide 6</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 87616-84-0</p>
          <p><strong>Molecular Weight:</strong> 873.03 g/mol</p>
          <p><strong>Formula:</strong> C46H56N12O6</p>
          
          <p><strong>Overview:</strong> GHRP-6 (Growth Hormone-Releasing Peptide 6) is a man-made agonist of ghrelin. It is used to treat children with growth hormone deficiency, adult GH deficiency, catabolic states, and obesity. It is manufactured as a GHRP-6 10mg/vial injection which contains Growth Hormone-Releasing Peptide 6 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> GHRP-6 is a synthetic analog of ghrelin. Ghrelin is well known for its actions in stimulating hunger and appetite. However, it also stimulates the release of growth hormone by acting on the ghrelin/growth hormone secretagogue receptor (GHS-R). Growth Hormone-Releasing Peptide-6 also exerts these same effects on GHSR. It is still unclear the exact mechanism for GH release after the GHSR is stimulated. However, studies have shown that it acts directly on the pituitary gland and the hypothalamus, as well as GHRH and somatostatin.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Redness, itching, increased appetite, tiredness, excess sweating.</p>
          
          <p><strong>Interactions:</strong> Insulin.</p>
          
          <p><strong>Composition:</strong><br>
          Growth Hormone-Releasing Peptide 6: 10mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-010',
    name: 'DEUS HCG',
    description: 'Human Chorionic Gonadotropin 5000IU',
    price: 40.00,
    image: '/products/deus peptides & hgh/DEUS HCG.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HCG</h1>
        <h2 class="chemical-description">Human Chorionic Gonadotropin</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 9002-61-3</p>
          <p><strong>Molecular Weight:</strong> 25719.70 g/mol</p>
          <p><strong>Formula:</strong> C1105H1770N318O336S26</p>
          
          <p><strong>Overview:</strong> HCG (Human Chorionic Gonadotropin) is a synthetic analog of the natural HCG produced by the placenta. HCG is useful in the treatment of infertility in both males and females. It is manufactured as HCG (Human Chorionic Gonadotropin) 5000IU/vial injection which contains 5000IU of Human Chorionic Gonadotropin and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> HCG is well known for its functions in pregnancy. However, it also acts on the luteinizing hormone receptor/choriogonadotropin receptor. Technically, the luteinizing hormone (LH) involved in ovulation and the development of testosterone is an analog of HCG. Therefore, they exert similar effects on the ovaries and testes. On the ovaries, it can induce ovulation and the production of testosterone in the testes. This makes it suitable for treatment of infertility in men and women.</p>
          
          <p><strong>Dosage:</strong> As prescribed by physician.</p>
          
          <p><strong>Side Effects:</strong> Ovarian cyst, breast pain, back pain, nausea, vomiting, injection site inflammation.</p>
          
          <p><strong>Interactions:</strong> Gonadorelin.</p>
          
          <p><strong>Composition:</strong><br>
          Human Chorionic Gonadotropin: 5000IU<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-011',
    name: 'DEUS HEXARELIN',
    description: 'Growth Hormone-Releasing Peptide 2mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS HEXARELIN.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HEXARELIN</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 140703-51-1</p>
          <p><strong>Molecular Weight:</strong> 887.06 g/mol</p>
          <p><strong>Formula:</strong> C47H58N12O6</p>
          
          <p><strong>Overview:</strong> HEXARELIN (Growth Hormone-Releasing Peptide) is a man-made agonist of the ghrelin/growth hormone secretagogue receptor. It is used to treat children with growth hormone deficiency, adult GH deficiency, catabolic states, and obesity. It is manufactured as a HEXARELIN (Growth Hormone-Releasing Peptide) 2mg/vial injection which contains Growth Hormone-Releasing Peptide 2mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> HEXARELIN is a synthetic analog of the ghrelin receptor. Ghrelin is well known for its actions in stimulating hunger and appetite. However, it also stimulates the release of growth hormone by acting on the ghrelin/growth hormone secretagogue receptor (GHS-R). HEXARELIN also exerts these same effects on GHSR. It is still unclear the exact mechanism for GH release after the GHSR is stimulated. However, studies have shown that it acts directly on the pituitary gland and the hypothalamus, as well as GHRH and somatostatin.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Redness, itching, increased appetite, tiredness, and excess sweating.</p>
          
          <p><strong>Interactions:</strong> Insulin, testosterone, ethinylestradiol, growth hormone, IGF-1.</p>
          
          <p><strong>Composition:</strong><br>
          Growth Hormone-Releasing Peptide: 2mg<br>
          Excipients: q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-012',
    name: 'DEUS HGH FRAGMENT 176-191',
    description: 'Recombinant Human Growth Hormone Fragment 176-191 5mg',
    price: 40.00,
    image: '/products/deus peptides & hgh/DEUS HGH FRAGMENT 176-191.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HGH FRAGMENT 176-191</h1>
        <h2 class="product-subtitle">Recombinant Human Growth Hormone Fragment 176-191</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 66004-57-7</p>
          <p><strong>Molecular Weight:</strong> 2140.19 g/mol</p>
          <p><strong>Formula:</strong> C84H127F9N24O27S2</p>
          
          <p><strong>Overview:</strong> HGH FRAGMENT 176-191 (Recombinant Human Growth Hormone Fragment 176-191) is a growth hormone analog that is used to treat children with growth hormone deficiency, Turner syndrome, and short stature. It is a polypeptide hormone that has recombinant DNA origin. It contains 5mg of Recombinant Human Growth Hormone Fragment 176-191 and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> HGH FRAGMENT 176-191 is a recombinant growth hormone that acts on bone, cartilage, and muscle to stimulate growth in childhood. It acts just like the natural growth hormone. It can be used to treat both children and adults with growth hormone deficiency. It increases the concentration of Insulin-like Growth Factor-1 (IGF-1) which plays a role in skeletal growth. It also increases the synthesis of protein and increases the lean body mass.</p>
          
          <p><strong>Dosage:</strong> Weight-based dosing as directed by a physician.</p>
          
          <p><strong>Side effects:</strong> Headache, nausea, fatigue, vomiting, weakness, eye problems, irregular heartbeats, slurred speech, joint stiffness and impaired glucose tolerance.</p>
          
          <p><strong>Interactions:</strong> Oral hypoglycemic drugs, steroids, cyclosporine, oral contraceptive, macimorelin.</p>
          
          <p><strong>Composition:</strong> Recombinant Human Growth Hormone Fragment 176-191 . . . . . 5mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-013',
    name: 'DEUS HMG',
    description: 'Human Menopausal Gonadotropin 0.15mg',
    price: 40.00,
    image: '/products/deus peptides & hgh/DEUS HMG.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HMG</h1>
        <h2 class="product-subtitle">Human Menopausal Gonadotropin</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 61489-71-2</p>
          <p><strong>Molecular Weight:</strong> 142.24 g/mol</p>
          <p><strong>Formula:</strong> C9H18O</p>
          
          <p><strong>Overview:</strong> HMG (Human Menopausal Gonadotropin) is a medication used in the treatment of infertility, in both males and females. HMG is manufactured as HMG 0.15mg per vial injections which contain 0.15mg of Human Menopausal Gonadotropin and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> HMG contains two main hormones which are important in fertility, that is, follicle stimulating hormone and luteininizing hormone. Follicle stimulating hormone is responsible for initiating the development of eggs in the ovaries. Luteinizing hormone is responsible for ovulation in women and the production of testosterone in the leydig cells in men. HMG binds to the LH/FSH/HCG receptor to exert its effects in women who have low levels of FHS or LH.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Injection site pain, headache, mood disturbances, weakness, restlessness. However, symptoms typically resolve gradually.</p>
          
          <p><strong>Interactions:</strong> Clomiphene citrate.</p>
          
          <p><strong>Composition:</strong> Human Menopausal Gonadotropin . . . 0.15mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-014',
    name: 'DEUS IGF-1 DES',
    description: 'Insulin-Like Growth Factor 1 DES 1mg',
    price: 0.00,
    image: '/products/deus peptides & hgh/DEUS IGF-1 DES.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS IGF-1 DES</h1>
        <h2 class="product-subtitle">Insulin-Like Growth Factor 1, DES</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 112603-35-7</p>
          <p><strong>Molecular Weight:</strong> 7371.48 g/mol</p>
          <p><strong>Formula:</strong> C319H501N91O96S7</p>
          
          <p><strong>Overview:</strong> Insulin-Like Growth factor-1 is a naturally occurring form of IGF-1 (Insulin-like Growth Factor-1). It is used in the treatment of growth failure in children and IGF-1 deficiency, or growth hormone deficiency. IGF-1 DES (Insulin-Like Growth Factor 1, DES) comes in 1mg/vial subcutaneous injections which contain 1mg of Insulin-Like Growth Factor 1, DES and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of IGF-1, IGF-1 DES mediates the effect of growth hormone although it is more potent than IGF-1. It binds to the IGF1 receptor to promote growth in almost every part of the body. It also signals several growth pathways that result in increased growth and it inhibits the pathway of cellular death. Naturally, growth hormone stimulates the release of IGF-1 from the liver. However, IGF-1 DES can act in the absence of growth hormone which makes it useful in treating growth hormone deficiency and resistance.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypoglycemia, retina swelling, muscle pain, joint pain, bell's palsy.</p>
          
          <p><strong>Interactions:</strong> Macimorelin.</p>
          
          <p><strong>Composition:</strong> Insulin-Like Growth Factor 1, DES . . . 1mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-015',
    name: 'DEUS IGF-1 LR3',
    description: 'Long Arginine 3-IGF-1 1mg',
    price: 0.00,
    image: '/products/deus peptides & hgh/DEUS IGF-1 LR3.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS IGF-1 LR3</h1>
        <h2 class="product-subtitle">Long Arginine 3-IGF-1</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 143045-27-6</p>
          <p><strong>Molecular Weight:</strong> 9117.60 g/mol</p>
          <p><strong>Formula:</strong> C400H625N111O115S9</p>
          
          <p><strong>Overview:</strong> IGF-1 LR3 (Long Arginine 3-IGF-1) is a man-made form of IGF-1 (Insulin-like Growth Factor-1). It is used in the treatment of growth failure in children and IGF-1 deficiency, or growth hormone deficiency. IGF-1 LR3 (Long Arginine 3-IGF-1) comes in 1mg/vial subcutaneous injections which contain 1mg of Long Arginine 3-IGF-1, and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of IGF-1, IGF-1 LR3 mediates the effect of growth hormone although it is more potent than IGF-1. It binds to the IGF1 receptor to promote growth in almost every part of the body. It also signals several growth pathways that result in increased growth and it inhibits the pathway of cellular death. Naturally, growth hormone stimulates the release of IGF-1 from the liver. However, IGF-1 LR3 can act in the absence of growth hormone which makes it useful in treating growth hormone deficiency and resistance. It differs from the natural IGF-1 in that it has 13 more amino acids, and has a longer half-life which is approximately 30 hours.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypoglycemia, retina swelling, muscle pain, joint pain, bell's palsy.</p>
          
          <p><strong>Interactions:</strong> Macimorelin, hypoglycemic medications.</p>
          
          <p><strong>Composition:</strong> Long Arginine 3-IGF-1 . . . . . . . . 1mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-016',
    name: 'DEUS IPAMORELIN',
    description: 'Growth Hormone-Releasing Peptide 2mg',
    price: 20.00,
    image: '/products/deus peptides & hgh/DEUS IPAMORELIN.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS IPAMORELIN</h1>
        <h2 class="product-subtitle">Growth Hormone-Releasing Peptide</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 170851-70-4</p>
          <p><strong>Molecular Weight:</strong> 711.87 g/mol</p>
          <p><strong>Formula:</strong> C38H49N9O5</p>
          
          <p><strong>Overview:</strong> IPAMORELIN (Growth Hormone-Releasing Peptide) is a man-made highly selective agonist of the ghrelin/growth hormone secretagogue receptor. It is used to treat children with growth hormone deficiency, adult GH deficiency, catabolic stats, and obesity. It is manufactured as a IPAMORELIN (Growth Hormone-Releasing Peptide) 2mg/vial injection which contains Growth Hormone-Releasing Peptide 2mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> IPAMORELIN stimulates the release of growth hormone by acting on the ghrelin/growth hormone secretagogue receptor (GHS-R). It is still unclear the exact mechanism for GH release after the GHSR is stimulated. However, studies have shown that it acts directly on the pituitary gland and the hypothalamus, as well as GHRH and somatostatin. It does not stimulate the production of cortisol, ACTH, prolactin, FSH or LH, unlike several other GH secretagogues. This makes it highly selective and efficient for the treatment of Growth Hormone deficiency.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Redness, itching, increased appetite, tiredness, and excess sweating.</p>
          
          <p><strong>Interactions:</strong> Insulin, testosterone, ethinylestradiol, growth hormone, IGF-1.</p>
          
          <p><strong>Composition:</strong> Growth Hormone-Releasing Peptide . . . 2mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-017',
    name: 'DEUS MELANOTAN II',
    description: 'Melanotan II Peptide Hormone 10mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS MELANOTAN II.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MELANOTAN II</h1>
        <h2 class="product-subtitle">Melanotan II Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 121062-08-6</p>
          <p><strong>Molecular Weight:</strong> 1024.18 g/mol</p>
          <p><strong>Formula:</strong> C50H69N15O9</p>
          
          <p><strong>Overview:</strong> MELANOTAN II (Melanotan II Peptide Hormone) is a man-made analog of the Alpha-melanocyte-stimulating hormone, which belongs to the family of melanocyte-stimulating hormones. This medication is used in photoprotection against the effects of ultraviolet rays. It is also used in skin tanning and for the treatment of erectile dysfunction and fibromyalgia. MELANOTAN II is manufactured as 10mg/vial injections which contain Melanotan II Peptide hormone 10 mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of Alpha-melanocyte stimulating hormone, it acts on the melanocortin receptors. There are 5 melanocortin receptors (M1 - M5). Melanotan II acts on M1 to initiate melanogenesis and skin pigmentation. It also has other effects such as increasing libido when it acts on other melanocortin receptors.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Moles, uneven pigmentation, nausea, vomiting, flushing, skin cancer.</p>
          
          <p><strong>Interactions:</strong> Not available.</p>
          
          <p><strong>Composition:</strong> Melanotan II Peptide Hormone . . . 10mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-018',
    name: 'DEUS MOD GRF 1-29',
    description: 'Tetrasubstitued 29-Amino Acid Peptide Hormone 2mg',
    price: 20.00,
    image: '/products/deus peptides & hgh/DEUS MOD GRF 1-29.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MOD GRF 1-29</h1>
        <h2 class="product-subtitle">Tetrasubstituted 29-Amino Acid Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 863288-34-0</p>
          <p><strong>Molecular Weight:</strong> 3367.95 g/mol</p>
          <p><strong>Formula:</strong> C152H252N44O42</p>
          
          <p><strong>Overview:</strong> MOD GRF 1-29 is a man-made peptide that is an analog of growth hormone releasing hormone (GHRH). It is used to treat growth hormone deficiency or growth failure. It is also used to treat dwarfism and prevent weight loss.</p>
          
          <p><strong>Mechanism of Action:</strong> MOD GRF 1-29 acts on the GHRH receptor to stimulate growth hormone release. It is a 29 amino acid peptide, which is less than the natural GHRH (44 amino acids). On its own, GRF 1-29 has a half-life of about 10 minutes. However, when it is modified to MOD GRF 1-29, the half-life is increased to about 30 minutes.</p>
          
          <p><strong>Side Effects:</strong> Flushing, pain at the injection site, nausea and vomiting, headaches, allergic reaction, and difficulty breathing.</p>
          
          <p><strong>Interactions:</strong> COX inhibitors, glucocorticoids, atropine, levodopa.</p>
          
          <p><strong>Composition:</strong> Tetrasubstituted 29-Amino Acid Peptide Hormone . . . 2mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-019',
    name: 'DEUS MOTS-C',
    description: 'Mitochondrial-Derived Peptide 10mg',
    price: 50.00,
    image: '/products/deus peptides & hgh/DEUS MOTS-C.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MOTS-C</h1>
        <h2 class="product-subtitle">Mitochondrial-Derived Peptide</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 1627585-32-6</p>
          <p><strong>Molecular Weight:</strong> 3890.16 g/mol</p>
          <p><strong>Formula:</strong> C215H350N62O65S2</p>
          
          <p><strong>Overview:</strong> MOTS-C is a mitochondrial-derived peptide consisting of 16 amino acids, naturally produced by mitochondria, which play a crucial role in cellular energy regulation. Unlike traditional peptides, MOTS-C is encoded by mitochondrial DNA (mtDNA), giving it unique metabolic functions. It has gained attention for its ability to regulate metabolic homeostasis, improve insulin sensitivity, and promote fat oxidation, making it a potential therapeutic agent for conditions like obesity, diabetes, and age-related metabolic decline.</p>
          
          <p><strong>Mechanism of Action:</strong> MOTS-C acts primarily by targeting and regulating metabolic pathways involved in glucose metabolism and fat oxidation. It mimics the effects of exercise by activating the AMPK (AMP-activated protein kinase) pathway, which promotes glucose uptake by cells and enhances fatty acid oxidation. This action improves insulin sensitivity and helps regulate blood sugar levels. MOTS-C also counteracts age-related insulin resistance and metabolic dysfunction by modulating pathways involved in mitochondrial function and stress response, potentially extending cellular longevity and improving energy utilization. Increased glucose metabolism: Promotes glucose uptake by skeletal muscle, improving insulin sensitivity. Fat oxidation: Enhances the breakdown of fats for energy, leading to reduced fat storage. Anti-aging effects: Protects cells from metabolic stress and may reduce age-related metabolic disorders.</p>
          
          <p><strong>Dosage:</strong> MOTS-C is typically administered as a subcutaneous injection, with dosages ranging from 5 mg to 10 mg, usually taken daily or several times per week depending on treatment objectives (e.g., metabolic enhancement, fat loss, or age-related interventions).</p>
          
          <p><strong>Side Effects:</strong> MOTS-C is generally well-tolerated, but some potential side effects may include: Mild pain or redness at the injection site. Fatigue, headaches, or slight dizziness. Temporary fluctuations in blood glucose levels.</p>
          
          <p><strong>Interactions:</strong> MOTS-C may interact with other treatments targeting metabolic pathways, such as insulin-sensitizing medications or other peptides that influence mitochondrial function (e.g., AMPK activators). Caution should be taken when combined with glucose-lowering drugs to avoid hypoglycemia.</p>
          
          <p><strong>Composition:</strong> MOTS-C (Mitochondrial-Derived Peptide) . . . 10mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'peptides-deus-020',
    name: 'DEUS PEG MGF',
    description: 'Pegylated Mechano Growth Factor 2mg',
    price: 33.00,
    image: '/products/deus peptides & hgh/DEUS PEG MGF.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Gain',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PEG MGF</h1><div class="product-description"><p>DEUS PEG MGF (Pegylated Mechano Growth Factor)</p><p><strong>CAS number:</strong> 108174-48-7</p><p><strong>Molecular Weight:</strong> 2888.16 g/mol</p><p><strong>Formula:</strong> C121H200N420O39</p><p><strong>Overview:</strong> PEG MGF (Pegylated Mechano Growth Factor) is a man-made analog of Insulin-like Growth Factor 1. It is used in the treatment of muscle wasting, osteoporosis and wound healing. It is manufactured as PEG MGF 2mg per vial injections containing 2mg of Pegylated Mechano Growth Factor and excipients.</p><p><strong>Mechanism of Action:</strong> As an analog of IGF-1, PEG MGF stimulates growth across cells and causes differentiation of tissues. It binds to the IGF1 receptor to promote growth in almost every part of the body. It also signals several growth pathways that result in increased growth and it inhibits the pathway of cellular death. It is this feature that makes it useful in treating muscle wasting, osteoporosis and useful for wound healing. Pegylation of MGF is what increases the half-life to about 2 to 3 days, from just a few minutes.</p><p><strong>Dosage:</strong> As directed by the physician.</p><p><strong>Side Effects:</strong> Hypoglycemia.</p><p><strong>Interactions:</strong> Glucose lowering agents</p><p><strong>Composition:</strong> Pegylated Mechano Growth Factor . . . 2mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-021',
    name: 'DEUS PNC-27',
    description: 'PNC-27 Anti-Cancer Peptide 5mg',
    price: 50.00,
    image: '/products/deus peptides & hgh/DEUS PNC-27.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PNC-27</h1><div class="product-description"><p>DEUS PNC-27 (PNC-27 Anti-Cancer Peptide)</p><p><strong>CAS number:</strong> 1159861-00-3</p><p><strong>Molecular Weight:</strong> 4029.2 g/mol</p><p><strong>Formula:</strong> C188H293N53O44S</p><p><strong>Overview:</strong> PNC-27 Anti-Cancer Peptide is a medication used in the treatment of cancer.</p><p><strong>Mechanism of Action:</strong> PNC-27 Anticancer peptide is a peptide that is selective in killing cancer cells, without affecting the cells of the host. It does this by causing necrosis in the cancer cells. PNC-27 kills cancer cells by forming pores in the membrane of cancer cells leading to their death.</p><p><strong>Dosage:</strong> As directed by the physician.</p><p><strong>Side Effects:</strong> Infections.</p><p><strong>Interactions:</strong> Not Available.</p><p><strong>Composition:</strong> PNC-27 Anti-Cancer Peptide . . . 5mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-022',
    name: 'DEUS PT-141',
    description: 'Bremelanotide 10mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS PT-141.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PT-141</h1><div class="product-description"><p>DEUS PT-141 (Bremelanotide)</p><p><strong>CAS number:</strong> 189691-06-3</p><p><strong>Molecular Weight:</strong> 1025.18 g/mol</p><p><strong>Formula:</strong> C50H68N14O10</p><p><strong>Overview:</strong> PT-141 (Bremelanotide) is a medication that is used in the treatment of hypoactive sexual desire disorder (HSDD). It is manufactured as 10mg/vial injections which contain Bremelanotide 10mg and excipients.</p><p><strong>Mechanism of Action:</strong> Bremelanotide is a melanocortin Receptor agonist. It acts on M1 - M5 receptors to exert its effect which is to increase libido in the absence of underlying medical problems.</p><p><strong>Dosage:</strong> One injection before sexual activity.</p><p><strong>Side Effects:</strong> Nausea and vomiting, cough, injection site reactions, headache, cough.</p><p><strong>Interactions:</strong> COX inhibitors, Naltrexone.</p><p><strong>Composition:</strong> Bremelanotide . . . 10mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-023',
    name: 'DEUS SELANK',
    description: 'Seeland Anxiolytic Peptide 5mg',
    price: 15.00,
    image: '/products/deus peptides & hgh/DEUS SELANK.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SELANK</h1><div class="product-description"><p>DEUS SELANK (Selank Anxiolytic Peptide)</p><p><strong>CAS number:</strong> 129954-34-3</p><p><strong>Molecular Weight:</strong> 751.89 g/mol</p><p><strong>Formula:</strong> C33H57N11O9</p><p><strong>Overview:</strong> Selank is a synthetic analog of tuftsin, and it is used in the treatment of anxiety, depression and used to also improve cognitive functions. Selank is manufactured as 5mg/vial subcutaneous injections that contain Selank Anxiolytic Peptide 5mg and excipients.</p><p><strong>Mechanism of Action:</strong> As an analog of tuftsin, selank is an immunomodulator. Its exact mechanism of action in bringing about its anxiolytic effects is not completely understood. However, it has been shown that it modulates the GABA neurotransmitter. It also induces the metabolism of serotonin and enhances the expression of brain-derived neurotrophic factor, both of which are involved in regulation of mood. It exerts its anxiolytic effects without causing sedation or addiction. It also influences memory formation and enhances the process of learning. Selank also boosts immune responses.</p><p><strong>Dosage:</strong> As directed by the physician.</p><p><strong>Side Effects:</strong> Headache, hair loss, fatigue, dizziness.</p><p><strong>Interactions:</strong> Benzodiazepines.</p><p><strong>Composition:</strong> Selank Anxiolytic Peptide . . . 5mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-024',
    name: 'DEUS SEMAGLUTIDE',
    description: 'Glucagon-Like Peptide-1 GLP-1 5mg',
    price: 100.00,
    image: '/products/deus peptides & hgh/DEUS SEMAGLUTIDE.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SEMAGLUTIDE</h1><div class="product-description"><p>DEUS SEMAGLUTIDE (Glucagon-Like Peptide-1 (GLP-1))</p><p><strong>CAS number:</strong> 910463-68-2</p><p><strong>Molecular Weight:</strong> 4113.64 g/mol</p><p><strong>Formula:</strong> C187H291N45O59</p><p><strong>Overview:</strong> SEMAGLUTIDE is an agonist of the Glucagon-Like Peptide 1 receptor. It is used in the treatment of Type 2 diabetes. SEMAGLUTIDE is manufactured as 5mg/vial injections which contain Glucagon-Like Peptide-1 (GLP-1) 5mg and excipients.</p><p><strong>Mechanism of Action:</strong> SEMAGLUTIDE acts on the GLP-1 receptor to exert its effects. Once it binds to this receptor, a cascade of events is set in motion which results in the increased production of Insulin, inhibition of glucagon and delay of gastric emptying. The secreted insulin helps to mop up glucose and achieve blood sugar control. It has an advantage over other insulin secretagogues in that they have a lower risk of causing hypoglycemia.</p><p><strong>Dosage:</strong> As directed by the physician.</p><p><strong>Side Effects:</strong> Hypoglycemia, redness or inflammation at the injection site, nausea, vomiting, pancreas or gall bladder disease.</p><p><strong>Interactions:</strong> Beta-blockers, diabetes medications.</p><p><strong>Composition:</strong> Glucagon-Like Peptide-1 (GLP-1) . . . 5mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-025',
    name: 'DEUS SEMAX',
    description: 'Semax Heptapeptide 5mg',
    price: 15.00,
    image: '/products/deus peptides & hgh/DEUS SEMAX.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SEMAX</h1><div class="product-description"><p>DEUS SEMAX (Semax Heptapeptide)</p><p><strong>CAS number:</strong> 80714-61-0</p><p><strong>Molecular Weight:</strong> 813.93 g/mol</p><p><strong>Formula:</strong> C37H51N9O10S</p><p><strong>Overview:</strong> SEMAX is a medication that belongs to the family of neuropeptides. It is used to treat cognitive disorders stroke, TIA, prevent cardiovascular disorders and to also boost the immune system. It is manufactured as 5mg/vial subcutaneous injections which contain SEMAX Heptapetide 5mg and excipients.</p><p><strong>Mechanism of Action:</strong> SEMAX has been shown to act as an antagonist of one of the melanocortin receptors (M4). It inhibits the effects of this receptor and also increases the production of brain-derived neurotrophic factor, which is essential in long-term memory and neural development.</p><p><strong>Dosage:</strong> As directed by the physician.</p><p><strong>Side Effects:</strong> Hairloss, hyperglycemia.</p><p><strong>Interactions:</strong> Diabetes medications.</p><p><strong>Composition:</strong> Semax Heptapeptide . . . 5mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-026',
    name: 'DEUS TB-500',
    description: 'Thymosin Beta-4 2mg',
    price: 30.00,
    image: '/products/deus peptides & hgh/DEUS TB-500.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TB-500</h1><div class="product-description"><p>DEUS TB-500 (Thymosin Beta-4)</p><p><strong>CAS number:</strong> 885340-08-9</p><p><strong>Molecular Weight:</strong> 889.01 g/mol</p><p><strong>Formula:</strong> C38H68N10O14</p><p><strong>Overview:</strong> TB-500 (Thymosin Beta-4) is a man-made peptide that is an analog of the Thymosin Beta 4 protein found in humans. This medication is used to treat ulcers, dry eye, and to accelerate wound healing. It is manufactured as 2mg/vial injections which contain 2mg of Thymosin Beta-4 and excipients.</p><p><strong>Mechanism of Action:</strong> TB-500 has been shown to cause angiogenesis in tissues, collagen deposition and migration of keratinocytes, all of which have a resultant positive effect on wound healing.</p><p><strong>Dosage:</strong> 2mg daily subcutaneous injections.</p><p><strong>Side Effects:</strong> Headaches, fever, dizziness.</p><p><strong>Interactions:</strong> Not Available.</p><p><strong>Composition:</strong> Thymosin Beta-4 . . . 2mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-027',
    name: 'DEUS THYMOSIN A1',
    description: 'Thymic Factor 10mg',
    price: 60.00,
    image: '/products/deus peptides & hgh/DEUS THYMOSIN A1.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS THYMOSIN A1</h1><div class="product-description"><p>DEUS THYMOSIN A1 (Thymosin Alpha-1)</p><p><strong>CAS number:</strong> 62304-98-7</p><p><strong>Molecular Weight:</strong> 3108.32 g/mol</p><p><strong>Formula:</strong> C129H215N33O55</p><p><strong>Overview:</strong> THYMOSIN A1 (Thymosin Alpha-1) is a synthetic peptide fragment that is used to treat hepatitis B and C, acute respiratory distress syndrome, tuberculosis, peritonitis HIV and cancer.</p><p><strong>Mechanism of Action:</strong> THYMOSIN A1 (Thymosin Alpha-1) is involved in the restoration of immune function and acts to enhance cell-mediated immunity by the T-cells. It affects T-cell maturation, differentiation and function. It acts on several receptors that lead to the proliferation of other immune cells. It also enhances the response of the innate immunity. It has a half-life of about 3hrs.</p><p><strong>Dosage:</strong> As prescribed by the physician.</p><p><strong>Side Effects:</strong> Irritation at the injection site, cytokine storm.</p><p><strong>Interactions:</strong> Not available.</p><p><strong>Composition:</strong> Thymosin Alpha-1 . . . 10mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'peptides-deus-028',
    name: 'DEUS TIRZEPATIDE',
    description: 'GIP and GLP-1 Receptor agonist 10mg',
    price: 100.00,
    image: '/products/deus peptides & hgh/DEUS TIRZEPATIDE.png',
    category: 'PEPTIDES & HGH',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TIRZEPATIDE</h1><div class="product-description"><p>DEUS TIRZEPATIDE (GIP and GLP-1 Receptor agonist)</p><p><strong>CAS number:</strong> 2023788-19-2</p><p><strong>Molecular Weight:</strong> 4813.53 g/mol</p><p><strong>Formula:</strong> C225H348N48O68</p><p><strong>Overview:</strong> Tirzepatide is a novel dual GIP (Glucose-dependent Insulinotropic Polypeptide) and GLP-1 (Glucagon-like Peptide-1) receptor agonist. It is a synthetic peptide designed to mimic the actions of both GIP and GLP-1, two incretin hormones that play key roles in regulating blood glucose and energy metabolism. Tirzepatide is used primarily in the management of type 2 diabetes and obesity due to its potent effects on improving glycemic control and promoting weight loss. It is marketed as a subcutaneous injectable medication.</p><p><strong>Mechanism of Action:</strong> Tirzepatide acts by binding to and activating both GIP and GLP-1 receptors. This dual agonism enhances insulin secretion in a glucose-dependent manner and reduces glucagon levels, helping to regulate blood sugar. The GIP component promotes insulin sensitivity, while the GLP-1 component slows gastric emptying, reduces appetite, and increases satiety. Together, these effects contribute to improved glycemic control, weight reduction, and better metabolic outcomes.<br><br><strong>GIP (Glucose-dependent Insulinotropic Polypeptide):</strong> Increases insulin secretion and improves fat metabolism.<br><strong>GLP-1 (Glucagon-like Peptide-1):</strong> Enhances insulin release, reduces glucagon secretion, and delays gastric emptying, leading to better blood sugar control and appetite suppression.</p><p><strong>Dosage:</strong> Tirzepatide is typically administered as a subcutaneous injection once weekly. Dosages range from 5 mg to 15 mg, depending on patient response and treatment goals. It is often titrated up to avoid gastrointestinal side effects.</p><p><strong>Side Effects:</strong> Common side effects of tirzepatide include:<br>• Gastrointestinal: Nausea, vomiting, diarrhea, constipation<br>• Metabolic: Hypoglycemia (especially when used with insulin or sulfonylureas), decreased appetite<br>• Injection site reactions: Pain, swelling, or redness at the injection site<br>• Others: Fatigue, dizziness, potential for pancreatitis (rare)</p><p><strong>Interactions:</strong> Tirzepatide may interact with medications affecting blood sugar levels, such as insulin or sulfonylureas, increasing the risk of hypoglycemia. It may also interact with drugs that delay gastric emptying, such as certain anticholinergics.</p><p><strong>Composition:</strong> Tirzepatide (GIP and GLP-1 receptor agonist) . . . 10mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'fatburn-deus-001',
    name: 'DEUS CLENOMED 40',
    description: 'Clenbuterol HCL 40mcg',
    price: 11.00,
    image: '/products/deus fat burn/DEUS CLENOMED 40.png',
    category: 'FAT BURN',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CLENOMED 40</h1>
        <h2 class="product-subtitle">Clenbuterol HCL</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 21898-19-1</p>
          <p><strong>Molecular Weight:</strong> 313.65 g/mol</p>
          <p><strong>Formula:</strong> C12H19Cl3N2O</p>
          
          <p><strong>Overview:</strong> CLENOMED 40 (Clenbuterol HCL) is a bronchodilator, which is used as a medication for the treatment of reversible airway obstruction such as asthma and certain cases of chronic obstructive pulmonary disease. It comes as clenbuterol 40mcg tablets which contain clenbuterol hydrochloride 40mcg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Clenbuterol is a beta-2 agonist. That is, it stimulates the beta-2 receptors which results in opening the airways and relaxing the airway muscles. This is why clenbuterol HCL is used as a decongestant and bronchodilator. Its effects also make it suitable for use in asthmatic patients and those with COPD.</p>
          
          <p><strong>Dosage:</strong> Recommended dosage in the treatment of asthma is 20 - 30 mcg per day.</p>
          
          <p><strong>Side Effects:</strong> Side effects include anxiety, tremors, headaches, excessive sweating, fever, palpitations or irregular heartbeat.</p>
          
          <p><strong>Interactions:</strong> Clenbuterol is known to interact with thiazides, spironolactone, theophylline, amphotericin B, corticosteroids, and clozapine. This list is not exhaustive, hence, ensure you share any medications you are using, including herbal products and supplements with your doctor before using clenbuterol.</p>
          
          <p><strong>Composition:</strong> Clenbuterol HCL . . . . . . . . . . . 40mcg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'fatburn-deus-002',
    name: 'DEUS CYTOMED 25',
    description: 'Liothyronine Sodium T3',
    price: 12.00,
    image: '/products/deus fat burn/DEUS CYTOMED 25.png',
    category: 'FAT BURN',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CYTOMED 25</h1>
        <h2 class="product-subtitle">Liothyronine Sodium (T3)</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 6893-02-3</p>
          <p><strong>Molecular Weight:</strong> 672.96 g/mol</p>
          <p><strong>Formula:</strong> C15H11I3NNaO4</p>
          
          <p><strong>Overview:</strong> CYTOMED 25 (Liothyronine Sodium (T3)) is a synthetic variant of the human body's thyroid hormone. This medicine is used to treat hypothyroidism and myxedema coma. When combined with other drugs, Liothyronine Sodium T3 can be very effective in the treatment of major depressive disorders. It is manufactured as 25mcg tablets that contain 25mcg of Liothyronine Sodium and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Liothyronine is produced from Triiodothyronine (T3) and it exerts similar effects. It acts on body cells to increase the basal metabolic rate, increase the synthesis of protein and also make cells more receptive to the effects of catecholamines. Liothyronine has a swift onset of action.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Weight loss, nausea and vomiting, tremors, headache, excessive sweating, stomach upset, and sensitivity to heat.</p>
          
          <p><strong>Interactions:</strong> Sodium Iodide, heparin antithrombin, protamine, enoxaparin.</p>
          
          <p><strong>Composition:</strong> Liothyronine Sodium . . . . . . . 25 mcg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'fatburn-deus-003',
    name: 'DEUS THYROMED 50',
    description: 'Levothyroxine Sodium T4',
    price: 9.00,
    image: '/products/deus fat burn/DEUS THYROMED 50.png',
    category: 'FAT BURN',
    brand: 'deus',
    filterType: 'Definition',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS THYROMED 50</h1>
        <h2 class="product-subtitle">Levothyroxine Sodium (T4)</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 55-03-8</p>
          <p><strong>Molecular Weight:</strong> 799.86 g/mol</p>
          <p><strong>Formula:</strong> C15H11I4NNaO4+</p>
          
          <p><strong>Overview:</strong> THYROMED 50 (Levothyroxine Sodium (T4)) is a man-made form of the thyroid hormone. It is used to treat hypothyroidism. It is also used to treat or prevent goitre (enlarged thyroid gland), which can be caused by hormone imbalances, radiation treatment, surgery, or cancer. THYROMED 50 is manufactured as 50mcg tablets that contain 50mcg of levothyroxine sodium (T4) and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Levothyroxine is made from thyroxine, the naturally occurring thyroid hormone. It acts to increase the metabolic rate of cells and tissues in the body, maintain brain function, metabolize food, and regulate temperature. It acts on thyroid hormone receptors, (thyroid hormone response elements) to exert its effects. Even though T4 is the major hormone produced in the thyroid gland, the majority of it is converted to T3 which exerts the physiologic effects that are observed.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hyperthyroidism, palpitations, nausea, insomnia, weight loss, hypertension, increased appetite.</p>
          
          <p><strong>Interactions:</strong> Antacids, cholestyramine, calcium carbonate, ketamine, tricyclic antidepressants, colestipol.</p>
          
          <p><strong>Composition:</strong> Levothyroxine Sodium (T4) . . 50mcg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'pct-deus-001',
    name: 'DEUS ARIMIMED 1',
    description: 'Anastrozole 1mg',
    price: 27.00,
    image: '/products/deus post cycle/DEUS ARIMIMED 1.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ARIMIMED 1</h1>
        <h2 class="product-subtitle">Anastrozole</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 120511-73-1</p>
          <p><strong>Molecular Weight:</strong> 293.36 g/mol</p>
          <p><strong>Formula:</strong> C17H19N5</p>
          
          <p><strong>Overview:</strong> ARIMIMED 1 (Anastrozole) is a drug used in breast cancer treatment after menopause. It comes as anastrozole 1mg tablets which contain 1mg of anastrozole and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Anastrozole is a breast cancer drug that belongs to the class of third-generation nonsteroidal (Type II) aromatase inhibitors. Most breast cancers grow faster due to the presence of a hormone called estrogen. Aromatase is an enzyme that helps in the production of estrogen. Anastrozole inhibits the activity of aromatase, which consequently prevents estrogen formation, leading to a slowing down or reversal of breast cancer growth. Anastrozole has a half-life of 50 hours.</p>
          
          <p><strong>Dosage:</strong> 1mg orally, once daily. However, consult your doctor before taking this medication.</p>
          
          <p><strong>Side Effects:</strong> Mild side effects may include hot flushes, low mood, difficulty sleeping, bone pain, palpitations and headaches. However, these symptoms improve gradually as your body adapts to the medication. Some serious side effects include blurry vision, liver problems, kidney problems, and purple spots on the skin (due to bleeding under the skin). See a doctor immediately if you experience any of these.</p>
          
          <p><strong>Interactions:</strong> Anastrozole interacts with very few medicines. However, avoid hormonal replacement therapy (HRT), herbal medications, or supplements while taking anastrozole.</p>
          
          <p><strong>Composition:</strong> Anastrozole . . . . . . . . . . . . . . . . . . 1mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'pct-deus-002',
    name: 'DEUS AROMAMED 25',
    description: 'Exemestane 25mg',
    price: 30.00,
    image: '/products/deus post cycle/DEUS AROMAMED 25.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS AROMAMED 25</h1>
        <h2 class="product-subtitle">Exemestane</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 107868-30-4</p>
          <p><strong>Molecular Weight:</strong> 296.40 g/mol</p>
          <p><strong>Formula:</strong> C20H24O2</p>
          
          <p><strong>Overview:</strong> AROMAMED 25 (Exemestane) is a drug used in breast cancer treatment after menopause. It has also been found to significantly reduce the risk of breast cancer in high-risk women. It comes as an exemstane 25mg tablet which contains 25mg of exemstane and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Exemestane is a breast cancer drug that belongs to the class of steroidal (Type I) aromatase Inhibitors. Some breast cancers grow faster due to the presence of a hormone called estrogen. Aromatase is an enzyme that helps in the production of estrogen. Exemestane inhibits the activity of aromatase, which consequently prevents estrogen formation, leading to a slowing down or reversal of breast cancer growth. Exemestane has a half-life of 24 hours.</p>
          
          <p><strong>Dosage:</strong> 25mg orally, once daily. However, consult your doctor before taking this medication.</p>
          
          <p><strong>Side Effects:</strong> Side effects may include hot flashes, excess sweating, headaches, nausea and vomiting, difficulty sleeping, low mood, vision changes, shortness of breath, or chest pain.</p>
          
          <p><strong>Interactions:</strong> Interactions may occur with estrogen and estrogen blockers, ivacaftor, and idelalisib. This list is not exhaustive, hence, ensure you share any medications you are using, including herbal products and supplements with your doctor before using exemestane.</p>
          
          <p><strong>Composition:</strong> Exemestane . . . . . . . . . . . . . . . . 25mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'pct-deus-003',
    name: 'DEUS CABERMED 0.5',
    description: 'Cabergoline 0.5mg',
    price: 60.00,
    image: '/products/deus post cycle/DEUS CABERMED 0.5.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CABERMED 0.5</h1>
        <h2 class="product-subtitle">Cabergoline</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 81409-90-7</p>
          <p><strong>Molecular Weight:</strong> 451.61 g/mol</p>
          <p><strong>Formula:</strong> C26H37N5O2</p>
          
          <p><strong>Overview:</strong> CABERMED 0.5 (Cabergoline) belongs to a class of drugs called dopamine agonists. It is used to treat disorders of excess prolactin production, and can also be used to manage Parkinson's syndrome. It is manufactured as Cabergoline 0.5mg tablets which contain 0.5mg Carbegoline and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cabergoline is a dopamine agonist, and it acts on the dopaminergic receptors (most active on D2) to cause the secretion of dopamine. Dopamine is a neurotransmitter that inhibits prolactin production in the pituitary gland. Its half-life ranges from 63 - 69 hours.</p>
          
          <p><strong>Dosage:</strong> 0.25mg orally twice a week.</p>
          
          <p><strong>Side Effects:</strong> Nausea, vomiting, constipation, insomnia, depression, hypotension, peripheral edema, arrhythmias.</p>
          
          <p><strong>Interactions:</strong> Ergot derivatives, antipsychotics, metoclopramide, antihypertensives.</p>
          
          <p><strong>Composition:</strong> Cabergoline . . . . . . . . . . . . . . . . 0.5mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'pct-deus-004',
    name: 'DEUS CLOMIMED 50',
    description: 'Clomiphene Citrate 50mg',
    price: 21.00,
    image: '/products/deus post cycle/DEUS CLOMIMED 50.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CLOMIMED 50</h1>
        <h2 class="product-subtitle">Clomiphene Citrate</h2>
        <div class="product-description">
          <p><strong>CAS registry number:</strong> 50-41-9</p>
          <p><strong>Molecular Weight:</strong> 598.08 g/mol</p>
          <p><strong>Formula:</strong> C32H36ClNO8</p>
          
          <p><strong>Overview:</strong> CLOMIMED 50 (Clomiphene Citrate) is a medication used to treat ovulation disorders such as polycystic ovarian syndrome. It is manufactured as Clomiphene Citrate 50mg tablets which contain 50mg of Clomiphene citrate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Clomiphene is a Selective Estrogen Receptor Modulator. It acts on the hypothalamus to cause an increase in follicle stimulating hormone and luteinizing hormone which results in ovulation. Hence it is used for people experiencing anovulation. It also acts to increase testosterone levels in men.</p>
          
          <p><strong>Dosage:</strong> 50mg orally for 5 days.</p>
          
          <p><strong>Side Effects:</strong> Ovarian hyperstimulation syndrome, blurred vision, abnormal vaginal bleeding, mood changes.</p>
          
          <p><strong>Interactions:</strong> Gonadorelin.</p>
          
          <p><strong>Composition:</strong> Clomiphene citrate . . . . . . . . . . 50mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'pct-deus-005',
    name: 'DEUS ENCLOMIMED 25',
    description: 'Enclomiphene Citrate 25mg',
    price: 60.00,
    image: '/products/deus post cycle/DEUS ENCLOMIMED 25.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ENCLOMIMED 25</h1><div class="product-description"><p>DEUS ENCLOMIMED 25 (Enclomiphene Citrate)</p><p><strong>CAS number:</strong> 15690-57-0</p><p><strong>Molecular Weight:</strong> 405.97 g/mol</p><p><strong>Formula:</strong> C26H28ClNO</p><p><strong>Overview:</strong> ENCLOMIMED 25 (Enclomiphene Citrate) is a drug derived from clomiphene citrate and is used to treat men with low testosterone from secondary hypogonadotropic hypogonadism. It is produced as 25mg tablets which contain Enclomiphene 25mg and excipients.</p><p><strong>Mechanism of Action:</strong> Encomiphene is a non-steroidal estrogen receptor antagonist that promotes gonadotropin-dependent testosterone secretion by the testes. It inhibits the estrogen receptors in the pituitary gland, which disrupts the negative feedback normally given by estrogen. This would then cause an increase in gonadotropin secretion. This gonadotropin secretion would cause the testes to produce testosterone.</p><p><strong>Dosage:</strong> 25mg daily taken orally.</p><p><strong>Side Effects:</strong> Headache, nausea, diarrhea, dizziness, hot flushes.</p><p><strong>Interactions:</strong> Codeine, curcumin, cyclosporine, fluoroestradiol, bexarotene.</p><p><strong>Composition:</strong> Enclomiphene citrate . . . 25mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'pct-deus-006',
    name: 'DEUS EVIMED 60',
    description: 'Raloxifene 60mg',
    price: 25.00,
    image: '/products/deus post cycle/DEUS EVIMED 60.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EVIMED 60</h1><div class="product-description"><p>DEUS EVIMED 60 (Raloxifene HCL)</p><p><strong>CAS number:</strong> 82640-04-8</p><p><strong>Molecular Weight:</strong> 510.00 g/mol</p><p><strong>Formula:</strong> C28H28ClNO4S</p><p><strong>Overview:</strong> EVIMED 60 (Raloxifene HCL) is a drug used by women to prevent and treat bone loss (osteoporosis) after menopause. It slows down bone loss and helps to keep bones strong, making them less likely to break. EVIMED 60 may also lower the chance of getting a certain type of breast cancer after menopause. EVIMED 60 is manufactured as 60mg tablets containing Raloxifene HCL 60mg and excipients.</p><p><strong>Mechanism of Action:</strong> Raloxifene HCL belongs to a class of drugs known as selective estrogen receptor modulators-SERMs. It exhibits estrogenic activity in some tissues like the bone and liver, while it shows antiestrogenic activity in the breasts and uterus. In the bone, it increases bone density and that is why it is useful in treating osteoporosis. In the breast, it opposes estrogen activity, and this action is useful in the treatment and prevention of some types of breast cancers.</p><p><strong>Dosage:</strong> 60mg daily taken orally.</p><p><strong>Side Effects:</strong> Hot flashes, Leg cramps, blood clots, vaginal dryness.</p><p><strong>Interactions:</strong> Estrogen, cholestyramine, tibolone, and colestipol.</p><p><strong>Composition:</strong> Raloxifene HCL . . . 60mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'pct-deus-007',
    name: 'DEUS FEMAMED 2.5',
    description: 'Letrozole 2.5mg',
    price: 35.00,
    image: '/products/deus post cycle/DEUS FEMAMED 2.5.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS FEMAMED 2.5</h1><div class="product-description"><p>DEUS FEMAMED 2.5 (Letrozole)</p><p><strong>CAS number:</strong> 112809-51-5</p><p><strong>Molecular Weight:</strong> 285.30 g/mol</p><p><strong>Formula:</strong> C17H11N5</p><p><strong>Overview:</strong> FEMAMED 2.5 (Letrozole) is a highly potent drug used in breast cancer treatment for postmenopausal women and can also be given to breast cancer patients who have been previously treated with tamoxifen. It comes as a letrozole 2.5mg tablet comprising 2.5mg of letrozole and excipients.</p><p><strong>Mechanism of Action:</strong> Letrozole as a breast cancer drug, belongs to the class of non-steroidal (Type II) aromatase Inhibitors. Some breast cancers grow faster due to the presence of a hormone called estrogen. Aromatase is an enzyme that helps in the production of estrogen. Letrozole stops the activity of aromatase, which consequently prevents estrogen formation, leading to a slowing down or reversal of breast cancer growth. Letrozole has a half-life of 42 hours.</p><p><strong>Dosage:</strong> 2.5mg orally, once daily. However, consult your doctor before taking this medication.</p><p><strong>Side Effects:</strong> Some commonly reported side effects of letrozole include excessive sweating, hot flashes, bone pain, cough, dyspnea, constipation, increased blood pressure, breast pain, nausea, and vomiting. Blurred vision and elevated liver enzymes are less frequently reported side effects.</p><p><strong>Interactions:</strong> Serious interactions occur with estrogen and tamoxifen. Interactions can also occur with cholera vaccine, dengue vaccine, siponimod and some antiretroviral drugs. This list is not exhaustive, hence, ensure you share any medications you are using, including herbal products and supplements with your doctor before using letrozole.</p><p><strong>Composition:</strong> Letrozole . . . 2.5mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'pct-deus-008',
    name: 'DEUS NOLVAMED 20',
    description: 'Tamoxifen Citrate 20mg',
    price: 23.00,
    image: '/products/deus post cycle/DEUS NOLVAMED 20.png',
    category: 'POST CYCLE',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS NOLVAMED 20</h1><div class="product-description"><p>DEUS NOLVAMED 20 (Tamoxifen Citrate)</p><p><strong>CAS number:</strong> 54965-24-1</p><p><strong>Molecular Weight:</strong> 563.63 g/mol</p><p><strong>Formula:</strong> C32H34NO8</p><p><strong>Overview:</strong> NOLVAMED 20 (Tamoxifen Citrate) is a Selective Estrogen Receptor Modulator (SERM) which is used for the treatment of metastatic breast cancer, adjuvant treatment of breast cancer and for the palliative treatment of premenopausal women with ER-positive disease. NOLVAMED 20 is manufactured as 20mg tablets which contain Tamoxifen citrate 20mg and excipients.</p><p><strong>Mechanism of Action:</strong> As a Selective Estrogen Receptor Modulator (SERM), tamoxifen inhibits estrogen, preventing it from binding to its receptor. By doing this, it can cause a decrease in tumour growth and proliferation. It also causes cell death in cells with estrogen receptors.</p><p><strong>Dosage:</strong> 20mg daily taken orally.</p><p><strong>Side Effects:</strong> Endometrial CA, liver disease, cardiovascular and metabolic disorders, postmenopausal bleeding, vision problems, stroke and pulmonary embolism.</p><p><strong>Interactions:</strong> Butalbital, cimetidine, secobarbital, SSRI antidepressants, warfarin, hormonal contraceptives, antiseizure medications.</p><p><strong>Composition:</strong> Tamoxifen citrate . . . 20mg<br>Excipients . . . q.s</p></div>
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
      </style>`
  },
  {
    id: 'sexual-deus-001',
    name: 'DEUS CIAMED 5',
    description: 'Tadalafil 5mg',
    price: 20.00,
    image: '/products/deus sexual wellness/DEUS CIAMED 5.png',
    category: 'SEXUAL WELLNESS',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CIAMED 5</h1>
        <h2 class="product-subtitle">Tadalafil</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 171596-29-5</p>
          <p><strong>Molecular Weight:</strong> 389.40 g/mol</p>
          <p><strong>Formula:</strong> C22H19N3O4</p>
          
          <p><strong>Overview:</strong> CIAMED 5 (Tadalafil) is used to treat erectile dysfunction (impotence) and symptoms of benign prostatic hypertrophy (enlarged prostate) and pulmonary arterial hypertension and improve exercise capacity in men and women. It is manufactured as 5mg tablets which contain 5mg of Tadalafil and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cyclic guanine monophosphate (cGMP) is needed for penile arteries and smooth muscles of the penis to relax for a man to have an erection. The amount of cGMP is reduced by an enzyme called phosphodiesterase type 5. Tadalafil inhibits this enzyme so that cyclic GMP can be more abundant leading to better and longer-lasting erection. It is this same mechanism of relaxing blood vessels and smooth muscles that also makes it useful in treating pulmonary arterial hypertension. Tadalafil has a half-life of 17.5 hours which is significantly longer than other drugs in the same category.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Headache, stomach upset, back pain, flushing, hypertension, fatigue, UTIs, indigestion, constipation and diarrhea.</p>
          
          <p><strong>Interactions:</strong> Riociguat, alpha-blockers, azole antifungals, macrolides, HIV protease inhibitors, rifampin.</p>
          
          <p><strong>Composition:</strong> Tadalafil . . . . . . . . . . . . . . . . . . . . . 5mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sexual-deus-002',
    name: 'DEUS PRILIMED 30',
    description: 'Dapoxetine HCL 30mg',
    price: 15.00,
    image: '/products/deus sexual wellness/DEUS PRILIMED 30.png',
    category: 'SEXUAL WELLNESS',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PRILIMED 30</h1>
        <h2 class="product-subtitle">Dapoxetine HCL</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 119356-77-3</p>
          <p><strong>Molecular Weight:</strong> 305.42 g/mol</p>
          <p><strong>Formula:</strong> C21H23NO</p>
          
          <p><strong>Overview:</strong> PRILIMED 30 (Dapoxetine HCL) is a selective serotonin reuptake inhibitor, for the treatment of premature ejaculation. In a phase II proof-of-concept study conducted by PPD, dapoxetine demonstrated a statistically significant increase in ejaculatory latency when compared to placebo. PRILIMED 30 is manufactured as 30mg tablets that contain 30mg of Dapoxetine HCL and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Dapoxetine is a selective serotonin reuptake inhibitor meaning it prevents serotonin from being taken up, thereby elongating its duration of action. Serotonin then delays the ejaculation, by its inhibitory action on the post synaptic cleft.</p>
          
          <p><strong>Dosage:</strong> 30mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Nausea, insomnia, headache, diarrhea, and dry mouth.</p>
          
          <p><strong>Interactions:</strong> PDE5 inhibitors, ethanol.</p>
          
          <p><strong>Composition:</strong> Dapoxetine HCL . . . . . . . . . . . . 30mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'sexual-deus-003',
    name: 'DEUS VIAMED 20',
    description: 'Sildenafil Citrate 20mg',
    price: 11.00,
    image: '/products/deus sexual wellness/DEUS VIAMED 20.png',
    category: 'SEXUAL WELLNESS',
    brand: 'deus',
    filterType: 'Base',
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS VIAMED 20</h1>
        <h2 class="product-subtitle">Sildenafil Citrate</h2>
        <div class="product-description">
          <p><strong>CAS number:</strong> 171599-83-0</p>
          <p><strong>Molecular Weight:</strong> 666.70 g/mol</p>
          <p><strong>Formula:</strong> C28H38N6O11S</p>
          
          <p><strong>Overview:</strong> VIAMED 20 (Sildenafil Citrate) is used to treat erectile dysfunction (impotence) and symptoms of benign prostatic hypertrophy (enlarged prostate) and pulmonary arterial hypertension and improve exercise capacity in men and women. It is manufactured as 20mg tablets that contain 20mg of Sildenafil Citrate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cyclic guanine monophosphate (cGMP) is needed for penile arteries and smooth muscles of the penis to relax for a man to have an erection. The amount of cGMP is reduced by an enzyme called phosphodiesterase type 5. Sildenafil inhibits this enzyme so that cyclic GMP can be more abundant leading to better and longer-lasting erection. It is this same mechanism of relaxing blood vessels and smooth muscles that also makes it useful in treating pulmonary arterial hypertension.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Headache, stomach upset, back pain, blurred vision, cyanopsia, flushing, hypertension, fatigue, UTIs, indigestion, constipation and diarrhea.</p>
          
          <p><strong>Interactions:</strong> Riociguat, alpha-blockers, azole antifungals, macrolides, HIV protease inhibitors, rifampin, organic nitrites and nitrates.</p>
          
          <p><strong>Composition:</strong> Sildenafil Citrate . . . . . . . . . . . . 20mg<br>Excipients . . . . . . . . . . . . . . . . . . . . . q.s</p>
        </div>
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
      </style>`
  },
  {
    id: 'amino-deus-001',
    name: 'Deus BCAA Complex',
    description: 'Verzweigtkettige Aminosäuren',
    price: 28.99,
    image: '/products/deus-bcaa.jpg',
    category: 'AMINO ACIDS',
    brand: 'deus',
    filterType: 'Base',
    details: `<div class="product-details"><h1>Deus BCAA Complex</h1><p>Details loading...</p></div>`
  },
];

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
