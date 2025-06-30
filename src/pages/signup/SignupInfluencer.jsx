import { useState } from "react";

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';

import { PhoneNumberInput, AddAddressLine, StateSelect, TextInput } from '../../components/input/InputFields.jsx'
import CheckboxInput from "../../components/input/CheckboxInput.jsx";

import SelectMarketModal from '../../components/signup-page/SelectMarketModal.jsx';


import '../../styles/pages/signuppage.css'

function SignupInfluencer() {

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


  // Form Submittet Logic
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!agreeChecked) return;
  };


  return (
    <>
      <MainWrapper>
        <div className="signup_page signup-page-inf">

          <Header showSearch={false} MeneBarSec={false} showDashboardMenu={false} />

          {/* Title Section */}

          <div className="shop py-3">
            <div className="container">
              <a className="returntocart d-inline-block" href="#">
                <i className="ri-arrow-left-s-line"></i> Shop</a>
            </div>
          </div>

          <section className="title-section">
            <div className="container">
              <h1 className="">
                BShare Love &amp; Earn! <br />
                Be an Influencer ! (cIBA)
              </h1>
              <div className="title-desc mt-4">
                Spread the joy with friends, family, and followers - earn rewards on
                every purchase they make! Enjoy triple rewards:
                <br /><br />
                <li>- Get 10% instant savings on your orders.</li>
                <li>- Receive an extra 5% off with Auto-Order.</li>
                <li>- Earn a 15% commission on every shared purchase.</li>
                <br />
                Plus, grow your team! You can earn additional rewards when the
                Influencers you refer succeed. <br /><br />
                Ready to earn? <br />
                Create account → Get links → Start earning!
              </div>
            </div>
          </section>

          <section className="signup-input-section">
            <div className="container">
              <h2 className="">Sign Up</h2>

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
              <div className="input-section mt-5">
                <form action="" onSubmit={handleSubmit} className="form-group">
                  <div className="input-wrapper">
                    <input className="" type="text" placeholder="*First Name" required="" />
                    <input className="" type="text" placeholder="*Last Name" required="" />
                    <input className="" type="email" placeholder="*Email" required="" />
                    <PhoneNumberInput />
                    <input className="" type="text" placeholder="*Username" required="" />

                    <div className="single-input">
                      <input className="" type="password" placeholder="*Password" required="" />
                    </div>
                    <div className="single-input">
                      <input className="" type="password" placeholder="*Re-enter Password" required="" />
                    </div>

                    <AddAddressLine />
                    <div className="zone-details-container">
                      <div className="zone-details">
                        <input type="text" placeholder="*City" />
                        <StateSelect />
                        <input type="text" placeholder="*Postal Code" />
                      </div>
                    </div>

                    <div className="security mt-3">
                      <h5>Security &amp; Privacy</h5>

                      <CheckboxInput
                        label="I accept Ipar's Influencer Terms & Policies, and Plan. By clicking, I agree to a binding electronic agreement with Ipar Health Sciences, Inc. Cancellation available through customer service."
                        checked={agreeChecked}
                        setChecked={setAgreeChecked}
                        required={true}
                        formSubmitted={formSubmitted}
                      />
                    </div>
                  </div>
                  <div className="btn-wrap">
                    <button className="green-btn mt-5">Sign Up</button>
                    <span>Existing Account? <a href="">Sign In</a></span>
                  </div>
                </form>
              </div>
            </div>
          </section >

          {/* HElp */}
          < Help />

          {/* Footer */}
          < Footer footerOnlyDesc={true} footerDefault={false} />
        </div >

        <SelectMarketModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleSelectCountry}
        />
      </MainWrapper >

    </>
  )
}

export default SignupInfluencer