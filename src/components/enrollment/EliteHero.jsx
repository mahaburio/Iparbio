import React from "react";

const EliteHero = ({ title, description, image }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content pt-5">
              <h1>{title}</h1>
              <p className="mt-4">{description}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src={image} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteHero;
