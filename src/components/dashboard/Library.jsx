import React, { useState, useEffect, useRef } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import MediaProfileModal from '../../pages/dashboard/MediaProfileModal';
import SearchDropdown from './SearchBar';

import { RiArrowDownSLine, RiArrowLeftDoubleLine, RiTwitterXFill, RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import { FaLink, FaEnvelope, } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

import Modal from '../common/PopupModal';

const data = [
  {
    title: "Business",
    options: ["Business", "Incentives & Recognition"],
  },
  {
    title: "Campaigns",
    options: [
      "Suncella 12-Day Program",
      "Be Healthy 30 -Day Program",
      "Detox 10-Day Program",
      "Event",
    ],
  },
  {
    title: "Media Type",
    options: [
      "All",
      "Image",
      "Pdf",
      "Microsoft PowerPoint",
      "Video",
    ],
  },
  {
    title: "Products",
    options: ["Nutrivero", "Suncella", "HUNAI", "Vertal Orbis", "All"],
  },
  {
    title: "Language",
    options: ["English", "Español", "繁體中文", "簡體中文"],
  },
  {
    title: "Region",
    options: [
      "All",
      "Asia Pacific",
      "Central Asia",
      "Russia",
      "Canada",
      "Indonesia",
      "Malaysia",
      "China",
      "United States",
    ],
  },
];

const dummyItems = [
  {
    id: 1,
    type: "image",
    src: "images/media-center.webp",
    title: "The Ipar Difference – PowerPoint Presentation",
    label: "Microsoft PowerPoint",
    language: "Chinese Traditional",
    region: "US",
    createdAt: "5 hours ago",
    desc: "This is a default description for the item. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A unde doloribus dicta quos reprehenderit, provident placeat enim est veniam natus autem, iusto esse, obcaecati nulla modi magni quis? Dolorem, sint eum eaque impedit recusandae commodi ex dicta illum minima esse excepturi obcaecati rem ipsam cumque modi similique, tempore cupiditate necessitatibus?",
  },

  {
    id: 2,
    type: "image",
    src: "images/7-days-Photoroom.webp",
    title: "Active Nutrition 10-Day Program – Plate Portion Guide",
    label: "Image - jpg",
    language: "Chinese Traditional",
    region: "Canada",
    createdAt: "5 hours ago",
    desc: "Default description for the second item.",
  },
];

const Library = () => {
  // Media Profile Modal
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

  const options = [
    'All',
    'Image Only',
    'Presentation',
    'Print Tool',
    'Social Shareable',
    'Logo/Branding',
    'Video',
    'e Card'
  ];

  // State for filtering and UI
  const [selectedOption, setSelectedOption] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const contentRefs = useRef({});
  const [activeTab, setActiveTab] = useState("library");
  const [isGridView, setIsGridView] = useState(true);
  const [myLibraryItems, setMyLibraryItems] = useState(dummyItems);

  // State for detail modal and editing
  const [expandItem, setExpandItem] = useState(null);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [detailTab, setDetailTab] = useState("info");
  const [editDetailsMode, setEditDetailsMode] = useState(false);

  // Editable detail states
  const [detailTitle, setDetailTitle] = useState("");
  const [detailDesc, setDetailDesc] = useState("");
  const [detailImage, setDetailImage] = useState("");

  const [isFavorite, setIsFavorite] = useState(false);
  const [isArchived, setIsArchived] = useState(false);

  // Accordion toggle
  const toggleSection = (title) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  // Select filter option
  const handleSelect = (section, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [section]: option,
    }));
  };

  useEffect(() => {
    Object.entries(contentRefs.current).forEach(([title, el]) => {
      if (el) {
        el.style.maxHeight = expanded === title ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [expanded]);

  const openDetailFromExpand = (item) => {
    // First set the detail modal data — independent of `expandItem`
    setDetailTitle(item.title);
    setDetailDesc(item.desc || "No description available.");
    setDetailImage(item.src);
    setEditDetailsMode(false);
    setIsFavorite(false);
    setIsArchived(false);
    setShowDetailModal(true);


  };

  // Save changes from detail modal edit mode
  const handleDetailSave = () => {
    if (!expandItem) return;

    const updated = myLibraryItems.map((item) =>
      item.id === expandItem.id
        ? {
          ...item,
          title: detailTitle,
          src: detailImage,
          desc: detailDesc,
        }
        : item
    );
    setMyLibraryItems(updated);
    setEditDetailsMode(false);
    setShowDetailModal(false);
  };


  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDetailImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  // Toggle favorite/archive states
  const toggleFavorite = () => setIsFavorite((prev) => !prev);
  const toggleArchive = () => setIsArchived((prev) => !prev);

  const fileInputRef = useRef(null);


  const mainTabs = ["info", "activity"];
  const emailTabs = ["customize", "preview"];

  const mainActiveIndex = mainTabs.indexOf(detailTab);
  const emailActiveIndex = emailTabs.indexOf(detailTab);

  

  return (
    <div className="ipar_elite">
      <HeaderDashboard
        NotifySection={false}
        isResourcePage={true}
        navResources={true}
        onMediaProfileClick={onMediaProfileClick}
      />

      <MediaProfileModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />

      <section className="resource-wrapper">
        <div className="container py-4">
          <div className="resource-header d-flex align-items-center justify-content-between">
            <div className="left d-flex gap-3 align-items-center">
              <SearchDropdown
                options={options}
                selectedOption={selectedOption}
                onOptionChange={setSelectedOption}
                searchValue={searchText}
                onSearchChange={setSearchText}
              />

              {/* === Tabs === */}
              <div className="nav-links d-flex gap-3">
                <div
                  className={`libraryBtn ${activeTab === 'library' ? 'activeNav' : ''}`}
                  onClick={() => setActiveTab('library')}
                >
                  Library
                </div>
                <div
                  className={`myLibraryBtn ${activeTab === 'myLibrary' ? 'activeNav' : ''}`}
                  onClick={() => setActiveTab('myLibrary')}
                >
                  My Library
                </div>
              </div>
            </div>

            {/* View Toggle */}
            <div className="library-grid-icon grid-flex mb-4">
              <div
                className={`grid ${isGridView ? "active" : ""}`}
                onClick={() => setIsGridView(true)}
              >
                <i className="ri-grid-fill"></i>
              </div>
              <div
                className={`list-view ${!isGridView ? "active" : ""}`}
                onClick={() => setIsGridView(false)}
              >
                <i className="ri-list-check"></i>
              </div>
            </div>
          </div>

          <div className="container divider">
            <div className="aside-nav">
              <div className="resourceNav">
                <div className="forCollapse">
                  <RiArrowLeftDoubleLine />
                </div>
                <div className="reourceItems">
                  {data.map((section, index) => (
                    <div className="res-item" key={index}>
                      <div
                        className="itm-head d-flex align-items-center justify-content-between"
                        onClick={() => toggleSection(section.title)}
                        style={{ cursor: "pointer" }}
                      >
                        <span>{section.title}</span>
                        <div
                          className={`arrowIcon fs-4 ${expanded === section.title ? "rotate" : ""}`}
                        >
                          <RiArrowDownSLine />
                        </div>
                      </div>
                      <div
                        className="res-it-body px-2"
                        ref={(el) => (contentRefs.current[section.title] = el)}
                        style={{ overflow: "hidden", transition: "max-height 0.3s ease" }}
                      >
                        <div className={`type-of-${section.title.toLowerCase().replace(/\s/g, "-")}`}>
                          {section.options.map((option, idx) => (
                            <div
                              className="tp-it"
                              key={idx}
                              onClick={() => handleSelect(section.title, option)}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="radio-checkmark">
                                <div
                                  className={`radio-input ${selectedOptions[section.title] === option ? "activeLabelInput" : ""}`}

                                ></div>
                                <span>{option}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Static Links */}
                  <div className="res-item">
                    <div className="itm-head">
                      <a href="#">Featured</a>
                    </div>
                  </div>
                  <div className="res-item">
                    <div className="itm-head">
                      <a href="#">Favorite</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-desc">
              {/* Content */}
              {activeTab === "library" && (
                <section className="videos-section">
                  <div className="container">
                    <p>No items in Library.</p>
                  </div>
                </section>
              )}

              {activeTab === "myLibrary" && (
                <section className="videos-section">
                  <div className="container">
                    {isGridView ? (
                      <div className="library-grid activeListView">
                        {myLibraryItems.map((item) => (
                          <div className="lb-itm" key={item.id}>
                            <div
                              className="img-vd-sec"
                              onClick={() => setExpandItem(item)}
                              style={{ cursor: "pointer" }}
                            >
                              {item.type === "video" ? (
                                <video src={item.src} controls />
                              ) : (
                                <img src={item.src} alt={item.title} />
                              )}
                              <div className="expandItem">
                                <i className="ri-expand-diagonal-s-line"></i>
                              </div>
                            </div>
                            <div className="itm-dsc p-2">
                              <div className="ht">{item.title}</div>
                              <div className="type">{item.label}</div>
                            </div>
                            <div className="add-list">
                              <i className="ri-heart-line"></i>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="listItems">
                        <div className="campaign-table">
                          <table>
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Language</th>
                                <th>Region</th>
                                <th>Create Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              {myLibraryItems.map((item) => (
                                <tr key={item.id}>
                                  <td>
                                    <a href="#">{item.title}</a>
                                    <div
                                      className="expandItem"
                                      onClick={() => setExpandItem(item)}

                                    >
                                      <i className="ri-expand-diagonal-s-line"></i>
                                    </div>
                                    <div className="add-list">
                                      <i className="ri-heart-line"></i>
                                    </div>
                                  </td>
                                  <td>{item.label}</td>
                                  <td>{item.language}</td>
                                  <td>{item.region}</td>
                                  <td>{item.createdAt}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Expand Modal */}
              {expandItem && (
                <Modal isOpen={true} onClose={() => setExpandItem(null)} className="xl-modal">
                  <div className="expandDetails p-3">
                    <div className="modal-body">
                      <div className="title-header d-flex justify-content-between align-items-center">
                        <div className="title-name">
                          <div className='fs-6 fw-medium'>{expandItem.title}</div>
                          <div>Type: {expandItem.label}</div>
                        </div>

                        <div className="btn-sec text-center">
                          <button
                            className="black-btn"
                            onClick={() => openDetailFromExpand(expandItem)}
                          >
                            Show Details
                          </button>
                        </div>
                      </div>

                      <div className="img-vd-sec mt-4">
                        {expandItem.type === "video" ? (
                          <video src={expandItem.src} controls style={{ width: "100%" }} />
                        ) : (
                          <img src={expandItem.src} alt={expandItem.title} style={{ width: "100%" }} />
                        )}
                      </div>
                    </div>
                  </div>
                </Modal>
              )}

              {/* Detail Modal */}

              {showDetailModal && (
                <Modal isOpen={true} onClose={() => setShowDetailModal(false)} className="xxl-modal">
                  <div className="myLibraryModal">
                    <div className="modal-content">
                      <div className="modal-header d-flex justify-content-between align-items-start">
                        <div className="activate-menu-section w-100">
                          <div className="d-flex justify-content-between">
                            <div
                              className="activation-menus main-menus"
                              style={{
                                '--after-left': `${mainActiveIndex * 50}%`
                              }}
                            >
                              {mainTabs.map((tab, index) => (
                                <div
                                  key={index}
                                  className={`act-menu ${detailTab === tab ? "active" : ""}`}
                                  onClick={() => setDetailTab(tab)}
                                >
                                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </div>
                              ))}
                            </div>

                            <div
                              className="activation-menus email-activation"
                              style={{
                                '--after-left': `${emailActiveIndex * 50}%`
                              }}
                            >
                              {emailTabs.map((tab, index) => (
                                <div
                                  key={index}
                                  className={`act-menu ${detailTab === tab ? "active" : ""}`}
                                  onClick={() => setDetailTab(tab)}
                                >
                                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </div>
                              ))}
                            </div>

                            <div class="icon-sec">
                              <div class="icon-itm copyLinkIcon">
                                <FaLink />
                              </div>
                              <div class="icon-itm emailIcon">
                                <FaEnvelope />

                              </div>
                              <div class="icon-itm twitterIcon">
                                <RiTwitterXFill />
                              </div>
                              <div class="icon-itm downloadIcon">
                                <IoMdDownload />

                              </div>
                              <div class="icon-itm facebookIcon">
                                <RiFacebookFill />
                              </div>
                              <div class="icon-itm instaIcon">
                                <RiInstagramLine />

                              </div>
                            </div>
                          </div>
                          <div className="title-txt mt-3">Shared: Post to Facebook</div>
                        </div>
                      </div>

                      <div className="modal-body">
                        <div class="id mt-2">Asset ID <span>665599</span></div>
                        <div className="main-title mt-2">

                          <div className="title-name">{detailTitle}</div>
                          <div
                            className={`add-favorite ${isFavorite ? "activeSavelist" : ""}`}
                            onClick={toggleFavorite}
                            style={{ cursor: "pointer" }}
                          >
                            <i className={isFavorite ? "ri-heart-fill" : "ri-heart-line"}></i> Add to favorites
                          </div>
                        </div>

                        <div className="setting-items mt-2 d-flex justify-content-between">
                          <div className="left">
                            {!editDetailsMode && (
                              <>
                                <div className="st-itm" onClick={() => setEditDetailsMode(true)} style={{ cursor: "pointer" }}>
                                  Edit Details
                                </div>
                                <div
                                  className={`st-itm ${isArchived ? "active" : ""}`}
                                  onClick={toggleArchive}
                                  style={{ cursor: "pointer" }}
                                >
                                  {isArchived ? "Unarchive" : "Archive"}
                                </div>

                                <div
                                  className={`st-itm ${isFavorite ? "active" : ""}`}
                                  onClick={toggleFavorite}
                                  style={{ cursor: "pointer" }}
                                >
                                  {isFavorite ? "Unfavorite" : "Favorite"}
                                </div>
                                <div class="st-itm">What’s Inside?</div>
                              </>
                            )}
                          </div>
                        </div>

                        {!editDetailsMode ? (
                          <div className="main-title-details mt-4 d-flex">
                            <div className="left me-4">
                              <div className="title-img">
                                <img src={detailImage} alt="Preview" />
                              </div>
                            </div>
                            <div className="right">
                              <div
                                className="title-dsc desc-sec"

                              >
                                {detailDesc || "No description available."}
                              </div>

                              <div class="post-details">
                                <div className="line-btm">
                                  <div className="line"></div>
                                  <div
                                    className={`add-favorite ${isFavorite ? "activeSavelist" : ""}`}
                                    onClick={toggleFavorite}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <i className={isFavorite ? "ri-heart-fill" : "ri-heart-line"}></i> Add to favorites
                                  </div>
                                </div>

                                <div class="bottom-sec">
                                  <div class="added">
                                    <div class="green-title fw-medium">Added</div>
                                    <div>May 09, 2025</div>
                                  </div>

                                  <div class="added">
                                    <div class="green-title fw-medium">Type</div>
                                    <div>Type: {expandItem.label}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="edit-wrapper d-flex mt-4 gap-4">
                            <div className="left">
                              <div className="title-img">
                                <img src={detailImage} alt="Editable" />
                              </div>
                              <div className="edit-photo mt-2">
                                <div
                                  className="edit"
                                  onClick={() => fileInputRef.current.click()}
                                  style={{ cursor: "pointer" }}
                                >
                                  Edit Photo
                                </div>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                  ref={fileInputRef}
                                  style={{ display: "none" }}
                                />
                              </div>
                            </div>
                            <div className="right flex-grow-1">
                              <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={detailTitle}
                                  onChange={(e) => setDetailTitle(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Description:</label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                  value={detailDesc}
                                  onChange={(e) => setDetailDesc(e.target.value)}
                                />
                              </div>
                              <div className="btn-sec text-end mt-3">
                                <button
                                  className="tsp-btn me-2"
                                  onClick={() => setEditDetailsMode(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="black-btn"
                                  onClick={handleDetailSave}
                                  disabled={!detailTitle.trim()}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>


                        )}


                      </div>

                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
