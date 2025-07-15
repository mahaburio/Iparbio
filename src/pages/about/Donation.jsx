import React, { useEffect } from 'react'
import HeaderIntialize from '../../components/header/Header'
import CommunitySection from '../../components/common/Cta';
import Footer from '../../components/footer/footer';
import TimelineVerticalCard from '../../components/about-us/TimelineVerticalCard';
import { HeroSection } from '../../components/common/HeroSection';
import ImpactCardSection from '../../components/about-us/ImpactCardSection';
import SignupForm from '../../components/about-us/SignupForm';

const Donation = () => {




  // Timeline Card
  const timelineItems = [
    {
      heading: "Providing Menstrual Hygiene Product",
      icon: "../svg/pad.svg",
      description: "Donations and partnerships ensure access for underserved communities.",
      align: "left",
    },
    {
      heading: "Promoting Menstrual Health Education",
      icon: "../svg/health-edu.svg",
      description: "Breaking taboos and empowering girls with knowledge.",
      align: "right",
    },
    {
      heading: "Advocating for Policy Changes",
      icon: "../svg/advocating.svg",
      description: "Driving efforts to make menstrual products and education universally accessible.",
      align: "left",
    },
    {
      type: "button",
      label: "Donate now",
    },
  ];


  // Grid Gallery


  const galleryImages = [
    { src: "images/about-gallery-1.webp", alt: "Gallery Image 1" },
    { src: "images/gallery-3.webp", alt: "Gallery Image 2", },
    { src: "images/kids-2.webp", alt: "Gallery Image 3" },
    { src: "images/berond-the-journey-landscape.webp", alt: "Gallery Image", className: "landscape", showText: true },
    { src: "images/bitmap-2.webp", alt: "Gallery Image" },
  ];



  // Impact Cards Data


  const impactCardsData = [
    {
      title: "School Absenteeism",
      image: "../images/school.webp",
      description:
        "Over 500 million women lack essential menstrual products, and less than one-third of schools provide proper waste disposal. (World Bank, WHO & UNICEF)",
    },
    {
      title: "Critical Time",
      image: "../images/undraw-doll.webp",
      description:
        "Puberty is a critical time for self-esteem, yet period stigma and misinformation often make it worse.",
    },
    {
      title: "Education",
      image: "../images/undraw-personal.webp",
      description:
        "Many girls simply cannot afford menstrual products, restricting their participation in education, sports, and social life.",
    },
  ];


  // Impact Card data Second

  const impactCardsDataTwo = [
    {
      title: "Education & Training",
      image: "../images/studing.webp",
      description:
        "Promoting family nutrition awareness, encouraging balanced diets, and advocating for improved access to nutritious food for children.",
    },
    {
      title: "Public Campaigns",
      image: "../images/public-campaigns.webp",
      description:
        "Organizing community events, media campaigns, and educational workshops to highlight the importance of childhood nutrition and address food insecurity.",
    },
    {
      title: "Eating Habits",
      image: "../images/eating-habits.webp",
      description:
        "Partnering with schools, health professionals, and organizations to spread knowledge about healthy eating habits and long-term wellness for children..",
    },
  ];



  useEffect(() => {
    const toggleCardClass = () => {
      const horizontalCard = document.getElementById("horizontalCard");

      if (!horizontalCard) return;

      if (window.matchMedia("(max-width: 991px)").matches) {
        horizontalCard.classList.remove("horizontal-card");
        horizontalCard.classList.add("vertical-card");
      } else {
        horizontalCard.classList.remove("vertical-card");
        horizontalCard.classList.add("horizontal-card");
      }
    };

    toggleCardClass(); // Initial check
    window.addEventListener("resize", toggleCardClass); // Re-check on resize

    return () => window.removeEventListener("resize", toggleCardClass); // Cleanup
  }, []);

  return (
    <div className='about_us community_page donation_page'>
      {/* Header */}
      <HeaderIntialize showDashboardMenu={false} pvBars={false} />

      <HeroSection title={`We Are On
The Way`}
        description="Every day, our employees, associates, and consumers come together to drive real change, bringing hope, care, and positive transformation to communities worldwide."
        descTitle='Support. Educate. Empower.'
        titleShow={true}
        shapeUrl="../svg/green-logo.svg"
        imageUrl="../images/baby.webp"
      />



      {/* Kids Card */}

      <section className="kids-card-section py-5">
        <div className="container">
          <div className="kids-cards">
            <div className="kids-card">
              <div className="img">
                <img src="../images/iparkids.webp" alt="iparkids" />
              </div>
              <div className="right-dsc">
                <h4 className="black fw-bold">
                  IPAR KIDS™ – Nourish &amp; Thrive Initiative
                </h4>
                <p className="m-0 gray">
                  We are empowering families with knowledge and advocating for a
                  world where every child has access to proper nutrition.
                </p>
              </div>
            </div>
            <div className="kids-card">
              <div className="img">
                <img src="../images/iparkids-2.webp" alt="iparkids" />
              </div>
              <div className="right-dsc">
                <h4 className="black fw-bold">
                  Gril’s Hope – Empowering Girls, Dignifying Periods
                </h4>
                <p className="m-0 gray">
                  Provides menstrual health support through donations,
                  education, and advocacy, driving lasting change through
                  partnerships, social impact, and e-commerce fundraising.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 p-lg-4 p-auto" >
              <div className="icon">
                <img src="../svg/handshake.svg" alt="handshake" />
              </div>
              <h4 className="mt-3 black">Compassion &amp; Responsibility</h4>
              <p className="gray mt-3">
                Through volunteerism, advocacy, and sustainable initiatives,
                including Girl’s Hope, IPAR Kids, the Cancer Foundation, and
                partnerships with NGOs, we continue to uplift lives, inspire
                change, and create a future where compassion and responsibility
                drive meaningful progress.
              </p>
            </div>
            <div className="col-lg-6 p-lg-4 p-auto mt-lg-0 mt-4" >
              <div className="icon">
                <img src="../svg/rocket-md.svg" alt="Rocket" />
              </div>
              <h4 className="mt-3 black">Transform Communities</h4>
              <p className="gray mt-3">
                Small actions create big ripples. When our team volunteers,
                speaks up for change, or launches sustainable programs, they're
                creating waves of impact that transform communities. For us,
                doing good isn't just a checkbox—it's in our DNA, driving
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Grid Gallery Section */}

      <section className="grid-gallery-section mt-4">
        <div className="container">
          <div className="grid-gallery mt-5">
            {galleryImages.map((item, index) => (
              <div key={index} className={`gallery-itm ${item.className || ""}`}>
                <img src={item.src} alt={item.alt} />

                {/* Conditional message if it's a landscape AND flagged to show text */}
                {item.className === "landscape" && item.showText && (
                  <h4 className="mt-3">
                    Together, we're not just dreaming of a better world – we're
                    building it, one act of kindness at a time.
                  </h4>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Grilis Hope */}
      <section class="grilis-hope py-5">
        <div class="container">
          <img src="../images/grilis-hope-with-friends.webp" alt="Grilis" />
          <h4 class="black fw-medium">
            Support. Educate. Empower.
          </h4>
          <h1 class="black fw-medium">Dignifying Periods</h1>
          <p >
            Provides menstrual health support through donations, education, and
            advocacy, driving lasting change through partnerships, social
            impact, and e-commerce fundraising
          </p>

          <img class="lash" src="../images/lash.webp" alt="Lash" />
        </div>
      </section>

      {/* Impact Card Section */}

      <section className="tripple-cards">
        <div className="container">
          <h1 className="text-center black" >
            Global Menstrual Health Challenges
          </h1>

          <ImpactCardSection cards={impactCardsData} />
        </div>
      </section>


      {/* Girls Hope */}

      <section class="grils-hope mt-5 bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 left p-4">
              <img class="grils" src="../images/grils-hope.webp" alt="Girls" />
              <h3>Breaking Barriers, Empowering Girls</h3>
              <p class="gray mt-3">
                Millions of girls worldwide face period poverty, lacking access
                to safe, affordable menstrual hygiene products. This results in
                missed school days, social isolation, and declining
                self-confidence. The lack of education, stigma, and financial
                barriers prevent girls from managing their periods with dignity,
                impacting their future opportunities.
              </p>

              <h3 class="mt-5" >
                Your Role in the Solution
              </h3>
              <p class="gray mt-3">
                Every Suncella purchase contributes directly to providing period
                products to girls in need. Together, we can break the stigma and
                create a world where no girl loses school because of her period.
              </p>
            </div>
            <div class="col-lg-6 right">
              <div class="img">
                <img class="w-100 h-100" src="../images/girls.webp" alt="Girls" />
              </div>
              <p class="float-txt">
                Gril’s Hope - <br />
                A Future of Dignified Periods
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline Vertical Card */}

      <div className="timeline-with-btn">
        <TimelineVerticalCard title="Choose IPAR" items={timelineItems} />
      </div>

      {/* SignUp Form */}

      <section className="signUp-section">
        <h1 className="text-center black fw-bold">
          Sign Up Volunteers
        </h1>
        <div className="container mt-4">
          <SignupForm
            title="Small actions, big impact. Doing good isn’t a task—it’s who we are."
            onSubmit={(data) => console.log("Form Submitted:", data)}
          />
        </div>
      </section>



      {/* Inspiring section */}
      <section class="inspiring-section py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 px-lg-5 px-auto" >
              <div class="img">
                <img src="../images/iparkids-big.webp" alt="Iparkids" />
              </div>
              <h2 class="green-title mt-4 text-center">
                Nourish &amp; Thrive Initiative
              </h2>
            </div>
            <div class="col-lg-8 px-lg-5 px-auto">
              <div class="img">
                <img src="../images/baby-2.webp" alt="Baby" />
              </div>
              <p class="mt-3 gray">
                Through the IPAR KIDS™ – Nourish &amp; Thrive Initiative, we are
                empowering families with knowledge and advocating for a world
                where every child has access to proper nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Impact Card Section */}
      <section className="tripple-cards">
        <div className="container">
          <h1 className="text-center black" >
            Inspiring Change Through Awareness
          </h1>

          <ImpactCardSection cards={impactCardsDataTwo} />
        </div>
      </section>


      {/* Nutration */}

      <section class="nutration-section py-5">
        <div class="container">
          <div class="nutration-container">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="black" >
                  Raising Awareness &amp; Advocating for Child Nutrition
                </h1>
                <p class="mt-4 gray fs-5">
                  Millions of children around the world suffer from hunger and
                  malnutrition, impacting their health, education, and future.
                  The IPAR KIDS™ – Nourish &amp; Thrive Initiative is dedicated to
                  raising awareness and advocating for better child nutrition by
                  engaging communities, families, and organizations in
                  meaningful discussions and educational efforts.
                </p>
              </div>
              <div class="col-lg-6">
                <div class="img">
                  <img src="../images/smile-baby.webp" alt="Smile baby image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Timeline Horizontal Card */}
      <section class="timeline-ver-card " id="timelineCard">
        <div class="container">
          <h1 class="text-center black fw-bold" style={{ marginBottom: "80px" }}>
            How You Can Help?
          </h1>
          <div class="horizontal-card" id="horizontalCard">
            <div class="timeline-item">
              <div class="icon-sec">
                <div class="icon" >
                  <img src="../svg/handshake-wt.svg" alt="Icon" />
                </div>
              </div>
              <div class="content">
                <div class="content-card" >
                  <h3>Support Awareness Efforts</h3>
                  <p class="gray mt-3">
                    Share information and participate in local campaigns to
                    spread knowledge on child nutrition.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="icon-sec">
                <div class="icon">
                  <img src="../svg/community.svg" alt="Icon" />
                </div>
              </div>
              <div class="content right">
                <div class="content-card">
                  <h3>Engage Your Community</h3>
                  <p class="gray mt-3">
                    Encourage healthy eating habits and participate in
                    educational workshops and discussions.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="icon-sec">
                <div class="icon">
                  <img src="../svg/advocating.svg" alt="Icon" />
                </div>
              </div>
              <div class="content left">
                <div class="content-card">
                  <h3>Advocate for Change</h3>
                  <p class="mt-3 gray">
                    Join initiatives that promote food security and access to
                    nutritious meals for children.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="btn-sec mt-5 bg-white d-flex justify-content-center gap-3">
            <button class="green-btn py-2">Donate now</button>
          </div>
        </div>
      </section>



      {/* SignUp Form */}

      <section className="signUp-section">

        <div className="container mt-4">
          <SignupForm
            title="Small actions, big impact. Doing good isn’t a task—it’s who we are."
            onSubmit={(data) => console.log("Form Submitted:", data)}
          />
        </div>
      </section>

      <Footer />
    </div >
  )
}

export default Donation