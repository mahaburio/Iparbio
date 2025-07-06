import React, { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";

import { BsTrash3 } from "react-icons/bs";
import { PiArrowsDownUp } from "react-icons/pi";

const availableFilters = [
  "% On Auto Order", "Address", "Address 2", "Influencer Count",
  "AO Personal Count", "AO Start Date", "Application Date", "Associate Count",
  "Auto Order Cancel Date", "Auto Order Count", "Auto Orders On Hold",
  "Business Center Count", "Business Center Index", "Cancel Date",
  "Cancelled Auto Order", "City", "Commission Period", "Contact Opt In",
  "Country", "Currency", "Customer Count", "Customer Id", "Customer Number",
  "Customer Type", "Customer With BC Count", "Email", "Email Address 2",
  "Estimated Auto Order Volume", "Estimated CVP Sum", "Executive",
  "Executive End Date", "Executive Start Date", "First Name",
  "First Time Check Earner", "Full Name", "Highest Title Left",
  "Highest Title Right", "Language", "Last Check Date", "Last Name",
  "Last Purchase Date", "Leadership Bonus Date", "Mobile",
  "Move up one level", "MTD Sponsored", "Next Auto Order Cycle",
  "Next Auto Order Date", "Not received a check in (X) days",
  "On Auto Order", "On Business Accelerator Suite", "Original Sponsor",
  "Other Phone", "PC Count - Entire Team", "PC Count - Personally Sponsored",
  "PC w/ Business Center", "Phone Day", "Phone Night", "Placement",
  "Profile Picture", "Qual Date", "Renewal Date", "Side", "Sponsor Customer Id",
  "State/Province", "Status", "Title", "Title Date", "Tree Level",
  "Volume Needed", "Weeks Since App Date", "WTD Sponsored", "YTD Sponsored",
  "Zip/Postal Code"
];


const FilterModal = () => {
  const [selected, setSelected] = useState([]);
  const [deletingIds, setDeletingIds] = useState([]);
  const selectedRef = useRef(null);
  const sortableInstance = useRef(null);

  useEffect(() => {
    if (selectedRef.current && !sortableInstance.current) {
      sortableInstance.current = Sortable.create(selectedRef.current, {
        animation: 200,
        handle: ".up-down",
        onStart: (evt) => {
          evt.item.classList.add("dragging");
        },
        onEnd: (evt) => {
          const newOrder = [...selected];
          const [moved] = newOrder.splice(evt.oldIndex, 1);
          newOrder.splice(evt.newIndex, 0, moved);
          setSelected(newOrder);
          evt.item.classList.remove("dragging");

        },
      });
    }

    return () => {
      if (sortableInstance.current) {
        sortableInstance.current.destroy();
        sortableInstance.current = null;
      }
    };
  }, [selected]);

  const handleAddFilter = (name) => {
    if (
      name === "Available Filter" ||
      selected.some((item) => item.name === name)
    )
      return;

    setSelected((prev) => [
      ...prev,
      { id: `${name}-${Date.now()}`, name: name },
    ]);
  };

  const handleRemove = (id) => {
    setDeletingIds((prev) => [...prev, id]);
    setTimeout(() => {
      setSelected((prev) => prev.filter((item) => item.id !== id));
      setDeletingIds((prev) => prev.filter((dId) => dId !== id));
    }, 300);
  };

  return (
    <div className="modal-body filterModal">
      <div class="modal-header">
        <h5>Add New Filter</h5>

      </div>
      <div className="new-filter d-flex gap-3 mt-4">
        {/* Available Filters */}
        <div className="available-filter" style={{ flex: 1, maxHeight: "400px", overflowY: "auto" }}>
          {availableFilters.map((name) => (
            <div key={name} className="flt-itm" onClick={() => handleAddFilter(name)} style={{ cursor: "pointer" }}>
              <div className="flt-nm">{name}</div>
              {name !== "Available Filter" && <div className="icon">+</div>}
            </div>
          ))}
        </div>

        {/* Selected Filters */}
        <div className="selected-filter" style={{ flex: 1, maxHeight: "400px", overflowY: "auto" }}>
          <div className="flt-itm-header">
            <div className="flt-nm">Selected Filter</div>
          </div>

          <div className="selected-item-here" ref={selectedRef}>
            {selected.map((item) => (
              <div
                className={`flt-itm ${deletingIds.includes(item.id) ? "deleted" : ""}`}
                key={item.id}
                style={{ userSelect: "none" }}
              >
                <div className="flt-nm">{item.name}</div>
                <div className="icon-sec d-flex align-items-center gap-2">
                  <span className="up-down" style={{ cursor: "grab" }}>
                    <PiArrowsDownUp color="var(--gray-100)" />
                  </span>
                  <span
                    className="delete"
                    onClick={() => handleRemove(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <BsTrash3 />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
