import React from 'react';
import { Header } from '../../components/index.js';
import { Help } from '../../components/common/Help.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

const featuredProducts = [
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.png",
    details: "50B CFU & 8 Strains",
    price: "$80",
    preferedPrice: "Preferred Price $124.33"
  },
]

function ProductPage() {
  return (
    <MainWrapper className="product_page shopPage">
      <Header />
      <ProductSliderInitialize data={featuredProducts} />
      <Help />
      <Footer />
    </MainWrapper>
  );
}

export default ProductPage;
