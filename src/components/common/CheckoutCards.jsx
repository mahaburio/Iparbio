import React from 'react'

const CheckoutCardsInitialize = ({discountCards = []}) => {

return (
<>
  <section className="checkout-discount">
    <div className="container">
      <div className="discount-cards">
        {discountCards.map((item, i) => (
        <div className="" key={i}>
          <div className="item">
            <img className="card-bg-img" src={item.bgImg} alt={`Card-${i}`} />
            <div className="card-desc d-flex flex-column justify-content-between">
              <div className="dst-per">{item.discountText}</div>
              <div className="foot">
                <div className="name">{item.name}</div>
                <button className="green-btn mt-3">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>

    </div>
  </section>

</>
)
}

export default CheckoutCardsInitialize