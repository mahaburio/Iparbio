import React, { useState, useRef, useEffect } from "react";

const DisplayRowSelector = ({ optionItems }) => {
  const [selectedRows, setSelectedRows] = useState(
    Array(8).fill(optionItems[0])
  );
  const [openDropdown, setOpenDropdown] = useState(null); // track open dropdown index

  const handleSelect = (index, value) => {
    const updated = [...selectedRows];
    updated[index] = value;
    setSelectedRows(updated);
    setOpenDropdown(null); // close dropdown after selection
  };

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  // Close dropdown when clicking outside
  const wrapperRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef}>
      {selectedRows.map((value, index) => (
        <div
          key={index}
          className="edit-str-itm d-flex gap-1 justify-content-between mt-3"
        >
          <div className="str-name">{`Display Row ${index + 1}`}</div>
          <div className="str-details">
            <div className="select-box">
              <div
                className="select-btn"
                onClick={() => toggleDropdown(index)}
              >
                <span className="select-text">{value}</span>
                <div className="arrowIcon">
                  <i
                    className={`ri-arrow-down-s-line ${
                      openDropdown === index ? "rotate-icon" : ""
                    }`}
                  ></i>
                </div>
              </div>

              {openDropdown === index && (
                <div className="options-list">
                  {optionItems.map((option, idx) => (
                    <div
                      key={idx}
                      className="option-item"
                      onClick={() => handleSelect(index, option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayRowSelector;
