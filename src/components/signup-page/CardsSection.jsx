
import React from 'react'

const CardsSection = ({ cards }) => {
  const defaultCards = [
    {
      image: "images/percent.png",
      titleLines: ["Enjoy", "a 10%", "Discount"],
    },
    {
      image: "images/acc.png",
      titleLines: ["Streamlined", "Account", "Management"],
    },
    {
      image: "images/subscriptiion.png",
      titleLines: ["Exclusive", "Subscription", "Offers"],
    },
  ];

  const cardItems = cards || defaultCards;

  return (
    <section className="card-section">
      <div className="container">
        <div className="all-cards">
          {cardItems.map((card, index) => (
            <div className="card" key={index}>
              <div className="img">
                <img src={card.image} alt="" />
              </div>
              <h1>
                {card.titleLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection