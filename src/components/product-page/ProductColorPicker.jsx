import React, { useState, useRef, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const ProductColorPicker = ({ colors = [] }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showAllColors, setShowAllColors] = useState(false);
  const popupRef = useRef(null); // Ref for modal

  // Split colors
  const visibleColors = colors.slice(0, 3);
  const remainingColors = colors.slice(3);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowAllColors(false);
      }
    }

    if (showAllColors) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAllColors]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowAllColors(false);
  };

  return (
    <div className="color-picker" style={{ position: "relative" }}>
      {/* Visible Color Dots */}
      <div className="product-color">
        {visibleColors.map((color, index) => (
          <div
            key={index}
            className="color-it"
            style={{
              backgroundColor: color,
              color: selectedColor === color ? "#fff" : "transparent",
            }}
            onClick={() => handleColorClick(color)}
          >
            {selectedColor === color ? "✔" : ""}
          </div>
        ))}

        {remainingColors.length > 0 && (
          <div className="moreColor" onClick={() => setShowAllColors(true)}>
            +
          </div>
        )}
      </div>

      {/* Popup */}
      {showAllColors && (
        <div className="all-colorPlate" ref={popupRef}>
          <div className="close-color" onClick={() => setShowAllColors(false)}>
            <RiCloseLine />
          </div>
          <div className="product-color">
            {remainingColors.map((color, index) => (
              <div
                key={index}
                className="color-it"
                style={{
                  backgroundColor: color,
                  color: selectedColor === color ? "#fff" : "transparent",
                }}
                onClick={() => handleColorClick(color)}
              >
                {selectedColor === color ? "✔" : ""}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductColorPicker;
