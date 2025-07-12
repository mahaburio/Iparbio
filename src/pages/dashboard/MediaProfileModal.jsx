import React, { useState, useEffect } from "react";
import Modal from "../../components/common/PopupModal";
import classNames from "classnames";

const socialPlatforms = ["Facebook", "X (Twitter)", "Instagram", "YouTube"];

const socialURLs = {
  Facebook: "http://facebook.com/michage",
  "X (Twitter)": "http://twitter.com/username",
  Instagram: "http://instagram.com/username",
  YouTube: "http://youtube.com/channel",
};

const MediaProfileModal = ({ isOpen, onClose, contactInfo, setContactInfo }) => {
  const [activePlatform, setActivePlatform] = useState("Media Profile");
  const [activeSection, setActiveSection] = useState("mediaDetails");
  const [inputURL, setInputURL] = useState(socialURLs["Facebook"]);
  const [profileImage, setProfileImage] = useState("images/user.webp");



  useEffect(() => {
    const offcanvasEl = document.getElementById("accountDetails");

    if (!offcanvasEl) return;

    if (isOpen) {
      // ✅ Hide offcanvas manually
      if (offcanvasEl.classList.contains("show")) {
        offcanvasEl.classList.remove("show");
        offcanvasEl.setAttribute("aria-hidden", "true");
        offcanvasEl.style.visibility = "hidden";
        offcanvasEl.style.display = "none";
      }

      // ✅ Remove Bootstrap backdrops and modal-related classes
      const backdrops = document.querySelectorAll(".offcanvas-backdrop");
      backdrops.forEach((b) => b.remove());
      document.body.classList.remove("modal-open");
    } else {
      // ✅ Reset visibility completely after modal closes to fix first click issue
      offcanvasEl.classList.remove("show");
      offcanvasEl.removeAttribute("style");
      offcanvasEl.setAttribute("aria-hidden", "true");

      // 🔑 Force reflow to allow Bootstrap to re-trigger properly
      void offcanvasEl.offsetHeight;
    }
  }, [isOpen]);




  const handleSocialClick = (platform) => {
    setActivePlatform(platform);
    setActiveSection("fbDetails");
    setInputURL(socialURLs[platform]);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to`, value); // Debug print
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setProfileImage("images/user.webp");
  };

  const handleContactSave = () => {
    // Implement save logic here if needed
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose} className="xxl-modal">
      <div className="mediaProfileModal">
        <div className="media-profile">
          {/* LEFT */}
          <div className="pro-details">
            <div className="user-dt">
              <div className="pro-img">
                <img id="profileImage" src={profileImage} alt="Profile" />
              </div>
              <div className="edit-rmv mt-2">
                <label
                  htmlFor="fileInput"
                  className="fw-medium"
                  style={{ cursor: "pointer" }}
                >
                  Edit Photo
                </label>
                <a
                  href="#"
                  className="fw-medium green-title"
                  onClick={handleRemoveImage}
                >
                  Remove
                </a>
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageUpload}
                hidden
              />
            </div>

            <div className="info-dt mt-3 text-center">
              {contactInfo.name && <div className="name">{contactInfo.name}</div>}
              {contactInfo.title && (
                <div className="title">{contactInfo.title}</div>
              )}
              {contactInfo.phone && <div className="phone">{contactInfo.phone}</div>}
              {contactInfo.email && <div className="email">{contactInfo.email}</div>}
              {contactInfo.website && (
                <div className="website">{contactInfo.website}</div>
              )}
            </div>

            <div className="type-of-group mt-5">
              <div
                className="tp-it mediaBtn"
                onClick={() => {
                  setActiveSection("mediaDetails");
                  setActivePlatform("Media Profile");
                }}
              >
                <div className="radio-checkmark">
                  <div
                    className={classNames("radio-input", {
                      activeLabelInput: activeSection === "mediaDetails",
                    })}
                  ></div>
                  <span>Media Profile</span>
                </div>
              </div>

              <div className="social-buttons">
                {socialPlatforms.map((platform) => (
                  <div
                    key={platform}
                    className={`tp-it ${platform
                      .toLowerCase()
                      .replace(/[^a-z]/g, "")}Btn`}
                    onClick={() => handleSocialClick(platform)}
                  >
                    <div className="radio-checkmark">
                      <div
                        className={classNames("radio-input", {
                          activeLabelInput: activePlatform === platform,
                        })}
                      ></div>
                      <span>{platform}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-details">
            {activeSection === "mediaDetails" && (
              <div className="contact-information mediaDetails details-itm activeDetItem">
                <div className="main-head-title">Contact Information</div>

                <div className="mt-3 all-input">
                  <div className="input-wrapper">
                    {/* Display Name */}
                    <div className="inp-itm">
                      <div className="lb-in">
                        <label>Display Name</label>
                        <input
                          className="name"
                          type="text"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleContactChange}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="inp-itm">
                      <div className="lb-in">
                        <label>Title</label>
                        <input
                          className="title"
                          type="text"
                          name="title"
                          value={contactInfo.title}
                          onChange={handleContactChange}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="inp-itm">
                      <div className="lb-in">
                        <label>Email</label>
                        <input
                          className="email"
                          type="text"
                          name="email"
                          value={contactInfo.email}
                          onChange={handleContactChange}
                        />
                      </div>
                    </div>

                    {/* Website */}
                    <div className="inp-itm website">
                      <div className="lb-in">
                        <label>Website</label>
                        <input
                          className="website-input"
                          type="text"
                          name="website"
                          value={contactInfo.website}
                          onChange={handleContactChange}
                        />
                      </div>
                      <div className="preview pt-3">{contactInfo.website}</div>
                    </div>

                    {/* Phone */}
                    <div className="inp-itm">
                      <div className="lb-in">
                        <label>Phone</label>
                        <input
                          className="phone"
                          type="text"
                          name="phone"
                          value={contactInfo.phone}
                          onChange={handleContactChange}
                        />
                      </div>
                    </div>

                    {/* Language */}
                    <div className="inp-itm">
                      <div className="lb-in">
                        <label>Language</label>
                        <select
                          name="language"
                          value={contactInfo.language}
                          onChange={handleContactChange}
                        >
                          <option value="ENG">ENG</option>
                          <option value="SPANISH">SPANISH</option>
                          <option value="CHINESE">CHINESE</option>
                        </select>
                      </div>
                    </div>

                    {/* Timezone */}
                    <div className="inp-itm">
                      <div className="lb-in">
                        <label>Time Zone</label>
                        <select
                          name="timezone"
                          value={contactInfo.timezone}
                          onChange={handleContactChange}
                        >
                          <option value="">Select Timezone</option>
                          <option value="UTC+6">UTC+6 (Dhaka)</option>
                          <option value="UTC+5">UTC+5 (Pakistan)</option>
                          <option value="UTC+1">UTC+1 (Germany)</option>
                        </select>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="inp-itm address">
                      <div className="lb-in">
                        <label>Address</label>
                        <input
                          type="text"
                          name="address"
                          value={contactInfo.address}
                          onChange={handleContactChange}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4">
                    This information will appear on all published IPAR Media Center
                    documents, including clickable email and website links. Updates
                    will only apply to future materials and won’t affect previously
                    published content.
                  </p>

                  <div className="btn-sec text-end mt-4">
                    <button className="tsp-btn" onClick={onClose}>
                      Cancel
                    </button>
                    <button className="black-btn" onClick={handleContactSave}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "fbDetails" && (
              <div className="facebook details-itm fbDetails activeDetItem">
                <div className="social-details">
                  <div className="main-head-title">{activePlatform}</div>
                  <div className="input-wrapper mt-3">
                    <div className="lb-in">
                      <label className="mb-1">{`${activePlatform} Username URL`}</label>
                      <div className="inp">
                        <input
                          type="text"
                          value={inputURL}
                          onChange={(e) => setInputURL(e.target.value)}
                        />
                        <button className="black-btn saveBtn">Save</button>
                      </div>
                    </div>
                  </div>

                  <div className="connect-section mt-5">
                    <h5>Connect {activePlatform}</h5>
                    <p>
                      Click below and follow the prompts to connect your{" "}
                      <a
                        href={inputURL}
                        className="social-link green-title"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activePlatform}
                      </a>{" "}
                      account.
                    </p>
                  </div>

                  <div className="btn-sec mt-4 text-end">
                    <button className="black-btn connectBtn">
                      Connect {activePlatform}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MediaProfileModal;
