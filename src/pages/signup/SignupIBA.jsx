import React from "react";

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components/index.js';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';

import '../../styles/pages/signuppage.css'

function SignupPage() {

  return (
    <>
      <MainWrapper>
        <div className="signup_page signup_page_iba">
          <Header showSearch={false} MeneBarSec={false} />

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
                Grow &amp; Earn! <br />
                Join as an IBA and enjoy !
              </h1>
              <div className="title-desc title-desc-green mt-5">
                Want to sign up as a new IBA? You'll need a referral from an
                existing member first. For more info, just give your local office a
                shout or hit up your sponsor through the registration link.
              </div>
              <div className="title-desc title-desc-green mt-5">
                <i>Step 1: Check Out Your Sponsor Info (Required)*</i>
              </div>
              <div className="title-desc mt-4">
                Before you proceed, make sure you’ve reviewed your sponsor’s
                information. This step is a must-have to keep things running
                smoothly.
              </div>

              <div className="id-box mt-5">
                <div className="sponsor d-flex gap-3 align-items-center">
                  <div className="id d-flex flex-column gap-1">
                    <span>Sponsored ID</span>
                    <div className="input-wrapper">
                      <input type="text" placeholder="123456789" min="1" max="10" />
                    </div>
                  </div>
                  <div className="bc d-flex flex-column gap-1">
                    <span>BC#</span>
                    <div className="input-wrapper d-flex align-items-center">
                      <input type="text" placeholder="001" min="1" max="8" />
                      <i className="ri-arrow-down-s-fill"></i>
                    </div>
                  </div>
                  <div className="btn-sec mt-4">
                    <button className="green-btn">Check</button>
                  </div>
                </div>

                <div className="placement mt-4 d-flex gap-3 align-items-center">
                  <div className="id d-flex flex-column gap-1">
                    <span>Placement ID</span>
                    <div className="input-wrapper">
                      <input type="text" placeholder="123456789" />
                    </div>
                  </div>
                  <div className="bc d-flex flex-column gap-1">
                    <span>BC#</span>
                    <div className="input-wrapper d-flex align-items-center">
                      <input type="text" placeholder="001" min="1" max="3" />
                      <i className="ri-arrow-down-s-fill"></i>
                    </div>
                  </div>
                </div>

                <div className="btn-sec mt-5 text-lg-end text-md-end text-sm-end text-center">
                  <button className="black-btn mt-3">Continue</button>
                </div>
              </div>
            </div>
          </section>

          {/* HElp */}
          <Help />

          {/* Footer */}
          <Footer footerOnlyDesc={true} footerDefault={false} />
        </div>
      </MainWrapper>

    </>
  )
}

export default SignupPage