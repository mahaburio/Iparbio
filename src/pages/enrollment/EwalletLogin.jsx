import React from 'react'

import MainWrapper from '../../components/common/Mainwrapper';

import '../../styles/enhancement.css'
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Footer from '../../components/footer/footer';

const EwalletLogin = () => {


  return (
    <MainWrapper>
      <div className='dashboard'>
        {/* Header */}
        <HeaderDashboard NotifySection={false} />

        {/* Side Nav */}
        <SideNav />


        <section className="e-wallet-login mt-5">
          <div className="container">
            <div className="main-head-title">Get e-wallet now</div>

            <div className="login-container mt-5">
              <div className="login-box">
                <div className="head-tt">Login</div>
                <form action="">
                  <div className="login-details">
                    <div className="username">
                      <label className="mb-1" for="">Username*</label><br />
                      <input type="text" placeholder="Ipar ID" required />
                    </div>
                    <div className="password mt-3">
                      <label className="mb-1" for="">Password*</label><br />
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="btn-sec mt-4 text-center">
                      <button className="black-btn black-btn-sm">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="login-intro">
                <h6>Alternative Options</h6>
                <p>
                  If you know your Ipar ID and have forgotten you password your
                  can recover a lost password by completing the
                  <a href=""> Password Recovery Process</a>
                </p>
              </div>
            </div>
          </div>
        </section>



      </div >
      <Footer />
    </MainWrapper >
  )
}

export default EwalletLogin