import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "../../styles/components/dropdown.css"; // We'll style it next

const Dropdown = ({ label = "Select", options = [], selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{selected || label}</span>
        <RiArrowDownSLine
          size={23} color="var(--green-color)"
          className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}
        />
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {options.map((opt, index) => (
            <li key={index} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
