import React, { useState } from "react";
import classNames from "classnames";
import MainWrapper from "../common/Mainwrapper";

const countryOptions = [
  { label: "Global", key: "global" },
  { label: "Asia Pacific", key: "asiaPacific" },
  { label: "Central Asia", key: "centralAsia" },
  { label: "Russia", key: "russia" },
  { label: "Canada", key: "canada" },
  { label: "Indonesia", key: "indonesia" },
  { label: "Malaysia", key: "malaysia" },
  { label: "China", key: "china" },
  { label: "United States", key: "usa" },
];

const sampleReports = {
  global: [
    {
      title: "New Ambassador",
      date: "03-31-25",
      names: ["Aiqin Bodun", "Rosa Lucia Alvarez Mercado"],
    },
    {
      title: "New Diamond Director",
      date: "03-31-25",
      names: ["Aiqin Bodun", "Rosa Lucia Alvarez Mercado"],
    },
  ],
  asiaPacific: [
    {
      title: "Star new 23",
      date: "03-31-25",
      names: ["Asia Pacific", "Jennifer"],
    },
  ],
  malaysia: [
    {
      title: "Malaysia Stars",
      date: "03-31-25",
      names: ["Ahmad", "Siti", "Rahim"],
    },
  ],
};

const CountrySelector = ({ selected, onChange }) => {
  const [expanded, setExpanded] = useState(true); // Accordion open by default

  const toggleAccordion = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="courtry-list-acc">
      <div className="countryListWrapper">
        <div
          className="itm-head d-flex align-items-center justify-content-between"
          onClick={toggleAccordion}
          style={{ cursor: "pointer" }}
        >
          <span>Country</span>
          <div className="arrowIcon fs-4">
            <i
              className={classNames("ri-arrow-down-s-line", {
                rotated: expanded,
              })}
            ></i>
          </div>
        </div>

        <div
          className={classNames("countryListBody px-2", {
            collapsed: expanded,
          })}
        >
          <div className="type-of-country">
            {countryOptions.map((opt) => (
              <div
                key={opt.key}
                className={classNames("tp-it", {
                  active: selected === opt.key,
                })}
                onClick={() => onChange(opt.key)}
              >
                <div className="radio-checkmark">
                  <div
                    className={classNames("radio-input", {
                      activeLabelInput: selected === opt.key,
                    })}
                  ></div>
                  <span>{opt.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RankCard = ({ title, date, names }) => (
  <div className="cards-gray mt-4">
    <div className="cards-head d-flex align-items-center justify-content-between">
      <span className="tt">{title}</span>
      <span>
        (for month ending <span className="green-title" style={{color: "var(--green-color)"}}>{date}</span>)
      </span>
    </div>
    <div className="cards-body p-3 d-flex justify-content-between">
      <div className="left">
        {names.map((name, idx) => (
          <li key={`l-${idx}`}>{name}</li>
        ))}
      </div>
      <div className="right">
        {names.map((name, idx) => (
          <li key={`r-${idx}`}>{name}</li>
        ))}
      </div>
    </div>
  </div>
);

const RankUpReport = () => {
  const [selectedCountry, setSelectedCountry] = useState("global");
  const currentReports = sampleReports[selectedCountry] || [];

  return (
    <MainWrapper>
      <div className="dashboard">
        <section className="rank-up-report mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <CountrySelector
                  selected={selectedCountry}
                  onChange={setSelectedCountry}
                />
              </div>
              <div className="col-lg-9">
                <div className="all-desc-here">
                  <div className="report-desc activeDesc">
                    <div className="main-head-title">
                      {
                        countryOptions.find((c) => c.key === selectedCountry)
                          ?.label
                      }
                    </div>

                    {currentReports.length > 0 ? (
                      currentReports.map((report, i) => (
                        <RankCard key={i} {...report} />
                      ))
                    ) : (
                      <p className="mt-3 text-muted">No reports available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainWrapper>
  );
};

export default RankUpReport;
