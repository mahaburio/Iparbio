import React, { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import QuantityPicker from "./QuantityPicker";

import Modal from "../common/PopupModal";
import ProductDetails from "./ProductDetaills";

import '../../styles/pages/signuppage.css';

const CartItem = ({
  name,
  price,
  image,
  quantity,
  itemCode = "",
  showControls = true,
  onDelete,
  onQuantityChange,
 editOptions = { showColor: true, showSize: true },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Sample color and size options (could be passed from parent in the future)
  const colors = ["#d5ccc3", "#c28170", "#b16c6d", '#c28270', '#c28180'];
  const sizes = [
    { fl: "21 FL OZ", ml: "500 ML" },
    { fl: "12 FL OZ", ml: "355 ML" },
    { fl: "21 FL OZ", ml: "400 ML" },
    { fl: "12 FL OZ", ml: "655 ML" },
  ];

  return (
    <>
      <div className="cart-item d-flex justify-content-between align-items-center py-2">
        <div className="left d-flex align-items-center gap-2">
          <div className="p-img">
            <img src={image} alt={name} />
          </div>
          <div className="cp-details">
            <div className="cp-nm">{name}</div>
            {itemCode && <p className="m-0">{itemCode}</p>}
            <div className="cp-pr">{price}</div>
          </div>
        </div>

        <div className={`right d-flex align-items-center ${showControls ? "gap-3" : ""}`}>
          {showControls ? (
            <>
              <BiSolidPencil
                fontSize={30}
                color="var(--green-color)"
                onClick={handleEdit}
                style={{ cursor: 'pointer' }}
              />
              <QuantityPicker initial={quantity} onChange={onQuantityChange} defaultSaved={true} saveListClass="savelistCircle" />
              <div className="cross-item d-flex align-items-center" onClick={onDelete}>
                <BsTrash3 fontSize={24} color="var(--green-color)" />
              </div>
            </>
          ) : (
            <span>Quantity: {quantity}</span>
          )}
        </div>
      </div>

      {/* Modal for editing product details */}
      <Modal isOpen={isModalOpen} onClose={handleClose} className="medium-modal">
        <div className="product_cart_modal">
          <ProductDetails
            itemNumber={itemCode}
            title={name}
            description={`Edit your ${name} product`} // optional
            newPrice={price}
            preferredPrice={"75"} // optional
            learnMoreLink={"#"} // optional
            instruction={"You can customize this product."}
            instructionSec={true}
            colorOptions={editOptions.showColor}
            sizeOptions={editOptions.showSize}
            colors={colors}
            sizes={sizes}
            QuantityToggle={true}

          />
        </div>

        {/* <div className="text-end mt-4">
          <button className="btn btn-outline-secondary" onClick={handleClose}>
            Close
          </button>
        </div> */}

        <div class="btn-sec mt-3">
          <button class="green-btn">Update Item</button>
        </div>
      </Modal>
    </>
  );
};

export default CartItem;
