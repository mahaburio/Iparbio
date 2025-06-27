import React, { useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const SubtotalCard = ({ show, productName, totalPrice, onClose }) => {
useEffect(() => {
if (show) {
const timer = setTimeout(() => {
onClose();
}, 4000);
return () => clearTimeout(timer);
}
}, [show, onClose]);

if (!show) return null;

return (
<div className="subtotal-card subtotal-with-close visible">
  <div className="sb-tl">{productName} Added – Subtotal: ${totalPrice.toFixed(2)}</div>
  <div className="cart-link">
    <a href="../html/cart-page.html">Go to Cart</a>
  </div>
  <div className="close-subtotal" onClick={onClose}>
    <RiCloseLine />
  </div>
</div>
);
};

export default SubtotalCard;