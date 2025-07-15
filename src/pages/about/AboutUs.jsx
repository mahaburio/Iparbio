import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import AboutHero from '../../components/about-us/AboutHero'
import InnovationCard from '../../components/about-us/InnovationCard';
import CommunitySection from '../../components/common/Cta';
import Footer from '../../components/footer/footer';

const AboutUs = () => {


  // Innovation Section Data

  const sectionData = {
    title: "Excellence in Wellness Innovation",
    subtitle: "Research to final product development.",
    description: `As a fast-growing leader in wellness, IPAR operates an advanced
      R&D center and an FDA-registered, GMP-certified manufacturing facility—Ipar Pharm,
      which provides CDMO services to the pharmaceutical industry. With a strong presence
      across the Americas, Central Asia, and the Asia Pacific region, our commitment to
      quality and innovation is reflected in every step, from research to final product development.`,
    dnaImage: "/images/dna-1.webp",
    mainImage: "/images/excellence-wellness-innovation.webp",
    icons: [
      "../svg/microicon.svg",
      "../svg/verfied.svg",
      "../svg/medicine.svg",
      "../svg/user-mlt.svg",
    ],
  };

  const cardData = [
    {
      image: "/images/innovation-in.webp",
      icon: "/svg/settings-white.svg",
      iconText: "Scientific Innovation Meets Nature",
      description:
        "IPAR is at the forefront of wellness innovation, combining scientific rigor with nature’s wisdom. Each of our products undergoes extensive clinical research and testing to ensure optimal purity, potency, and effectiveness. Whether supporting immune health, cellular rejuvenation, metabolic balance, or healthy aging, our formulations are designed to deliver measurable results.",
    },
    {
      image: "/images/dr-platinum.webp",
      icon: "/svg/settings-white.svg",
      iconText: "Empowering Communities, Transforming Lives",
      description:
        "At IPAR, we believe in the power of community and personal growth. As one of the fastest-growing brands in direct wellness entrepreneurship, we provide individuals with the opportunity to build financial independence while promoting a healthier lifestyle. Our global network fosters collaboration, mentorship, and empowerment—helping people achieve wellness on their own terms.",
    },
  ];

  return (
    <div className='about_us'>
      {/* Header */}
      <HeaderIntialize showDashboardMenu={false} pvBars={false} />

      {/* Hero Section */}
      <AboutHero title={`A Healthier Life, <br />
A Brighter World.`}
        description="At IPAR, science and innovation are at the heart of everything we do. Through a relentless commitment to excellence, integrity, and responsibility."
        shapeUrl="../images/leaf-line.webp"
        imageUrlShow={false}
      />

      {/* Desc Section */}
      <section className="py-5">
        <div className="container">
          <p className="black">
            IPAR is a leading American nutrition company specializing in
            FemTech, women’s health, nutrition, and wellness. Headquartered in
            Seattle, USA, we integrate advanced technology with the power of
            natural plant ingredients to create transformative health solutions.
            Our mission is to empower individuals with scientifically backed
            wellness innovations that enhance longevity, vitality, and balance.
          </p>
        </div>
      </section>

      {/* ABout Scientist */}
      <section class="about-scientist bg-gray py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 d-flex align-items-center aos-init aos-animate" data-aos="fade-right">
              <div class="content gray">
                <p>
                  " Lasting health begins with a deep understanding of metabolic
                  balance, cellular function, and the complex interplay between
                  genetics, nutrition, and the environment. <br />
                  <span class="ps-2">
                    Through scientific innovation and precision nutrition, we
                    can unlock the body’s full potential for longevity,
                    resilience, and vitality—empowering individuals to thrive at
                    every stage of life.”</span>
                </p>
                <p class="text-end about">
                  <span><b>– Aaron Aktash,</b> Ph.D., Founder, Pharmacist, <br />
                    Scientist &amp; Biotech Entrepreneur</span>
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="img aos-init aos-animate" data-aos="flip-left">
                <img src="../images/scientist.webp" alt="Scientist" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Innovation */}
      <section className="innovation py-5">
        <div className="container">
          {/* Top DNA Image */}
          <div className="img" data-aos="fade-down">
            <img className="dna-img" src={sectionData.dnaImage} alt="dna-shape" />
          </div>

          <div className="row mt-4">
            {/* Left Content */}
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="green-title green-head-title fw-bold text-uppercase">
                {sectionData.title}
              </h1>
              <h3 className="fw-bold head-subtitle text-uppercase">
                {sectionData.subtitle}
              </h3>
              <p className="gray mt-4">{sectionData.description}</p>

              {/* Icon Row */}
              <div className="icon mt-3 d-flex justify-content-center gap-2 flex-wrap">
                {sectionData.icons.map((icon, index) => (
                  <img key={index} src={icon} alt={`icon-${index}`} />
                ))}
              </div>

              {/* Bottom DNA Image */}
              <img className="dna dna-img" src={sectionData.dnaImage} alt="dna-bottom" />
            </div>

            {/* Right Image */}
            <div
              className="col-lg-5 mt-lg-0 mt-5 d-flex align-items-center justify-content-center"
        
            >
              <div className="img">
                <img className="w-100" src={sectionData.mainImage} alt="Wellness Innovation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Card */}
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            {cardData.map((card, idx) => (
              <InnovationCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section class="innovation-two py-5 pt-0">
        <div class="container">
          <div class="row mt-4">
            {/* <!-- Left Image --> */}
            <div class="col-lg-5 mt-lg-0 mt-5 d-flex align-items-center justify-content-center">
              <div class="img">
                <img class="w-100" src="/images/a-healther.webp" alt="A Healthier Life" />
              </div>
            </div>

            {/* <!-- Right Content --> */}
            <div class="col-lg-7">
              <img class="dna dna-img" src="/images/dna-1.webp" alt="DNA Icon" />

              <h1 class="green-title green-head-title fw-bold text-uppercase">
                A Healthier Life, A Brighter World.
              </h1>

              <h3 class="fw-bold text-uppercase head-subtitle">
                Our commitment to holistic health goes beyond individual
              </h3>

              <p class="gray mt-4">
                We aim to inspire healthier lifestyles and build thriving
                communities. Every IPAR product is thoughtfully designed to
                support both body and mind, ensuring that people everywhere can
                embrace a life of vitality and balance.
              </p>

              <div class="img d-flex justify-content-center mt-3">
                <img class="dna-img" src="/images/dna-1.webp" alt="DNA Bottom Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Brand */}
      <section class="brand-section bg-gray py-5">
        <div class="container">
          <img class="" src="images/ipar-brand.webp" alt="Brand" />
        </div>
      </section>

      {/* Mission cards */}

      <section class="mission-section">
        <div class="container">
          <div class="mission-grid">
            <div class="ms-itm">
              <img src="../svg/checkmark-man.svg" alt="Mission" />
              <h4>Our Mission</h4>
              <p>
                Empowering lives through wellness, creating communities where
                everyone can thrive.
              </p>
            </div>

            <div class="ms-itm">
              <img src="../svg/workout.svg" alt="Workout" />
              <h4 >Our Vision</h4>
              <p>
                To be a trusted pioneer in wellness innovation, empowering
                people to live their healthiest, happiest lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (title, description, buttonText dynamically changeable) */}
      <div className="register-section">
        <CommunitySection description='Experience next-generation health with IPAR’s cutting-edge, science-driven supplements, designed for unmatched purity, potency, and innovation.' />
      </div>

        <Footer />
    </div>
  )
}

export default AboutUs