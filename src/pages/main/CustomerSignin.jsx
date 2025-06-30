import React from "react";
import MainWrapper from "../../components/common/Mainwrapper";

const CustomerSignin = () => {
  return (
    <MainWrapper>
      <div className="customerSignIn">
        <div className="container">
          <div className="content">
            <div className="tt-desc">
              * Sign up as a Preferred Customer to get a{" "}
              <strong>10%</strong> discount and exclusive wellness benefits!
            </div>
            <div className="btn-sec">
              <a href="" className="sign-up">
                Sign up
              </a>
              <a href="" className="login">
                Login
              </a>
              <a href="" className="guest">
                Continue as guest
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default CustomerSignin;
