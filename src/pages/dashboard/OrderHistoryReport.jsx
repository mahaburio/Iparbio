import React, { useState, useRef } from "react";


import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import AsideBar from '../../components/enrollment/Asidebar'
import Footer from '../../components/footer/footer'
import DatePicker from "../../components/input/DatePicker";
import { FaCalendarAlt } from "react-icons/fa";
const OrderHistoryReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const startRef = useRef();
  const endRef = useRef();

  const rawData = [
    {
      customerNumber: "10224576D",
      customerType: "D",
      fullName: "Daniel Q.",
      orderNumber: "370856214",
      orderDate: "2025-09-12",
      productDetails: "See details",
      price: 9.95,
      orderVolume: 0,
      autoOrder: "No",
      pcBonus: "Not Eligible",
      phone: "+12015894224",
      email: "someone@gmail.com",
    },
    {
      customerNumber: "10224576D",
      customerType: "D",
      fullName: "Daniel Q.",
      orderNumber: "370856214",
      orderDate: "2025-09-12",
      productDetails: "See details",
      price: 9.95,
      orderVolume: 0,
      autoOrder: "No",
      pcBonus: "Not Eligible",
      phone: "+12015894224",
      email: "someone@gmail.com",
    },
    {
      customerNumber: "10224576D",
      customerType: "D",
      fullName: "Daniel Q.",
      orderNumber: "370856214",
      orderDate: "2024-11-01",
      productDetails: "See details",
      price: 9.95,
      orderVolume: 0,
      autoOrder: "No",
      pcBonus: "Not Eligible",
      phone: "+12015894224",
      email: "someone@gmail.com",
    },
  ];


  const handleApply = () => {
    if (startDate && endDate) {
      const filtered = rawData.filter((item) => {
        const itemDate = new Date(item.orderDate);
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
              <div className="main-head-title">Order History Report</div>
              {/* <!-- Naviagater --> */}
              <div className="navigater-menu d-flex align-items-center gap-3 mt-2">
                <a href="../dashboard/performance.html">Back To My Performances</a>
                <span>/</span>
                <a href="" className="activeNavigateMenu">Order History Report</a>
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


                <div className="enrolled-table dataTable dataTableHistory mt-5">
                  <table>
                    <thead>
                      <tr>
                        <th>Customer Number</th>
                        <th>Customer Type</th>
                        <th>Full Name</th>
                        <th>Order Number</th>
                        <th>Order Date</th>
                        <th>Product Details</th>
                        <th>Price</th>
                        <th>Order Volume</th>
                        <th>Auto Order</th>
                        <th>PC Bonus</th>
                        <th>Phone</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataToDisplay.length === 0 ? (
                        <tr>
                          <td colSpan={12} style={{ textAlign: "center" }}>
                            No data found for selected date range.
                          </td>
                        </tr>
                      ) : (
                        dataToDisplay.map((row, index) => (
                          <tr key={index}>
                            <td>{row.customerNumber}</td>
                            <td>{row.customerType}</td>
                            <td>{row.fullName}</td>
                            <td>{row.orderNumber}</td>
                            <td>{new Date(row.orderDate).toLocaleDateString()}</td>
                            <td><a href="#">{row.productDetails}</a></td>
                            <td>{row.price}</td>
                            <td>{row.orderVolume}</td>
                            <td>{row.autoOrder}</td>
                            <td>{row.pcBonus}</td>
                            <td>{row.phone}</td>
                            <td>{row.email}</td>
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

export default OrderHistoryReport

