import React from 'react';
import '../../styles/header/header.css'
import { tabsInitialize } from '../../utils/custom.js';
import { Header, CountryList } from '../index.js';
import CustomizeSec from '../../components/common/CustomizeSec.jsx'
import { useState, useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";

// Icon
import { FaShoppingCart } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsExclamationTriangle } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";

function HeaderIntialize({ logoSrc, showSearch = true, showDashboardMenu = true, pvBars = true, tabsMenuList = true, user, AllSidebar = true, AllSidebarForMobile = true, MeneBarSec = true, ReturnToCart = false, Sponsor = false }) {

  const defaultLogo = "../svg/ipar-logo.svg";
  const [showAccount, setShowAccount] = useState(false);
  const [showShopByMenu, setShowShopByMenu] = useState(false);
  const signinRef = useRef(null);
  const accountRef = useRef(null);
  const shopByMenuRef = useRef(null);
  const barMenuRef = useRef(null);
  const closeBtnRef = useRef(null);

  const toggleAccount = (e) => {
    e.stopPropagation();
    setShowAccount((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target) &&
        signinRef.current &&
        !signinRef.current.contains(event.target) &&
        shopByMenuRef.current &&
        !shopByMenuRef.current.contains(event.target)
      ) {
        setShowAccount(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const barMenu = barMenuRef.current;
    const closeBtn = closeBtnRef.current;

    const handleBarMenuClick = () => {
      setShowShopByMenu(true);
      document.body.style.overflow = "hidden";
    };

    const handleCloseMenu = () => {
      setShowShopByMenu(false);
      document.body.style.overflow = "auto";
    };

    if (barMenu) barMenu.addEventListener("click", handleBarMenuClick);
    if (closeBtn) closeBtn.addEventListener("click", handleCloseMenu);

    return () => {
      if (barMenu) barMenu.removeEventListener("click", handleBarMenuClick);
      if (closeBtn) closeBtn.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  useEffect(() => {
    const accordionHeaders = document.querySelectorAll(".list-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const isActive = this.classList.contains("active");

        // Toggle the clicked accordion
        if (isActive) {
          this.classList.remove("active");
          this.nextElementSibling?.classList.remove("show");
        } else {
          this.classList.add("active");
          this.nextElementSibling?.classList.add("show");
        }
      });
    });

    // Open the first accordion by default
    if (accordionHeaders.length > 0) {
      const firstHeader = accordionHeaders[0];
      firstHeader.classList.add("active");
      firstHeader.nextElementSibling?.classList.add("show");
    }

    // Cleanup (optional)
    return () => {
      accordionHeaders.forEach((header) => {
        header.replaceWith(header.cloneNode(true)); // Remove event listeners
      });
    };
  }, []);


  // MyComponent Here

  useEffect(() => {
    tabsInitialize();
  }, []);

  const { cartCount } = useCart();





  const accountItems = [
    {
      label: "My business",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m24,23v1H2.5c-1.378,0-2.5-1.122-2.5-2.5V.024h1v21.476c0,.827.673,1.5,1.5,1.5h21.5Zm-18-2.976v-8h-1v8h1Zm4,0h1v-10h-1v10Zm5,0h1v-7h-1v7Zm6,0v-11.024h-1v11.024h1ZM10,3.707l5,5L22.854.854l-.707-.707-7.146,7.146-5-5-5.854,5.854.707.707,5.146-5.146Z" />
      </svg>),
      isIcon: true
    },
    {
      label: "My order", icon: (<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
        <path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM6.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H6.5Zm11.5,4.5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5ZM8.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Z" />
      </svg>), isIcon: true,
    },



    { label: "My website setting", icon: <CiGlobe className='icon-icon' />, isIcon: true, },
    { label: "My Returns", icon: <BsExclamationTriangle className='icon-icon' />, isIcon: true, },
    { label: "Profile Manager", icon: <RiUser3Line className='icon-icon' />, isIcon: true, },
    {
      label: "Tax information", icon: (<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m4.5,12c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c.276,0,.5.224.5.5s-.224.5-.5.5h-1Zm5,0c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5.224-.5.5s.224.5.5.5h1Zm3,4.5c0-.276-.224-.5-.5-.5h-5c-.276,0-.5.224-.5.5s.224.5.5.5h2v6.5c0,.276.224.5.5.5s.5-.224.5-.5v-6.5h2c.276,0,.5-.224.5-.5Zm-6,6.5h-2c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h13c1.93,0,3.5,1.57,3.5,3.5v9c0,.276.224.5.5.5s.5-.224.5-.5V4.5c0-2.481-2.019-4.5-4.5-4.5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm11-12h-1c-.276,0-.5.224-.5.5s.224.5.5.5h1c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm.5-5.5v1c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5v-1c0-.827.673-1.5,1.5-1.5h11c.827,0,1.5.673,1.5,1.5Zm-1,0c0-.276-.225-.5-.5-.5H5.5c-.275,0-.5.224-.5.5v1c0,.276.225.5.5.5h11c.275,0,.5-.224.5-.5v-1Zm5.076,14.5l1.858-3.252c.137-.24.054-.545-.187-.682-.237-.138-.544-.056-.683.186l-1.565,2.74-1.565-2.74c-.139-.242-.446-.324-.683-.186-.24.137-.323.442-.187.682l1.858,3.252-1.858,3.252c-.137.24-.054.545.187.682.078.045.163.066.248.066.173,0,.342-.09.435-.252l1.565-2.74,1.565,2.74c.093.162.262.252.435.252.085,0,.17-.021.248-.066.24-.137.323-.442.187-.682l-1.858-3.252Zm-5.76-2.962l1.667,6.334c.07.267-.112.627-.483.627-.222,0-.425-.148-.483-.373l-.428-1.627h-3.177l-.428,1.627c-.07.267-.346.426-.61.356-.268-.07-.427-.344-.356-.611l1.667-6.334c.16-.607.688-1.015,1.316-1.015s1.156.408,1.316,1.015Zm.009,3.962l-.976-3.707c-.066-.25-.284-.27-.35-.27s-.283.019-.35.27l-.976,3.707h2.65Zm-2.825-9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5.224-.5.5s.224.5.5.5h1Z" />
      </svg>), isIcon: true
    },
    {
      label: "Ipar kids donation", icon: (<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m24,5.5v10.101c0,2.003-.78,3.887-2.197,5.303l-2.95,2.95c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l2.95-2.95c1.228-1.228,1.904-2.86,1.904-4.596V5.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5c0,0-.002,8.045-.005,8.067-.015.547-.208,1.091-.579,1.533l-2.638,2.746c-.098.102-.229.153-.36.153-.125,0-.25-.046-.347-.14-.199-.191-.205-.508-.014-.707l2.616-2.721c.218-.26.328-.591.328-.924,0-.003,0-.005,0-.008v-.038c-.01-.345-.137-.691-.382-.965-.55-.613-1.497-.666-2.113-.116l-2.729,2.512c-.516.474-.929,1.033-1.231,1.663.297.753.456,1.562.456,2.385v4.559c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-4.559c0-1.534-.647-3.009-1.776-4.047l-2.734-2.516c-.609-.546-1.557-.494-2.108.12-.494.551-.507,1.394-.032,1.96l2.593,2.695c.191.199.185.516-.014.707-.2.191-.516.185-.707-.014l-2.616-2.721c-.375-.446-.573-.985-.597-1.526-.006-.032-.01-8.1-.01-8.1,0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v10.101c0,1.736.676,3.369,1.904,4.596l2.95,2.95c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-2.95-2.95c-1.417-1.417-2.197-3.3-2.197-5.303V5.5c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5v5.998c.933-.699,2.262-.668,3.162.138l2.739,2.521c.426.392.794.838,1.098,1.321.305-.485.673-.927,1.1-1.321l2.734-2.516c.904-.81,2.234-.842,3.167-.143v-5.998c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5ZM7,2.93c0-1.616,1.233-2.93,2.75-2.93.962,0,1.765.415,2.25,1.09.485-.675,1.288-1.09,2.25-1.09,1.517,0,2.75,1.314,2.75,2.93,0,2.115-2.549,4.708-3.896,5.783-.325.259-.714.388-1.104.388s-.778-.129-1.103-.388c-1.348-1.075-3.897-3.667-3.897-5.783Zm1,0c0,1.512,2.059,3.835,3.521,5,.282.226.677.226.959,0,1.461-1.166,3.52-3.488,3.52-5,0-1.064-.785-1.93-1.75-1.93-1.03,0-1.75.703-1.75,1.709,0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-1.006-.72-1.709-1.75-1.709-.965,0-1.75.866-1.75,1.93Z" />
      </svg>), isIcon: true
    },
    {
      label: "Setting", icon: (<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="M9.8,9.802c-.755,.753-1.122,1.476-1.122,2.208,0,.957,.64,1.706,1.122,2.187,.74,.739,1.47,1.108,2.2,1.108s1.46-.37,2.2-1.108c.755-.753,1.122-1.476,1.122-2.208,0-.957-.64-1.706-1.122-2.187-1.48-1.478-2.92-1.478-4.4,0Zm3.694,3.688c-1.251,1.248-2.042,.944-2.988,0-.565-.564-.828-1.034-.828-1.479,0-.454,.271-.944,.828-1.5,.583-.582,1.065-.826,1.511-.826,.511,0,.972,.322,1.478,.826,.565,.564,.828,1.034,.828,1.479,0,.454-.271,.944-.828,1.5Z" />
        <g>
          <path d="M9.8,9.802c-.755,.753-1.122,1.476-1.122,2.208,0,.957,.64,1.706,1.122,2.187,.74,.739,1.47,1.108,2.2,1.108s1.46-.37,2.2-1.108c.755-.753,1.122-1.476,1.122-2.208,0-.957-.64-1.706-1.122-2.187-1.48-1.478-2.92-1.478-4.4,0Zm3.694,3.688c-1.251,1.248-2.042,.944-2.988,0-.565-.564-.828-1.034-.828-1.479,0-.454,.271-.944,.828-1.5,.583-.582,1.065-.826,1.511-.826,.511,0,.972,.322,1.478,.826,.565,.564,.828,1.034,.828,1.479,0,.454-.271,.944-.828,1.5Z" />
          <path d="M23.019,11.948c.008-1.595-.817-2.481-2.521-2.7-.188-.394-.417-.787-.694-1.188,1.205-1.456,1.21-2.694,.026-3.876-1.183-1.181-2.425-1.175-3.884,.029-.401-.274-.794-.501-1.188-.688-.217-1.706-1.134-2.524-2.705-2.524-1.602,.008-2.495,.849-2.725,2.569-.392,.189-.791,.421-1.19,.691-1.451-1.197-2.694-1.194-3.89,0-1.178,1.175-1.18,2.448-.001,3.882-.273,.4-.506,.798-.696,1.189-1.719,.229-2.56,1.122-2.568,2.721-.008,1.595,.817,2.481,2.521,2.7,.188,.394,.417,.787,.694,1.188-1.205,1.456-1.21,2.694-.026,3.876,1.184,1.182,2.425,1.176,3.884-.029,.401,.274,.794,.501,1.188,.688,.216,1.697,1.113,2.524,2.682,2.524,1.605,0,2.519-.849,2.749-2.569,.392-.189,.791-.421,1.19-.691,1.451,1.197,2.694,1.193,3.89,0,1.178-1.175,1.18-2.448,.001-3.882,.273-.4,.506-.798,.696-1.189,1.719-.229,2.56-1.122,2.568-2.721Zm-3.36,2.053c-.227,.515-.544,1.051-.942,1.594-.142,.193-.127,.459,.036,.635,1.373,1.487,.898,2.2,.295,2.802-.63,.628-1.321,1.078-2.812-.295-.175-.162-.44-.176-.634-.036-.541,.395-1.077,.71-1.595,.937-.167,.073-.282,.232-.297,.415-.139,1.615-.779,1.942-1.766,1.947-1.008-.027-1.609-.304-1.734-1.9-.015-.186-.131-.348-.302-.421-.521-.222-1.041-.526-1.588-.929-.089-.065-.193-.097-.296-.097-.122,0-.243,.044-.338,.132-1.503,1.383-2.211,.919-2.807,.324-.595-.594-1.06-1.299,.323-2.797,.163-.177,.178-.444,.035-.637-.4-.541-.716-1.075-.937-1.588-.073-.17-.234-.286-.419-.301-1.587-.126-1.903-.755-1.898-1.729,.005-.984,.333-1.622,1.946-1.761,.182-.016,.341-.129,.415-.296,.227-.515,.544-1.051,.942-1.594,.142-.193,.127-.459-.036-.635-1.373-1.487-.898-2.2-.295-2.802,.606-.604,1.321-1.08,2.812,.295,.176,.163,.441,.178,.634,.036,.541-.395,1.077-.71,1.595-.937,.167-.073,.282-.232,.297-.415,.139-1.615,.779-1.942,1.766-1.947,.99-.027,1.608,.304,1.734,1.9,.015,.186,.131,.348,.302,.421,.521,.222,1.041,.526,1.588,.929,.193,.142,.458,.127,.635-.035,1.504-1.382,2.212-.918,2.807-.324,.595,.594,1.06,1.299-.323,2.797-.163,.177-.178,.444-.035,.637,.4,.541,.716,1.075,.937,1.588,.073,.17,.234,.286,.419,.301,1.587,.126,1.903,.755,1.898,1.729-.005,.984-.333,1.622-1.946,1.761-.182,.016-.341,.129-.415,.296Z" />
        </g>
      </svg>), isIcon: true,
    },

    { label: "Email", icon: <BsEnvelope className='icon-icon' />, isIcon: true, },
    { label: "Sign out", icon: <GoSignOut className='icon-icon' />, isIcon: true, },
  ];

  // Dashboard Menu Items

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const accordionData = [
    {
      title: "Nutrition and Wellness",
      icon: "../svg/personal-care.svg",
      items: ["Item 1", "Minerals & Antioxidants", "Free Radical Defense", "Immune Support"],
    },
    {
      title: "Personal Care & Beauty",
      icon: "../svg/personal-care.svg",
      items: ["Foundational Health", "Minerals & Antioxidants", "Free Radical Defense", "Immune Support"],
    },
    {
      title: "Women's health",
      icon: "../svg/nutrations.svg",
      items: ["Foundational Health", "Minerals & Antioxidants", "Free Radical Defense", "Immune Support"],
    },
    {
      title: "Eco-home",
      icon: "../svg/w-health.svg",
      items: ["Foundational Health", "Minerals & Antioxidants", "Free Radical Defense", "Immune Support"],
    },
    {
      title: "Optimizers",
      icon: "../svg/w-health.svg",
      items: ["Foundational Health", "Minerals & Antioxidants", "Free Radical Defense", "Immune Support"],
    },
    {
      title: "Business Tools",
      icon: "../svg/w-health.svg",
      items: ["Foundational Health", "Minerals & Antioxidants", "Free Radical Defense", "Immune Support"],
    },
  ];


  // List section

  const listSections = [
    {
      key: "nutrition",
      active: true,
      groups: [
        {
          title: "Shop all",
          links: ["give back", "experiencers", "specialist & speakers"],
        },
        {
          title: "Shop buy benefits",
          links: [
            "give back",
            "experiencers",
            "specialist & speakers",
            "give back",
            "experiencers",
            "specialist & speakers",
          ],
        },
        {
          title: "Shop all",
          links: [
            "give back",
            "experiencers",
            "specialist & speakers",
            "give back",
            "experiencers",
            "specialist & speakers",
          ],
        },
      ],
    },
    {
      key: "suncella",
      active: false,
      groups: [
        {
          title: "Suncella List",
          links: [
            "give back",
            "experiencers",
            "specialist & speakers",
            "specialist & speakers",
            "give back",
            "experiencers",
            "specialist & speakers",
          ],
        },
        {
          title: "Lorem",
          links: ["give back", "experiencers"],
        },
        {
          title: "Beauty List",
          links: [
            "give back",
            "experiencers",
            "specialist & speakers",
            "specialist & speakers",
            "give back",
          ],
        },
      ],
    },
    {
      key: "beauty",
      active: false,
      groups: [
        {
          title: "Beauty List",
          links: [
            "give back",
            "experiencers",
            "specialist & speakers",
            "specialist & speakers",
            "give back",
          ],
        },
        {
          title: "Shop buy benefits",
          links: [
            "give back",
            "experiencers",
            "experiencers",
            "specialist & speakers",
          ],
        },
      ],
    },
    {
      key: "home",
      active: false,
      groups: [
        {
          title: "Shop buy benefits",
          links: [
            "give back",
            "experiencers",
            "specialist & speakers",
            "give back",
            "experiencers",
            "specialist & speakers",
          ],
        },
      ],
    },
  ];

  // Product Items For Catergory

  const productItems = [
    {
      label: "New Products",
      image: "/images/product-1.webp",
      alt: "New-Products-Image",
    },
    {
      label: "Special Offers",
      image: "/images/product-1.webp",
      alt: "Special-Offers-Image",
    },
    {
      label: "Bestsellers",
      image: "/images/product-1.webp",
      alt: "BestSellers-Image",
    },
    {
      label: "Hormone, Sleep",
      image: "/images/product-1.webp",
      alt: "Products-Image",
    },
  ];

  // Product Items For Benefits

  const productItemsBenefits = [
    {
      icon: "/svg/leaf-white.svg",
      label: "Weight Management",
    },
    {
      icon: "/svg/leaf-white.svg",
      label: "Cognitive & Focus Support",
    },
    {
      icon: "/svg/leaf-white.svg",
      label: "Cognitive & Focus Support",
    },
    {
      icon: "/svg/leaf-white.svg",
      label: "Cognitive & Focus Support",
    },
    {
      icon: "/svg/leaf-white.svg",
      label: "Cognitive & Focus Support",
    },
    {
      icon: "/svg/leaf-white.svg",
      label: "Cognitive & Focus Support",
    },
    {
      icon: "/svg/leaf-white.svg",
      label: "Cognitive & Focus Support",
    },
  ];

  // todo ~~~~~~~~~~ MENU ITEM TABS ~~~~~~~~~~

  return (
    <header>
      <div className="navbar-section">
        <div className="nav">
          {/* Conditionally Render Search Bar */}

          <div className="d-lg-flex d-md-none d-sm-none d-none align-items-center gap-3">
            {showSearch && (
              <div className="search-wrap-sec d-lg-flex d-md-none d-sm-none d-none align-items-center gap-3">
                {AllSidebar && (
                  <div className="all allBtn d-flex align-items-center gap-1">
                    <i className="ri-menu-line"></i>
                    <span>All</span>
                  </div>
                )}
                <div className="search">
                  <div className="input-wrapper">
                    <input type="search" placeholder="Search..." />
                    <i className="ri-search-line"></i>
                  </div>
                </div>
              </div>

            )}
          </div>

          <div className="back-home-mb d-lg-none d-md-flex d-sm-flex d-flex">
            <a href=""><i className="ri-arrow-left-s-line"></i> Home</a>
          </div>


          <div className="logo">
            <a href="/">
              <img src={logoSrc || defaultLogo} alt="Ipar-logo" />
            </a>
          </div>

          <div className="d-flex align-items-center gap-3">
            {/* Conditionally Render Dashboard Menu */}
            {showDashboardMenu && (
              <div ref={barMenuRef} className="dashboard-menu d-lg-none d-md-inline-block d-sm-inline-block d-inline-block" id='barMenu'>
                <img src="../svg/dashboard-menu.svg" alt="dashboard-menu" />
              </div>
            )}

            {/* Sign In & Account Details */}
            <div>
              <div className="sign-in" ref={signinRef} onClick={toggleAccount}>
                {user?.isLoggedIn ? (
                  <>
                    <span>{user.name}</span>
                    <div className="icon">
                      <img src={user.image || "/svg/default-user.svg"} alt="User-Profile" />
                    </div>
                  </>
                ) : (
                  <>
                    <span>Sign in</span>
                    <div className="icon">
                      <img src="/svg/sign-icon.svg" alt="Sign-Icon" />
                    </div>
                  </>
                )}

                <div id="myAccountDetails" ref={accountRef} className={showAccount ? "block" : ""}>
                  {/* ~~~~~~ Account Details ~~~~~~~ */}

                  <h5 className="text-center">My Account</h5>
                  <div className="u-info mt-4">
                    {user?.isLoggedIn ? (
                      <>
                        <div className="img">
                          <img src={user.image || "/svg/sign-icon.svg"} alt="User-Profile" />
                        </div>
                      </>
                    ) : (
                      <div className="img">
                        <img src="/svg/sign-icon.svg" alt="User-Profile" />
                      </div>
                    )}
                    <div className="u-details">
                      <div className="name-or-num">98754566</div>
                      <div className="digit">6859.05</div>
                    </div>
                  </div>



                  {/* Account Items */}
                  <div className="account-items mt-4">
                    {accountItems.map((item, index) => (
                      <div key={index} className="acc-item">
                        <div className="icon-logo">
                          {item.isIcon ? item.icon : <img src={item.icon} alt={item.label} />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </div>

            {/* Country Flag */}
            <div className="country-flag">
              <div className="country" data-bs-toggle="offcanvas" href="#countryList">
                <img src="../flag/usa.webp" alt="" />
              </div>
            </div>

            <div className="offcanvas offcanvas-end" id="countryList">
              <div className="offcanvas-header justify-content-center">
                <h4 className="offcanvas-title text-center">
                  Select market & language
                </h4>
              </div>
              <div className="offcanvas-body">
                {/* Country List Components Here */}
                <CountryList />
              </div>
            </div>
          </div>

          {/* Sidebar (Customize Sec) Components Here */}
          <CustomizeSec />
        </div>
      </div>

      {/* ~~~~~~~~~~ MENU ITEM ~~~~~~~~~ */}

      {MeneBarSec && (
        <>
          <div className="menu-item">
            <div className="container-fluid navbar-menu">
              <ul className="nav-list m-0 p-0" id="collapseMenu">
                {ReturnToCart && (
                  <a className="returntocart" href=""><i className="ri-arrow-left-s-line"></i> Return to cart</a>
                )}
                {tabsMenuList && (
                  <div className="main-listed-wrapper">
                    <li>
                      <a href="">Shop <i className="ri-arrow-down-s-line"></i></a>

                      <ul className="sub-list bigger-sublist">

                        <div className="tab-section">
                          <div className="list-header">
                            <div className="item active" data-target="nutrition">
                              NUTRITION
                            </div>
                            <div className="item" data-target="suncella">SUNCELLA</div>
                            <div className="item" data-target="beauty">BEAUTY</div>
                            <div className="item" data-target="home">HOME</div>
                          </div>


                          {/* Tab Bodies */}
                          <div className="list-body">
                            {listSections.map((section) => (
                              <div
                                key={section.key}
                                className={`${section.key}-list-body list-content ${section.active ? "active" : ""
                                  }`}
                              >
                                {section.groups.map((group, idx) => (
                                  <div key={idx} className="listed-item">
                                    <h4>{group.title}</h4>
                                    {group.links.map((link, linkIdx) => (
                                      <li key={linkIdx}>
                                        <a href="#">{link}</a>
                                      </li>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>

                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="">Join Us</a>
                    </li>
                    <li>
                      <a href="">Community </a>
                    </li>
                  </div>
                )}
              </ul>
              <div className="right-items">

                {/* Sponsor For Dashboard Page */}

                {Sponsor && (
                  <div className="sponsor">
                    <span>Sponsor </span>
                    <a href="#">FAFA</a>
                  </div>
                )}

                {pvBars && (
                  <div className="rangeline-mobile mt-3 d-flex align-items-center gap-2">
                    <div className="left">
                      <div className="slider-w-pv d-flex justify-content-end gap-2 align-items-center">
                        <div className="slider-container w-100">
                          <div id="tooltip">433PV</div>
                          <input type="range" min="0" max="100" value="80" className="range-slider range-slider-80" disabled />
                        </div>
                        <div className="myPv">500pv</div>
                      </div>
                      <div className="text-start tt-dsc">
                        Unlock <span className="fw-semibold">GOLD</span> with 22.5 PV
                      </div>
                    </div>
                  </div>
                )}

                <a href="" className="shoping-cart" id='shoppingCart'>
                  <FaShoppingCart size={32} color='var(--black-100)' />

                  <div className="total-prd">{cartCount}</div>
                </a>
              </div>
            </div>
          </div>

          {/* Menu Items For Mobile Phone */}

          <div className="menu-item-phone d-lg-none d-md-flex d-sm-flex d-flex">
            <div className="all-with-search d-flex align-items-center gap-2">
              {AllSidebarForMobile && (
                <>
                  <div className="all allBtn d-flex align-items-center gap-1" id="">
                    <i className="ri-menu-line"></i>
                    <span>All</span>
                  </div>
                </>
              )}
              <div className="search">
                <div className="input-wrapper">
                  <input type="search" placeholder="Search..." />
                  <i className="ri-search-line"></i>
                </div>
              </div>
            </div>
            <a href="./html/cart-page.html" className="shoping-cart">

              <FaShoppingCart size={32} color='var(--black-100)' />
              <div className="total-prd">{cartCount}</div>
            </a>
          </div>

          {/* Shopby menu List For Mobile */}

          <div ref={shopByMenuRef} className="shopby-menu" style={{ display: showShopByMenu ? "block" : "none" }}>
            <div className="close-btn" ref={closeBtnRef}><i className="ri-close-large-line"></i></div>
            <div className="feaures">
              <h5 className="fw-bold px-3">Shop by Features</h5>

              <div className="products">
                {productItems.map((item, index) => (
                  <div
                    key={index}
                    className="products-item d-flex flex-column align-items-center gap-1"
                  >
                    <img src={item.image} alt={item.alt} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="categories mt-3">
              <h5 className="fw-bold px-3">Shop by Category</h5>

              <div className="accordion-list px-3 mt-3">
                {accordionData.map((section, index) => (
                  <div
                    className={`acr-it ${activeIndex === index ? "active" : ""}`}
                    key={index}
                  >
                    <div
                      className={`list-header d-flex align-items-center justify-content-between ${activeIndex === index ? "active" : ""}`}
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="left d-flex align-items-center gap-2">
                        <img src={section.icon} alt={section.title} />
                        <div className="name fw-medium">{section.title}</div>
                      </div>
                      <div className="arrows fs-3 fw-medium">
                        <i className={`ri-arrow-${activeIndex === index ? "down" : "right"}-s-line`}></i>
                      </div>
                    </div>
                    <div className={`acr-body ${activeIndex === index ? "show" : ""}`}>
                      {section.items.map((item, subIndex) => (
                        <li key={subIndex}><a href="#">{item}</a></li>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits mt-3">
              <h5 className="fw-bold px-3">Shop by by Benefit</h5>

              <div className="products">
                {productItemsBenefits.map((item, index) => (
                  <div className="products-item" key={index}>
                    <div className="icon">
                      <img src={item.icon} alt={item.alt || item.label} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

    </header>
  );
}

export default HeaderIntialize;