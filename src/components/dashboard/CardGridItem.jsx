
import React, { useState } from "react";

const CardGridItem = ({
  title,
  idLink,
  levelText,
  commissionAmount,
  commissionMsg,
  commissionLinkText,
  websiteUrl,
  websiteDropdownOptions = [],
  websiteBtnText,
  websiteBtnLink,
  inviteEarnUrl,
  inviteEarnDropdownOptions = [],
  inviteEarnBtnText,
  inviteEarnLinkText,
  onCopy,
  type, // 'welcome' | 'commission' | 'website' | 'inviteEarn'
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(
    type === "website" ? websiteUrl : inviteEarnUrl
  );

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const selectDropdown = (url) => {
    setSelectedUrl(url);
    setDropdownVisible(false);
  };

  return (
    <div
      className={`card-item ${type === "website" ? "website-item" : ""} ${
        type === "inviteEarn" ? "inviteEarn" : ""
      }`}
    >
      <h5>{title}</h5>

      {type === "welcome" && (
        <>
          <p className="id mt-3">
            IPAR ID: <a href="#">{idLink || "44447586"}</a>
          </p>
          <p className="lv">
            Level: <span>{levelText || "Gold IBA"}</span>
          </p>
        </>
      )}

      {type === "commission" && (
        <>
          <div className="amnt">{commissionAmount || "$ 0.00"}</div>
          <p className="dng-txt text-danger">
            {commissionMsg || "No Commission Qualified"}
          </p>
          <a href="#" style={{color: "var(--green-color)"}}>{commissionLinkText || "Payment Statement"}</a>
        </>
      )}

      {(type === "website" || type === "inviteEarn") && (
        <>
          <div
            className="input-wrapper d-flex align-items-center gap-1"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          >
            <button>{selectedUrl}</button>
            <span>
              <i className="ri-arrow-down-s-line"></i>
            </span>

            {dropdownVisible && (
              <ul className="dropdown-list">
                {(type === "website"
                  ? websiteDropdownOptions
                  : inviteEarnDropdownOptions
                ).map((opt, idx) => (
                  <li key={idx} onClick={() => selectDropdown(opt)}>
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="btn-sec mt-3 d-flex align-items-center justify-content-between">
            <button
              className="green-btn"
              onClick={() => {
                navigator.clipboard.writeText(selectedUrl);
                if (onCopy) onCopy(selectedUrl);
              }}
            >
              {websiteBtnText || inviteEarnBtnText || "Copy"}
            </button>
            <a href={type === "website" ? websiteBtnLink : "#"}>
              {type === "website"
                ? "Website Setting"
                : inviteEarnLinkText || "Manage Links"}
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CardGridItem;
