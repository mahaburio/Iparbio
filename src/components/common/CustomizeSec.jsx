import React, { useEffect, useRef, useState } from "react";

const AccordionGroup = ({ title, items = [], defaultOpen = false, screenWidth }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setIsOpen(screenWidth > 991 ? true : defaultOpen);
  }, [screenWidth, defaultOpen]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
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

  // ✅ Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Delegate click for both .allBtn and .categoriesBtn globally
  useEffect(() => {
    const handleShow = (e) => {
      const target = e.target;
      const isAllBtn = target.closest(".allBtn");
      const isCategoriesBtn = target.closest(".categoriesBtn");

      if (isAllBtn || isCategoriesBtn) {
        e.stopPropagation();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleShow);
    return () => document.removeEventListener("click", handleShow);
  }, []);

  // ✅ Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const isTrigger =
        e.target.closest(".allBtn") || e.target.closest(".categoriesBtn");

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !isTrigger
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // ✅ Lock/unlock body scroll
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
          { label: "Mood", icon: "../svg/mood.svg" },
          { label: "Hormone, Sleep", icon: "../svg/bed.svg" },
          { label: "View all Products", icon: "../svg/bed.svg" },
        ]}
      />

      <AccordionGroup
        title="Category"
        screenWidth={windowWidth}
        items={[
          { label: "Nutrtions", icon: "../svg/nutrations.svg" },
          { label: "Personal Care", icon: "../svg/personal-care.svg" },
          { label: "Women's Health", icon: "../svg/w-health.svg" },
          { label: "Eco-home", icon: "../svg/w-health.svg" },
          { label: "All", icon: "../svg/w-health.svg" },
        ]}
      />

      <AccordionGroup
        title="Brand"
        screenWidth={windowWidth}
        items={[
          { label: "Nutrivero", icon: "../svg/nutrations.svg" },
          { label: "Suncella", icon: "../svg/personal-care.svg" },
          { label: "HUNAI", icon: "../svg/w-health.svg" },
          { label: "Vertal Orbis", icon: "../svg/w-health.svg" },
          { label: "All", icon: "../svg/w-health.svg" },
        ]}
      />
    </div>
  );
};

export default SidebarAccordion;
