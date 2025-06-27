import React, { useState } from 'react';

const AccordionItem = ({ title, icon, links, defaultOpen = false }) => {
const [isOpen, setIsOpen] = useState(defaultOpen);

return (
<div className={`acr-it ${isOpen ? 'active' : '' }`}>
  <div className={`list-header d-flex align-items-center justify-content-between ${isOpen ? 'active' : '' }`} onClick={()=> setIsOpen(!isOpen)}
    >
    <div className="left d-flex align-items-center gap-2">
      <img src={icon} alt={title} />
      <div className="name fw-medium">{title}</div>
    </div>
    <div className="arrows fs-3 fw-medium">
      <i className={`ri-arrow-${isOpen ? 'down' : 'right' }-s-line`}></i>
    </div>
  </div>
  {isOpen && (
  <div className="acr-body show">
    {links.map((link, index) => (
    <li key={index}>
      <a href="#">{link}</a>
    </li>
    ))}
  </div>
  )}
</div>
);
};

export default AccordionItem;