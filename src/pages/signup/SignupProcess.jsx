import React, { useState,  } from 'react';
import StepProgress from "../../components/common/StepProgressBar.jsx";
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';
import SelectMarketModal from '../../components/signup-page/SelectMarketModal.jsx';
import { PhoneNumberInput } from '../../components/input/InputFields.jsx';
import CheckboxInput from "../../components/input/CheckboxInput.jsx";
import DatePicker from '../../components/input/DatePicker.jsx';


import { AddAddressLine, StateSelect } from '../../components/input/InputFields.jsx';

import { SubscriptionPackage } from './SubscriptionPackage.jsx';
import ProductPageSubscription from '../../components/product-page/ProductPageSubscription.jsx';

const SignupProcess = () => {
  const steps = ['Sign up', 'Create profile', 'Subscription', 'Checkout', 'Complete'];
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(1);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "US",
    name: "United States - English",
    flag: "/flag/usa-flag.png",
  });

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(false);
  };

  // Form Data
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    taxId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    const next = currentStep + 1;
    setCurrentStep(next);
    setCompletedStep(prev => Math.max(prev, next));
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= completedStep) setCurrentStep(stepIndex);
  };



  const packagesData = [
    {
      name: "Welcome Package Eng",
      price: "USD 26",
      volume: 0,
      itemNumber: 262,
      image: "/images/wel-pack.webp",
    },
    {
      name: "Welcome Package -Ru",
      price: "USD 26",
      volume: 0,
      itemNumber: 263,
      image: "/images/wel-pack.webp",
    },
    {
      name: "Welcome Package Tr",
      price: "USD 26",
      volume: 0,
      itemNumber: 264,
      image: "/images/Pink-podium-cosmetic.webp",
    },
  ];



  return (
    <MainWrapper>
      <div className="signup_page sign-up-IBA-shop create-profile">
        <Header showSearch={false} MeneBarSec={false} showDashboardMenu={false} />
        <StepProgress currentStep={currentStep} steps={steps} onStepClick={handleStepClick} maxStepReached={completedStep} />

        <div>
          {currentStep === 1 && (
            <section className="SignupSteps">
              <section className="title-section mt-5">
                <div className="container">
                  <div className="title-desc-green fw-medium">
                    <i>Step 2: Create Account</i>
                  </div>
                  <div className="title-desc mt-4">
                    Time to create your account! Fill in the necessary details to set up
                    your account and move forward in the process.
                  </div>
                </div>
              </section>


              <div className="signup-input-section">
                <div className="container">
                  <div className="country d-flex align-items-center gap-2">
                    <span>*You're currently signing up in <span>{selectedCountry.code}</span></span>
                    <div className="img">
                      <img src={selectedCountry.flag} alt="" />
                    </div>
                  </div>
                  <p onClick={() => setIsModalOpen(true)}>Change Location (Select Market)</p>

                  <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                    <div className="input-item d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Email*</label><br />
                        <input name="email" value={formData.email} onChange={handleInputChange} type="email" required />
                      </div>
                      <div className="tt-txt mt-lg-4 mt-md-4 mt-sm-1 mt-1 ms-lg-3 ms-md-3 ms-sm-0 ms-0 "><i>Verify Your Email Address*</i></div>
                    </div>

                    <div className="input-item mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in d-flex d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                        <PhoneNumberInput label={true} value={formData.phone} onChange={(val) => setFormData(prev => ({ ...prev, phone: val }))} />

                        <div className="tt-txt mt-lg-4 mt-md-4 mt-sm-1 mt-1 ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                          <i>Verify Your phone number*</i>
                        </div>
                      </div>

                    </div>

                    <div className="input-item-pass mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Password*</label><br />
                        <input name="password" value={formData.password} onChange={handleInputChange} type="password" required />
                      </div>
                      <div className="tt-txt-gr mt-lg-4 mt-md-4 mt-sm-1 mt-1 ms-lg-3 ms-md-3 ms-sm-0 ms-0">
                        Your password should be at least 8 characters long, including a mix of letters (both uppercase and lowercase), numbers, and special characters (like !, @, #, etc.). This helps keep your account secure.
                      </div>
                    </div>

                    <div className="input-name mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>First Name*</label><br />
                        <input name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" required />
                      </div>
                      <div className="lb-in">
                        <label>Middle Name</label><br />
                        <input name="middleName" value={formData.middleName} onChange={handleInputChange} type="text" />
                      </div>
                      <div className="lb-in">
                        <label>Last Name*</label><br />
                        <input name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" required />
                      </div>
                    </div>

                    <div className="input-gender mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Gender</label><br />
                        <select name="gender" value={formData.gender} onChange={handleInputChange}>
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="lb-in">
                        <label>Birth Date</label><br />
                        <div className="date-im d-flex gap-2"></div>
                        <DatePicker
                          value={formData.birthDate}
                          onChange={(val) => setFormData(prev => ({ ...prev, birthDate: val }))}
                          id="birth-date"
                          CalendarIcon={true}
                          className="flatpickr-input" />

                      </div>
                    </div>

                    <div className="input-tax-id mt-3 d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start">
                      <div className="lb-in">
                        <label>Social Security Number or Tax ID*</label><br />
                        <input name="taxId" value={formData.taxId} onChange={handleInputChange} type="text" required />
                      </div>
                    </div>

                    <div className="btn-sec d-flex justify-content-between align-items-center mt-5">
                      <div className="pr-pl">
                        * We care about your privacy. <a href="">Privacy Policy</a>
                      </div>
                      <button className="black-btn mt-4" type="submit">Continue</button>
                    </div>
                  </form>

                  <SelectMarketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelect={handleSelectCountry} />
                </div>
              </div>
            </section>
          )}

          {currentStep === 2 && (
            <div className='step-content'>
              <section className="title-section mt-5">
                <div className="container">
                  <div className="title-desc-green fw-medium">
                    <i>Step 3: Create Account</i>
                  </div>
                  <div className="title-desc mt-3">
                    Time to create your account! Fill in the necessary details to set up
                    your account and move forward in the process.
                  </div>
                </div>
              </section>

              <section className="add-address-sec">
                <div className="container">
                  <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                    <h5 className="mt-5">Add address book</h5>

                    <div className='mt-3'>
                      <AddAddressLine LabelShow={true} required />
                    </div>
                    <div className="zone-details-container mt-3">
                      <div className="zone-details">
                        <input type="text" placeholder="*City" required />
                        <StateSelect />
                        <input type="text" placeholder="*Postal Code" required />
                      </div>
                    </div>

                    <div className="btn-sec mt-5">
                      <button className="black-btn">Update Address</button>
                      <button className="black-btn ms-3">Add New</button>
                    </div>

                    <div className="btn-sec d-flex justify-content-between align-items-center mt-5">
                      <div className="pr-pl">
                        * We care about your privacy. <a href="">Privacy Policy</a>
                      </div>
                      <button className="black-btn btn-wrap mt-4" type="submit" >Continue</button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          )}

          {currentStep === 3 && (


            <div className='product_page shopPage'>


              <ProductPageSubscription navigation={false} />

              <SubscriptionPackage packages={packagesData} />

              <div className="container">
                <div className="btn-sec mt-5 text-end">
                  <button className="black-btn mt-5" onClick={handleContinue}>
                    Continue
                  </button>
                </div>
              </div>

            </div>
          )}

          {currentStep === 4 && (
            <section className="step-content container mt-5">
              <h2>Checkout</h2>
              <button className="black-btn mt-5" onClick={handleContinue}>Continue</button>
            </section>
          )}

          {currentStep === 5 && (
            <section className="step-content container mt-5">
              <h2>Complete</h2>
              <p>Thank you for signing up!</p>
            </section>
          )}
        </div>



        <Help />
        <Footer footerOnlyDesc={true} footerDefault={false} />
      </div>
    </MainWrapper>
  );
};

export default SignupProcess;

