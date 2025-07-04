import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import classNames from "classnames";
import { AddAddressLine, StateSelect } from "../../input/InputFields";

const DeliverySection = ({ active, onNext, onEdit, completed }) => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    postal: "",
    pickup: null,
    deliveryOption: "usps-ground",
  });

  const [errors, setErrors] = useState({});

  const pickupOptions = [
    "23232 142nd St SE Seattle, WA 98059-3258, US",
    "12345 Elm St Portland, OR 97202, US",
  ];

  const deliveryOptions = [
    {
      id: "usps-ground",
      label: "$5.95 - USPS - Ground Advantage (2-5 business days)",
    },
    {
      id: "ups-surepost",
      label: "$13.62 - UPS Surepost (3-9 business days)",
    },
    {
      id: "usps-express",
      label: "$39.45 - USPS Express Mail",
    },
  ];

  const validate = () => {
    let errs = {};
    // if (!formData.address) errs.address = true;
    // if (!formData.city) errs.city = true;
    // if (!formData.state) errs.state = true;
    // if (!formData.postal) errs.postal = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="deliver-mt mt-4">
      <SectionWrapper
        title="Delivery Method"
        active={active}
        onEdit={onEdit}
        completed={completed}
      >
        <div className="input-section">
          <form onSubmit={handleSubmit}>
            <div className="ck-ct py-2 px-2">
              <strong>1. Shipping Address or Pickup</strong>

              <div className="input-wrapper address-container input-container mt-3">
                <AddAddressLine />

                <div className="zone-details-container">
                  <div className="zone-details">
                    <input
                      type="text"
                      placeholder="*City"
                      className={classNames({ inputAlert: errors.city })}
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                    <StateSelect />
                    <input
                      type="text"
                      placeholder="*Postal Code"
                      className={classNames({ inputAlert: errors.postal })}
                      value={formData.postal}
                      onChange={(e) => handleInputChange("postal", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="ck-ct-dt ps-3 mt-2">
                <div className="pick-up mt-3">
                  <li>Pickup Near You:</li>
                  {pickupOptions.map((address, idx) => (
                    <div
                      key={idx}
                      className="checkmark-opt mt-2 d-flex align-items-start gap-2"
                      onClick={() => handleInputChange("pickup", address)}
                    >
                      <div
                        className={classNames("bullet-input mt-1", {
                          "active-bullet": formData.pickup === address,
                        })}
                      ></div>
                      <label>{address}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ck-ct py-2 px-2">
              <strong>2. Delivery Options</strong>
              <div className="ck-ct-dt ps-3 mt-2 deliveryOption">
                {deliveryOptions.map((opt) => (
                  <div
                    key={opt.id}
                    className="checkmark-opt mt-2 d-flex align-items-start gap-2"
                    onClick={() => handleInputChange("deliveryOption", opt.id)}
                  >
                    <div
                      className={classNames("bullet-input mt-1", {
                        "active-bullet": formData.deliveryOption === opt.id,
                      })}
                    ></div>
                    <label>{opt.label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-sec text-end mt-3">
              <button type="button" className="tsp-btn">Cancel</button>
              <button type="submit" className="black-btn black-btn-sm nextBtn">
                Next
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default DeliverySection;
