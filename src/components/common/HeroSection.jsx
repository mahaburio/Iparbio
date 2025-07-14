import React from 'react';
import '../../styles/hero-section/hero.css'

export const HeroSection = ({ title, description, shapeUrl, imageUrl }) => {
  return (
    <section className="hero-section">
      <div className="hero-content pt-5">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-5 col-lg-5 left-content">
              <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
              <div className="desc">{description}</div>
            </div>

            {/* Right Image */}
            <div className="col-xl-7 col-lg-7 right-img">
              <div className="green-leaf">
                <img src={shapeUrl} alt="Logo-Shape" />
                <div className="person-img">
                  <img src={imageUrl} alt="Person Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
