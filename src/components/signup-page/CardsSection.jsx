import React from 'react'

const CardsSection = () => {
  return (
    <div>

      <section className="card-section">
        <div className="container">
          <div className="all-cards">
            <div className="card">
              <div className="img">
                <img src="../images/percent.png" alt="" />
              </div>
              <h1>
                Enjoy <br />
                a 10% <br />Discount
              </h1>
            </div>

            <div className="card">
              <div className="img">
                <img src="../images/acc.png" alt="" />
              </div>
              <h1>
                Streamlined <br />
                Account <br />Management
              </h1>
            </div>

            <div className="card">
              <div className="img">
                <img src="../images/subscriptiion.png" alt="" />
              </div>
              <h1>
                Exclusive <br />
                Subscription <br />Offers
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardsSection