import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";

const statementOptions = [
  "Past 7 days",
  "Past 30 days",
  "Past 3 months",
  "Past 6 months",
  "Last year",
];

// Example data, you can replace this with real dynamic data
const statementData = {
  "Past 7 days": [
    {
      beginningBalance: "-$50.44",
      deposits: 494,
      send: 344,
      fees: 0.66,
      endingBalance: 106.66,
    },
  ],
  "Past 30 days": [
    {
      beginningBalance: "-$30.44",
      deposits: 200,
      send: 100,
      fees: 0.50,
      endingBalance: 150.00,
    },
    {
      beginningBalance: "-$20.00",
      deposits: 300,
      send: 200,
      fees: 0.40,
      endingBalance: 250.00,
    },
  ],
  // add more for other ranges or reuse same sample
  "Past 3 months": [
    {
      beginningBalance: "-$50.44",
      deposits: 494,
      send: 344,
      fees: 0.66,
      endingBalance: 106.66,
    },
    {
      beginningBalance: "-$40.00",
      deposits: 400,
      send: 350,
      fees: 0.60,
      endingBalance: 150.00,
    },
    {
      beginningBalance: "-$30.00",
      deposits: 300,
      send: 200,
      fees: 0.55,
      endingBalance: 140.00,
    },
  ],
  "Past 6 months": [
    // ...
  ],
  "Last year": [
    // ...
  ],
};

const Statement = () => {
  const [selectedOption, setSelectedOption] = useState(statementOptions[2]); // default "Past 3 months"
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="statement activeEwallet">
      {/* Dropdown */}
      <div className="select-box" ref={dropdownRef}>
        <div
          className="select-btn"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <span className="select-text" id="selected-value">{selectedOption}</span>
          <div className="arrowIcon" id="arrow-icon">
            <RiArrowDownSLine
              className={classNames({ rotate: dropdownOpen })}
            />
          </div>
        </div>

        {dropdownOpen && (
          <div className="options-list" id="options-menu">
            {statementOptions.map((option) => (
              <div
                key={option}
                className="option-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tables */}
      {statementData[selectedOption]?.map((row, idx) => (
        <div className="coupons-table mt-3" key={idx}>
          <table>
            <thead>
              <tr>
                <th>Beginning balance on <br />January 1, 2023</th>
                <th>Deposits and other <br />credits</th>
                <th>Send</th>
                <th>Service fees</th>
                <th>Ending balance on <br />January 31, 2023</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{row.beginningBalance}</td>
                <td>{row.deposits}</td>
                <td>{row.send}</td>
                <td>{row.fees}</td>
                <td>{row.endingBalance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Statement;
