import React, { useState } from "react";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Controlled Phone Number Input
export function PhoneNumberInput({ label, value, onChange }) {
  return (
    <div className="lb-in">
      {label && <label htmlFor="phone">Phone Number*</label>}
      <PhoneInput
        country="us"
        value={value}
        onChange={onChange}
        inputStyle={{
          width: "100%",
          padding: "10px",
          paddingLeft: "50px",
          fontSize: "16px",
        }}
      />
    </div>
  );
}


// Text Input

export function TextInput({ label, type = "text", required = false, formSubmitted = false }) {
  const [value, setValue] = useState("");

  const hasError = required && formSubmitted && value.trim() === "";

  return (
    <div className="form-group">
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        className={`form-control ${hasError ? "alert-input" : ""}`}
      />
    </div>
  );
};


// Address Line Input

export function AddAddressLine({LabelShow}) {
  const [showExtraInput, setShowExtraInput] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleAddAddressLine = () => {
    setShowExtraInput(true);
  };

  return (
    <div className="address-box ">
      <div className="address-input">
        {LabelShow && (
          <div className="lb-in">Street Address 1*</div>
        )}
        <input
          className="addressFirst"
          type="text"
          placeholder="*Address"
          required
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />

        {showExtraInput && (
          <input
            type="text"
            className="added-input mt-3"
            placeholder="Address Line 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        )}

        {!showExtraInput && (
          <div className="add-address mt-2 d-inline-block" onClick={handleAddAddressLine}>
            <span>+</span> Add Address line
          </div>
        )}
      </div>
    </div>
  )

}


// States Selection

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Northern Marianas Islands", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Virgin Islands",
  "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export function StateSelect({ value, onChange, required = false }) {
  return (
    <div className="form-group">

      <select
        className="form-control stateSelect"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option value="">*State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

