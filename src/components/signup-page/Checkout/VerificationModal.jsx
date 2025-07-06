import React, { useState } from 'react';
import Modal from '../../common/PopupModal';

import { PhoneNumberInput } from '../../input/InputFields';
import Checkbox from '../../input/CheckboxInput';

export const EmailVerificationModal = ({ isOpen, onClose, onVerify }) => {
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showFinalVerifyModal, setShowFinalVerifyModal] = useState(false);

  const userEmail = "sss@iparhealth.com";
  const userName = "XXXXXXX";

  const handleSave = () => {
    onVerify();
    setTimeout(() => onClose(), 500);
  };

  return (
    <>
      {/* 1. Primary Modal */}
      <Modal isOpen={isOpen} onClose={onClose} className="large-modal verifaction-modal p-0">
        <div className="modal-body">
          <h1 className="md-head-tl">Verify Email</h1>

          <div className="md-dsc">
            To continue to create your account, please confirm your email by clicking on the link we sent to:
          </div>

          <div className="md-email mt-4 d-flex align-items-center flex-wrap gap-3">
            <span>{userEmail}</span>
            <span
              className="changeEmailAddress d-flex gap-1 align-items-center"
              onClick={() => setShowChangeEmail(true)}
            >
              <i>Change Email Address</i>
              <span className="arw"><i className="ri-arrow-right-s-line"></i></span>
            </span>
          </div>

          <div className="md-btn-sec mt-4">
            <button className="green-btn open-email-btn" onClick={handleSave}>
              Open Email App
            </button><br />
            <button
              className="upd-btn green-btn mt-3"
              onClick={() => setShowUpdateEmail(true)}
            >
              Update Email Address
            </button><br />
            <a href="#" className="mt-3 d-inline-block" onClick={onClose}>
              I'll do this later
            </a>
          </div>

          {/* Inline Change Email Box */}
          <div className={`changeItemModal ${showChangeEmail ? 'activeItemModal' : ''}`} id="changeEmailModal">
            <div className="close-modal" onClick={() => setShowChangeEmail(false)}>
              <i className="ri-close-large-line"></i>
            </div>
            <div className="md-email mt-3">Email*</div>
            <div className="input-section">
              <div className="add-input d-flex align-items-center gap-2 flex-wrap">
                <input type="email" placeholder="example@gmail.com" />
                <i>Add</i>
              </div>

              <div className="verify-input mt-3 d-flex align-items-center gap-2 flex-wrap">
                <input type="email" placeholder="" />
                <i>Verify your Email Address*</i>
              </div>

              <div className="btn-sec text-end mt-3">
                <button className="tsp-btn cancel-modal" onClick={() => setShowChangeEmail(false)}>Cancel</button>
                <button className="black-btn black-btn-sm">Save</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* 2. Update Email Modal */}
      <Modal isOpen={showUpdateEmail} onClose={() => setShowUpdateEmail(false)} className="verifaction-modal p-0">
        <div className="modal-body">
          <h1 className="md-head-tl">Update Email</h1>
          <div className="md-dsc mt-3">
            We'll send a link to your new email address to verify it. Your login email will be updated as well.
          </div>
          <div className="md-email mt-3">Email: {userEmail}</div>

          <div className="md-btn-sec mt-3">
            <button
              className="green-btn mt-3"
              onClick={() => {
                setShowUpdateEmail(false);
                setShowFinalVerifyModal(true);
              }}
            >
              Update Email Address
            </button>
          </div>
        </div>
      </Modal>

      {/* 3. Final Email Confirmation Modal */}
      <Modal isOpen={showFinalVerifyModal} onClose={() => setShowFinalVerifyModal(false)} className="verifaction-modal p-0">
        <div className="modal-body">
          <h1 className="md-head-tl">Email Verification</h1>
          <div className="md-dsc mt-3">
            Hi {userName}, <br /><br />
            Please click the button below to verify <span>{userEmail}</span> with Ipar.
          </div>

          <div className="md-btn-sec mt-3">
            <button className="green-btn mt-3">
              Update Email Address
            </button>
          </div>

          <div className="md-dsc mt-2">
            Verifying your email address helps us keep your account safe.
          </div>
        </div>
      </Modal>
    </>
  );
};



