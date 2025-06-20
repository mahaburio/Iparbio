import { useState } from 'react';

function CountrySelector() {
  const [showLanguages, setShowLanguages] = useState(false);

  const countries = [
    { name: "United States", flag: "../flag/usa-flag.png" },
    { name: "Canada", flag: "../flag/canada.png" },
    { name: "Mexico", flag: "../flag/mexico.png" },
    { name: "Colombia", flag: "../flag/colombia.png" },
    { name: "Netherlands", flag: "../flag/netherlands.png" },
    { name: "United Kingdom", flag: "../flag/United-Kingdom.png" },
    { name: "France", flag: "../flag/france.png" },
    { name: "Belgium", flag: "../flag/belgium.png" },
    { name: "Germany", flag: "../flag/germany.webp" },
    { name: "Spain", flag: "../flag/spain.png" },
    { name: "Italy", flag: "../flag/italy.png" },
    { name: "Romania", flag: "../flag/romania.png" },
    { name: "Hongkong", flag: "../flag/hongkong.png" },
    { name: "Japan", flag: "../flag/japan.png" },
    { name: "Korea", flag: "../flag/korea.png" },
    { name: "Malaysia", flag: "../flag/malaysia.png" },
  ];

  return (
    <div className="offcanvas-body" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Country list */}
      <div className="country-list">
        {countries.map((c) => (
          <div
            className="cn-item"
            key={c.name}
            onClick={() => setShowLanguages(true)}
          >
            <div className="cn-left">
              <div className="cn-img">
                <img src={c.flag} alt={c.name} />
              </div>
              <div className="cn-name">{c.name}</div>
            </div>
            <div className="cn-arrow"><i className="ri-arrow-right-s-line"></i></div>
          </div>
        ))}
      </div>

      {/* Language Selection */}
      <div className={`selectLanguage ${showLanguages ? 'open' : ''}`}>
        <div className="back-btn" onClick={() => setShowLanguages(false)}>
          <i className="ri-arrow-left-s-line"></i> Back
        </div>
        <div className="lang-item">English</div>
        <div className="lang-item">Español</div>
        <div className="lang-item">繁體中文</div>
        <div className="lang-item">简体中文</div>
      </div>
    </div>
  );
}

export default CountrySelector