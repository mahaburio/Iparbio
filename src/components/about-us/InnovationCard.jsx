import React from "react";

const InnovationCard = ({ image, icon, iconText, description, columnClass = "col-lg-6" }) => {
  return (
    <div className={`${columnClass} mb-4`}>
      <div className="img-card">
        <div className="img-header">
          <div className="img">
            <img className="main-img w-100" src={image} alt="Card" />
          </div>
          <div className="bottom p-3 d-flex align-items-center justify-content-start gap-3">
            <img src={icon} alt="icon" />
            <div className="txt fw-medium">{iconText}</div>
          </div>
        </div>
        <div className="cd-body pt-3">
          <p className="gray">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InnovationCard;
