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

// ✅ Main Component
const SidebarAccordion = ({ language = "en" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const isTrigger = e.target.closest(".allBtn") || e.target.closest(".categoriesBtn");

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ✅ Language labels
  const labels = {
    en: {
      newProducts: "New Products",
      specialOffers: "Special Offers",
      bestsellers: "Bestsellers",
      sortBy: "Sort by",
      benefits: "Benefits",
      category: "Category",
      brand: "Brand",
      sortItems: ["Featured", "Bestselling", "Name", "Lowest Price", "Highest Price"],
      benefitItems: ["Mood", "Hormone, Sleep", "View all Products"],
      categoryItems: ["Nutrtions", "Personal Care", "Women's Health", "Eco-home", "All"],
      brandItems: ["Nutrivero", "Suncella", "HUNAI", "Vertal Orbis", "All"]
    },
    ru: {
      newProducts: "Новые продукты",
      specialOffers: "Специальные предложения",
      bestsellers: "Хиты продаж",
      sortBy: "Сортировать по",
      benefits: "Польза",
      category: "Категория",
      brand: "Бренд",
      sortItems: ["Рекомендуемые", "Популярные", "Название", "Цена (по возрастанию)", "Цена (по убыванию)"],
      benefitItems: ["Настроение", "Гормоны и сон", "Просмотреть все продукты"],
      categoryItems: ["Питание", "Уход за телом", "Женское здоровье", "Эко-дом", "Все"],
      brandItems: ["Nutrivero", "Suncella", "HUNAI", "Vertal Orbis", "Все"]
    }
  };

  const t = labels[language] || labels.en;

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

      <div className="scrolling-section">
        <button className="gray-btn fw-medium w-75 mt-2 text-start">{t.newProducts}</button>
        <button className="gray-btn fw-medium w-75 mt-2 text-start">{t.specialOffers}</button>
        <button className="gray-btn fw-medium w-75 mt-2 text-start">{t.bestsellers}</button>

        <AccordionGroup
          title={t.sortBy}
          defaultOpen={true}
          screenWidth={windowWidth}
          items={t.sortItems.map((label) => ({ label }))}
        />

        <AccordionGroup
          title={t.benefits}
          screenWidth={windowWidth}
          items={t.benefitItems.map((label) => ({
            label,
            icon: "../svg/bed.svg"
          }))}
        />

        <AccordionGroup
          title={t.category}
          screenWidth={windowWidth}
          items={t.categoryItems.map((label) => ({
            label,
            icon: "../svg/w-health.svg"
          }))}
        />

        <AccordionGroup
          title={t.brand}
          screenWidth={windowWidth}
          items={t.brandItems.map((label) => ({
            label,
            icon: "../svg/w-health.svg"
          }))}
        />
      </div>
    </div>
  );
};

export default SidebarAccordion;
