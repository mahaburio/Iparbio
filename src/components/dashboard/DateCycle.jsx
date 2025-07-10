import React, { useState } from "react";
import classNames from "classnames";

const DateCycle = ({ title = "Current Cycle", items = [] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="period-sec">
      <div className={classNames("collapseable-sec monthly-volum", { open: isOpen })}>
        <div
          className="head-tt d-flex align-items-center justify-content-between"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          <span>{title}</span>
          <i className={classNames("fs-4 ri-arrow-down-s-line", { "rotate": isOpen })}></i>
        </div>

        {isOpen && (
          <div className="period-list">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateCycle;
