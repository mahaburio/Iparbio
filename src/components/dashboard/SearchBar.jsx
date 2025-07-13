// components/SearchDropdown.jsx

import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';

const SearchDropdown = ({
  options = [],
  selectedOption,
  onOptionChange,
  searchValue,
  onSearchChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    onOptionChange(option);
    setDropdownOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="">
      <div className="search-wrapper">
        <div className="select-box" ref={dropdownRef}>
          <div className="select-btn" onClick={toggleDropdown}>
            <span className="select-text" id="selected-value">
              {selectedOption}
            </span>
            <div className="arrowIcon" id="arrow-icon">
              <RiArrowDownSLine />
            </div>
          </div>

          {dropdownOpen && (
            <div className="options-list" id="options-menu">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="option-item"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="input-wrap d-flex align-items-center">
          <input
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <RiSearchLine />
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
