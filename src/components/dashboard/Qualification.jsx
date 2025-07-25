import React from "react";

import { FaMedal } from "react-icons/fa";
import DotsDropdown from "./DotsDropdown";

const QualificationSection = () => {

  const handleOptionClick = (option) => {
    if (option.value === "xls") {
      console.log("Exporting to XLS...");
    } else if (option.value === "pdf") {
      console.log("Exporting to PDF...");
    } else if (option.value === "print") {
      window.print();
    }
  };

  const qualifications = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="569.52 585.085 30 30">
                            <g data-name="people">
                              <path d="M580.437 596.825h8.201a.808.808 0 0 0 .806-.81v-.882a4.301 4.301 0 0 0-4.34-4.311 2.895 2.895 0 0 0 2.318-2.84 2.89 2.89 0 0 0-2.885-2.897 2.89 2.89 0 0 0-2.885 2.896c0 1.406.997 2.577 2.319 2.841-2.5 0-4.34 1.995-4.34 4.311v.882c0 .448.36.81.806.81Z" fill="#3f3d56" fill-rule="evenodd" data-name="Path 3185"></path>
                              <path d="M573.143 599.455a.842.842 0 0 0 .979-.68c.207-1.143.6-2.253 1.166-3.3a11.08 11.08 0 0 1 2.037-2.699.847.847 0 0 0 .022-1.194.84.84 0 0 0-1.19-.022c-.93.9-1.72 1.945-2.348 3.108a12.786 12.786 0 0 0-1.343 3.805c-.083.459.22.899.677.982Z" fill="#3f3d56" fill-rule="evenodd" data-name="Path 3186"></path>
                              <path d="M593.785 595.474a11.095 11.095 0 0 1 1.166 3.301.843.843 0 0 0 .978.68.845.845 0 0 0 .677-.982c-.239-1.32-.69-2.6-1.342-3.805a12.767 12.767 0 0 0-2.348-3.108.839.839 0 0 0-1.19.022.847.847 0 0 0 .022 1.194c.805.78 1.49 1.687 2.037 2.698Z" fill="#3f3d56" fill-rule="evenodd" data-name="Path 3187"></path>
                              <path d="M587.938 606.543a10.943 10.943 0 0 1-3.4.546h-.046c-1.145 0-2.267-.171-3.333-.51a.845.845 0 0 0-.507 1.611c1.23.391 2.522.59 3.84.59h.046c1.35-.006 2.67-.218 3.925-.632a.845.845 0 0 0-.525-1.605Z" fill="#3f3d56" fill-rule="evenodd" data-name="Path 3188"></path>
                              <path d="M574.993 609.082a2.895 2.895 0 0 0 2.319-2.841c0-1.6-1.292-2.897-2.885-2.897a2.891 2.891 0 0 0-2.885 2.897c0 1.405.996 2.576 2.319 2.84a4.302 4.302 0 0 0-4.341 4.312v.882c0 .447.36.81.806.81h8.202a.808.808 0 0 0 .806-.81v-.882a4.301 4.301 0 0 0-4.34-4.311Z" fill="#3f3d56" fill-rule="evenodd" data-name="Path 3189"></path>
                              <path d="M595.18 609.082a2.895 2.895 0 0 0 2.318-2.841c0-1.6-1.292-2.897-2.885-2.897a2.891 2.891 0 0 0-2.885 2.897c0 1.405.997 2.576 2.319 2.84a4.3 4.3 0 0 0-4.34 4.312v.882c0 .447.36.81.806.81h8.2a.808.808 0 0 0 .807-.81v-.882a4.301 4.301 0 0 0-4.34-4.311Z" fill="#3f3d56" fill-rule="evenodd" data-name="Path 3190"></path>
                            </g>
                          </svg>`,
      iconType: "svg",
      title: "BC Qualification",
      message: "Business volume of my total business network",
      status: "Yes",
    },
    {
      icon: "ri-contacts-book-3-fill",
      iconType: "icon",
      title: "Qualified for Matching Bonus?",
      message: 'The bonus period needs <a href="#">20 PPV</a> to qualify.',
      status: "Yes",
    },
    {
      icon: "ri-verified-badge-fill",
      iconType: "icon",
      title: "Qualified for Development Award ?",
      message: 'The bonus period needs <a href="#">20 PPV</a> to qualify.',
      status: "Yes",
    },

    {
      icon: <FaMedal fontSize={26} />,
      iconType: "icon",
      title: "Leadership Award ?",
      message: 'The bonus period needs <a href="#">20 PPV</a> to qualify.',
      status: "Yes",
    },
    {
      icon: "ri-contacts-book-3-fill",
      iconType: "icon",
      title: "Honorees Sharing ?",
      message: 'The bonus period needs <a href="#">20 PPV</a> to qualify.',
      status: "Yes",
    },

    {
      icon: <FaMedal fontSize={26} />,
      iconType: "icon",
      title: "Leadership Award ?",
      message: 'The bonus period needs <a href="#">20 PPV</a> to qualify.',
      status: "Yes",
    },
    {
      icon: "ri-contacts-book-3-fill",
      iconType: "icon",
      title: "Honorees Sharing ?",
      message: 'The bonus period needs <a href="#">20 PPV</a> to qualify.',
      status: "Yes",
    },
  ];

  return (
    <div className="qualification-sec">
      <div className="info-header">
        <div className="header-tt d-flex align-items-center justify-content-between">
          <h6>Qualification</h6>
          <DotsDropdown options={[
            { label: "Export to .xls", value: "xls" },
            { label: "Export to .pdf", value: "pdf" },
            { label: "Print", value: "print" },
          ]}
            onOptionClick={handleOptionClick} />
        </div>
      </div>

      <div className="info-body p-lg-3 p-md-3 p-sm-3 p-2">
        {qualifications.map((q, index) => (
          <div
            key={index}
            className="qul-itm d-flex align-items-center justify-content-between"
          >
            <div className="left d-flex align-items-center gap-2">
              <div className="img">
                {q.iconType === "svg" ? (
                  <div dangerouslySetInnerHTML={{ __html: q.icon }} />
                ) : typeof q.icon === "string" ? (
                  <i className={q.icon}></i>
                ) : (
                  q.icon
                )}
              </div>

              <div className="nft-dt">
                <div className="nft-tt">{q.title}</div>
                <div
                  className="msg"
                  dangerouslySetInnerHTML={{ __html: q.message }}
                />
              </div>
            </div>
            <div className="right d-flex align-items-center">
              <span>{q.status}</span>
              <span className="arw fs-4">
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualificationSection;
