import React, { useState } from 'react'
import { CardItem } from '../../components/enrollment/Cards'
import MainWrapper from '../../components/common/Mainwrapper';

import '../../styles/enhancement.css'
import AsideBar from '../../components/enrollment/Asidebar';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Footer from '../../components/footer/footer';
import LibraryVideoCard from '../../components/enrollment/LibraryVideoCard';

const Enhancement = () => {


  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (id) => {
    setSelectedCards((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((i) => i !== id)
        : [...prevSelected, id]
    );
  };

  // Traning Cards Items
  const TrainingCardsItem = [
    {
      image: "images/women-2-photoroom.webp",
      nameTitle: "Exploring the Ipar Diffrence with Products",
      description:
        "First, you’ll discover what makes Ipar unique and why our products stand out. Next, we’ll dive into building a strong health foundation. Finally, you’ll learn strategic ways to guide others on their health journey. Let’s get started!",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },
    {
      image: "images/ipar-spreaker.webp",
      nameTitle: "Ipar Speaker Certification",
      description:
        "This course provides an overview of core policies and guidelines designed to protect Ipar Associates' businesses and ensure that all shared content aligns with Ipar’s vision and values.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },

    {
      image: "images/do's-don‘s.webp",
      nameTitle: "Do's Dont's: Product Messaging Guide",
      description:
        "Ensure you’re sharing Ipar products the right way! Follow these Do’s & Don’ts to stay compliant, clear, and effective in your communication.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },
    {
      image: "images/suncella-share.webp",
      nameTitle: "Sharing Your Succees Story",
      description:
        "You've put in the effort to succeed with Ipar, and it’s only natural to want to share your journey. This quick refresher will equip you with the skills to make accurate and compliant income and lifestyle claims, helping you share your story with confidence and credibility.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: "#",
      },
    },


  ];



  // Wellness Cards Items
  const WellnessCardsItem = [
    {
      image: "images/certificate-in.webp",
      nameTitle: "Certificate in Holistic Nutrition Consulting (CHNC) by American College of Healthcare Sciences",
      description:
        "This program provides training in how to educate others about appropriate holistic health protocols to support and rebalance the body and restore wellness for general good health through holistic nutrition protocols.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },
    {
      image: "images/pic-27.webp",
      nameTitle: "Start to Understand Ultra Green 🌿Fuel your body with Ultra Green and feel the difference!",
      description:
        "Ultra Green is a premium, nutrient-packed supplement powered by Hawaiian Spirulina, a superfood rich in vitamins, minerals, antioxidants, and amino acids",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },

    {
      image: "images/pic-7.webp",
      nameTitle: "Your Heart Matters ❤️ Celebrate Heart Month with Ipar’s Cardio Care Pack! 🏆",
      description:
        "Beating 70 times per minute and 100,000 times a day, your heart is working hard to keep you going. protocols. Take the first step in supporting your heart with essential nutrients and antioxidant protection. CARDIO CARE PACK 💙 N.O + Onion Pro + Vessol + Cardio 5 R",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },
    {
      image: "images/pic-26.webp",
      nameTitle: "Balance™ 7 Day Rebalance & Detoxing (Shah Monzej™)",
      description:
        "Embrace the pinnacle of innovation with Balance™ 7 Day Rebalance & Detoxing (Shah Monzej™), a revolutionary two-phase system designed to optimize hormone balance, digestive health, and detoxification.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: "#",
      },
    },
  ];



  // Earns Cards Items
  const EarnsCardsItem = [
    {
      image: "images/elite.webp",
      nameTitle: "Certificate in Holistic Nutrition Consulting (CHNC) by American College of Healthcare Sciences",
      description:
        "This program provides training in how to educate others about appropriate holistic health protocols to support and rebalance the body and restore wellness for general good health through holistic nutrition protocols.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },
    {
      image: "images/elite-1.webp",
      nameTitle: "Start to Understand Ultra Green 🌿Fuel your body with Ultra Green and feel the difference!",
      description:
        "Ultra Green is a premium, nutrient-packed supplement powered by Hawaiian Spirulina, a superfood rich in vitamins, minerals, antioxidants, and amino acids",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },

    {
      image: "images/portrait-of-business.webp",
      nameTitle: "Your Heart Matters ❤️ Celebrate Heart Month with Ipar’s Cardio Care Pack! 🏆",
      description:
        "Beating 70 times per minute and 100,000 times a day, your heart is working hard to keep you going. protocols. Take the first step in supporting your heart with essential nutrients and antioxidant protection. CARDIO CARE PACK 💙 N.O + Onion Pro + Vessol + Cardio 5 R",
      selectable: true,
      readMore: {
        text: "Read more",
        href: '#'
      }
    },
    {
      image: "images/envato.webp",
      nameTitle: "Balance™ 7 Day Rebalance & Detoxing (Shah Monzej™)",
      description:
        "Embrace the pinnacle of innovation with Balance™ 7 Day Rebalance & Detoxing (Shah Monzej™), a revolutionary two-phase system designed to optimize hormone balance, digestive health, and detoxification.",
      selectable: true,
      readMore: {
        text: "Read more",
        href: "#",
      },
    },
  ];


  // Video Section
  const videoItems = [
    {
      type: "video",
      // src: "assets/13099483_1080_1920_60fps.mp4",
      title: "Ipar Compensation Plan Video",
    },
    {
      type: "mp4",
      // src: "assets/12956927_1920_1080_25fps.mp4",
      title: "Ipar Compensation Plan Video",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/OKTn2tAzmV8",
      title: "Ipar Compensation Plan Video",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/OKTn2tAzmV8",
      title: "Ipar Compensation Plan Video",
    },
  ];

  const normalizeType = (item) => {
    if (item.type === 'mp4') return 'video';
    return item.type;
  };


  // Advocay Link

  const advocacyLinks = [
    [
      { text: "Acceptable Pre-Market Activities", href: "#" },
      { text: "Correct Contact Information", href: "#" },
      { text: "Income Representations", href: "#" },
      { text: "Managing Your Online Business", href: "#" },
      { text: "Proper Product Claims", href: "#" },
      { text: "Pyramid Schemes/Product Sales", href: "#" },
      { text: "Crossline Raiding", href: "#" },
    ],
    [
      { text: "Advertising Guidelines and Certification", href: "#" },
      { text: "Terms & Policies", href: "#" },
      { text: "Introduction to Disclaimers and Disclosures", href: "#" },
      { text: "Contact for Associate Advertising", href: "#" },
      { text: "Product Claims", href: "#" },
      { text: "Incentive Trip Claims", href: "#" },
      { text: "Copyright", href: "#" },
    ],
    [
      { text: "Image for Associate Advertising", href: "#" },
      { text: "Lifestyle or Income Claims", href: "#" },
      { text: "Tax Disclaimer", href: "#" },
      { text: "Managing Your Online Business", href: "#" },
      { text: "Non-Typical Weight-Loss Disclaimer", href: "#" },
      { text: "Protect Private Customer Information", href: "#" },
    ],
  ];

  return (
    <MainWrapper>
      <div className='dashboard'>
        {/* Header */}
        <HeaderDashboard />

        {/* Side Nav */}
        <SideNav />


        {/* Navigation Section */}
        <section className="mt-4">
          <div className="container">
            <div className="navigater-menu d-flex align-items-center gap-1 mt-2">
              <a href="#">Home</a><span>/</span><a href="#">Enhancements</a><span>/</span>
              <a href="" className="activeNavigateMenu">
                Resources & Information</a>
            </div>
          </div>
        </section>

        <section className="training-section mt-5">
          <div className="container">
            <div className="main-head-title">Training</div>
            <div className="grid-cards mt-5">
              {TrainingCardsItem.map((item, index) => {
                const id = `training-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                );
              })}


            </div>
          </div>
        </section>


        <section className="wellnes-section mt-5">
          <div className="container">
            <div className="main-head-title">Product and Wellness</div>
            <div className="grid-cards mt-5">
              {WellnessCardsItem.map((item, index) => {
                const id = `wellness-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                );
              })}
            </div>
          </div>
        </section>


        <section className="business-section mt-5">
          <div className="container">
            <div className="main-head-title">Business</div>

            <div className="library-grid mt-4">
              {videoItems.map((item, idx) => (
                <LibraryVideoCard
                  key={idx}
                    type={normalizeType(item)}
                  src={item.src}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>


        <section className="earn-section mt-5">
          <div className="container">
            <div className="main-head-title">Ways to Earn</div>
            <div className="grid-cards mt-5">
              {EarnsCardsItem.map((item, index) => {
                const id = `earns-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                );
              })}
            </div>
          </div>
        </section>


        <section className="advocacy-section mt-5">
          <div className="container">
            <div className="main-head-title">Advocacy &amp; Ethics</div>

            <div className="advocacy-links mt-4">
              {advocacyLinks.map((group, index) => (
                <ul className="adv-itm p-0" key={index}>
                  {group.map((item, i) => (
                    <li key={i}>
                      <a href={item.href}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MainWrapper>
  )
}

export default Enhancement