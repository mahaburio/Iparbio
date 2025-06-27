import React from 'react';
import { Header } from '../../components/index.js';
import { Help } from '../../components/common/Help.jsx';
import Cta from '../../components/common/Cta.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

import { ProductHeroSection, CompanyDetailsSection, ProductDescSection, Faq, FormulationSection } from '../../components/index.js';

// Hero Section

const productList = [
{
image: '../images/Pink-podium-cosmetic.webp',
itemNumber: "258",
title: "Balance",
description: "7 Day Rebalance & Detoxing (Shah Monzej*)",
newPrice: "23.50",
learnMoreLink: '#',
preferredPrice: "21.15",
instruction: "7-days formulated system for hormone balance and detoxification",
sizeOptions: true,
},

];


const featuredProducts = [
{
name: "Women’s Probiotic",
image: "../images/product-img-1.webp",
details: "50B CFU & 8 Strains",
price: "$50",
colors: ["#d5ccc3", "#c28170", "#b16c6d", "#c28170", "#b16c6d"],
pv: '20pv',
},

{
name: "Nutriation",
image: "../images/product-img-1.webp",
details: "50B CFU & 8 Strains",
price: "$80",
},

{
name: "Women’s Probiotic",
image: "../images/product-img-1.webp",
details: "50B CFU & 8 Strains",
price: "$80",
sizes: ["Solo 0.75 fl oz", "Doppio 1.5 fl oz", "Tripple 2.25 fl oz"],

},

{
name: "Women’s Probiotic",
image: "../images/product-img-1.webp",
details: "50B CFU & 8 Strains",
price: "$80",
},
]


// For COmpany section (Section Two)

const companyDetailsData = [
{
img: "../svg/support.svg",
alt: "Hormonal Balance Support",
label: "Hormonal Balance Support",
},
{
img: "../svg/digestive.svg",
alt: "Digestive Health Enhancement",
label: "Digestive Health Enhancement",
},
{
img: "../svg/total-body.svg",
alt: "Total Body Detoxification",
label: "Total Body Detoxification",
},
{
img: "../svg/metabolic.svg",
alt: "Metabolic Wellness",
label: "Metabolic Wellness",
},
];

// For Second

const companyDetailsDataTwo = [
{
img: "../svg/fda.svg",
alt: "Made in a FDA registered facility",
label: "Made in a FDA registered facility",
},
{
img: "../svg/gmp.svg",
alt: "Certified Good Manufacturing Practices",
label: "Certified Good Manufacturing Practices",
},
{
img: "../svg/haccp.svg",
alt: "Made in a Intertek Certified Facility",
label: "Made in a Intertek Certified Facility",
},
{
img: "../svg/vegan.svg",
alt: "VEGA",
label: "VEGA",
},
];

// Faq Data

const faqData = [
{
title: "More Details",
paragraphs: [
<p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
<p><b>The Digestive+ Blend</b> is a cutting-edge fusion of ancient knowledge and modern advancements. Anchored by the robust and stable probiotic strain Bacillus coagulans, this blend enhances gut health and digestive efficiency. Complemented by Papaya Extract and Fennel Seed, this blend optimizes nutrient absorption, maintains digestive balance, and supports the body's natural cleansing mechanisms.*
</p>,
<p>Modern scientific research increasingly validates what traditional healers have known for thousands of years: hormonal balance and overall wellness are closely connected to digestive health. This comprehensive <b>7-day system, built on millennia of traditional medicine and enhanced by modern science, is designed to help restore your body's natural balance while supporting optimal digestive function.*</b>
</p>
],
},
{
title: "Ingredients",
paragraphs: [
<p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
<p><b>The Digestive+ Blend</b> is a cutting-edge fusion of ancient knowledge and modern advancements. Anchored by the robust and stable probiotic strain Bacillus coagulans, this blend enhances gut health and digestive efficiency. Complemented by Papaya Extract and Fennel Seed, this blend optimizes nutrient absorption, maintains digestive balance, and supports the body's natural cleansing mechanisms.*
</p>,
],
},
{
title: "Usage",
paragraphs: [
<p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
<p><b>The Digestive+ Blend</b> is a cutting-edge fusion of ancient knowledge and modern advancements. Anchored by the robust and stable probiotic strain Bacillus coagulans, this blend enhances gut health and digestive efficiency. Complemented by Papaya Extract and Fennel Seed, this blend optimizes nutrient absorption, maintains digestive balance, and supports the body's natural cleansing mechanisms.*
</p>,
],
},
{
title: "FAQs",
paragraphs: [
<p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
<p><b>The Digestive+ Blend</b> is a cutting-edge fusion of ancient knowledge and modern advancements. Anchored by the robust and stable probiotic strain Bacillus coagulans, this blend enhances gut health and digestive efficiency. Complemented by Papaya Extract and Fennel Seed, this blend optimizes nutrient absorption, maintains digestive balance, and supports the body's natural cleansing mechanisms.*
</p>,
],
},
];


function ProductPage() {
return (
<MainWrapper className="product_page shopPage">
  <Header />


  {productList.map((product, idx) => (
  <ProductHeroSection key={idx} {...product} />
  ))}

  <CompanyDetailsSection companyDetailsData={companyDetailsData} />

  <ProductDescSection />

  <CompanyDetailsSection companyDetailsData={companyDetailsDataTwo} />

  {/* Formulation Section */}

  <FormulationSection />

  <Faq faqData={faqData} />

  <ProductSliderInitialize title='You may also like' data={featuredProducts} quantityPicker productSizePicker={true} />

  <Cta />
  <Help />
  <Footer footerDefault={false} footerOnlyDesc={true} />
</MainWrapper>
);
}

export default ProductPage;