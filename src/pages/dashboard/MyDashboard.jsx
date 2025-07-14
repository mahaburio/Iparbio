import React, {useState} from 'react'
import HeaderIntialize from '../../components/header/Header'
import CardGridItem from '../../components/dashboard/CardGridItem'
import ProductSliderInitialize from '../../components/slider/ProductSlider';
import CheckoutCardsInitialize from '../../components/common/CheckoutCards';
import Footer from '../../components/footer/footer';
import { Faq } from '../../components';

const MyDashboard = () => {


  // Hero Section
  const imageSrc = "images/girl-with-mom.webp";
  const altText = "Hero Image";
  const titleLines = ["Try It,", "Love It,", "Share It!"];
  const description =
    "Get your hands on top-quality products, experience the benefits, and spread the word! The more you share, the more you earn—start your journey today!";
  const reverse = false;


  // For Insider

  const infoCards = [
    {
      title: "Should you be tested for inflammation?",
      description: "Tests help in certain situations but are not necessary for everyone.",
      icon: "../svg/harvard.svg",
    },
    {
      title: "Should you be tested for inflammation?",
      description: "Tests help in certain situations but are not necessary for everyone.",
      icon: "../svg/harvard.svg",
    },
  ];

  const authors = [
    {
      image: "/images/tube.webp",
      title: "Should you be tested for inflammation?",
      description: "Tests help in certain situations but are not necessary for everyone.",
      date: "December 18, 2024",
      by: "Robert H. Shmerling, MD, Senior Faculty Editor, Harvard Health",
      publishing: "Editorial Advisory Board Member, Harvard Health",
    },
    {
      image: "/images/tube.webp",
      title: "Should you be tested for inflammation?",
      description: "Tests help in certain situations but are not necessary for everyone.",
      date: "December 18, 2024",
      by: "Robert H. Shmerling, MD, Senior Faculty Editor, Harvard Health",
      publishing: "Editorial Advisory Board Member, Harvard Health",
    },
  ];

  const authorBio = {
    image: "/images/author.webp",
    title: "About the Author",

  };

  // Slider Products

  const HighligtesProduct = [
    {
      name: "Women’s Probiotic",
      image: "/images/product-img-1.webp",
      details: "50B CFU & 8 Strains",
      price: "$80",
      preferedPrice: "Preferred Price $124.33"
    },
    {
      name: "Daily Multivitamin",
      image: "/images/product-img-2.webp",
      details: "30 Tablets for Women",
      price: "$60",
      preferedPrice: "Preferred Price $95.99"
    },

    {
      name: "Daily Multivitamin",
      image: "/images/product-img-3.webp",
      details: "30 Tablets for Women",
      price: "$250",
      preferedPrice: "Preferred Price $95.99"
    },
    {
      name: "Daily Multivitamin",
      image: "/images/product-img-4.webp",
      details: "30 Tablets for Women",
      price: "$580",
      preferedPrice: "Preferred Price $87.99"
    },

    {
      name: "Daily Multivitamin",
      image: "/images/product-img-2.webp",
      details: "30 Tablets for Women",
      price: "$60",
      preferedPrice: "Preferred Price $95.99"
    },
    {
      name: "Daily Multivitamin",
      image: "/images/product-img-3.webp",
      details: "30 Tablets for Women",
      price: "$250",
      preferedPrice: "Preferred Price $95.99"
    },

  ];


  // FAQs

  const faqData = [
    {
      title: "When do I get paid?",
      paragraphs: [
        <p>Commissions are paid every Friday—as long as you’ve earned at least $5.
        </p>
      ],
    },
    {
      title: "When do I get paid?",
      paragraphs: [
        <p>Commissions are paid every Friday—as long as you’ve earned at least $5.
        </p>
      ],
    },
    {
      title: "When do I get paid?",
      paragraphs: [
        <p>Commissions are paid every Friday—as long as you’ve earned at least $5.
        </p>
      ],
    },
    {
      title: "FAQs",
      paragraphs: [
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus quia porro expedita, sed sint deleniti in esse doloribus odio?</p>
      ],
    },
  ];


  // Discount Cards

  const discountCardsData = [
    {
      bgImg: "/images/card-img.webp",
      discountText: "Get an extra 10% off at checkout!",
      name: "Discover Vitamin"
    },
    {
      bgImg: "/images/card-img.webp",
      discountText: "Flat 15% off on first order!",
      name: "New User Deal"
    },
    {
      bgImg: "/images/card-img.webp",
      discountText: "Buy 1 Get 1 Free for a limited time!",
      name: "BOGO Offer"
    }
  ];

  const [user] = useState({
  isLoggedIn: true,
  name: "Md Zeesan",
  image: "/images/person.webp"
  });

  return (
    <div className='signup_page resource_faq shopPage my_dashboard'>
      {/* Header */}
      <HeaderIntialize user={user} Sponsor={true} pvBars={false} />


      {/* Cards Section */}
      <section className="card-section py-5">
        <div className="container">
          <div className="cards-grid">
            <CardGridItem
              type="welcome"
              title="Welcome Dominick!"
              idLink="85112564"
              levelText="PC"
            />
            <CardGridItem
              type="commission"
              title="Available Credits"
              commissionAmount="$ 123.45"
              commissionMsg="No Commission Qualified!"
              showLink={false}
            />
            <CardGridItem
              type="commission"
              title="Referred Orders"
              commissionAmount="$ 123.45"
              showCommissionMsg={false}
              showLink={false}
            />
            <CardGridItem
              type="commission"
              title="Available Credits"
              commissionAmount="$ 123.45"
              commissionMsg="No Commission Qualified!"
              showLink={false}

            />
          </div>
        </div>
      </section>

      {/* Hero */}

      <section className="hero-section py-5">
        <div className="hero-content">
          <div className="container">
            <div className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
              {/* Image */}
              <div className="col-lg-7">
                <div className="img">
                  <img
                    className="w-100 img-fluid"
                    src={imageSrc}
                    alt={altText}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="col-lg-5 mt-lg-0 mt-5 text-lg-end text-start">
                <h1 className="title fw-bold lh-sm">
                  {titleLines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
                <p className="desc mt-4">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share */}

      <section class="share-page py-5">
        <div class="container">
          <div class="content-container">
            <div class="left">
              <span>Share This Page:</span>
              <div class="icon-sec d-flex align-items-center gap-3">
                <a href="" class="icon"><i class="ri-facebook-fill"></i></a>
                <a href="" class="icon"><i class="ri-instagram-line"></i></a>
                <a href="" class="icon"><i class="ri-twitter-x-line"></i></a>
              </div>
            </div>
            <div class="right">
              <div class="sc-wl">
                <a href="" class="micro-icon">
                  <img src="../svg/microscope.svg" alt="micro icon" />
                </a>
                <span>Science for Wellness</span>
              </div>
              <a href="">See More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Ipar Insider */}

      <section className="inside-section inside-section-v2 mt-4">
        <div className="container">
          <div className="row mt-3">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="inside-sec">
                <div className="tt">Ipar Insider</div>
                <div className="left">
                  <div className="img-sec mt-3">
                    <div className="img">
                      <img src="/images/team.webp" alt="Team" />
                    </div>
                    <p className="mt-3">
                      Maximize your business with the Matching Bonus! Qualify to
                      earn annual rewards and boost your success. Don’t
                      wait—start today!
                    </p>
                    <a href="#">Read More</a>
                  </div>

                  <div className="info-cards">
                    {infoCards.map((card, idx) => (
                      <div className="inf-citem mt-3" key={idx}>
                        <div className="left">
                          <img src={card.icon} alt="" />
                        </div>
                        <div className="right">
                          <h5>{card.title}</h5>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 mt-lg-0 mt-md-4 mt-sm-4 mt-4 author-sec">
              <div className="row">
                {authors.map((item, idx) => (
                  <div className="col-lg-6 mb-5 mb-lg-0" key={idx}>
                    <div className="img">
                      <img className="w-100" src={item.image} alt="" />
                    </div>
                    <h5 className="mt-4 black">{item.title}</h5>
                    <p>{item.description}</p>
                    <div className="date green-title fw-medium">{item.date}</div>
                    <li className="mt-2">
                      <span className="black fw-medium">By:</span> {item.by}
                    </li>
                    <li>
                      <span className="black fw-medium">Publishing:</span>{" "}
                      {item.publishing}
                    </li>
                  </div>
                ))}
              </div>

              {/* Author Bio */}
              <div className="author mt-5">
                <div className="img">
                  <img src={authorBio.image} alt="Author" />
                </div>
                <h1 className="black mt-5">{authorBio.title}</h1>
                <p>
                  Robert H. Shmerling, MD, Senior Faculty Editor, Harvard Health Publishing; Editorial Advisory Board Member, Harvard Health Publishing <br /><br /> Dr. Robert H. Shmerling is the former clinical chief of the division of rheumatology at Beth Israel Deaconess Medical Center (BIDMC), and is a current member of the corresponding faculty in medicine at Harvard Medical School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Slider */}

      <ProductSliderInitialize sectionClass={'featured-section best-sellers-section'} title='Ipar Highlights' data={HighligtesProduct} btnCopyLink={true} btn={false} />

      {/* Checkout Cards (Data dynamically Changable) */}
      <CheckoutCardsInitialize discountCards={discountCardsData} />


      {/* FAQs */}
      <Faq faqData={faqData} faqFooter={false} />

      {/* Footer */}
      <Footer footerDefault={false} footerOnlyDesc={true} />

    </div>
  )
}

export default MyDashboard