import React from 'react'
import HeaderIntialize from '../../components/header/Header'
import AboutHero from '../../components/about-us/AboutHero'
import InnovationCard from '../../components/about-us/InnovationCard';
import Footer from '../../components/footer/footer';
import TimelineVerticalCard from '../../components/about-us/TimelineVerticalCard';

const Innovation = () => {

  // Innovation Section Data

  const sectionData = {
    title: "A VISION FOR",
    subtitle: "A BRIGHTER, HEALTHIER FUTURE",
    description: `As a fast-growing leader in wellness, IPAR operates an advanced R&D center and an FDA-registered, GMP-certified manufacturing facility—Ipar Pharm, which provides CDMO services to the pharmaceutical industry. With a strong presence across the Americas, Central Asia, and the Asia Pacific region, our commitment to quality and innovation is reflected in every step, from research to final product development`,
    dnaImage: "/images/dna-1.webp",
    mainImage: "/images/lab.webp",
    icons: [
      "../svg/microicon.svg",
      "../svg/verfied.svg",
      "../svg/medicine.svg",
      "../svg/user-mlt.svg",
    ],
  };



  // Timeline Card
  const timelineItems = [
    {
      heading: "ISPC <br /> Methods",
      icon: "../svg/pad.svg",
      description: "A proprietary Statistical Process Control system for real-time monitoring and optimization.",
      align: "left",
    },
    {
      heading: "Six Sigma <br /> Quality",
      icon: "../svg/health-edu.svg",
      description: "Reducing defects and variations to enhance manufacturing consistency.",
      align: "right",
    },
    {
      heading: "cGMP & HACCP Compliance",
      icon: "../svg/advocating.svg",
      description: "Ensuring global safety and quality standards are met or exceeded.",
      align: "left",
    },

    {
      heading: "Purity & Identity Verification",
      icon: "../svg/advocating.svg",
      description: "Multi-stage testing to confirm authenticity, potency, and safety.",
      align: "right",
    },

  ];


  const cardData = [
    {
      title: "Define",
      description: "Establish key parameters and customer expectations.",
      image: "../svg/subtraction.svg",
    },
    {
      title: "Measure",
      description: "Track critical manufacturing metrics.",
      image: "../svg/measure.svg",
    },
    {
      title: "Analyze",
      description: "Identify root causes of defects.",
      image: "../svg/analyze.svg",
    },
    {
      title: "Improve",
      description: "Enhance efficiency and eliminate errors.",
      image: "../svg/improve.svg",
    },
    {
      title: "Control",
      description: "Maintain process reliability over time.",
      image: "../svg/settings-green.svg",
    },
  ];


  // About Grid


  const aboutItems = [
    {
      title: "Six Sigma",
      description: `Six Sigma Precision for Manufacturing Excellence IPAR’s ISPC
    Methods incorporate Six Sigma quality control principles,
    focusing on continuous process evolution to: Eliminate defects
    and variations that impact product reliability. Solve
    manufacturing inefficiencies before they affect product
    quality. Enhance consistency and precision through proactive
    monitoring and control.`,
      image: "../images/six-sigma.webp",
      imageLeft: false,
    },
    {
      title: "cGMP by Intertek",
      description: `Certified by Intertek, cGMP (Current Good Manufacturing
    Practices) ensures that manufacturing processes are
    consistently controlled and meet strict regulatory quality
    standards. It covers facility hygiene, ingredient
    traceability, production protocols, and testing procedures,
    ensuring product integrity and compliance.`,
      image: "../images/intertek.webp",
      imageLeft: true,
    },
    {
      title: "HACCP",
      description: `Preventing Contamination at Every Stage HACCP (Hazard Analysis
    and Critical Control Points) is a globally recognized
    preventive system designed to identify, evaluate, and control
    potential hazards in the production process. By following
    HACCP principles, IPAR ensures that all products are free from
    contamination risks and meet strict safety regulations from
    sourcing to final packaging.`,
      image: "../images/haccp.webp",
      imageLeft: false,
    },
  ];

  // Innovation Cards


  const innovationCards = [
    {
      image: "../images/scale.webp",
      icon: "../svg/settings-white.svg",
      iconText: (
        <>
          Environmental <br /> Controls
        </>
      ),
      description:
        "Automated temperature, humidity, and air-shading systems protect raw materials and products, preserving quality, potency, and stability.",
    },
    {
      image: "../images/automation.webp",
      icon: "../svg/automation.svg",
      iconText: (
        <>
          Precision Automation <br /> & Production
        </>
      ),
      description:
        "IPAR utilizes high-speed tablet presses, Auto capsule machines, and packaging lines to ensure precision and efficiency. Defect detection and scanning further enhance product quality.",
    },
    {
      image: "../images/comprehensive.webp",
      icon: "../svg/checkmark-wt.svg",
      iconText: (
        <>
          Comprehensive <br /> Quality Control
        </>
      ),
      description:
        "Comprehensive QA and QC protocols based on HACCP and cGMP standards ensure safety, consistency, and efficacy across all product categories.",
    },
  ];

  return (
    <div className='about_us innovation_page'>
      {/* Header */}
      <HeaderIntialize showDashboardMenu={false} pvBars={false} />

      {/* Hero Section */}
      <AboutHero title={`Science. <br />
Innovation. <br />
Wellness.`}
        description="At IPAR, science and innovation are at the heart of everything we do. Through a relentless commitment to excellence, integrity, and responsibility."
        shapeUrl="../images/leaf-line.webp"
        imageUrlShow={false}
      />

      {/* Innovation */}
      <section className="innovation py-5">
        <div className="container">
          {/* Top DNA Image */}
          <div className="img">
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
              data-aos="fade-left"
            >
              <div className="img">
                <img className="w-100" src={sectionData.mainImage} alt="Wellness Innovation" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Desc */}
      <section class="bg-gray py-5 mt-5 scn-section">
        <div class="container text-center">
          <h2 class="fw-bold black ">
            Science-backed Formulation, Engineered For Excellence
          </h2>
          <p class="mt-3 gray desc">
            At every stage of research, development, and manufacturing, IPAR
            prioritizes scientific precision, safety, and efficacy. Each product
            is backed by rigorous testing and quality assurance protocols to
            ensure consistency and reliability.
          </p>
        </div>
      </section>



      {/* Timeline Vertical Card */}

      <div className="timeline-with-btn">
        <TimelineVerticalCard items={timelineItems} />
      </div>


      {/* Benzin */}
      <section class="benzin-sec mt-5">
        <div class="container p-lg-5 p-3">
          <div class="row h-100">
            <div class="col-lg-6 d-flex align-items-end justify-content-lg-start justify-content-center">
              <div class="content " >
                <h3>The ISPC Approach (Inspired by the DMAIC framework)</h3>
              </div>
            </div>
            <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-end mt-lg-0 mt-4">
              <div class="img " >
                <img class="w-100 h-100" src="../images/benzin.webp" alt="benzin" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Cards Grid */}
      <section className="cards-section py-5">
        <div className="container">
          <div className="cards-grid">
            {cardData.map((card, index) => (
              <div className="card-itm" key={index}>
                <div className="img">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="content mt-4">
                  <h4 className="black fw-medium">{card.title}</h4>
                  <p className="gray">{card.description}</p>
                </div>
              </div>
            ))}

            <div className="card-itm d-flex align-items-center justify-content-center gap-3">
              <img src="../images/ispc.webp" alt="ISPC" />
              <span className="fs-5 fw-bold green-title">ISPC Methods</span>
            </div>
          </div>
        </div>
      </section>



      <section className="quality-control-sec bg-gray">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-2">
                <div className="img">
                  <img src="../images/qc.webp" alt="ISPC Logo" />
                </div>
                <h4>ISPC Methods</h4>
              </div>
              <h3>PRECISION-DRIVEN</h3>
              <h1>QUALITY CONTROL</h1>
              <p>
                At IPAR, ISPC Methods (IPAR Statistical Process Control Methods)
                ensure quality, efficacy, and safety at every stage of
                development and manufacturing.
              </p>
              <h3 className="black">Exprience the difference</h3>

              <div className="icon-part">
                {[
                  "Defect Prevention",
                  "Continuous Optimization",
                  "Improve other Standards",
                ].map((text, idx) => (
                  <div className="icon-sec" key={idx}>
                    <div className="icon">
                      <img src="../svg/checkmark.svg" alt="Icon" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6">
              <div className="img testtube">
                <img className="w-100" src="../images/testube-cut.webp" alt="Test Tube" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ABout grid */}
      <section className="about-grid py-5 mt-5">
        <div className="container">
          {aboutItems.map((item, index) => (
            <div className="row mt-5" key={index}>
              {item.imageLeft && (
                <div className="col-lg-6">
                  <div className="img">
                    <img className="w-100" src={item.image} alt={item.title} />
                  </div>
                </div>
              )}

              <div className="col-lg-6 d-flex align-items-center">
                <div className="content">
                  <h2 className="fw-bold black">{item.title}</h2>
                  <p className="gray mt-3">{item.description}</p>
                </div>
              </div>

              {!item.imageLeft && (
                <div className="col-lg-6">
                  <div className="img">
                    <img className="w-100" src={item.image} alt={item.title} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Quality Controll */}

      <section class="quality-control">
        <div class="container p-lg-5 p-3 d-flex align-items-center">
          <h1>Advanced Manufacturing &amp; Quality Control</h1>
        </div>
      </section>

      {/* Image Card Section */}
      <section className="img-card-section mt-5 py-5">
        <div className="container">
          <div className="row">
            {innovationCards.map((card, index) => (
              <InnovationCard key={index} {...card} columnClass="col-lg-4" />
            ))}
          </div>
        </div>
      </section>

      {/* Image Card Section */}
      <section class="img-card-section mt-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="img-card">
                <div class="img-header">
                  <div class="img">
                    <img class="main-img w-100" src="../images/controler-team.webp" alt="Controler" />
                  </div>
                  <div class="bottom p-lg-3 py-3 px-2 d-flex align-items-center justify-content-start gap-2">
                    <img src="../svg/checkmark-wt.svg" alt="" />
                    <div class="txt fw-medium">
                      Clean Room &amp; <br />
                      Contamination Control
                    </div>
                  </div>
                </div>
                <div class="cd-body pt-3">
                  <p class="gray">
                    IPAR utilizes high-speed tablet presses, Auto capsule
                    machines, and packaging lines to ensure precision and
                    efficiency. defect detection and scanning further enhance
                    product quality.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="img-card">
                <div class="img-header">
                  <div class="img">
                    <img class="main-img w-100" src="../images/mix-machine.webp" alt="Mix" />
                  </div>
                  <div class="bottom p-lg-3 py-3 px-2 d-flex align-items-center justify-content-center gap-2">
                    <img src="../svg/drying.svg" alt="" />
                    <div class="txt fw-medium">
                      Mixing, Drying &amp; <br />
                      Production Excellence
                    </div>
                  </div>
                </div>
                <div class="cd-body pt-3">
                  <p class="gray">
                    Strictly controlled mixing and drying processes ensure
                    uniform ingredient distribution, stability, and
                    bioavailability. Advanced drying technology preserves
                    potency for optimal texture, dissolution, and absorption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Bigger */}
      <section class="innovation-bigger py-5">
        <div class="container">
          <img class="w-100 " src="../images/innovation-in-2.webp" alt="Innovation-2" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Innovation