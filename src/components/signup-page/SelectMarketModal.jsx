

import React, { useState } from "react";

// Region-based country data
const countryList = [
  {
    region: "Europe",
    countries: [
      { name: "Austria - English", code: "AT", flag: "/flag/austria.png" },
      { name: "Belgium - English", code: "BE", flag: "/flag/belgium.png" },
      { name: "Belgium - Français", code: "BE", flag: "/flag/belgium.png" },
      { name: "France - English", code: "FR", flag: "/flag/france.png" },
      { name: "France - Français", code: "FR", flag: "/flag/france.png" },
      { name: "Germany - English", code: "DE", flag: "/flag/germany.webp" },
      { name: "Germany - German", code: "DE", flag: "/flag/germany.webp" },
      { name: "Ireland - English", code: "IE", flag: "/flag/Ireland.webp" },
      { name: "Italy - English", code: "IT", flag: "/flag/italy.png" },
      { name: "Italy - Italian", code: "IT", flag: "/flag/italy.png" },
      { name: "Luxembourg - English", code: "LU", flag: "/flag/Luxembourg.webp" },
      { name: "Netherlands - English", code: "NL", flag: "/flag/netherlands.png" },
      { name: "Romania - English", code: "RO", flag: "/flag/romania.png" },
      { name: "Romania - Romanian", code: "RO", flag: "/flag/romania.png" },
      { name: "Spain - English", code: "ES", flag: "/flag/spain.png" },
      { name: "Spain - Español", code: "ES", flag: "/flag/spain.png" },
      { name: "United Kingdom - English", code: "UK", flag: "/flag/United-Kingdom.png" },
    ],
  },
  {
    region: "Asia",
    countries: [
      { name: "China - English", code: "CN", flag: "/flag/China.webp" },
      { name: "China - 中文", code: "CN", flag: "/flag/China.webp" },
      { name: "Japan - English", code: "JP", flag: "/flag/japan.png" },
      { name: "Japan - 日本語", code: "JP", flag: "/flag/japan.png" },
      { name: "India - English", code: "IN", flag: "/flag/india.png" },
      { name: "India - हिंदी", code: "IN", flag: "/flag/india.png" },
      { name: "South Korea - English", code: "KR", flag: "/flag/korea.png" },
      { name: "South Korea - 한국어", code: "KR", flag: "/flag/korea.png" },
      { name: "Vietnam - English", code: "VN", flag: "/flag/Vietnam.webp" },
      { name: "Vietnam - Tiếng Việt", code: "VN", flag: "/flag/Vietnam.webp" },
      { name: "Thailand - English", code: "TH", flag: "/flag/Thailand.webp" },
      { name: "Thailand - ภาษาไทย", code: "TH", flag: "/flag/Thailand.webp" },
      { name: "Philippines - English", code: "PH", flag: "/flag/Philippines.webp" },
      { name: "Indonesia - English", code: "ID", flag: "/flag/Indonesia.png" },
      { name: "Indonesia - Bahasa Indonesia", code: "ID", flag: "/flag/Indonesia.png" },
    ],
  },
];

const SelectMarketModal = ({ isOpen, onClose, onSelect }) => {
  const [search, setSearch] = useState("");

  const filteredRegions = countryList.map((region) => ({
    ...region,
    countries: region.countries.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(r => r.countries.length);

  if (!isOpen) return null;

  return (

    <div id="selectMarketModal">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="header d-flex justify-content-between align-items-center">
            <h2>Select Market</h2>
            <button className="close-btn" onClick={onClose}>
              <i className="ri-close-large-line"></i>
            </button>
          </div>

          <div className="countrylist-section">
            <input
              type="search"
              placeholder="Search for country or language"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="language-selector">
              {filteredRegions.map((region) => (
                <div key={region.region}>
                  <h3>{region.region}</h3>
                  <div className="countries">
                    {region.countries.map((country) => (
                      <div
                        key={country.name}
                        className="country"
                        onClick={() => onSelect(country)}
                      >
                        <span className="flag">
                          <img src={country.flag} alt={country.code} />
                        </span>
                        {country.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMarketModal;
