import React, { useState, useEffect } from "react";

const data = {
  "BC-401": { left: 721, right: 927 },
  "BC-402": { left: 850, right: 650 },
  "BC-403": { left: 500, right: 400 },
  "BC-404": { left: 1000, right: 1200 },
  "BC-405": { left: 900, right: 1100 },
  "BC-406": { left: 300, right: 700 },
  "BC-407": { left: 600, right: 800 },
  "BC-408": { left: 450, right: 900 },
  "BC-409": { left: 700, right: 500 },
  "BC-410": { left: 950, right: 1000 },
  "BC-411": { left: 170, right: 856 },
  "BC-412": { left: 870, right: 156 },
  "BC-413": { left: 670, right: 1111 },
  "BC-414": { left: 440, right: 751 },
  "BC-415": { left: 1158, right: 566 },
  "BC-416": { left: 658, right: 366 },
  "BC-417": { left: 111, right: 974 },
  "BC-418": { left: 1125, right: 203 },
  "BC-419": { left: 725, right: 1080 },
  "BC-420": { left: 385, right: 1200 },
  "BC-421": { left: 300, right: 900 },
  "BC-422": { left: 158, right: 866 },
  "BC-423": { left: 358, right: 266 },
  "BC-424": { left: 115, right: 1166 },
  "BC-425": { left: 758, right: 66 },
};

const BonusSystem = () => {
  const maxValue = 1200;
  const [selectedBC, setSelectedBC] = useState("BC-401");
  const [randomValue, setRandomValue] = useState("0.00");

  const { left, right } = data[selectedBC];
  const leftPercent = (left / maxValue) * 100;
  const rightPercent = (right / maxValue) * 100;

  useEffect(() => {
    const value = (Math.random() * (500 - 50) + 50).toFixed(2);
    setRandomValue(value);
  }, [selectedBC]);

  return (
    <div className="bonus-system">
      <div className="row">
        {/* Bonuses Section */}
        <div className="col-lg-7">
          <div className="bonuses text-center pb-3">
            <div className="head-tt p-3 d-flex align-items-center justify-content-between">
              <span className="value">{randomValue}</span>
              <button className="black-btn black-btn-sm">{selectedBC}</button>
            </div>
            <div className="info-body">
              <div className="grid-btn p-3 ">
                {Object.keys(data).map((bc) => (
                  <button
                    key={bc}
                    className={bc === selectedBC ? "activeGridBtn" : ""}
                    onClick={() => setSelectedBC(bc)}
                  >
                    {bc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Center Section */}
        <div className="col-lg-5">
          <div className="buisness-center">
            <div className="head-tt p-3 text-center">
              <button className="black-btn black-btn-sm">{selectedBC}</button>
            </div>
            <div className="progress-container">
              <div className="progress-box progressSingle">
                <div className="bars d-flex justify-content-between">
                  {/* Left Bar */}
                  <div className="left-bar d-flex flex-column align-items-center gap-2">
                    <div className="title">{selectedBC}</div>
                    <div className="bar">
                      <div className="fill left-fill" style={{ height: `${leftPercent}%` }}></div>
                      <div className="tooltipBar tooltipBarLeft" style={{ bottom: `${leftPercent}%` }}>
                        {left}
                      </div>
                    </div>
                    <span className="label left-label">Left</span>
                  </div>

                  {/* Right Bar */}
                  <div className="right-bar d-flex flex-column align-items-center gap-2">
                    <span className="pv">{right} PV</span>
                    <div className="bar">
                      <div className="fill right-fill" style={{ height: `${rightPercent}%` }}></div>
                      <div className="tooltipBar tooltipBarRight" style={{ bottom: `${rightPercent}%` }}>
                        {right}
                      </div>
                    </div>
                    <span className="label right-label">Right</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusSystem;
