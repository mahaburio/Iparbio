import React, { useState } from "react";
import DotsDropdown from "./DotsDropdown"; // Assuming you already have this component

const ExtensionSection = () => {
  const [extensionData] = useState([
    {
      businessCenter: "12345678.001",
      qualificationDate: "10/15/2025",
      renewalDate: "10/15/2026",
      extension: "Extension",
    },
    {
      businessCenter: "98765432.002",
      qualificationDate: "11/01/2025",
      renewalDate: "11/01/2026",
      extension: "Extension",
    },

    {
      businessCenter: "12345678.001",
      qualificationDate: "10/15/2025",
      renewalDate: "10/15/2026",
      extension: "Extension",
    },
    {
      businessCenter: "98765432.002",
      qualificationDate: "11/01/2025",
      renewalDate: "11/01/2026",
      extension: "Extension",
    },

    {
      businessCenter: "12345678.001",
      qualificationDate: "10/15/2025",
      renewalDate: "10/15/2026",
      extension: "Extension",
    },
    {
      businessCenter: "98765432.002",
      qualificationDate: "11/01/2025",
      renewalDate: "11/01/2026",
      extension: "Extension",
    },

    {
      businessCenter: "12345678.001",
      qualificationDate: "10/15/2025",
      renewalDate: "10/15/2026",
      extension: "Extension",
    },
    {
      businessCenter: "98765432.002",
      qualificationDate: "11/01/2025",
      renewalDate: "11/01/2026",
      extension: "Extension",
    },

  ]);

  const handleOptionClick = (option) => {
    if (option.value === "xls") {
      console.log("Exporting to XLS...");
      // Add your XLS export logic here
    } else if (option.value === "pdf") {
      console.log("Exporting to PDF...");
      // Add your PDF export logic here
    } else if (option.value === "print") {
      window.print();
    }
  };

  return (
    <div className="extension-sec">
      <div className="info-header">
        <div className="header-tt d-flex align-items-center justify-content-between">
          <h6>Qualification &amp; Extension</h6>
          <DotsDropdown
            options={[
              { label: "Export to .xls", value: "xls" },
              { label: "Export to .pdf", value: "pdf" },
              { label: "Print", value: "print" },
            ]}
            onOptionClick={handleOptionClick}
          />
        </div>
      </div>

      <div className="info-body p-lg-3 p-md-3 p-sm-3 p-2">
        <div className="extension-table">
          <table>
            <thead>
              <tr>
                <th>Business Center</th>
                <th>Qualification Date</th>
                <th>Renewal Date</th>
                <th>Extension</th>
              </tr>
            </thead>
            <tbody>
              {extensionData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.businessCenter}</td>
                  <td>{row.qualificationDate}</td>
                  <td>{row.renewalDate}</td>
                  <td className="extension">{row.extension}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExtensionSection;
