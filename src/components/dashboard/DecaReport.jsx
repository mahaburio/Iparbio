import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import DotsDropdown from "./DotsDropdown";
import DateCycle from "./DateCycle";

const DecaReport = () => {
  const [selectedId, setSelectedId] = useState("10656408.001");
  const [showIdDropdown, setShowIdDropdown] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState("CYCLE 1");

  const idOptions = [
    "10656408.001",
    "856656408.301",
    "656656408.81",
    "956648568.991",
  ];

  const tableData = {
    "CYCLE 1": [
      ["25", "22258", "25945"],
      ["584", "141", "58"],
      ["15858", "85", "10236"],
    ],
    "Left Volume": [
      ["LV1", "124", "781"],
      ["LV2", "343", "67"],
      ["LV3", "245", "987"],
    ],
    "Right Volume": [
      ["RV1", "999", "123"],
      ["RV2", "888", "456"],
      ["RV3", "777", "789"],
    ],
  };

  const dates = [
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',

    'July 7, 2025',
    'July 7, 2025',
    'July 7, 2025',

  ]

  const handleOptionClick = (option) => {
    if (option === "xls") {
      console.log("Exporting to XLS...");
    } else if (option === "pdf") {
      console.log("Exporting to PDF...");
    } else if (option === "print") {
      window.print();
    }
  };

  return (
    <section className="voluem-history deca-report mt-4">
      <div className="container">
        <div className="info-item">
          <div className="info-header">
            <div className="header-tt d-flex align-items-center justify-content-between">
              <h6>3 Deca Report</h6>
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
            <div className="row p-lg-3 p-1">
              <div className="col-lg-2">
                <DateCycle items={dates} />
              </div>

              <div className="col-lg-10 mt-lg-0 mt-md-4 mt-4">
                <div className="table-chart">
                  <div className="header">
                    <div className="id-num" style={{ position: "relative" }}>
                      <span>{selectedId}</span>
                      <RiArrowDownSLine
                        className="arrowsNum"
                        onClick={() => setShowIdDropdown(!showIdDropdown)}
                        style={{ cursor: "pointer" }}
                      />
                      {showIdDropdown && (
                        <ul className="num-sublist">
                          {idOptions.map((id, idx) => (
                            <li key={idx} onClick={() => {
                              setSelectedId(id);
                              setShowIdDropdown(false);
                            }}>
                              {id}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="buttons mt-3">
                    {["CYCLE 1", "Left Volume", "Right Volume"].map((cycle) => {
                      const baseClass =
                        cycle === "Right Volume"
                          ? "rt-vlm"
                          : cycle === "Left Volume"
                            ? ""
                            : "";

                      const isActive = selectedCycle === cycle ? "active" : "";

                      return (
                        <button
                          key={cycle}
                          className={`${baseClass} ${isActive}`.trim()}
                          onClick={() => setSelectedCycle(cycle)}
                        >
                          {cycle}
                        </button>
                      );
                    })}
                  </div>


                  <div className="chart-container">
                    <div className="table-container">
                      <table>
                        <tbody>
                          {tableData[selectedCycle]?.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, colIndex) => (
                                <td key={colIndex}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecaReport;
