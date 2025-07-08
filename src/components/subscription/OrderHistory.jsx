import React, { useState, useEffect, useRef } from "react";
import OrderListItem from "../../components/subscription/OrderListItem";

import '../../styles/pages/signuppage.css'
import CartItem from "../../components/product-page/CartItem";
const tabs = ["Orders", "Cancelled Orders", "Buy Again"];
const ranges = ["Past 7 days", "Past 30 days", "Past 3 months", "Past 6 months", "Last year"];

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState("Orders");
  const [selectedRange, setSelectedRange] = useState("Past 30 days");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const containerRef = useRef();

  // Sample orders for each tab
  const orders = [
    {
      date: "Jan 30, 2025",
      subtotal: 287,
      orderNumber: "6547424",
      items: [
        { name: "Balance", code: "ITEM#103/500ml", price: 80, image: "images/product-img-2.webp" },
        { name: "Welcome Kit", code: "ITEM#105", price: 80, image: "images/product-img-2.webp" },
      ],
    },
    {
      date: "July 7, 2025",
      subtotal: 287,
      orderNumber: "845412",
      items: [
        { name: "Balance", code: "ITEM#103/500ml", price: 80, image: "images/product-img-2.webp" },

      ],
    },

    {
      date: "July 7, 2025",
      subtotal: 287,
      orderNumber: "845412",
      items: [
        { name: "Balance", code: "ITEM#103/500ml", price: 80, image: "images/product-img-2.webp" },

      ],
    },

    {
      date: "July 7, 2025",
      subtotal: 287,
      orderNumber: "845412",
      items: [
        { name: "Balance", code: "ITEM#103/500ml", price: 80, image: "images/product-img-2.webp" },

      ],
    },


    {
      date: "July 7, 2025",
      subtotal: 287,
      orderNumber: "845412",
      items: [
        { name: "Balance", code: "ITEM#103/500ml", price: 80, image: "images/product-img-2.webp" },

      ],
    },
  ];

// Cart Items

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Welcome Kit",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "105",
      showControls: true,
      editOptions: {
        showColor: true,
        showSize: false,
      },
    },
    {
      id: 2,
      name: "Balance",
      price: "$80",
      quantity: 2,
      image: '../images/product-img-2.webp',
      itemCode: "103/500ml",
      showControls: true,
      editOptions: {
        showColor: false,
        showSize: true,
      },
    },

  ]);

  const handleDelete = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const cancelledOrders = [
    {
      date: "May 01, 2025",
      subtotal: 120,
      orderNumber: "9988776",
      items: [
        { name: "Lipstick", code: "ITEM#222", price: 60, image: "images/product-img-2.webp" },
      ],
    },

    {
      date: "July 5, 2025",
      subtotal: 120,
      orderNumber: "9988776",
      items: [
        { name: "Lipstick", code: "ITEM#222", price: 60, image: "images/product-img-2.webp" },
      ],
    },
  ];

  const filterDate = (range) => {
    const now = new Date();
    switch (range) {
      case "Past 7 days": return new Date(now.setDate(now.getDate() - 7));
      case "Past 30 days": return new Date(now.setDate(now.getDate() - 30));
      case "Past 3 months": return new Date(now.setMonth(now.getMonth() - 3));
      case "Past 6 months": return new Date(now.setMonth(now.getMonth() - 6));
      case "Last year": return new Date(now.setFullYear(now.getFullYear() - 1));
      default: return new Date(0);
    }
  };

  const filteredOrders = (data) => {
    const cutoff = filterDate(selectedRange);
    return data.filter((order) => new Date(order.date) >= cutoff);
  };

  // --after-left tab animation
  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const tabContainer = document.querySelector(".activation-menus-v3");
    if (tabContainer) {
      tabContainer.style.setProperty("--after-left", `${(index * 100) / tabs.length}%`);
    }
  }, [activeTab]);

  // Auto close cart items on scroll or click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current?.contains(e.target)) setVisibleIndex(null);
    };
    const handleScroll = () => setVisibleIndex(null);

    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectRange = (range) => {
    setSelectedRange(range);
    setDropdownOpen(false);
    setVisibleIndex(null); // close any open detail
  };

  return (
    <div className="order_hisrory">
      <section className="orders-section" ref={containerRef}>
        <div className="container">
          {/* Tabs */}
          <div className="activation-section">
            <div className="activation-menus activation-menus-v3">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`act-menu ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          {/* Dropdown */}
          {activeTab !== "Buy Again" && (
            <div className="select-box mt-3">
              <div className="select-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="select-text">{selectedRange}</span>
                <div className="arrowIcon">
                  <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line`}></i>
                </div>
              </div>
              {dropdownOpen && (
                <div className="options-list">
                  {ranges.map((range) => (
                    <div
                      className="option-item"
                      key={range}
                      onClick={() => handleSelectRange(range)}
                    >
                      {range}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Order List */}
          <div className="order-list-history mt-4">
            {(activeTab === "Orders" || activeTab === "Cancelled Orders") && (
              <>
                <div className="total-orders fw-medium gray mb-3">
                  <span className="green-title">
                    {filteredOrders(activeTab === "Orders" ? orders : cancelledOrders).length}
                  </span>{" "}
                  Orders placed in
                </div>

                {filteredOrders(activeTab === "Orders" ? orders : cancelledOrders).length > 0 ? (
                  filteredOrders(activeTab === "Orders" ? orders : cancelledOrders).map(
                    (order, index) => (
                      <OrderListItem
                        key={index}
                        order={order}
                        index={index}
                        visibleIndex={visibleIndex}
                        setVisibleIndex={setVisibleIndex}
                      />
                    )
                  )
                ) : (
                  <div className="text-center text-muted mt-4">
                    No orders found for this range.
                  </div>
                )}
              </>
            )}

            {activeTab === "Buy Again" && (
              <>
                <div className="all-cart-items">
                  {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      quantity={item.quantity}
                      itemCode={item.itemCode}
                      showControls={item.showControls}
                      onDelete={() => handleDelete(item.id)}
                      editOptions={item.editOptions}
                      onQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
                      subscribeControls={true}
                      updateItem={false}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderTabs;
