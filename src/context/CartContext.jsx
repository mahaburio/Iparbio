// context/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [subtotalVisible, setSubtotalVisible] = useState(false);
  const [subtotalProduct, setSubtotalProduct] = useState("");
  const [subtotalAmount, setSubtotalAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [totalPV, setTotalPV] = useState(0); // ✅ new state for PV

  const showSubtotal = (name, totalPrice) => {
    setSubtotalProduct(name);
    setSubtotalAmount((prev) => prev + totalPrice);
    setSubtotalVisible(true);
    setTimeout(() => setSubtotalVisible(false), 4000);
  };

  const hideSubtotal = () => setSubtotalVisible(false);

  const increaseCartCount = (qty = 1, pvString = "") => {
    setCartCount((prev) => prev + qty);

    // ✅ Parse PV and update totalPV
    const parsedPV = parseFloat(pvString?.replace(/[^\d.]/g, "")) || 0;
    setTotalPV((prev) => prev + parsedPV * qty);
  };

  return (
    <CartContext.Provider
      value={{
        subtotalVisible,
        subtotalProduct,
        subtotalAmount,
        cartCount,
        totalPV, // ✅ expose totalPV
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
