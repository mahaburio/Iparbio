import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import '../../styles/slider.css'

const ProductSliderInitialize = ({
  sectionClass = "featured-section",
  title = "Fetured",
  prevBtnId = "prevProductSlider",
  nextBtnId = "nextProductSlider",
  sliderId = "productSlider",
  productItemClass = "product-item",
  data = []
}) => {
  useEffect(() => {
    const initSlider = () => {

      if (window.innerWidth > 576 && data.length >= 4 && !$(`#${sliderId}`).hasClass("slick-initialized")) {
        $(`#${sliderId}`).slick({
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        });

        $(`#${prevBtnId}`).on("click", () => $(`#${sliderId}`).slick("slickPrev"));
        $(`#${nextBtnId}`).on("click", () => $(`#${sliderId}`).slick("slickNext"));
      }
    };

    const destroySlider = () => {
      if ($(`#${sliderId}`).hasClass("slick-initialized")) {
        $(`#${sliderId}`).slick("unslick");
      }
    };

    // Initial load
    initSlider();

    // On window resize — debounce using setTimeout
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        destroySlider();
        initSlider();
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      destroySlider();
    };
  }, [sliderId, prevBtnId, nextBtnId]);

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="heading-title">
          <div >
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
              <a href="">SEE ALL PRODUCTS</a>
            </button>
          </div>
        </div>
        <div className=" product-slider mt-5" id={sliderId}>
          {data.map((item, index) => (
            <div key={index} className={productItemClass}>
              <div className="product-header">
                <div className="product-img">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
              <div className="product-details">
                <div className="product-name">{item.name}</div>
                <p className="m-0 mb-2">{item.details}</p>
                <div className="price">
                  <div className="new-price">{item.price}</div>
                </div>
                <div className="prefered-price">{item.preferedPrice}</div>
                <div className="btn-sec mt-3 text-center">
                  <button className="green-btn">Add Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSliderInitialize;
