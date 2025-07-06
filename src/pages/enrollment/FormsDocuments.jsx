import React from "react";
import MainWrapper from "../../components/common/Mainwrapper";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import SideNav from "../../components/enrollment/Sidenav/SideNav";
import Footer from "../../components/footer/footer";

const FormsAndDocuments = () => {
  const formSections = [
    {
      title: "Price Lists & Applications",
      items: [
        { label: "IBA Price List", linkText: "EN / RU", href: "#" },
        { label: "Preferred Customer Price List", linkText: "EN / RU", href: "#" },
        { label: "Associate Application", linkText: "EN / RU", href: "#" },
      ],
    },
    {
      title: "Orders & Payment",
      items: [
        { label: "Order & Subscription Auto Order", linkText: "EN / RU", href: "#" },
        { label: "Product Exchange or Return", linkText: "EN / RU", href: "#" },
        { label: "AutoPay / Auto Deposit", linkText: "EN / RU", href: "#" },
      ],
    },
    {
      title: "Business & Registration Forms",
      items: [
        { label: "Retail Sales Receipt / Cancellation Notice", linkText: "EN / RU", href: "#" },
        { label: "W-8BEN Substitute", linkText: "EN", href: "#" },
        { label: "New Mexico TS-22DS Form", linkText: "EN", href: "#" },
      ],
    },
    {
      title: "Account & Business Changes",
      items: [
        { label: "Retail Sales Receipt / Cancellation Notice", textOnly: "EN / SP / CH" },
        { label: "Re-Entry Placement", textOnly: "EN / SP / CH" },
        { label: "Business Transfer Request", textOnly: "EN / SP / CH" },
        { label: "Placement / Sponsor Change Form", textOnly: "EN / SP / CH" },
      ],
    },
    {
      title: "Additional Agreements & Forms",
      items: [
        { label: "Looking for details on the Compensation Plan? Go", linkText: "here", href: "#" },
        { label: "Need to review the Associate Terms and Policies? Go", linkText: "here", href: "#" },
      ],
    },
  ];

  return (
    <MainWrapper>
      <div className="dashboard">
        {/* Header */}
        <HeaderDashboard />

        {/* Sidenav */}
        <SideNav />

        {/* Upline Placement */}

        <section className="mt-5">
          <div className="container">
            <div className="main-head-title">Forms &amp; Documents</div>
            <p className="mt-3 head-dsc-title">
              This document does not reflect additional compensation outside the
              Ipar compensation plan and should not be used for tax calculations.
            </p>

            <div className="forms-details mt-5">
              {formSections.map((section, index) => (
                <div className={`dts-itm ${index !== 0 ? "mt-4" : ""}`} key={index}>
                  <h4>{section.title}</h4>
                  <div className="details">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        {item.label} –{" "}
                        {item.href ? (
                          <a href={item.href}>{item.linkText}</a>
                        ) : (
                          <span>{item.textOnly}</span>
                        )}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}

        <Footer />
      </div>
    </MainWrapper>
  );
};

export default FormsAndDocuments;
