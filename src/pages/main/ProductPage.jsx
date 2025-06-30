import React from 'react';
import { Header } from '../../components/index.js';
import { Help } from '../../components/common/Help.jsx';
import Cta from '../../components/common/Cta.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

import { ProductHeroSection, CompanyDetailsSection, ProductDescSection, Faq, FormulationSection } from '../../components/index.js';

import '../../styles/pages/shoppage.css'

const featuredProducts = [
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$50",
    pv: '20pv',
  },

  {
    name: "Nutriation",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
    sizes: ['Solo 0.2', 'Darz 0.5']
  },

  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
    colors: ["#d5ccc3", "#c28170", "#b16c6d", "#c28170", "#b16c6d", "#c28170", "#b16c6d", "#c28170", "#b16c6d"],



  },

  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$850",
  },

  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",

  },

  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$850",
  },
]

// Product Listt

const productList = [
  {
    image: '../images/7-days-Photoroom.webp',
    itemNumber: "258",
    title: "Balance",
    description: "7 Day Rebalance & Detoxing (Shah Monzej*)",
    newPrice: "23.50",
    learnMoreLink: '#',
    preferredPrice: "21.15",
    instruction: "7-days formulated system for hormone balance and detoxification",
    capsuleInfo: "2711 Capsules / Bottle",
  },


];

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

      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis, laudantium dolore exercitationem ratione optio distinctio tempora esse id! Cupiditate nihil optio quo eos ipsa, cum ipsum reiciendis voluptatem! Rerum porro debitis explicabo. Laborum molestias, ea accusamus porro mollitia inventore? Iste corrupti mollitia blanditiis repudiandae harum recusandae voluptate eos molestiae.`
     
    ],
  },
  {
    title: "Ingredients",
    paragraphs: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis, laudantium dolore exercitationem ratione optio distinctio tempora esse id! Cupiditate nihil optio quo eos ipsa, cum ipsum reiciendis voluptatem! Rerum porro debitis explicabo. Laborum molestias, ea accusamus porro mollitia inventore? Iste corrupti mollitia blanditiis repudiandae harum recusandae voluptate eos molestiae.`
    ],
  },
  {
    title: "Usage",
    paragraphs: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis, laudantium dolore exercitationem ratione optio distinctio tempora esse id! Cupiditate nihil optio quo eos ipsa, cum ipsum reiciendis voluptatem! Rerum porro debitis explicabo. Laborum molestias, ea accusamus porro mollitia inventore? Iste corrupti mollitia blanditiis repudiandae harum recusandae voluptate eos molestiae.`
    ],
  },
  {
    title: "FAQs",
    paragraphs: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis, laudantium dolore exercitationem ratione optio distinctio tempora esse id! Cupiditate nihil optio quo eos ipsa, cum ipsum reiciendis voluptatem! Rerum porro debitis explicabo. Laborum molestias, ea accusamus porro mollitia inventore? Iste corrupti mollitia blanditiis repudiandae harum recusandae voluptate eos molestiae.`
    ],
  },
];



function ProductPage() {
  return (
    <MainWrapper>

      <div className="product_page shopPage">
        <Header subtotalCard />
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
      </div>
    </MainWrapper>
  );
}

export default ProductPage;