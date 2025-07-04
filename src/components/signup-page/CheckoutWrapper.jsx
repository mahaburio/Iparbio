import React, { useState, useEffect } from "react";
import ContactSection from "./Checkout/ContactSection";
import DeliverySection from "./Checkout/DeliverySection";
import PaymentSection from "./Checkout/PaymentSection";
import ReviewSection from "./Checkout/ReviewSection";

const stepMap = {
  contact: 1,
  delivery: 2,
  payment: 3,
  review: 4,
};

const CheckoutWrapper = ({ onReviewClick, startStep = 1 }) => {
  const [step, setStep] = useState(startStep);

  useEffect(() => {
  setStep(startStep);
}, [startStep]);


  const [completedSteps, setCompletedSteps] = useState({
    contact: false,
    delivery: false,
    payment: false,
    review: false,
  });

  const [contactInfo, setContactInfo] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
  });

  const handleNext = (currentStepKey) => {
    const currentStepNum = stepMap[currentStepKey];
    const nextStepNum = currentStepNum + 1;

    setCompletedSteps((prev) => {
      const updated = { ...prev, [currentStepKey]: true };
      if (currentStepKey === "payment") updated.review = true;
      return updated;
    });

    setStep(nextStepNum);
  };

  const handleEdit = (sectionStepNum) => {
    if (sectionStepNum <= step) {
      setStep(sectionStepNum);
    }
  };

  return (
    <div className="order-w-details">
      <ContactSection
        active={step >= 1}
        onNext={() => handleNext("contact")}
        onEdit={() => handleEdit(1)}
        completed={completedSteps.contact}
        formData={contactInfo}
        setFormData={setContactInfo}
      />
      <DeliverySection
        active={step >= 2}
        onNext={() => handleNext("delivery")}
        onEdit={() => handleEdit(2)}
        completed={completedSteps.delivery}
      />
      <PaymentSection
        active={step >= 3}
        onNext={() => handleNext("payment")}
        onEdit={() => handleEdit(3)}
        completed={completedSteps.payment}
      />
      <ReviewSection
        active={step >= 4}
        onEdit={() => handleEdit(4)}
        completed={completedSteps.review}
        onReviewClick={onReviewClick} // ✅ From parent Checkout.jsx
      />

      {step >= 4 && completedSteps.review && (
        <div className="btn-sec my-5 text-end">
          <button className="black-btn placeOrder">
            <a href="/order-confirmation">Place Order</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutWrapper;
