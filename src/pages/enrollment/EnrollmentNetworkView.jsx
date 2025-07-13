import React from 'react'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import AsideBar from '../../components/enrollment/Asidebar'
import OrgChartTree from '../../components/enrollment/OrgChart'
import dataSources from '../../components/enrollment/DataSources'
const EnrollmentNetworkView = () => {

  const currentBC = "BC5-401";


  return (
    <div>
      <HeaderDashboard />

      <SideNav />

      <div className="wrapper">
        <AsideBar />

        <div className="all-content">
          <section class="main-content-sec mt-5">
            <div class="container">
              <div class="main-head-title">Enrollment Network Viewer</div>
              <div class="navigater-menu d-flex align-items-center gap-3 mt-2">
                <a href="../dashboard/performance.html">Back To My Performances</a>
                <span>/</span>
                <a href="" class="activeNavigateMenu">Enrollment Network Viewer</a>
              </div>

              <div class="sub-navigation mt-4">
                <div class="sub-title">Business Center</div>
                <div class="btn-sec mt-2">
                  <button>BC1-401</button>
                  <button>BC2-401</button>
                  <button>BC3-401</button>
                  <button>BC4-401</button>
                  <button class="activeBlackBtn">BC5-401</button>
                </div>
              </div>
              <div class="sub-navigatermenu mt-3">
                <div class="sub-navigate">
                  <a class="activeNavigateMenu" href="">Volume tree ( Genealogy *)</a>
                  <span>/</span>
                  <a href="../dashboard/enrollment_network_report.html" class="">Report</a>
                </div>
                <div class="edit-structure d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#editStructure">
                  <div class="icon-pen"><i class="ri-pencil-line"></i></div>
                  <span>Edit Structure</span>
                </div>
              </div>
            </div>
          </section>

          <OrgChartTree data={dataSources[currentBC]} />

        </div>
      </div>
    </div>
  )
}

export default EnrollmentNetworkView