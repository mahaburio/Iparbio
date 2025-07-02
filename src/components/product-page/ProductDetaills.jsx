import React from "react";
import ProductColorPicker from "./ProductColorPicker";
import ProductSizePickerCard from "./ProductSize";
import QuantityPicker from "./QuantityPicker";

export default function ProductDetails({
  itemNumber,
  title,
  description,
  newPrice,
  preferredPrice,
  learnMoreLink,
  instruction,
  instructionSec = true,
  colorOptions = false,
  sizeOptions = false,
  colors = [],
  sizes = [],
  QuantityToggle = false,
  quantity = 1,
  onQuantityChange = () => { },

}) {


  return (
    <div className="product-details">
      {itemNumber && (
        <div className="item-number">
          ITEM <span>#{itemNumber}</span>
        </div>
      )}

      <h1>{title}</h1>
      <p>{description}</p>

      <div className="price">
        {newPrice && <span className="new-price">{newPrice}</span>}
        {preferredPrice && (
          <span className="preferred-price">
            Preferred Price ${preferredPrice}
          </span>
        )}
        {learnMoreLink && (
          <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        )}
      </div>

      {instructionSec && instruction && (
        <div className="instruction">{instruction}</div>
      )}

      {colorOptions && colors.length > 0 && (
        <div className="color-selection mt-3">
          <strong>Color Options: </strong>
          <ProductColorPicker colors={colors} hideMore={true} maxVisible={7} />
        </div>
      )}

      {sizeOptions && sizes.length > 0 && (
        <div className="size-selection mt-3">
          <ProductSizePickerCard sizes={sizes} />
        </div>
      )}

      {QuantityToggle && (
        <div className="mt-3">
          <div className="d-flex justify-content-start">
            <QuantityPicker showSaveList={true} saveListClass="savelistCircle"
              initialQuantity={quantity}
              onChange={onQuantityChange}
              defaultSaved={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
