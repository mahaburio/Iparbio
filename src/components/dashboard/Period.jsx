import React, { useState, useRef } from "react";
import DatePicker from "../input/DatePicker";
import { FaCalendarDays } from "react-icons/fa6";

const PeriodFilterBox = ({
  title = "PPV",
  totalPV = "121pv",
  description = "This",
  monthLink = "#",
  moreLink = "#",
  periodList = [],
  defaultPeriod = "May, 2029",
  onApply = () => { },
  onInfoClick = () => { },
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState(defaultPeriod);
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeField, setActiveField] = useState("period");

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const toggleDropdown = () => {
    setActiveField("period");
    setShowPeriodDropdown(!showPeriodDropdown);
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    setStartDate("");
    setEndDate("");
    setShowPeriodDropdown(false);
    setActiveField("period");
  };

  const handleDateChange = (field, value) => {
    if (field === "start") setStartDate(value);
    if (field === "end") setEndDate(value);
    setSelectedPeriod("");
  };

  return (
    <div className="ppv-itm">
      <div className="header d-flex align-items-center justify-content-between">
        <div className="nm">{title}</div>
        <strong className="tl">{totalPV}</strong>
        <div className="rq" onClick={() => onInfoClick(title)} style={{ cursor: "pointer" }}>
          *
        </div>
      </div>

      <div className="dsc">
        <p>
          {description} <a href={monthLink}>month</a>{" "}
          <a href={moreLink}>More</a>
        </p>
      </div>

      {/* PERIOD SECTION */}
      <div
        className="period"
        style={{ userSelect: "none" }} // optional to prevent accidental text selection on click
      >
        <div
          className="itm-tt d-flex align-items-center"
          onClick={() => setActiveField("period")}
          style={{ cursor: "pointer" }}
        >
          <div className={`radio-input ${activeField === "period" ? "activeLabelInput" : ""}`}></div>
          <label>Period</label>
        </div>

        <div
          className="input-wrapper d-flex align-items-center gap-1 mt-2"
          onClick={toggleDropdown}
          style={{ cursor: "pointer" }}
        >
          <input
            className="period-input"
            type="text"
            placeholder="Select Period"
            value={selectedPeriod}
            readOnly
          />
          <span>
            <i className="ri-arrow-down-s-line"></i>
          </span>

          {showPeriodDropdown && (
            <ul className="period-list-items m-0 p-0">
              {periodList.map((period, idx) => (
                <li key={idx} onClick={() => handlePeriodSelect(period)}>
                  {period}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* DATE SECTION */}
      <div
        className="date mt-3"
        style={{ userSelect: "none" }} // optional
      >
        <div
          className="itm-tt d-flex align-items-center"
          onClick={() => setActiveField("date")}
          style={{ cursor: "pointer" }}
        >
          <div className={`radio-input ${activeField === "date" ? "activeLabelInput" : ""}`}></div>
          <label>Application Date</label>
        </div>

        <div className="date-pick d-flex justify-content-between gap-2 mt-2">
          {/* Start Date */}
          <div className="start d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between px-2 gap-1">
              <span>Start Date</span>
              <div className="icon" onClick={() => startDateRef.current?.open()} style={{ cursor: 'pointer' }}>
                <FaCalendarDays />
              </div>
            </div>
            <DatePicker
              value={startDate}
              onChange={(date) => {
                handleDateChange("start", date);
                setActiveField("date");
              }}
              placeholder="Select"
              className="application-date"
              ref={startDateRef}
            />
          </div>

          {/* End Date */}
          <div className="end d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between px-2 gap-1">
              <span>End Date</span>
              <div className="icon" onClick={() => endDateRef.current?.open()} style={{ cursor: 'pointer' }}>
                <FaCalendarDays />
              </div>
            </div>
            <DatePicker
              value={endDate}
              onChange={(date) => {
                handleDateChange("end", date);
                setActiveField("date");
              }}
              placeholder="Select"
              className="application-date"
              ref={endDateRef}
            />
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="btn-sec text-end mt-3 mb-2">
        <button
          className="green-btn green-btn-sm px-4"
          onClick={() => onApply({ selectedPeriod, startDate, endDate })}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default PeriodFilterBox;
