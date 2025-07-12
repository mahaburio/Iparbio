import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";

const WalletHub = ({ activeTab, setActiveTab }) => {
  const [showTransfer, setShowTransfer] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab); 
  };

  return (
    <div className="wallet-hub">
      <div className="acc-hub">
        <h5>Account</h5>
        <div className="account-subhub ps-2 mt-2">
          <li
            className={classNames("summeryBtn", {
              activeWalletHub: activeTab === "summary",
            })}
            onClick={() => handleTabClick("summary")}
          >
            Summary
          </li>

          <li
            className="transfer-toggle d-flex align-items-center justify-content-between"
            onClick={() => setShowTransfer(!showTransfer)}
          >
            <span>Transfer</span>
            <RiArrowDownSLine
              className={classNames("toggle-arrow", { rotate: showTransfer })}
            />
          </li>

          <div className={classNames("transfer-hub", { show: showTransfer })}>
            <li
              className={classNames("sendBtn ps-4", {
                activeWalletHub: activeTab === "send",
              })}
              onClick={() => handleTabClick("send")}
            >
              Send
            </li>
            <li
              className={classNames("cashboutBtn ps-4", {
                activeWalletHub: activeTab === "cashout",
              })}
              onClick={() => handleTabClick("cashout")}
            >
              Cashout
            </li>
          </div>

          <li
            className={classNames("statementBtn", {
              activeWalletHub: activeTab === "statement",
            })}
            onClick={() => handleTabClick("statement")}
          >
            Statement
          </li>
        </div>
      </div>

      <div className="setting-hub mt-4">
        <h5>Setting</h5>
        <div className="setting-subhub ps-2 mt-2">
          <li
            className={classNames("changePasswordBtn", {
              activeWalletHub: activeTab === "changePassword",
            })}
            onClick={() => handleTabClick("changePassword")}
          >
            Change Password
          </li>
          <li
            className={classNames("modifyProfileBtn", {
              activeWalletHub: activeTab === "modifyProfile",
            })}
            onClick={() => handleTabClick("modifyProfile")}
          >
            Modify Profile
          </li>
        </div>
      </div>
    </div>
  );
};

export default WalletHub;
