// components/ProductHeroSection.jsx
import { useState } from "react";
import { RiAddLine, RiSubtractLine, RiHeartFill, RiShoppingCart2Fill } from "react-icons/ri";

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
  capsuleInfo,
  isSavedDefault = false,
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

              <div className="instruction">{instruction}</div>

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

                    <button className="savelistCircle" onClick={toggleSave}>
                      <RiHeartFill size={28} color={isSaved ? "#95c12b" : "#3e3e5466"} />
                    </button>
                  </div>
                </div>

                <div className="btn-sec">
                  <button className="buy-now">Buy Now</button>
                  <button className="add-cart">
                    <RiShoppingCart2Fill style={{ verticalAlign: "middle", marginRight: '5px', width: '24', height: '24'  }} />
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="sign-up">
                <p>
                  * Sign up as a Preferred Customer to get a <span className="percent">10%</span> discount and exclusive wellness benefits!
                </p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
