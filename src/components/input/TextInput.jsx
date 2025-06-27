import React, { useState } from "react";

const TextInput = ({ label, type = "text", required = false, formSubmitted = false }) => {
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

export default TextInput;
