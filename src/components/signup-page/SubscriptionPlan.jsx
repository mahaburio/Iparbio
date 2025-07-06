import React from 'react'
import CompanyDetailsSection from '../product-page/SectionTwo';



const SubscriptionPlan = ({ plans, selectedIndex, handleSelect }) => {

  const companyDetailsDataTwo = [
    {
      img: "../svg/fda.svg",
      alt: "Made in a FDA registered facility",
      label: "Made in a FDA registered facility",
    },
    {
      img: "../svg/gmp.svg",
      alt: "Certified Good Manufacturing Practices",
      label: "Certified Good Manufacturing Practices",
    },
    {
      img: "../svg/haccp.svg",
      alt: "Made in a Intertek Certified Facility",
      label: "Made in a Intertek Certified Facility",
    },
    {
      img: "../svg/vegan.svg",
      alt: "VEGA",
      label: "VEGA",
    },
  ];

  return (
    <div className='signup_page subscription-page subscription-package'>
      <section className="title-section mt-5">
        <div className="container">
          <div className="title-desc-green fw-medium">
            <i>
              <li>
                Step 5: Pick Your Subscription Package &amp; Start Your First Order
                ( save 10% by selecting "Continue" below)
              </li>
            </i>
          </div>
          <div className="title-desc mt-4">
            We've got a range of subscription packages for verified
            IBAs—Experiential, Silver, Platinum, and Diamond. Each comes with
            its own mix of perks, support, and benefits to help you find your
            success path. Chat with your team leader or sponsor for advice on
            what suits your goals and budget.
          </div>
          <div className="title-desc-green mt-4 fw-normal">
            Now, choose a top product from our selection. Once you meet the
            requirements for your package, you'll unlock some awesome surprises
            and benefits!
          </div>
        </div>
      </section>

      <div className="plan-subsription">
        <section className="plan-package my-5">
          <div className="container">
            <div className="plan-items d-flex flex-wrap gap-4 justify-content-center">
              {plans.map((plan, index) => {
                const isActive = selectedIndex === index;
                return (
                  <div
                    key={index}
                    className={`pl-item ${plan.className} ${isActive ? "dropShadow" : ""}`}
                    style={{
                      opacity: selectedIndex === null ? 1 : isActive ? 1 : 0.3,
                      cursor: "pointer",
                    }}
                    onClick={() => handleSelect(index)}
                  >
                    <div className="pl-nm text-center">
                      <span>{plan.name}</span><br />
                      <span className="pv">{plan.pv}</span>
                    </div>
                    <div className="pl-body text-center">
                      {plan.benefits.map((benefit, i) => (
                        <div key={i} className="pl-tx mt-2">{benefit}</div>
                      ))}
                    </div>
                    <div className="pl-footer text-center">
                      <button>Select Plan</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="subscription">
          <div className="container">
            {/* Show default description if no plan selected */}
            {selectedIndex === null && (
              <div className="default-subs activeSubs">
                <h3>Select a Subscription Plan</h3>
                <div className="tt-ds mt-3">
                  <li className="mt-2">- Earn cashback on repeat order sales.</li>
                  <li className="mt-2">- Receive sponsor bonuses when you invite others.</li>
                  <li className="mt-2">- Unlock coaching, matching, and more as you level up.</li>
                  <div className="mt-2">Let’s make it happen! 🚀</div>
                </div>
              </div>
            )}

            {/* Show selected plan description */}
            {plans.map((plan, index) => {
              if (index !== selectedIndex) return null;
              return (
                <div key={index} className={`${plan.className}-subs activeSubs`}>
                  <h3>{plan.name} Subscription</h3>
                  <div className="tt-ds mt-3">
                    {plan.description.map((line, i) => (
                      <li key={i} className="mt-2">{line}</li>
                    ))}
                    <div className="mt-2">Let’s make it happen! 🚀</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Company Details Section */}

        <div className="mt-5">
          <CompanyDetailsSection companyDetailsData={companyDetailsDataTwo} />
        </div>

      </div>
    </div>
  )
}

export default SubscriptionPlan