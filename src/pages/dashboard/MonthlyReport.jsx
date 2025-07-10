import React from 'react'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import TeamAccordion from '../../components/enrollment/TeamManagerList/TeamAccordion'
import AsideBar from '../../components/enrollment/Asidebar'
import Footer from '../../components/footer/footer'
import VolumeMonitor from '../../components/dashboard/VolumeMonitor'
import DotsDropdown from '../../components/dashboard/DotsDropdown'

const MonthlyReport = () => {


  const handleOptionClick = (option) => {
    if (option.value === "xls") {
      console.log("Exporting to XLS...");
      // Add your XLS export logic here
    } else if (option.value === "pdf") {
      console.log("Exporting to PDF...");
      // Add your PDF export logic here
    } else if (option.value === "print") {
      window.print();
    }
  };



  const cycleDates = [
    "Mar 06 2021", "Mar 07 2021", "Mar 08 2021", "Mar 09 2021"
  ];

  const businessCenters = [
    {
      title: "BC-401",
      maxValue: 1200,
      left: { value: 500 },
      right: { value: 758 }
    },
    {
      title: "BC-402",
      maxValue: 1200,
      left: { value: 506 },
      right: { value: 887 }
    },
    {
      title: "BC-403",
      maxValue: 1200,
      left: { value: 629 },
      right: { value: 852 }
    }
  ];

  const bonuses = {
    current: 1105.4,
    max: 1200,
    link: "/bonuses/details"
  };

  const bottomBonuses = [
    { title: "Sponsorship Bonus", value: "0 CPV" },
    { title: "Growth award", value: "103.84 CPV" },
    { title: "Matching Bonus", value: "111.4 CPV" }
  ];



  return (
    <div>
      <HeaderDashboard />
      <SideNav />

      <section className="wrapper">

        {/* Enrollment Sidebar */}
        <AsideBar />

        <div className="all-content">
          <section className="main-content-sec mt-5">
            <div className="container">
              <div className="main-head-title">Monthly Report</div>
              {/* <!-- Naviagater --> */}
              <div className="navigater-menu d-flex align-items-center gap-3 mt-2">
                <a href="../dashboard/performance.html">Back To My Performances</a>
                <span>/</span>
                <a href="" className="activeNavigateMenu">Monthly Report</a>
              </div>

              {/* Volume Monitor */}

              <div className="volume-monitor multiple-volume mt-4">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="info-item">
                        <div className="info-header">
                          <div className="header-tt d-flex align-items-center justify-content-between">
                            <h6>Volume Monitor</h6>
                            <DotsDropdown
                              options={[
                                { label: "Export to .xls", value: "xls" },
                                { label: "Export to .pdf", value: "pdf" },
                                { label: "Print", value: "print" },
                              ]}
                              onOptionClick={handleOptionClick}
                            />
                          </div>
                        </div>

                        <VolumeMonitor
                          cycleDates={cycleDates}
                          businessCenters={businessCenters}
                          bonuses={bonuses}
                          bottomBonuses={bottomBonuses}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default MonthlyReport