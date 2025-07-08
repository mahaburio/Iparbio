import React, { useState } from "react";
import ProductSliderInitialize from "../../components/slider/ProductSlider.jsx";

import CartItem from '../../components/product-page/CartItem.jsx';

import { CartSummary } from "../../components/product-page/CartSummery.jsx";

import '../../styles/pages/signuppage.css'

const featuredProducts = [
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$50",
    pv: '20pv',
    subscriptionTime: ["1 Month", "2 Months", "6 Months"],
  },

  {
    name: "Nutriation",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
    subscriptionTime: ["1 Month", "2 Months", "6 Months"],
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
    subscriptionTime: ["1 Month", "2 Months", "6 Months"],
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

function SubscriptionCart() {

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


    <div className=" product_cart product_page shopPage">


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
                    onQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
                    subscribeControls={true}
                    updateItem={false}
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
                  { id: 2, title: 'Discount', amount: 0, /* hide: true  */ },
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

      <ProductSliderInitialize title='You may also like' data={featuredProducts} quantityPicker productSizePicker={false} subscriptionSetup={true} btn={false} btnSubscribe={true} />

    </div>
  );
}

export default SubscriptionCart;

