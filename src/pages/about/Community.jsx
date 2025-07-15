import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import AboutHero from '../../components/about-us/AboutHero'
import InnovationCard from '../../components/about-us/InnovationCard';
import CommunitySection from '../../components/common/Cta';
import Footer from '../../components/footer/footer';
import TimelineVerticalCard from '../../components/about-us/TimelineVerticalCard';
import { HeroSection } from '../../components/common/HeroSection';

const Community = () => {


  const cardData = [
    {
      image: "/images/photo-28.webp",
      icon: "/svg/settings-white.svg",
      iconText: "Maximum Absorption",
      description:
        "Engineered for bioavailability and targeted cellular support to deliver nutrients exactly where your body needs them.",
    },
    {
      image: "/images/q-c.webp",
      icon: "/svg/dropbox.svg",
      iconText: "Sustainability in Action",
      description:
        "Eco-conscious packaging, responsible sourcing, and manufacturing that respects the planet.",
    },
  ];


  // Timeline Card

  const timelineItems = [
    {
      heading: 'Experience the Daily Difference',
      icon: '/svg/microsvg.svg',
      description: `True wellness starts with quality and consistency. IPAR’s science-driven formulas support your health, vitality, and longevity—every day, for life.`,
      align: '', // optional: 'left' or 'right'
    },
    {
      heading: 'Trusted by Experts, Powered by Science',
      icon: '/svg/trusted.svg',
      description: `Backed by science and trusted by professionals, IPAR’s supplements blend cutting-edge research, premium ingredients, and precision quality.`,
      align: 'right',
    },
    {
      heading: `Your Health, <br>Your Choice`,
      icon: '/svg/rocket.svg',
      description: `Every choice shapes your well-being. Choose IPAR to nourish, enhance, and redefine your health.`,
      align: 'left',
    },
  ];

  // Grid Gallery


  const galleryImages = [
    { src: "images/about-gallery-1.webp", alt: "Gallery Image 1" },
    { src: "images/about-gallery-2.webp", alt: "Gallery Image 2", className: "landscape" },
    { src: "images/about-gallery-4.webp", alt: "Gallery Image 3" },
    { src: "images/about-gallery-5.webp", alt: "Gallery Image" },
    { src: "images/about-gallery-6.webp", alt: "Gallery Image" },
  ];

  return (
    <div className='about_us community_page'>
      {/* Header */}
      <HeaderIntialize showDashboardMenu={false} pvBars={false} />

        <HeroSection title={`A Movement for Science, Wellness & Sustainability`}
        description="Experience next-generation health with IPAR’s cutting-edge, science-driven supplements, designed for unmatched purity, potency, and innovation."
        shapeUrl="../svg/green-logo.svg"
        imageUrl="../images/girl-with-book.webp"
        />

      <section class="innovation py-5 iparMore">
        <div class="container">
          <div class="row mt-4">
            <div class="col-lg-6">
              <img
                class="w-100"
                src="../images/ipar-more.webp"
                alt="Ipar More"
              />
            </div>
            <div class="col-lg-6 right" >
              <img class="dna-img dna" src="../images/dna-1.webp" alt="Dna" />
              <h1 class="green-title fw-bold text-uppercase green-head-title">
                IPAR is more than a brand
              </h1>
              <h3 class="fw-bold text-uppercase head-subtitle">
                It's a movement
              </h3>
              <p class="gray mt-4">
                We’ve connected with thousands of individuals who share their
                experiences, insights, and transformations through our products.
                Their stories inspire us to keep pushing the boundaries of
                nutritional science and sustainable innovation.
              </p>
              <img class="dna-img" src="../images/dna-1.webp" alt="Dna Image" />
            </div>
          </div>
        </div>
      </section>




      <section class="innovation-two py-5 pt-0">
        <div class="container">
          <div class="row mt-4">
            <div class="col-lg-6">
              <img class="dna dna-img" src="../images/dna-1.webp" alt="dna" />
              <h1 class="green-title fw-bold green-head-title text-uppercase" >
                Next-Generation Science
              </h1>
              <h3 class="fw-bold text-uppercase head-subtitle" >
                Formulated with
              </h3>
              <p class="gray mt-4" >
                advanced bioscience and precision engineering for optimal health
                and longevity.
              </p>
            </div>
            <div class="col-lg-6 position-relative">
              <img
                class="dna dna-img position-absolute top-0"
                src="../images/dna-1.webp"
                alt="dna"
              />
              <div class="img" >

                <img class="w-100" src="../images/pic-7.webp" alt="dna" />
              </div>

              <img
                class="lash position-absolute"
                src="../images/lash.webp"
                alt="lash"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Innovation Two */}

      <section class="innovation-two py-5 mt-5">
        <div class="container">
          <div class="row mt-4">
            <div class="col-lg-6 d-flex align-items-end capsule_img">
              <div class="img">
                <img src="../images/capsule.webp" alt="capsule" />
              </div>
              <div class="img">
                <img class="dna-img" src="../images/dna-1.webp" alt="dna" />
              </div>
            </div>
            <div class="col-lg-6 position-relative" >
              <img class="position-absolute lash-top" src="../images/lash.webp" alt="lash" />
              <h1 class="green-title fw-bold text-uppercase green-head-title">
                Pure, Potent Transparent
              </h1>
              <h3 class="fw-bold text-uppercase head-subtitle">
                Every ingredient is
              </h3>
              <p class="gray mt-4">
                intentionally sourced, rigorously tested, and fully traceable.
              </p>

              <div class="img">
                <img class="dna-img dna-center-end position-absolute" src="../images/dna-1.webp" alt="dna" />
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

      {/* Timeline Vertical Card */}

      <TimelineVerticalCard title="Choose IPAR" items={timelineItems} />


      {/* Grid Gallery Section */}

      <section class="grid-gallery-section mt-4">
        <div class="container">
          <h1 class="black fw-medium text-center">
            Be Part of Something Bigger
          </h1>
          <p class="gray text-center mt-3" >
            Be a part of a community that champions science-backed wellness,
            sustainable living, and a healthier future. At IPAR, every choice
            you make—for your health, your lifestyle, and the planet—creates a
            ripple effect that drives meaningful change.
          </p>

          <div className="grid-gallery grid-gallery-two mt-5">
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

      {/* CTA Section (title, description, buttonText dynamically changeable) */}
      <div className="register-section">
        <CommunitySection title='Science, Innovation & Wellness for a Better Tomorrow.' description='Experience next-generation health with IPAR’s cutting-edge, science-driven supplements, designed for unmatched purity, potency, and innovation.' />
      </div>

      <Footer />
    </div >
  )
}

export default Community