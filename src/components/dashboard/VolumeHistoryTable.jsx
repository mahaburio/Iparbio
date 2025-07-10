import React, { useState } from "react";
import { RiMoreFill, RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import DotsDropdown from "./DotsDropdown";
import DateCycle from "./DateCycle";

const VolumeHistory = () => {
  const [view, setView] = useState("multi"); 


const buttonLabels = ["CYCLE 1", "CYCLE 2", "CYCLE 3", "CYCLE 4"];

  const tableData = {
    multi: {
      rows: [
        ["25", "22258", "25945"],
        ["123", "2354", ""],
        ["", "", ""],
        ["", "12312", ""],
        ["", "", ""],
        ["", "123.123.", ""],
      ],
      dates: ["Mar 12, 2021", "Mar 19, 2021", "Mar 26, 2021"],
      activeIndex: 1,
    },
    single: {
      rows: [
        ["24596"],
        ["123"],
        [""],
        [""],
        [""],
        ["222222"],
      ],
      dates: ["Apr 2, 2021"],
      activeIndex: 3,
    },
  };

  const current = tableData[view];

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

  const dates = [
    'May 12 2025',
    'May 12 2025',
    'May 12 2025',
    'May 12 2025',
    'May 12 2025',
    'May 12 2025',
  ]

  const [showSublist, setShowSublist] = useState(false);
  const [selectedId, setSelectedId] = useState("10656408.001");
  const idOptions = [
    "856656408.301",
    "656656408.81",
    "9566408.701",
    "35656408.301",
  ];

  const handleIdSelect = (id) => {
    setSelectedId(id);
    setShowSublist(false);
  };

  return (
    <section className="volume-history mt-4">
      <div className="container">
        <div className="info-item">
          <div className="info-header">
            <div className="header-tt d-flex align-items-center justify-content-between">
              <h6>Volume History</h6>
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
                      <RiArrowDownSLine fontSize={26}
                        className="arrowsNum"
                        onClick={() => setShowSublist((prev) => !prev)}
                        style={{ cursor: "pointer" }}
                      />
                      {showSublist && (
                        <ul className="num-sublist">
                          {idOptions.map((id, idx) => (
                            <li key={idx} onClick={() => handleIdSelect(id)}>
                              {id}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="buttons mt-3 d-flex align-items-center gap-2">
                    <div className="prev" onClick={() => setView("multi")}>
                      <RiArrowLeftSLine />
                    </div>
                    <div className="all-cycle-btn">
                      {buttonLabels.map((label, i) => {
                        const shouldShow =
                          (view === "multi" && i < 3) || (view === "single" && i === 3);

                        return shouldShow ? (
                          <button
                            key={i}
                            className={i === current.activeIndex ? "active" : ""}
                            style={{ display: "inline-block" }}
                          >
                            {label}
                          </button>
                        ) : null;
                      })}
                    </div>
                    <div className="next" onClick={() => setView("single")}>
                      <RiArrowRightSLine />
                    </div>
                  </div>

                  <div className="chart-container">
                    <div className="y-axis">
                      <span>6000</span>
                      <span>5000</span>
                      <span>4000</span>
                      <span>3000</span>
                      <span>2000</span>
                      <span>1000</span>
                      <span>0</span>
                    </div>
                    <div className="table-container">
                      <table>
                        <tbody>
                          {current.rows.map((row, rowIndex) => (
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

                  <div className="dates">
                    {current.dates.map((date, idx) => (
                      <span key={idx}>{date}</span>
                    ))}
                  </div>

                  <div className="legend mt-4">
                    <span>
                      <div className="green"></div>Non Auto-Order CPV
                    </span>
                    <span>
                      <div className="yellow"></div>Auto-Order CPV
                    </span>
                    <span>
                      <div className="blue"></div>Auto-Order PV
                    </span>
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

export default VolumeHistory;
