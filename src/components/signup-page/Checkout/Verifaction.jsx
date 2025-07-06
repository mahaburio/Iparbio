import React, { useState } from 'react';
import { EmailVerificationModal, PhoneVerificationModal, PaymentVerificationModal } from './VerificationModal';


export const VerifactionEmail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [isPhoneModalOpen, setPhoneModalOpen] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);

  const handleVerify = () => {
    setEmailVerified(true);
  };

  const handlePhoneVerify = () => {
    setPhoneVerified(true);
  };

  const handlePaymentVerify = () => {
    setPaymentVerified(true);
  };

  return (
    <div className="signup_page verifaction-page">
      <div className="title-section">
        <div className="container">
          <h1 class="">Verify Your Information</h1>

          <div className="title-desc mt-4">
            <div>
              To keep setting up your account, we just need to verify a few things
              with you first:

            </div>
            <div className="title-desc-green verify-desc mt-3 mb-3">
              <span
                className={`text text-email ${emailVerified ? 'disabled' : ''}`}
                onClick={() => !emailVerified && setIsModalOpen(true)}
              >
                1. Verify Email:
              </span>
              <div className="checkmark checkmark-email">
                {emailVerified && <i className="ri-check-line"></i>}
              </div>
            </div>

            {/* ✅ This block renders only one at a time */}
            <div className={emailVerified ? "update-text update-text-email" : "default default-email"}>
              {emailVerified
                ? "Thanks for verifying your email. You are all set!"
                : "Please confirm your email by clicking on the link we sent to the address you provided. This helps us keep your account safe and sound."}
            </div>




            {/* Phone Verifaction */}
            <div className="title-desc-green verify-desc mt-3 mb-3">
              <span
                className={`text text-phone ${phoneVerified ? 'disabled' : ''}`}
                onClick={() => !phoneVerified && setPhoneModalOpen(true)}
              >
                2. Phone Number:
              </span>
              <div className="checkmark checkmark-phone">
                {phoneVerified && <i className="ri-check-line"></i>}
              </div>
            </div>

            <div className={phoneVerified ? "update-text update-text-phone" : "default default-phone"}>
              {phoneVerified
                ? "Thanks for confirming your number. Your account is now more secure."
                : "We'll send you a verification code to help secure your account. Just enter your number, and we'll take care of the rest."}
            </div>

            {/* Payment Verifaciton */}

            <div className="title-desc-green verify-desc mt-3 mb-3">
              <span
                className={`text text-payment ${paymentVerified ? 'disabled' : ''}`}
                onClick={() => !paymentVerified && setIsPaymentModalOpen(true)}
              >
                3. Payment Method:
              </span>
              <div className="checkmark checkmark-payment">
                {paymentVerified && <i className="ri-check-line"></i>}
              </div>
            </div>

            <div className={paymentVerified ? 'update-text update-text-payment' : 'default default-payment'}>
              {paymentVerified
                ? 'You are all set! Your payment method has been successfully saved for future purchase.'
                : 'No worries—you won\'t be charged until you purchase another product. Set up your payment method at your own pace.'}
            </div>
          </div>

          <EmailVerificationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onVerify={handleVerify}
          />

          <PhoneVerificationModal
            isOpen={isPhoneModalOpen}
            onClose={() => setPhoneModalOpen(false)}
            onVerify={handlePhoneVerify}
          />

          <PaymentVerificationModal
            isOpen={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
            onVerify={handlePaymentVerify}
          />
        </div>
      </div>
    </div>
  );
};



