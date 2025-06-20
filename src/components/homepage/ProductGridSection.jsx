import React from 'react'
import '../../styles/pages/homepage.css';

export const ProductGridSection = () => {
  return (
    <>
      <section className="product-grid">
        <div className="container">
          <div className="grid-item">
            <div className="img">
              <a href=""><img src="../svg/leaf.svg" alt="" /></a>
            </div>
            <div className="grid-details">
              <div className="name">NUTRITION</div>
              <div className="desc">Browse <span>our products</span></div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <a href=""><img src="../svg/sincella.svg" alt="" /></a>
            </div>
            <div className="grid-details">
              <div className="name">SUNCELLA</div>
              <div className="desc">Browse <span>our products</span></div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <a href=""><img src="../svg/face.svg" alt="" /></a>
            </div>
            <div className="grid-details">
              <div className="name">PERSONAL CARE</div>
              <div className="desc">Browse <span>our products</span></div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <a href=""><img src="../svg/leaf.svg" alt="" /></a>
            </div>
            <div className="grid-details">
              <div className="name">NUTRITION</div>
              <div className="desc">Browse <span>our products</span></div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <a href=""><img src="../svg/sincella.svg" alt="" /></a>
            </div>
            <div className="grid-details">
              <div className="name">SUNCELLA</div>
              <div className="desc">Browse <span>our products</span></div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <a href=""><img src="../svg/face.svg" alt="" /></a>
            </div>
            <div className="grid-details">
              <div className="name">PERSONAL CARE</div>
              <div className="desc">Browse <span>our products</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
