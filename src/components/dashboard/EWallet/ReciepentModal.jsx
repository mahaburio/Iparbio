import React, { useState } from "react";
import Modal from "../../common/PopupModal";

const RecipientModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [iparId, setIparId] = useState("");
  const [recipientName, setRecipientName] = useState("");

  const handleSearch = () => {
    if (iparId.trim()) {
      setStep(2);
    } else {
      alert("Please enter valid Ipar ID / Email / Phone");
    }
  };

  const handleNext = () => {
    if (recipientName.trim()) {
      setStep(3);
    } else {
      alert("Please enter recipient name");
    }
  };

  const isDisabled = (currentStep) => step < currentStep;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="recipientModal">
        <div className="modal-body">

          {/* Step 1 */}
          <div className={`rcptn-itm ${isDisabled(1) ? "disableItem" : ""}`}>
            <input
              id="iparId"
              type="text"
              placeholder="* Ipar ID, email, phone number"
              value={iparId}
              onChange={(e) => setIparId(e.target.value)}
              disabled={isDisabled(1)}
            />
            <button
              className="green-btn green-btn-sm"
              onClick={handleSearch}
              disabled={isDisabled(1)}
            >
              Search
            </button>
          </div>

          {/* Step 2 */}
          <div className={`rcptn-itm flex-column align-items-start w-100 mt-3 ${isDisabled(2) ? "disableItem" : ""}`}>
            <div className="header d-flex gap-3">
              <span>Who is this?</span>
              <span>{iparId || "40**********6"}</span>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-between mt-2">
              <input
                type="text"
                placeholder="Murzamatova Kanayim"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                disabled={isDisabled(2)}
              />
              <button
                className="green-btn green-btn-sm"
                onClick={handleNext}
                disabled={isDisabled(2)}
              >
                Next
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className={`rcptn-itm mt-5 ${isDisabled(3) ? "disableItem" : ""}`}>
            <div className="user-d d-flex gap-2 align-items-center">
              <div className="img">
                <img src="/images/person.webp" alt="user" />
              </div>
              <input
                type="text"
                placeholder="Murzamatova Kanayim"
                disabled={isDisabled(3)}
              />
            </div>
            <button className="green-btn green-btn-sm" disabled={isDisabled(3)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RecipientModal;
