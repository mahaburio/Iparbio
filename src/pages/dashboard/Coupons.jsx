import React, { useState } from 'react'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import Footer from '../../components/footer/footer';

const Coupons = () => {
  const [selectedFilter, setSelectedFilter] = useState("Past 3 months");
  const [showOptions, setShowOptions] = useState(false);

  const filterOptions = [
    "Past 7 days",
    "Past 30 days",
    "Past 3 months",
    "Past 6 months",
    "Last year",
  ];

  const couponData = [
    {
      name: "Product Credit",
      accountNumber: "853171",
      unit: "USD",
      balance: "0.00",
    },
    {
      name: "Coupons",
      accountNumber: "853172",
      unit: "USD",
      balance: "0.00",
    },
    {
      name: "Gift Card",
      accountNumber: "853173",
      unit: "USD",
      balance: "0.00",
    },
  ];

  const tips = [
    {
      title: "Coupon (Discount)",
      description: `Used to receive a discount on products or services. Enter a code or scan a barcode at checkout to apply the discount.`,
    },
    {
      title: "Product Credit",
      description: `Earned through the "Get 10% back Referral link" when a Preferred Customer refers others who make purchases. Can be used for future purchases but cannot be withdrawn.`,
    },
    {
      title: "Gift Card (Prepaid Card)",
      description: `A prepaid card that can be used for purchases on the platform but cannot be redeemed for cash.`,
    },
  ];

  return (
    <div>
      <HeaderDashboard NotifySection={false} />
      <SideNav />

      <div className="container mt-5">
        <div className="main-head-title">My Coupons</div>

        <div className="row mt-4">
          {/* Left Section */}
          <div className="col-lg-9 col-n-1">
            {/* Filter Dropdown */}
            <div className="select-box position-relative">
              <div
                className="select-btn"
                onClick={() => setShowOptions(!showOptions)}
              >
                <span className="select-text">{selectedFilter}</span>
                <div className="arrowIcon">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>
              {showOptions && (
                <div className="options-list">
                  {filterOptions.map((option, index) => (
                    <div
                      key={index}
                      className="option-item"
                      onClick={() => {
                        setSelectedFilter(option);
                        setShowOptions(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Coupon Table */}
            <div className="coupons-table mt-3">
              <table>
                <thead>
                  <tr>
                    <th>Account Name</th>
                    <th>Account Number</th>
                    <th>Unit</th>
                    <th>Balance</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {couponData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.accountNumber}</td>
                      <td>{item.unit}</td>
                      <td>{item.balance}</td>
                      <td>
                        <a href="#" className="redeem">
                          Redeem Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Section (Tips) */}
          <div className="col-lg-3 mt-lg-0 mt-md-4 mt-sm-4 mt-4 col-n-2">
            <div className="tip-cards">
              {tips.map((tip, index) => (
                <div className="tip-card-itm mt-3" key={index}>
                  <h3>Quick Tips</h3>
                  <li>
                    ✓ <strong>{tip.title}</strong> <br />
                    <br />
                    {tip.description}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coupons;
