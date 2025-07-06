// AddPaymentContent.jsx
import React from "react";

const AddPaymentContent = ({ onSave }) => {
  return (
    <div className="payment-modal">
      <div className="modal-body">
        <h5 className="">Add Payment</h5>

        <div className="card-details mt-3 px-2">
          <div className="name-cd">
            <input type="text" placeholder="Name on the Card" />
          </div>
          <div className="num-cd mt-3">
            <input type="text" placeholder="Card Number" />
          </div>
          <div className="yy-sc mt-3 d-flex gap-2">
            <input className="ex-dt" type="text" placeholder="mm/yy" />
            <input type="text" placeholder="Security Code" />
          </div>
        </div>

        <h5 className="mt-5">More Payment Options</h5>

        <div className="more-options mt-3">
          <div className="option d-flex justify-content-between align-items-center">
            <div className="left d-flex align-items-center gap-2">
              <div className="img">
                <img src="../svg/ipar-logo.svg" alt="" />
              </div>
              <span>Add Ipar gift card</span>
            </div>
            <div className="right">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>

          <div className="option mt-2 d-flex justify-content-between align-items-center">
            <div className="left d-flex align-items-center gap-2">
              <div className="img">
                <img src="../images/PayPal.webp" alt="" />
              </div>
              <span>Paypal</span>
            </div>
            <div className="right">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>

        <div className="btn-sec mt-3 text-end">
          <button className="green-btn mt-3" onClick={onSave}>Save and Continue</button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentContent;
