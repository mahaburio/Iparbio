import React, { useState } from "react";

const TeamAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="team-item-accordion mt-2 py-2">
      {items.map((item, index) => (
        <div className="team-item" key={index}>
          <div
            className="itm-head d-flex align-items-center justify-content-between"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <div className="arrowIcon fs-4">
              <i
                className="ri-arrow-down-s-line"
                style={{
                  transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              ></i>
            </div>
          </div>

          <div
            className={`tm-it-body transition-body ${activeIndex === index ? "open" : "closed"
              }`}
          >
            <div className="inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamAccordion;
