import React, { useState } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import MediaProfileModal from './MediaProfileModal';
import EliteHero from '../../components/enrollment/EliteHero';
import LibraryVideoCard from '../../components/enrollment/LibraryVideoCard';
import '../../styles/enhancement.css'
const Resources = () => {
  const [showModal, setShowModal] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    title: "Associate",
    email: "zoo@gmail.com",
    phone: "983-589-693",
    website: "2345435@iparhealth.com",
    address: "",
    language: "ENG",
    timezone: "",
  });

  const onMediaProfileClick = () => {
    const el = document.querySelector("#accountDetails");

    if (el && el.classList.contains("show") && window.bootstrap?.Offcanvas) {
      let bsOffcanvas = window.bootstrap.Offcanvas.getInstance(el);

      if (!bsOffcanvas) {
        bsOffcanvas = new window.bootstrap.Offcanvas(el);
      }

      bsOffcanvas.hide();

      setTimeout(() => {
        el.classList.remove("show");
        document.body.classList.remove("offcanvas-backdrop", "modal-open");
        document.querySelectorAll(".offcanvas-backdrop").forEach((b) => b.remove());

        setShowModal(true);
      }, 300);
    } else {

      setShowModal(true);
    }
  };

  // For Product About Grids

  const [selectedIndex, setSelectedIndex] = useState(''); // Default selected (e.g., 2nd item)

  const items = [
    {
      logo: '../svg/nutrive.svg',
      title: 'Nutrition and Wellness',
      description: 'A new era of nutrition and wellness begins here!',
    },
    {
      logo: '../svg/suncella.svg',
      title: "Women's Health",
      description: 'fresh, balanced, and confident—every day.',
    },
    {
      logo: '../svg/breeze.svg',
      title: 'Eco - Home Care Products',
      description: 'Bring the breeze of nature into your home with Island Breese!',
    },
  ];



  // Featureds Item
  const featuresItems = [
    { type: "PowerPoint Presentation", title: "The Ipar Difference" },
    { type: "PowerPoint Presentation", title: "256112" },
    { type: "youtube", src: "https://www.youtube.com/embed/OKTn2tAzmV8", title: "4875" },
    { type: "image", src: "https://via.placeholder.com/300x200.png?text=Image+Preview", title: "Image/Jpg" },
  ];


  // Video Section
  const videoItems = [
    {
      type: "mp4",
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

  const normalizeType = (type) => {
    if (!type) return "";
    const lower = type.toLowerCase();
    if (lower === "mp4") return "video";
    if (lower.includes("youtube")) return "youtube";
    if (lower.includes("image")) return "image";
    return type;
  };

  // Campaign

  const campaigns = [
    {
      title: 'The Ipar Difference – PowerPoint Presentation',
      type: 'Microsoft PowerPoint',
      status: 'Published',
      time: '5 hours ago',
    },
    {
      title: 'Active Nutrition 10-Day Program – Plate Portion Guide Social Shareable',
      type: 'Image - jpg',
      status: 'Published',
      time: '5 hours ago',
    },
    {
      title: 'Compensation Plan Video',
      type: 'Video - mp4',
      status: 'Published',
      time: '5 hours ago',
    },
    {
      title: 'DSS Assessment',
      type: 'PDF',
      status: 'Ready for Publishing',
      time: '5 hours ago',
    },
    {
      title: 'Advanced Nutritional Supplementation: Informational',
      type: 'Video - mp4',
      status: 'Ready for Publishing',
      time: '2+ years ago',
    },
    {
      title: 'Active Nutrition 10-Day Program – Plate Portion Guide Social Shareable',
      type: 'Image - jpg',
      status: 'Published',
      time: '5 hours ago',
    },
    {
      title: 'Compensation Plan Video',
      type: 'Video - mp4',
      status: 'Published',
      time: '5 hours ago',
    },
    {
      title: 'DSS Assessment',
      type: 'PDF',
      status: 'Ready for Publishing',
      time: '5 hours ago',
    },
    {
      title: 'Advanced Nutritional Supplementation: Informational',
      type: 'Video - mp4',
      status: 'Ready for Publishing',
      time: '2+ years ago',
    },
  ];


  return (
    <div className='ipar_elite'>
      <HeaderDashboard
        NotifySection={false}
        isResourcePage={true}
        onMediaProfileClick={onMediaProfileClick}
        navResources={true}
      />

      <MediaProfileModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />

      <EliteHero

        title="Welcome to the Resources Center!"
        description="Find everything you need to share Ipar—videos, social media graphics, print tools, presentations, and more—ready to download or share instantly."
        image="images/portrait-of-business-2.webp"
        searchBar={true} />

      {/* Product About Section */}

      <section className="product-about">
        <div className="container">
          <div className="about-grids">
            {items.map((item, index) => (
              <div
                className="itm text-center"
                key={index}
                onClick={() => setSelectedIndex(index)}
              >
                <div className={`logo ${selectedIndex === index ? 'selected' : ''}`}>
                  <img src={item.logo} alt="" />
                </div>
                <div className="dsc">
                  <li>
                    <span className="green-title fs-4 fw-bold">✓ </span> {item.title}
                  </li>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section class="features-section mt-5">
        <div class="container">
          <div class="main-head-title">Featured</div>

          <div className="library-grid mt-4">
            {featuresItems.map((item, idx) => (
              <LibraryVideoCard
                key={idx}
                type={normalizeType(item.type)}
                src={item.src}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>


      <section class="business-section mt-5">
        <div class="container">
          <div class="main-head-title">Business</div>

          <div className="library-grid mt-4">
            {videoItems.map((item, idx) => (
              <LibraryVideoCard
                key={idx}
                type={normalizeType(item.type)}
                src={item.src}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Campaign Section */}

      <section className="campaign-section mt-5 pb-5">
        <div className="container">
          <div className="main-head-title">My Campaign</div>
          <div className="campaign-table mt-4">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Create Time</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={index}>
                    <td>
                      <a href="#">{campaign.title}</a>
                    </td>
                    <td>{campaign.type}</td>
                    <td>{campaign.status}</td>
                    <td>{campaign.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};


export default Resources