import React, { useState } from "react";
import { Header } from '../../components/index.js';
import { Help } from '../../components/common/Help.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

import Modal from "../../components/common/PopupModal.jsx";

import { ProductHeroSection, CompanyDetailsSection, ProductDescSection, Faq, FormulationSection } from '../../components/index.js';

import CartItem from '../../components/product-page/CartItem.jsx';
import ProductDetails from "../../components/product-page/ProductDetaills.jsx";

import {CartSummary} from "../../components/product-page/CartSummery.jsx";

import '../../styles/pages/signuppage.css'

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
    colors: ["#d5ccc3", "#c28170", "#b16c6d", "#c28170", "#b16c6d"],

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
    pv: '12pv',

  },
]

// Cart ITem 



function CartList() {

  const [user] = useState({
    isLoggedIn: true,
    name: "Alex Merry",
    image: "/images/new-shop.webp"
  });


  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Welcome Kit",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "105",
      showControls: true,
      editOptions: {
        showColor: true,
        showSize: false,
      },
    },
    {
      id: 2,
      name: "Balance",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "103/500ml",
      showControls: true,
      editOptions: {
        showColor: false,
        showSize: true,
      },
    },
    {
      id: 3,
      name: "Lipstick",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "262/No5",
      showControls: false,
      editOptions: {
        showColor: true,
        showSize: true,
      },
    },

    {
      id: 4,
      name: "Lipstick",
      price: "$200",
      quantity: 1,
      image: '../images/product-img-1.webp',
      itemCode: "103/500ml",
      showControls: true,
      editOptions: {
        showColor: false,
        showSize: true,
      },
    },
  ]);

  const handleDelete = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <MainWrapper>

      <div className=" product_cart product_page shopPage">
        <Header user={user} />


        <section className="order-cart-section">
          <div className="container mt-5">
            <div className="review-txt">Review order:</div>
          </div>
          <div className="container mt-4 cart-container">
            <div className="row">
              <div className="col-lg-7 col-md-12 pe-4">
                <h3>Your Cart (6 items)</h3>

                <div className="all-cart-items">
                  {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      quantity={item.quantity}
                      itemCode={item.itemCode}
                      showControls={item.showControls}
                      onDelete={() => handleDelete(item.id)}
                      editOptions={item.editOptions}
                      onQuantityChange={(qty) => handleQuantityChange(item.id, qty)
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <CartSummary
                // Country Currency Code here
                title="Cart Summary"
                  currency="USD"
                  summaryItems={[
                    { id: 1, title: 'Subtotal (8 items)', amount: 500.22 },
                    { id: 2, title: 'Discount', amount: 0, /* hide: true  */},
                    { id: 3, title: 'Free Shipping Applied', amount: 0 },
                    { id: 4, title: 'Tax', amount: 0 },
                    { id: 5, title: 'Total amount', amount: 700.00, isTotal: true },
                  ]}
                />
              </div>

            </div>
            <div className="btn-sec my-5 text-end">
              <button className="black-btn mt-3"><a href="../html/customer-sign-in.html">Checkout</a></button>
            </div>
          </div>
        </section>

        <ProductSliderInitialize title='You may also like' data={featuredProducts} quantityPicker productSizePicker={true} />

        <Help />
        <Footer footerDefault={false} footerOnlyDesc={true} />
      </div>

    </MainWrapper>
  );
}

export default CartList;

