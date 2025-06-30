import { useCart } from "../../context/CartContext";
import SubtotalCard from "../common/SubtotalCard";

const MainWrapper = ({ children }) => {
  const { subtotalVisible, subtotalProduct, subtotalAmount, hideSubtotal } = useCart();

  return (
    <>
      {/* Main layout */}
      {children}

      {/* Global SubtotalCard */}
      <SubtotalCard
        show={subtotalVisible}
        productName={subtotalProduct}
        totalPrice={subtotalAmount}
        onClose={hideSubtotal}
      />
    </>
  );
};

export default MainWrapper;
