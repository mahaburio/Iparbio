import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import MainWrapper from "../../components/common/Mainwrapper.jsx";
import {PhoneNumberInput} from '../../components/input/InputFields.jsx';


import "../../styles/pages/signin.css";

function SignInPage({ method = "phone" }) {
  // Dynamic Title
  const title = {
    phone: "Sign in with phone",
    email: "Sign in with email",
    passcode: "Sign in with passcode"
  };

  // Render input fields
  const renderInputs = () => {
    switch (method) {
      case "email":
        return (
          <>
            <div className="input-wrapper-section mt-5">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="password mt-3">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
            </div>
            <p className="mt-3 not-acc">
              Forgot password? Log in with{" "}
              <a className="text-decoration-none" href="/signin-with-passcode">
                <i>Passcode</i>
              </a>
            </p>
          </>
        );

      case "passcode":
        return (
          <>
            <div className="input-wrapper-section mt-5">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="password mt-3">
                <label htmlFor="passcode">Passcode</label>
                <input type="password" id="passcode" />
              </div>
            </div>
            <p className="mt-1 desc-txt">
              We’ll text you a code to confirm your number
            </p>
          </>
        );

      case "phone":
      default:
        return (
          <>
            <div className="input-head mt-5 d-flex align-items-center justify-content-between">
              <span className="pb-1">Country Code</span>
              <span className="pb-1">Phone number</span>
            </div>
            <div className="input-wrapper">
              <PhoneNumberInput />
            </div>
            <p className="mt-1 desc-txt">
              We'll text you a code to confirm your number
            </p>
          </>
        );
    }
  };

  return (
    <MainWrapper>
      <div className="signInPage">
        {/* Header */}
        <section className="sign-in-header py-3">
          <div className="container">
            <div className="logo text-center d-flex justify-content-center align-items-center">
              <div className="img">
                <img src="../images/ipar-logo-checkout.webp" alt="Ipar Logo" />
              </div>
            </div>
          </div>
        </section>

        {/* Main */}
        <section className="main-content-section">
          <div className="container">
            <div className="content">
              <div className="title-name">{title[method]}</div>

              {renderInputs()}

              {/* Common Continue Button */}
              <div className="btn-sec text-center mt-4">
                <button className="green-btn">Continue</button>
              </div>


              {/* Footer only for Phone Sign-in Page */}
              {method === "phone" && (
                <>

                  {/* Social Auth Buttons (common) */}
                  <div className="or text-center mt-4">
                    <span>Or</span>
                  </div>

                  <div className="social-account-sign mt-4">
                    <div className="social-wrapper">
                      <div className="icon">
                        <TfiEmail fontSize={24} color="var(--gray-100)" />
                      </div>
                      <span>Continue with Email</span>
                    </div>

                    <div className="social-wrapper">
                      <div className="icon">
                        <FaApple fontSize={26} color="var(--black-100)" />
                      </div>
                      <span>Continue with Apple</span>
                    </div>

                    <div className="social-wrapper">
                      <div className="icon">
                        <FcGoogle fontSize={26} />
                      </div>
                      <span>Continue with Google</span>
                    </div>

                    <p className="mt-3 not-acc">
                      Don’t have an account?{" "}
                      <a className="signUp" href="/signup">
                        Sign up here
                      </a>
                    </p>

                  </div>
                </>
              )}

            </div>




            <div className="foot-content">
              <p className="text-center mt-5">
                By logging in, you agree to IPAR Health Sciences, Inc.'s{" "}
                <a href="">Privacy policy and terms of service</a>
              </p>
            </div>


          </div>

        </section>
      </div >
    </MainWrapper >
  );
}

export default SignInPage;
