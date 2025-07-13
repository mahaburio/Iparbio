import React from 'react';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Help } from '../../components/common/Help.jsx';

import '../../styles/pages/shoppage.css';
import ProductPageSubscription from '../../components/product-page/ProductPageSubscription.jsx';

function ProductPage() {

const ProductAll = [
    {
      name: "Women’s Probiotic",
      image: "../images/product-img-1.webp",
      details: "50B CFU & 8 Strains",
      price: "$50",
      colors: ["#d5ccc3", "#c28270", "#b16c6d", "#c28170", "#b16d6d"],
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
      name: "Women’s Probiotic",
      image: "../images/product-img-1.webp",
      details: "50B CFU & 8 Strains",
      price: "$50",
      colors: ["#d5ccc3", "#c28270", "#b16c6d", "#c28170", "#b16d6d"],
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
    }
  ];

 
  return (
    <MainWrapper>
      <div className="product_page shopPage">
        <Header AllSidebar={false} AllSidebarForMobile={false} />

        <ProductPageSubscription navigation={true}  products={ProductAll} />
        <Help />
        <Footer footerDefault={true} />
      </div>
    </MainWrapper>
  );
}

export default ProductPage;
