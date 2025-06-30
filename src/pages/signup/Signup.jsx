import { useState } from "react";

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';

import StepProgress from "../../components/common/StepProgressBar.jsx";

import SelectMarketModal from '../../components/signup-page/SelectMarketModal.jsx';

import {PhoneNumberInput, AddAddressLine} from '../../components/input/InputFields.jsx';

import CheckboxInput from "../../components/input/CheckboxInput.jsx";

import '../../styles/pages/signuppage.css'
import CardsSection from "../../components/signup-page/CardsSection.jsx";


function SignupPage() {

  // Form Submittet Logic
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!agreeChecked) return;
  };


  // For SelectMarket Modal Logic
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

    const [currentStep] = useState(2);


  return (
    <>
      <div className="signup_page signup-page-inf">
        <Header showDashboardMenu={false} />

        <StepProgress currentStep={currentStep} />


        {/* Hero */}
        <section className="hero-img-section">
          <div className="container">
            <img src="../images/sign-up.webp" alt="Signup-Hero-Image" />
          </div>
        </section>


        {/* Title Section */}
        <section className="title-section">
          <div className="container">
            <h1 className="">
              Becoming a <br />
              Preferred Customer
            </h1>
            <p className="mt-4 ">
              Sign up as a Preferred Customer to get a <b>10%</b> discount and
              exclusive wellness benefits!
            </p>
          </div>
        </section>


        {/* SignUp */}
        <section className="">
          <div className="container">
            <section className="signup-input-section">
              <h2>Sign Up</h2>

              <div className="country d-flex align-items-center gap-2">
                <span>
                  *You're currently signing up in{" "}
                  <span id="selectedCountry">{selectedCountry.code}</span>
                </span>
                <div className="img">
                  <img id="selectedFlag" src={selectedCountry.flag} alt="" />
                </div>
              </div>

              <p id="selectMarket" onClick={() => setIsModalOpen(true)}>
                Change Location (Select Market)
              </p>

              {/* Form */}

              <div className="form-group">
                <div className="input-section mt-5">
                  <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                      <input type="text" placeholder="*First Name" required />
                      <input type="text" placeholder="*Last Name" required />
                      <input type="email" placeholder="*Email" required />
                      <PhoneNumberInput />
                      <input type="password" placeholder="*Password" required />
                    </div>

                    <CheckboxInput
                      label="I would like to be contacted with deals, offers, and more."
                      checked={agreeChecked}
                      setChecked={setAgreeChecked}
                      required={true}
                      formSubmitted={formSubmitted}
                    />

                    <div className="btn-wrap">
                      <button className="green-btn mt-5" type="submit">
                        Sign Up
                      </button>
                      <span>
                        Existing Account? <a href="Signin">Sign In</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              <SelectMarketModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSelect={handleSelectCountry}
              />
            </section>
          </div>
        </section>


        {/* Card Section */}

        <CardsSection />


        {/* HElp */}
        <Help />

        {/* Footer */}
        <Footer />
      </div>

    </>
  )
}

export default SignupPage