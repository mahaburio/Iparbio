import React, { useState } from "react";

export const SubscriptionPackage = ({ packages = [] }) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <section className="title-section mt-5">
        <div className="container">
          <div className="title-desc-green fw-medium">
            <i>Step 4: Choose Your Welcome Package (Required *) </i>
          </div>
          <div className="title-desc mt-3">
            Get started right with this exclusive IPAR welcome package, designed
            to equip you with essential tools and information to kickstart your
            business.
            <br /><br />
            This package inspires confidence in new team members and sets them
            on the path to success. It offers resources to launch and grow their
            business while introducing the IPAR lifestyle.
          </div>
          <div className="title-desc-green mt-5">Package includes:</div>
          <div className="title-desc mt-3">
            <li>Get Started Checklist</li>
            <li>Online Resource Guide</li>
            <li>Key IPAR Policies</li>
            <li>Branded notebook and pen</li>
            <li>Mini Product Brochures</li>
            <li>Branded Blender Bottle</li>
          </div>
        </div>
      </section>

      {/* Subscription Package */}

      <section className="welcome-package">
        <div className="container">
          <div className="all-packages">
            {packages.map((pack, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={index}
                  className={`package ${isActive ? "dropShadow" : ""}`}
                  style={{ opacity: isActive ? 1 : 0.4, cursor: "pointer" }}
                  onClick={() => handleSelect(index)}
                >
                  <div className="header-img">
                    <img src={pack.image} alt={pack.name} />
                  </div>
                  <div className="pack-details d-flex flex-column align-items-center mt-3">
                    <div className="pack-name">{pack.name}</div>
                    <div className="price mt-2">
                      Price : <span>{pack.price}</span>
                    </div>
                    <div className="volume mt-2">
                      Volume: <span>{pack.volume}</span>
                    </div>
                    <div className="item-n mt-2">ITEM #{pack.itemNumber}</div>
                    <div className={`bullet-mark mt-2 ${isActive ? "active-bullet" : ""}`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </section>




    </div>
  )
}
