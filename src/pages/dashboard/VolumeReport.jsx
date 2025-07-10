import React, { useState, useRef } from "react";


import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import AsideBar from '../../components/enrollment/Asidebar'
import Footer from '../../components/footer/footer'
import DatePicker from "../../components/input/DatePicker";
import { FaCalendarAlt } from "react-icons/fa";
import BonusSystem from "../../components/dashboard/BonusMatching";
import DateCycle from "../../components/dashboard/DateCycle";
import DotsDropdown from "../../components/dashboard/DotsDropdown";
import VolumeHistory from "../../components/dashboard/VolumeHistoryTable";
import DecaReport from "../../components/dashboard/DecaReport";
const VolumeReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const startRef = useRef();
  const endRef = useRef();


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
              <div className="main-head-title">Volume Report</div>
              {/* <!-- Naviagater --> */}
              <div className="navigater-menu d-flex align-items-center gap-3 mt-2">
                <a href="../dashboard/performance.html">Back To My Performances</a>
                <span>/</span>
                <a href="" className="activeNavigateMenu">Volume Report</a>
              </div>

              <div className="sub-navigation mt-4">
                <div className="sub-title">Application Date</div>
                <div className="date-pick d-flex justify-content-between gap-3 mb-3 mt-3 ">
                  <div className="start d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                      <span>Start Date</span>
                      <div className="icon" onClick={() => startRef.current?.open()} style={{ cursor: 'pointer' }}>
                        <FaCalendarAlt />
                      </div>
                    </div>
                    <div className="input-date">
                      <DatePicker
                        value={startDate}
                        onChange={setStartDate}
                        ref={startRef}
                        className="application-date flatpickr-input"
                      />
                      <i class="ri-arrow-down-s-line"></i>
                    </div>
                  </div>

                  <div className="end d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                      <span>End Date</span>
                      <div className="icon" onClick={() => endRef.current?.open()} style={{ cursor: 'pointer' }}>
                        <FaCalendarAlt />
                      </div>
                    </div>
                    <div className="input-date">
                      <DatePicker
                        value={endDate}
                        onChange={setEndDate}
                        ref={endRef}
                        className="application-date flatpickr-input"
                      />
                      <i class="ri-arrow-down-s-line"></i>
                    </div>
                  </div>

                  <div className="btn-sec align-self-end">
                    <button
                      className="black-btn  px-lg-4 px-md-4 px-sm-3 px-3"

                    >
                      Apply
                    </button>
                  </div>
                </div>



                <section className="matching-bonus volume-monitor mt-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="info-item">
                          <div className="info-header">
                            <div className="header-tt d-flex align-items-center justify-content-between">
                              <h6>Volume Report For BC (Matching Bonus)</h6>
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

                          <div className="info-body p-lg-3 p-md-3 p-sm-3 p-2">
                            <div className="row p-lg-3 p-1">
                              <div className="col-lg-2">
                                <DateCycle items={cycleDates} />
                              </div>
                              <div className="col-lg-10">
                                <BonusSystem />
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <VolumeHistory />

                <DecaReport />

              </div>
            </div>
          </section>
        </div>
      </section >
      <Footer />
    </div >
  )
}

export default VolumeReport

