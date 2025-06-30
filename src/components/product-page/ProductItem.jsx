import React, { useState } from "react";
import ProductColorPicker from "./ProductColorPicker";
import QuantityPicker from "./QuantityPicker";
import Dropdown from "../common/Dropdown";

import { useCart } from "../../context/CartContext";


const ProductItem = ({
  item,
  productDetailsPrice = true,
  quantityPicker = false,
  productSizePicker = false,
  btn = true,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const price = parseFloat(item.price?.replace("$", "") || 0);

  const { showSubtotal, increaseCartCount } = useCart();

  const handleAddToCart = () => {
    showSubtotal(`${item.name} x${quantity}`, price * quantity);
    increaseCartCount(quantity);
  };

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectProduct = () => {
    setIsSelected(prev => !prev);  // toggles between true and false
  };

  return (
    <>
      <div className={`product-item ${isSelected ? "selectProdutItem" : ""}`}>
        <div className="product-header" onClick={handleSelectProduct}>
          <div className="product-img">
            <img src={item.image} alt={item.name} />
          </div>
        </div>

        <div className="product-details">
          <div className="det-up">
            <div className="product-name">{item.name}</div>
            <p className="m-0">{item.details}</p>

            {productDetailsPrice && (
              <>
                <div className="price">
                  <div className="new-price fw-bold">{item.price}</div>
                  {item.pv && <div className="pv ms-2 fw-medium">{item.pv}</div>}
                </div>
                {item.preferedPrice && (
                  <div className="prefered-price">{item.preferedPrice}</div>
                )}
              </>
            )}
          </div>

          <div className="det-center">
            {item.colors?.length > 0 && (
              <ProductColorPicker colors={item.colors} />
            )}

            {productSizePicker && item.sizes?.length > 0 && (
              <div className="product-size mt-2">
                <div className="size-box d-flex align-items-center justify-content-between">
                  <div className="dropdown-label">Size</div>
                  <Dropdown
                    label="Select Size"
                    options={item.sizes}
                    selected={selectedSize}
                    onChange={setSelectedSize}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="det-btm">
            {quantityPicker && (
              <QuantityPicker
                initialQuantity={quantity}
                onChange={(qty) => setQuantity(qty)}
              />
            )}

            {btn && (
              <div className="btn-sec text-center">
                <button className="green-btn mt-1" onClick={handleAddToCart}>
                  Add Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
