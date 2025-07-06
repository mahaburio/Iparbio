import React from 'react';
import HeaderIntialize from '../../components/header/Header';
import CardsSection from '../../components/signup-page/CardsSection';
import EliteHero from '../../components/enrollment/EliteHero';
import MainWrapper from '../../components/common/Mainwrapper';
import Footer from '../../components/footer/footer';


const SubscriptionPc = () => {
  const cardDetails = [
    {
      image: "images/percent.png",
      titleLines: ["Enjoy", "a 10%", "Discount"],
    },
    {
      image: "images/acc.png",
      titleLines: ["Easy", "Auto", "Payments"],
    },
    {
      image: "images/subscriptiion.png",
      titleLines: ["Update", "Anytime"],
    },
  ];

  return (
    <MainWrapper>
      <div className='signup_page ipar_elite'>
        <HeaderIntialize pvBars={false} Sponsor={true} />

        <EliteHero
          title={
            <>
              Stay <br />
              Consistent<br />
              Stay Healthy with<br />
              Subscriptions!
            </>
          }
          description="Get your favorite products delivered on time, every time—plus enjoy extra savings and perks!"
          image="images/man-small.png"
        />

        <section className="desc-section mt-5">
          <div className="container">
            <h1 className="fw-bold">Why Choose Subscription?</h1>
            <ul className="m-0 mt-4 p-0">
              <li>
                <span className="fw-bold green-title">✓</span> Save More – Get an
                extra 5% off the Preferred Price, for a total savings of 15%.
              </li>
              <li>
                <span className="fw-bold green-title">✓</span> Never Run Out – Your
                essential products are automatically shipped based on your chosen
                subscription delivery frequency.
              </li>

              <li>
                <span className="fw-bold green-title">✓</span> Free Shipping Perks –
                Enjoy free shipping on Subscription Orders of $200 or more.
              </li>

              <li>
                <span className="fw-bold green-title">✓</span> Total Flexibility –
                Modify or cancel your subscription anytime—no commitments!
              </li>
            </ul>

            <strong className="mt-5 mb-5 d-block">How It Works</strong>

            <ol className="m-0 ps-3">
              <li>Add your favorite products to the Subscription list.</li>

              <li>Choose your processing date and delivery frequency.</li>

              <li>Relax, knowing your health essentials are always stocked!</li>
            </ol>

            <p className="mt-5" style={{color: "var(--green-color)"}}>
              Stay consistent with your wellness routine—Sign up for Subscription
              Order today and enjoy the ultimate convenience &amp; savings!
            </p>
          </div>
        </section>


        <div>
          <CardsSection cards={cardDetails} />
          <div className="container">
            <div className="btn-sec text-center">
              <button className="green-btn">Launch Now</button>
            </div>
          </div>
        </div>

        <Footer footerOnlyDesc={true} footerDefault={false} />
      </div>
    </MainWrapper>
  );
};

export default SubscriptionPc;
