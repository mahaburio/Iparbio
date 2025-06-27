import { useState } from "react";

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';
import { HeroSection } from '../../components/common/HeroSection.jsx';

import '../../styles/pages/joinus.css';

const plans = [
  {
    id: "forPreferred",
    label: "Preferred Customer",
    details: [
      "Save 10% on all product orders.",
      "Get an extra 5% off with Auto Order subscriptions.",
      "Earn 10% back in product credit for every purchase made through your unique Referral link.",
      "Share with friends and start earning free products today!",
    ],
    intro:
      "Discover Products as a Preferred Customer, and spread the word to your friends! You can earn awesome free goodies just by referring them.",
  },
  {
    id: "forInfluencer",
    label: "Influencer",
    details: [
      "Save 10% on every product order.",
      "Save an extra 5% with Auto Order subscriptions.",
      "Earn 15% commissions on all purchases made through your Share Links.",
      "Refer other Influencer and unlock even more exclusive rewards!",
    ],
    intro:
      "Win-win, Happy sharing! Spread the love for your favorite Ipar products with your friends, family, and social media followers! You'll earn rewards every time they shop.",
  },
  {
    id: "forIBA",
    label: "IBA",
    details: [
      "Enjoy a 10% discount on all your product orders.",
      "Earn a delightful 10%-15% commission on every product sold through your unique IBA Share Links.",
      "Rack up even more commissions based on your sales and the amazing sales from your team!",
    ],
    intro:
      "Take the first steps to becoming an IBA (Independent Business Associate), share the products you adore, and connect with a community of like-minded friends to boost your earning potential!",
  },
];


function JoinUsPage() {

  const [activePlan, setActivePlan] = useState(plans[0].id);

  const currentPlan = plans.find((plan) => plan.id === activePlan);


  return (
    <>
      <MainWrapper className='joinUsPage'>
        <Header />

        {/* Hero Section */}
        <HeroSection
          title={`Empower<br />Your<br />Journey<br />With Ipar`}
          description="Take the first step today with Ipar’s innovative tools, training, and support. Together, let’s create a brighter future!"
          shapeUrl="../images/leaf-shape.webp"
          imageUrl="../images/women3-Photoroom.webp"
        />

        {/* <!-- todo ============= DESC-SECTION ============= --> */}

        <section className="desc-section">
          <div className="container">
            <p>
              Experience the transformative power of Ipar products, and you’ll
              want to share them with everyone you know. To show our appreciation,
              we reward you for spreading the word. Refer others to Ipar, and when
              they make a purchase, you earn. Best of all, you decide how you want
              to be rewarded.
            </p>
          </div>
        </section>

        {/* <!-- todo ============= PLAN-SECTION ============= --> */}

        <section className="plan-section">
          <div className="container">
            <div className="plan-card">
              <div className="card-header">
                <p>Start sharing, saving, and earning today!</p>
                <h1>Select</h1>
                <h3>Your Plan</h3>
              </div>

              <div className="btn-part">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    className={activePlan === plan.id ? "activeBtn" : ""}
                    onClick={() => setActivePlan(plan.id)}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>

              <div className="btn-desc-body mt-5 text-start">
                <div className="desc activeDesc">
                  <p>{currentPlan.intro}</p>
                  <ul className='m-0 p-0'>
                    {currentPlan.details.map((item, idx) => (
                      <li key={idx}>{`${idx + 1}. ${item}`}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="btn-sec mt-5 mb-4">
                <button className="green-btn px-lg-5 px-md-5 px-sm-4 px-4">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HElp */}
        <Help />

        {/* Footer */}
        <Footer />
      </MainWrapper>
    </>
  )
}

export default JoinUsPage 
