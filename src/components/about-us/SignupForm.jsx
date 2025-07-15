import React from "react";

const SignupForm = ({
  title,
  iconUrl = true,
  fields = [
    { label: "Full Name", name: "fullName", type: "text", placeholder: "Write..." },
    { label: "Email", name: "email", type: "email", placeholder: "Write..." },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "Write..." },
  ],
  buttonText = "Submit",
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    if (onSubmit) onSubmit(data);
  };

  return (
    <div className="signup-container py-5">
      <div className="row">
        <div className="col-lg-6">
          {iconUrl && (
            <div className="icon">
              <img src='../svg/white-leaf.svg' alt="Icon" />
            </div>
          )}
          <h1 className="mt-4">{title}</h1>
        </div>

        <div className="col-lg-6 mt-lg-0 mt-4">
          <form onSubmit={handleSubmit}>
            {fields.map((field, idx) => (
              <div key={idx} className={`lb-in ${idx > 0 ? "mt-4" : ""}`}>
                <label htmlFor={field.name}>{field.label}</label><br />
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            <button type="submit" className="submit-btn mt-4">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
