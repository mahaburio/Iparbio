// components/common/Breadcrumb.js
import React from "react";

const Breadcrumb = ({ links = [], currentPage }) => {
  return (
    <section className="mt-4">
      <div className="container">
        <div className="navigater-menu d-flex align-items-center gap-1 mt-2">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a href={link.href}>{link.text}</a>
              <span>/</span>
            </React.Fragment>
          ))}
          <a href="#" className="activeNavigateMenu">
            {currentPage}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
