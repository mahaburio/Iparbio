import React, { useState, useEffect } from "react";
import classNames from "classnames";
import UploadImageModal from "../common/UploadImageModal";
import { PhoneNumberInput } from "../input/InputFields";
import WriteMyStoryModal from "./WriteStoryModal";
import TopPicks from "./TopPicks";

import Modal from "../common/PopupModal";

const tabs = [
  { key: "business", label: "Business Information" },
  { key: "contact", label: "Contact Information" },
  { key: "topPicks", label: "My Top Picks" },
  { key: "myStory", label: "Tell My Story" },
  { key: "socials", label: "Connect My Socials" },
  { key: "enrollment", label: "Share Enrollment" },
  { key: "googleTags", label: "Google Tags" },
];

const WebsiteInfoSection = () => {
  const [activeTab, setActiveTab] = useState("business");

  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState("../assets/person.png");



  const handleFileUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
    setShowModal(false);
  };


  // Enrollment

  const [showSuccessModal, setSuccessShowModal] = useState(false);

  // Auto-close modal after 3 seconds
  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setSuccessShowModal(false);
      }, 2000);

      // Clear timeout if modal is closed early
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);


  // For The Story

  const [activeOption, setActiveOption] = useState("default");
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [customStory, setCustomStory] = useState("");

  const handleSaveStory = (newStory) => {
    setCustomStory(newStory);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "business":
        return (

          <>
            <div className="setting-desc-itm">
              <div className="head-tt">Buisness Information</div>
              <p className="mt-3 head-dsc">
                Update your subdomain to match your name, business, or
                personal brand, creating a unique website URL to share and
                earn sales credit—be flexible, as some names may already be
                taken or restricted by Ipar’s guidelines.
              </p>

              <div className="profile-sec d-flex align-items-center gap-3">
                <div className="img">
                  <img id="profileImage" src={profileImage} alt="Profile" />
                </div>
                <div className="edit" onClick={() => setShowModal(true)}>
                  Edit Photo
                </div>
              </div>

              <div className="dis-name mt-4">
                <label className="name-label" for="d-name">Display Name</label><br />
                <input type="text" placeholder="DILA'S IPAR RHOP" />
              </div>

              <div className="subdomain mt-3">
                <label className="name-label" for="d-name">Subdomain</label><br />
                <div className="inp-sec">
                  <input type="text" placeholder="DILA" />
                  <span>Http://dila.Iparhealth.com.</span>
                </div>
              </div>

              <div className="btn-sec text-end mt-5">
                <button className="tsp-btn">Cancel</button>
                <button className="black-btn black-btn-sm nextBtn px-4">
                  Save
                </button>
              </div>

            </div>

            <UploadImageModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onFileSelect={handleFileUpload}
            />

          </>


        );

      case "contact":
        return (
          <div class="contact-info setting-desc-itm ">
            <div class="head-tt">Contact Information</div>
            <p class="mt-3 head-dsc">
              Displaying your contact information is optional, but it
              helps potential customers and team members reach out with
              questions—being accessible is key to growing your Ipar
              business!
            </p>

            <div class="email mt-4">
              <label class="name-label" for="d-name">Email</label><br />
              <div class="inp-sec">
                <input type="text" placeholder="example@gmail.com" />
                <div class="toggle d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  <span class="cms-txt">Show My Number</span>
                </div>
              </div>
            </div>

            <div class="phone mt-3">
              <label class="name-label" for="d-name">Phone Number</label><br />
              <div class="inp-sec">
                <PhoneNumberInput />
                <div class="toggle d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" checked id="" />
                    <span class="slider round"></span>
                  </label>
                  <span class="cms-txt">Show My Number</span>
                </div>
              </div>
            </div>

            <div class="btn-sec text-end mt-5">
              <button class="tsp-btn">Cancel</button>
              <button class="black-btn black-btn-sm nextBtn px-4">
                Save
              </button>
            </div>
          </div>
        );

      case "topPicks":
        return (
          <TopPicks />
        );

      case "myStory":
        return (
          <>

            <div className="my-story setting-desc-itm ">
              <div className="head-tt">Tell My Story</div>
              <p className="mt-3 head-dsc">
                Write a short, personal message to introduce yourself to visitors...
              </p>

              <div className="mt-5 mb-5 px-lg-3 px-md-3 px-sm-0 px-0 storyInputSec">
                {/* Default Message Option */}
                <div
                  className="default-msg mt-3 ps-3"
                  onClick={() => setActiveOption("default")}
                >
                  <div className="radio-checkmark">
                    <div className={`radio-input ${activeOption === "default" ? "activeLabelInput" : ""}`}></div>
                    <span>Show Default Ipar Message</span>
                  </div>
                  <div className="msg-dsc">
                    Display the standard Ipar message to introduce visitors to the brand.
                  </div>
                </div>

                {/* Custom Story Option */}
                <div className="own-msg mt-3 ps-3">
                  <div
                    className="radio-checkmark"
                    onClick={() => {
                      setActiveOption("custom");
                      setShowStoryModal(true);
                    }}
                  >
                    <div className={`radio-input ${activeOption === "custom" ? "activeLabelInput" : ""}`}></div>
                    <span>Tell my own story</span>
                  </div>
                  {activeOption === "custom" && customStory && (
                    <div className="my-msg-dsc mt-2">{customStory}</div>
                  )}
                </div>
              </div>

              <div className="btn-sec text-end mt-5">
                <button className="tsp-btn">Cancel</button>
                <button className="black-btn black-btn-sm nextBtn px-4">Save</button>
              </div>
            </div>

            {/* Modal to Write Story */}
            <WriteMyStoryModal
              isOpen={showStoryModal}
              onClose={() => setShowStoryModal(false)}
              initialValue={customStory}
              onSave={handleSaveStory}
            />

          </>
        );

      case "socials":
        return (
          <div class="connect-socials setting-desc-itm ">
            <div class="head-tt">Connect My Socials</div>
            <p class="mt-3 head-dsc">
              Link your social media accounts to your website so visitors
              can easily learn more about you and stay connected.
            </p>

            <div class="social-items mt-5 mb-5">
              <div class="fb scl-itm">
                <a href="" class="icon"><i class="ri-facebook-fill"></i></a>
                <input type="text" placeholder="DILA'S IPAR RHOP" />
                <div class="toggle d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" id="" />
                    <span class="slider round"></span>
                  </label>
                  <span class="cms-txt">Show</span>
                </div>
              </div>
              <div class="ins scl-itm mt-3">
                <a href="" class="icon"><i class="ri-instagram-line"></i></a>
                <input type="text" placeholder="DILA'S IPAR RHOP" />
                <div class="toggle d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" id="" />
                    <span class="slider round"></span>
                  </label>
                  <span class="cms-txt">Show</span>
                </div>
              </div>
              <div class="twt scl-itm mt-3">
                <a href="" class="icon"><i class="ri-twitter-x-line"></i></a>
                <input type="text" placeholder="DILA'S IPAR RHOP" />
                <div class="toggle d-flex align-items-center gap-2">
                  <label class="switch">
                    <input type="checkbox" checked id="" />
                    <span class="slider round"></span>
                  </label>
                  <span class="cms-txt">Show</span>
                </div>
              </div>
            </div>
            <div class="btn-sec text-end mt-5">
              <button class="tsp-btn">Cancel</button>
              <button class="black-btn black-btn-sm nextBtn px-4">
                Save
              </button>
            </div>
          </div>
        );

      case "enrollment":
        return (
          <div className="share-enrollment setting-desc-itm ">
            <div className="head-tt">Share Enrollment</div>
            <p className="mt-3 head-dsc">
              Turn on this feature to highlight the business opportunity
              on your site. A direct link will provide potential team
              members with more information about joining your team and
              allow them to self-enroll into your organization.
            </p>

            <div className="enrollment-switch mt-5 mb-5 d-flex align-items-center justify-content-lg-center justify-content-md-center justify-content-sm-start justify-content-start">
              <div className="toggle d-flex align-items-center gap-2">
                <label className="switch">
                  <input type="checkbox" id="" />
                  <span className="slider round"></span>
                </label>
                <span className="cms-txt">Display Link To Enrollment</span>
              </div>
            </div>
            <div className="btn-sec text-end mt-5">
              <button className="tsp-btn">Cancel</button>
              <button className="black-btn black-btn-sm nextBtn px-4" id="shareSavebtn" onClick={() => setSuccessShowModal(true)}>
                Save
              </button>
            </div>

            <Modal isOpen={showSuccessModal} onClose={() => setSuccessShowModal(false)}>
              <div class="modal-content">
                <div class="modal-header">
                  <h5>Success</h5>
                </div>
                <div class="modal-body pt-4">
                  <p class="gray">Your changes have been saved successfully.</p>
                  <p class="gray">
                    View your changes here <a href="" className="green-title">http://dila.iparhealth.com</a>
                  </p>
                </div>
              </div>
            </Modal>
          </div>





        );

      case "googleTags":
        return (
          <div className="google-tags setting-desc-itm">
            <div className="head-tt">Google Tags</div>
            <p className="mt-3 head-dsc">
              Track Your Site with Google Tag Manager, Use Google Tag
              Manager to monitor your Personal IparHealth.com Website
              analytics. Simply paste your Google Tag Manager code here to
              start tracking and analyzing your site’s data!
            </p>
            <div className="google-tag-input d-flex align-items-center justify-content-lg-center justify-content-md-center justify-content-sm-start justify-content-start mt-5 mb-5">
              <div>
                <label className="mb-1" for="">Google Tag</label>
                <input type="text" placeholder="Google tags" />
              </div>
            </div>

            <div className="btn-sec text-end mt-5">
              <button className="tsp-btn">Cancel</button>
              <button className="black-btn black-btn-sm nextBtn px-4" id="tagsSavebtn" data-bs-toggle="modal" data-bs-target="#saveSuccessModal">
                Save
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="website-info mt-5">
      <div className="container">
        <div className="row">
          {/* Tabs Sidebar */}
          <div className="col-lg-4">
            <div className="setting-info">
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  className={classNames("setting-itm", {
                    activeSettingItem: activeTab === tab.key,
                  })}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <div className="itm-nm">{tab.label}</div>
                  <div className="icon">
                    <i className="ri-arrow-right-s-line"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-lg-8 mt-lg-0 mt-5">
            <div className="setting-description">{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteInfoSection;
