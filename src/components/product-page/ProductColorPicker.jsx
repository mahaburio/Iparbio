import React, { useState, useRef, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const ProductColorPicker = ({
  colors = [],
  onSelect,
  maxVisible = 3,           // 👈 allow control from parent
  hideMore = false,         // 👈 allow hiding the "more" button
}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showAllColors, setShowAllColors] = useState(false);
  const popupRef = useRef(null);

  const visibleColors = colors.slice(0, maxVisible);
  const remainingColors = colors.slice(maxVisible);

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
    onSelect?.(color);
  };

  return (
    <div className="color-picker" style={{ position: "relative" }}>
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

        {/* Only show "more" if not hidden */}
        {!hideMore && remainingColors.length > 0 && (
          <div className="moreColor" onClick={() => setShowAllColors(true)}>+</div>
        )}
      </div>

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
