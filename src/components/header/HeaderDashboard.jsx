import React, { useState } from "react";
import CountryList from './CountryList';
// import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import { IoMdNotificationsOutline } from "react-icons/io";

import { AiOutlineUser } from "react-icons/ai";
import { CiViewList, CiGlobe } from "react-icons/ci";
import { BsExclamationTriangle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

import '../../styles/header/header.css';
import '../../styles/header/dashboard-header.css';
import UploadImageModal from "../common/UploadImageModal";

const HeaderDashboard = ({ NotifySection = true, isEwalletPage = false, isResourcePage = false, navResources = false, onMediaProfileClick }) => {
  const Detail = ({ label, value }) => (
    <div className="d-flex align-items-center gap-3 mt-1">
      <div className="tt">{label}:</div>
      <div className="u-dsc">{value}</div>
    </div>
  );


  

  const accountLinks = [
    { label: "Manage Profiles", icon: <AiOutlineUser /> },
    { label: "Orders", icon: <CiViewList /> },
    { label: "My site my way", icon: <CiGlobe /> },
    { label: "Message & Alerts", icon: <BsExclamationTriangle /> },
    {
      label: "Tax Information",
      icon: (
        <span
          dangerouslySetInnerHTML={{
            __html: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                          <path d="m4.5,12c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c.276,0,.5.224.5.5s-.224.5-.5.5h-1Zm5,0c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5.224-.5.5s.224.5.5.5h1Zm3,4.5c0-.276-.224-.5-.5-.5h-5c-.276,0-.5.224-.5.5s.224.5.5.5h2v6.5c0,.276.224.5.5.5s.5-.224.5-.5v-6.5h2c.276,0,.5-.224.5-.5Zm-6,6.5h-2c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h13c1.93,0,3.5,1.57,3.5,3.5v9c0,.276.224.5.5.5s.5-.224.5-.5V4.5c0-2.481-2.019-4.5-4.5-4.5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm11-12h-1c-.276,0-.5.224-.5.5s.224.5.5.5h1c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm.5-5.5v1c0,.827-.673,1.5-1.5,1.5H5.5c-.827,0-1.5-.673-1.5-1.5v-1c0-.827.673-1.5,1.5-1.5h11c.827,0,1.5.673,1.5,1.5Zm-1,0c0-.276-.225-.5-.5-.5H5.5c-.275,0-.5.224-.5.5v1c0,.276.225.5.5.5h11c.275,0,.5-.224.5-.5v-1Zm5.076,14.5l1.858-3.252c.137-.24.054-.545-.187-.682-.237-.138-.544-.056-.683.186l-1.565,2.74-1.565-2.74c-.139-.242-.446-.324-.683-.186-.24.137-.323.442-.187.682l1.858,3.252-1.858,3.252c-.137.24-.054.545.187.682.078.045.163.066.248.066.173,0,.342-.09.435-.252l1.565-2.74,1.565,2.74c.093.162.262.252.435.252.085,0,.17-.021.248-.066.24-.137.323-.442.187-.682l-1.858-3.252Zm-5.76-2.962l1.667,6.334c.07.267-.112.627-.483.627-.222,0-.425-.148-.483-.373l-.428-1.627h-3.177l-.428,1.627c-.07.267-.346.426-.61.356-.268-.07-.427-.344-.356-.611l1.667-6.334c.16-.607.688-1.015,1.316-1.015s1.156.408,1.316,1.015Zm.009,3.962l-.976-3.707c-.066-.25-.284-.27-.35-.27s-.283.019-.35.27l-.976,3.707h2.65Zm-2.825-9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5.224-.5.5s.224.5.5.5h1Z" />
                        </svg>`,
          }}
        />
      ),
    },
    {
      label: "Girls hope donation",
      icon: (
        <span
          dangerouslySetInnerHTML={{
            __html: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="m24,5.5v10.101c0,2.003-.78,3.887-2.197,5.303l-2.95,2.95c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l2.95-2.95c1.228-1.228,1.904-2.86,1.904-4.596V5.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5c0,0-.002,8.045-.005,8.067-.015.547-.208,1.091-.579,1.533l-2.638,2.746c-.098.102-.229.153-.36.153-.125,0-.25-.046-.347-.14-.199-.191-.205-.508-.014-.707l2.616-2.721c.218-.26.328-.591.328-.924,0-.003,0-.005,0-.008v-.038c-.01-.345-.137-.691-.382-.965-.55-.613-1.497-.666-2.113-.116l-2.729,2.512c-.516.474-.929,1.033-1.231,1.663.297.753.456,1.562.456,2.385v4.559c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-4.559c0-1.534-.647-3.009-1.776-4.047l-2.734-2.516c-.609-.546-1.557-.494-2.108.12-.494.551-.507,1.394-.032,1.96l2.593,2.695c.191.199.185.516-.014.707-.2.191-.516.185-.707-.014l-2.616-2.721c-.375-.446-.573-.985-.597-1.526-.006-.032-.01-8.1-.01-8.1,0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v10.101c0,1.736.676,3.369,1.904,4.596l2.95,2.95c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-2.95-2.95c-1.417-1.417-2.197-3.3-2.197-5.303V5.5c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5v5.998c.933-.699,2.262-.668,3.162.138l2.739,2.521c.426.392.794.838,1.098,1.321.305-.485.673-.927,1.1-1.321l2.734-2.516c.904-.81,2.234-.842,3.167-.143v-5.998c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5Z"/>
            </svg>`,
          }}
        />
      ),
    },
    { label: "Log out", icon: <IoIosLogOut /> },
  ];


  const [showUploadModal, setShowUploadModal] = useState(false);
  const [setSelectedImage] = useState(null);

  // const location = useLocation();
  // const currentPath = location.pathname;





  return (
    <div className="dashboard">
      <header className="header-dashboard">
        <div className="container">
          <div className="navbar-section d-flex align-items-center justify-content-between">
            <div className="logo">
              <a href="/">
                <img src="/svg/ipar-logo.svg" alt="Logo" />
              </a>
            </div>

            <div className="right-details d-flex align-items-center gap-3">
              <div className="sign-in" data-bs-toggle="offcanvas" href="#accountDetails">
                <span>DILA</span>
                <div className="icon">
                  <img src="/images/girl-header.webp" alt="Profile" />
                </div>
              </div>

              <div className="country-flag">
                <div className="country" data-bs-toggle="offcanvas" href="#countryList">
                  <img src="/flag/usa.webp" alt="USA Flag" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🟦 Account Offcanvas */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="accountDetails" aria-hidden="true">
          {/* Offcanvas content */}

          <div className="offcanvas-header d-flex justify-content-start">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
          </div>
          <div className="offcanvas-body">
            <div id="myAccountDetails">
              <div className="u-info">
                <div className="img">
                  <img src="/images/person.webp" alt="User Avatar" />
                </div>
                <div className="u-details">
                  <Detail label="USERNAME" value="DILA" />
                  <Detail label="USER ID" value="9854752" />
                  <Detail label="Level" value="IBA" />
                </div>
              </div>

              {/* ✅ Only Media Profile + Logout for Resource Page */}
              {isResourcePage && (
                <>
                  <div className="account-items mt-4">
                    <div className="mt-3 btn-sec">
                      <button className="black-btn black-btn-sm" onClick={() => {

                        onMediaProfileClick?.();
                      }} >
                        Media Profile
                      </button>
                    </div>
                  </div>

                  <div className="account-items onlyLogout mt-4">
                    {accountLinks
                      .filter((item) => item.label === "Log out")
                      .map((item, idx) => (
                        <div key={idx} className="acc-item d-flex align-items-center gap-2">
                          <div className="icon">{item.icon}</div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                  </div>
                </>
              )}

              {/* ✅ Only Log out (for Logout-Only Page) */}
              {isEwalletPage && !isResourcePage && (
                <div className="account-items onlyLogout mt-4">
                  {accountLinks
                    .filter((item) => item.label === "Log out")
                    .map((item, idx) => (
                      <div key={idx} className="acc-item d-flex align-items-center gap-2">
                        <div className="icon">{item.icon}</div>
                        <span>{item.label}</span>
                      </div>
                    ))}
                </div>
              )}

              {/* ✅ Regular view (default) */}
              {!isEwalletPage && !isResourcePage && (
                <>
                  <div className="account-items mt-4">
                    {accountLinks
                      .filter((item) => item.label !== "Log out")
                      .map((item, idx) => (
                        <div key={idx} className="acc-item d-flex align-items-center gap-2">
                          <div className="icon">{item.icon}</div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                  </div>

                  <div className="account-items onlyLogout mt-4">
                    {accountLinks
                      .filter((item) => item.label === "Log out")
                      .map((item, idx) => (
                        <div key={idx} className="acc-item d-flex align-items-center gap-2">
                          <div className="icon">{item.icon}</div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>


        {/*  Country Offcanvas */}
        <div className="offcanvas offcanvas-end" id="countryList">
          <div className="offcanvas-header justify-content-center">
            <h4 className="offcanvas-title text-center">
              Select market & language
            </h4>
          </div>
          <div className="offcanvas-body">
            <CountryList />
          </div>
        </div>

        {/* Menubar Section */}
        <div className="menubar-sec menubar-sec-v2">
          <div className="container d-flex align-items-center justify-content-between">
            {navResources && (
              <div className="left">
                <a className="nexus d-flex align-items-center" href="">
                  <i className="ri-arrow-left-s-line"></i> Ipar Nexus
                </a>

                <NavLink to="/library" className={({ isActive }) => isActive ? 'activeBar' : ''}>
                  Library
                </NavLink>

                <NavLink to="/resources-contact" className={({ isActive }) => isActive ? 'activeBar' : ''}>
                  Contacts
                </NavLink>

                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setShowUploadModal(true);
                }}>
                  Upload
                </a>
                <NavLink to="/resources-faq" className={({ isActive }) => isActive ? 'activeBar' : ''}>
                  FAQs
                </NavLink>
              </div>
            )}

            <div />

            {NotifySection && (
              <>
                <div className="notify-side d-flex align-items-center gap-3">
                  <div className="notificaiton">
                    <IoMdNotificationsOutline fontSize={26} color="var(--gray-100)" />
                    <div className="pulse" />
                    <div className="marker" />
                  </div>
                  <div className="toggle d-flex align-items-center gap-2">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                    <span className="cms-txt">Hide Commission Information</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {showUploadModal && (
          <UploadImageModal
            isOpen={showUploadModal}
            onClose={() => setShowUploadModal(false)}
            onFileSelect={(img) => setSelectedImage(img)}
          />
        )}
      </header>
    </div>
  );
};

export default HeaderDashboard;
