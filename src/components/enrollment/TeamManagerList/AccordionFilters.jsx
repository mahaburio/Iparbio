
import React, { useRef, useState } from "react";
import TeamAccordion from "../TeamManagerList/TeamAccordion";
import { DisplayOptions } from "./DisplayOptions";
import DualRangeSlider from "./MultiRangeSlider";
import DatePicker from "../../input/DatePicker";
import { FaCalendarDays } from "react-icons/fa6";
import PreferredCustomerSection from "./PreferredCustomerSection";
import Modal from "../../common/PopupModal";
import FilterModal from "./FilterModal";
import TitleModal from "./TitleModal";
import LanguageLocationModal from "./LanguageLocation";


const FilterPanel = () => {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // For Sponsored
  const sponsoredStartRef = useRef(null);
  const sponsoredEndRef = useRef(null);
  const [sponsoredStartDate, setSponsoredStartDate] = useState(null);
  const [sponsoredEndDate, setSponsoredEndDate] = useState(null);


  // For Purchased
  const purchasesStartRef = useRef(null);
  const purchasesEndRef = useRef(null);
  const [purchasesStartDate, setPurchasesStartDate] = useState(null);
  const [purchasesEndDate, setPurchasesEndDate] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const [isTitleModalOpen, setTitleModalOpen] = useState(false);


  const [selectedTitles, setSelectedTitles] = useState([
    "Hold",
    "Level 4",
    "Gold Director",
    "4 Star",
  ]);



  const [selectedType, setSelectedType] = useState("Retail Customer");

  const customerTypes = [
    "Retail Customer",
    "Preferred Customer",
    "Influencer",
    "IBA",
  ];

  const [selectedContact, setSelectedContact] = useState("Email");
  const contactOptions = ["Email", "Phone"];

  const [selected, setSelected] = useState("On Subscription Order");

  const options = [
    "On Subscription Order",
    "Cancelled Subscription Order",
    "Subscription Order On Hold",
  ];
  const teamFilterItems = [
    {
      title: "Display Options",
      content: <DisplayOptions />,
    },
    {
      title: "Customer Type",
      content: (
        <div className="tm-it-body px-2">
          <div className="type-of-customer">
            {customerTypes.map((type) => (
              <div className="tp-it" key={type}>
                <div
                  className="radio-checkmark"
                  onClick={() => setSelectedType(type)}
                >
                  <div
                    className={`radio-input ${selectedType === type ? "activeLabelInput" : ""
                      }`}
                  ></div>
                  <span>{type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "Contact Options",
      content: (
        <div>
          <div className="tm-it-body px-2">
            <div className="type-of-contact">
              {contactOptions.map((option) => (
                <div className="tp-it" key={option}>
                  <div
                    className="radio-checkmark"
                    onClick={() => setSelectedContact(option)}
                  >
                    <div
                      className={`radio-input ${selectedContact === option ? "activeLabelInput" : ""
                        }`}
                    />
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Volume Type",
      content: (
        <div>
          <div className="pv-amnt">
            <h5 className="pb-2 mt-2">PV Amount</h5>
            <DualRangeSlider min={0} max={1500} initialFrom={142} initialTo={1050} />
          </div>
          <div className="estimate-cpv">
            <h5 className="pb-2 mt-2">Estimated CPV</h5>
            <DualRangeSlider min={0} max={1250} initialFrom={142} initialTo={1040} />
          </div>
          <div className="pv-nedded">
            <h5 className="pb-2 mt-2">PV Nedded</h5>
            <DualRangeSlider min={0} max={6000} initialFrom={500} initialTo={5000} />
          </div>
        </div>
      ),
    },
    {
      title: "Subscription Order",
      content: (
        <div className="tm-it-body px-2">
          <div className="type-of-subscription">
            {options.map((option) => (
              <div className="tp-it" key={option}>
                <div
                  className="radio-checkmark"
                  onClick={() => setSelected(option)}
                >
                  <div
                    className={`radio-input ${selected === option ? "activeLabelInput" : ""
                      }`}
                  />
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "Title",
      content: (
        <div className="tm-it-body titlebody px-2">
          <p>Title Date</p>
          <div className="date-pick d-flex justify-content-between gap-2 mb-3">
            {/* Start Date */}
            <div className="start d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                <span>Start Date</span>
                <div
                  className="calendar-icon"
                  onClick={() => startDateRef.current?.open()}
                  style={{ cursor: "pointer" }}
                >
                  <FaCalendarDays />
                </div>
              </div>
              <div className="input-date">
                <DatePicker
                  ref={startDateRef}
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>

            {/* End Date */}
            <div className="end d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                <span>End Date</span>
                <div
                  className="calendar-icon"
                  onClick={() => endDateRef.current?.open()}
                  style={{ cursor: "pointer" }}
                >
                  <FaCalendarDays />
                </div>
              </div>
              <div className="input-date">
                <DatePicker
                  ref={endDateRef}
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <span>Title</span>
          </div>
          <div className="btn-sec text-center mb-3 " onClick={() => { setTitleModalOpen(true) }}>
            <button className="green-btn green-btn-sm">{selectedTitles.length} Selected</button>
          </div>
        </div>
      ),
    },

    {
      title: "Sponsored",
      content: (
        <div className="tm-it-body px-2">
          <p>Application Date</p>
          <div className="date-pick d-flex justify-content-between gap-2 mb-3">
            {/* Start Date */}
            <div className="start d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                <span>Start Date</span>
                <div
                  className="calendar-icon"
                  onClick={() => sponsoredStartRef.current?.open()}
                  style={{ cursor: "pointer" }}
                >
                  <FaCalendarDays />
                </div>
              </div>
              <div className="input-date">
                <DatePicker
                  ref={sponsoredStartRef}
                  value={sponsoredStartDate}
                  onChange={(date) => setSponsoredStartDate(date)}
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>

            {/* End Date */}
            <div className="end d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                <span>End Date</span>
                <div
                  className="calendar-icon"
                  onClick={() => sponsoredEndRef.current?.open()}
                  style={{ cursor: "pointer" }}
                >
                  <FaCalendarDays />
                </div>
              </div>
              <div className="input-date">
                <DatePicker
                  ref={sponsoredEndRef}
                  value={sponsoredEndDate}
                  onChange={(date) => setSponsoredEndDate(date)}
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Preferred Customer",
      content: <PreferredCustomerSection />,
    },


    {
      title: "Purchases",
      content: (
        <div className="tm-it-body px-2">
          <p className="">Last Purchases Date</p>
          <div className="date-pick d-flex justify-content-between gap-2 mb-3">
            {/* Start Date */}
            <div className="start d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                <span>Start Date</span>
                <div
                  className="calendar-icon"
                  onClick={() => purchasesStartRef.current?.open()}
                  style={{ cursor: "pointer" }}
                >
                  <FaCalendarDays />
                </div>
              </div>
              <div className="input-date">
                <DatePicker
                  ref={purchasesStartRef}
                  value={purchasesStartDate}
                  onChange={(date) => setPurchasesStartDate(date)}
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>

            {/* End Date */}
            <div className="end d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between px-2 gap-1">
                <span>End Date</span>
                <div
                  className="calendar-icon"
                  onClick={() => purchasesEndRef.current?.open()}
                  style={{ cursor: "pointer" }}
                >
                  <FaCalendarDays />
                </div>
              </div>
              <div className="input-date">
                <DatePicker
                  ref={purchasesEndRef}
                  value={purchasesEndDate}
                  onChange={(date) => setPurchasesEndDate(date)}
                />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Language/Location",
      content: <LanguageLocationModal />,
    },

    {
      title: "Add new filter",
      content: (
        <div className="tm-it-body px-2">
          <div className="btn-sec text-center mb-3">
            <button
              className="green-btn green-btn-sm"
              onClick={() => setModalOpen(true)}
            >
              Add new filter
            </button>
          </div>
        </div>
      ),
    },

  ];

  return (
    <>
      <TeamAccordion items={teamFilterItems} />

      <Modal className="large-modal" isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <>
          <FilterModal />
        </>
      </Modal>

      <Modal className="p-0" isOpen={isTitleModalOpen} onClose={() => setTitleModalOpen(false)}>
        <TitleModal
          selectedTitles={selectedTitles}
          setSelectedTitles={setSelectedTitles}
        />
      </Modal>
    </>
  );
};

export default FilterPanel;
