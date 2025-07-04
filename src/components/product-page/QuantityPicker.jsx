import React, { useState } from "react";
import { RiSubtractLine, RiAddLine, RiHeartLine, RiHeartFill } from "react-icons/ri";

const QuantityPicker = ({
  initialQuantity = 1,
  onChange,
  onSaveList,
  showSaveList = true,
  defaultSaved = false,
  saveListClass = 'savelist'
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isSaved, setIsSaved] = useState(defaultSaved); // ✅ use it here

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    onSaveList?.();
  };

  return (
    <div className="quantity d-flex align-items-center justify-content-center gap-2" id="quantityContainer">
      <div className="remove" onClick={handleDecrement}>
        <RiSubtractLine />
      </div>
      <div className="quantity-num">{quantity}</div>
      <div className="add" onClick={handleIncrement}>
        <RiAddLine />
      </div>

      {showSaveList && (
        <div
          className={saveListClass}
          onClick={handleSaveClick}
          style={{
            color: isSaved ? "var(--green-color)" : "",
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
        >
          {isSaved ? <RiHeartFill /> : <RiHeartLine />}
        </div>
      )}
    </div>
  );
};


export default QuantityPicker