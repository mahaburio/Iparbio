import React from "react";

const ImpactCardSection = ({ cards }) => {
  return (
    <div className="row mt-5">
      {cards.map((card, index) => (
        <div className="col-lg-4 mt-lg-0 mt-4" key={index}>
          <div className="card">
            <div className="img">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="body mt-3">
              <h3>{card.title}</h3>
              <p className="mt-2 gray">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactCardSection;
