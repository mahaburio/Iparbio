import { useState } from "react";

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';

import '../../styles/pages/signuppage.css'
import{ CartSummary,  PromoCode } from "../../components/product-page/CartSummery.jsx";
import CartItem from "../../components/product-page/CartItem.jsx";

const OrderConfirmation = ({
  isCongratulations = false, // toggle between modes
  orderInfo,
  accountInfo,

}) => {



  const [cartItems] = useState([
    {
      id: 1,
      name: "Welcome Kit",
      price: "$180",
      quantity: 2,
      image: '../images/product-img-2.webp',
      showControls: false,
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
      showControls: false,
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
      showControls: false,
      editOptions: {
        showColor: true,
        showSize: true,
      },
    },

  ]);

  return (
    <>
      <MainWrapper>
        <Header />

        <section className="congratulations-page">
          <div className="order-cart-section mt-5">
            <div className="container">
              <div className="congratulations text-center">
                <div className="img">
                  <img src="../svg/logo-only-leaf.svg" alt="Logo" />
                </div>
                <h1>{isCongratulations ? "Congratulations !" : "Order Confirmation!"}</h1>

                {isCongratulations ? (
                  <>
                    <p>
                      Congratulations! You have completed your enrollment and are all set to take the
                      first step toward a healthier, happier life. We have received your first order
                      and successfully assigned you an Independent Business Advisor (IBA) ID number to
                      help kickstart your business.
                    </p>
                    <strong className="green-color">Your IBA ID Number: {accountInfo?.ibaId}</strong>
                    <p className="mt-3">
                      You'll need this ID to Order products, Access our online services, Team members on
                      board, Customize your business’s online presence
                      <br />
                      Plus, you can explore sales tools, use the shopping cart, get business tips, and
                      much more.
                    </p>
                  </>
                ) : (
                  <div className="order-details">
                    <div className="ck-ct py-2 px-2">
                      <li>Thank you for your order!</li>
                      <li>
                        Your order confirmation number is: <strong>{orderInfo?.confirmationNumber}</strong>
                      </li>
                      <li>
                        Order Date: <strong>{orderInfo?.orderDate}</strong>
                      </li>
                      <li>Your order confirmation email will be sent to: {orderInfo?.email}</li>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="container mt-4">
              <div className="row">
                {isCongratulations && (
                  <div className="col-lg-12 col-md-12 pe-4">
                    <div className="order-w-details">
                      <div className="contact-in mt-4">
                        <h3 className="ck-tt">Account Information</h3>
                        <div className="ck-ct py-2 px-2">
                          <li>Name: {accountInfo?.name}</li>
                          <li>Email: {accountInfo?.email}</li>
                          <li>Phone: {accountInfo?.phone}</li>
                        </div>
                        <p>
                          Please log in to your newly created account using the account information
                          shown below, and the password you created during the enrollment process.
                        </p>
                        <div className="btn-sec my-4 text-center">
                          <button className="green-btn">Sign in</button>
                        </div>
                      </div>

                      <div className="order-confimation">
                        <h3 className="ck-tt">First Order Confirmation</h3>
                        <div className="ck-ct py-2 px-2">
                          <li>Thank you for your order!</li>
                          <li>
                            Your order confirmation number is:{" "}
                            <strong>{orderInfo?.confirmationNumber}</strong>
                          </li>
                          <li>
                            Order Date: <strong>{orderInfo?.orderDate}</strong>
                          </li>
                          <li>Your order confirmation email will be sent to: {orderInfo?.email}</li>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <CartSummary

                  currency='USD'
                  summaryItems={[
                    { id: 1, title: 'Subtotal (8 items)', amount: 500.22 },
                    { id: 2, title: 'Discount', amount: 0, /* hide: true  */ },
                    { id: 4, title: 'Tax', amount: 0 },
                    { id: 5, title: 'Total amount', amount: 700.00, isTotal: true },
                  ]}
                />
                <div className="summary">
                  {/* Promo code section only in Congratulations */}
                  {isCongratulations && (
                    <PromoCode />

                  )}

                  <div className="all-cart-items mt-3">
                    {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      quantity={item.quantity}
                      itemCode={item.itemCode}
                      showControls={item.showControls}
                      editOptions={item.editOptions}

                    />
                  ))}
                  </div>
                </div>
              </div>

              <div className={`btn-sec my-5 text-${isCongratulations ? "end" : "center"}`}>
                <button className="green-btn px-5">Done</button>
              </div>
            </div>
          </div>

          {/* HElp */}
          <Help />

          {/* Footer */}
          <Footer />

        </section>
      </MainWrapper>

    </>
  )
};


export default OrderConfirmation

