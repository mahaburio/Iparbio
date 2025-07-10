import React from 'react'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import ExtensionSection from '../../components/dashboard/Extensions'
import QualificationSection from '../../components/dashboard/Qualification'

const Qualification = () => {
  return (
    <div>
      <HeaderDashboard />

      <SideNav />

      <section className="main-content-sec mt-5">
        <div className="container">
          <div className="main-head-title">Upline Leader Placement</div>
        </div>

        <section className="qualification mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <QualificationSection />
              </div>
              <div className="col-lg-6 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                <ExtensionSection />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )

}


export default Qualification