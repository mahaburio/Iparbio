import React from 'react'
import MainWrapper from '../../components/common/Mainwrapper';

import '../../styles/enhancement.css'
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Footer from '../../components/footer/footer';

const IparUserInfo = () => {

  const userStoryData = {
    personal: {
      image: "images/kanayim.webp",
      name: "Kanayim’s Vitals",
      vitals: [
        "🌍 Country: Kyrgyzstan",
        "⏳ Time with Ipar: 18 years",
        "🏆 Current Rank: Star-Gold",
        "💙 Favorite Ipar Product: Cardio 5",
      ],
    },
    successLinks: [
      "Health, Business & Impact: Kanayim Murzamatova’s Story",
      "Health, Business & Impact: Kanayim Murzamatova’s Story",
      "Health, Business & Impact: Kanayim Murzamatova’s Story",
      "Health, Business & Impact: Kanayim Murzamatova’s Story",
    ],
    storyTitle: "Beyond the Journey: Kanayim Murzamatova’s Story",
    storyParagraphs: [
      "Growing up in Central Asia, Kanayim Murzamatova learned the value of hard work and resilience from an early age. She watched her family navigate the challenges of running a business while striving to provide a better future. This inspired her to pursue entrepreneurship, seeking a career that would offer both financial independence and personal fulfillment.",
      "However, Kanayim soon realized that traditional business models came with significant sacrifices. Long hours, endless responsibilities, and constant stress left her with little time for herself and her loved ones. More importantly, the hectic lifestyle took a toll on her health and well-being. She knew something had to change.",
      "Her turning point came when she was introduced to Ipar. The company’s science-backed products and empowering business model opened her eyes to a new opportunity—one that aligned with her passion for health, freedom, and community. The first Ipar product she tried was Cardio 5, and experiencing its benefits firsthand gave her the confidence to share the business with friends and family.",
      { boldTitle: "Kanayim’s Approach to Success" },
      "When asked about her success, Kanayim emphasizes the power of connection and understanding people's needs.",
      { quote: "Start with a genuine conversation. Listen to their goals, and help them find solutions that truly benefit them." },
      "With Ipar, Kanayim found a business on her terms—one that allows her to earn an income without the overwhelming pressure of traditional work. Now, she enjoys the freedom to:",
      {
        list: [
          "Spend more time with her family",
          "Choose her business partners",
          "Give back to her community",
          "Pursue personal development",
        ],
      },
      { boldTitle: "A Vision for the Future" },
      "Kanayim’s mission goes beyond personal success—she is committed to helping others transform their lives through health and financial empowerment.",
      { quote: "By prioritizing my family’s health and supporting others, I’ve enhanced my quality of life while building a growing, sustainable income. Seeing my team achieve their goals is my greatest reward." },
      "With her sights set on the next milestone, Kanayim aspires to achieve the Platinum IBA rank in 2025. She firmly believes that “everything worthwhile requires continuous effort, but the rewards are beyond measure.”",
      "Through dedication, vision, and a heart for others, Kanayim has carved a path to success, health, and fulfillment—and she’s just getting started.",
    ],
  };


  return (
    <MainWrapper>
      <div className='dashboard ipar_elite'>
        {/* Header */}
        <HeaderDashboard />

        {/* Side Nav */}
        <SideNav />


        <section className="user-story-section mt-5">
          <div className="container">
            <div className="row">
              {/* LEFT SIDE – PERSONAL */}
              <div className="col-lg-4">
                <div className="personal-details">
                  <div className="img">
                    <img src={userStoryData.personal.image} alt={userStoryData.personal.name} />
                  </div>
                  <div className="personal-info">
                    <ul className="p-3 mt-2">
                      <div className="name">{userStoryData.personal.name}</div>
                      {userStoryData.personal.vitals.map((vital, idx) => (
                        <li key={idx}>{vital}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="success-story mt-5 pt-3">
                  <h6>Beyond the Journey success stories</h6>
                  <div className="p-3">
                    {userStoryData.successLinks.map((link, i) => (
                      <a key={i} href="#" className={i === 1 ? "green-title" : ""}>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE – STORY */}
              <div className="col-lg-8 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                <div className="story-section">
                  <h4>{userStoryData.storyTitle}</h4>

                  {userStoryData.storyParagraphs.map((block, index) => {
                    if (typeof block === "string") {
                      return <p key={index} className="mt-3">{block}</p>;
                    }
                    if (block.boldTitle) {
                      return <p key={index} className="mt-3 fw-bold">{block.boldTitle}</p>;
                    }
                    if (block.quote) {
                      return <p key={index} className="fw-bold">“{block.quote}”</p>;
                    }
                    if (block.list) {
                      return (
                        <ul key={index} className="mt-3 p-0">
                          {block.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </MainWrapper>
  )
}


export default IparUserInfo