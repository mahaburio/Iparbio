import { useState } from "react";
import TextInput from "../input/TextInput";
import PhoneNumberInput from "../input/PhoneNumber";
import Checkbox from "../input/CheckboxInput";

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const { firstName, lastName, email, agree } = formData;

    if (!firstName || !lastName || !email || !agree) {
      return;
    }

    console.log("Form submitted!", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Contact Information</h2>

      <div className="form-row">
        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          formSubmitted={formSubmitted}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          formSubmitted={formSubmitted}
        />
      </div>

      <PhoneNumberInput
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
      />

      <TextInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        formSubmitted={formSubmitted}
      />

      <Checkbox
        label="I would like to be contacted with deals, offers, and more."
        required
        formSubmitted={formSubmitted}
        checked={formData.agree}
        setChecked={(value) => setFormData({ ...formData, agree: value })}
      />

      <div className="form-actions btn-sec">
        <button type="button">Cancel</button>
        <button type="submit" className="black-btn">Next</button>
      </div>
    </form>
  );
};

export default ContactForm;
