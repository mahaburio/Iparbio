import React, { useState, useEffect, useRef } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import { PhoneNumberInput } from '../../components/input/InputFields';
import Modal from '../../components/common/PopupModal';
import { FaEnvelope } from "react-icons/fa";
import MediaProfileModal from './MediaProfileModal';

const groupOptions = [
  'All Contacts',
  'Potential Customers',
  'Associates',
  'Preferred Customers',
];

const ResourcesContacts = () => {
  const [selectedGroup, setSelectedGroup] = useState('All Contacts');
  const [showNewContact, setShowNewContact] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [showContactView, setShowContactModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });


  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const contentRef = useRef(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };


  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isAccordionOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isAccordionOpen]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone } = formData;

    if (!firstName || !lastName || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    setContacts((prev) => [...prev, formData]);
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    setShowNewContact(false);
  };

  const openModal = (contact) => {
    setModalContent(contact);
    setShowContactModal(true);
  };

  const closeModal = () => {
    setShowContactModal(false);
    setModalContent(null);
  };



  // For Media Profile

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


  return (
    <div className="ipar_elite resource_contact">
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

      <section className="resource-wrapper mt-5">
        <div className="container divider">
          <div className="resource-aside-nav">
            <div className="resourceNav">
              <div className="forCollapse">
                <i className="ri-arrow-left-double-line"></i>
              </div>
              <div className="reourceItems">
                <div className="res-item" style={{ border: 'none' }}>
                  <div
                    className="itm-head d-flex align-items-center justify-content-between"
                    onClick={toggleAccordion}
                    style={{ cursor: 'pointer' }}
                  >
                    <span>Group</span>
                    <span
                      className={`arrowIcon fs-4 ${isAccordionOpen ? 'rotate' : ''}`}
                    >
                      <i className="ri-arrow-down-s-line"></i>
                    </span>
                  </div>
                  <div
                    ref={contentRef}
                    className="res-it-body resourceNavBodyActive px-2"
                  >
                    <div className="type-of-group">
                      {groupOptions.map((group) => (
                        <div
                          className="tp-it"
                          key={group}
                          onClick={() => handleGroupSelect(group)}
                        >
                          <div className="radio-checkmark">
                            <div
                              className={`radio-input ${selectedGroup === group ? 'activeLabelInput' : ''
                                }`}
                            ></div>
                            <span>{group}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-desc">
            <div className="row">
              <div className="col-lg-4 pe-lg-5 pe-auto">
                <div className="contacts-list">
                  <h5>Contacts</h5>
                  {contacts.map((contact, index) => (
                    <div key={index} className="cnt-it">
                      <div className="name">
                        <span className="firstName">{contact.firstName}</span>{' '}
                        <span className="lastName">{contact.lastName}</span>
                      </div>
                      <div className="view">
                        <a
                          href="#"
                          className="view-contact green-title"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal(contact);
                          }}
                        >
                          View
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-8 mt-lg-0 mt-5">
                <div
                  className="main-head-title"
                  id="addNewContact"
                  onClick={() => setShowNewContact(true)}
                  style={{ cursor: 'pointer' }}
                >
                  + Add New Contact
                </div>

                {showNewContact && (
                  <div className="input-section newContactSec mt-4">
                    <form onSubmit={handleSaveContact}>
                      <div className="input-wrapper">
                        <div className="lb-in">
                          <label>First Name</label>
                          <input
                            name="firstName"
                            className="firstName"
                            type="text"
                            placeholder="*First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="lb-in">
                          <label>Last Name</label>
                          <input
                            name="lastName"
                            className="lastName"
                            type="text"
                            placeholder="*Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="single-input">
                          <div className="lb-in">
                            <label>Email</label>
                            <input
                              name="email"
                              className="emailInput"
                              type="email"
                              placeholder="*Email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="single-input">
                          <div className="lb-in">
                            <label>Primary Phone</label>
                            <PhoneNumberInput
                              value={formData.phone}
                              onChange={(phone) =>
                                setFormData((prev) => ({ ...prev, phone }))
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="btn-sec mt-4 text-end">
                        <button
                          type="button"
                          className="tsp-btn"
                          onClick={() => setShowNewContact(false)}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="black-btn saveBtn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Modal */}
      {showContactView && modalContent && (
        <Modal isOpen={showContactView} onClose={closeModal} className="modal-small  ">
          <div className="contactsViewModal">
            <div className="contact-view-info p-3">
              <div className="name">
                <span className="firstName">{modalContent.firstName}</span>{' '}
                <span className="lastName">{modalContent.lastName}</span>
              </div>
              <div className="email mt-3 d-flex gap-3 align-items-center">
                <div>
                  <b>Email: </b>{' '}
                  <span className="emailView">{modalContent.email}</span>
                </div>
                <a
                  className="emailIcon"
                  href={`mailto:${modalContent.email}`}
                >
                  <FaEnvelope />
                </a>
              </div>
              <div className="phone mt-3">
                <b>Primary Phone: </b>{' '}
                <span className="phoneView">{modalContent.phone}</span>
              </div>
            </div>
          </div>
        </Modal>

      )}
    </div>
  );
};

export default ResourcesContacts;
