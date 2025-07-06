import React, { useEffect } from "react";

export const DisplayOptions = () => {
  useEffect(() => {
    const periodWrappers = document.querySelectorAll(
      ".commision-prd, .within-ppv"
    );

    const cleanupFns = [];

    periodWrappers.forEach((wrapper) => {
      const inputWrapper = wrapper.querySelector(".input-wrapper");
      const inputField = wrapper.querySelector(".period-input");
      const periodListItems = wrapper.querySelector(".period-list-items");

      const toggleDropdown = () => {
        const currentDisplay = window.getComputedStyle(periodListItems).display;
        const isOpen = currentDisplay === "block";

        periodListItems.style.display = isOpen ? "none" : "block";

        const arrowIcon = wrapper.querySelector(".list-arrow");
        if (arrowIcon) {
          arrowIcon.classList.toggle("rotate", !isOpen);
        }
      };

      const handleSelect = (e) => {
        if (e.target.tagName === "LI") {
          inputField.value = e.target.textContent;
          setTimeout(() => {
            periodListItems.style.display = "none";
          }, 100);
        }
      };

      const closeOnClickOutside = (e) => {
        if (!wrapper.contains(e.target)) {
          periodListItems.style.display = "none";
          const arrowIcon = wrapper.querySelector(".list-arrow");
          if (arrowIcon) {
            arrowIcon.classList.remove("rotate");
          }
        }
      };

      inputWrapper?.addEventListener("click", toggleDropdown);
      periodListItems?.addEventListener("click", handleSelect);
      document.addEventListener("click", closeOnClickOutside);

      // Push cleanup function to array
      cleanupFns.push(() => {
        inputWrapper?.removeEventListener("click", toggleDropdown);
        periodListItems?.removeEventListener("click", handleSelect);
        document.removeEventListener("click", closeOnClickOutside);
      });
    });

    // Run all cleanups when unmounted
    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="tm-it-body displaybody px-2">
      <div className="type-of-display">
        {/* Commission Period */}
        <div className="commision-prd">
          <div className="tp-it">
            <div className="radio-checkmark">
              <span>Commission Period</span>
            </div>
          </div>
          <div className="input-wrapper d-flex align-items-center gap-1 mt-2">
            <input
              className="period-input"
              type="text"
              placeholder="May, 2029 11:00 PST"
              readOnly
            />
            <span className="fs-4">
              <i className="ri-arrow-down-s-line list-arrow"></i>
            </span>
          </div>
          <ul className="period-list-items mt-2 p-0" style={{ display: "none" }}>
            <li>May, 2029 11:00 PST</li>
            <li>June, 2029 12:00 PST</li>
            <li>July, 2029 10:00 PST</li>

            <li>May, 2029 11:00 PST</li>
            <li>June, 2029 12:00 PST</li>
            <li>July, 2029 10:00 PST</li>

            <li>May, 2029 11:00 PST</li>
            <li>June, 2029 12:00 PST</li>
            <li>July, 2029 10:00 PST</li>
          </ul>
        </div>

        {/* Associate ID */}
        <div className="associate-id mt-2 mb-2">
          <div className="tp-it">
            <div className="radio-checkmark">
              <span>Start with Associate ID</span>
            </div>
          </div>
          <div className="input-wrapper mt-2">
            <input type="number" placeholder="842475221" />
          </div>
        </div>

        {/* Within PPV */}
        <div className="within-ppv mt-2 mb-2">
          <div className="tp-it">
            <div className="radio-checkmark">
              <span>Within PPV</span>
            </div>
          </div>
          <div className="input-wrapper d-flex align-items-center gap-1 mt-2">
            <input
              className="period-input"
              type="text"
              placeholder="1458642364"
              readOnly
            />
            <span className="fs-4">
              <i className="ri-arrow-down-s-line list-arrow"></i>
            </span>
          </div>
          <ul className="period-list-items mt-2 p-0" style={{ display: "none" }}>
            <li>975445</li>
            <li>25455155</li>
            <li>465122</li>
            <li>4123423121T</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
