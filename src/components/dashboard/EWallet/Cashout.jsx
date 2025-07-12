import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";
import Modal from "../../common/PopupModal";

import DatePicker from '../../input/DatePicker'
import AddPaymentContent from "../../common/AddPaymentContent";

const currencies = ["USD", "Point", "PV"];
const dateOptions = [
  "Past 7 days",
  "Past 30 days",
  "Past 3 months",
  "Past 6 months",
  "Last year",
];

const initialCashouts = [
  {
    status: "Completed",
    to: "Trump D.",
    amount: "106.05",
    requestDate: "02/04/25",
    type: "Cashout",
    confirmation: "9809528",
  },
  {
    status: "Pending",
    to: "48********666",
    amount: "106.05",
    requestDate: "02/04/25",
    type: "Send",
    confirmation: "9809528",
  },
  // Add more initial rows if needed
];

const Cashout = () => {
  // Modal open state
  const [modalOpen, setModalOpen] = useState(false);

  // For the payment Modal
  const [paymentModalOpen, setPaymentModal] = useState(false);


  // Dropdown for filter date range
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDateOption, setSelectedDateOption] = useState("Past 3 months");
  const dropdownRef = useRef();

  // Modal currency dropdown
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const currencyDropdownRef = useRef();

  // Form inputs for modal
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [date, setDate] = useState(new Date());

  // Cashout table data
  const [cashouts, setCashouts] = useState(initialCashouts);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(e.target)) {
        setCurrencyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle filter date selection (optional: you can filter data here)
  const handleDateOptionSelect = (option) => {
    setSelectedDateOption(option);
    setDropdownOpen(false);
  };

  // Handle currency selection in modal
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyDropdownOpen(false);
  };

  // Handle schedule button - add new cashout entry
  const handleSchedule = () => {
    if (!amount || !balance || !date) {
      alert("Please fill all fields");
      return;
    }

    const newCashout = {
      status: "Pending",
      to: "************",
      amount,
      requestDate: date.toLocaleDateString(),
      type: "Cashout",
      confirmation: Math.random().toString(36).substring(2, 10), // Random confirmation id
    };

    setCashouts([newCashout, ...cashouts]);

    // Reset form and close modal
    setAmount("");
    setBalance("");
    setDate(new Date());
    setSelectedCurrency("USD");
    setModalOpen(false);
  };

  return (
    <div className="cashout activeEwallet">
      {/* + Created a Cash out Request */}
      <div
        className="add-credit mt-3"
        onClick={() => setModalOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <span>
          + Created a Cash out Request <RiArrowDownSLine />
        </span>
      </div>

      {/* Date range dropdown */}
      <div className="select-box mt-3" ref={dropdownRef}>
        <div className="select-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span className="select-text">{selectedDateOption}</span>
          <div className="arrowIcon">
            <RiArrowDownSLine className={classNames({ rotate: dropdownOpen })} />
          </div>
        </div>
        {dropdownOpen && (
          <div className="options-list">
            {dateOptions.map((option) => (
              <div
                key={option}
                className="option-item"
                onClick={() => handleDateOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cashout table */}
      <div className="coupons-table mt-3" id="mainTableList">
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>To</th>
              <th>Amount</th>
              <th>Request Date</th>
              <th>Type</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {cashouts.map((item, idx) => (
              <tr key={idx}>
                <td>{item.status}</td>
                <td>{item.to}</td>
                <td>{item.amount}</td>
                <td>{item.requestDate}</td>
                <td>{item.type}</td>
                <td>{item.confirmation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recharge button */}
      <div className="btn-sec mt-5">
        <button className="black-btn">Recharge</button>
      </div>


      <div class="order-w-details">
        <div class="payment-mt mt-3">
          <div class="ck-ct gf-ct py-2 pb-3 px-2">
            <div class="gf-cd-ct d-flex flex-lg-row flex-md-row flex-sm-column flex-column align-items-lg-center align-items-md-center align-items-sm-start align-items-start gap-3">
              <div class="img">
                <img src="../images/ipar-gift-card.webp" alt="Ipar Gift Card" />
              </div>
              <div class="gift-dt">
                <div>Got a reason to celebrate?</div>
                <div>Select, Send – It’s that simple!</div>
                <i>Add Ipar eGift card</i>
              </div>
            </div>

            <div class="promo-cd mt-2">
              <div class="promo-body d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-3 align-items-lg-center align-items-md-center align-items-sm-start align-items-start justify-content-between mt-2">
                <span class="pr-tt">Enter a gift card, voucher or promotional
                  code</span>
                <div class="d-flex align-items-center gap-3">
                  <input type="text" />
                  <button class="black-btn">Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div class="add-credit mt-3 ps-3" onClick={() => setPaymentModal(true)}>
            <span>+ Add payment <i class="ri-arrow-right-s-line"></i></span>
          </div>
        </div>
      </div>


      {/* payment Modal */}
      <Modal isOpen={paymentModalOpen} onClose={() => setPaymentModal(false)}>
        <AddPaymentContent />
      </Modal>

      {/* Cashout Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} className="cashout-modal">
        <div className="cashoutModal">
          <div className="cashout-wrapper pt-4">
            {/* Currency dropdown */}
            <div className="cashout-input-wrapper" ref={currencyDropdownRef}>
              <label>From*</label><br />
              <div className="select-box">
                <div
                  className="select-btn"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                >
                  <span className="select-text">{selectedCurrency}</span>
                  <div className="arrowIcon">
                    <RiArrowDownSLine className={classNames({ rotate: currencyDropdownOpen })} />
                  </div>
                </div>
                {currencyDropdownOpen && (
                  <div className="options-list">
                    {currencies.map((cur) => (
                      <div
                        key={cur}
                        className="option-item"
                        onClick={() => handleCurrencySelect(cur)}
                      >
                        {cur}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Amount */}
            <div className="cashout-input-wrapper">
              <label>Amount*</label><br />
              <input
                type="number"
                id="cashOutAmount"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* Balance */}
            <div className="cashout-input-wrapper">
              <label>Balance*</label><br />
              <input
                type="number"
                id="cashOutBalance"
                placeholder="0.00"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </div>

            {/* Date */}
            <div className="cashout-input-wrapper">
              <label>Date*</label><br />
              <div className="input-date d-flex align-items-center">
                <DatePicker arrowIcon={true} />
              </div>
            </div>
          </div>

          <p className="mt-5">
            Total Fees ( Bank + Our fee) <b>0.00</b>
          </p>

          <div className="btn-sec text-end mt-4">
            <button className="tsp-btn" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button className="green-btn" onClick={handleSchedule}>
              Schedule
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cashout;
