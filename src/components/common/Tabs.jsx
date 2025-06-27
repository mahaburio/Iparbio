import React, { useState } from "react";

const Tabs = ({ options = [], onChange }) => {
const [activeTab, setActiveTab] = useState(options[0]);

const handleClick = (value) => {
setActiveTab(value);
onChange?.(value);
};

return (
<div className="tabs amount">
  {options.map((option, index) => (
  <button key={index} className={`tab ac ${activeTab===option ? "activeTab" : "" }`} onClick={()=> handleClick(option)}
    >
    {option}
  </button>
  ))}
</div>
);
};

export default Tabs;