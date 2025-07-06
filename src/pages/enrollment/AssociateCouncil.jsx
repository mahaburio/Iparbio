import React from 'react'
import { CardItem } from '../../components/enrollment/Cards'
import MainWrapper from '../../components/common/Mainwrapper';

import '../../styles/enhancement.css'
import AsideBar from '../../components/enrollment/Asidebar';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Footer from '../../components/footer/footer';

const AssociateCouncil = () => {

  const cardsItems = [
    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",

    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",
    },

    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",
    },
    {
      image: "images/ainura.webp",
      nameTitle: "Ainura Maatkurbanova – Visionary Leader & Business Innovator",
      description:
        "Ainura Maatkurbanova is a Star-Gold leader, a Founders Business Award recipient, an esteemed member of the Ipar 2025 Associate Council, a Premier Platinum IBA, and a recognized Top Associate Enroller in Central Asia. With a deep commitment to Ipar’s mission, she thrives on sharing science-backed, high-quality products that empower individuals to take control of their health and well-being...",
    },
    {
      image: "images/kanayim.webp",
      nameTitle: "Kanayim Murzamatova – Accomplished Leader & Visionary Entrepreneur.",
      description:
        "Kanayim Murzamatova is a Star-Gold, Founders Business Award recipient, and Ipar 2025 Associate Council Member. She's a Premier Platinum IBA and a Top Associate Enroller in Central Asia. Inspired by Ipar’s mission, she shares innovative products to enhance well-being and empower communities...",


    },

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
              <a href="" className="activeNavigateMenu">Associate Council</a>
            </div>
          </div>
        </section>


        {/* Desc title Section */}
        <section className="associate-section mt-5">
          <div className="container">
            <h1>Meet the 2025 Independent Business Associate Council Members</h1>
            <p className="mt-3">
              The future of Ipar begins with them—visionary leaders driving
              success and innovation.
            </p>

            <h3 className="mt-4">
              The Independent Business Associate Council (IBA Council)
            </h3>
            <p className="mt-3">
              The Independent Business Associate Council (IBA Council) is a group
              of dedicated Ipar Associates committed to strengthening the
              connection between the Ipar Home Office and the field. Nominated by
              fellow Associates, these leaders are passionate about enhancing the
              customer experience, increasing sales, and strategizing for
              long-term business growth.
            </p>
            <h3 className="mt-4">Qualifications for IBA Council Membership:</h3>

            <ul className="mt-4 p-0">
              <li>✔ Must be a Gold Director or above</li>
              <li>✔ Minimum three years with Ipar</li>
              <li>
                ✔ Actively enrolls new Associates, Preferred Customers, and/or
                Affiliates
              </li>
              <li>✔ Attended the last two Ipar Conventions</li>
            </ul>

            <h3 className="mt-4">Be Part of Something Bigger!</h3>
            <p className="mt-4">
              Stand out as a leader and help shape the future of Ipar. Consider
              contributing your expertise, passion, and vision as we work toward
              expanding our reach. IBA Council nominations open in May—stay tuned
              for details on how to get involved.
            </p>
          </div>
        </section>

        {/* Associate Card Section (Leaders) */}

        <section className="associate-council mt-5">
          <div className="container">
            <div className="main-head-title">Associate Council （2025）</div>

            <div className="grid-cards grid-cards-three mt-4">
              {cardsItems.map((item, index) => (
                <CardItem
                  key={index}
                  item={item}
                 
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MainWrapper>
  )
}

export default AssociateCouncil