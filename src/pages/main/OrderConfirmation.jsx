import { useState } from "react";

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';

import '../../styles/pages/signuppage.css'

const OrderConfirmation = ({
  isCongratulations = false, // toggle between modes
  orderInfo,
  accountInfo,
  cartItems,
  summary,
}) => {
  // Handle promo code toggle (like your promo section in Congratulations)
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const togglePromo = () => setShowPromo((prev) => !prev);


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

              <div className="summary mt-5">
                <div className="title d-flex align-items-center justify-content-between">
                  <span>
                    First order Summary ({summary?.totalItems} {summary?.totalItems > 1 ? "Items" : "Item"})
                  </span>
                  <span>{summary?.totalPrice}</span>
                </div>
                <div className="sm-desc mt-3 px-lg-3 px-md-3 px-sm-0 px-0">
                  <div className="sb-total item">
                    <span>Subtotal ({summary?.totalItems} items)</span>
                    <span>{summary?.subtotal}</span>
                  </div>

                  <div className="discount item">
                    <span>Shipping</span>
                    <span>{summary?.shipping}</span>
                  </div>

                  <div className="tax item">
                    <span>Tax</span>
                    <span>{summary?.tax}</span>
                  </div>

                  <div className="total-amount total-item item pt-2">
                    <span>Total Order</span>
                    <span>{summary?.totalOrder}</span>
                  </div>

                  <div className="volume item">
                    <span>Total Volume</span>
                    <span>{summary?.totalVolume}</span>
                  </div>

                  {/* Promo code section only in Congratulations */}
                  {isCongratulations && (
                    <div className="promo-cd mt-2">
                      <div
                        className="promo-header d-flex align-items-center justify-content-between"
                        onClick={togglePromo}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="pr-tt">Enter a e-gift card or promo code</span>
                        <span className={`arrow ${showPromo ? "rotate" : ""}`}>
                          <i className="ri-arrow-down-s-line"></i>
                        </span>
                      </div>

                      <div
                        id="promoBody"
                        className={`promo-body d-flex gap-4 align-items-center mt-2 ${showPromo ? "activePromoBody" : ""
                          }`}
                      >
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter code"
                        />
                        <button
                          className="black-btn"
                          onClick={() => alert(`Apply code: ${promoCode}`)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                  )}

                  <div className="all-cart-items mt-3">
                    {cartItems?.map(({ id, name, price, quantity, image }) => (
                      <div className="cart-item d-flex justify-content-between align-items-center" key={id}>
                        <div className="left d-flex align-items-center gap-2">
                          <div className="p-img">
                            <img src={image} alt={name} />
                          </div>
                          <div className="cp-details">
                            <div className="cp-nm">{name}</div>
                            <div className="cp-pr">{price}</div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="cross-item">
                            <span>Quantity: {quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`btn-sec my-5 text-${isCongratulations ? "end" : "center"}`}>
                  <button className="green-btn px-5">Done</button>
                </div>
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

