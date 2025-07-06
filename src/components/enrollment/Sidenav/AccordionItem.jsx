import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    if (submenuRef.current) {
      submenuRef.current.style.maxHeight = isOpen
        ? submenuRef.current.scrollHeight + "px"
        : "0";
    }
  }, [isOpen]);

  return (
    <div className="submenu-wrapper">
      <div
        className="submenu-list-menu submenu-list-header d-flex align-items-center justify-content-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="arrowIcon">
          <i
            className={`fs-4 ri-arrow-down-s-line`}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          ></i>
        </span>
      </div>
      <ul
        className="menulist-sub px-2 m-0 submenu-list-items"
        ref={submenuRef}
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default AccordionItem;