// Phone Verification

export const PhoneVerificationModal = ({ isOpen, onClose, onVerify, phone = '+1(213)333-4446' }) => {
  const [showChangePhone, setShowChangePhone] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const handleSavePhone = () => {
    setShowCodeModal(true);
  };

  const handleFinalVerify = () => {
    onVerify();
    setTimeout(() => {
      setShowCodeModal(false);
      onClose();
    }, 500);
  };

  const [agreeChecked, setAgreeChecked] = useState(false);
  
  return (
    <>
      {/* Main Phone Verification Modal */}
      <Modal isOpen={isOpen} onClose={onClose} className="large-modal verifaction-modal p-0">
        <div className="modal-body">
          <h1 className="md-head-tl">Verify Phone</h1>
          <div className="md-dsc mt-3">
            Please confirm your mobile number and we'll text you a verification code. <span>{phone}</span>
          </div>

          <div className="changePhone mt-2" onClick={() => setShowChangePhone(true)}>
            <i>Change Mobile Number</i>
            <span className="arw"><i className="ri-arrow-right-s-line"></i></span>
          </div>

          <div className="in-ph mt-3">
            <PhoneNumberInput />
          </div>
          <Checkbox
            label='I agree to receive order updates and promotional messages via text'
            checked={agreeChecked}
            setChecked={setAgreeChecked}
            required={true}

          />

          <div className="md-btn-sec mt-3">
            <button className="green-btn firstSaveBtn mt-3" onClick={handleSavePhone}>
              Save and Continue
            </button>
          </div>

          {/* Change Phone Inline Box */}
          <div className={`changeItemModal ${showChangePhone ? 'activeItemModal' : ''}`}>
            <div className="close-modal close-modal-phone" onClick={() => setShowChangePhone(false)}>
              <i className="ri-close-large-line"></i>
            </div>
            <div className="md-email mt-3">Primary phone*</div>
            <div className="input-section">
              <div className="add-input d-flex align-items-center gap-2 flex-wrap">
                <PhoneNumberInput />
                <i>Add</i>
              </div>

              <div className="verify-input mt-3 d-flex align-items-center gap-2 flex-wrap">
                <PhoneNumberInput />
                <i>Verify your Phone Number*</i>
              </div>

              <div className="btn-sec text-end mt-3">
                <button className="tsp-btn cancel-modal-phone" onClick={() => setShowChangePhone(false)}>Cancel</button>
                <button className="black-btn black-btn-sm">Save</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Code Verification Modal */}
      <Modal isOpen={showCodeModal} onClose={() => setShowCodeModal(false)} className="large-modal verifaction-modal p-0">
        <div className="modal-body">
          <h1 className="md-head-tl">Verify Phone</h1>
          <div className="md-dsc mt-3">
            <b className="d-inline-block mb-2">Enter your code</b><br />
            We just sent a 6-digit code to <span>{phone}</span>. Enter the code once you receive it.
          </div>

          <div className="in-cd mt-3">
            <input className="codeInput" type="text" maxLength="6" />
            <div className="alert-txt text-danger mt-1">Please enter your 6-digit code.</div>
          </div>

          <div className="not-get mt-3">
            <span className="md-dsc">Didn't get it?</span>
            <span className="alert-txt text-danger ms-4 d-inline-block">Resend</span>
          </div>

          <div className="md-btn-sec mt-3">
            <button className="green-btn finalSaveBtn mt-3" onClick={handleFinalVerify}>
              Save and Continue
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};


// Payment Verification

import AddPaymentContent from '../../common/AddPaymentContent';

export const PaymentVerificationModal = ({ isOpen, onClose, onVerify }) => {
  const handleFinalVerify = () => {
    onVerify();
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="modal-medium verifaction-modal p-0">
      <AddPaymentContent onSave={handleFinalVerify} />
    </Modal>
  );
};

