import React from "react";
import PropTypes from "prop-types";
import DateCycle from "./DateCycle";
import DotsDropdown from "./DotsDropdown";

const VolumePersonal = ({ userData, bonuses, dates }) => {
  const handleOptionClick = (option) => {
    if (option.value === "xls") {
      console.log("Exporting to XLS...");
      // Add XLS export logic here
    } else if (option.value === "pdf") {
      console.log("Exporting to PDF...");
      // Add PDF export logic here
    } else if (option.value === "print") {
      window.print();
    }
  };

  return (
    <div className="personal-information info-item volume-report">
      <div className="info-header">
        <div className="header-tt d-flex align-items-center justify-content-between">
          <h6>Volume Report</h6>
          <DotsDropdown
            options={[
              { label: "Export to .xls", value: "xls" },
              { label: "Export to .pdf", value: "pdf" },
              { label: "Print", value: "print" },
            ]}
            onOptionClick={handleOptionClick}
          />
        </div>

        {/* User Info Row */}
        <div className="user-row mt-4">
          <div className="us-id d-flex align-items-center gap-2">
            <div className="img">
              <img src="images/person-1.webp" alt="User" />
            </div>
            <div className="details">
              <div>
                User ID: <span className="fw-bold">{userData.id}</span>
              </div>
              <div>
                Level: <span className="fw-bold">{userData.level}</span>
              </div>
            </div>
          </div>
          <div className="us-age text-center">
            <div className="fw-bold">Ipar Age</div>
            <div>{userData.age}</div>
          </div>
          <div className="us-conversion text-center">
            <div className="fw-bold">{userData.conversionRate}%</div>
            <div>Conversion Rate</div>
          </div>
          <div className="us-next-lv text-center">
            <div className="fw-bold">Next Level</div>
            <div>{userData.nextLevel}</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="info-body py-4 px-3">
        <div className="row">
          {/* Dates */}
          <div className="col-lg-3">
            <DateCycle items={dates} />
          </div>

          {/* Bonus Info */}
          <div className="col-lg-9 mt-lg-0 mt-4">
            <div className="bonuses pb-3">
              <div className="head-tt text-start ps-3 pt-3">
                <h5>Estimated Bonus for the Month (CPV)</h5>
              </div>

              <div className="bonus-s d-flex align-items-center p-3 pb-4 gap-3">
                <div className="lt">
                  <div className="range-circle">
                    <div className="content">
                      <div className="value">
                        <strong>{userData.totalBonus}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rt">
                  <p>Bonus amounts may change based on order adjustments</p>
                  <div className="mt-3">
                    <a href="#">Click to see more</a>
                  </div>
                </div>
              </div>

              {/* Bonus Breakdown */}
              <div className="bottom-bonus px-2">
                {bonuses.map((item, idx) => (
                  <div className="item text-center" key={idx}>
                    <div>{item.title}</div>
                    <div className="cpv mt-2">{item.amount} CPV</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VolumePersonal.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    conversionRate: PropTypes.string.isRequired,
    nextLevel: PropTypes.string.isRequired,
    totalBonus: PropTypes.string.isRequired,
  }).isRequired,
  bonuses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ).isRequired,
  dates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VolumePersonal;
