// ✅ Full SendDetails Component with Working Step Progress and Dropdowns

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Modal from "../../common/PopupModal";
import RecipientModal from "./ReciepentModal";

const countryOptions = [
  { flag: "../flag/usa.webp", name: "United States" },
  { flag: "../flag/United-Kingdom.png", name: "United Kingdom" },
  { flag: "../flag/canada.png", name: "Canada" },
  { flag: "../flag/australia.webp", name: "Australia" },
  { flag: "../flag/india.png", name: "India" },
  { flag: "../flag/france.png", name: "France" },
  { flag: "../flag/germany.webp", name: "Germany" },
];

const SendDetails = () => {
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [selectedPayMethod, setSelectedPayMethod] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [progress, setProgress] = useState(0);

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Point");

  const [receiveCurrencyOpen, setReceiveCurrencyOpen] = useState(false);
  const [receiveCurrency, setReceiveCurrency] = useState("PV");

  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[2]); // Default: Canada

  useEffect(() => {
    let newProgress = 0;

    if (sendAmount.trim()) {
      newProgress = 25;

      if (receiveAmount.trim()) {
        newProgress = 50;

        if (selectedPayMethod) {
          newProgress = 75;

          if (selectedRecipient) {
            newProgress = 100;
          }
        }
      }
    }

    setProgress(newProgress);
    document.documentElement.style.setProperty("--progress-width", `${newProgress}%`);
  })

  // For the Reciepent Modal
  const [recipentModal, setRecipentModal] = useState(false);


  return (
    <div className="send-details activeEwallet">
      <div className="send-header">
        <div className={progress >= 25 ? "active" : ""}>Amount</div>
        <div className={progress >= 50 ? "active" : ""}>Recipient</div>
        <div className={progress >= 75 ? "active" : ""}>Review</div>
        <div className={progress === 100 ? "active" : ""}>Send</div>
      </div>

      <div className="sender-details mt-3">
        <div className="send">
          <div className="header-tt">You Send</div>
          <div className="p-lg-3 p-2">
            <p className="subtitle">You Send</p>
            <div className="left">
              <div className="currency">
                <div className="select-box">
                  <div className="select-btn" onClick={() => setCurrencyOpen(!currencyOpen)}>
                    <span className="select-text">{selectedCurrency}</span>
                    <div className="arrowIcon">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                  {currencyOpen && (
                    <div className="options-list">
                      {["USD", "Point", "PV"].map((cur) => (
                        <div
                          className="option-item"
                          key={cur}
                          onClick={() => {
                            setSelectedCurrency(cur);
                            setCurrencyOpen(false);
                          }}
                        >
                          {cur}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="amount">
                <input type="text" placeholder="0.00" value={sendAmount} onChange={(e) => setSendAmount(e.target.value)} />
                <p>Enter an amount in any currency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="receive">
          <div className="header-tt">Recipient</div>
          <div className="p-lg-3 p-2">
            <p className="subtitle">Recipient Country / Currency</p>
            <div className="left">
              <div className="currency">
                <div className="dropdown" onClick={() => setCountryOpen(!countryOpen)}>
                  <div className="selected">
                    <img src={selectedCountry.flag} alt="Flag" />
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  {countryOpen && (
                    <div className="dropdown-list">
                      {countryOptions.map((option) => (
                        <div
                          className="option"
                          key={option.name}
                          onClick={() => {
                            setSelectedCountry(option);
                            setCountryOpen(false);
                          }}
                        >
                          <img src={option.flag} alt={option.name} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="select-box">
                  <div className="select-btn" onClick={() => setReceiveCurrencyOpen(!receiveCurrencyOpen)}>
                    <span className="select-text">{receiveCurrency}</span>
                    <div className="arrowIcon">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                  {receiveCurrencyOpen && (
                    <div className="options-list">
                      {["USD", "Point", "PV"].map((cur) => (
                        <div
                          className="option-item"
                          key={cur}
                          onClick={() => {
                            setReceiveCurrency(cur);
                            setReceiveCurrencyOpen(false);
                          }}
                        >
                          {cur}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="amount">
                <input type="text" placeholder="0.00" value={receiveAmount} onChange={(e) => setReceiveAmount(e.target.value)} />
                <p>Enter an amount in any currency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 total-fee">
        Total Fees ( Bank + Our fee) <b>0.00</b>
      </p>

      <div className="paying-with-details">
        <div className="paying-with">
          <div className="header-tt">Paying with</div>
          {["Connected bank account (ACH)", "Debit Card", "Credit Card", "Your Balance"].map((method) => (
            <div
              key={method}
              className={classNames("pay-itm", { activePayItm: selectedPayMethod === method })}
              onClick={() => setSelectedPayMethod(method)}
            >
              {method}
            </div>
          ))}
        </div>
        <div className="details">Here are the ways you can pay for this transfer</div>
      </div>

      <div className="add-recipient mt-4">
        <div className="header-tt">Add a recipient</div>
        <div className="recipient-select">
          <div className={classNames("recipient-itm", { activePayItm: selectedRecipient === "IparID" })} onClick={() => setSelectedRecipient("IparID")}>
            Search & find them by Ipar ID, email, phone number
          </div>
          <div className={classNames("recipient-itm", { activePayItm: selectedRecipient === "GirlsHope" })} onClick={() => setSelectedRecipient("GirlsHope")}>
            Girls' Hope Donations
          </div>
        </div>
      </div>


      <div className="recipient-modal mt-3">
        <strong>Added recipient</strong>
        <div className="mt-3">
          <div className="radio-checkmark">
            <div className="radio-input activeLabelInput"></div>
            <span>Murzamatova Kanayim</span>
          </div>
        </div>

        <div className="mt-3">
          <div className="radio-checkmark">
            <div className="radio-input"></div>
            <span>Murzamatova Kanayim</span>
          </div>
        </div>

        <div className="add-credit mt-3 green-title" onClick={() => setRecipentModal(true)}>
          <span>+ Add a recipient
            <i className="ri-arrow-right-s-line"></i></span>
        </div>
      </div>

      {/* payment Modal */}
      <RecipientModal isOpen={recipentModal} onClose={() => setRecipentModal(false)} />

    </div>
  );
};

export default SendDetails;
