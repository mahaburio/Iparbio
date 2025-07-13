import React, { useState, useEffect } from 'react';

import { useCart } from "../../context/CartContext";

import HeaderIntialize from '../../components/header/Header';
import MainWrapper from '../../components/common/Mainwrapper';
import Footer from '../../components/footer/footer';
import ProductPageSubscription from '../../components/product-page/ProductPageSubscription';
import PaymentMethod from '../../components/signup-page/Checkout/PaymentMethod';
import '../../styles/style.css';
import SubscriptionCart from './SubscriptionCart';

const SubscriptionProductAll = () => {
  const [activeTab, setActiveTab] = useState('subscription');


  const { subtotalAmount, totalPV } = useCart(); // ✅ use totalPV


  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const SubscriptionProducts = [
    {
      name: "Lipstick",
      image: "../images/Pink-podium-cosmetic.webp",
      details: "50B CFU & 8 Strains",
      price: "$50",
      pv: '20pv',
      subscriptionTime: ["1 Month", "2 Months", "6 Months"],
    },
    {
      name: "Nutrition",
      image: "../images/product-img-1.webp",
      details: "50B CFU & 8 Strains",
      price: "$80",
      subscriptionTime: ["1 Month", "2 Months", "6 Months"],
    },
    {
      name: "Women’s Probiotic",
      image: "../images/Pink-podium-cosmetic.webp",
      details: "50B CFU & 8 Strains",
      price: "$80",
      subscriptionTime: ["1 Month", "2 Months", "6 Months"],
    },
    {
      name: "Women’s Probiotic",
      image: "../images/product-img-1.webp",
      details: "50B CFU & 8 Strains",
      price: "$80",
      subscriptionTime: ["1 Month", "2 Months", "6 Months"],
    },
    {
      name: "Lipstick",
      image: "../images/Pink-podium-cosmetic.webp",
      details: "50B CFU & 8 Strains",
      price: "$50",
      pv: '20pv',
    },
    {
      name: "Nutrition",
      image: "../images/product-img-1.webp",
      details: "50B CFU & 8 Strains",
      price: "$80",
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
      price: "$80",
    }
  ];

  // For ::after animation when activeTab changes
  useEffect(() => {
    const menuContainer = document.querySelector('.activation-menus');
    const menus = menuContainer?.querySelectorAll('.act-menu');

    if (menus) {
      menus.forEach((menu, index) => {
        if (menu.id === activeTab) {
          menuContainer.style.setProperty('--after-left', `${index * 50}%`);
        }
      });
    }
  }, [activeTab]);

  const [showCart, setShowCart] = useState(false);

  return (
    <MainWrapper>
      <div>
        <HeaderIntialize  AllSidebar = {false} AllSidebarForMobile = {false}  Sponsor={true} />

        <div className="shopPage subscription_all">
          <section className="activation-section">
            <div className="container">
              <div className="activation-menus">
                <div
                  className={`act-menu ${activeTab === 'subscription' ? 'active' : ''}`}
                  id="subscription"
                  onClick={() => setActiveTab('subscription')}
                >
                  Subscription
                </div>
                <div
                  className={`act-menu ${activeTab === 'managePayment' ? 'active' : ''}`}
                  id="managePayment"
                  onClick={() => setActiveTab('managePayment')}
                >
                  Manage Payments
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Main Content Section (Subscription tab) */}
        {activeTab === 'subscription' && (
          <section id="mainContentWrap">
            <section className="subscription-card-section pt-4">
              <div className="container">
                <div className="subscription-card">
                  <div className="total-order">
                    Create Subscription <b className="green-title">Order 1</b>
                    <span className="date green-title">  {formattedDate}</span>
                  </div>

                  <div className="subtotal-dt">
                    Subtotal:{" "}
                    <span className="subtotal green-title">
                      ${subtotalAmount.toFixed(2)}
                    </span>
                  </div>

                  <div className="pv gap-1">
                    Volume <span className="green-title" id="pvHere">{totalPV.toFixed(2)} PV</span>
                  </div>

                  <div className="arrowIcon" style={{ color: "var(--white-100)" }}>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Subscription */}
            {!showCart ? (
              <div className="productSubsripitonSec">
                <section className="product-title-section py-4 mt-5">
                  <div className="container">
                    <div className="product-header text-center product-title-header pt-4">
                      <h1 className="fw-bold">Subscribe &amp; Save</h1>
                      <p>
                        Get your favorite products delivered on time, every time—plus
                        enjoy extra savings and perks!
                      </p>
                    </div>
                  </div>
                </section>

                <ProductPageSubscription
                  ProductTitle={false}
                  products={SubscriptionProducts}
                  GoCart={false}
                />

                <div className="container">
                  <div className="btn-sec mt-5 text-lg-end text-md-end text-sm-end text-center">
                    <button className="black-btn" onClick={() => setShowCart(true)}>
                      Go to Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <SubscriptionCart />
            )}
          </section>
        )}

        {/* Payment Method Section */}
        {activeTab === 'managePayment' && (
          <section id="payment-method" className="py-5">
            <div className="container">
              <PaymentMethod />
            </div>
          </section>
        )}

        <Footer footerOnlyDesc={true} footerDefault={false} />
      </div>
    </MainWrapper>
  );
};

export default SubscriptionProductAll;
