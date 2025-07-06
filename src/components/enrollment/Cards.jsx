import React from "react";
import classNames from "classnames";

export const CardItem = ({ item, isSelected, onToggleSelect }) => {
  const { image, nameTitle, description, readMore, selectable } = item;

  const handleClick = () => {
    if (selectable) {
      onToggleSelect(nameTitle);
    }
  };

  return (
    <div
      className={classNames("card-itm", {
        cardBorderAppear: selectable && isSelected,
      })}
      onClick={handleClick}
    >
      <div className="img">
        <img src={image} alt={nameTitle} />
      </div>
      <div className="card-body">
        <div className="card-ht mt-1">{nameTitle}</div>
        <p className="mt-3">
          {description}
          {readMore && (
            <>
              {" "}
              <a href={readMore.href} className="read-more-link">
                {readMore.text}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};


