import React, { useState, useRef } from "react";
import { RiAddLine, RiSubtractLine, RiHeartFill, RiShoppingCart2Fill } from "react-icons/ri";

import { FaCalendarDays } from "react-icons/fa6";

import PhoneInput from '../../components/input/PhoneNumber.jsx';
import Tabs from '../../components/common/Tabs.jsx';

import DatePicker from "../custom/DatePicker.jsx"

import ProductColorPicker from "./ProductColorPicker";
import ProductSizePickerCard from "./ProductSize";
import '../../styles/pages/productpage.css'

export default function ProductHeroSection({
image,
itemNumber,
title,
description,
newPrice,
preferredPrice,
learnMoreLink,
instruction,
instructionSec = true,
capsuleInfo,
isSavedDefault = false,

signUpBtn = true,

// For Color Page
colorOptions = false,
// For Size Page
sizeOptions = false,
// For Egift Page
eGiftDetails = false

}) {
const [quantity, setQuantity] = useState(1);
const [isSaved, setIsSaved] = useState(isSavedDefault);

const handleDecrease = () => {
if (quantity > 1) setQuantity(quantity - 1);
};

const handleIncrease = () => {
setQuantity(quantity + 1);
};

const toggleSave = () => {
setIsSaved(!isSaved);
};


// Colors Set
const colors = ["#d5ccc3", "#c28170", "#b16c6d", "#c28270", "#b17c6d"];


// Size Set

const sizes = [
{ fl: "21 FL OZ", ml: "500 ML" },
{ fl: "18 FL OZ", ml: "450 ML" },
{ fl: "12 FL OZ", ml: "355 ML" },
{ fl: "50 FL OZ", ml: "255 ML" },
];


// For Egift Details

const [giftType, setGiftType] = useState("Your Photo");
const [amount, setAmount] = useState("$25");
const [deliveryType, setDeliveryType] = useState("SMS");
const [deliveryDate, setDeliveryDate] = useState("");
const datePickerRef = useRef();


// Egift Images

const previewImages = [
"../images/ipar-gift-card.webp",
"../images/ipar-gift-card.webp",
"../images/ipar-gift-card.webp",
"../images/ipar-gift-card.webp",
];


return (

<section className="product-section">
  <div className="container">
    <div className="row">
      {/* Image */}
      <div className="col-xl-7 col-lg-7 d-flex align-items-center justify-content-center">
        <div className="product-img">
          <img src={image} alt={title} />
        </div>
      </div>

      {/* Details */}
      <div className="col-xl-5 col-lg-5 mt-lg-0 mt-5">
        <div className="product-details">
          <div className="item-number">ITEM <span>#{itemNumber}</span></div>
          <h1>{title}</h1>
          <p>{description}</p>

          <div className="price">
            <span className="new-price">${newPrice}</span>
            <span className="preferred-price">Preferred Price ${preferredPrice}</span>
            <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>

          {instructionSec && <div className="instruction">{instruction}</div>}


          {eGiftDetails && (
          <div className="">
            <div className="product-details egift-details">
              <h5 className="mt-2">Choose your eGift card design</h5>
              <div className="egift-type">
                <div className="btn-sec mt-3 d-flex align-items-center gap-2">
                  {["Standard", "Animated", "Your Photo"].map((type) => (
                  <button key={type} className={giftType===type ? "activeEgift" : "" } onClick={()=> setGiftType(type)}
                    >
                    {type}
                  </button>
                  ))}
                </div>

                <div className="egift-type-preview mt-3">
                  {previewImages.map((src, i) => (
                  <div className="preview" key={i}>
                    <img src={src} alt={`Gift Card ${i + 1}`} />
                  </div>
                  ))}
                </div>
              </div>

              <h5 className="mt-3">Enter eGift card details</h5>
              <div className="egift-card-details">
                {/* Amount Buttons + Input */}
                <div className="details-type mt-3 amount-type">
                  <div className="type-nm">Amount*</div>
                  <div className="amount">
                    {["$10", "$25", "$50", "$100"].map((amt) => (
                    <button key={amt} className={`amt-btn ${amount===amt ? "activeAmount" : "" }`} onClick={()=> setAmount(amt)}
                      >
                      {amt}
                    </button>
                    ))}
                    <input type="text" placeholder="$" onFocus={()=> setAmount("")}
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount.startsWith("$") ? amount : ""}
                    />
                  </div>
                </div>

                {/* Delivery Type */}
                <div className="deliver-type details-type mt-3">
                  <div className="type-nm">Deliver*</div>
                  <div className="deliver-select d-flex gap-2">
                    {["Email", "SMS"].map((type) => (
                    <button key={type} className={deliveryType===type ? "activeDeliveryType" : "" } onClick={()=> setDeliveryType(type)}
                      >
                      {type}
                    </button>
                    ))}
                  </div>
                </div>

                {/* Conditional Input Fields */}
                {deliveryType === "Email" && (
                <div className="details-type mt-3 email-type">
                  <div className="type-nm">Recipient Email Address*</div>
                  <div className="dts-rt">
                    <input type="email" placeholder="Enter email address"></input>
                  </div>
                </div>
                )}

                {deliveryType === "SMS" && (
                <div className="details-type mt-3 phone-type">
                  <div className="type-nm">Primary Phone *</div>
                  <div className="dts-rt">
                    {/* Keep using your PhoneInput component here */}
                    <PhoneInput label={false} />
                  </div>
                </div>
                )}

                {/* Name */}
                <div className="details-type mt-3">
                  <div className="type-nm">Your Name *</div>
                  <div className="dts-rt">
                    <input type="text" placeholder="Enter Name" />
                  </div>
                </div>

                {/* Message */}
                <div className="details-type message-type mt-3">
                  <div className="type-nm">Gift Message:</div>
                  <div className="dts-rt">
                    <textarea placeholder="Message..."></textarea>
                  </div>
                </div>

                {/* Delivery Date */}
                <div className="details-type delivery-date mt-3">
                  <div className="type-nm">Delivery Date:</div>
                  <div className="dts-rt">
                    <div className="date-im d-flex gap-2">
                      <DatePicker ref={datePickerRef} value={deliveryDate} onChange={(date)=> setDeliveryDate(date)}
                        id="birth-date"
                        className="flatpickr-input"
                        />
                        <div className="calendar-icon" onClick={()=> datePickerRef.current.open()}>
                          <FaCalendarDays size={25} color="var(--gray-60)" pointerEvents={true} />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {colorOptions && (
          <div className="color-selection">

            <div className="select-color mt-2">
              <strong>Color Options: </strong>
            </div>
            <ProductColorPicker colors={colors} hideMore={true} maxVisible={7} />
          </div>
          )}

          {sizeOptions && (

          <ProductSizePickerCard sizes={sizes} />

          )}

          <div className="buy-details">
            <div className="total-capsul">{capsuleInfo}</div>

            <div className="quantity d-flex align-items-center gap-2">
              <span>Quantity:</span>
              <div className="d-flex align-items-center gap-2">
                <div className="remove" onClick={handleDecrease}>
                  <RiSubtractLine />
                </div>
                <div className="quantity-num">{quantity}</div>
                <div className="add" onClick={handleIncrease}>
                  <RiAddLine />
                </div>

                <button className="savelistCircle flex justify-center items-center" onClick={toggleSave}>
                  <RiHeartFill size={28} color={isSaved ? "#95c12b" : "#3e3e5466" } />
                </button>
              </div>
            </div>

            <div className="btn-sec">
              <button className="buy-now ">Buy Now</button>
              <button className="add-cart flex items-center">
                <RiShoppingCart2Fill style={{ verticalAlign: "middle", marginRight: '5px', width: '24', height: '24' }} />
                Add to cart
              </button>
            </div>
          </div>

          {signUpBtn && (
          <>
            <div className="sign-up">
              <p>
                * Sign up as a Preferred Customer to get a <span className="percent">10%</span> discount and exclusive wellness benefits!
              </p>
              <button>Sign up</button>
            </div>
          </>
          )}
        </div>
      </div>
    </div>
  </div>
</section>
);
}