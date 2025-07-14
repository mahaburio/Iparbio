import React from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import AsideBar from '../../components/enrollment/Asidebar';
import TreeViewAndReport from '../../components/dashboard/TreeViewAndReport';

const EnrollmentNetworkView = () => {
 
  return (
    <div>
      <HeaderDashboard />
      <SideNav />

      <div className="wrapper">
        <AsideBar />

        <div className="all-content">
          <section className="main-content-sec mt-5">
            <div className="container">
              <div className="main-head-title">Enrollment Network Viewer</div>

              <div className="navigater-menu d-flex align-items-center gap-3 mt-2">
                <a href="../dashboard/performance.html">Back To My Performances</a>
                <span>/</span>
                <a href="#" className="activeNavigateMenu">Enrollment Network Viewer</a>
              </div>

              <TreeViewAndReport />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentNetworkView;
