import React from "react";

const OrderListItem = ({ order, index, visibleIndex, setVisibleIndex }) => {
  const isVisible = visibleIndex === index;

  return (
    <div className="list-itm">
      <div className="order-dts">
        <div className="date fw-medium">
          Order placed <span className="green-title">{order.date}</span>
        </div>
        <div className="subtotal fw-medium">
          Subtotal: <span className="green-title">${order.subtotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="center">
        <div className="order-number">Order #{order.orderNumber}</div>
      </div>
      <div className="right">
        <div
          className="view-details fw-medium"
          onClick={() => setVisibleIndex(isVisible ? null : index)}
        >
          <span className="green-title">View </span>
          <span>details</span>
        </div>
      </div>

      <div className="all-cart-items py-1" style={{ display: isVisible ? "block" : "none" }}>
        {order.items.map((item, i) => (
          <div
            key={i}
            className="cart-item d-flex justify-content-between align-items-center"
          >
            <div className="left d-flex align-items-center gap-2">
              <div className="p-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cp-details">
                <div className="cp-nm">{item.name}</div>
                <p className="m-0">{item.code}</p>
                <div className="cp-pr">${item.price}</div>
              </div>
            </div>
            <div className="right d-flex align-items-center">
              <div className="share d-flex flex-column align-items-center">
                <div className="icon">
                  <i className="ri-share-forward-fill"></i>
                </div>
                <span>Share Shop Link</span>
              </div>
              <div className="write-review d-flex flex-column align-items-center">
                <div className="icon"><i className="ri-pencil-fill"></i></div>
                <span>Write a product review</span>
              </div>
              <div className="buy green-title fw-medium">Buy it Again</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderListItem;
