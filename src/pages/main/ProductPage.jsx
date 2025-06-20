import React from 'react';
import { Header } from '../../components/index.js';
import {Help} from '../../components/common/Help.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';

function ProductPage() {
  return (
    <MainWrapper className="product_page shopPage">
      <Header />
      <Help />
      <Footer />
    </MainWrapper>
  );
}

export default ProductPage;
