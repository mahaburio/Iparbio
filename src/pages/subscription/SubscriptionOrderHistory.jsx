import React from 'react'
import Mainwrapper from '../../components/common/Mainwrapper'
import { Header } from '../../components'
import OrderTabs from '../../components/subscription/OrderHistory'
import Pagination from '../../components/common/Pagination'
import Footer from '../../components/footer/footer'
import '../../styles/pages/shopPage.css'
import CheckoutCardsInitialize from '../../components/common/CheckoutCards'
import ProductSliderInitialize from '../../components/slider/ProductSlider'


export const SubscriptionOrderHistory = () => {


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
  return (
    <div>
      <Mainwrapper>
        <div className="">
          <Header pvBars={false} Sponsor={true} />

          <OrderTabs />

          <div className="shopPage">
            <Pagination totalPages={6} onPageChange={(page) => console.log("Page", page)} />
          </div>

          {/* Product Slider (Best Seller) */}
          <ProductSliderInitialize sectionClass='featured-section best-sellers-section' title='Best Sellers' sliderId='sellersSlider' prevBtnId='prevSellersBtn' nextBtnId='nextSellersBtn' data={featuredProducts} />


          {/* Checkout Cards (Data dynamically Changable) */}
          <CheckoutCardsInitialize discountCards={discountCardsData} />

          <Footer footerDefault={false} footerOnlyDesc={true} />
        </div>
      </Mainwrapper>
    </div>
  )
}
