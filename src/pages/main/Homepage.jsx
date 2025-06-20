import React from 'react';
import { Header } from '../../components';
import { HeroSection } from '../../components/common/HeroSection.jsx';
import { ProductGridSection } from '../../components/homepage/ProductGridSection.jsx';
import { Help } from '../../components/common/Help.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';

import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

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

function HomePage() {
  return (
    <MainWrapper className="homePage">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        title={`A New<br />Beginning for Your<br />Wellness<br />Goals`}
        description="Achieving Your Nutritional Goals is Easier Than You Think. Discover Our Supportive Solutions."
        shapeUrl="../images/leaf-shape.webp"
        imageUrl="../images/new-shop.webp"
      />

      {/* Products Grid */}
      <ProductGridSection />

      {/* Product Slider */}
      <ProductSliderInitialize data={featuredProducts} />

      {/* Help Section */}
      <Help />

      {/* Footer Section */}
      <Footer />
    </MainWrapper>
  );
}

export default HomePage;
