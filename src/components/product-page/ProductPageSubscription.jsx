import React, { useEffect } from 'react';

import Footer from '../../components/footer/footer.jsx';
import { Header, ProductItem } from '../../components/index.js';
import Pagination from '../../components/common/Pagination.jsx';
import SidebarAccordion from '../../components/common/CustomizeSec.jsx';

const allProducts = [
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$50",
    colors: ["#d5ccc3", "#c28270", "#b16c6d", "#c28170", "#b16d6d"],
    pv: '20pv',
  },
  {
    name: "Nutriation",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
  },
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
    sizes: ["Solo 0.75 fl oz", "Doppio 1.5 fl oz", "Tripple 2.25 fl oz"],
  },
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
  },
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$50",
    colors: ["#d5ccc3", "#c28270", "#b16c6d", "#c28170", "#b16d6d"],
    pv: '20pv',
  },
  {
    name: "Nutriation",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
  },
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
    sizes: ["Solo 0.75 fl oz", "Doppio 1.5 fl oz", "Tripple 2.25 fl oz"],
  },
  {
    name: "Women’s Probiotic",
    image: "../images/product-img-1.webp",
    details: "50B CFU & 8 Strains",
    price: "$80",
  }
];

// Handle pagination callback
const handlePageChange = (page) => {
  console.log("Selected page:", page);
};

function ProductPageSubscription({ navigation }) {
  useEffect(() => {
    const gridBtn = document.querySelector(".grid");
    const listBtn = document.querySelector(".list-view");
    const productItems = document.querySelector(".shopPage .product-items");

    if (!gridBtn || !listBtn || !productItems) return;

    const handleListView = () => {
      productItems.classList.add("activeListView");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    };

    const handleGridView = () => {
      productItems.classList.remove("activeListView");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    };

    listBtn.addEventListener("click", handleListView);
    gridBtn.addEventListener("click", handleGridView);

    return () => {
      listBtn.removeEventListener("click", handleListView);
      gridBtn.removeEventListener("click", handleGridView);
    };
  }, []);

  return (

    <>
      <div className="product_page shopPage">
        <section className="product-title-section py-4">
          <div className="container">
            {navigation && (
              <>
                <div className="navigation d-flex align-items-center">
                  <div className="navigate">
                    <a href="#">Menu</a> / <a href="#">Cold Coffees</a> /
                    <a href="#">Iced Espresso</a>
                  </div>
                </div>
              </>
            )}
            <div className="product-header text-center product-title-header pt-4">
              <div className="img d-flex align-items-center justify-content-center">
                <img src="../svg/leaf.svg" alt="" />
              </div>
              <h1 className="fw-bold">Nutrition</h1>
              <p>Build better, long-term health starting with the essentials</p>
            </div>
          </div>
        </section>

        <section className="main-product-section pt-xl-5 pt-lg-5 pt-md-0 pt-sm-0 pt-0">
          <div className="customize-sec-mobile">
            <div className="listitem-for-mobile">
              <button>Cognitive &amp; Focus Support</button>
              <button>Focus Support</button>
              <button>Liver Health</button>
              <button>Cognitive &amp; Focus Support</button>
            </div>
            <div className="list-grid-section">
              <div className="listitem-name" id="listItemsName">
                Cognitive &amp; Focus Support
              </div>
              <div className="layout-selection mt-4 d-flex align-items-center justify-content-between">
                <div className="left">
                  <button className="categoriesBtn">
                    Categories<i className="ri-arrow-down-s-line"></i>
                  </button>
                  <button className="ms-2">New Product</button>
                </div>
                <div className="right d-flex align-items-center gap-2">
                  <div className="grid active"><i className="ri-grid-fill"></i></div>
                  <div className="list-view"><i className="ri-list-check"></i></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col-xl-3 col-lg-3">
                {/* <Sidebar  /> */}
                <SidebarAccordion />
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 all-product-sec">
                <div className="product-items">
                  {allProducts.map((item, index) => (
                    <ProductItem
                      key={index}
                      item={item}
                      productDetailsPrice={true}
                      quantityPicker={true}
                      productSizePicker={true}
                      btn={true}
                    />
                  ))}
                </div>
              </div>
              <Pagination totalPages={6} onPageChange={handlePageChange} />

              <div className="btn-sec mt-5 text-lg-end text-md-end text-sm-end text-center">
                <button className="black-btn">
                  <a href="/cart">Go to Cart</a>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default ProductPageSubscription;
