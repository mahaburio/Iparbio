import React from "react";


export default function CompanyDetailsSection({companyDetailsData}) {
  return (
    <section className="section-two">
      <div className="container">
        <div className="company-details">
          {companyDetailsData.map((item, index) => (
            <div className="item" key={index}>
              <div className="logo">
                <img src={item.img} alt={item.alt} />
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
