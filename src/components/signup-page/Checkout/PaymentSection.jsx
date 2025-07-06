import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import classNames from "classnames";

import Modal from "../../common/PopupModal";
import AddPaymentContent from "../../common/AddPaymentContent";
import { AddAddressLine, StateSelect } from "../../input/InputFields";

const PaymentSection = ({ active, onNext, onEdit, completed }) => {
  const [formData, setFormData] = useState({
    promo: "",
    billingSame: true,
  });

  const [setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation if needed
    onNext();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  return (
    <div className="payment-mt mt-4">
      <SectionWrapper
        title="Payment Method"
        active={active}
        onEdit={onEdit}
        completed={completed}
      >
        <form onSubmit={handleSubmit}>
          <div className="ck-ct gf-ct py-2 pb-3 px-2">
            <div className="gf-cd-ct d-flex flex-wrap gap-3 align-items-start">
              <div className="img">
                <img src="/images/ipar-gift-card.webp" alt="Gift Card" />
              </div>
              <div className="gift-dt">
                <div>Got a reason to celebrate?</div>
                <div>Select, Send – It’s that simple!</div>
                <i>Add Ipar eGift card</i>
              </div>
            </div>

            <div className="promo-cd mt-2 mb-2">
              <div className="promo-body d-flex flex-wrap gap-3 align-items-start mt-2">
                <span className="pr-tt">
                  Enter a gift card, voucher or promotional code
                </span>
                <div className="d-flex align-items-center gap-3">
                  <input
                    type="text"
                    value={formData.promo}
                    onChange={(e) => handleInputChange("promo", e.target.value)}
                  />
                  <button type="button" className="black-btn applyBtn">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="add-payment mt-3">
            <div className="add-payment-txt">1. Add Payment</div>
            <div
              className="add-credit mt-2"
              onClick={() => setIsModalOpen(true)}
            >
              <span>
                + Add a credit or debit card
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </div>
          </div>

          <div className="ck-ct py-2 mt-2 billing-address">
            <strong>2. Billing address is same as shipping address.</strong>
            <div className="ck-ct-dt ps-3 mt-2">
              <div
                className="checkmark-opt mt-2 d-flex align-items-start gap-2"
                onClick={() => handleInputChange("billingSame", true)}
              >
                <div
                  className={classNames("bullet-input mt-1", {
                    "active-bullet": formData.billingSame,
                  })}
                ></div>
                <label>
                  Billing address is same as shipping address. <br />
                  If the billing address differs from the shipping address, add a{" "}
                  <span className="fw-medium" style={{ color: "var(--green-color)", cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={() => setIsAddressModalOpen(true)} >
                    new address
                  </span>
                  .
                </label>
              </div>
            </div>
          </div>

          <div className="btn-sec text-end mt-3">
            <button type="button" className="tsp-btn">Cancel</button>
            <button type="submit" className="black-btn black-btn-sm nextBtn">
              Next
            </button>
          </div>
        </form>
      </SectionWrapper>

      {/* payment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddPaymentContent />
      </Modal>

      {/* Address modal */}
      <Modal isOpen={isAddressModalOpen} onClose={() => setIsAddressModalOpen(false)}>

        <div className="modal-body modal-small">
          <h5 className="">Billing Address</h5>

          <div className="input-section mt-3">
            <form action="">
              <div className="input-wrapper input-container">
                <AddAddressLine />
                <div className="zone-details-container mt-3">
                  <div className="zone-details">
                    <input type="text" placeholder="*City" />
                    <StateSelect />
                    <input type="text" placeholder="*Postal Code" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="btn-sec mt-3 text-end">
            <button className="green-btn mt-3">Save and Continue</button>
          </div>
        </div>

      </Modal>
    </div>
  );
};

export default PaymentSection;
