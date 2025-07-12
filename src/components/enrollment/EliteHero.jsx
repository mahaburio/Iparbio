import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDownSLine, RiSearchLine } from 'react-icons/ri';

const EliteHero = ({ title, description, image, searchBar = false }) => {

  const [selectedOption, setSelectedOption] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    'All',
    'Image Only',
    'Presentation',
    'Print Tool',
    'Social Shareable',
    'Logo/Branding',
    'Video',
    'e Card'
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content pt-5">
              {searchBar && (

                <div className="mb-5">
                  <div className="search-wrapper ">
                    <div className="select-box" ref={dropdownRef}>
                      <div className="select-btn" onClick={toggleDropdown}>
                        <span className="select-text" id="selected-value">{selectedOption}</span>
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
                      <input type="search" placeholder="Search..." />
                      <RiSearchLine />
                    </div>
                  </div>
                </div>
              )}
              <h1>{title}</h1>
              <p className="mt-4">{description}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src={image} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteHero;
