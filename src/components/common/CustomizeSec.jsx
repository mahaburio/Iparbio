import React, { useEffect, useRef, useState } from "react";

const AccordionGroup = ({ title, items = [], defaultOpen = false, screenWidth }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setIsOpen(screenWidth > 991 ? true : defaultOpen);
  }, [screenWidth, defaultOpen]);

  const toggleAccordion = () => {
    if (screenWidth > 991) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={`group-list mt-2 ${isOpen ? "activeList" : ""}`}>
      <div className="header d-flex align-items-center justify-content-between" onClick={toggleAccordion}>
        <div className="name fw-medium">{title}</div>
        <div className="chev-down">
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>
      <div
        className="list-body"
        style={{
          maxHeight: isOpen ? `${items.length * 45}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {items.map((item, index) => (
          <li key={index} onClick={() => setSelectedIndex(index)}>
            <div className={`input-bullet ${selectedIndex === index ? "active-bullet" : ""}`}></div>
            <span className="list-nm">
              {item.icon && <img className="ct-img" src={item.icon} alt="" />} {item.label}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

const SidebarAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sidebarRef = useRef(null);

  // ✅ Listen for resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Listen to both `.allBtn` and `.categoriesBtn`
  useEffect(() => {
    const allBtns = document.querySelectorAll(".allBtn, .categoriesBtn");
    const handleShow = (e) => {
      e.stopPropagation();
      setIsOpen(true);
    };

    allBtns.forEach((btn) => btn.addEventListener("click", handleShow));
    return () => {
      allBtns.forEach((btn) => btn.removeEventListener("click", handleShow));
    };
  }, []);

  // ✅ Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !e.target.classList.contains("allBtn") &&
        !e.target.classList.contains("categoriesBtn")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // ✅ Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div
      className="customize-sec"
      id="customizeSec"
      ref={sidebarRef}
      style={{ left: isOpen ? "0px" : "-100%" }}
    >
      <div className="close-menu" onClick={() => setIsOpen(false)}>
        <i className="ri-close-large-line"></i>
      </div>

      <button className="gray-btn fw-medium w-75 mt-2 text-start">New Products</button>
      <button className="gray-btn fw-medium w-75 mt-2 text-start">Special Offers</button>
      <button className="gray-btn fw-medium w-75 mt-2 text-start">Bestsellers</button>

      <AccordionGroup
        title="Sort by"
        defaultOpen={true}
        screenWidth={windowWidth}
        items={[
          { label: "Featured" },
          { label: "Bestselling" },
          { label: "Name" },
          { label: "Lowest Price" },
          { label: "Highest Price" },
        ]}
      />

      <AccordionGroup
        title="Benefits"
        screenWidth={windowWidth}
        items={[
          { label: "Mood", icon: "../images/mood.svg" },
          { label: "Hormone, Sleep", icon: "../images/bed.svg" },
          { label: "View all Products", icon: "../images/bed.svg" },
        ]}
      />

      <AccordionGroup
        title="Category"
        screenWidth={windowWidth}
        items={[
          { label: "Nutrtions", icon: "../images/nutrations.svg" },
          { label: "Personal Care", icon: "../images/personal-care.svg" },
          { label: "Women's Health", icon: "../images/w-health.svg" },
          { label: "Eco-home", icon: "../images/w-health.svg" },
          { label: "All", icon: "../images/w-health.svg" },
        ]}
      />

      <AccordionGroup
        title="Brand"
        screenWidth={windowWidth}
        items={[
          { label: "Nutrivero", icon: "../images/nutrations.svg" },
          { label: "Suncella", icon: "../images/personal-care.svg" },
          { label: "HUNAI", icon: "../images/w-health.svg" },
          { label: "Vertal Orbis", icon: "../images/w-health.svg" },
          { label: "All", icon: "../images/w-health.svg" },
        ]}
      />
    </div>
  );
};

export default SidebarAccordion;
