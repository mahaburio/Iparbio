import React, { useState } from 'react'
import { CardItem } from '../../components/enrollment/Cards'
import MainWrapper from '../../components/common/Mainwrapper';

import '../../styles/enhancement.css'
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Footer from '../../components/footer/footer';

import EliteHero from "../../components/enrollment/EliteHero";
import Breadcrumb from './BreadCrumb';

export const IparElite = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (id) => {
    setSelectedCards((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((i) => i !== id)
        : [...prevSelected, id]
    );
  };


  const cardsItems = [
    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
      selectable: true,

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",
      selectable: true,
    },

    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
      selectable: true,
    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",
      selectable: true,
    },
    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
      selectable: true,
    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",
      selectable: true,
    },

  ];


  // Ipar Elite Bonus Card  ITems

  const BonusCardItems = [
    {
      image: "images/ainura.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true
    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true
    },

    {
      image: "images/ainura.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },
    {
      image: "images/ainura.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },

  ];

  // Members Card Items

  const MembersCardItems = [
    {
      image: "images/ainura.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true



    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },

    {
      image: "images/ainura.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },
    {
      image: "images/ainura.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Sydykova Baktygul Abdrazakovna",
      selectable: true

    },

  ];


  return (
    <MainWrapper>
      <div className='dashboard ipar_elite'>
        {/* Header */}
        <HeaderDashboard />

        {/* Side Nav */}
        <SideNav />


        <EliteHero
          title="Ipar Elite: Recognizing Excellence & Leadership"
          description="Your success reflects the dedication and excellence of the Ipar community. We celebrate achievements, inspire growth, and honor the impact of every leader."
          image="images/every-opportunity.webp"
        />

        {/* Navigator */}
        <Breadcrumb
          links={[
            { text: "Home", href: "#" },
            { text: "Updates & Events", href: "#" },
          ]}
          currentPage="Ipar elite circle"
        />

        {/* Associate Title desc Section */}

        <section className="associate-section mt-5">
          <div className="container">
            <h1>What It Means to Be Ipar Elite</h1>
            <p className="mt-4">
              Ipar Elite members embody Ipar’s core values—health, community,
              integrity, and excellence. These distinguished individuals are
              recognized for their exceptional contributions in:
            </p>
            <div className="content-grid mt-4">
              <div className="cnt-itm">
                <h2>Sales Excellence</h2>
                <p className="mt-3">
                  Driving sustainable business growth and impact.
                </p>
              </div>
              <div className="cnt-itm">
                <h2>Community Leadership</h2>
                <p className="mt-3">Expanding and strengthening the Ipar network.</p>
              </div>

              <div className="cnt-itm">
                <h2>Customer Retention</h2>
                <p className="mt-3">Fostering loyalty and long-term relationships.</p>
              </div>
            </div>
            <p className="mt-4">
              Ipar Elite celebrates key milestones in every leader’s journey. This
              recognition serves as a powerful motivator, inspiring the Ipar
              family to set new standards of success. Every accomplishment adds to
              a greater legacy of excellence.
            </p>
            <p className="green-title mt-4">
              Join us in celebrating those who lead with passion, inspire others,
              and elevate the Ipar experience!
            </p>
          </div>
        </section>


        <section className="elite-bonus-section mt-5">
          <div className="container">
            <div className="main-head-title d-flex align-items-center justify-content-between">
              <span>Ipar Elite Bonus Earners</span>
              <span className="date">May, 2025</span>
            </div>

            <div className="grid-cards grid-cards-six mt-4">
              {BonusCardItems.map((item, index) => {
                const id = `Bonus-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                )
              })}

            </div>
          </div>
        </section>


        {/* Elite Members */}
        <section className="elite-circle-members grids-layout mt-5">
          <div className="container">
            <div className="main-head-title d-flex align-items-center justify-content-between">
              <span>Ipar Elite Circle Members</span>
            </div>

            <p className="mt-3">
              Ipar Elite Circle Members are top leaders and visionaries, paving
              the way for others through dedication and impact. We honor their
              years of hard work, inspiration, and leadership.
            </p>

            <div className="grid-cards grid-cards-four mt-4">
              {MembersCardItems.map((item, index) => {
                const id = `members-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                )
              })}
            </div>
          </div>
        </section>


        {/* Associate Card Section (Leaders) */}

        <section className="associate-council mt-5">
          <div className="container">
            <div className="main-head-title">Associate Council （2025）</div>

            <div className="grid-cards grid-cards-three mt-4">

              {cardsItems.map((item, index) => {
                const id = `Associate-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                )
              })}

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MainWrapper>
  )
}

// Ipar Elite Journey Page

export const IparEliteJourney = () => {

  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (id) => {
    setSelectedCards((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((i) => i !== id)
        : [...prevSelected, id]
    );
  };


  const cardsItems = [
    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
      selectable: true,

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",
      selectable: true,
    },

    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
      selectable: true,
    },


  ];
  return (

    <MainWrapper>
      <div className='dashboard ipar_elite'>
        {/* Header */}
        <HeaderDashboard />

        {/* Side Nav */}
        <SideNav />


        <EliteHero
          title="Beyond the Journey: Inspiring Success Stories"
          description="Success is more than just reaching a goal—it’s about the challenges overcome, the lessons learned, and the lives impacted along the way."
          image="images/berond-the-jorny.webp"
        />

        {/* Navigator */}
        <Breadcrumb
          links={[
            { text: "Home", href: "#" },
            { text: "Updates & Events", href: "#" },
          ]}
          currentPage="Beyond the journey"
        />

        {/* Associate Card Section (Leaders) */}

        <section className="associate-council mt-5">
          <div className="container">
            <div className="main-head-title">Associate Council （2025）</div>

            <div className="grid-cards grid-cards-three mt-4">

              {cardsItems.map((item, index) => {
                const id = `Associate-${index}`;
                return (
                  <CardItem
                    key={id}
                    item={item}
                    isSelected={selectedCards.includes(id)}
                    onToggleSelect={() => toggleCardSelection(id)}
                  />
                )
              })}

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MainWrapper>
  )
}

export const IparEliteDoctor = () => {


  const galleryImages = [
    { src: "images/gallery-image-1.webp", alt: "Gallery Image 1" },
    { src: "images/gallery-image-2.webp", alt: "Gallery Image 2" },
    { src: "images/gallery-image-3.webp", alt: "Gallery Image 3" },
    { src: "images/bitmap.webp", alt: "Bitmap", className: "landscape" },
    { src: "images/berond-the-jorny.webp", alt: "Beyond the Journey" },
  ];

  // Gallery Images Two
  const galleryImagesTwo = [
    { src: "images/gallery-image-1.webp", alt: "Gallery Image 1" },
    { src: "images/young-man.webp", alt: "Young Man" },
    { src: "images/elite-circle.webp", alt: "Ipar Elite Circle" },
    { src: "images/group-meeting-img.webp", alt: "Group Meeting", className: "landscape" },
    { src: "images/berond-the-jorny.webp", alt: "Beyond the Journey" },
  ];

  return (

    <MainWrapper>
      <div className='dashboard ipar_elite'>
        {/* Header */}
        <HeaderDashboard />

        {/* Side Nav */}
        <SideNav />


        <EliteHero
          title="Dr. A Platinum IBA Summit: Ipar’s Highest Honor"
          description="The Dr. A Platinum IBA Summit is one of Ipar’s most prestigious recognitions, honoring exceptional leaders who embody Dr. A’s vision of health, leadership, and business excellence."
          image="images/senior-businesswoman.webp"
        />

        {/* Navigator */}
        <Breadcrumb
          links={[
            { text: "Home", href: "#" },
            { text: "Updates & Events", href: "#" },
          ]}
          currentPage="Dr. A Platinum IBA Summit"
        />

        {/* Associate Card Section (Leaders) */}

        <section className="associate-section mt-5">
          <div className="container">
            <h1>Be a Dr. A Platinum IBA Honoree</h1>
            <p className="mt-4">
              This exclusive, invitation-only experience offers qualified
              candidates the opportunity to learn, refine their skills, and
              elevate their leadership, all while advancing to the next level of
              success training. Participants will also gain exclusive access to
              Dr. A, Ipar’s founder and top leader, for mentorship, strategic
              insights, and inspiration.
            </p>
            <h1>How to Qualify?</h1>
            <p className="mt-4">
              IBA members are nominated by fellow Associates, local employees, or
              leadership teams, with winners selected by a committee of Ipar’s
              senior executives and regional leaders.
            </p>
            <ul className="p-0 m-0 mt-4">
              <li className="mt-3">
                <span className="checkmark fw-bold green-title me-2">✓ </span>
                <span className="fw-medium">Living the Ipar lifestyle</span> through a
                strong commitment to health and well-being.
              </li>
              <li className="mt-3">
                <span className="checkmark fw-bold green-title me-2">✓ </span>
                <span className="fw-medium">Demonstrating leadership</span> and
                actively mentoring their teams.
              </li>
              <li className="mt-3">
                <span className="checkmark fw-bold green-title me-2">✓ </span>
                <span className="fw-medium">Expanding their impact</span> by enrolling
                new Associates or Preferred Customers.
              </li>
              <li className="mt-3">
                <span className="checkmark fw-bold green-title me-2">✓ </span>
                <span className="fw-medium">Engaging in philanthropy</span>,
                supporting health education, and community initiatives.
              </li>
              <li className="mt-3">
                <span className="checkmark fw-bold green-title me-2">✓ </span>
                <span className="fw-medium">Upholding Dr. A’s vision</span> of
                building a global network of health, empowerment, and opportunity.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-5">
          <div className="container">
            <div className="main-head-title d-flex align-items-center justify-content-between">
              <span>Dr. A Platinum IBA Honoree</span>
              <span className="date">May, 2025</span>
            </div>
          </div>
        </section>

        {/* Grid gallery */}

        <section className="grid-gallery-section mt-4">
          <div className="container">
            <div className="grid-gallery">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-itm ${item.className || ""}`}
                >
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="mt-5">
          <div className="container">
            <div className="main-head-title d-flex align-items-center justify-content-between">
              <span>Dr. A Platinum IBA Honoree</span>
              <span className="date">May, 2025</span>
            </div>
          </div>
        </section>

        <section class="grid-gallery-section mt-4">
          <div class="container">
            <div className="grid-gallery">
              {galleryImagesTwo.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-itm ${item.className || ""}`}
                >
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MainWrapper>
  )
}