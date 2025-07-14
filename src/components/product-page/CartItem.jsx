import React, { useState, useRef, useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import QuantityPicker from "./QuantityPicker";
import Modal from "../common/PopupModal";
import ProductDetails from "./ProductDetaills";
import "../../styles/pages/signuppage.css";

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
  subscribeControls = false,
  updateItem = true,
  ForAddProduct = false,
  onAdd,
  AddItemList = false,
  onAddToList,
  removing = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const colors = ["#d5ccc3", "#c28170", "#b16c6d", "#c28270", "#c28180"];
  const sizes = [
    { fl: "21 FL OZ", ml: "500 ML" },
    { fl: "12 FL OZ", ml: "355 ML" },
    { fl: "21 FL OZ", ml: "400 ML" },
    { fl: "12 FL OZ", ml: "655 ML" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("1 Month Common");
  const dropdownRef = useRef();

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className={`cart-item d-flex justify-content-between align-items-center py-2 ${removing ? "hide" : ""}`}>
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

        {/* Right Controls */}
        <div className={`right d-flex align-items-center ${showControls ? "gap-3" : ""}`}>
          {showControls && (
            <>
              <BiSolidPencil
                fontSize={30}
                color="var(--green-color)"
                onClick={handleEdit}
                style={{ cursor: "pointer" }}
                className="edit-tool"
              />
              <QuantityPicker
                initial={quantity}
                onChange={onQuantityChange}
                defaultSaved={true}
                saveListClass="savelistCircle"
              />
              <div className="cross-item d-flex align-items-center" onClick={onDelete}>
                <BsTrash3 fontSize={24} color="var(--green-color)" />
              </div>
            </>
          )}

          {!showControls && <span className="qnt">Quantity: {quantity}</span>}
        </div>

        {/* For Add Product Layout */}
        {ForAddProduct && (
          <div className="right d-flex align-items-center gap-3">
            <QuantityPicker
              initial={quantity}
              onChange={onQuantityChange}
              defaultSaved={true}
              saveListClass="savelistCircle"
            />
            <div className="cross-item d-flex align-items-center" onClick={onDelete}>
              <BsTrash3 fontSize={24} color="var(--green-color)" />
            </div>
            <div className="btn-sec">
              <button className="green-btn green-btn-sm" onClick={onAdd}>
                Add
              </button>
            </div>
          </div>
        )}

        {/* Add to Share List Layout */}
        {AddItemList && (
          <div className="right d-flex align-items-center gap-3">
            <div className="add-listItems d-flex align-items-center gap-1" onClick={onAddToList}>
              <div className="add-list">Add to List</div>
              <div className="icon">+</div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleClose} className="medium-modal">
        <div className="product_cart_modal">
          <ProductDetails
            itemNumber={itemCode}
            title={name}
            description={`Edit your ${name} product`}
            newPrice={price}
            preferredPrice={"75"}
            learnMoreLink={"#"}
            instruction={"You can customize this product."}
            instructionSec={true}
            colorOptions={editOptions.showColor}
            sizeOptions={editOptions.showSize}
            colors={colors}
            sizes={sizes}
            QuantityToggle={true}
          />
        </div>

        {updateItem && (
          <div className="btn-sec mt-3">
            <button className="green-btn">Update Item</button>
          </div>
        )}

        {subscribeControls && (
          <>
            <div className="product_cart_modal">
              <div className="subscribe d-flex align-items-center gap-2 flex-wrap">
                <b>Subscribe:</b> Arrives every
                <div className="dropdown-container" ref={dropdownRef}>
                  <span className="dropdown-btn green-title" onClick={() => setIsOpen(!isOpen)}>
                    {selectedValue}
                  </span>
                  {isOpen && (
                    <ul className="dropdown-list">
                      {["1 Month Common", "2 Months", "3 Months", "4 Months"].map((val) => (
                        <li key={val} onClick={() => handleSelect(val)}>
                          {val}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="auto-delivery mt-2">
              Auto delivery will be on <span className="green-title">Feb. 10</span>
            </div>

            <div className="btn-sec mt-3">
              <button className="green-btn">Confirm Subscription</button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default CartItem;
