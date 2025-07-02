import React from 'react';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Help } from '../../components/common/Help.jsx';

import '../../styles/pages/shoppage.css';
import ProductPageSubscription from '../../components/product-page/ProductPageSubscription.jsx';

function ProductPage() {
 
  return (
    <MainWrapper>
      <div className="product_page shopPage">
        <Header AllSidebar={false} AllSidebarForMobile={false} />

        <ProductPageSubscription navigation={true} />
        <Help />
        <Footer footerDefault={true} />
      </div>
    </MainWrapper>
  );
}

export default ProductPage;
