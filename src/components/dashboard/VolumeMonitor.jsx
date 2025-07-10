import React from "react";
import DateCycle from "./DateCycle";

const VolumeMonitor = ({ businessCenters = [], bonuses = {}, bottomBonuses = [] }) => {
  const { current = 0, max = 1200, link = "#" } = bonuses;
  const percentage = Math.min((current / max) * 100, 100);

  const dates = [
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 06 2021",
    "Mar 07 2021",

  ];

  return (
    <div className="info-body p-lg-3 p-md-3 p-sm-3 p-2">
      <div className="row p-lg-3 p-1">
        <div className="col-lg-2">
          <DateCycle items={dates} />
        </div>

        <div className="col-lg-10 mt-lg-0 mt-mg-4 mt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="bonuses text-center pb-3">
                <div className="head-tt text-center">
                  <h5>Estimated Bonuses</h5>
                </div>
                <div className="range-circle mt-4">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#ccc"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="url(#grad1)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${339.292}`}
                      strokeDashoffset={`${339.292 - (339.292 * percentage) / 100}`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#95c12b" />
                        <stop offset="100%" stopColor="#95c12b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="content mt-2">
                    <p className="m-0">Est. CVP</p>
                    <div className="value">
                      <strong>{current}</strong>/<span>{max}</span>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 px-lg-5 px-md-5 px-4">
                  Bonus amounts may change based on order adjustments
                </p>
                <div>
                  <a href={link}>Click to see more</a>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-lg-0 mt-mg-4 mt-4">
              <div className="buisness-center">
                <div className="head-tt text-center">
                  <h5>Most dynamic business center</h5>
                </div>

                <div className="progress-container">
                  {businessCenters.map((center, index) => {
                    const leftPercent = (center.left.value / center.maxValue) * 100;
                    const rightPercent = (center.right.value / center.maxValue) * 100;

                    return (
                      <div className="progress-box" key={index}>
                        <div className="bars">
                          <div className="left-bar d-flex flex-column align-items-center gap-2 justify-content-between">
                            <div className="title">{center.title}</div>
                            <div className="bar">
                              <div className="fill left-fill" style={{ height: `${leftPercent}%` }}></div>
                              <div className="tooltipBar tooltipBarLeft" style={{ bottom: `${leftPercent}%` }}>
                                {center.left.value}
                              </div>
                            </div>
                            <span className="label left-label">Left</span>
                          </div>

                          <div className="right-bar d-flex flex-column align-items-center justify-content-between gap-2">
                            <span className="pv">{center.maxValue}PV</span>
                            <div className="bar">
                              <div className="fill right-fill" style={{ height: `${rightPercent}%` }}></div>
                              <div className="tooltipBar tooltipBarRight" style={{ bottom: `${rightPercent}%` }}>
                                {center.right.value}
                              </div>
                            </div>
                            <span className="label right-label">Right</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="bottom-bonus">
                {bottomBonuses.map((item, idx) => (
                  <div className="item text-center" key={idx}>
                    <div>{item.title}</div>
                    <div className="cpv">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeMonitor;
