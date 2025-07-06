import React, { useState } from "react";
import MainWrapper from "../../components/common/Mainwrapper";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Footer from "../../components/footer/footer";

const ResourceCenterLogin = () => {
  const [iparId, setIparId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔐 Add your login logic here
    console.log("Logging in with:", { iparId, password });
  };

  return (
    <MainWrapper>
      <div className="dashboard resource-center">
        <HeaderDashboard />
        <section className="e-wallet-login">
          <div className="container">
            <div className="main-head-title">Resources Center</div>

            <div className="login-container mt-5 d-flex gap-4">
              {/* Login Box */}
              <div className="login-box">
                <div className="head-tt">Login</div>
                <form className="login-details" onSubmit={handleLogin}>
                  <div className="username">
                    <label className="mb-1" htmlFor="ipar-id">
                      Username*
                    </label>
                    <input
                      type="text"
                      id="ipar-id"
                      placeholder="Ipar ID"
                      value={iparId}
                      onChange={(e) => setIparId(e.target.value)}
                    />
                  </div>

                  <div className="password mt-3">
                    <label className="mb-1" htmlFor="password">
                      Password (Optional)
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="btn-sec mt-4 text-center">
                    <button type="submit" className="black-btn black-btn-sm">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              {/* Login Info */}
              <div className="login-intro">
                <h6>Alternative Options</h6>
                <p>
                  If you know your Ipar ID and have forgotten your password, you can
                  recover a lost password by completing the{" "}
                  <a href="#">Password Recovery Process</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </MainWrapper>
  );
};

export default ResourceCenterLogin;
