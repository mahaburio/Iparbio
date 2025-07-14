import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";

const ShareListSection = () => {
  const [listItems, setListItems] = useState([
    "My List 1",
    "My List 2",
    "My List 3",
    "My List 4",
  ]);
  const [editValue, setEditValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [removingIndexes, setRemovingIndexes] = useState([]); // for animation

  const handleAddItem = () => {
    const newItem = `My List ${listItems.length + 1}`;
    setListItems([...listItems, newItem]);
  };

  const handleEditClick = (index) => {
    setEditValue(listItems[index]);
    setEditingIndex(index);
  };

  const handleSave = () => {
    if (editingIndex !== null && editValue.trim()) {
      const updatedList = [...listItems];
      updatedList[editingIndex] = editValue.trim();
      setListItems(updatedList);
      setEditingIndex(null);
      setEditValue("");
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const handleDelete = (index) => {
    setRemovingIndexes((prev) => [...prev, index]);
    setTimeout(() => {
      const updatedList = listItems.filter((_, i) => i !== index);
      const renamedList = updatedList.map((_, i) => `My List ${i + 1}`);
      setListItems(renamedList);
      setRemovingIndexes((prev) => prev.filter((i) => i !== index));
      if (editingIndex === index) handleCancel();
    }, 300);
  };

  return (
    <div className="sharing-before mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="head-title">1. Name your list before sharing!</div>
          <div className="input-part mt-2">
            <label className="mb-1">
              Edit Name <span className="green-title">?</span>
            </label>
            <div className="input-and-edit d-flex align-items-center gap-2">
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                placeholder="Enter list name"
              />
              <div className="edit">
                <i className="ri-pencil-fill"></i>
              </div>
            </div>
          </div>
          <div className="btn-sec text-end mt-4">
            <button className="tsp-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="black-btn black-btn-sm nextBtn px-4"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>

        <div className="col-lg-6 mt-lg-0 mt-4">
          <div className="head-title d-flex justify-content-between align-items-center">
            <span>2. Add Share List</span>
            <span className="icon addIcon" onClick={handleAddItem}>
              +
            </span>
          </div>
          <div className="list-items mt-3">
            {listItems.map((item, index) => (
              <div
                key={index}
                className={`list-itm d-flex justify-content-between align-items-center ${removingIndexes.includes(index) ? "hide" : ""
                  }`}
              >
                <span>{item}</span>
                <div className="right d-flex align-items-center gap-2">
                  <div className="delete" onClick={() => handleDelete(index)}>
                    <BsTrash3 />
                  </div>
                  <div className="edit" onClick={() => handleEditClick(index)}>
                    <i className="ri-pencil-fill"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareListSection;
