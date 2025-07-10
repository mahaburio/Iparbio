import React from "react";
import PropTypes from "prop-types";

const CycleBonusItem = ({ cvp, title, Desc = true, description, unit = "CVP" }) => {
  return (
    <div className="bns-itm text-center">
      <div className="range-circle-cvp">
        {unit === "$" ? `$${cvp}` : `${cvp} ${unit}`}
      </div>
      <h6 className="mt-3 fw-bold">{title}</h6>
      {Desc && <p className="mt-2">{description}</p>}
    </div>
  );
};

CycleBonusItem.propTypes = {
  cvp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Desc: PropTypes.bool,
  unit: PropTypes.oneOf(["CVP", "$"]),
};

export default CycleBonusItem;
