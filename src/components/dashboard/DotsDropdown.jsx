import React, { useEffect, useRef, useState } from "react";

const DotsDropdown = ({ options = [], onOptionClick }) => {
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const dotsRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle outside click and scroll
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dotsRef.current &&
        !dotsRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    const handleScroll = () => setOpen(false);

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate dropdown position
  useEffect(() => {
    if (open && dotsRef.current && dropdownRef.current) {
      const dotRect = dotsRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const dropdownWidth = dropdownRef.current.offsetWidth;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const spaceBelow = viewportHeight - dotRect.bottom;
      const spaceAbove = dotRect.top;
      const spaceRight = viewportWidth - dotRect.right;
      const spaceLeft = dotRect.left;

      const openAbove = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;
      const top = openAbove ? -dropdownHeight - 10 : "100%";
      const left =
        spaceRight < dropdownWidth && spaceLeft > dropdownWidth
          ? -dropdownWidth + 30
          : 0;

      setDropdownStyle({
        position: "absolute",
        zIndex: 1000,
        top: typeof top === "number" ? `${top}px` : top,
        left: typeof left === "number" ? `${left}px` : left,
      });
    }
  }, [open]);

  return (
    <div className="dots" ref={dotsRef} onClick={() => setOpen(!open)}>
      <i className="ri-more-fill"></i>
      {open && (
        <div className="export" ref={dropdownRef} style={dropdownStyle}>
          {options.map((opt, idx) => (
            <li key={idx} onClick={() => onOptionClick(opt)}>
              {opt.label}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default DotsDropdown;
