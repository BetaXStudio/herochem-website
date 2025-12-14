import { type Product } from "./products-database";
// Extended Product type for detailed product information
export type ProductDetail = Product & {
  details: string;
};
// Produktdetails-Datenbank mit RTF-Inhalten
export const productDetails: ProductDetail[] = [
  {
    id: "inj-deus-001",
    name: "DEUS 3-TRENBOMED 150",
    description:
      "Trenbolone Enanthate 50mg, Trenbolone Acetate 50mg, Trenbolone Hexahydrobenzylcarbonate 50mg",
    price: 45.0,
    image: "/products/deus inject/DEUS 3-TRENBOMED 150.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS 3-TRENBOMED 150</h1>
        <h2 class="chemical-description">Trenbolone Enanthate, Trenbolone Acetate, Trenbolone Hexahydrobenzylcarbonate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 360-70-3</p>
          <p><strong>Molecular Weight:</strong> 428.65 g/mol</p>
          <p><strong>Formula:</strong> C28H44O3</p>
          
          <p><strong>Overview:</strong> 3-TRENBOMED 150 (Trenbolone Mix) consists of a combination of trenbolone acetate, trenbolone enanthate, and trenbolone hexahydrobenzyl carbonate compounds. The base compound, trenbolone is an androgen and anabolic steroid. It is known to increase muscle mass, workout output and muscle recovery. It is usually sold as compound mixtures in order to prolong its half-life. 3-TRENBOMED 150 (Trenbolone Mix) comprises 50mg of trenbolone enanthate, 50mg of trenbolone hexahydrobenzylcarbonate, 50mg of trenbolone acetate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an androgen and anabolic steroid, trenbolone has both androgenic and anabolic activity. It leads to an increased production of protein which can lead to increased muscle mass. It also leads to an increase in male secondary sexual characteristics and is believed to be more potent than testosterone.</p>
          
          <p><strong>Side Effects:</strong> Trenbolone side effects include acute, transient cough, acne, baldness, jaundice, sleeping difficulty, mood disorders, and gynecomastia.</p>
          
          <p><strong>Interactions:</strong> Potential interacts with antidiabetic drugs, and oral anticoagulants.</p>
          
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
      </style>`,
  },
  {
    id: "inj-deus-002",
    name: "DEUS EQUIMED 250",
    description: "Boldenone Undecylenate 250mg",
    price: 38.0,
    image: "/products/deus inject/DEUS EQUIMED 250.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EQUIMED 250</h1>
        <h2 class="chemical-description">Boldenone Undecylenate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 13103-34-9</p>
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
      </style>`,
  },
  {
    id: "inj-deus-003",
    name: "DEUS DECAMED 250",
    description: "Nandrolone Decanoate 250mg",
    price: 38.0,
    image: "/products/deus inject/DEUS DECAMED 250.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DECAMED 250</h1>
        <h2 class="chemical-description">Nandrolone Decanoate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 360-70-3</p>
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
      </style>`,
  },
  {
    id: "inj-deus-004",
    name: "DEUS DECAMED PP 100",
    description: "Nandrolone Phenylpropionate 100mg",
    price: 31.0,
    image: "/products/deus inject/DEUS DECAMED PP 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DECAMED PP 100</h1>
        <h2 class="chemical-description">Nandrolone Phenylpropionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 62-90-8</p>
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
      </style>`,
  },
  {
    id: "inj-deus-005",
    name: "DEUS DHB-MED 100",
    description: "Dihydroboldenone Cypionate 100mg",
    price: 50.0,
    image: "/products/deus inject/DEUS DHB-MED 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DHB-MED 100</h1>
        <h2 class="chemical-description">Dihydroboldenone Cypionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 65-06-5</p>
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
      </style>`,
  },
  {
    id: "inj-deus-006",
    name: "DEUS DIANAMED 100",
    description: "Methandienone 100mg",
    price: 36.0,
    image: "/products/deus inject/DEUS DIANAMED 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DIANAMED 100</h1>
        <h2 class="chemical-description">Methandienone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 72-63-9</p>
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
      </style>`,
  },
  {
    id: "inj-deus-007",
    name: "DEUS TESTOMED C 250",
    description: "Testosterone Cypionate 250mg",
    price: 30.0,
    image: "/products/deus inject/DEUS TESTOMED C 250.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED C 250</h1>
        <h2 class="chemical-description">Testosterone Cypionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-20-8</p>
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
      </style>`,
  },
  {
    id: "inj-deus-008",
    name: "DEUS TESTOMED E 250",
    description: "Testosterone Enanthate 250mg",
    price: 30.0,
    image: "/products/deus inject/DEUS TESTOMED E 250.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED E 250</h1>
        <h2 class="chemical-description">Testosterone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 315-37-7</p>
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
      </style>`,
  },
  {
    id: "inj-deus-009",
    name: "DEUS MASTERMED E 200",
    description: "Drostanolone Enanthate 200mg",
    price: 50.0,
    image: "/products/deus inject/DEUS MASTERMED E 200.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MASTERMED E 200</h1>
        <h2 class="chemical-description">Drostanolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 472-61-145</p>
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
      </style>`,
  },
  {
    id: "inj-deus-010",
    name: "DEUS MASTERMED P 100",
    description: "Drostanolone Propionate 100mg",
    price: 40.0,
    image: "/products/deus inject/DEUS MASTERMED P 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MASTERMED P 100</h1>
        <h2 class="chemical-description">Drostanolone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
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
      </style>`,
  },
  {
    id: "inj-deus-011",
    name: "DEUS PARAMED 76.5",
    description: "Trenbolone Hexahydrobenzylcarbonate 76.5mg",
    price: 50.0,
    image: "/products/deus inject/DEUS PARAMED 76.5.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PARAMED 76.5</h1>
        <h2 class="chemical-description">Trenbolone Hexahydrobenzylcarbonate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 23454-33-3</p>
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
      </style>`,
  },
  {
    id: "inj-deus-012",
    name: "DEUS PRIMOMED 100",
    description: "Methenolone Enanthate 100mg",
    price: 59.0,
    image: "/products/deus inject/DEUS PRIMOMED 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PRIMOMED 100</h1>
        <h2 class="chemical-description">Methenolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 303-42-4</p>
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
      </style>`,
  },
  {
    id: "inj-deus-013",
    name: "DEUS SUSTAMED 250",
    description:
      "Testosterone Phenylpropionate 60mg, Testosterone Isocaproate 60mg, Testosterone Decanoate 100mg, Testosterone Propionate 30mg",
    price: 32.0,
    image: "/products/deus inject/DEUS SUSTAMED 250.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SUSTAMED 250</h1>
        <h2 class="chemical-description">Testosterone Phenylpropionate, Testosterone Isocaproate, Testosterone Decanoate, Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
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
      </style>`,
  },
  {
    id: "inj-deus-014",
    name: "DEUS TESTOMED 100",
    description: "Testosterone Base 100mg",
    price: 28.0,
    image: "/products/deus inject/DEUS TESTOMED 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED 100</h1>
        <h2 class="chemical-description">Testosterone Base</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 57-85-2</p>
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
      </style>`,
  },
  {
    id: "inj-deus-015",
    name: "DEUS TESTOMED P 100",
    description: "Testosterone Propionate 100mg",
    price: 26.0,
    image: "/products/deus inject/DEUS TESTOMED P 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED P 100</h1>
        <h2 class="chemical-description">Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 57-85-2</p>
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
      </style>`,
  },
  {
    id: "inj-deus-016",
    name: "DEUS TESTOMED PP 100",
    description: "Testosterone Phenylpropionate 100mg",
    price: 26.0,
    image: "/products/deus inject/DEUS TESTOMED PP 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED PP 100</h1>
        <h2 class="chemical-description">Testosterone Phenylpropionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1255-49-8</p>
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
      </style>`,
  },
  {
    id: "inj-deus-017",
    name: "DEUS TESTOMED U 250",
    description: "Testosterone Undecanoate 250mg",
    price: 30.0,
    image: "/products/deus inject/DEUS TESTOMED U 250.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TESTOMED U 250</h1>
        <h2 class="chemical-description">Testosterone Undecanoate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 5949-44-0</p>
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
      </style>`,
  },
  {
    id: "inj-deus-018",
    name: "DEUS TRENBOMED A 100",
    description: "Trenbolone Acetate 100mg",
    price: 41.0,
    image: "/products/deus inject/DEUS TRENBOMED A 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRENBOMED A 100</h1>
        <h2 class="chemical-description">Trenbolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 10161-34-9</p>
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
      </style>`,
  },
  {
    id: "inj-deus-019",
    name: "DEUS TRENBOMED E 200",
    description: "Trenbolone Enanthate 200mg",
    price: 50.0,
    image: "/products/deus inject/DEUS TRENBOMED E 200.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRENBOMED E 200</h1>
        <h2 class="chemical-description">Trenbolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1629618-98-9</p>
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
      </style>`,
  },
  {
    id: "inj-deus-020",
    name: "DEUS TRESTOLONE A 100",
    description: "Trestolone Acetate 100mg",
    price: 100.0,
    image: "/products/deus inject/DEUS TRESTOLONE A 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRESTOLONE A 100</h1>
        <h2 class="chemical-description">Trestolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 6157-87-5</p>
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
      </style>`,
  },
  {
    id: "inj-deus-021",
    name: "DEUS TRESTOLONE E 100",
    description: "Trestolone Enanthate 100mg",
    price: 100.0,
    image: "/products/deus inject/DEUS TRESTOLONE E 100.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TRESTOLONE E 100</h1>
        <h2 class="chemical-description">Trestolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 81005-56-3</p>
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
      </style>`,
  },
  {
    id: "inj-deus-022",
    name: "DEUS WINIMED 50",
    description: "Stanozolol 50mg",
    price: 33.0,
    image: "/products/deus inject/DEUS WINIMED 50.png",
    category: "INJECTION",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS WINIMED 50</h1>
        <h2 class="chemical-description">Stanozolol</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 10418-03-8</p>
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
      </style>`,
  },
  {
    id: "oral-deus-001",
    name: "DEUS ANADROMED 50",
    description: "Oxymetholone 50mg",
    price: 27.0,
    image: "/products/deus oral/DEUS ANADROMED 50.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ANADROMED 50</h1>
        <h2 class="chemical-description">Oxymetholone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-07-1</p>
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
      </style>`,
  },
  {
    id: "oral-deus-002",
    name: "DEUS ANAVAMED 10",
    description: "Oxandrolone 10mg",
    price: 23.0,
    image: "/products/deus oral/DEUS ANAVAMED 10.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ANAVAMED 10</h1>
        <h2 class="chemical-description">Oxandrolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 53-39-4</p>
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
      </style>`,
  },
  {
    id: "oral-deus-003",
    name: "DEUS DIANAMED 10",
    description: "Methandienone 10mg",
    price: 10.0,
    image: "/products/deus oral/DEUS DIANAMED 10.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DIANAMED 10</h1>
        <h2 class="chemical-description">Methandienone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 72-63-9</p>
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
      </style>`,
  },
  {
    id: "oral-deus-004",
    name: "DEUS HALOMED 5",
    description: "Fluoxymesterone 5mg",
    price: 45.0,
    image: "/products/deus oral/DEUS HALOMED 5.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HALOMED 5</h1>
        <h2 class="chemical-description">Fluoxymesterone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 76-43-7</p>
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
      </style>`,
  },
  {
    id: "oral-deus-005",
    name: "DEUS PRIMOMED 25",
    description: "Methenolone Acetate 25mg",
    price: 75.0,
    image: "/products/deus oral/DEUS PRIMOMED 25.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PRIMOMED 25</h1>
        <h2 class="chemical-description">Methenolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-05-9</p>
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
      </style>`,
  },
  {
    id: "oral-deus-006",
    name: "DEUS PROVIMED 25",
    description: "Mesterolone 25mg",
    price: 23.0,
    image: "/products/deus oral/DEUS PROVIMED 25.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PROVIMED 25</h1>
        <h2 class="chemical-description">Mesterolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1424-00-6</p>
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
      </style>`,
  },
  {
    id: "oral-deus-007",
    name: "DEUS SUPERMED 10",
    description: "Methyldrostanolone 10mg",
    price: 41.0,
    image: "/products/deus oral/DEUS SUPERMED 10.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SUPERMED 10</h1>
        <h2 class="chemical-description">Methyldrostanolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 3381-88-2</p>
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
      </style>`,
  },
  {
    id: "oral-deus-008",
    name: "DEUS TURIMED 10",
    description: "4-Chlorodehydromethyltestosterone 10mg",
    price: 17.0,
    image: "/products/deus oral/DEUS TURIMED 10.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TURIMED 10</h1>
        <h2 class="chemical-description">4-Chlorodehydromethyltestosterone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 2446-23-3</p>
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
      </style>`,
  },
  {
    id: "oral-deus-009",
    name: "DEUS WINIMED 10",
    description: "Stanozolol 10mg",
    price: 11.0,
    image: "/products/deus oral/DEUS WINIMED 10.png",
    category: "ORAL",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS WINIMED 10</h1>
        <h2 class="chemical-description">Stanozolol</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 10418-03-8</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-001",
    name: "DEUS GW501516 10 CARDARINE",
    description: "Cardarine 10mg",
    price: 35.0,
    image: "/products/deus sarms/DEUS GW501516 10 CARDARINE.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS GW501516 10 CARDARINE</h1>
        <h2 class="chemical-description">Cardarine</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 317318-70-0</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-002",
    name: "DEUS LGD4033 10 LIGANDROL",
    description: "Ligandrol 10mg",
    price: 60.0,
    image: "/products/deus sarms/DEUS LGD4033 10 LIGANDROL.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS LGD4033 10 LIGANDROL</h1>
        <h2 class="chemical-description">Ligandrol</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1165910-22-4</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-003",
    name: "DEUS MK677 10 IBUTAMOREN",
    description: "Ibutamoren 10mg",
    price: 40.0,
    image: "/products/deus sarms/DEUS MK677 10 IBUTAMOREN.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MK677 10 IBUTAMOREN</h1>
        <h2 class="chemical-description">Ibutamoren</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 159634-47-6</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-004",
    name: "DEUS MK2866 10 OSTARINE",
    description: "Ostarine 10mg",
    price: 33.0,
    image: "/products/deus sarms/DEUS MK2866 10 OSTARINE.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MK2866 10 OSTARINE</h1>
        <h2 class="chemical-description">Ostarine</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 841205-47-8</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-005",
    name: "DEUS RAD140 10 TESTOLONE",
    description: "Testolone 10mg",
    price: 50.0,
    image: "/products/deus sarms/DEUS RAD140 10 TESTOLONE.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS RAD140 10 TESTOLONE</h1>
        <h2 class="chemical-description">Testolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1182367-47-0</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-006",
    name: "DEUS S4 25 ANDARINE",
    description: "Andarine 25mg",
    price: 45.0,
    image: "/products/deus sarms/DEUS S4 25 ANDARINE.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS S4 25 ANDARINE</h1>
        <h2 class="chemical-description">Andarine</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 401900-40-1</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-007",
    name: "DEUS S23 10",
    description: "S23 10mg",
    price: 35.0,
    image: "/products/deus sarms/DEUS S23 10.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS S23 10</h1>
        <h2 class="chemical-description">S23</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1010396-29-8</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-008",
    name: "DEUS SR9009 10 STENABOLIC",
    description: "Stenabolic 10mg",
    price: 35.0,
    image: "/products/deus sarms/DEUS SR9009 10 STENABOLIC.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SR9009 10 STENABOLIC</h1>
        <h2 class="chemical-description">Stenabolic</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1379686-30-2</p>
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
      </style>`,
  },
  {
    id: "sarms-deus-009",
    name: "DEUS YK11 5",
    description: "YK11 5mg",
    price: 55.0,
    image: "/products/deus sarms/DEUS YK11 5.png",
    category: "SARMS",
    brand: "deus",
    filterType: "Allround",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS YK11 5</h1>
        <h2 class="chemical-description">YK11</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1370003-76-1</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-001",
    name: "DEUS BPC-157",
    description: "BPC-157 Pentadecapeptide 5mg",
    price: 35.0,
    image: "/products/deus peptides & hgh/DEUS BPC-157.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS BPC-157</h1>
        <h2 class="chemical-description">Pentadecapeptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 137525-51-0</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-002",
    name: "DEUS CJC-1295 DAC",
    description: "Tetrasubstitued 30-Amino Acid Peptide Hormone 2mg",
    price: 30.0,
    image: "/products/deus peptides & hgh/DEUS CJC-1295 DAC.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CJC-1295 DAC</h1>
        <h2 class="chemical-description">Tetrasubstituted 30-Amino Acid Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 446262-90-4</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-003",
    name: "DEUS DEUSTROPIN 4/12",
    description: "Recombinant Human Growth Hormone [rDNA origin] 12IU",
    price: 190.0,
    image: "/products/deus peptides & hgh/DEUS DEUSTROPIN 4:12.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DEUSTROPIN 4/12</h1>
        <h2 class="chemical-description">Recombinant Human Growth Hormone [rDNA origin]</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 12629-01-5</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-004",
    name: "DEUS DSIP",
    description: "Delta Sleep-Inducing Peptide 5mg",
    price: 35.0,
    image: "/products/deus peptides & hgh/DEUS DSIP.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS DSIP</h1>
        <h2 class="chemical-description">Delta Sleep-Inducing Peptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 62568-57-4</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-005",
    name: "DEUS EPITHALON",
    description: "Epithalamine 10mg",
    price: 30.0,
    image: "/products/deus peptides & hgh/DEUS EPITHALON.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EPITHALON</h1>
        <h2 class="chemical-description">Epithalamine</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 307297-39-8</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-006",
    name: "DEUS EPO",
    description: "Erythropoietin 3000IU",
    price: 0.0,
    image: "/products/deus peptides & hgh/DEUS EPO.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EPO</h1>
        <h2 class="chemical-description">Erythropoietin</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 11096-26-7</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-007",
    name: "DEUS FOLLISTATIN",
    description: "Activin-Binding Protein 1mg",
    price: 60.0,
    image: "/products/deus peptides & hgh/DEUS FOLLISTATIN.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS FOLLISTATIN</h1>
        <h2 class="chemical-description">Activin-Binding Protein</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 158709-61-6</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-008",
    name: "DEUS GHRP-2",
    description: "Growth Hormone-Releasing Peptide 2 10mg",
    price: 35.0,
    image: "/products/deus peptides & hgh/DEUS GHRP-2.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS GHRP-2</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide 2</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 158861-67-7</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-009",
    name: "DEUS GHRP-6",
    description: "Growth Hormone-Releasing Peptide 6 10mg",
    price: 35.0,
    image: "/products/deus peptides & hgh/DEUS GHRP-6.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS GHRP-6</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide 6</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 87616-84-0</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-010",
    name: "DEUS HCG",
    description: "Human Chorionic Gonadotropin 5000IU",
    price: 40.0,
    image: "/products/deus peptides & hgh/DEUS HCG.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HCG</h1>
        <h2 class="chemical-description">Human Chorionic Gonadotropin</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 9002-61-3</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-011",
    name: "DEUS HEXARELIN",
    description: "Growth Hormone-Releasing Peptide 2mg",
    price: 30.0,
    image: "/products/deus peptides & hgh/DEUS HEXARELIN.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HEXARELIN</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 140703-51-1</p>
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
      </style>`,
  },
  {
    id: "peptides-deus-012",
    name: "DEUS HGH FRAGMENT 176-191",
    description: "Recombinant Human Growth Hormone Fragment 176-191 5mg",
    price: 40.0,
    image: "/products/deus peptides & hgh/DEUS HGH FRAGMENT 176-191.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HGH FRAGMENT 176-191</h1>
        <h2 class="chemical-description">Recombinant Human Growth Hormone Fragment 176-191</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 66004-57-7</p>
          <p><strong>Molecular Weight:</strong> 2140.19 g/mol</p>
          <p><strong>Formula:</strong> C84H127F9N24O27S2</p>
          
          <p><strong>Overview:</strong> HGH FRAGMENT 176-191 (Recombinant Human Growth Hormone Fragment 176-191) is a growth hormone analog that is used to treat children with growth hormone deficiency, Turner syndrome, and short stature. It is a polypeptide hormone that has recombinant DNA origin. It contains 5mg of Recombinant Human Growth Hormone Fragment 176-191 and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> HGH FRAGMENT 176-191 is a recombinant growth hormone that acts on bone, cartilage, and muscle to stimulate growth in childhood. It acts just like the natural growth hormone. It can be used to treat both children and adults with growth hormone deficiency. It increases the concentration of Insulin-like Growth Factor-1 (IGF-1) which plays a role in skeletal growth. It also increases the synthesis of protein and increases the lean body mass.</p>
          
          <p><strong>Dosage:</strong> Weight-based dosing as directed by a physician.</p>
          
          <p><strong>Side effects:</strong> Headache, nausea, fatigue, vomiting, weakness, eye problems, irregular heartbeats, slurred speech, joint stiffness and impaired glucose tolerance.</p>
          
          <p><strong>Interactions:</strong> Oral hypoglycemic drugs, steroids, cyclosporine, oral contraceptive, macimorelin.</p>
          
          <p><strong>Composition:</strong><br>
          Recombinant Human Growth Hormone Fragment 176-191: 5mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-013",
    name: "DEUS HMG",
    description: "Human Menopausal Gonadotropin 0.15mg",
    price: 40.0,
    image: "/products/deus peptides & hgh/DEUS HMG.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS HMG</h1>
        <h2 class="chemical-description">Human Menopausal Gonadotropin</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 61489-71-2</p>
          <p><strong>Molecular Weight:</strong> 142.24 g/mol</p>
          <p><strong>Formula:</strong> C9H18O</p>
          
          <p><strong>Overview:</strong> HMG (Human Menopausal Gonadotropin) is a medication used in the treatment of infertility, in both males and females. HMG is manufactured as HMG 0.15mg per vial injections which contain 0.15mg of Human Menopausal Gonadotropin and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> HMG contains two main hormones which are important in fertility, that is, follicle stimulating hormone and luteininizing hormone. Follicle stimulating hormone is responsible for initiating the development of eggs in the ovaries. Luteinizing hormone is responsible for ovulation in women and the production of testosterone in the leydig cells in men. HMG binds to the LH/FSH/HCG receptor to exert its effects in women who have low levels of FHS or LH.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Injection site pain, headache, mood disturbances, weakness, restlessness. However, symptoms typically resolve gradually.</p>
          
          <p><strong>Interactions:</strong> Clomiphene citrate.</p>
          
          <p><strong>Composition:</strong><br>
          Human Menopausal Gonadotropin: 0.15mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-014",
    name: "DEUS IGF-1 DES",
    description: "Insulin-Like Growth Factor 1 DES 1mg",
    price: 0.0,
    image: "/products/deus peptides & hgh/DEUS IGF-1 DES.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS IGF-1 DES</h1>
        <h2 class="chemical-description">Insulin-Like Growth Factor 1, DES</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 112603-35-7</p>
          <p><strong>Molecular Weight:</strong> 7371.48 g/mol</p>
          <p><strong>Formula:</strong> C319H501N91O96S7</p>
          
          <p><strong>Overview:</strong> Insulin-Like Growth factor-1 is a naturally occurring form of IGF-1 (Insulin-like Growth Factor-1). It is used in the treatment of growth failure in children and IGF-1 deficiency, or growth hormone deficiency. IGF-1 DES (Insulin-Like Growth Factor 1, DES) comes in 1mg/vial subcutaneous injections which contain 1mg of Insulin-Like Growth Factor 1, DES and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of IGF-1, IGF-1 DES mediates the effect of growth hormone although it is more potent than IGF-1. It binds to the IGF1 receptor to promote growth in almost every part of the body. It also signals several growth pathways that result in increased growth and it inhibits the pathway of cellular death. Naturally, growth hormone stimulates the release of IGF-1 from the liver. However, IGF-1 DES can act in the absence of growth hormone which makes it useful in treating growth hormone deficiency and resistance.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypoglycemia, retina swelling, muscle pain, joint pain, bell's palsy.</p>
          
          <p><strong>Interactions:</strong> Macimorelin.</p>
          
          <p><strong>Composition:</strong><br>
          Insulin-Like Growth Factor 1, DES: 1mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-015",
    name: "DEUS IGF-1 LR3",
    description: "Long Arginine 3-IGF-1 1mg",
    price: 0.0,
    image: "/products/deus peptides & hgh/DEUS IGF-1 LR3.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS IGF-1 LR3</h1>
        <h2 class="chemical-description">Long Arginine 3-IGF-1</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 143045-27-6</p>
          <p><strong>Molecular Weight:</strong> 9117.60 g/mol</p>
          <p><strong>Formula:</strong> C400H625N111O115S9</p>
          
          <p><strong>Overview:</strong> IGF-1 LR3 (Long Arginine 3-IGF-1) is a man-made form of IGF-1 (Insulin-like Growth Factor-1). It is used in the treatment of growth failure in children and IGF-1 deficiency, or growth hormone deficiency. IGF-1 LR3 (Long Arginine 3-IGF-1) comes in 1mg/vial subcutaneous injections which contain 1mg of Long Arginine 3-IGF-1, and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of IGF-1, IGF-1 LR3 mediates the effect of growth hormone although it is more potent than IGF-1. It binds to the IGF1 receptor to promote growth in almost every part of the body. It also signals several growth pathways that result in increased growth and it inhibits the pathway of cellular death. Naturally, growth hormone stimulates the release of IGF-1 from the liver. However, IGF-1 LR3 can act in the absence of growth hormone which makes it useful in treating growth hormone deficiency and resistance. It differs from the natural IGF-1 in that it has 13 more amino acids, and has a longer half-life which is approximately 30 hours.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypoglycemia, retina swelling, muscle pain, joint pain, bell's palsy.</p>
          
          <p><strong>Interactions:</strong> Macimorelin, hypoglycemic medications.</p>
          
          <p><strong>Composition:</strong><br>
          Long Arginine 3-IGF-1: 1mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-016",
    name: "DEUS IPAMORELIN",
    description: "Growth Hormone-Releasing Peptide 2mg",
    price: 20.0,
    image: "/products/deus peptides & hgh/DEUS IPAMORELIN.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS IPAMORELIN</h1>
        <h2 class="chemical-description">Growth Hormone-Releasing Peptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 170851-70-4</p>
          <p><strong>Molecular Weight:</strong> 711.87 g/mol</p>
          <p><strong>Formula:</strong> C38H49N9O5</p>
          
          <p><strong>Overview:</strong> IPAMORELIN (Growth Hormone-Releasing Peptide) is a man-made highly selective agonist of the ghrelin/growth hormone secretagogue receptor. It is used to treat children with growth hormone deficiency, adult GH deficiency, catabolic stats, and obesity. It is manufactured as a IPAMORELIN (Growth Hormone-Releasing Peptide) 2mg/vial injection which contains Growth Hormone-Releasing Peptide 2mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> IPAMORELIN stimulates the release of growth hormone by acting on the ghrelin/growth hormone secretagogue receptor (GHS-R). It is still unclear the exact mechanism for GH release after the GHSR is stimulated. However, studies have shown that it acts directly on the pituitary gland and the hypothalamus, as well as GHRH and somatostatin. It does not stimulate the production of cortisol, ACTH, prolactin, FSH or LH, unlike several other GH secretagogues. This makes it highly selective and efficient for the treatment of Growth Hormone deficiency.</p>
          
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
      </style>`,
  },
  {
    id: "peptides-deus-017",
    name: "DEUS MELANOTAN II",
    description: "Melanotan II Peptide Hormone 10mg",
    price: 30.0,
    image: "/products/deus peptides & hgh/DEUS MELANOTAN II.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MELANOTAN II</h1>
        <h2 class="chemical-description">Melanotan II Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 121062-08-6</p>
          <p><strong>Molecular Weight:</strong> 1024.18 g/mol</p>
          <p><strong>Formula:</strong> C50H69N15O9</p>
          
          <p><strong>Overview:</strong> MELANOTAN II (Melanotan II Peptide Hormone) is a man-made analog of the Alpha-melanocyte-stimulating hormone, which belongs to the family of melanocyte-stimulating hormones. This medication is used in photoprotection against the effects of ultraviolet rays. It is also used in skin tanning and for the treatment of erectile dysfunction and fibromyalgia. MELANOTAN II is manufactured as 10mg/vial injections which contain Melanotan II Peptide hormone 10 mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of Alpha-melanocyte stimulating hormone, it acts on the melanocortin receptors. There are 5 melanocortin receptors (M1 - M5). Melanotan II acts on M1 to initiate melanogenesis and skin pigmentation. It also has other effects such as increasing libido when it acts on other melanocortin receptors.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Moles, uneven pigmentation, nausea, vomiting, flushing, skin cancer.</p>
          
          <p><strong>Interactions:</strong> Not available.</p>
          
          <p><strong>Composition:</strong><br>
          Melanotan II Peptide Hormone: 10mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-018",
    name: "DEUS MOD GRF 1-29",
    description: "Tetrasubstitued 29-Amino Acid Peptide Hormone 2mg",
    price: 20.0,
    image: "/products/deus peptides & hgh/DEUS MOD GRF 1-29.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MOD GRF 1-29</h1>
        <h2 class="chemical-description">Tetrasubstituted 29-Amino Acid Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 863288-34-0</p>
          <p><strong>Molecular Weight:</strong> 3367.95 g/mol</p>
          <p><strong>Formula:</strong> C152H252N44O42</p>
          
          <p><strong>Overview:</strong> MOD GRF 1-29 is a man-made peptide that is an analog of growth hormone releasing hormone (GHRH). It is used to treat growth hormone deficiency or growth failure. It is also used to treat dwarfism and prevent weight loss.</p>
          
          <p><strong>Mechanism of Action:</strong> MOD GRF 1-29 acts on the GHRH receptor to stimulate growth hormone release. It is a 29 amino acid peptide, which is less than the natural GHRH (44 amino acids). On its own, GRF 1-29 has a half-life of about 10 minutes. However, when it is modified to MOD GRF 1-29, the half-life is increased to about 30 minutes.</p>
          
          <p><strong>Side Effects:</strong> Flushing, pain at the injection site, nausea and vomiting, headaches, allergic reaction, and difficulty breathing.</p>
          
          <p><strong>Interactions:</strong> COX inhibitors, glucocorticoids, atropine, levodopa.</p>
          
          <p><strong>Composition:</strong><br>
          Tetrasubstituted 29-Amino Acid Peptide Hormone: 2mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-019",
    name: "DEUS MOTS-C",
    description: "Mitochondrial-Derived Peptide 10mg",
    price: 50.0,
    image: "/products/deus peptides & hgh/DEUS MOTS-C.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS MOTS-C</h1>
        <h2 class="chemical-description">Mitochondrial-Derived Peptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1627585-32-6</p>
          <p><strong>Molecular Weight:</strong> 3890.16 g/mol</p>
          <p><strong>Formula:</strong> C215H350N62O65S2</p>
          
          <p><strong>Overview:</strong> MOTS-C is a mitochondrial-derived peptide consisting of 16 amino acids, naturally produced by mitochondria, which play a crucial role in cellular energy regulation. Unlike traditional peptides, MOTS-C is encoded by mitochondrial DNA (mtDNA), giving it unique metabolic functions. It has gained attention for its ability to regulate metabolic homeostasis, improve insulin sensitivity, and promote fat oxidation, making it a potential therapeutic agent for conditions like obesity, diabetes, and age-related metabolic decline.</p>
          
          <p><strong>Mechanism of Action:</strong> MOTS-C acts primarily by targeting and regulating metabolic pathways involved in glucose metabolism and fat oxidation. It mimics the effects of exercise by activating the AMPK (AMP-activated protein kinase) pathway, which promotes glucose uptake by cells and enhances fatty acid oxidation. This action improves insulin sensitivity and helps regulate blood sugar levels. MOTS-C also counteracts age-related insulin resistance and metabolic dysfunction by modulating pathways involved in mitochondrial function and stress response, potentially extending cellular longevity and improving energy utilization. Increased glucose metabolism: Promotes glucose uptake by skeletal muscle, improving insulin sensitivity. Fat oxidation: Enhances the breakdown of fats for energy, leading to reduced fat storage. Anti-aging effects: Protects cells from metabolic stress and may reduce age-related metabolic disorders.</p>
          
          <p><strong>Dosage:</strong> MOTS-C is typically administered as a subcutaneous injection, with dosages ranging from 5 mg to 10 mg, usually taken daily or several times per week depending on treatment objectives (e.g., metabolic enhancement, fat loss, or age-related interventions).</p>
          
          <p><strong>Side Effects:</strong> MOTS-C is generally well-tolerated, but some potential side effects may include: Mild pain or redness at the injection site. Fatigue, headaches, or slight dizziness. Temporary fluctuations in blood glucose levels.</p>
          
          <p><strong>Interactions:</strong> MOTS-C may interact with other treatments targeting metabolic pathways, such as insulin-sensitizing medications or other peptides that influence mitochondrial function (e.g., AMPK activators). Caution should be taken when combined with glucose-lowering drugs to avoid hypoglycemia.</p>
          
          <p><strong>Composition:</strong><br>
          MOTS-C (Mitochondrial-Derived Peptide): 10mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-020",
    name: "DEUS PEG MGF",
    description: "Pegylated Mechano Growth Factor 2mg",
    price: 33.0,
    image: "/products/deus peptides & hgh/DEUS PEG MGF.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PEG MGF</h1>
        <h2 class="chemical-description">Pegylated Mechano Growth Factor</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 108174-48-7</p>
          <p><strong>Molecular Weight:</strong> 2888.16 g/mol</p>
          <p><strong>Formula:</strong> C121H200N420O39</p>
          
          <p><strong>Overview:</strong> PEG MGF (Pegylated Mechano Growth Factor) is a man-made analog of Insulin-like Growth Factor 1. It is used in the treatment of muscle wasting, osteoporosis and wound healing. It is manufactured as PEG MGF 2mg per vial injections containing 2mg of Pegylated Mechano Growth Factor and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of IGF-1, PEG MGF stimulates growth across cells and causes differentiation of tissues. It binds to the IGF1 receptor to promote growth in almost every part of the body. It also signals several growth pathways that result in increased growth and it inhibits the pathway of cellular death. It is this feature that makes it useful in treating muscle wasting, osteoporosis and useful for wound healing. Pegylation of MGF is what increases the half-life to about 2 to 3 days, from just a few minutes.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypoglycemia.</p>
          
          <p><strong>Interactions:</strong> Glucose lowering agents</p>
          
          <p><strong>Composition:</strong><br>
          Pegylated Mechano Growth Factor: 2mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-021",
    name: "DEUS PNC-27",
    description: "PNC-27 Anti-Cancer Peptide 5mg",
    price: 50.0,
    image: "/products/deus peptides & hgh/DEUS PNC-27.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PNC-27</h1>
        <h2 class="chemical-description">PNC-27 Anti-Cancer Peptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1159861-00-3</p>
          <p><strong>Molecular Weight:</strong> 4029.2 g/mol</p>
          <p><strong>Formula:</strong> C188H293N53O44S</p>
          
          <p><strong>Overview:</strong> PNC-27 Anti-Cancer Peptide is a medication used in the treatment of cancer.</p>
          
          <p><strong>Mechanism of Action:</strong> PNC-27 Anticancer peptide is a peptide that is selective in killing cancer cells, without affecting the cells of the host. It does this by causing necrosis in the cancer cells. PNC-27 kills cancer cells by forming pores in the membrane of cancer cells leading to their death.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Infections.</p>
          
          <p><strong>Interactions:</strong> Not Available.</p>
          
          <p><strong>Composition:</strong><br>
          PNC-27 Anti-Cancer Peptide: 5mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-022",
    name: "DEUS PT-141",
    description: "Bremelanotide 10mg",
    price: 30.0,
    image: "/products/deus peptides & hgh/DEUS PT-141.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PT-141</h1>
        <h2 class="chemical-description">Bremelanotide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 189691-06-3</p>
          <p><strong>Molecular Weight:</strong> 1025.18 g/mol</p>
          <p><strong>Formula:</strong> C50H68N14O10</p>
          
          <p><strong>Overview:</strong> PT-141 (Bremelanotide) is a medication that is used in the treatment of hypoactive sexual desire disorder (HSDD). It is manufactured as 10mg/vial injections which contain Bremelanotide 10mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Bremelanotide is a melanocortin Receptor agonist. It acts on M1 - M5 receptors to exert its effect which is to increase libido in the absence of underlying medical problems.</p>
          
          <p><strong>Dosage:</strong> One injection before sexual activity.</p>
          
          <p><strong>Side Effects:</strong> Nausea and vomiting, cough, injection site reactions, headache, cough.</p>
          
          <p><strong>Interactions:</strong> COX inhibitors, Naltrexone.</p>
          
          <p><strong>Composition:</strong><br>
          Bremelanotide: 10mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-023",
    name: "DEUS SELANK",
    description: "Seeland Anxiolytic Peptide 5mg",
    price: 15.0,
    image: "/products/deus peptides & hgh/DEUS SELANK.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SELANK</h1>
        <h2 class="chemical-description">Selank Anxiolytic Peptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 129954-34-3</p>
          <p><strong>Molecular Weight:</strong> 751.89 g/mol</p>
          <p><strong>Formula:</strong> C33H57N11O9</p>
          
          <p><strong>Overview:</strong> Selank is a synthetic analog of tuftsin, and it is used in the treatment of anxiety, depression and used to also improve cognitive functions. Selank is manufactured as 5mg/vial subcutaneous injections that contain Selank Anxiolytic Peptide 5mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As an analog of tuftsin, selank is an immunomodulator. Its exact mechanism of action in bringing about its anxiolytic effects is not completely understood. However, it has been shown that it modulates the GABA neurotransmitter. It also induces the metabolism of serotonin and enhances the expression of brain-derived neurotrophic factor, both of which are involved in regulation of mood. It exerts its anxiolytic effects without causing sedation or addiction. It also influences memory formation and enhances the process of learning. Selank also boosts immune responses.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Headache, hair loss, fatigue, dizziness.</p>
          
          <p><strong>Interactions:</strong> Benzodiazepines.</p>
          
          <p><strong>Composition:</strong><br>
          Selank Anxiolytic Peptide: 5mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-024",
    name: "DEUS SEMAGLUTIDE",
    description: "Glucagon-Like Peptide-1 GLP-1 5mg",
    price: 100.0,
    image: "/products/deus peptides & hgh/DEUS SEMAGLUTIDE.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SEMAGLUTIDE</h1>
        <h2 class="chemical-description">Glucagon-Like Peptide-1 (GLP-1)</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 910463-68-2</p>
          <p><strong>Molecular Weight:</strong> 4113.64 g/mol</p>
          <p><strong>Formula:</strong> C187H291N45O59</p>
          
          <p><strong>Overview:</strong> SEMAGLUTIDE is an agonist of the Glucagon-Like Peptide 1 receptor. It is used in the treatment of Type 2 diabetes. SEMAGLUTIDE is manufactured as 5mg/vial injections which contain Glucagon-Like Peptide-1 (GLP-1) 5mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> SEMAGLUTIDE acts on the GLP-1 receptor to exert its effects. Once it binds to this receptor, a cascade of events is set in motion which results in the increased production of Insulin, inhibition of glucagon and delay of gastric emptying. The secreted insulin helps to mop up glucose and achieve blood sugar control. It has an advantage over other insulin secretagogues in that they have a lower risk of causing hypoglycemia.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hypoglycemia, redness or inflammation at the injection site, nausea, vomiting, pancreas or gall bladder disease.</p>
          
          <p><strong>Interactions:</strong> Beta-blockers, diabetes medications.</p>
          
          <p><strong>Composition:</strong><br>
          Glucagon-Like Peptide-1 (GLP-1): 5mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-025",
    name: "DEUS SEMAX",
    description: "Semax Heptapeptide 5mg",
    price: 15.0,
    image: "/products/deus peptides & hgh/DEUS SEMAX.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS SEMAX</h1>
        <h2 class="chemical-description">Semax Heptapeptide</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 80714-61-0</p>
          <p><strong>Molecular Weight:</strong> 813.93 g/mol</p>
          <p><strong>Formula:</strong> C37H51N9O10S</p>
          
          <p><strong>Overview:</strong> SEMAX is a medication that belongs to the family of neuropeptides. It is used to treat cognitive disorders stroke, TIA, prevent cardiovascular disorders and to also boost the immune system. It is manufactured as 5mg/vial subcutaneous injections which contain SEMAX Heptapetide 5mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> SEMAX has been shown to act as an antagonist of one of the melanocortin receptors (M4). It inhibits the effects of this receptor and also increases the production of brain-derived neurotrophic factor, which is essential in long-term memory and neural development.</p>
          
          <p><strong>Dosage:</strong> As directed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hairloss, hyperglycemia.</p>
          
          <p><strong>Interactions:</strong> Diabetes medications.</p>
          
          <p><strong>Composition:</strong><br>
          Semax Heptapeptide: 5mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-026",
    name: "DEUS TB-500",
    description: "Thymosin Beta-4 2mg",
    price: 30.0,
    image: "/products/deus peptides & hgh/DEUS TB-500.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TB-500</h1>
        <h2 class="chemical-description">Thymosin Beta-4</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 885340-08-9</p>
          <p><strong>Molecular Weight:</strong> 889.01 g/mol</p>
          <p><strong>Formula:</strong> C38H68N10O14</p>
          
          <p><strong>Overview:</strong> TB-500 (Thymosin Beta-4) is a man-made peptide that is an analog of the Thymosin Beta 4 protein found in humans. This medication is used to treat ulcers, dry eye, and to accelerate wound healing. It is manufactured as 2mg/vial injections which contain 2mg of Thymosin Beta-4 and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> TB-500 has been shown to cause angiogenesis in tissues, collagen deposition and migration of keratinocytes, all of which have a resultant positive effect on wound healing.</p>
          
          <p><strong>Dosage:</strong> 2mg daily subcutaneous injections.</p>
          
          <p><strong>Side Effects:</strong> Headaches, fever, dizziness.</p>
          
          <p><strong>Interactions:</strong> Not Available.</p>
          
          <p><strong>Composition:</strong><br>
          Thymosin Beta-4: 2mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-027",
    name: "DEUS THYMOSIN A1",
    description: "Thymic Factor 10mg",
    price: 60.0,
    image: "/products/deus peptides & hgh/DEUS THYMOSIN A1.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS THYMOSIN A1</h1>
        <h2 class="chemical-description">Thymosin Alpha-1</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 62304-98-7</p>
          <p><strong>Molecular Weight:</strong> 3108.32 g/mol</p>
          <p><strong>Formula:</strong> C129H215N33O55</p>
          
          <p><strong>Overview:</strong> THYMOSIN A1 (Thymosin Alpha-1) is a synthetic peptide fragment that is used to treat hepatitis B and C, acute respiratory distress syndrome, tuberculosis, peritonitis HIV and cancer.</p>
          
          <p><strong>Mechanism of Action:</strong> THYMOSIN A1 (Thymosin Alpha-1) is involved in the restoration of immune function and acts to enhance cell-mediated immunity by the T-cells. It affects T-cell maturation, differentiation and function. It acts on several receptors that lead to the proliferation of other immune cells. It also enhances the response of the innate immunity. It has a half-life of about 3hrs.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Irritation at the injection site, cytokine storm.</p>
          
          <p><strong>Interactions:</strong> Not available.</p>
          
          <p><strong>Composition:</strong><br>
          Thymosin Alpha-1: 10mg<br>
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
      </style>`,
  },
  {
    id: "peptides-deus-028",
    name: "DEUS TIRZEPATIDE",
    description: "GIP and GLP-1 Receptor agonist 10mg",
    price: 100.0,
    image: "/products/deus peptides & hgh/DEUS TIRZEPATIDE.png",
    category: "PEPTIDES & HGH",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS TIRZEPATIDE</h1>
        <h2 class="chemical-description">GIP and GLP-1 Receptor agonist</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 2023788-19-2</p>
          <p><strong>Molecular Weight:</strong> 4813.53 g/mol</p>
          <p><strong>Formula:</strong> C225H348N48O68</p>
          
          <p><strong>Overview:</strong> Tirzepatide is a novel dual GIP (Glucose-dependent Insulinotropic Polypeptide) and GLP-1 (Glucagon-like Peptide-1) receptor agonist. It is a synthetic peptide designed to mimic the actions of both GIP and GLP-1, two incretin hormones that play key roles in regulating blood glucose and energy metabolism. Tirzepatide is used primarily in the management of type 2 diabetes and obesity due to its potent effects on improving glycemic control and promoting weight loss. It is marketed as a subcutaneous injectable medication.</p>
          
          <p><strong>Mechanism of Action:</strong> Tirzepatide acts by binding to and activating both GIP and GLP-1 receptors. This dual agonism enhances insulin secretion in a glucose-dependent manner and reduces glucagon levels, helping to regulate blood sugar. The GIP component promotes insulin sensitivity, while the GLP-1 component slows gastric emptying, reduces appetite, and increases satiety. Together, these effects contribute to improved glycemic control, weight reduction, and better metabolic outcomes.<br><br><strong>GIP (Glucose-dependent Insulinotropic Polypeptide):</strong> Increases insulin secretion and improves fat metabolism.<br><strong>GLP-1 (Glucagon-like Peptide-1):</strong> Enhances insulin release, reduces glucagon secretion, and delays gastric emptying, leading to better blood sugar control and appetite suppression.</p>
          
          <p><strong>Dosage:</strong> Tirzepatide is typically administered as a subcutaneous injection once weekly. Dosages range from 5 mg to 15 mg, depending on patient response and treatment goals. It is often titrated up to avoid gastrointestinal side effects.</p>
          
          <p><strong>Side Effects:</strong> Common side effects of tirzepatide include:<br>• Gastrointestinal: Nausea, vomiting, diarrhea, constipation<br>• Metabolic: Hypoglycemia (especially when used with insulin or sulfonylureas), decreased appetite<br>• Injection site reactions: Pain, swelling, or redness at the injection site<br>• Others: Fatigue, dizziness, potential for pancreatitis (rare)</p>
          
          <p><strong>Interactions:</strong> Tirzepatide may interact with medications affecting blood sugar levels, such as insulin or sulfonylureas, increasing the risk of hypoglycemia. It may also interact with drugs that delay gastric emptying, such as certain anticholinergics.</p>
          
          <p><strong>Composition:</strong><br>
          Tirzepatide (GIP and GLP-1 receptor agonist): 10mg<br>
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
      </style>`,
  },
  {
    id: "fatburn-deus-001",
    name: "DEUS CLENOMED 40",
    description: "Clenbuterol HCL 40mcg",
    price: 11.0,
    image: "/products/deus fat burn/DEUS CLENOMED 40.png",
    category: "FAT BURN",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CLENOMED 40</h1>
        <h2 class="chemical-description">Clenbuterol HCL</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 21898-19-1</p>
          <p><strong>Molecular Weight:</strong> 313.65 g/mol</p>
          <p><strong>Formula:</strong> C12H19Cl3N2O</p>
          
          <p><strong>Overview:</strong> CLENOMED 40 (Clenbuterol HCL) is a bronchodilator, which is used as a medication for the treatment of reversible airway obstruction such as asthma and certain cases of chronic obstructive pulmonary disease. It comes as clenbuterol 40mcg tablets which contain clenbuterol hydrochloride 40mcg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Clenbuterol is a beta-2 agonist. That is, it stimulates the beta-2 receptors which results in opening the airways and relaxing the airway muscles. This is why clenbuterol HCL is used as a decongestant and bronchodilator. Its effects also make it suitable for use in asthmatic patients and those with COPD.</p>
          
          <p><strong>Dosage:</strong> Recommended dosage in the treatment of asthma is 20 - 30 mcg per day.</p>
          
          <p><strong>Side Effects:</strong> Side effects include anxiety, tremors, headaches, excessive sweating, fever, palpitations or irregular heartbeat.</p>
          
          <p><strong>Interactions:</strong> Clenbuterol is known to interact with thiazides, spironolactone, theophylline, amphotericin B, corticosteroids, and clozapine. This list is not exhaustive, hence, ensure you share any medications you are using, including herbal products and supplements with your doctor before using clenbuterol.</p>
          
          <p><strong>Composition:</strong><br>
          Clenbuterol HCL: 40mcg<br>
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
      </style>`,
  },
  {
    id: "fatburn-deus-002",
    name: "DEUS CYTOMED 25",
    description: "Liothyronine Sodium T3",
    price: 12.0,
    image: "/products/deus fat burn/DEUS CYTOMED 25.png",
    category: "FAT BURN",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CYTOMED 25</h1>
        <h2 class="chemical-description">Liothyronine Sodium (T3)</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 6893-02-3</p>
          <p><strong>Molecular Weight:</strong> 672.96 g/mol</p>
          <p><strong>Formula:</strong> C15H11I3NNaO4</p>
          
          <p><strong>Overview:</strong> CYTOMED 25 (Liothyronine Sodium (T3)) is a synthetic variant of the human body's thyroid hormone. This medicine is used to treat hypothyroidism and myxedema coma. When combined with other drugs, Liothyronine Sodium T3 can be very effective in the treatment of major depressive disorders. It is manufactured as 25mcg tablets that contain 25mcg of Liothyronine Sodium and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Liothyronine is produced from Triiodothyronine (T3) and it exerts similar effects. It acts on body cells to increase the basal metabolic rate, increase the synthesis of protein and also make cells more receptive to the effects of catecholamines. Liothyronine has a swift onset of action.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Weight loss, nausea and vomiting, tremors, headache, excessive sweating, stomach upset, and sensitivity to heat.</p>
          
          <p><strong>Interactions:</strong> Sodium Iodide, heparin antithrombin, protamine, enoxaparin.</p>
          
          <p><strong>Composition:</strong><br>
          Liothyronine Sodium: 25 mcg<br>
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
      </style>`,
  },
  {
    id: "fatburn-deus-003",
    name: "DEUS THYROMED 50",
    description: "Levothyroxine Sodium T4",
    price: 9.0,
    image: "/products/deus fat burn/DEUS THYROMED 50.png",
    category: "FAT BURN",
    brand: "deus",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS THYROMED 50</h1>
        <h2 class="chemical-description">Levothyroxine Sodium (T4)</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 55-03-8</p>
          <p><strong>Molecular Weight:</strong> 799.86 g/mol</p>
          <p><strong>Formula:</strong> C15H11I4NNaO4+</p>
          
          <p><strong>Overview:</strong> THYROMED 50 (Levothyroxine Sodium (T4)) is a man-made form of the thyroid hormone. It is used to treat hypothyroidism. It is also used to treat or prevent goitre (enlarged thyroid gland), which can be caused by hormone imbalances, radiation treatment, surgery, or cancer. THYROMED 50 is manufactured as 50mcg tablets that contain 50mcg of levothyroxine sodium (T4) and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Levothyroxine is made from thyroxine, the naturally occurring thyroid hormone. It acts to increase the metabolic rate of cells and tissues in the body, maintain brain function, metabolize food, and regulate temperature. It acts on thyroid hormone receptors, (thyroid hormone response elements) to exert its effects. Even though T4 is the major hormone produced in the thyroid gland, the majority of it is converted to T3 which exerts the physiologic effects that are observed.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Hyperthyroidism, palpitations, nausea, insomnia, weight loss, hypertension, increased appetite.</p>
          
          <p><strong>Interactions:</strong> Antacids, cholestyramine, calcium carbonate, ketamine, tricyclic antidepressants, colestipol.</p>
          
          <p><strong>Composition:</strong><br>
          Levothyroxine Sodium (T4): 50mcg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-001",
    name: "DEUS ARIMIMED 1",
    description: "Anastrozole 1mg",
    price: 27.0,
    image: "/products/deus post cycle/DEUS ARIMIMED 1.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ARIMIMED 1</h1>
        <h2 class="chemical-description">Anastrozole</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 120511-73-1</p>
          <p><strong>Molecular Weight:</strong> 293.36 g/mol</p>
          <p><strong>Formula:</strong> C17H19N5</p>
          
          <p><strong>Overview:</strong> ARIMIMED 1 (Anastrozole) is a drug used in breast cancer treatment after menopause. It comes as anastrozole 1mg tablets which contain 1mg of anastrozole and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Anastrozole is a breast cancer drug that belongs to the class of third-generation nonsteroidal (Type II) aromatase inhibitors. Most breast cancers grow faster due to the presence of a hormone called estrogen. Aromatase is an enzyme that helps in the production of estrogen. Anastrozole inhibits the activity of aromatase, which consequently prevents estrogen formation, leading to a slowing down or reversal of breast cancer growth. Anastrozole has a half-life of 50 hours.</p>
          
          <p><strong>Dosage:</strong> 1mg orally, once daily. However, consult your doctor before taking this medication.</p>
          
          <p><strong>Side Effects:</strong> Mild side effects may include hot flushes, low mood, difficulty sleeping, bone pain, palpitations and headaches. However, these symptoms improve gradually as your body adapts to the medication. Some serious side effects include blurry vision, liver problems, kidney problems, and purple spots on the skin (due to bleeding under the skin). See a doctor immediately if you experience any of these.</p>
          
          <p><strong>Interactions:</strong> Anastrozole interacts with very few medicines. However, avoid hormonal replacement therapy (HRT), herbal medications, or supplements while taking anastrozole.</p>
          
          <p><strong>Composition:</strong><br>
          Anastrozole: 1mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-002",
    name: "DEUS AROMAMED 25",
    description: "Exemestane 25mg",
    price: 30.0,
    image: "/products/deus post cycle/DEUS AROMAMED 25.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS AROMAMED 25</h1>
        <h2 class="chemical-description">Exemestane</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 107868-30-4</p>
          <p><strong>Molecular Weight:</strong> 296.40 g/mol</p>
          <p><strong>Formula:</strong> C20H24O2</p>
          
          <p><strong>Overview:</strong> AROMAMED 25 (Exemestane) is a drug used in breast cancer treatment after menopause. It has also been found to significantly reduce the risk of breast cancer in high-risk women. It comes as an exemstane 25mg tablet which contains 25mg of exemstane and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Exemestane is a breast cancer drug that belongs to the class of steroidal (Type I) aromatase Inhibitors. Some breast cancers grow faster due to the presence of a hormone called estrogen. Aromatase is an enzyme that helps in the production of estrogen. Exemestane inhibits the activity of aromatase, which consequently prevents estrogen formation, leading to a slowing down or reversal of breast cancer growth. Exemestane has a half-life of 24 hours.</p>
          
          <p><strong>Dosage:</strong> 25mg orally, once daily. However, consult your doctor before taking this medication.</p>
          
          <p><strong>Side Effects:</strong> Side effects may include hot flashes, excess sweating, headaches, nausea and vomiting, difficulty sleeping, low mood, vision changes, shortness of breath, or chest pain.</p>
          
          <p><strong>Interactions:</strong> Interactions may occur with estrogen and estrogen blockers, ivacaftor, and idelalisib. This list is not exhaustive, hence, ensure you share any medications you are using, including herbal products and supplements with your doctor before using exemestane.</p>
          
          <p><strong>Composition:</strong><br>
          Exemestane: 25mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-003",
    name: "DEUS CABERMED 0.5",
    description: "Cabergoline 0.5mg",
    price: 60.0,
    image: "/products/deus post cycle/DEUS CABERMED 0.5.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CABERMED 0.5</h1>
        <h2 class="chemical-description">Cabergoline</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 81409-90-7</p>
          <p><strong>Molecular Weight:</strong> 451.61 g/mol</p>
          <p><strong>Formula:</strong> C26H37N5O2</p>
          
          <p><strong>Overview:</strong> CABERMED 0.5 (Cabergoline) belongs to a class of drugs called dopamine agonists. It is used to treat disorders of excess prolactin production, and can also be used to manage Parkinson's syndrome. It is manufactured as Cabergoline 0.5mg tablets which contain 0.5mg Carbegoline and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cabergoline is a dopamine agonist, and it acts on the dopaminergic receptors (most active on D2) to cause the secretion of dopamine. Dopamine is a neurotransmitter that inhibits prolactin production in the pituitary gland. Its half-life ranges from 63 - 69 hours.</p>
          
          <p><strong>Dosage:</strong> 0.25mg orally twice a week.</p>
          
          <p><strong>Side Effects:</strong> Nausea, vomiting, constipation, insomnia, depression, hypotension, peripheral edema, arrhythmias.</p>
          
          <p><strong>Interactions:</strong> Ergot derivatives, antipsychotics, metoclopramide, antihypertensives.</p>
          
          <p><strong>Composition:</strong><br>
          Cabergoline: 0.5mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-004",
    name: "DEUS CLOMIMED 50",
    description: "Clomiphene Citrate 50mg",
    price: 21.0,
    image: "/products/deus post cycle/DEUS CLOMIMED 50.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CLOMIMED 50</h1>
        <h2 class="chemical-description">Clomiphene Citrate</h2>
        <div class="product-description">
          <p><strong>CAS registry number:</strong> 50-41-9</p>
          <p><strong>Molecular Weight:</strong> 598.08 g/mol</p>
          <p><strong>Formula:</strong> C32H36ClNO8</p>
          
          <p><strong>Overview:</strong> CLOMIMED 50 (Clomiphene Citrate) is a medication used to treat ovulation disorders such as polycystic ovarian syndrome. It is manufactured as Clomiphene Citrate 50mg tablets which contain 50mg of Clomiphene citrate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Clomiphene is a Selective Estrogen Receptor Modulator. It acts on the hypothalamus to cause an increase in follicle stimulating hormone and luteinizing hormone which results in ovulation. Hence it is used for people experiencing anovulation. It also acts to increase testosterone levels in men.</p>
          
          <p><strong>Dosage:</strong> 50mg orally for 5 days.</p>
          
          <p><strong>Side Effects:</strong> Ovarian hyperstimulation syndrome, blurred vision, abnormal vaginal bleeding, mood changes.</p>
          
          <p><strong>Interactions:</strong> Gonadorelin.</p>
          
          <p><strong>Composition:</strong><br>
          Clomiphene citrate: 50mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-005",
    name: "DEUS ENCLOMIMED 25",
    description: "Enclomiphene Citrate 25mg",
    price: 60.0,
    image: "/products/deus post cycle/DEUS ENCLOMIMED 25.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS ENCLOMIMED 25</h1>
        <h2 class="chemical-description">Enclomiphene Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 15690-57-0</p>
          <p><strong>Molecular Weight:</strong> 405.97 g/mol</p>
          <p><strong>Formula:</strong> C26H28ClNO</p>
          
          <p><strong>Overview:</strong> ENCLOMIMED 25 (Enclomiphene Citrate) is a drug derived from clomiphene citrate and is used to treat men with low testosterone from secondary hypogonadotropic hypogonadism. It is produced as 25mg tablets which contain Enclomiphene 25mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Encomiphene is a non-steroidal estrogen receptor antagonist that promotes gonadotropin-dependent testosterone secretion by the testes. It inhibits the estrogen receptors in the pituitary gland, which disrupts the negative feedback normally given by estrogen. This would then cause an increase in gonadotropin secretion. This gonadotropin secretion would cause the testes to produce testosterone.</p>
          
          <p><strong>Dosage:</strong> 25mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Headache, nausea, diarrhea, dizziness, hot flushes.</p>
          
          <p><strong>Interactions:</strong> Codeine, curcumin, cyclosporine, fluoroestradiol, bexarotene.</p>
          
          <p><strong>Composition:</strong><br>
          Enclomiphene citrate: 25mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-006",
    name: "DEUS EVIMED 60",
    description: "Raloxifene 60mg",
    price: 25.0,
    image: "/products/deus post cycle/DEUS EVIMED 60.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS EVIMED 60</h1>
        <h2 class="chemical-description">Raloxifene HCL</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 82640-04-8</p>
          <p><strong>Molecular Weight:</strong> 510.00 g/mol</p>
          <p><strong>Formula:</strong> C28H28ClNO4S</p>
          
          <p><strong>Overview:</strong> EVIMED 60 (Raloxifene HCL) is a drug used by women to prevent and treat bone loss (osteoporosis) after menopause. It slows down bone loss and helps to keep bones strong, making them less likely to break. EVIMED 60 may also lower the chance of getting a certain type of breast cancer after menopause. EVIMED 60 is manufactured as 60mg tablets containing Raloxifene HCL 60mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Raloxifene HCL belongs to a class of drugs known as selective estrogen receptor modulators-SERMs. It exhibits estrogenic activity in some tissues like the bone and liver, while it shows antiestrogenic activity in the breasts and uterus. In the bone, it increases bone density and that is why it is useful in treating osteoporosis. In the breast, it opposes estrogen activity, and this action is useful in the treatment and prevention of some types of breast cancers.</p>
          
          <p><strong>Dosage:</strong> 60mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Hot flashes, Leg cramps, blood clots, vaginal dryness.</p>
          
          <p><strong>Interactions:</strong> Estrogen, cholestyramine, tibolone, and colestipol.</p>
          
          <p><strong>Composition:</strong><br>
          Raloxifene HCL: 60mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-007",
    name: "DEUS FEMAMED 2.5",
    description: "Letrozole 2.5mg",
    price: 35.0,
    image: "/products/deus post cycle/DEUS FEMAMED 2.5.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS FEMAMED 2.5</h1>
        <h2 class="chemical-description">Letrozole</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 112809-51-5</p>
          <p><strong>Molecular Weight:</strong> 285.30 g/mol</p>
          <p><strong>Formula:</strong> C17H11N5</p>
          
          <p><strong>Overview:</strong> FEMAMED 2.5 (Letrozole) is a highly potent drug used in breast cancer treatment for postmenopausal women and can also be given to breast cancer patients who have been previously treated with tamoxifen. It comes as a letrozole 2.5mg tablet comprising 2.5mg of letrozole and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Letrozole as a breast cancer drug, belongs to the class of non-steroidal (Type II) aromatase Inhibitors. Some breast cancers grow faster due to the presence of a hormone called estrogen. Aromatase is an enzyme that helps in the production of estrogen. Letrozole stops the activity of aromatase, which consequently prevents estrogen formation, leading to a slowing down or reversal of breast cancer growth. Letrozole has a half-life of 42 hours.</p>
          
          <p><strong>Dosage:</strong> 2.5mg orally, once daily. However, consult your doctor before taking this medication.</p>
          
          <p><strong>Side Effects:</strong> Some commonly reported side effects of letrozole include excessive sweating, hot flashes, bone pain, cough, dyspnea, constipation, increased blood pressure, breast pain, nausea, and vomiting. Blurred vision and elevated liver enzymes are less frequently reported side effects.</p>
          
          <p><strong>Interactions:</strong> Serious interactions occur with estrogen and tamoxifen. Interactions can also occur with cholera vaccine, dengue vaccine, siponimod and some antiretroviral drugs. This list is not exhaustive, hence, ensure you share any medications you are using, including herbal products and supplements with your doctor before using letrozole.</p>
          
          <p><strong>Composition:</strong><br>
          Letrozole: 2.5mg<br>
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
      </style>`,
  },
  {
    id: "pct-deus-008",
    name: "DEUS NOLVAMED 20",
    description: "Tamoxifen Citrate 20mg",
    price: 23.0,
    image: "/products/deus post cycle/DEUS NOLVAMED 20.png",
    category: "POST CYCLE",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS NOLVAMED 20</h1>
        <h2 class="chemical-description">Tamoxifen Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 54965-24-1</p>
          <p><strong>Molecular Weight:</strong> 563.63 g/mol</p>
          <p><strong>Formula:</strong> C32H34NO8</p>
          
          <p><strong>Overview:</strong> NOLVAMED 20 (Tamoxifen Citrate) is a Selective Estrogen Receptor Modulator (SERM) which is used for the treatment of metastatic breast cancer, adjuvant treatment of breast cancer and for the palliative treatment of premenopausal women with ER-positive disease. NOLVAMED 20 is manufactured as 20mg tablets which contain Tamoxifen citrate 20mg and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> As a Selective Estrogen Receptor Modulator (SERM), tamoxifen inhibits estrogen, preventing it from binding to its receptor. By doing this, it can cause a decrease in tumour growth and proliferation. It also causes cell death in cells with estrogen receptors.</p>
          
          <p><strong>Dosage:</strong> 20mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Endometrial CA, liver disease, cardiovascular and metabolic disorders, postmenopausal bleeding, vision problems, stroke and pulmonary embolism.</p>
          
          <p><strong>Interactions:</strong> Butalbital, cimetidine, secobarbital, SSRI antidepressants, warfarin, hormonal contraceptives, antiseizure medications.</p>
          
          <p><strong>Composition:</strong><br>
          Tamoxifen citrate: 20mg<br>
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
      </style>`,
  },
  {
    id: "sexual-deus-001",
    name: "DEUS CIAMED 5",
    description: "Tadalafil 5mg",
    price: 20.0,
    image: "/products/deus sexual wellness/DEUS CIAMED 5.png",
    category: "SEXUAL WELLNESS",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS CIAMED 5</h1>
        <h2 class="chemical-description">Tadalafil</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 171596-29-5</p>
          <p><strong>Molecular Weight:</strong> 389.40 g/mol</p>
          <p><strong>Formula:</strong> C22H19N3O4</p>
          
          <p><strong>Overview:</strong> CIAMED 5 (Tadalafil) is used to treat erectile dysfunction (impotence) and symptoms of benign prostatic hypertrophy (enlarged prostate) and pulmonary arterial hypertension and improve exercise capacity in men and women. It is manufactured as 5mg tablets which contain 5mg of Tadalafil and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cyclic guanine monophosphate (cGMP) is needed for penile arteries and smooth muscles of the penis to relax for a man to have an erection. The amount of cGMP is reduced by an enzyme called phosphodiesterase type 5. Tadalafil inhibits this enzyme so that cyclic GMP can be more abundant leading to better and longer-lasting erection. It is this same mechanism of relaxing blood vessels and smooth muscles that also makes it useful in treating pulmonary arterial hypertension. Tadalafil has a half-life of 17.5 hours which is significantly longer than other drugs in the same category.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Headache, stomach upset, back pain, flushing, hypertension, fatigue, UTIs, indigestion, constipation and diarrhea.</p>
          
          <p><strong>Interactions:</strong> Riociguat, alpha-blockers, azole antifungals, macrolides, HIV protease inhibitors, rifampin.</p>
          
          <p><strong>Composition:</strong><br>
          Tadalafil: 5mg<br>
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
      </style>`,
  },
  {
    id: "sexual-deus-002",
    name: "DEUS PRILIMED 30",
    description: "Dapoxetine HCL 30mg",
    price: 15.0,
    image: "/products/deus sexual wellness/DEUS PRILIMED 30.png",
    category: "SEXUAL WELLNESS",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS PRILIMED 30</h1>
        <h2 class="chemical-description">Dapoxetine HCL</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 119356-77-3</p>
          <p><strong>Molecular Weight:</strong> 305.42 g/mol</p>
          <p><strong>Formula:</strong> C21H23NO</p>
          
          <p><strong>Overview:</strong> PRILIMED 30 (Dapoxetine HCL) is a selective serotonin reuptake inhibitor, for the treatment of premature ejaculation. In a phase II proof-of-concept study conducted by PPD, dapoxetine demonstrated a statistically significant increase in ejaculatory latency when compared to placebo. PRILIMED 30 is manufactured as 30mg tablets that contain 30mg of Dapoxetine HCL and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Dapoxetine is a selective serotonin reuptake inhibitor meaning it prevents serotonin from being taken up, thereby elongating its duration of action. Serotonin then delays the ejaculation, by its inhibitory action on the post synaptic cleft.</p>
          
          <p><strong>Dosage:</strong> 30mg daily taken orally.</p>
          
          <p><strong>Side Effects:</strong> Nausea, insomnia, headache, diarrhea, and dry mouth.</p>
          
          <p><strong>Interactions:</strong> PDE5 inhibitors, ethanol.</p>
          
          <p><strong>Composition:</strong><br>
          Dapoxetine HCL: 30mg<br>
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
      </style>`,
  },
  {
    id: "sexual-deus-003",
    name: "DEUS VIAMED 20",
    description: "Sildenafil Citrate 20mg",
    price: 11.0,
    image: "/products/deus sexual wellness/DEUS VIAMED 20.png",
    category: "SEXUAL WELLNESS",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">DEUS VIAMED 20</h1>
        <h2 class="chemical-description">Sildenafil Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 171599-83-0</p>
          <p><strong>Molecular Weight:</strong> 666.70 g/mol</p>
          <p><strong>Formula:</strong> C28H38N6O11S</p>
          
          <p><strong>Overview:</strong> VIAMED 20 (Sildenafil Citrate) is used to treat erectile dysfunction (impotence) and symptoms of benign prostatic hypertrophy (enlarged prostate) and pulmonary arterial hypertension and improve exercise capacity in men and women. It is manufactured as 20mg tablets that contain 20mg of Sildenafil Citrate and excipients.</p>
          
          <p><strong>Mechanism of Action:</strong> Cyclic guanine monophosphate (cGMP) is needed for penile arteries and smooth muscles of the penis to relax for a man to have an erection. The amount of cGMP is reduced by an enzyme called phosphodiesterase type 5. Sildenafil inhibits this enzyme so that cyclic GMP can be more abundant leading to better and longer-lasting erection. It is this same mechanism of relaxing blood vessels and smooth muscles that also makes it useful in treating pulmonary arterial hypertension.</p>
          
          <p><strong>Dosage:</strong> As prescribed by the physician.</p>
          
          <p><strong>Side Effects:</strong> Headache, stomach upset, back pain, blurred vision, cyanopsia, flushing, hypertension, fatigue, UTIs, indigestion, constipation and diarrhea.</p>
          
          <p><strong>Interactions:</strong> Riociguat, alpha-blockers, azole antifungals, macrolides, HIV protease inhibitors, rifampin, organic nitrites and nitrates.</p>
          
          <p><strong>Composition:</strong><br>
          Sildenafil Citrate: 20mg<br>
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
      </style>`,
  },
  {
    id: "amino-deus-001",
    name: "Deus BCAA Complex",
    description: "Verzweigtkettige Aminosäuren",
    price: 28.99,
    image: "/products/deus-bcaa.jpg",
    category: "AMINO ACIDS",
    brand: "deus",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">Deus BCAA Complex</h1>
        <h2 class="chemical-description">Verzweigtkettige Aminosäuren (Leucin, Isoleucin, Valin)</h2>
        <div class="product-description">
          <p><strong>Overview:</strong> BCAA Complex contains branched-chain amino acids (Leucin, Isoleucin, Valin) which are essential amino acids that cannot be produced by the body and must be obtained through diet or supplementation. BCAAs are particularly important for muscle protein synthesis and recovery.</p>
          
          <p><strong>Mechanism of Action:</strong> BCAAs bypass liver metabolism and go directly to muscle tissue where they can be used for energy during exercise or to build new muscle proteins. They stimulate protein synthesis and reduce protein breakdown, leading to improved muscle recovery and growth.</p>
          
          <p><strong>Benefits:</strong> Enhanced muscle recovery, reduced muscle soreness, improved exercise performance, and support for lean muscle mass maintenance.</p>
          
          <p><strong>Dosage:</strong> As recommended by healthcare professional or according to product labeling.</p>
          
          <p><strong>Composition:</strong><br>
          Leucin: Variable<br>
          Isoleucin: Variable<br>
          Valin: Variable<br>
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
          background: transparent !important;
          border-radius: 0;
          box-shadow: none !important;
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
          background: #f9fafb !important;
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
      </style>`,
  },

  // ================================
  // INJECTABLE - ASTERA PRODUCTS
  // ================================
  {
    id: "inj-astera-001",
    name: "ASTERA BACTERIOSTATIC WATER",
    description: "Bacteriostatic Water",
    price: 10.0,
    image: "/products/astera inject/ASTERA BACTERIOSTATIC WATER.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA BACTERIOSTATIC WATER</h1>
        <h2 class="chemical-description">Bacteriostatic Water</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 100-51-6</p>
          <p><strong>Molecular Weight:</strong> 108.14 g/mol</p>
          <p><strong>Formula:</strong> C7H8O</p>
          
          <p><strong>Overview:</strong> Sterile water for injection with 0.9% benzyl alcohol that acts as an bacteriostatic preservative. A bacteriostatic preservative is added to bacteriostatic water for injection to prevent the growth of microorganisms.</p>
          
          <p><strong>Mechanism of Action:</strong> Bacteriostatic water contains benzyl alcohol as a preservative, which disrupts bacterial cell membranes and inhibits bacterial growth. It provides a sterile medium for reconstituting and diluting injectable medications while preventing contamination.</p>
          
          <p><strong>Dosage:</strong> Use it for reconstitution of lyophilized drugs or as a diluent or solvent for various parenteral preparations.</p>
          
          <p><strong>Side Effects:</strong> Side effects are rare but may include injection site irritation, allergic reactions to benzyl alcohol, or contamination if not used under sterile conditions. Generally considered very safe when used properly.</p>
          
          <p><strong>Composition:</strong><br>
          Bacteriostatic Water (Sterilized water for: injections)<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-002",
    name: "ASTERA BOLDENONE ACETATE 50",
    description: "Boldenone Acetate",
    price: 35.0,
    image: "/products/astera inject/ASTERA BOLDENONE ACETATE 50.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA BOLDENONE ACETATE 50</h1>
        <h2 class="chemical-description">Boldenone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 2363-59-9</p>
          <p><strong>Molecular Weight:</strong> 286.41 g/mol</p>
          <p><strong>Formula:</strong> C19H26O2</p>
          
          <p><strong>Overview:</strong> Boldenone is a steroid derived from testosterone in which the 1,2 double bond has been added, the result is a steroid with an anabolic rating equal to that of testosterone and an androgenic rating that is 50% lower. Another great feature of Boldenone is the fact that it increases appetite and red blood cell count.</p>
          
          <p><strong>Mechanism of Action:</strong> Boldenone is an anabolic-androgenic steroid that binds to androgen receptors in muscle tissue, promoting protein synthesis and nitrogen retention. It increases red blood cell production through enhanced erythropoietin synthesis, improving oxygen delivery to muscles and enhancing athletic performance.</p>
          
          <p><strong>Dosage:</strong> Common doses are usually 400 to 600mg per week, but doses as high as 800mg or 1000mg per week are normal depending on the user's experience. Being the short ester version we recommend injecting ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include increased appetite, acne, oily skin, hair loss in predisposed individuals, increased red blood cell count, mild suppression of natural testosterone production, potential cardiovascular strain, and possible virilization in women. May cause injection site irritation.</p>
          
          <p><strong>Composition:</strong><br>
          Boldenone Acetate: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-003",
    name: "ASTERA BOLDENONE CYPIONATE 200",
    description: "Boldenone Cypionate",
    price: 40.0,
    image: "/products/astera inject/ASTERA BOLDENONE CYPIONATE 200.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA BOLDENONE CYPIONATE 200</h1>
        <h2 class="chemical-description">Boldenone Cypionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 106505-90-2</p>
          <p><strong>Molecular Weight:</strong> 398.58 g/mol</p>
          <p><strong>Formula:</strong> C26H38O3</p>
          
          <p><strong>Overview:</strong> Boldenone is a steroid derived from testosterone in which the 1,2 double bond has been added, the result is a steroid with an anabolic rating equal to that of testosterone and an androgenic rating that is 50% lower. Another great feature of Boldenone is the fact that it increases appetite and red blood cell count.</p>
          
          <p><strong>Mechanism of Action:</strong> Boldenone is an anabolic-androgenic steroid that binds to androgen receptors in muscle tissue, promoting protein synthesis and nitrogen retention. It increases red blood cell production through enhanced erythropoietin synthesis, improving oxygen delivery to muscles and enhancing athletic performance.</p>
          
          <p><strong>Dosage:</strong> Common doses are usually 400 to 600mg per week, but doses as high as 800mg or 1000mg per week are normal depending on the user's experience. Since it has a medium ester we recommend injecting it EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include increased appetite, acne, oily skin, hair loss in predisposed individuals, increased red blood cell count, mild suppression of natural testosterone production, potential cardiovascular strain, and possible virilization in women. May cause injection site irritation.</p>
          
          <p><strong>Composition:</strong><br>
          Boldenone Cypionate: 200mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-004",
    name: "ASTERA BOLDENONE UNDECYLENATE 300",
    description: "Boldenone Undecylenate",
    price: 43.0,
    image: "/products/astera inject/ASTERA BOLDENONE UNDECYLENATE 300.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA BOLDENONE UNDECYLENATE 300</h1>
        <h2 class="chemical-description">Boldenone Undecylenate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 13103-34-9</p>
          <p><strong>Molecular Weight:</strong> 452.67 g/mol</p>
          <p><strong>Formula:</strong> C30H44O3</p>
          
          <p><strong>Overview:</strong> Boldenone is a steroid derived from testosterone in which the 1,2 double bond has been added, the result is a steroid with an anabolic rating equal to that of testosterone and an androgenic rating that is 50% lower. Another great feature of Boldenone is the fact that it increases appetite and red blood cell count.</p>
          
          <p><strong>Mechanism of Action:</strong> Boldenone is an anabolic-androgenic steroid that binds to androgen receptors in muscle tissue, promoting protein synthesis and nitrogen retention. It increases red blood cell production through enhanced erythropoietin synthesis, improving oxygen delivery to muscles and enhancing athletic performance.</p>
          
          <p><strong>Dosage:</strong> Common doses are usually 400 to 600mg per week, but doses as high as 800mg or 1000mg per week are normal depending on the user's experience. Since it has a long ester we recommend injecting it EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include increased appetite, acne, oily skin, hair loss in predisposed individuals, increased red blood cell count, mild suppression of natural testosterone production, potential cardiovascular strain, and possible virilization in women. May cause injection site irritation.</p>
          
          <p><strong>Composition:</strong><br>
          Boldenone Undecylenate: 300mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-005",
    name: "ASTERA DIHYDROBOLDENONE 100",
    description: "Dihydroboldenone",
    price: 50.0,
    image: "/products/astera inject/ASTERA DIHYDROBOLDENONE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA DIHYDROBOLDENONE 100</h1>
        <h2 class="chemical-description">Dihydroboldenone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 65-06-5</p>
          <p><strong>Molecular Weight:</strong> 288.43 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Dihydroboldenone also known as 1-Test Cyp is the 5a-reduced metabolite of boldenone (Equipoise). It cannot aromatize to estrogen, making it a very "dry" compound. Like all DHT derivatives, it does not convert to estrogen or progesterone, which makes it an ideal compound for cutting cycles and for those who are sensitive to estrogen-related side effects.</p>
          
          <p><strong>Mechanism of Action:</strong> Dihydroboldenone (1-testosterone) is a potent anabolic steroid that binds to androgen receptors with high affinity, promoting lean muscle mass gain and strength increases. It exhibits strong anabolic effects with reduced androgenic side effects compared to testosterone.</p>
          
          <p><strong>Dosage:</strong> Typically DHB is run from 300-800mg per week depending on the user's experience. Being a long ester we recommend injecting it EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Side effects may include hair loss in predisposed individuals, acne, increased aggression, suppression of natural testosterone production, potential liver stress, cardiovascular strain, and possible virilization in women. Generally considered to have fewer estrogenic side effects.</p>
          
          <p><strong>Composition:</strong><br>
          Dihydroboldenone: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-006",
    name: "ASTERA DROSTANOLONE ENANTHATE 200",
    description: "Drostanolone Enanthate",
    price: 50.0,
    image: "/products/astera inject/ASTERA DROSTANOLONE ENANTHATE 200.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA DROSTANOLONE ENANTHATE 200</h1>
        <h2 class="chemical-description">Drostanolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Drostanolone also known as Masteron is one of the most classic and cosmetic steroids in existence. Structurally, Drostanolone is DHT with an added methyl group at the carbon 2 position, which greatly increases the anabolic power of the hormone. This steroid is most commonly used during cutting cycles when lean mass retention and fat loss are desired, and when cosmetic conditioning is the primary concern.</p>
          
          <p><strong>Mechanism of Action:</strong> Drostanolone is a DHT-derived anabolic steroid that binds to androgen receptors, promoting muscle hardness and density while reducing subcutaneous water retention. It acts as an anti-estrogenic compound, helping to create a dry, defined physique.</p>
          
          <p><strong>Dosage:</strong> Normal doses range from 200 to 600mg per week. Being a long ester we recommend injecting it EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include hair loss in predisposed individuals, acne, increased aggression, suppression of natural testosterone production, potential cardiovascular strain, joint discomfort due to drying effects, and virilization in women. May cause injection site irritation.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-007",
    name: "ASTERA DROSTANOLONE PROPIONATE 100",
    description: "Drostanolone Propionate",
    price: 40.0,
    image: "/products/astera inject/ASTERA DROSTANOLONE PROPIONATE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA DROSTANOLONE PROPIONATE 100</h1>
        <h2 class="chemical-description">Drostanolone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Drostanolone also known as Masteron is one of the most classic and cosmetic steroids in existence. Structurally, Drostanolone is DHT with an added methyl group at the carbon 2 position, which greatly increases the anabolic power of the hormone. This steroid is most commonly used during cutting cycles when lean mass retention and fat loss are desired, and when cosmetic conditioning is the primary concern.</p>
          
          <p><strong>Mechanism of Action:</strong> Drostanolone is a DHT-derived anabolic steroid that binds to androgen receptors, promoting muscle hardness and density while reducing subcutaneous water retention. It acts as an anti-estrogenic compound, helping to create a dry, defined physique.</p>
          
          <p><strong>Dosage:</strong> Normal doses range from 200 to 600mg per week. Being a short ester we recommend injecting it ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include hair loss in predisposed individuals, acne, increased aggression, suppression of natural testosterone production, potential cardiovascular strain, joint discomfort due to drying effects, and virilization in women. May cause injection site irritation.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-008",
    name: "ASTERA LGD-4033 60",
    description: "Ligandrol",
    price: 50.0,
    image: "/products/astera inject/ASTERA LGD-4033 60.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA LGD-4033 60</h1>
        <h2 class="chemical-description">Ligandrol</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1165910-22-4</p>
          <p><strong>Molecular Weight:</strong> 338.25 g/mol</p>
          <p><strong>Formula:</strong> C14H12F6N2O</p>
          
          <p><strong>Overview:</strong> Ligandrol is a SARM that provides muscle growth similar to steroids, but without the side effects typically associated with anabolic steroids, making it a popular alternative. It is also useful for osteoporosis, muscle wasting, and improving overall physical function in older adults. It increases lean body mass and strength. And as the most anabolic of all SARMs, it offers unique benefits.</p>
          
          <p><strong>Mechanism of Action:</strong> Ligandrol (LGD-4033) is a selective androgen receptor modulator (SARM) that selectively binds to androgen receptors in muscle and bone tissue. It promotes anabolic effects like muscle growth and bone strengthening while minimizing androgenic side effects in other tissues.</p>
          
          <p><strong>Dosage:</strong> The most used doses are usually from 5mg to 10mg per day. And cycles usually last from 8 to 12 weeks. Being an oil-based SARM we can inject it or we can take it orally.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects include mild suppression of natural testosterone production, fatigue, headaches, nausea, and potential liver stress with prolonged use. Generally considered to have fewer side effects than traditional anabolic steroids.</p>
          
          <p><strong>Composition:</strong><br>
          Ligandrol: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-009",
    name: "ASTERA LONG ACTING MIX 500",
    description:
      "Drostanolone Enanthate, Testosterone Enanthate, Trenbolone Enanthate",
    price: 90.0,
    image: "/products/astera inject/ASTERA LONG ACTING MIX 500.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA LONG ACTING MIX 500</h1>
        <h2 class="chemical-description">Drostanolone Enanthate, Testosterone Enanthate, Trenbolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> This product is a complete cutting cycle in a vial, it contains testosterone, masteron and trenbolone.</p>
          
          <p><strong>Mechanism of Action:</strong> Drostanolone is a DHT-derived anabolic steroid that binds to androgen receptors, promoting muscle hardness and density while reducing subcutaneous water retention. It acts as an anti-estrogenic compound, helping to create a dry, defined physique.</p>
          
          <p><strong>Dosage:</strong> Dosages will depend on the user and goals, 2ml a week would be enough for most users. Since it is a combination of long esters, we recommend injecting EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include hair loss in predisposed individuals, acne, increased aggression, suppression of natural testosterone production, potential cardiovascular strain, joint discomfort due to drying effects, and virilization in women. May cause injection site irritation.</p>
          
          <p><strong>Composition:</strong><br>
          Drostanolone Enanthate: 200mg, Testosterone Enanthate: 200mg, Trenbolone Enanthate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-010",
    name: "ASTERA METHANDIENONE 100",
    description: "Methandienone",
    price: 36.0,
    image: "/products/astera inject/ASTERA METHANDIENONE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHANDIENONE 100</h1>
        <h2 class="chemical-description">Methandienone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 72-63-9</p>
          <p><strong>Molecular Weight:</strong> 300.44 g/mol</p>
          <p><strong>Formula:</strong> C20H28O2</p>
          
          <p><strong>Overview:</strong> Methandienone also known as Dianabol is an oral steroid that's very popular for bulking cycles. Gains in terms of weight and strength occur very quickly, mostly thanks to its ability to dramatically increase nitrogen retention and protein synthesis, plus increase glycogen storage. Being an injectable version, its absorption will be greater, and as it lacks ester, its absorption will be almost as fast as the oral version.</p>
          
          <p><strong>Mechanism of Action:</strong> Methandienone (Dianabol) is an anabolic steroid that binds to androgen receptors and enhances protein synthesis, glycogenolysis, and nitrogen retention. It rapidly increases muscle mass and strength through enhanced cellular uptake of amino acids and improved recovery.</p>
          
          <p><strong>Dosage:</strong> The most common doses range from 25 to 50mg per day. Although it is injectable, we would use the same protocol that is used with the oral version. We recommend using it for a maximum of 4-6 weeks.</p>
          
          <p><strong>Side Effects:</strong> Side effects include significant water retention, gynecomastia, acne, oily skin, hair loss, liver stress, high blood pressure, cholesterol imbalances, suppression of natural testosterone production, mood swings, and potential virilization in women.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-011",
    name: "ASTERA METHENOLONE ENANTHATE 100",
    description: "Methenolone Enanthate",
    price: 59.0,
    image: "/products/astera inject/ASTERA METHENOLONE ENANTHATE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHENOLONE ENANTHATE 100</h1>
        <h2 class="chemical-description">Methenolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 153-00-4</p>
          <p><strong>Molecular Weight:</strong> 302.45 g/mol</p>
          <p><strong>Formula:</strong> C20H30O2</p>
          
          <p><strong>Overview:</strong> Methenolone Enanthate is one of the most famous and widely used steroids on the market, in part due to its lack of side effects. It is a useful steroid both in volume and during a cutting phase, since as it lacks side effects it can be added to any cycle to improve its potency.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> The doses that can be used without risk or with mild side effects are very high, and it is usually used from 400mg weekly to what your pocket can allow. Cycles are usually long, typically 14 to 20 weeks. I recommend injecting EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-012",
    name: "ASTERA METHENOLONE ENANTHATE 200",
    description: "Methenolone Enanthate",
    price: 110.0,
    image: "/products/astera inject/ASTERA METHENOLONE ENANTHATE 200.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHENOLONE ENANTHATE 200</h1>
        <h2 class="chemical-description">Methenolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 153-00-4</p>
          <p><strong>Molecular Weight:</strong> 302.45 g/mol</p>
          <p><strong>Formula:</strong> C20H30O2</p>
          
          <p><strong>Overview:</strong> Methenolone Enanthate is one of the most famous and widely used steroids on the market, in part due to its lack of side effects. It is a useful steroid both in volume and during a cutting phase, since as it lacks side effects it can be added to any cycle to improve its potency.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> The doses that can be used without risk or with mild side effects are very high, and it is usually used from 400mg weekly to what your pocket can allow. Cycles are usually long, typically 14 to 20 weeks. I recommend injecting EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Methenolone Enanthate: 200mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-013",
    name: "ASTERA METHYLDROSTANOLONE 40 40mg/ml",
    description: "Methyldrostanolone",
    price: 40.0,
    image: "/products/astera inject/ASTERA METHYLDROSTANOLONE 40 40mg/ml.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHYLDROSTANOLONE 40 40mg/ml</h1>
        <h2 class="chemical-description">Methyldrostanolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Methyldrosnanolone also known as Superdrol is the most powerful oral steroid in existence. It is a methylated modification of drostanolone, but it does not look like it, it has a high anabolic and androgenic power, and can be used in volume, cut or in strength stages and just like Anadrol saturates glycogen deposits. It is a very hepatotoxic steroid, but its injectable version makes it more tolerable.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> A dose of 10mg is already very effective, but doses of up to 40-50mg per day are often used. We recommend using it for a maximum of 4 weeks and injecting it once a day, ED. It should be used in conjunction with a liver protector such as TUDCA.</p>
          
          <p><strong>Side Effects:</strong> Side effects include liver toxicity, acne, hair loss, increased aggression, suppression of natural testosterone production, cardiovascular strain, joint discomfort, and virilization in women. Regular liver function monitoring is essential.</p>
          
          <p><strong>Composition:</strong><br>
          Methyldrostanolone: 40mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-014",
    name: "ASTERA NANDROLONE DECANOATE 300",
    description: "Nandrolone Decanoate",
    price: 45.0,
    image: "/products/astera inject/ASTERA NANDROLONE DECANOATE 300.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA NANDROLONE DECANOATE 300</h1>
        <h2 class="chemical-description">Nandrolone Decanoate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Nandrolone is a widely used steroid belonging to the 19 nors family. 19-Nors are generally characterized by their anabolism and progestogenic activity. They are very anabolic, but they also exhibit significant amounts of satellite interaction with other receptors in the body. The most notable being their interaction with the Progesterone receptor. 19-Nor derived progestins are agonists of the Progesterone receptor, which means that they can bind to the Progesterone receptor and activate it. Nandrolone causes a reduction in the ability to perceive pain (which increase is confused with a healing effect) and can also be reduced to DHN, DHN can displace DHT from its receptors causing several side effects, among which mood swings stand out and absence of erections, this can be remedied using Masteron, Proviron or some other steroid that reacts directly with the androgen receptor through DHT.</p>
          
          <p><strong>Mechanism of Action:</strong> Nandrolone is an anabolic steroid that binds to androgen receptors, promoting protein synthesis and collagen synthesis. It enhances nitrogen retention, increases bone density, and stimulates red blood cell production while having lower androgenic effects than testosterone.</p>
          
          <p><strong>Dosage:</strong> Normal doses are usually 200 to 400 mg per week for beginners and intermediate athletes, with the possibility of using 800 per week for specific or competitive purposes. Since it has a long ester it is recommended to inject it EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include water retention, potential gynecomastia, acne, hair loss, suppression of natural testosterone production, potential cardiovascular strain, mood changes, and virilization in women. May cause "deca dick" (erectile dysfunction).</p>
          
          <p><strong>Composition:</strong><br>
          Nandrolone Decanoate: 300mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-015",
    name: "ASTERA NANDROLONE PHENYLPROPIONATE 100 100mg/ml",
    description: "Nandrolone phenylpropionate",
    price: 30.0,
    image:
      "/products/astera inject/ASTERA NANDROLONE PHENYLPROPIONATE 100 100mg/ml.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA NANDROLONE PHENYLPROPIONATE 100 100mg/ml</h1>
        <h2 class="chemical-description">Nandrolone phenylpropionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Nandrolone is a widely used steroid belonging to the 19 nors family. 19-Nors are generally characterized by their anabolism and progestogenic activity. They are very anabolic, but they also exhibit significant amounts of satellite interaction with other receptors in the body. The most notable being their interaction with the Progesterone receptor. 19-Nor derived progestins are agonists of the Progesterone receptor, which means that they can bind to the Progesterone receptor and activate it. Nandrolone causes a reduction in the ability to perceive pain (which increase is confused with a healing effect) and can also be reduced to DHN, DHN can displace DHT from its receptors causing several side effects, among which mood swings stand out and absence of erections, this can be remedied using Masteron, Proviron or some other steroid that reacts directly with the androgen receptor through DHT.</p>
          
          <p><strong>Mechanism of Action:</strong> Nandrolone is an anabolic steroid that binds to androgen receptors, promoting protein synthesis and collagen synthesis. It enhances nitrogen retention, increases bone density, and stimulates red blood cell production while having lower androgenic effects than testosterone.</p>
          
          <p><strong>Dosage:</strong> Normal doses are usually 200 to 400 mg per week for beginners and intermediate athletes, with the possibility of using 800 per week for specific or competitive purposes. Since it has a short ester it is recommended to inject it ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include water retention, potential gynecomastia, acne, hair loss, suppression of natural testosterone production, potential cardiovascular strain, mood changes, and virilization in women. May cause injection site irritation.</p>
          
          <p><strong>Composition:</strong><br>
          Nandrolone phenylpropionate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-016",
    name: "ASTERA OXYMETHOLONE 50",
    description: "Oxymetholone",
    price: 25.0,
    image: "/products/astera inject/ASTERA OXYMETHOLONE 50.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA OXYMETHOLONE 50</h1>
        <h2 class="chemical-description">Oxymetholone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-07-1</p>
          <p><strong>Molecular Weight:</strong> 332.48 g/mol</p>
          <p><strong>Formula:</strong> C21H32O3</p>
          
          <p><strong>Overview:</strong> Oxymetholone is one of the most widely used oral steroids on the market. It is normally used in bulking cycles due to the rapid gain in muscle mass it provides (in part thanks to the increase in glycogen stores), also due to this reason it provides a substantial increase in strength, due to this it is commonly used in powerlifting and strongman competitions. Its hepatotoxicity is not as high as rumored, relatively high doses are considered safe in sick children and people with cancer and osteoporosis according to various clinical trials. Being an injectable version, its absorption will be greater, and as it lacks ester, its absorption will be almost as fast as the oral version.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> The most common doses are 50 to 100mg per day. Although it is injectable, we would use the same protocol that is used with the oral version. Cycles usually last between 4-6 weeks.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-017",
    name: "ASTERA SHORT ACTING MIX 275",
    description:
      "Drostanolone propionate, Testosterone propionate, Trenbolone acetate",
    price: 80.0,
    image: "/products/astera inject/ASTERA SHORT ACTING MIX 275.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SHORT ACTING MIX 275</h1>
        <h2 class="chemical-description">Drostanolone propionate, Testosterone propionate, Trenbolone acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> This product is a complete cutting cycle in a vial, it contains testosterone, masteron and trenbolone.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Dosages will depend on the user and goals, 2ml a week would be enough for most users. Since it is a combination of short esters, we recommend injecting ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Drostanolone propionate: 75mg, Testosterone propionate: 125mg, Trenbolone acetate: 75mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-018",
    name: "ASTERA STANOZOLOL 50",
    description: "Stanozolol",
    price: 32.0,
    image: "/products/astera inject/ASTERA STANOZOLOL 50.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA STANOZOLOL 50</h1>
        <h2 class="chemical-description">Stanozolol</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 10418-03-8</p>
          <p><strong>Molecular Weight:</strong> 328.49 g/mol</p>
          <p><strong>Formula:</strong> C21H32N2O</p>
          
          <p><strong>Overview:</strong> Stanozolol more commonly known as Winstrol is the most used oral steroid in cutting phases. Its androgenic potential is very high, making it the perfect steroid when it comes to retaining muscle mass while losing fat. It is also very useful when it comes to improving strength and can be useful in explosive sports.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Doses range from 30 to 100mg, with 40-50mg being a standard dose and 100mg being a pre-competition dose. We do not recommend using it for more than 4-6 weeks at a time. Being the injectable version we recommend injecting it once ED.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-019",
    name: "ASTERA STENBOLONE 100",
    description: "Stenbolone Acetate",
    price: 50.0,
    image: "/products/astera inject/ASTERA STENBOLONE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA STENBOLONE 100</h1>
        <h2 class="chemical-description">Stenbolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Is a synthetic, injected anabolic–androgenic steroid and derivative of dihydrotestosterone. It is a steroid that is quite similar to masteron and was very popular in past decades.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Doses range from 300mg to 800mg per week. Because it has a short ester we recommend injecting it ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Stenbolone Acetate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-020",
    name: "ASTERA SUSTANON 300",
    description:
      "Testosterone Decanoate, Testosterone Isocaproate, Testosterone Phenylpropionate, Testosterone Propionate",
    price: 38.0,
    image: "/products/astera inject/ASTERA SUSTANON 300.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SUSTANON 300</h1>
        <h2 class="chemical-description">Testosterone Decanoate, Testosterone Isocaproate, Testosterone Phenylpropionate, Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> It is a combination of different esters of testosterone. Although its concentration is quite high, the combination of different esters makes its degree of tolerance very high. Although it has several long esters that keep blood levels stable for long periods of time, because it also has several short esters, it is recommended to use an injection protocol based on the half-life of the product.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone is the primary male hormone that binds to androgen receptors throughout the body, promoting protein synthesis, muscle growth, bone density, and secondary sexual characteristics. It regulates libido, mood, energy levels, and overall masculine development.</p>
          
          <p><strong>Dosage:</strong> Being a product based on testosterone, it can have different uses, it can be used as a TRT, it can be used as a single cycle or it can serve as the basis for a cycle with different substances. The dose to use can vary depending on the purpose, doses from 100mg to 1000mg weekly is something that is quite common.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include acne, oily skin, hair loss in predisposed individuals, water retention, gynecomastia, mood swings, aggression, suppression of natural testosterone production, potential cardiovascular strain, and virilization in women.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Decanoate: 120mg, Testosterone Isocaproate: 72mg, Testosterone Phenylpropionate: 72mg, Testosterone Propionate: 36mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-021",
    name: "ASTERA SUSTANON 500",
    description:
      "Testosterone Decanoate, Testosterone Isocaproate, Testosterone Phenylpropionate, Testosterone Propionate",
    price: 60.0,
    image: "/products/astera inject/ASTERA SUSTANON 500.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SUSTANON 500</h1>
        <h2 class="chemical-description">Testosterone Decanoate, Testosterone Isocaproate, Testosterone Phenylpropionate, Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> It is a combination of different esters of testosterone. Although its concentration is quite high, the combination of different esters makes its degree of tolerance very high. Although it has several long esters that keep blood levels stable for long periods of time, because it also has several short esters, it is recommended to use an injection protocol based on the half-life of the product.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone is the primary male hormone that binds to androgen receptors throughout the body, promoting protein synthesis, muscle growth, bone density, and secondary sexual characteristics. It regulates libido, mood, energy levels, and overall masculine development.</p>
          
          <p><strong>Dosage:</strong> Being a product based on testosterone, it can have different uses, it can be used as a TRT, it can be used as a single cycle or it can serve as the basis for a cycle with different substances. The dose to use can vary depending on the purpose, doses from 100mg to 1000mg weekly is something that is quite common.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include acne, oily skin, hair loss in predisposed individuals, water retention, gynecomastia, mood swings, aggression, suppression of natural testosterone production, potential cardiovascular strain, and virilization in women.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Decanoate: 200mg, Testosterone Isocaproate: 120mg, Testosterone Phenylpropionate: 120mg, Testosterone Propionate: 60mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-022",
    name: "ASTERA TESTOSTERONE CYPIONATE 200",
    description: "Testosterone Enanthate",
    price: 24.0,
    image: "/products/astera inject/ASTERA TESTOSTERONE CYPIONATE 200.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TESTOSTERONE CYPIONATE 200</h1>
        <h2 class="chemical-description">Testosterone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Testosterone is the most used and most versatile steroid on the market. All cycles need a base of Testosterone in combination with other steroids or they can even consist only of Testosterone, it can also be used in small doses as TRT.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone is the primary male hormone that binds to androgen receptors throughout the body, promoting protein synthesis, muscle growth, bone density, and secondary sexual characteristics. It regulates libido, mood, energy levels, and overall masculine development.</p>
          
          <p><strong>Dosage:</strong> Its use will depend on the context in which it is used, doses in a cycle can vary from 250mg for beginners to 1 gram or more in professional bodybuilders, We recommend using the maximum possible dose that can be used (obviously depending on the objective) in the absence of side effects. For a TRT We recommend using a dose based on your bloodwork. Being a long ester We recommend injecting EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include acne, oily skin, hair loss in predisposed individuals, water retention, gynecomastia, mood swings, aggression, suppression of natural testosterone production, potential cardiovascular strain, and virilization in women.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Enanthate: 200mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-023",
    name: "ASTERA TESTOSTERONE ENANTHATE 300",
    description: "Testosterone Enanthate",
    price: 35.0,
    image: "/products/astera inject/ASTERA TESTOSTERONE ENANTHATE 300.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TESTOSTERONE ENANTHATE 300</h1>
        <h2 class="chemical-description">Testosterone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Testosterone is the most used and most versatile steroid on the market. All cycles need a base of Testosterone in combination with other steroids or they can even consist only of Testosterone, it can also be used in small doses as TRT.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone is the primary male hormone that binds to androgen receptors throughout the body, promoting protein synthesis, muscle growth, bone density, and secondary sexual characteristics. It regulates libido, mood, energy levels, and overall masculine development.</p>
          
          <p><strong>Dosage:</strong> Its use will depend on the context in which it is used, doses in a cycle can vary from 250mg for beginners to 1 gram or more in professional bodybuilders, We recommend using the maximum possible dose that can be used (obviously depending on the objective) in the absence of side effects. For a TRT We recommend using a dose based on your bloodwork. Being a long ester I recommend injecting EOD or E3D.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include acne, oily skin, hair loss in predisposed individuals, water retention, gynecomastia, mood swings, aggression, suppression of natural testosterone production, potential cardiovascular strain, and virilization in women.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone Enanthate: 300mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-024",
    name: "ASTERA TESTOSTERONE NO ESTER 100",
    description: "Testosterone no ester",
    price: 28.0,
    image: "/products/astera inject/ASTERA TESTOSTERONE NO ESTER 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TESTOSTERONE NO ESTER 100</h1>
        <h2 class="chemical-description">Testosterone no ester</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Testosterone is the most used and most versatile steroid on the market. All cycles need a base of Testosterone in combination with other steroids or they can even consist only of Testosterone, it can also be used in small doses as TRT.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Since it has no ester, its absorption speed will be very fast and its half-life very short. It can be used as a pre-workout, before a powerlifting meeting or injected frequently every day as doping to avoid detection in the bloodwork.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Testosterone no ester: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-025",
    name: "ASTERA TESTOSTERONE PHENYLPROPIONATE 100",
    description: "Testosterone Phenylpropionate",
    price: 26.0,
    image:
      "/products/astera inject/ASTERA TESTOSTERONE PHENYLPROPIONATE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TESTOSTERONE PHENYLPROPIONATE 100</h1>
        <h2 class="chemical-description">Testosterone Phenylpropionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Testosterone is the most used and most versatile steroid on the market. All cycles need a base of Testosterone in combination with other steroids or they can even consist only of Testosterone, it can also be used in small doses as TRT.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone is the primary male hormone that binds to androgen receptors throughout the body, promoting protein synthesis, muscle growth, bone density, and secondary sexual characteristics. It regulates libido, mood, energy levels, and overall masculine development.</p>
          
          <p><strong>Dosage:</strong> Its use will depend on the context in which it is used, doses in a cycle can vary from 250mg for beginners to 1 gram or more in professional bodybuilders, We recommend using the maximum possible dose that can be used (obviously depending on the objective) in the absence of side effects. For a TRT We recommend using a dose based on your bloodwork. Being a semi short ester We recommend injecting ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include acne, oily skin, hair loss in predisposed individuals, water retention, gynecomastia, mood swings, aggression, suppression of natural testosterone production, potential cardiovascular strain, and virilization in women.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-026",
    name: "ASTERA TESTOSTERONE PROPIONATE 100",
    description: "Testosterone Propionate",
    price: 26.0,
    image: "/products/astera inject/ASTERA TESTOSTERONE PROPIONATE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TESTOSTERONE PROPIONATE 100</h1>
        <h2 class="chemical-description">Testosterone Propionate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Testosterone is the most used and most versatile steroid on the market. All cycles need a base of Testosterone in combination with other steroids or they can even consist only of Testosterone, it can also be used in small doses as TRT.</p>
          
          <p><strong>Mechanism of Action:</strong> Testosterone is the primary male hormone that binds to androgen receptors throughout the body, promoting protein synthesis, muscle growth, bone density, and secondary sexual characteristics. It regulates libido, mood, energy levels, and overall masculine development.</p>
          
          <p><strong>Dosage:</strong> Its use will depend on the context in which it is used, doses in a cycle can vary from 250mg for beginners to 1 gram or more in professional bodybuilders, we personally recommend using the maximum possible dose that can be used (obviously depending on the objective) in the absence of side effects. For a TRT we recommend using a dose based on your bloodwork. Being a short ester we recommend injecting ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include acne, oily skin, hair loss in predisposed individuals, water retention, gynecomastia, mood swings, aggression, suppression of natural testosterone production, potential cardiovascular strain, and virilization in women. May cause injection site irritation.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-027",
    name: "ASTERA TESTOSTERONE UNDECANOATE 250",
    description: "Testosterone Undecanoate",
    price: 30.0,
    image: "/products/astera inject/ASTERA TESTOSTERONE UNDECANOATE 250.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TESTOSTERONE UNDECANOATE 250</h1>
        <h2 class="chemical-description">Testosterone Undecanoate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Testosterone is the most used and most versatile steroid on the market. All cycles need a base of Testosterone in combination with other steroids or they can even consist only of Testosterone, it can also be used in small doses as TRT.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Its use will depend on the context in which it is used, doses in a cycle can vary from 250mg for beginners to 1 gram or more in professional bodybuilders, we personally recommend using the maximum possible dose that can be used (obviously depending on the objective) in the absence of side effects. For a TRT we recommend using a dose based on your bloodwork. Being a really long ester we recommend injecting or E3D or once a week if needed, since it's half life is so long we usually recommend this specific ester for TRT or before traveling abroad.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-028",
    name: "ASTERA TRENBOLONE ACETATE 100",
    description: "Trenbolone Acerate",
    price: 41.0,
    image: "/products/astera inject/ASTERA TRENBOLONE ACETATE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRENBOLONE ACETATE 100</h1>
        <h2 class="chemical-description">Trenbolone Acerate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Trenbolone is a steroid derived from 19-Nortestosterone and is one of the most powerful and effective steroids currently in existence. Due to its high affinity to androgen receptors, it is a versatile steroid, useful for gaining muscle mass, losing fat and increasing strength. It is very useful during a cutting cycle to maintain as much lean mass as possible while losing as much fat as possible. Although its side effects are exaggerated and are very similar to those of other steroids and dose dependent, it must be taken into account that it causes sleep disturbances (depending on the dose and time of use) and mood changes (depending on the person).</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Being a very versatile steroid, doses of 75mg per week can be very useful during a cutting phase without causing side effects or reducing the chances of them. Doses of 200-400mg per week are considered "normal" depending on how advanced the athlete is, We recommend starting at 75mg per week and gradually increasing the dose until you notice any side effects and that would be your maximum dose. Since its a short ester it should be injected ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Acerate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-029",
    name: "ASTERA TRENBOLONE BASE 50",
    description: "Trenbolone Base",
    price: 35.0,
    image: "/products/astera inject/ASTERA TRENBOLONE BASE 50.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRENBOLONE BASE 50</h1>
        <h2 class="chemical-description">Trenbolone Base</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Trenbolone is a steroid derived from 19-Nortestosterone and is one of the most powerful and effective steroids currently in existence. Due to its high affinity to androgen receptors, it is a versatile steroid, useful for gaining muscle mass, losing fat and increasing strength. It is very useful during a cutting cycle to maintain as much lean mass as possible while losing as much fat as possible. Although its side effects are exaggerated and are very similar to those of other steroids and dose dependent, it must be taken into account that it causes sleep disturbances (depending on the dose and time of use) and mood changes (depending on the person).</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Since it lacks ester its onset time is almost instantaneous, it can be used as a pre-workout to give extra strength/aggression or during a powerlifting meeting. A single dose of 50-75mg pre training would be recommended.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Base: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-030",
    name: "ASTERA TRENBOLONE ENANTHATE 200",
    description: "Trenbolone Enanthate",
    price: 50.0,
    image: "/products/astera inject/ASTERA TRENBOLONE ENANTHATE 200.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRENBOLONE ENANTHATE 200</h1>
        <h2 class="chemical-description">Trenbolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Trenbolone is a steroid derived from 19-Nortestosterone and is one of the most powerful and effective steroids currently in existence. Due to its high affinity to androgen receptors, it is a versatile steroid, useful for gaining muscle mass, losing fat and increasing strength. It is very useful during a cutting cycle to maintain as much lean mass as possible while losing as much fat as possible. Although its side effects are exaggerated and are very similar to those of other steroids and dose dependent, it must be taken into account that it causes sleep disturbances (depending on the dose and time of use) and mood changes (depending on the person).</p>
          
          <p><strong>Mechanism of Action:</strong> Trenbolone is a potent anabolic steroid that binds to androgen receptors with extremely high affinity, promoting dramatic increases in muscle mass and strength. It enhances protein synthesis, inhibits muscle breakdown, and increases IGF-1 production while burning fat.</p>
          
          <p><strong>Dosage:</strong> Being a very versatile steroid, doses of 75mg per week can be very useful during a cutting phase without causing side effects or reducing the chances of them. Doses of 200-400mg per week are considered "normal" depending on how advanced the athlete is, I recommend starting at 75mg per week and gradually increasing the dose until you notice any side effects and that would be your maximum dose. Since its a long ester it can be injected EOD or twice a week.</p>
          
          <p><strong>Side Effects:</strong> Side effects include night sweats, insomnia, increased aggression ("tren rage"), cardiovascular strain, suppression of natural testosterone production, potential kidney stress, hair loss, acne, and severe virilization in women. May cause "tren cough" and anxiety.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-031",
    name: "ASTERA TRENBOLONE HEXAHYDROBENZYL CARBONATE 100",
    description: "Trenbolone Hexahydrobenzylcarbonate",
    price: 60.0,
    image:
      "/products/astera inject/ASTERA TRENBOLONE HEXAHYDROBENZYL CARBONATE 100.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRENBOLONE HEXAHYDROBENZYL CARBONATE 100</h1>
        <h2 class="chemical-description">Trenbolone Hexahydrobenzylcarbonate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Trenbolone is a steroid derived from 19-Nortestosterone and is one of the most powerful and effective steroids currently in existence. Due to its high affinity to androgen receptors, it is a versatile steroid, useful for gaining muscle mass, losing fat and increasing strength. It is very useful during a cutting cycle to maintain as much lean mass as possible while losing as much fat as possible. Although its side effects are exaggerated and are very similar to those of other steroids and dose dependent, it must be taken into account that it causes sleep disturbances (depending on the dose and time of use) and mood changes (depending on the person).</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Being a very versatile steroid, doses of 75mg per week can be very useful during a cutting phase without causing side effects or reducing the chances of them. Doses of 200-400mg per week are considered "normal" depending on how advanced the athlete is, We recommend starting at 75mg per week and gradually increasing the dose until you notice any side effects and that would be your maximum dose. Since its a long ester it can be injected EOD or twice a week.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Hexahydrobenzylcarbonate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-032",
    name: "ASTERA TRENBOLONE MIX 150",
    description:
      "Trenbolone Acetate, Trenbolone Enanthate, Trenbolone Hexahydrobenzylcarbonate",
    price: 45.0,
    image: "/products/astera inject/ASTERA TRENBOLONE MIX 150.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRENBOLONE MIX 150</h1>
        <h2 class="chemical-description">Trenbolone Acetate, Trenbolone Enanthate, Trenbolone Hexahydrobenzylcarbonate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Trenbolone is a steroid derived from 19-Nortestosterone and is one of the most powerful and effective steroids currently in existence. Due to its high affinity to androgen receptors, it is a versatile steroid, useful for gaining muscle mass, losing fat and increasing strength. It is very useful during a cutting cycle to maintain as much lean mass as possible while losing as much fat as possible. Although its side effects are exaggerated and are very similar to those of other steroids and dose dependent, it must be taken into account that it causes sleep disturbances (depending on the dose and time of use) and mood changes (depending on the person).</p>
          
          <p><strong>Mechanism of Action:</strong> Trenbolone is a potent anabolic steroid that binds to androgen receptors with extremely high affinity, promoting dramatic increases in muscle mass and strength. It enhances protein synthesis, inhibits muscle breakdown, and increases IGF-1 production while burning fat.</p>
          
          <p><strong>Dosage:</strong> Being a very versatile steroid, doses of 75mg per week can be very useful during a cutting phase without causing side effects or reducing the chances of them. Doses of 200-400mg per week are considered "normal" depending on how advanced the athlete is, We recommend starting at 75mg per week and gradually increasing the dose until you notice any side effects and that would be your maximum dose. Since it has a combination of three esters we recommended to use the same injection frequency that we would use with the shorter ester, so ED or EOD.</p>
          
          <p><strong>Side Effects:</strong> Side effects include night sweats, insomnia, increased aggression ("tren rage"), cardiovascular strain, suppression of natural testosterone production, potential kidney stress, hair loss, acne, and severe virilization in women. May cause "tren cough" and anxiety.</p>
          
          <p><strong>Composition:</strong><br>
          Trenbolone Acetate: 50mg, Trenbolone Enanthate: 50mg, Trenbolone Hexahydrobenzylcarbonate: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-033",
    name: "ASTERA TRESTOLONE ACETATE 50",
    description: "Trestolone Acetate",
    price: 55.0,
    image: "/products/astera inject/ASTERA TRESTOLONE ACETATE 50.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRESTOLONE ACETATE 50</h1>
        <h2 class="chemical-description">Trestolone Acetate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-22-0</p>
          <p><strong>Molecular Weight:</strong> 274.40 g/mol</p>
          <p><strong>Formula:</strong> C18H26O2</p>
          
          <p><strong>Overview:</strong> The most potent steroid known as Trestolone Acetate, which is the methylated version of Nandrolone and has a potency far higher than Trenbolone, is widely regarded as a combination of the two. It is a highly aromatizable substance, so if it is utilized, care should be made to manage estradiol using alternative methods or lower dosages than would be typical for regular substances. It isn't turned into DHT. It is the chemical that has the highest milligram-to-milligram inhibition constant, and one of its uses is as a male contraceptive.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> The dosage depends on the user. By way of contact, doses of 5–10 mg per day (35–70 mg per week) are very common. More experienced users typically use 10–25 mg per day (70–175 mg per week) or even 25–50 mg per day (150–350 mg per week). We advise increasing the dose weekly until you find the dose that best meets your needs. Typically, cycles last 8 to 12 weeks.</p>
          
          <p><strong>Side Effects:</strong> Side effects include significant water retention, gynecomastia, acne, hair loss, severe suppression of natural testosterone production, potential cardiovascular strain, mood swings, increased aggression, and virilization in women.</p>
          
          <p><strong>Composition:</strong><br>
          Trestolone Acetate: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "inj-astera-034",
    name: "ASTERA TRESTOLONE ENANTHATE 50",
    description: "Trestolone Enanthate 50mg",
    price: 55.0,
    image: "/products/astera inject/ASTERA TRESTOLONE ENANTHATE 50.png",
    category: "INJECTION",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TRESTOLONE ENANTHATE 50</h1>
        <h2 class="chemical-description">Trestolone Enanthate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-22-0</p>
          <p><strong>Molecular Weight:</strong> 274.40 g/mol</p>
          <p><strong>Formula:</strong> C18H26O2</p>
          <p><strong>Overview:</strong> TRESTOLONE ENANTHATE (MENT) is a potent anabolic steroid derived from the hormone nandrolone. It is popularly considered a mix between Trenbolone and Nandrolone, offering a powerful combination of strength and size gains. With a higher potency than Trenbolone, Trestolone Enanthate is one of the most powerful steroids available. This compound aromatizes heavily, meaning it converts to estrogen in the body. Users should be aware of this and take appropriate measures to control estradiol levels, utilizing different strategies than those typically used with less potent compounds or opting for smaller doses. Trestolone Enanthate does not convert to DHT, which reduces the risk of hair loss and other DHT-related side effects. Interestingly, it has a high inhibition constant, and one of the uses of this substance is as a male contraceptive.</p>
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          <p><strong>Dosage:</strong> The dose of Trestolone Enanthate varies depending on the user's experience and goals. Common doses range from 5-10mg per day (35-70mg per week) for beginners, while more advanced users may use 10-25mg per day (70-175mg per week) or even 25-50mg per day (175-350mg per week). It is recommended to increase the dose gradually, on a weekly basis, until the desired effects are achieved. Cycles typically last 8-12 weeks, with users carefully monitoring their response to the compound and adjusting dosage as needed to optimize results while minimizing potential side effects. After the cycle is complete, a post-cycle therapy (PCT) is recommended to help restore natural testosterone production and maintain the gains achieved during the cycle.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Trestolone Enanthate: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },

  // ================================
  // FAT BURN - ASTERA PRODUCTS
  // ================================
  {
    id: "fatburn-astera-001",
    name: "ASTERA LEVOTHYROXINE SODIUM 50",
    description: "Levothyroxine Sodium 50mg",
    price: 9.0,
    image: "/products/astera fat burn/ASTERA LEVOTHYROXINE SODIUM 50.png",
    category: "FAT BURN",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA LEVOTHYROXINE SODIUM 50</h1>
        <h2 class="chemical-description">Levothyroxine Sodium</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Thyroxine, also called tetraiodothyronine (usually abbreviated T4), is the main type of thyroid hormone secreted by the follicular cells of the thyroid gland. It is used to increase the basal metabolic rate, promoting weight and fat loss.</p>
          
          <p><strong>Mechanism of Action:</strong> Levothyroxine (T4) is converted to the active hormone T3 in peripheral tissues. It increases metabolic rate by enhancing oxygen consumption, protein synthesis, and carbohydrate metabolism, leading to increased energy expenditure and fat loss.</p>
          
          <p><strong>Dosage:</strong> Its use dose will depend on the use that you want to give it. If what we want is simply to use it in order to avoid a certain adaptation at the level of the basal metabolic rate, limit yourself to using T4 at a daily dose of between 12.5 to 50mcg daily. If we want to use it to significantly increase the basal metabolic rate, the dose to be used will be 250mcg daily. The dose is taken once a day on an empty stomach.</p>
          
          <p><strong>Side Effects:</strong> Side effects include heart palpitations, increased heart rate, anxiety, insomnia, excessive sweating, weight loss, diarrhea, headaches, and potential cardiovascular strain. May cause thyroid suppression with prolonged use.</p>
          
          <p><strong>Composition:</strong><br>
          Levothyroxine Sodium (T4): 50mcg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "fatburn-astera-002",
    name: "ASTERA LIOTHYRONINE SODIUM 25",
    description: "Liothyronine Sodium 25mg",
    price: 12.0,
    image: "/products/astera fat burn/ASTERA LIOTHYRONINE SODIUM 25.png",
    category: "FAT BURN",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA LIOTHYRONINE SODIUM 25</h1>
        <h2 class="chemical-description">Liothyronine Sodium</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Triiodothyronine, also known as T3, is a thyroid hormone. It affects almost every physiological process in the body, including growth and development, metabolism, body temperature, and heart rate. It is used to increase the basal metabolic rate, promoting weight and fat loss.</p>
          
          <p><strong>Mechanism of Action:</strong> Liothyronine (T3) is the active thyroid hormone that binds to thyroid hormone receptors in cell nuclei, increasing metabolic rate, protein synthesis, and thermogenesis. It dramatically enhances fat burning and energy expenditure.</p>
          
          <p><strong>Dosage:</strong> If we want to use it to significantly increase the basal metabolic rate, the dose to be used will be 62.5mcg daily, lower doses may work but according to clinical trials this should be the best dose for those looking to make a change. The dose is taken once a day on an empty stomach.</p>
          
          <p><strong>Side Effects:</strong> Side effects include rapid heart rate, heart palpitations, anxiety, insomnia, excessive sweating, tremors, headaches, diarrhea, and potential cardiovascular complications. More potent than T4 with higher risk profile.</p>
          
          <p><strong>Composition:</strong><br>
          Liothyronine Sodium (T3): 25mcg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "fatburn-astera-003",
    name: "ASTERA CLENBUTEROL HCL 40",
    description: "Clenbuterol HCL 40mg",
    price: 22.0,
    image: "/products/astera fat burn/ASTERA CLENBUTEROL HCL 40.png",
    category: "FAT BURN",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA CLENBUTEROL HCL 40</h1>
        <h2 class="chemical-description">Clenbuterol HCL</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Clenbuterol is a sympathomimetic amine used by sufferers of breathing disorders as a decongestant and bronchodilator. In terms of the use of clenbuterol for strength athletes and bodybuilders, its function as a beta-2 agonist can help to increase lipolysis. This is accomplished via an increase in basal metabolic rate, as well as increased heat production in the mitochondria which serves to increase body temperature and therefore increasing thermogenesis. Additionally, it has been shown that clenbuterol is able to directly stimulate fat cells and accelerate the breakdown of triglycerides, thus forming free fatty acids.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Although it has a very long half-life, it is recommendable to divide the dose into three doses spaced throughout the day. The initial dose is usually 20mcgs, it is advisable to increase the dose little by little each time it stops exerting its effect (it is advisable to look for a template of a clenbuterol pyramid cycle). To avoid unwanted side effects such as tachycardia or cardiac remodeling, it is advisable to combine it with low doses of Nebivolol.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Clenbuterol HCL: 40mcg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },

  // ================================
  // ORAL - ASTERA PRODUCTS
  // ================================
  {
    id: "oral-astera-001",
    name: "ASTERA CHLORODEHYDROMETHYL TESTOSTERONE 20",
    description: "Chlorodehydromethyltestosterone 20mg",
    price: 65.0,
    image:
      "/products/astera oral/ASTERA CHLORODEHYDROMETHYL TESTOSTERONE 20.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA CHLORODEHYDROMETHYL TESTOSTERONE 20</h1>
        <h2 class="chemical-description">Chlorodehydromethyltestosterone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 72-63-9</p>
          <p><strong>Molecular Weight:</strong> 300.44 g/mol</p>
          <p><strong>Formula:</strong> C20H28O2</p>
          
          <p><strong>Overview:</strong> Turinabol is a 17-alpha-alkylated compound that is a derivative of Dianabol. It features a 4-chloro attachment that inhibits the aromatization of the compound. It also has an advantageous effect in terms of it's ability to reduce the binding of sex hormone-binding globulin to other anabolic steroids. Even at relatively low doses, it is quite effective at this function and could improve the action of any anabolics that a user may be running with the compound.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Doses range from 40-60mg, although some users have used doses as high as 100mg. It is not very hepatotoxic, so it can be used in 8-week cycles. It is advisable to divide the dose into two daily doses.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Chlorodehydromethyltestosterone: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-002",
    name: "ASTERA FLUOXYMESTERONE 5",
    description: "Fluoxymesterone (Halotestin) 5mg",
    price: 45.0,
    image: "/products/astera oral/ASTERA FLUOXYMESTERONE 5.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA FLUOXYMESTERONE 5</h1>
        <h2 class="chemical-description">Fluoxymesterone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> [TO BE ADDED]</p>
          <p><strong>Molecular Weight:</strong> [TO BE ADDED]</p>
          <p><strong>Formula:</strong> [TO BE ADDED]</p>
          
          <p><strong>Overview:</strong> Fluoxymesterone is a very potent oral steroid that exhibits extremely strong androgenic properties. For bodybuilders and strength athletes fluoxymesterone offers several distinct advantages over other drugs. However, these come with some serious potential side effects.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> The dose and duration of the cycle will depend on the objectives of the user, the doses vary from 20-50mg daily and it is not recommended to use it for more than 4-6 weeks in a row. In bodybuilding it is used to burn more fat and give a more androgenic appearance for competitions, in contact or strength sports it is used to increase strength and aggressiveness.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-003",
    name: "ASTERA MESTEROLONE 50",
    description: "Mesterolone 50mg",
    price: 60.0,
    image: "/products/astera oral/ASTERA MESTEROLONE 50.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA MESTEROLONE 50</h1>
        <h2 class="chemical-description">Mesterolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-22-0</p>
          <p><strong>Molecular Weight:</strong> 274.40 g/mol</p>
          <p><strong>Formula:</strong> C18H26O2</p>
          
          <p><strong>Overview:</strong> Mesterolone is an androgen and anabolic steroid used in the treatment of androgen deficiency and to support male fertility, It has also been used to treat delayed puberty in boys. Because it lacks estrogenic effects, mesterolone may be indicated for treating cases of androgen deficiency in which gynecomastia is also present.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Its most common use is for androgenic support, being useful to increase libido, burn more fat, or avoid side effects of other substances such as Nandrolone. The doses vary depending on what is required, being 50-100mg the most common, I recommend dividing the dose into two daily doses. Proviron is usually free of serious side effects.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Mesterolone: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-004",
    name: "ASTERA METHANDIENONE 20",
    description: "Methadienone 20mg",
    price: 40.0,
    image: "/products/astera oral/ASTERA METHANDIENONE 20.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHANDIENONE 20</h1>
        <h2 class="chemical-description">Metadienone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 72-63-9</p>
          <p><strong>Molecular Weight:</strong> 300.44 g/mol</p>
          <p><strong>Formula:</strong> C20H28O2</p>
          
          <p><strong>Overview:</strong> Metadienone, commonly known as Dianabol, is one of the most widely used oral steroids in the golden age of bodybuilding. Due to its anabolic and estrogenic potency it is often used in bulking cycles or in strength competitions.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Its half-life is 4.5 to 6 hours, therefore it is recommended to divide the doses throughout the day. Cycles usually last 4 to 6 weeks. We would recommend splitting the dose three times per day. The doses that are usually used vary from 20mg per day to 100mg per day.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Metadienone: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-005",
    name: "ASTERA METHYL-1-TESTOSTERONE 10",
    description: "Methyl-1-testosterone 10mg",
    price: 30.0,
    image: "/products/astera oral/ASTERA METHYL-1-TESTOSTERONE 10.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHYL-1-TESTOSTERONE 10</h1>
        <h2 class="chemical-description">Methyl-1-testosterone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 846-48-0</p>
          <p><strong>Molecular Weight:</strong> 286.41 g/mol</p>
          <p><strong>Formula:</strong> C19H26O2</p>
          
          <p><strong>Overview:</strong> It is a synthetic and orally active anabolic–androgenic steroid which was never marketed for medical use. It is the 17α-methyl derivative of 1-testosterone (Δ1-DHT; dihydroboldenone).</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Being a steroid that has never had therapeutic use, the recommendations for use are based on the experiences of users who have used it, the doses vary from 10-30mg daily, it has normally been taken a couple of hours before training, it is not recommended to exceed 4 weeks of use.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Methyl-1-testosterone: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-006",
    name: "ASTERA METHYLDROSTANOLONE 10",
    description: "Methyldrostanolone (Superdrol) 10mg",
    price: 41.0,
    image: "/products/astera oral/ASTERA METHYLDROSTANOLONE 10.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHYLDROSTANOLONE 10</h1>
        <h2 class="chemical-description">Methyldrostanolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 521-12-0</p>
          <p><strong>Molecular Weight:</strong> 304.47 g/mol</p>
          <p><strong>Formula:</strong> C20H32O2</p>
          
          <p><strong>Overview:</strong> Methyldrosnanolone also known as Superdrol is the most powerful oral steroid in existence. It is a methylated modification of drostanolone, but it does not look like it, it has a high anabolic and androgenic power, and can be used in volume, cut or in strength stages and just like Anadrol saturates glycogen deposits. It is a very hepatotoxic steroid.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> A dose of 10mg is already very effective, but doses of up to 20-30mg per day are often used. We recommend using it for a maximum of 4 weeks. We recommend splitting the doce twice per day. It should be used in conjunction with a liver protector such as TUDCA.</p>
          
          <p><strong>Side Effects:</strong> Side effects include liver toxicity, acne, hair loss, increased aggression, suppression of natural testosterone production, cardiovascular strain, joint discomfort, and virilization in women. Regular liver function monitoring is essential.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-007",
    name: "ASTERA METHYLTESTOSTERONE 25",
    description: "Methyldrostanolone 25mg",
    price: 35.0,
    image: "/products/astera oral/ASTERA METHYLTESTOSTERONE 25.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHYLTESTOSTERONE 25</h1>
        <h2 class="chemical-description">17a-Methyltestosterone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Is an androgen and anabolic steroid medication which is used in the treatment of low testosterone levels in men, delayed puberty in boys, at low doses as a component of menopausal hormone therapy for menopausal symptoms like hot flashes, osteoporosis, and low sexual desire in women, and to treat breast cancer in women.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Anecdotal evidence tells us to use between 25-50mg, preferably for short periods of time, paying attention to estrogen levels and preferably using it pre-workout.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          17a-Methyltestosterone: 25mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-008",
    name: "ASTERA METHYLTRENBOLONE 1",
    description: "Methyltrenbolone 1mg",
    price: 45.0,
    image: "/products/astera oral/ASTERA METHYLTRENBOLONE 1.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA METHYLTRENBOLONE 1</h1>
        <h2 class="chemical-description">Methyltrenbolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-22-0</p>
          <p><strong>Molecular Weight:</strong> 274.40 g/mol</p>
          <p><strong>Formula:</strong> C18H26O2</p>
          
          <p><strong>Overview:</strong> Metribolone is a synthetic and orally active anabolic–androgenic steroid (AAS) and a 17α-alkylated nandrolone (19-nortestosterone) derivative. It is one of the most powerful and toxic steroids that exist, the changes in strength and aesthetics that are seen with its use are impressive.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> Daily doses vary between 500-1000mcg divided into 2 doses, although most users use it a few hours before training. It is not recommended to use it for more than 2 weeks in a row, it is mandatory to use a liver protector such as TUDCA, to avoid psychological side effects it would be advisable to use SAME since it is very useful at the hepatic level and at the emotional one too.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Methyltrenbolone: 1mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-009",
    name: "ASTERA MIBOLERONE 0.5",
    description: "Mibolerone 0.5mg",
    price: 60.0,
    image: "/products/astera oral/ASTERA MIBOLERONE 0.5.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA MIBOLERONE 0.5</h1>
        <h2 class="chemical-description">Mibolerone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-22-0</p>
          <p><strong>Molecular Weight:</strong> 274.40 g/mol</p>
          <p><strong>Formula:</strong> C18H26O2</p>
          
          <p><strong>Overview:</strong> Mibolerone is a 7,17-dimethylated derivative of nandrolone, It is a very powerful oral steroid, but its uses are very specific, mostly for powerlifting competitions, strongman ones or contact sports for increasing strength and aggressiveness.</p>
          
          <p><strong>Mechanism of Action:</strong> This compound works through specific biochemical pathways to exert its effects on target tissues and cellular processes.</p>
          
          <p><strong>Dosage:</strong> It is advisable to take between 0.5 to 1mg 30 minutes before a strength sporting event, the athlete should take into account that blood pressure can rise to dangerous levels with its use.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Mibolerone: 0.5mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-010",
    name: "ASTERA OXANDROLONE 20",
    description: "Oxandrolone 20mg",
    price: 90.0,
    image: "/products/astera oral/ASTERA OXANDROLONE 20.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA OXANDROLONE 20</h1>
        <h2 class="chemical-description">Oxandrolone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 53-39-4</p>
          <p><strong>Molecular Weight:</strong> 306.4 g/mol</p>
          <p><strong>Formula:</strong> C19H30O3</p>
          
          <p><strong>Overview:</strong> It is the most used oral steroid due to its risk/benefit ratio, it provides good gains in lean mass and strength as well as a powerful effect on fat loss. It is very versatile, it can be used both in a cutting cycle and in a bulking cycle, although it is generally used during a cutting cycle due to its powerful fat burning effect. It is a very safe steroid, although it is metabolized in the liver, its liver toxicity is almost zero.</p>
          
          <p><strong>Mechanism of Action:</strong> Oxandrolone is an anabolic steroid that binds to androgen receptors, promoting protein synthesis and nitrogen retention while having minimal androgenic effects. It increases phosphocreatine synthesis in muscle tissue, enhancing strength and power output.</p>
          
          <p><strong>Dosage:</strong> The doses will depend on the user, and doses from 20 to 100 mg per day are considered normal. A standard dose will be 30-50 mg per day, divided into 3 doses with the main meals of the day.</p>
          
          <p><strong>Side Effects:</strong> Generally well-tolerated with minimal side effects. May cause mild liver enzyme elevation, lipid profile changes, natural testosterone suppression, and potential hair loss in predisposed individuals. Very low hepatotoxicity compared to other oral steroids.</p>
          
          <p><strong>Composition:</strong><br>
          Oxandrolone: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-011",
    name: "ASTERA OXYMETHOLONE 25",
    description: "Oxymetholone 25mg",
    price: 30.0,
    image: "/products/astera oral/ASTERA OXYMETHOLONE 25.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA OXYMETHOLONE 25</h1>
        <h2 class="chemical-description">Oxymetholone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 434-07-1</p>
          <p><strong>Molecular Weight:</strong> 332.48 g/mol</p>
          <p><strong>Formula:</strong> C21H32O3</p>
          
          <p><strong>Overview:</strong> Oxymetholone is one of the most widely used oral steroids on the market. It is normally used in bulking cycles due to the rapid gain in muscle mass it provides (in part thanks to the increase in glycogen stores), also due to this reason it provides a substantial increase in strength, due to this it is commonly used in powerlifting and strongman competitions. Its hepatotoxicity is not as high as rumored, relatively high doses are considered safe in sick children and people with cancer and osteoporosis according to various clinical trials. Being the oral version, its absorption will be greater, and as it lacks ester, its absorption will be almost as fast as the oral version.</p>
          
          <p><strong>Mechanism of Action:</strong> Oxymetholone is a potent anabolic steroid that significantly increases protein synthesis and nitrogen retention. It enhances red blood cell production and increases appetite, leading to rapid weight and strength gains primarily through increased muscle glycogen storage and water retention.</p>
          
          <p><strong>Dosage:</strong> The most common doses are 50 to 100mg per day. Although it is injectable, we recommend to use the same protocol that is used with the oral version. We would recommend splitting the dosage twice a day. Cycles usually last between 4-6 weeks.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include water retention, high blood pressure, liver stress, gynecomastia, acne, hair loss, and natural testosterone suppression. May cause headaches and nausea. Requires liver support and careful monitoring.</p>
          
          <p><strong>Composition:</strong><br>
          Oxymetholone: 25mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "oral-astera-012",
    name: "ASTERA STANOZOLOL 20",
    description: "Stanozolol 20mg",
    price: 44.0,
    image: "/products/astera oral/ASTERA STANOZOLOL 20.png",
    category: "ORAL",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA STANOZOLOL 20</h1>
        <h2 class="chemical-description">Stanozolol</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 10418-03-8</p>
          <p><strong>Molecular Weight:</strong> 328.5 g/mol</p>
          <p><strong>Formula:</strong> C21H32N2O</p>
          
          <p><strong>Overview:</strong> Stanozolol more commonly known as Winstrol is the most used oral steroid in cutting phases. Its androgenic potential is very high, making it the perfect steroid when it comes to retaining muscle mass while losing fat. It is also very useful when it comes to improving strength and can be useful in explosive sports.</p>
          
          <p><strong>Mechanism of Action:</strong> Stanozolol is an anabolic steroid that binds to androgen receptors, promoting protein synthesis and nitrogen retention while having anti-estrogenic properties. It enhances muscle hardness and definition by reducing water retention and improving muscle fiber density.</p>
          
          <p><strong>Dosage:</strong> Doses range from 30 to 100mg, with 40-50mg being a standard dose and 100mg being a pre-competition dose. We do not recommend using it for more than 4-6 weeks at a time. We would recommend splitting the dosage twice a day. Being the oral version We recommend using it once ED.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include joint pain and stiffness, liver stress, cholesterol level changes, hair loss, acne, and natural testosterone suppression. May cause tendon problems and mood changes. Requires liver support during use.</p>
          
          <p><strong>Composition:</strong><br>
          Stanozolol: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },

  // ================================
  // POST CYCLE - ASTERA PRODUCTS
  // ================================
  {
    id: "pct-astera-001",
    name: "ASTERA ANASTROZOLE 1",
    description: "Anastrozole 1mg/tab",
    price: 27.0,
    image: "/products/astera post cycle/ASTERA ANASTROZOLE 1.png",
    category: "POST CYCLE",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA ANASTROZOLE 1</h1>
        <h2 class="chemical-description">Anastrozole</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 58-22-0</p>
          <p><strong>Molecular Weight:</strong> 288.42 g/mol</p>
          <p><strong>Formula:</strong> C19H28O2</p>
          
          <p><strong>Overview:</strong> Anastrozole is an aromatase inhibitor. Aromatase inhibitors prevent the conversion of androgens into estrogen in fat, muscle, breast, and brain. The medical use of Anastrozole is primarily to inhibit the progression and growth of breast cancer in women by blocking the aromatase enzyme. It has also been used by some doctors to try and treat low testosterone production in men, as well as being used in conjunction with testosterone replacement therapy. For bodybuilders and strength athletes, Anastrozole is used to minimize the aromatization of anabolic steroids, and to a lesser extent for it's ability to raise testosterone levels in users. By reducing the amount of estrogen in a steroid user's body he will be able to avoid estrogen related side effects such as water retention, gynocomastia, etc.</p>
          
          <p><strong>Mechanism of Action:</strong> Anastrozole is an aromatase inhibitor that blocks the conversion of testosterone to estrogen by inhibiting the aromatase enzyme. It reduces circulating estrogen levels, preventing estrogen-related side effects during anabolic steroid use.</p>
          
          <p><strong>Dosage:</strong> The dosage varies greatly depending on the user and the aromatizing compounds being used, some users will find that 0.5mgs used E3.5D is enough to not have any estrogenic side effects.</p>
          
          <p><strong>Side Effects:</strong> Side effects include joint pain, bone density loss, fatigue, hot flashes, mood changes, and potential cardiovascular effects. May cause over-suppression of estrogen leading to negative effects on lipids and mood.</p>
          
          <p><strong>Composition:</strong><br>
          Anastrozole: 1mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "pct-astera-002",
    name: "ASTERA CABERGOLINE 0.25",
    description: "Cabergoline 0.25mg",
    price: 80.0,
    image: "/products/astera post cycle/ASTERA CABERGOLINE 0.25.png",
    category: "POST CYCLE",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA CABERGOLINE 0.25</h1>
        <h2 class="chemical-description">Cabergoline</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 81409-90-7</p>
          <p><strong>Molecular Weight:</strong> 451.6 g/mol</p>
          <p><strong>Formula:</strong> C26H37N5O2</p>
          
          <p><strong>Overview:</strong> Cabergoline is a dopaminergic medication used in the treatment of high prolactin levels, prolactinomas, Parkinson's disease, and for other indications. It is taken by mouth. Cabergoline is an ergot derivative and a potent dopamine D2 receptor agonist.</p>
          
          <p><strong>Mechanism of Action:</strong> Cabergoline works as a dopamine receptor agonist, specifically targeting D2 receptors in the pituitary gland to suppress prolactin secretion. It also has effects on growth hormone and other hormonal pathways.</p>
          
          <p><strong>Dosage:</strong> We recommend taking the lowest possible dose, 0.25mg weekly is enough, and in some cases 0.5mg may be the right dose.</p>
          
          <p><strong>Side Effects:</strong> Side effects may include nausea, dizziness, fatigue, constipation, and potential heart valve issues with long-term use. May cause impulse control disorders in rare cases.</p>
          
          <p><strong>Composition:</strong><br>
          Cabergoline: 0.25mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "pct-astera-003",
    name: "ASTERA CLOMIPHENE CITRATE 50",
    description: "Clomiphene Citrate 50mg",
    price: 25.0,
    image: "/products/astera post cycle/ASTERA CLOMIPHENE CITRATE 50.png",
    category: "POST CYCLE",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA CLOMIPHENE CITRATE 50</h1>
        <h2 class="chemical-description">Clomiphene Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 50-41-9</p>
          <p><strong>Molecular Weight:</strong> 598.1 g/mol</p>
          <p><strong>Formula:</strong> C32H36ClNO8</p>
          
          <p><strong>Overview:</strong> Originally developed as a female fertility aid, clomiphene citrate has been popular among steroid users for quite some time now as a post-cycle therapy compound used to help recover natural testosterone production. The compound works by partially or completely blocking the effects of estrogen in the body. This is due to the fact that it is a synthetic estrogen with both agonist and antagonist properties.</p>
          
          <p><strong>Mechanism of Action:</strong> Clomiphene citrate acts as a selective estrogen receptor modulator (SERM), blocking estrogen receptors in the hypothalamus and pituitary gland, which stimulates the release of gonadotropin-releasing hormone and subsequently increases testosterone production.</p>
          
          <p><strong>Dosage:</strong> It is advisable to take 25 to 50mg daily for 3 weeks, the dose will have to be adapted according to the desired effect and side effects.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include mood swings, visual disturbances, hot flashes, nausea, headaches, and potential liver strain. May cause temporary vision problems during use.</p>
          
          <p><strong>Composition:</strong><br>
          Clomiphene Citrate: 50mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "pct-astera-004",
    name: "ASTERA EXEMESTANE 25",
    description: "Exemestane 25mg",
    price: 55.0,
    image: "/products/astera post cycle/ASTERA EXEMESTANE 25.png",
    category: "POST CYCLE",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA EXEMESTANE 25</h1>
        <h2 class="chemical-description">Exemestane</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 107868-30-4</p>
          <p><strong>Molecular Weight:</strong> 296.4 g/mol</p>
          <p><strong>Formula:</strong> C20H24O2</p>
          
          <p><strong>Overview:</strong> Exemestane is a steroidal suicide aromatase inhibitor/irreversible aromatase inactivator, lowering production of estrogen in the body by blocking the aromatase enzyme.</p>
          
          <p><strong>Mechanism of Action:</strong> Exemestane is a suicide inhibitor that permanently binds to and inactivates the aromatase enzyme, preventing the conversion of androgens to estrogens. This leads to a significant reduction in circulating estrogen levels.</p>
          
          <p><strong>Dosage:</strong> The initial dose should be 12.5mg taken once or twice a week, and adjust the dose based on the desired effects.</p>
          
          <p><strong>Side Effects:</strong> Side effects include joint pain, hot flashes, fatigue, bone density loss, mood changes, and potential liver stress. May cause over-suppression of estrogen with negative effects on health markers.</p>
          
          <p><strong>Composition:</strong><br>
          Exemestane: 25mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "pct-astera-005",
    name: "ASTERA LETROZOLE 1",
    description: "Letrozole 1mg",
    price: 13.0,
    image: "/products/astera post cycle/ASTERA LETROZOLE 1.png",
    category: "POST CYCLE",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA LETROZOLE 1</h1>
        <h2 class="chemical-description">Letrozole</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 112809-51-5</p>
          <p><strong>Molecular Weight:</strong> 285.3 g/mol</p>
          <p><strong>Formula:</strong> C17H11N5</p>
          
          <p><strong>Overview:</strong> It is the most powerful of the so-called "suicidal aromatase inhibitors", it is usually used pre-competition or to reverse gynecomastia.</p>
          
          <p><strong>Mechanism of Action:</strong> Letrozole is a highly potent non-steroidal aromatase inhibitor that reversibly binds to the aromatase enzyme, blocking the conversion of androgens to estrogens and dramatically reducing circulating estrogen levels.</p>
          
          <p><strong>Dosage:</strong> The dose varies greatly depending on the user and should only be adjusted based on the bloodwork of that person, it is advisable to use 0.5mg as the first dose and adjust it based on the effects obtained.</p>
          
          <p><strong>Side Effects:</strong> Side effects include severe joint pain, bone density loss, fatigue, hot flashes, mood changes, and potential cardiovascular effects. Most potent AI with highest risk of over-suppression.</p>
          
          <p><strong>Composition:</strong><br>
          Letrozole: 1mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "pct-astera-006",
    name: "ASTERA TAMOXIFEN 20",
    description: "Tamoxifen 20mg",
    price: 22.0,
    image: "/products/astera post cycle/ASTERA TAMOXIFEN 20.png",
    category: "POST CYCLE",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TAMOXIFEN 20</h1>
        <h2 class="chemical-description">Tamoxifen Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 54965-24-1</p>
          <p><strong>Molecular Weight:</strong> 563.64 g/mol</p>
          <p><strong>Formula:</strong> C32H37NO8</p>
          
          <p><strong>Overview:</strong> Tamoxifen citrate is a selective estrogen receptor modulator. Selective estrogen receptor modulators can act as estrogen receptor agonists or antagonists. This activity of tamoxifen citrate is tissue selective, effecting those estrogen receptors located in the liver, breast, and bone. When the tamoxifen molecule binds to this receptor, the estrogen is blocked and can't have any effect. For bodybuilders Tamoxifen citrate can help in two ways. Firstly due to the binding affinity of the compound it is able to help in the prevention of gynecomastia. Tamoxifen will compete with estrogen for the estrogen receptors in certain tissues, including the breast, and if it can bind to the receptor estrogen will not have an opportunity to interact with receptor and therefore gynocomastia should not be able to develop. The second, and possibly more beneficial, aspect of tamoxifen citrate for steroid users is its ability to increase the production of luteinizing hormone and follicle stimulating hormone, and therefore increasing testosterone. This ability is why it is often used by steroid users during their post-cycle therapy.</p>
          
          <p><strong>Mechanism of Action:</strong> Tamoxifen acts as a selective estrogen receptor modulator (SERM), blocking estrogen receptors in breast tissue while having estrogen-like effects in other tissues. It also stimulates the hypothalamic-pituitary-gonadal axis to increase natural testosterone production.</p>
          
          <p><strong>Dosage:</strong> The dose to treat both gynecomastia and to be used in PCT varies between 20-40mg per day, the dose has to be adjusted until the desired effect is achieved.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include hot flashes, mood changes, visual disturbances, nausea, fatigue, and potential blood clot risk. May cause liver enzyme elevation in some users.</p>
          
          <p><strong>Composition:</strong><br>
          Tamoxifen Citrate: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },

  // ================================
  // PEPTIDES & HGH - ASTERA PRODUCTS
  // ================================
  {
    id: "peptides-astera-001",
    name: "ASTERA HCG 5000",
    description: "Human Chorionic Gonadotropin (HCG), 5000 IU",
    price: 40.0,
    image: "/products/astera peptides & hgh/ASTERA HCG 5000.png",
    category: "PEPTIDES & HGH",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA HCG 5000</h1>
        <h2 class="chemical-description">Human Chorionic Gonadotropin</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 9002-61-3</p>
          <p><strong>Molecular Weight:</strong> 25719.70 g/mol</p>
          <p><strong>Formula:</strong> C1105H1770N318O336S26</p>
          
          <p><strong>Overview:</strong> Human Chorionic Gonadotropin (HCG) is a highly effective injectable hormone that mimics the function of luteinizing hormone (LH) in the body. It is commonly used to support fertility in women, restore natural testosterone levels in men with low testosterone, and prevent testicular shrinkage during anabolic steroid cycles. HCG promotes ovulation, boosts testosterone production, maintains testicular function, and enhances sperm quality, making it a valuable tool for reproductive health and hormonal balance both in men and women.</p>
          
          <p><strong>Mechanism of Action:</strong> HCG mimics luteinizing hormone (LH) and binds to LH receptors in the testes, stimulating Leydig cells to produce testosterone. It helps maintain testicular function and natural hormone production during or after anabolic steroid cycles.</p>
          
          <p><strong>Dosage:</strong> The recommended dosage of HCG depends on its purpose: For Fertility (Women): 5,000–10,000 IU via intramuscular injection, approximately 36 hours before planned procedures. For Fertility Support (Men): 500–1000 IU, administered via intramuscular or subcutaneous injection, two to three times weekly.</p>
          
          <p><strong>Side Effects:</strong> Side effects may include injection site reactions, headaches, mood swings, gynecomastia, acne, water retention, and potential ovarian hyperstimulation syndrome in women. May cause testicular desensitization with prolonged use.</p>
          
          <p><strong>Composition:</strong><br>
          Human Chorionic Gonadotropin (HCG): 5000 IU<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "peptides-astera-002",
    name: "ASTERA HGH 16",
    description: "Human Growth Hormone (HGH), 16 IU",
    price: 250.0,
    image: "/products/astera peptides & hgh/ASTERA HGH 16.png",
    category: "PEPTIDES & HGH",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA HGH 16</h1>
        <h2 class="chemical-description">Human Growth Hormone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 12629-01-5</p>
          <p><strong>Molecular Weight:</strong> 22260 Da</p>
          <p><strong>Formula:</strong> C990H1529N263O299S7</p>
          
          <p><strong>Overview:</strong> Human Growth Hormone (HGH) is a naturally occurring hormone produced by the pituitary gland, essential for growth, development, and tissue regeneration. Synthetic HGH, identical to the natural hormone, is used to treat growth disorders in children and hormone deficiencies in adults. It is also sought after for its potential benefits in muscle growth, fat loss, and anti-aging. HGH supports muscle development, promotes fat breakdown, enhances bone density, and aids in the repair of connective tissues, making it a versatile hormone for health and performance optimization.</p>
          
          <p><strong>Mechanism of Action:</strong> Human Growth Hormone binds to growth hormone receptors throughout the body, stimulating IGF-1 production in the liver and tissues. It promotes protein synthesis, lipolysis, bone growth, and cellular regeneration while enhancing recovery and anti-aging effects.</p>
          
          <p><strong>Dosage:</strong> Typical dosages range from 1–4 IU per day. Lower doses (1-2IUs) are often used for anti-aging or wellness, while higher doses (3-10IUs) may be prescribed for therapeutic or performance-enhancing purposes. 3IUs for fat burning, 4-8IUs for mass gaining. Administered via subcutaneous injection, typically in morning or before bedtime.</p>
          
          <p><strong>Side Effects:</strong> Side effects include joint pain, muscle pain, swelling, carpal tunnel syndrome, insulin resistance, potential diabetes, increased risk of certain cancers, and acromegaly with excessive doses. Injection site reactions may occur.</p>
          
          <p><strong>Composition:</strong><br>
          Human Growth Hormone (HGH): 16 IU<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "peptides-astera-003",
    name: "ASTERA HGH FRAGMENT 176-191 10",
    description: "HGH Fragment 176-191, 10 mg",
    price: 70.0,
    image: "/products/astera peptides & hgh/ASTERA HGH FRAGMENT 176-191 10.png",
    category: "PEPTIDES & HGH",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA HGH FRAGMENT 176-191 10</h1>
        <h2 class="chemical-description">HGH Fragment 176-191</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 221231-10-3</p>
          <p><strong>Molecular Weight:</strong> 1817.1 g/mol</p>
          <p><strong>Formula:</strong> C84H127F9N24O27S2</p>
          
          <p><strong>Overview:</strong> HGH Fragment 176-191 is a synthetic peptide derived from the amino acid sequence of human growth hormone (HGH). Unlike traditional HGH, this fragment specifically targets fat loss and metabolic enhancement without impacting growth or insulin sensitivity. By stimulating fat breakdown (lipolysis) and reducing fat storage (lipogenesis), it helps decrease body fat while preserving lean muscle mass, making it an effective tool for improving body composition and metabolic health.</p>
          
          <p><strong>Mechanism of Action:</strong> This peptide specifically targets fat receptors to enhance lipolysis without affecting growth or insulin sensitivity. It stimulates fat breakdown while preserving lean muscle mass through selective activation of metabolic pathways.</p>
          
          <p><strong>Dosage:</strong> A typical daily dosage ranges from 250 mcg to 500 mcg, divided into multiple injections for optimal effectiveness. Can be taken in the morning and before a workout. Administered via subcutaneous injection into fatty tissue. Best results when injected before meals and prior to workouts.</p>
          
          <p><strong>Side Effects:</strong> Generally well-tolerated. Potential side effects may include injection site reactions, mild fatigue, and individual sensitivity reactions. Consult with a healthcare professional before use.</p>
          
          <p><strong>Composition:</strong><br>
          HGH Fragment 176-191: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "peptides-astera-004",
    name: "ASTERA MELANOTAN 2 10",
    description: "Melanotan II Peptide Hormone, 10 mg",
    price: 30.0,
    image: "/products/astera peptides & hgh/ASTERA MELANOTAN 2 10.png",
    category: "PEPTIDES & HGH",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA MELANOTAN 2 10</h1>
        <h2 class="chemical-description">Melanotan II Peptide Hormone</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 121062-08-6</p>
          <p><strong>Molecular Weight:</strong> 1024.2 g/mol</p>
          <p><strong>Formula:</strong> C50H69N15O9</p>
          
          <p><strong>Overview:</strong> Melanotan II is a synthetic analog of the peptide hormone alpha-melanocyte-stimulating hormone (α-MSH), which is primarily responsible for promoting skin tanning by stimulating melanin production. This peptide not only enhances skin pigmentation but also exhibits other notable benefits. It has aphrodisiac properties that positively influence libido and sexual function. Additionally, Melanotan II is known to have a mild fat-mobilizing effect, making it a versatile option for those seeking improvements in body aesthetics and composition.</p>
          
          <p><strong>Mechanism of Action:</strong> Melanotan II binds to melanocortin receptors (MC1R, MC3R, MC4R) throughout the body. Activation of MC1R stimulates melanocytes to produce melanin, resulting in skin darkening. MC3R and MC4R activation contributes to appetite suppression and sexual arousal effects. The peptide mimics natural α-MSH but with enhanced potency and longer duration of action.</p>
          
          <p><strong>Dosage:</strong> For optimal results, Melanotan II should be administered according to the following protocol: Initial Phase: Begin with a daily dose of 250-300 mcg for 1 to 2 weeks. This lower starting dosage helps the body adapt to the peptide while minimizing potential side effects such as nausea. Maintenance Phase: After the initial period, transition to a maintenance dosage of 250-500 mcg twice weekly to maintain the desired effects. Melanotan II injections are administered subcutaneously into the fatty tissue, typically in the abdominal region.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, nausea, flushing, decreased appetite, darkening of freckles or moles, fatigue, headaches, or mood changes. Rarely, prolonged erections may occur in males. Start with lower doses to minimize side effects and improve tolerance. Monitor skin changes and discontinue if unusual pigmentation develops. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          Melanotan II Peptide Hormone: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "peptides-astera-005",
    name: "ASTERA TB500 & BPC157 10",
    description: "TB500, BPC157 10 mg",
    price: 100.0,
    image: "/products/astera peptides & hgh/ASTERA TB500 & BPC157 10.png",
    category: "PEPTIDES & HGH",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TB500 & BPC157 10</h1>
        <h2 class="chemical-description">TB500 and BPC157</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 77591-33-4, 137525-51-0</p>
          <p><strong>Molecular Weight:</strong> 4963.4 g/mol, 1419.54 g/mol</p>
          <p><strong>Formula:</strong> C212H350N56O78S, C62H98N16O22</p>
          
          <p><strong>Overview:</strong> TB500 and BPC157 are synthetic peptides widely recognized for their powerful regenerative properties and their ability to support injury recovery and tissue repair. TB500, derived from Thymosin Beta-4, promotes cell migration, proliferation, and differentiation, which are essential processes for efficient wound healing and tissue regeneration. BPC157, on the other hand, stimulates the formation of new blood vessels (angiogenesis) and boosts collagen production, contributing to the healing of muscles, tendons, ligaments, and other tissues. When used together, these peptides work synergistically to enhance recovery from injuries, reduce inflammation, and improve overall tissue health.</p>
          
          <p><strong>Mechanism of Action:</strong> TB500 promotes cell migration, angiogenesis, and tissue remodeling through actin regulation and β4 integrin binding. BPC157 stabilizes gastric pentadecapeptide and promotes healing through multiple pathways including angiogenesis, collagen synthesis, and nitric oxide pathway modulation. Together, they provide enhanced healing capacity through complementary mechanisms of tissue repair and regeneration.</p>
          
          <p><strong>Dosage:</strong> The recommended dosage depends on the type and severity of the injury. A typical protocol involves administering 2 mg to 10 mg per week of each peptide, split into several smaller doses to ensure sustained effects. TB500 and BPC157 can be injected either subcutaneously into the fatty tissue or intramuscularly near the site of the injury, some users have reported that IM have a better effect but there isn't any scientific research backing those claims. The length of treatment varies based on the individual's response and the nature of the injury. For most cases, treatment can last a few weeks (4-6 weeks) to several months.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include but are not limited to: injection site reactions, changes in mood, potential hormonal imbalances, and individual sensitivity reactions. Generally well tolerated with minimal side effects. Possible reactions may also include mild fatigue, temporary water retention, or mild digestive changes. Start with lower doses to assess individual tolerance. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          TB500 (Thymosin Beta-4): 5mg<br>
          BPC157 (Body Protection Compound-157): 5mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },

  // ================================
  // SARMS - ASTERA PRODUCTS
  // ================================
  {
    id: "sarms-astera-001",
    name: "ASTERA GW501516 10",
    description: "GW501516 Cardarine 10mg",
    price: 35.0,
    image: "/products/astera sarms/ASTERA GW501516 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Definition",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA GW501516 10</h1>
        <h2 class="chemical-description">GW501516 Cardarine per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1165910-22-4</p>
          <p><strong>Molecular Weight:</strong> 453.50 g/mol</p>
          <p><strong>Formula:</strong> C21H18F3NO3S2</p>
          
          <p><strong>Overview:</strong> Cardarine, also known as GW501516, is a PPAR-delta activator rather than a SARM. It has become quite popular in bodybuilding since it may support fat burning, recovery, and enhanced endurance. By activating PPAR-delta, Cardarine stimulates energy metabolism genes, increasing fatty acid oxidation and potentially boosting endurance levels.</p>
          
          <p><strong>Mechanism of Action:</strong> GW501516 activates peroxisome proliferator-activated receptor delta (PPAR-δ), which regulates genes involved in energy metabolism. This activation promotes fatty acid oxidation, increases glucose uptake in skeletal muscle, and enhances mitochondrial biogenesis, leading to improved endurance and fat burning capacity.</p>
          
          <p><strong>Dosage:</strong> Cardarine (GW501516) is commonly used in bodybuilding and endurance sports for its potential to aid in fat loss, recovery, and endurance enhancement. Recommended dosages start at 10 mg per day for beginners, while more experienced users may opt for up to 20 mg daily. Take with or without food, preferably split into two doses.</p>
          
          <p><strong>Side Effects:</strong> Generally well tolerated with minimal side effects. Potential side effects may include headaches, nausea, or changes in lipid profiles. Some studies suggest potential concerns with long-term use. Start with lower doses to assess tolerance. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          GW501516 Cardarine: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-002",
    name: "ASTERA LGD4033 10",
    description: "LGD4033 Ligandrol 10mg",
    price: 35.0,
    image: "/products/astera sarms/ASTERA LGD4033 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA LGD4033 10</h1>
        <h2 class="chemical-description">LGD4033 Ligandrol per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1165910-22-4</p>
          <p><strong>Molecular Weight:</strong> 338.25 g/mol</p>
          <p><strong>Formula:</strong> C14H12F6N2O</p>
          
          <p><strong>Overview:</strong> Ligandrol, also known as LGD4033, is a Selective Androgen Receptor Modulator (SARM) known for its potential to promote rapid muscle gain. Recognized as a top choice for bulking among both male and female bodybuilders, Ligandrol supports increased anabolic activity, enhanced strength, and substantial muscle growth.</p>
          
          <p><strong>Mechanism of Action:</strong> LGD4033 selectively binds to androgen receptors in skeletal muscle and bone tissue with high affinity. This selective binding promotes anabolic activity in muscle while minimizing androgenic side effects in other tissues. It increases protein synthesis, muscle mass, and bone density through targeted receptor activation.</p>
          
          <p><strong>Dosage:</strong> A beginner dose would be around 10 mg/day, intermediate being 20mg per day and for advanced users it would range from 30-40mg per day. It can be taken once per day, preferably in the morning with food. Cycle lengths typically range from 6-12 weeks with appropriate post-cycle therapy.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include mild testosterone suppression, fatigue, headaches, or changes in lipid profiles. Some users report water retention or mild mood changes. Regular blood work monitoring is recommended. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          LGD4033 Ligandrol: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-003",
    name: "ASTERA MK2866 10",
    description: "MK-2866 Ostarine 10mg",
    price: 30.0,
    image: "/products/astera sarms/ASTERA MK2866 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA MK2866 10</h1>
        <h2 class="chemical-description">MK-2866 Ostarine per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 841205-47-8</p>
          <p><strong>Molecular Weight:</strong> 389.33 g/mol</p>
          <p><strong>Formula:</strong> C19H14F3N3O3</p>
          
          <p><strong>Overview:</strong> Ostarine, also known as MK-2866, is a powerful and selective androgen receptor modulator (SARM) designed to improve strength, endurance, and lean muscle mass. It is especially beneficial during fat loss or cutting phases, as it preserves muscle mass, prevents muscle loss, supports connective tissue repair, stimulates lean muscle growth and enhances bone density.</p>
          
          <p><strong>Mechanism of Action:</strong> MK-2866 selectively binds to androgen receptors in muscle and bone tissue, promoting anabolic activity while minimizing androgenic side effects. It enhances protein synthesis, increases nitrogen retention, and promotes muscle growth while preserving bone density. Its selectivity reduces prostate enlargement and other unwanted effects.</p>
          
          <p><strong>Dosage:</strong> For Ostarine MK-2866, the recommended daily dosage ranges from 10 mg to 50 mg. Beginners are recommended to start at a conservative 10 mg daily, intermediate users may consider increasing to 25 mg per day, while advanced users can take up to 50 mg daily. Take with or without food, preferably at the same time daily.</p>
          
          <p><strong>Side Effects:</strong> Generally well tolerated with minimal side effects. Potential effects may include mild testosterone suppression, headaches, back pain, or changes in lipid profiles. Some users report mild fatigue or mood changes. Regular monitoring and post-cycle therapy may be necessary. Consult with a healthcare professional before use.</p>
          
          <p><strong>Composition:</strong><br>
          MK-2866 Ostarine: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-004",
    name: "ASTERA MK677 10",
    description: "MK-677 Ibutamoren 10mg",
    price: 35.0,
    image: "/products/astera sarms/ASTERA MK677 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA MK677 10</h1>
        <h2 class="chemical-description">MK-677 Ibutamoren per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 159752-10-0</p>
          <p><strong>Molecular Weight:</strong> 528.67 g/mol</p>
          <p><strong>Formula:</strong> C27H36N4O5S</p>
          
          <p><strong>Overview:</strong> Ibutamoren, also known as MK-677, is a compound that stimulates growth hormone release, resulting in elevated levels of both growth hormone and IGF-1 in the body. Its effects are aimed at improving bone and muscle mass, increasing bone mineral density, enhancing sleep quality, boosting memory function, and strengthening the immune system. This compound is particularly popular among bodybuilders looking to optimize muscle growth and recovery.</p>
          
          <p><strong>Mechanism of Action:</strong> MK-677 acts as a ghrelin receptor agonist and growth hormone secretagogue. It stimulates the release of growth hormone from the pituitary gland by mimicking the hormone ghrelin. This leads to increased levels of growth hormone and IGF-1, promoting muscle growth, bone density, and improved recovery.</p>
          
          <p><strong>Dosage:</strong> The recommended dosage for MK-677 Ibutamoren is generally between 10 and 30 mg, taken once daily. Most users find that 20-30 mg per day achieves optimal effects. For new users, start with 10mg daily. Can be taken with or without food, preferably before bedtime to enhance sleep quality and natural growth hormone release.</p>
          
          <p><strong>Side Effects:</strong> Common side effects may include increased appetite, water retention, lethargy, and mild tingling in extremities. Some users report elevated blood sugar levels or changes in insulin sensitivity. Generally well tolerated at recommended doses. Monitor for any unusual symptoms and consult with a healthcare professional before use.</p>
          
          <p><strong>Composition:</strong><br>
          MK-677 Ibutamoren: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-005",
    name: "ASTERA RAD140 10",
    description: "RAD140 Testolone 10mg",
    price: 45.0,
    image: "/products/astera sarms/ASTERA RAD140 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA RAD140 10</h1>
        <h2 class="chemical-description">RAD140 Testolone per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1182367-47-0</p>
          <p><strong>Molecular Weight:</strong> 393.83 g/mol</p>
          <p><strong>Formula:</strong> C20H16ClN5O2</p>
          
          <p><strong>Overview:</strong> Testolone, also referred to as RAD140, is a Selective Androgen Receptor Modulator (SARM) recognized for its strong potential to promote muscle growth. Known as one of the most effective SARMs for mass gain, it is highly valued for enhancing muscle size and strength. RAD140 specifically targets muscle development, supporting both muscle growth and brain function. Beyond bulking, RAD140 is also suitable for cutting cycles, as it helps develop lean muscle tissue while supporting fat loss.</p>
          
          <p><strong>Mechanism of Action:</strong> RAD140 selectively binds to androgen receptors in skeletal muscle and bone tissue with high affinity and selectivity. It promotes anabolic activity in muscle tissue while minimizing androgenic effects in other organs. This selective binding stimulates protein synthesis, increases muscle mass, and enhances bone density without significant prostate enlargement or liver toxicity.</p>
          
          <p><strong>Dosage:</strong> For best results, RAD140 is typically used in cycles of up to 8 weeks. A daily intake of 10-30 mg is often recommended for strength enhancement. Beginners should start with 10mg daily, while experienced users may use up to 20-30mg daily. Take once daily with or without food, preferably at the same time each day.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include mild testosterone suppression, headaches, nausea, or changes in mood. Some users report increased aggression or hair loss in predisposed individuals. Regular blood work monitoring is recommended. Post-cycle therapy may be necessary after longer cycles. Consult with a healthcare professional before use.</p>
          
          <p><strong>Composition:</strong><br>
          RAD140 Testolone: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-006",
    name: "ASTERA S23 10",
    description: "S23 10mg",
    price: 30.0,
    image: "/products/astera sarms/ASTERA S23 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA S23 10</h1>
        <h2 class="chemical-description">S23 per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1010396-29-8</p>
          <p><strong>Molecular Weight:</strong> 416.75 g/mol</p>
          <p><strong>Formula:</strong> C18H13ClF4N2O3</p>
          
          <p><strong>Overview:</strong> S23 is a Selective Androgen Receptor Modulator (SARM) taken orally, known for its ability to enhance lean muscle mass and increase bone density. Unlike traditional steroids, S23 is tissue-selective, meaning it specifically targets certain tissues. It helps reduce water retention, promoting a more defined, chiseled appearance with increased muscle hardness and a grainy texture. It is probably the most powerful SARM available in the market.</p>
          
          <p><strong>Mechanism of Action:</strong> S23 binds to androgen receptors with high affinity and selectivity, particularly in muscle and bone tissue. It promotes anabolic activity while minimizing androgenic side effects in other organs. S23 also acts as a partial agonist at androgen receptors, providing potent muscle-building effects with reduced water retention compared to traditional anabolic steroids.</p>
          
          <p><strong>Dosage:</strong> For optimal results, a daily dosage of 10-30 mg is recommended for men, divided into two doses due to S23's 12-hour half-life. Since it's really powerful it is recommended to not exceed 6 weeks of daily intake and to take a liver support product like TUDCA with it. Beginners should start with 10mg daily split into two 5mg doses.</p>
          
          <p><strong>Side Effects:</strong> Potential side effects may include testosterone suppression (more significant than other SARMs), mood changes, acne, hair loss in predisposed individuals, and possible changes in cholesterol levels. Some users report vision issues at higher doses. Liver support is recommended. Post-cycle therapy is typically required. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-007",
    name: "ASTERA S4 25",
    description: "S4 Andarine 25mg",
    price: 35.0,
    image: "/products/astera sarms/ASTERA S4 25.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA S4 25</h1>
        <h2 class="chemical-description">S4 Andarine per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 401900-40-1</p>
          <p><strong>Molecular Weight:</strong> 441.37 g/mol</p>
          <p><strong>Formula:</strong> C19H18F3N3O6</p>
          
          <p><strong>Overview:</strong> Andarine, commonly referred to as S4, is one of the most potent Selective Androgen Receptor Modulators (SARMs) available, known for its ability to enhance training and improve the overall physique. The key benefits of S4 include promoting muscle growth, increasing strength, enhancing bone mineral density, reducing body fat, accelerating muscle recovery, and delivering fast gains while maintaining lean muscle mass during cutting phases.</p>
          
          <p><strong>Mechanism of Action:</strong> S4 (Andarine) selectively binds to androgen receptors in muscle and bone tissue, promoting anabolic activity while minimizing androgenic side effects. It has a unique ability to promote fat loss while preserving lean muscle mass. S4 also enhances bone mineral density and may improve muscle hardness and vascularity.</p>
          
          <p><strong>Dosage:</strong> For new users, a starting dose of 25 mg per day is commonly recommended for the first two weeks, after which the dosage may be gradually increased. However, it is advised not to exceed a daily dose of 50 mg because it can cause eye vision problems such as nyctalopia (night blindness). Dose should be divided into at least two dosages due to its 4-6 hour half-life.</p>
          
          <p><strong>Side Effects:</strong> Most notable side effect is vision disturbances, particularly night blindness or yellow tinting at higher doses (above 50mg). Other potential effects include mild testosterone suppression, changes in mood, or hair loss in predisposed individuals. Vision effects are typically reversible upon discontinuation. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          S4 Andarine: 25mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-008",
    name: "ASTERA SR9009 10",
    description: "SR9009 Stenabolic 10mg",
    price: 35.0,
    image: "/products/astera sarms/ASTERA SR9009 10.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SR9009 10</h1>
        <h2 class="chemical-description">SR9009 Stenabolic per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1379686-30-2</p>
          <p><strong>Molecular Weight:</strong> 479.04 g/mol</p>
          <p><strong>Formula:</strong> C20H24ClN3O4S</p>
          
          <p><strong>Overview:</strong> Stenabolic, also known as SR9009, is a unique Rev-ErbA receptor agonist known for its ability to influence multiple bodily functions, including fat storage, glucose metabolism, and circadian rhythm regulation. It is appreciated within the fitness community for its potential to boost exercise capacity, improve endurance, and aid in fat loss without being a SARM or hormone.</p>
          
          <p><strong>Mechanism of Action:</strong> SR9009 acts as a Rev-ErbA nuclear receptor agonist, influencing the body's circadian rhythm and metabolic processes. It enhances mitochondrial biogenesis, increases fat oxidation, and improves glucose metabolism. The compound can increase the number of mitochondria in muscle cells, leading to improved endurance and energy production.</p>
          
          <p><strong>Dosage:</strong> The recommended dosage range for Stenabolic is between 10 mg and 40 mg per day, often divided into multiple doses throughout the day due to its short half-life of approximately 4-6 hours. Many users start with 10-20mg daily and assess tolerance before increasing. Best taken with meals to improve absorption.</p>
          
          <p><strong>Side Effects:</strong> Generally well-tolerated with minimal reported side effects. Some users may experience mild insomnia if taken late in the day due to its effects on circadian rhythm, potential digestive upset, or headaches. Does not cause hormonal suppression like traditional SARMs. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
          <p><strong>Composition:</strong><br>
          SR9009 Stenabolic: 10mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sarms-astera-009",
    name: "ASTERA YK11 5",
    description: "YK11 5mg",
    price: 40.0,
    image: "/products/astera sarms/ASTERA YK11 5.png",
    category: "SARMS",
    brand: "astera",
    filterType: "Gain",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA YK11 5</h1>
        <h2 class="chemical-description">YK11 per tablet</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 1370003-76-1</p>
          <p><strong>Molecular Weight:</strong> 430.54 g/mol</p>
          <p><strong>Formula:</strong> C25H34O6</p>
          
          <p><strong>Overview:</strong> YK11 is a unique compound that functions as both a Selective Androgen Receptor Modulator (SARM) and a myostatin inhibitor. By blocking myostatin, a protein that limits muscle growth, YK11 allows users to push beyond natural genetic limitations, enabling significant muscle growth and strength gains that would otherwise be impossible naturally.</p>
          
          <p><strong>Mechanism of Action:</strong> YK11 works through a dual mechanism: it acts as a partial androgen receptor agonist while simultaneously inhibiting myostatin expression. This combination promotes increased follistatin production, which further suppresses myostatin activity. The result is enhanced muscle protein synthesis, increased muscle fiber growth, and the potential to exceed natural muscle-building limits.</p>
          
          <p><strong>Dosage:</strong> Even a low dose of 5 mg per day for a cycle of 4-8 weeks can produce noticeable muscle gains. For optimal results, many users prefer a daily dosage of 10-15mg divided into two doses due to its 6-12 hour half-life. It is often recommended to use towards the end of a cycle when muscle growth rate has reached a plateau.</p>
          
          <p><strong>Side Effects:</strong> May cause mild to moderate testosterone suppression, requiring proper post-cycle therapy. Other potential effects include hair loss in predisposed individuals, potential liver stress with extended use, and possible joint discomfort. Due to its potent nature, regular monitoring is recommended. Consult with a healthcare professional before use and monitor for any adverse reactions.</p>
          
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },

  // ================================
  // SEXUAL WELLNESS - ASTERA PRODUCTS
  // ================================
  {
    id: "sexual-astera-001",
    name: "ASTERA DAPOXETINE 60",
    description: "Dapoxetine HCL 60mg",
    price: 30.0,
    image: "/products/astera sexual wellness/ASTERA DAPOXETINE 60.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA DAPOXETINE 60</h1>
        <h2 class="chemical-description">Dapoxetine HCL</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 129938-20-1</p>
          <p><strong>Molecular Weight:</strong> 341.4 g/mol</p>
          <p><strong>Formula:</strong> C21H23NO</p>
          
          <p><strong>Overview:</strong> Dapoxetine is a medication used to treat premature ejaculation. It is a short-acting selective serotonin reuptake inhibitor.</p>
          
          <p><strong>Mechanism of Action:</strong> Dapoxetine works as a selective serotonin reuptake inhibitor (SSRI), increasing serotonin levels in synapses. This delays ejaculation by modulating serotonergic neurotransmission in the central nervous system, specifically affecting the ejaculatory reflex.</p>
          
          <p><strong>Dosage:</strong> The daily dose varies between 30 and 60mg, it is advisable to adapt the dose depending on the side effects and the desired effect. It is advisable to take it one hour before the start of sexual activity, it is recommended not to exceed a daily dose of 60mg and to use it only once a day and not every day.</p>
          
          <p><strong>Side Effects:</strong> Common side effects include nausea, dizziness, headache, diarrhea, insomnia, and fatigue. May cause orthostatic hypotension and fainting. Should be used with caution and discontinued if severe side effects occur.</p>
          
          <p><strong>Composition:</strong><br>
          Dapoxetine HCL: 60mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sexual-astera-002",
    name: "ASTERA SEX HARD & STRONG MIX 50:20:30",
    description: "Sildenafil Citrate 50mg, Tadalafil 20mg, Dapoxetine HCL 30mg",
    price: 90.0,
    image:
      "/products/astera sexual wellness/ASTERA SEX HARD & STRONG MIX 50:20:30.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SEX HARD & STRONG MIX 50:20:30</h1>
        <h2 class="chemical-description">Sildenafil Citrate, Tadalafil, Dapoxetine HCL Combination</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 139755-83-2, 171596-29-5, 119356-77-3</p>
          <p><strong>Molecular Weight:</strong> 666.7 g/mol, 389.40 g/mol, 341.88 g/mol</p>
          <p><strong>Formula:</strong> C28H38N6O11S, C22H19N3O4, C21H23NO·HCl</p>
          
          <p><strong>Overview:</strong> This comprehensive sexual enhancement formula combines three active ingredients: Sildenafil Citrate (for erectile function), Tadalafil (for extended duration), and Dapoxetine HCL (for premature ejaculation control). This combination provides both erectile dysfunction treatment and premature ejaculation control in one tablet.</p>
          
          <p><strong>Mechanism of Action:</strong> Sildenafil and Tadalafil inhibit phosphodiesterase type 5 (PDE5), preventing the breakdown of cGMP in penile blood vessels, leading to improved erectile function. Dapoxetine is a selective serotonin reuptake inhibitor (SSRI) that delays ejaculation by increasing serotonin levels in the synaptic cleft.</p>
          
          <p><strong>Dosage:</strong> Take one tablet 1-2 hours before sexual activity. The combination provides comprehensive sexual enhancement with both immediate and extended effects. Do not exceed one tablet per day.</p>
          
          <p><strong>Side Effects:</strong> May include headaches, flushing, nasal congestion, indigestion, vision changes, nausea, and dizziness. May cause dangerous blood pressure drops when combined with nitrates. Seek medical attention for erections lasting over 4 hours or severe side effects.</p>
          
          <p><strong>Composition:</strong><br>
          Sildenafil Citrate: 50mg<br>
          Tadalafil: 20mg<br>
          Dapoxetine HCL: 30mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sexual-astera-003",
    name: "ASTERA SEX HARD MIX 50:20",
    description: "Sildenafil Citrate 50mg, Tadalafil 20mg",
    price: 70.0,
    image: "/products/astera sexual wellness/ASTERA SEX HARD MIX 50:20.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SEX HARD MIX 50:20</h1>
        <h2 class="chemical-description">Sildenafil Citrate & Tadalafil Combination</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 139755-83-2, 171596-29-5</p>
          <p><strong>Molecular Weight:</strong> 666.7 g/mol, 389.40 g/mol</p>
          <p><strong>Formula:</strong> C28H38N6O11S, C22H19N3O4</p>
          
          <p><strong>Overview:</strong> This dual-action erectile enhancement formula combines Sildenafil Citrate and Tadalafil. This combination provides both immediate and long-lasting effects for erectile dysfunction treatment, combining the quick onset of Sildenafil with the extended duration of Tadalafil.</p>
          
          <p><strong>Mechanism of Action:</strong> Both Sildenafil and Tadalafil inhibit phosphodiesterase type 5 (PDE5), preventing the breakdown of cGMP in penile blood vessels. This leads to smooth muscle relaxation, increased blood flow to the penis, and improved erectile function with both rapid onset and extended duration.</p>
          
          <p><strong>Dosage:</strong> Take one tablet 1-2 hours before sexual activity. This combination provides enhanced erectile function with both immediate onset and extended duration. Do not exceed one tablet per day.</p>
          
          <p><strong>Side Effects:</strong> Side effects include headaches, flushing, nasal congestion, indigestion, and potential vision changes. May cause dangerous drops in blood pressure when combined with nitrates. Seek medical attention for erections lasting over 4 hours.</p>
          
          <p><strong>Composition:</strong><br>
          Sildenafil Citrate: 50mg<br>
          Tadalafil: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sexual-astera-004",
    name: "ASTERA SILDENAFIL CITRATE 100 XL",
    description: "Sildenafil Citrate 100mg",
    price: 70.0,
    image:
      "/products/astera sexual wellness/ASTERA SILDENAFIL CITRATE 100 XL.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SILDENAFIL CITRATE 100 XL</h1>
        <h2 class="chemical-description">Sildenafil Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 139755-83-2</p>
          <p><strong>Molecular Weight:</strong> 666.7 g/mol</p>
          <p><strong>Formula:</strong> C28H38N6O11S</p>
          
          <p><strong>Overview:</strong> It is the most popular medication for the treatment of erectile dysfunction, besides it can be useful to improve blood pressure and better vascularization. The XL formulation provides extended release for longer-lasting effects.</p>
          
          <p><strong>Mechanism of Action:</strong> Sildenafil inhibits phosphodiesterase type 5 (PDE5), preventing the breakdown of cGMP in penile blood vessels. This leads to smooth muscle relaxation, increased blood flow to the penis, and improved erectile function.</p>
          
          <p><strong>Dosage:</strong> It is recommended to take between 50 to 100mg one hour before sexual activity, the same protocol can also be applied to improve vascularity during training. Dose should be changed until you reach the desired effect.</p>
          
          <p><strong>Side Effects:</strong> Side effects include headaches, flushing, nasal congestion, indigestion, and potential vision changes. May cause dangerous drops in blood pressure when combined with nitrates. Seek medical attention for erections lasting over 4 hours.</p>
          
          <p><strong>Composition:</strong><br>
          Sildenafil Citrate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sexual-astera-005",
    name: "ASTERA SILDENAFIL CITRATE 100",
    description: "Sildenafil Citrate 100mg",
    price: 40.0,
    image: "/products/astera sexual wellness/ASTERA SILDENAFIL CITRATE 100.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA SILDENAFIL CITRATE 100</h1>
        <h2 class="chemical-description">Sildenafil Citrate</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 139755-83-2</p>
          <p><strong>Molecular Weight:</strong> 666.7 g/mol</p>
          <p><strong>Formula:</strong> C28H38N6O11S</p>
          
          <p><strong>Overview:</strong> It is the most popular medication for the treatment of erectile dysfunction, besides it can be useful to improve blood pressure and better vascularization.</p>
          
          <p><strong>Mechanism of Action:</strong> Sildenafil inhibits phosphodiesterase type 5 (PDE5), preventing the breakdown of cGMP in penile blood vessels. This leads to smooth muscle relaxation, increased blood flow to the penis, and improved erectile function.</p>
          
          <p><strong>Dosage:</strong> It is recommended to take between 50 to 100mg one hour before sexual activity, the same protocol can also be applied to improve vascularity during training. Dose should be changed until you reach the desired effect.</p>
          
          <p><strong>Side Effects:</strong> Side effects include headaches, flushing, nasal congestion, indigestion, and potential vision changes. May cause dangerous drops in blood pressure when combined with nitrates. Seek medical attention for erections lasting over 4 hours.</p>
          
          <p><strong>Composition:</strong><br>
          Sildenafil Citrate: 100mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sexual-astera-006",
    name: "ASTERA TADALAFIL 20 XL",
    description: "Tadalafil 20mg",
    price: 72.0,
    image: "/products/astera sexual wellness/ASTERA TADALAFIL 20 XL.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TADALAFIL 20 XL</h1>
        <h2 class="chemical-description">Tadalafil</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 171596-29-5</p>
          <p><strong>Molecular Weight:</strong> 389.40 g/mol</p>
          <p><strong>Formula:</strong> C22H19N3O4</p>
          
          <p><strong>Overview:</strong> It is one of the most used medications for the treatment of erectile dysfunction along with viagra, unlike this, the duration of its effect is very long, so it is not necessary to take it frequently. The XL formulation provides extended release for even longer duration.</p>
          
          <p><strong>Mechanism of Action:</strong> Tadalafil is a long-acting PDE5 inhibitor that blocks the breakdown of cGMP in penile and pulmonary blood vessels. It enhances erectile function and can improve symptoms of benign prostatic hyperplasia by relaxing smooth muscle.</p>
          
          <p><strong>Dosage:</strong> It is advisable to take it two hours before the sexual activity so that it exerts its effect. It is only necessary to take it once a day and the doses can vary from 5 to 20mg a day, it is advisable to modify the dose until the desired effect is achieved.</p>
          
          <p><strong>Side Effects:</strong> Side effects include headaches, indigestion, back pain, muscle aches, flushing, and nasal congestion. May cause dangerous interactions with nitrates and alpha-blockers. Long duration requires careful timing.</p>
          
          <p><strong>Composition:</strong><br>
          Tadalafil: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
  {
    id: "sexual-astera-007",
    name: "ASTERA TADALAFIL 20",
    description: "Tadalafil 20mg",
    price: 40.0,
    image: "/products/astera sexual wellness/ASTERA TADALAFIL 20.png",
    category: "SEXUAL WELLNESS",
    brand: "astera",
    filterType: "Base",
    details: `
      <div class="product-details">
        <h1 class="product-title">ASTERA TADALAFIL 20</h1>
        <h2 class="chemical-description">Tadalafil</h2>
        <div class="product-description">
          <p><strong>CAS Number:</strong> 171596-29-5</p>
          <p><strong>Molecular Weight:</strong> 389.40 g/mol</p>
          <p><strong>Formula:</strong> C22H19N3O4</p>
          
          <p><strong>Overview:</strong> It is one of the most used medications for the treatment of erectile dysfunction along with viagra, unlike this, the duration of its effect is very long, so it is not necessary to take it frequently.</p>
          
          <p><strong>Mechanism of Action:</strong> Tadalafil is a long-acting PDE5 inhibitor that blocks the breakdown of cGMP in penile and pulmonary blood vessels. It enhances erectile function and can improve symptoms of benign prostatic hyperplasia by relaxing smooth muscle.</p>
          
          <p><strong>Dosage:</strong> It is advisable to take it two hours before the sexual activity so that it exerts its effect. It is only necessary to take it once a day and the doses can vary from 5 to 20mg a day, it is advisable to modify the dose until the desired effect is achieved.</p>
          
          <p><strong>Side Effects:</strong> Side effects include headaches, indigestion, back pain, muscle aches, flushing, and nasal congestion. May cause dangerous interactions with nitrates and alpha-blockers. Long duration requires careful timing.</p>
          
          <p><strong>Composition:</strong><br>
          Tadalafil: 20mg<br>
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
        }
        .chemical-description {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .product-description {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.8;
        }
        .product-description p {
          margin-bottom: 1.5rem;
        }
        .product-description strong {
          color: #1f2937;
          font-weight: 600;
        }
      </style>`,
  },
];
// Helper-Funktion um Produktdetails nach ID zu finden
export const getProductDetails = (
  productId: string,
): ProductDetail | undefined => {
  return productDetails.find((product) => product.id === productId);
};
// Helper-Funktion um Produktdetails nach Name zu finden
export const getProductDetailsByName = (
  productName: string,
): ProductDetail | undefined => {
  return productDetails.find((product) => product.name === productName);
};

// Helper-Funktion um Produktdetails nach ID zu finden
export const getProductDetailById = (
  productId: string,
): ProductDetail | undefined => {
  return productDetails.find((product) => product.id === productId);
};

// Helper-Funktion um alle verfügbaren Produktdetails zu bekommen
export const getAllProductDetails = (): ProductDetail[] => {
  return productDetails;
};
