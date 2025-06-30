import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductItem from "../product-page/ProductItem";

import "../../styles/slider/slider.css";

const ProductSliderInitialize = ({
  sectionClass = "featured-section",
  title = "Featured",
  prevBtnId = "prevProductSlider",
  nextBtnId = "nextProductSlider",
  sliderId = "productSlider",
  descTitle = false,
  productDetailsPrice = true,
  quantityPicker = false,
  productSizePicker = false,
  btn = true,
  data = [],
}) => {
  const sliderRef = useRef(null);

  // Custom Prev/Next Button Events
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
        breakpoint: 576,
        settings: "unslick",
      },
    ],
  };

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="heading-title">
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </div>

          <div className="right-details">
            <div className="arrow">
              <div className="prev-btn" id={prevBtnId}>
                <i className="ri-arrow-left-s-line"></i>
              </div>
              <div className="next-btn" id={nextBtnId}>
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </div>
            <button className="allProduct-btn">
              <a href="#">SEE ALL PRODUCTS</a>
            </button>
          </div>
        </div>

        {descTitle && (
          <p className="ach-tt mt-4">
            Achieving Your Nutritional Goals is Easier Than You Think. Discover
            Our Supportive Solutions.
          </p>
        )}

        <div className="product-slider mt-5" id={sliderId}>
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <ProductItem
                key={index}
                item={item}
                productDetailsPrice={productDetailsPrice}
                quantityPicker={quantityPicker}
                productSizePicker={productSizePicker}
                btn={btn}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductSliderInitialize;
