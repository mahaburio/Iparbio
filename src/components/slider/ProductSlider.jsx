import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductColorPicker from "../product-page/ProductColorPicker";
import QuantityPicker from "../product-page/QuantityPicker";
import SubtotalCard from "../common/SubtotalCard";

import Dropdown from "../common/Dropdown";

import "../../styles/slider/slider.css";

const ProductSliderInitialize = ({
  sectionClass = "featured-section",
  title = "Featured",
  prevBtnId = "prevProductSlider",
  nextBtnId = "nextProductSlider",
  sliderId = "productSlider",
  productItemClass = "product-item",
  descTitle = false,
  productDetailsPrice = true,
  quantityPicker = false,
  productSizePicker = false,
  btn=true,
  data = [],
}) => {

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (index, newQty) => {
    setQuantities((prev) => ({ ...prev, [index]: newQty }));
  };

  const sliderRef = useRef(null);


  const [subtotalVisible, setSubtotalVisible] = useState(false);
  const [subtotalProduct, setSubtotalProduct] = useState("");
  const [subtotalAmount, setSubtotalAmount] = useState(0);

  const handleAddToCart = (name, price, index) => {
    const quantity = quantities[index] || 1;
    const total = price * quantity;

    setSubtotalProduct(`${name} x${quantity}`);
    setSubtotalAmount((prev) => prev + total);
    setSubtotalVisible(true);
  };

  const handleCloseSubtotal = () => {
    setSubtotalVisible(false);
  };

  useEffect(() => {
    const nextBtn = document.getElementById(nextBtnId);
    const prevBtn = document.getElementById(prevBtnId);

    const handleNext = () => sliderRef.current?.slickNext();
    const handlePrev = () => sliderRef.current?.slickPrev();

    nextBtn?.addEventListener("click", handleNext);
    prevBtn?.addEventListener("click", handlePrev);

    return () => {
      nextBtn?.removeEventListener("click", handleNext);
      prevBtn?.removeEventListener("click", handlePrev);
    };
  }, [nextBtnId, prevBtnId]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: data.length > 4,
    slidesToShow: Math.min(data.length, 4),
    slidesToScroll: Math.min(data.length, 4),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 576, // 👈 This disables slick below 576px
        settings: "unslick",
      },
    ],
  };


  const [selectedSizes, setSelectedSizes] = useState({});
  const handleSizeChange = (index, value) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [index]: value,
    }));
    console.log(`Selected size for product ${index}:`, value);
  };


  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="heading-title">
          <div><h1 dangerouslySetInnerHTML={{ __html: title }} /></div>
          <div className="right-details">
            <div className="arrow">
              <div className="prev-btn" id={prevBtnId}><i className="ri-arrow-left-s-line"></i></div>
              <div className="next-btn" id={nextBtnId}><i className="ri-arrow-right-s-line"></i></div>
            </div>
            <button className="allProduct-btn">
              <a href="#">SEE ALL PRODUCTS</a>
            </button>
          </div>
        </div>

        {descTitle && <p className="ach-tt mt-4">Achieving Your Nutritional Goals is Easier Than You Think. Discover Our Supportive Solutions.</p>}

        <div className="product-slider mt-5" id={sliderId}>
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => {
              const price = parseFloat(item.price?.replace("$", "") || 0);
              return (
                <div key={index} className={productItemClass}>
                  <div className="product-header">
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
                          {item.preferedPrice && <div className="prefered-price">{item.preferedPrice}</div>}
                        </>
                      )}
                    </div>

                    <div className="det-center">
                      {item.colors?.length > 0 && <ProductColorPicker colors={item.colors} />}

                      {productSizePicker && item.sizes?.length > 0 && (
                        <Dropdown
                          label="Select Size"
                          options={item.sizes}
                          selected={selectedSizes[index] || ""}
                          onChange={(val) => handleSizeChange(index, val)}
                        />
                      )}
                    </div>

                    <div className="det-btm">
                      {quantityPicker && (
                        <>

                          <QuantityPicker
                            initialQuantity={quantities[index] || 1}
                            onChange={(qty) => handleQuantityChange(index, qty)}
                          />
                        </>
                      )}

                      {btn && (
                        <>
                          <div className="btn-sec text-center">
                            <button className="green-btn mt-1" onClick={() => handleAddToCart(item.name, price, index)}>Add Order</button>
                          </div></>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <SubtotalCard
          show={subtotalVisible}
          productName={subtotalProduct}
          totalPrice={subtotalAmount}
          onClose={handleCloseSubtotal}
        />
      </div>
    </section>
  );
};

export default ProductSliderInitialize;
