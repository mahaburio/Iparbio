import React, { useEffect, useRef, useState } from "react";


const countries = [
  { name: "United States", flag: "flag/usa.webp" },
  { name: "United Kingdom", flag: "flag/United-Kingdom.png" },
  { name: "Canada", flag: "flag/canada.png" },
  { name: "Australia", flag: "flag/australia.webp" },
  { name: "India", flag: "flag/india.png" },
  { name: "France", flag: "flag/france.png" },
  { name: "Germany", flag: "flag/germany.webp" },
];

const languages = ["English", "French", "Russian", "Malay", "Thai", "Mandarin"];

const LanguageLocationModal = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(["English"]);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  return (
    <div className="tm-it-body languagebody px-2">
      <div className="type-of-language">
        <h5 className="pb-2">Country</h5>

        {/* Country Dropdown */}
        <div className="dropdown mb-2" id="countryDropdown" ref={dropdownRef}>
          <div
            className="selected"
            id="selectedCountry"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <div className="d-flex align-items-center gap-2">
              <img src={selectedCountry.flag} alt="Flag" />
              <span>{selectedCountry.name}</span>
            </div>
            <div className={`right-chevron ${isDropdownOpen ? "rotate" : ""}`}>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-list">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="option"
                  onClick={() => {
                    setSelectedCountry(country);
                    setDropdownOpen(false);
                  }}
                >
                  <img src={country.flag} alt="Flag" />
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Language Multiple Selector */}
        <h5 className="pb-2">Language</h5>
        {languages.map((lang) => (
          <div className="tp-it" key={lang}>
            <div className="radio-checkmark" onClick={() => toggleLanguage(lang)}>
              <div
                className={`radio-input ${
                  selectedLanguages.includes(lang) ? "activeLabelInput" : ""
                }`}
              />
              <span>{lang}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageLocationModal;
