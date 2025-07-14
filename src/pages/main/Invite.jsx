import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import EliteHero from '../../components/enrollment/EliteHero'
import Footer from '../../components/footer/footer';

const Invite = () => {

const customizeSteps = [
{
img: "images/2-cs.webp",
title: "Share Your Link",
description: "Send your personalized link to friends, family, and social media followers.",
},
{
img: "images/1-cs.webp",
title: "Get the Product Credits",
description: "When someone orders through your link, you’ll get 10% of their total purchase in Ipar product credits.",
},
{
img: "images/3-cs.webp",
title: "Redeem & Enjoy",
description: "Use your credits on any Ipar purchase—it’s that easy!",
},

];

return (
<div className='ipar_elite'>
  {/* Header */}
  <HeaderIntialize Sponsor={true} pvBars={false} />

  {/* Hero */}
  <EliteHero title="Love Ipar?
Share it with others and get rewarded!" description="Start sharing today and earn free Ipar products!" image="images/girl-in-call.webp" />

  {/* Card Section */}
  <section className="customize-card-sec mt-5">
    <div className="container">
      <div className="customize-cards grid md:grid-cols-3 gap-4">
        {customizeSteps.map((step, index) => (
        <div key={index} className="cd-itm flex flex-col items-start gap-2 p-3 shadow-md rounded-lg bg-white">
          <div className="img w-full">
            <img src={step.img} alt={step.title} className="w-full object-contain" />
          </div>
          <div className="cd-dsc mt-2">
            <div className="cd-tt font-semibold text-lg text-green-700 flex items-start gap-1">
              <span>✓</span> {step.title}
            </div>
            <p className="cd-sbt mt-1 text-sm text-gray-700 leading-relaxed">{step.description}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-5 my-5 invite-sec">
    <div className="container d-flex justify-content-center">
      <a href="" className="invite d-flex align-items-center gap-2">
        <div className="icon"><i className="ri-share-forward-fill"></i></div>
        <span className="green-title">Invite &amp; Reward</span>
      </a>
    </div>
  </section>
  
  {/* Footer */}
  <Footer footerDefault={false} footerOnlyDesc={true} />
</div>
)
}

export default Invite