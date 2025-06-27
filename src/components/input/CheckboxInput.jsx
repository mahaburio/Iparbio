const Checkbox = ({
  id = "agreeTitle",
  label = "I agree to the terms.",
  required = false,
  formSubmitted = false,
  checked,
  setChecked,
}) => {
  const hasError = required && formSubmitted && !checked;

  return (
    <div className={`custom-checkbox d-flex align-items-center gap-3 mt-4 ${hasError ? "checkbox-alert" : ""}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
        required={required}
        className="hidden-checkbox"
      />
      <div
        className={`radio-input ${checked ? "checked" : ""}`}
        onClick={() => setChecked(!checked)}
      ></div>
      <label htmlFor={id} id="labelInput" className={hasError ? "alert-label" : ""}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
