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
