import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [subtotalVisible, setSubtotalVisible] = useState(false);
  const [subtotalProduct, setSubtotalProduct] = useState("");
  const [subtotalAmount, setSubtotalAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const showSubtotal = (name, totalPrice) => {
    setSubtotalProduct(name); // This shows the latest product added; if you want a list, you need to store multiple products
    setSubtotalAmount((prev) => prev + totalPrice); // add new totalPrice to previous amount
    setSubtotalVisible(true);

    // Auto-hide subtotal after 4s
    setTimeout(() => setSubtotalVisible(false), 4000);
  };
  const hideSubtotal = () => setSubtotalVisible(false);

  const increaseCartCount = (qty = 1) => {
    setCartCount((prev) => prev + qty);
  };

  return (
    <CartContext.Provider
      value={{
        subtotalVisible,
        subtotalProduct,
        subtotalAmount,
        cartCount,
        showSubtotal,
        hideSubtotal,
        increaseCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



// 


export const RangeSliderMaxMin = () => {
  const COLOR_TRACK = "#ccc";
  const COLOR_RANGE = "#95c12b";

  // Select all range containers
  const rangeContainers = document.querySelectorAll(".range_container");

  rangeContainers.forEach((container) => {
    const fromSlider = container.querySelector(".fromSlider");
    const toSlider = container.querySelector(".toSlider");
    const fromTooltip = container.querySelector(".fromSliderTooltip");
    const toTooltip = container.querySelector(".toSliderTooltip");

    const MIN = parseInt(fromSlider.min);
    const MAX = parseInt(fromSlider.max);

    const fillSlider = () => {
      const rangeDistance = MAX - MIN;
      const fromValue = parseInt(fromSlider.value);
      const toValue = parseInt(toSlider.value);

      const fromPercent = ((fromValue - MIN) / rangeDistance) * 100;
      const toPercent = ((toValue - MIN) / rangeDistance) * 100;

      toSlider.style.background = `linear-gradient(
      to right,
      ${COLOR_TRACK} 0%,
      ${COLOR_TRACK} ${fromPercent}%,
      ${COLOR_RANGE} ${fromPercent}%,
      ${COLOR_RANGE} ${toPercent}%,
      ${COLOR_TRACK} ${toPercent}%,
      ${COLOR_TRACK} 100%)`;
    };

    const setTooltip = (slider, tooltip) => {
      const value = slider.value;
      tooltip.textContent = value;

      const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
      const offset = ((percent - 50) / 50) * 15;
      tooltip.style.left = `calc(${percent}% - ${offset}px)`;
    };

    const handleFromSlider = () => {
      if (parseInt(fromSlider.value) > parseInt(toSlider.value)) {
        fromSlider.value = toSlider.value;
      }
      fillSlider();
      setTooltip(fromSlider, fromTooltip);
    };

    const handleToSlider = () => {
      if (parseInt(toSlider.value) < parseInt(fromSlider.value)) {
        toSlider.value = fromSlider.value;
      }
      fillSlider();
      setTooltip(toSlider, toTooltip);
    };

    // Attach event listeners
    fromSlider.addEventListener("input", handleFromSlider);
    toSlider.addEventListener("input", handleToSlider);

    // Init visuals
    fillSlider();
    setTooltip(fromSlider, fromTooltip);
    setTooltip(toSlider, toTooltip);
  });

}