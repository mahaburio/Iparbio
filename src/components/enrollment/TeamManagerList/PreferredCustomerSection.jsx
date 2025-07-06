import React, { useState } from "react";

const PreferredCustomerSection = () => {
  const [pcPersonal, setPcPersonal] = useState(["", ""]);
  const [pcTeam, setPcTeam] = useState(["", ""]);
  const [errors, setErrors] = useState({
    personal: false,
    team: false,
  });

  const handleInputChange = (section, index, value) => {
    const newValues = section === "personal" ? [...pcPersonal] : [...pcTeam];
    newValues[index] = value;

    if (section === "personal") {
      setPcPersonal(newValues);
      setErrors((prev) => ({
        ...prev,
        personal: newValues.some((v) => v.trim() === ""),
      }));
    } else {
      setPcTeam(newValues);
      setErrors((prev) => ({
        ...prev,
        team: newValues.some((v) => v.trim() === ""),
      }));
    }
  };

  return (
    <div className="tm-it-body px-2">
      <div className="preferred-inputs">
        {/* Personally Sponsored */}
        <div className="pc-counts-p mb-2">
          <h5 className="pb-2 m-0">PC Count (Personally Sponsored)</h5>
          <div className="input-db d-flex gap-1">
            {pcPersonal.map((val, i) => (
              <input
                key={i}
                type="number"
                className="required-input"
                value={val}
                onChange={(e) => handleInputChange("personal", i, e.target.value)}
              />
            ))}
          </div>
          {errors.personal && (
            <p className="error-message" style={{ display: "block", color: "red" }}>
              Input field is required
            </p>
          )}
        </div>

        {/* Entire Team */}
        <div className="pc-counts-t mt-2 mb-3">
          <h5 className="pb-2 m-0">PC Count (Entire Team)</h5>
          <div className="input-db d-flex gap-1">
            {pcTeam.map((val, i) => (
              <input
                key={i}
                type="number"
                className="required-input"
                value={val}
                onChange={(e) => handleInputChange("team", i, e.target.value)}
              />
            ))}
          </div>
          {errors.team && (
            <p className="error-message" style={{ display: "block", color: "red" }}>
              Input field is required
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreferredCustomerSection;
