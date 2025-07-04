import React, { useEffect, useState } from "react";

const Reviews = ({ onBack }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("checkoutFormData")) || {};
    setFormData(data);
  }, []);

  return (
    <div className="container">
      <div className="order-w-details">

        {/* Contact Info */}
        <div className="contact-in">
          <h3 className="ck-tt d-flex justify-content-between align-items-center pe-2">
            <span>Contact Information</span>
            <a className="edit enabled" onClick={() => onBack(1)}>Edit</a>
          </h3>
          <div className="ck-ct py-2 px-2">
            <li>Name: {formData.firstName} {formData.lastName}</li>
            <li>Email: {formData.email}</li>
            <li>Phone: {formData.phone}</li>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="delivery-mt mt-3">
          <h3 className="ck-tt d-flex justify-content-between align-items-center pe-2">
            <span>Delivery Method</span>
            <a className="edit enabled" onClick={() => onBack(2)} >Edit</a>
          </h3>
          <div className="ck-ct py-2 px-2">
            <strong>1. Shipping Address</strong>
            <div className="ck-ct-dt ps-3 mt-2">
              <span>Shipping Address:</span>
              <div className="checkmark-opt mt-2 d-flex align-items-start gap-2">
                <div className="bullet-input active-bullet mt-1"></div>
                <label>{formData.address}, {formData.city}, {formData.state}, {formData.zip}</label>
              </div>
            </div>
          </div>

          <div className="ck-ct py-2 px-2">
            <strong>2. Delivery Options</strong>
            <div className="ck-ct-dt ps-3 mt-2">
              <div className="checkmark-opt mt-2 d-flex align-items-start gap-2">
                <div className="bullet-input active-bullet mt-1"></div>
                <label>{formData.deliveryOption}</label>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="payment-mt mt-3">
          <h3 className="ck-tt d-flex justify-content-between align-items-center pe-2">
            <span>Payment Method</span>
            <a className="edit enabled" onClick={() => onBack(3)}>Edit</a>
          </h3>
          <div className="ck-ct gf-ct py-2 pb-3 px-2">
            <div className="gf-cd-ct d-flex gap-3 align-items-start">
              <div className="img">
                <img src="/images/ipar-gift-card.webp" alt="gift card" />
              </div>
              <div className="gift-dt">
                <div>Got a reason to celebrate?</div>
                <div>Select, Send – It’s that simple!</div>
                <i>Add Ipar eGift card</i>
              </div>
            </div>
          </div>

          <div className="ck-ct-dt ps-3 mt-2 d-flex justify-content-between align-items-center">
            <div className="checkmark-opt card-type mt-1 d-flex align-items-start gap-2">
              <div className="bullet-input active-bullet mt-1"></div>
              <label>{formData.cardType} ending in {formData.cardNumber?.slice(-4)}</label>
            </div>
            <div className="card-name">{formData.cardName}</div>
            <div className="date card-exp">{formData.expiry}</div>
          </div>
        </div>

        {/* Review Section */}
        <div className="review-pl mt-5">
          <h3 className="ck-tt d-flex justify-content-between align-items-center pe-2">
            <span>Review & Place Order</span>
          </h3>
          <div className="ck-ct py-2 pb-3 px-2">
            <strong>Please review your order info before finalizing your purchase.</strong>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="btn-sec my-5 text-end">
          <button className="black-btn placeOrder activePlaceorder">
            <a href="/order-confirmation">Place Order</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
