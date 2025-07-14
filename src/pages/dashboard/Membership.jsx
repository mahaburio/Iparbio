import React, { useState } from "react";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import SideNav from "../../components/enrollment/Sidenav/SideNav";
import CardGridItem from "../../components/dashboard/CardGridItem";
import Footer from "../../components/footer/footer";
import TreeViewAndReport from "../../components/dashboard/TreeViewAndReport";

const businessCenters = ["BC1-401", "BC2-401", "BC3-401", "BC4-401", "BC5-401"];
const dropdownOptions = ["9851", "5894", "1545", "9854", "9710"];

const Membership = () => {
  const [activeItem, setActiveItem] = useState("membership");
  const [selectedBC, setSelectedBC] = useState("BC5-401");
  const [dropdownValue, setDropdownValue] = useState("5784");
  const [placement, setPlacement] = useState("Left");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const settingItems = [
    { key: "membership", label: "Membership Location" },
    { key: "iba", label: "IBA" },
    { key: "influencer", label: "Influencer" },
    { key: "preferred", label: "Preferred Customer" },
  ];


    const renderRightSection = (key) => {
  if (key === "membership") {
    return (
      <div className="custom-membership-section mt-4">
        <TreeViewAndReport />
      </div>
    );
  }

  return (
    <>
      {/* Business Center Buttons */}
      <div className="sub-navigation mt-4">
        <div className="sub-title fw-medium">Choose a Business Center</div>
        <div className="btn-sec mt-2">
          {businessCenters.map((bc) => (
            <button
              key={bc}
              className={selectedBC === bc ? "activeBlackBtn" : ""}
              onClick={() => setSelectedBC(bc)}
            >
              {bc}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown and Placement */}
      <div className="sub-navigation">
        <div className="buisness-center mt-3">
          <div className="sub-title fw-medium">Business Centers</div>
          <div className="btn-sec mt-1">
            <button>67676767</button>
            <div className="select-box" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <div className="select-btn">
                <span className="select-text">{dropdownValue}</span>
                <div className="arrowIcon">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>
              {dropdownOpen && (
                <div className="options-list">
                  {dropdownOptions.map((opt) => (
                    <div
                      className="option-item"
                      key={opt}
                      onClick={() => {
                        setDropdownValue(opt);
                        setDropdownOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Placement Buttons */}
      <div className="placement mt-3">
        <div className="sub-navigation">
          <div className="sub-title fw-medium">Placement</div>
          <div className="btn-sec mt-1">
            {(key === "preferred" ? ["Personal", "Left", "Right"] : ["Left", "Right"]).map((side) => (
              <button
                key={side}
                className={placement === side ? "activeBlackBtn" : ""}
                onClick={() => setPlacement(side)}
              >
                {side}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


  return (
    <div className="shopPage dashboard website-page">
      <HeaderDashboard />
      <SideNav />

      <section className="card-section py-5">
        <div className="container">
          <div className="cards-grid">
            <CardGridItem
              type="welcome"
              title="Welcome Alexsis!"
              idLink="85112564"
              levelText="Gold IBA"
            />
            <CardGridItem
              type="commission"
              title="Commission"
              commissionAmount="$ 123.45"
              commissionMsg="No Commission Qualified!"
              commissionLinkText="View Statement"
            />
            <CardGridItem
              type="website"
              title="My Website"
              websiteUrl="https://dila.iparhealth.com"
              websiteDropdownOptions={["https://iparhealth.com"]}
              websiteBtnText="Copy"
              websiteBtnLink="#"
            />
            <CardGridItem
              type="inviteEarn"
              title="Invite & Earn"
              inviteEarnUrl="https://dila.iparhealth.com"
              inviteEarnDropdownOptions={["https://iparhealth.com"]}
              inviteEarnBtnText="Copy"
              inviteEarnLinkText="Manage Links"
            />
          </div>
        </div>
      </section>

      <section className="website-info mt-5">
        <div className="container">
          <div className="row">
            {/* Left Menu */}
            <div className="col-lg-4">
              <div className="setting-info">
                {settingItems.map(({ key, label }) => (
                  <div
                    key={key}
                    className={`setting-itm ${key}Btn ${activeItem === key ? "activeSettingItem" : ""}`}
                    onClick={() => setActiveItem(key)}
                  >
                    <div className="itm-nm">{label}</div>
                    <div className="icon">
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-lg-8 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
              <div className="setting-description">
                {settingItems.map(({ key, label }) =>
                  activeItem === key ? (
                    <div key={key} className={`setting-desc-itm ${key}Details activeEwallet`}>
                      <div className="head-tt">{label}</div>
                      {renderRightSection(key)}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;




