import React, { useState, useRef } from "react";


import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import AsideBar from '../../components/enrollment/Asidebar'
import Footer from '../../components/footer/footer'
import DatePicker from "../../components/input/DatePicker";
import { FaCalendarAlt } from "react-icons/fa";
const MonthlyReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const startRef = useRef();
  const endRef = useRef();

  const rawData = [
    {
      name: "Nathaniel",
      date: "2023-07-22",
      personal: "New Influencer",
      team: "Candidate Influencer",
    },
    {
      name: "Madeline",
      date: "2025-08-14",
      personal: "New IBA",
      team: "Candidate IBA",
    },
    {
      name: "New PC",
      date: "2024-11-01",
      personal: "1",
      team: "1",
    },
  ];

  const handleApply = () => {
    if (startDate && endDate) {
      const filtered = rawData.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });
      setFilteredData(filtered);
      setIsFiltered(true);
    }
  };

  const dataToDisplay = isFiltered ? filteredData : rawData;



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
              <div className="main-head-title">Enrolment Report</div>
              {/* <!-- Naviagater --> */}
              <div className="navigater-menu d-flex align-items-center gap-3 mt-2">
                <a href="../dashboard/performance.html">Back To My Performances</a>
                <span>/</span>
                <a href="" className="activeNavigateMenu">Enrolment Report</a>
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
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                  </div>
                </div>




                {/* Data Table */}

                <div className="dataTable dataTableEnrolled mt-5">
                  <table>
                    <thead>
                      <tr>
                        <th>Report</th>
                        <th>
                          Current deca Personal <br />
                          Sponsored
                        </th>
                        <th>
                          Current deca team <br />
                          Sponsored
                        </th>
                        <th>
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataToDisplay.length === 0 ? (
                        <tr>
                          <td colSpan={4} style={{ textAlign: "center" }}>
                            No data found for selected date range.
                          </td>
                        </tr>
                      ) : (
                        dataToDisplay.map((row, index) => (
                          <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.personal}</td>
                            <td>{row.team}</td>
                            <td>{new Date(row.date).toLocaleDateString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
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

