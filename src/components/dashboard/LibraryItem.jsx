import React from "react";

const LibraryItem = ({ item, onExpand, isGrid }) => {
  const renderMedia = () => {
    if (item.type === "video") {
      return (
        <video src={item.src} controls />
      );
    }
    if (item.type === "image") {
      return <img src={item.src} alt={item.title} />;
    }
    return null;
  };

  return (
    <div className={`lb-itm ${!isGrid ? "listItemRow" : ""}`}>
      <div className="img-vd-sec" onClick={() => onExpand(item)}>
        {renderMedia()}
        <div className="expandItem">
          <i className="ri-expand-diagonal-s-line"></i>
        </div>
      </div>
      <div className="itm-dsc p-2">
        <div className="ht">{item.title}</div>
        <div className="type">{item.label}</div>
      </div>
      <div className="add-list">
        <i className="ri-heart-line"></i>
      </div>
    </div>
  );
};

export default LibraryItem;
