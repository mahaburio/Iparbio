import React from "react";


import { Header } from '../../components/index.js';
import { Help } from '../../components/common/Help.jsx';
import Cta from '../../components/common/Cta.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

import { FaCalendarDays } from "react-icons/fa6";

import { ProductHeroSection, CompanyDetailsSection, ProductDescSection, Faq, FormulationSection } from '../../components/index.js';

import PhoneInput from "../../components/input/PhoneNumber.jsx";

// Hero Section

const productList = [
{
image: '../images/gift-box.webp',
itemNumber: "225",
title: "Ipar eGift Card",
description: "Instant Email or Text Delivery",
newPrice: "23.50",
learnMoreLink: '#',
preferredPrice: "21.15",
sizeOptions: false,
eGiftDetails: true,
instructionSec: false,
signUpBtn: false
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
]

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

  {/* Canvas BG */}

  <>
    <section className="canvas-bg">
      <div className="container">
        <div>
          <h1>Have a Reason to Celebrate?</h1>
          <p>
            We have the Perfect Card for Every Occasion-Delivered Instantly
          </p>
        </div>
      </div>
    </section>
  </>

  <Faq faqData={faqData} faqFooterImg={false} />

  <ProductSliderInitialize title='You may also like' data={featuredProducts} quantityPicker productSizePicker={true} />

  <Cta />
  <Help />
  <Footer footerDefault={false} footerOnlyDesc={true} />
</MainWrapper>
);
}

export default ProductPage;