
import React, { useState } from "react";
// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components';
import Footer from '../../components/footer/footer.jsx';

// Homepage Sections
import { HeroSection } from '../../components/common/HeroSection.jsx';
import { Help } from '../../components/common/Help.jsx';
import CommunitySection from '../../components/common/Cta.jsx';
import LogosSlider from '../../components/homepage/LogosSlider.jsx';
import { ProductGridSection } from '../../components/homepage/ProductGridSection.jsx';
import CheckoutCardsInitialize from '../../components/common/CheckoutCards.jsx';
import {AboutSection} from '../../components/homepage/AboutSection.jsx';

// Sliders
import ProductSliderInitialize from '../../components/slider/ProductSlider.jsx';

import '../../styles/pages/homepage.css';

const featuredProducts = [
  {
    name: "Women’s Probiotic",
    image: "/images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
    preferedPrice: "Preferred Price $124.33"
  },
  {
    name: "Daily Multivitamin",
    image: "/images/product-img-2.webp",
    details: "30 Tablets for Women",
    price: "$60",
    preferedPrice: "Preferred Price $95.99"
  },

  {
    name: "Daily Multivitamin",
    image: "/images/product-img-3.webp",
    details: "30 Tablets for Women",
    price: "$250",
    preferedPrice: "Preferred Price $95.99"
  },
  {
    name: "Daily Multivitamin",
    image: "/images/product-img-4.webp",
    details: "30 Tablets for Women",
    price: "$580",
    preferedPrice: "Preferred Price $87.99"
  },

  {
    name: "Daily Multivitamin",
    image: "/images/product-img-2.webp",
    details: "30 Tablets for Women",
    price: "$60",
    preferedPrice: "Preferred Price $95.99"
  },
  {
    name: "Daily Multivitamin",
    image: "/images/product-img-3.webp",
    details: "30 Tablets for Women",
    price: "$250",
    preferedPrice: "Preferred Price $95.99"
  },

];

// Benefits product

const benefitsProducts = [
  {
    name: "Mood & Relax",
    image: "/images/mood-rl.webp",
    details: "Natural And Powerful",
  },
  {
    name: "Kids",
    image: "/images/kids.webp",
    details: "Natural And Powerful",
  },
  {
    name: "Mood & Relax",
    image: "/images/mood-rl.webp",
    details: "Natural And Powerful",
  },
  {
    name: "Mood & Relax",
    image: "/images/kids.webp",
    details: "Natural And Powerful",

  },
  {
    name: "Mood & Relax",
    image: "/images/mood-rl.webp",
    details: "Natural And Powerful",
  },
  {
    name: "Mood & Relax",
    image: "/images/kids.webp",
    details: "Natural And Powerful",
  },
]

// 

const discountCardsData = [
  {
    bgImg: "/images/card-img.webp",
    discountText: "Get an extra 10% off at checkout!",
    name: "Discover Vitamin"
  },
  {
    bgImg: "/images/card-img.webp",
    discountText: "Flat 15% off on first order!",
    name: "New User Deal"
  },
  {
    bgImg: "/images/card-img.webp",
    discountText: "Buy 1 Get 1 Free for a limited time!",
    name: "BOGO Offer"
  }
];


// For Product Grid Section
const productData = [
  {
    name: 'NUTRITION',
    image: '../svg/leaf.svg',
    alt: 'Leaf icon',
  },
  {
    name: 'SUNCELLA',
    image: '../svg/sincella.svg',
    alt: 'Sincella icon',
  },
  {
    name: 'PERSONAL CARE',
    image: '../svg/face.svg',
    alt: 'Face icon',
  },
  {
    name: 'NUTRITION',
    image: '../svg/leaf.svg',
    alt: 'Leaf icon',
  },
  {
    name: 'SUNCELLA',
    image: '../svg/sincella.svg',
    alt: 'Sincella icon',
  },
  {
    name: 'PERSONAL CARE',
    image: '../svg/face.svg',
    alt: 'Face icon',
  }
];


function HomePage() {

  const [user] = useState({
    isLoggedIn: true,
    name: "Alex Merry",
    image: "/images/new-shop.webp"
  });

  return (
    <MainWrapper className="homePage">
      {/* Header */}
      <Header user={user} />

      {/* Hero Section */}
      <HeroSection
        title={`A New<br />Beginning for Your<br />Wellness<br />Goals`}
        description="Achieving Your Nutritional Goals is Easier Than You Think. Discover Our Supportive Solutions."
        shapeUrl="../images/leaf-shape.webp"
        imageUrl="../images/new-shop.webp"
      />

      {/* Products Grid */}
      <ProductGridSection productData={productData} />

      <AboutSection />

      {/* Product Slider */}
      <ProductSliderInitialize title={'Featured'} data={featuredProducts} />

      {/* Product Slider */}
      <ProductSliderInitialize sectionClass='featured-section benefits-section' title='Benefits' sliderId='benefitsSlider' btn={false} prevBtnId='prevBenefitsBtn' nextBtnId='nextBenefitsBtn' descTitle productDetailsPrice={false} data={benefitsProducts} />

      {/* Products Grid */}
      <LogosSlider />

      {/* Product Slider (Best Seller) */}
      <ProductSliderInitialize sectionClass='featured-section best-sellers-section' title='Best Sellers' sliderId='sellersSlider' prevBtnId='prevSellersBtn' nextBtnId='nextSellersBtn' data={featuredProducts} />

      {/* Checkout Cards (Data dynamically Changable) */}
      <CheckoutCardsInitialize discountCards={discountCardsData} />

      {/* CTA Section (title, description, buttonText dynamically changeable) */}
      <CommunitySection />


      {/* Help Section */}
      <Help />

      {/* Footer Section */}
      <Footer />
    </MainWrapper>
  );
}

export default HomePage;
