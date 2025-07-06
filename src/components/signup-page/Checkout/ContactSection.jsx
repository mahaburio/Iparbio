import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { PhoneNumberInput } from "../../input/InputFields";
import CheckboxInput from "../../input/CheckboxInput";

const ContactSection = ({ active, onNext, onEdit, completed, formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    let errs = {};
    if (!formData.first) errs.first = true;
    if (!formData.last) errs.last = true;
    if (!formData.phone) errs.phone = true;
    if (!formData.email) errs.email = true;
    if (!formData.agree) errs.agree = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!validate()) return;

    onNext(); // Proceed to next step if valid
  };

  return (
    <div className="contact-in">
      <SectionWrapper
        title="Contact Information"
        active={active}
        onEdit={onEdit}
        completed={completed}
      >
        <div className="contact-in">
          <div className="input-section">
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div className="input-wrapper input-container">
                  <div className={`input-item ${errors.first ? "inputAlert" : ""}`}>
                    <input
                      type="text"
                      placeholder="*First Name"
                      value={formData.first}
                      onChange={(e) => handleInputChange("first", e.target.value)}
                    />
                  </div>

                  <div className={`input-item ${errors.last ? "inputAlert" : ""}`}>
                    <input
                      type="text"
                      placeholder="*Last Name"
                      value={formData.last}
                      onChange={(e) => handleInputChange("last", e.target.value)}
                    />
                  </div>

                  <div className="input-item input-item-phone d-flex gap-2">
                    <div className="phone-int-cnt d-flex flex-column">
                      <PhoneNumberInput
                        label={false}
                        value={formData.phone}
                        onChange={(value) => handleInputChange("phone", value)}
                      />
                      <div className="dem-txt">
                        We'll text you a code to confirm your number
                      </div>
                    </div>
                    <span>Verify Phone Number*</span>
                  </div>

                  <div className={`input-item input-item-email ${errors.email ? "inputAlert" : ""}`}>
                    <input
                      type="email"
                      placeholder="*Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    <span>Verify Email Address*</span>
                  </div>
                </div>

                <div className="agree-title mt-4 d-flex align-items-center gap-3">
                  <CheckboxInput
                    label="I would like to be contacted with deals, offers, and more."
                    checked={formData.agree || false}
                    setChecked={(val) => handleInputChange("agree", val)}
                    required={true}
                    formSubmitted={formSubmitted}
                  />
                </div>

                <div className="btn-sec text-end mt-3">
                  <button type="button" className="tsp-btn">Cancel</button>
                  <button type="submit" className="black-btn black-btn-sm nextBtn">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactSection;
