import React from 'react';
import '../../styles/pages/homepage.css';


export const ProductGridSection = ({ productData }) => {
  return (
    <section className="product-grid">
      <div className="container">
        {productData.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="img">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="grid-details">
              <div className="name">{item.name}</div>
              <div className="desc">
                Browse <span>our products</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
