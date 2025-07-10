import React from "react";

const defaultUserData = {
  name: "Ms. Munjamin Khaynt",
  userId: "4445721.201",
  level: "Gold",
  iparAge: "15 years 2 month",
  conversionRate: "6.6%",
  nextLevel: "Star-Gl",
  activeBCCount: 23,
  enrollmentNetworkCount: 23,
  images: {
    person: "images/person.webp",
    userId: "images/person-1.webp",
  },
};

const PersonalInformation = ({ userData = defaultUserData }) => {
  const {
    name,
    userId,
    level,
    iparAge,
    conversionRate,
    nextLevel,
    activeBCCount,
    enrollmentNetworkCount,
    images,
  } = userData;

  return (
    <div className="personal-information info-item">
      <div className="info-header">
        <div className="header-tt d-flex align-items-center justify-content-between">
          <h6>Personal Information</h6>
        </div>

        <div className="user-details d-flex align-items-center gap-3 mt-2">
          <div className="img">
            <img src={images.person} alt="User" />
          </div>
          <a href="#" className="name">
            {name}
          </a>
        </div>
      </div>

      <div className="info-body py-4 px-3">
        <div className="user-row">
          <div className="us-id d-flex align-items-center gap-2">
            <div className="img">
              <img src={images.userId} alt="User ID" />
            </div>
            <div className="details">
              <div>
                User ID: <span className="fw-bold">{userId}</span>
              </div>
              <div>
                Level: <span className="fw-bold">{level}</span>
              </div>
            </div>
          </div>

          <div className="us-age text-center">
            <div className="fw-bold">Ipar Age</div>
            <div>{iparAge}</div>
          </div>

          <div className="us-conversion text-center">
            <div className="fw-bold">{conversionRate}</div>
            <div>Conversion Rate</div>
          </div>

          <div className="us-next-lv text-center">
            <div className="fw-bold">Next Level</div>
            <div>{nextLevel}</div>
          </div>
        </div>

        <div className="user-row user-row-v2 mt-3 align-items-center gap-2">
          <div className="d-flex align-items-center gap-3">
            <div className="img">
              <i className="ri-home-4-fill"></i>
            </div>
            <div className="nm">Active BC</div>
          </div>
          <a href="#" className="tl d-flex align-items-center">
            <span>{activeBCCount}</span> <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>

        <div className="user-row user-row-v2 mt-3 align-items-center gap-2">
          <div className="d-flex align-items-center gap-3">
            <div className="img">
              {/* SVG kept inline */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="569.52 585.085 30 30"
              >
                <g data-name="people">
                  <path
                    d="M580.437 596.825h8.201a.808.808 0 0 0 .806-.81v-.882a4.301 4.301 0 0 0-4.34-4.311 2.895 2.895 0 0 0 2.318-2.84 2.89 2.89 0 0 0-2.885-2.897 2.89 2.89 0 0 0-2.885 2.896c0 1.406.997 2.577 2.319 2.841-2.5 0-4.34 1.995-4.34 4.311v.882c0 .448.36.81.806.81Z"
                    fill="#3f3d56"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M573.143 599.455a.842.842 0 0 0 .979-.68c.207-1.143.6-2.253 1.166-3.3a11.08 11.08 0 0 1 2.037-2.699.847.847 0 0 0 .022-1.194.84.84 0 0 0-1.19-.022c-.93.9-1.72 1.945-2.348 3.108a12.786 12.786 0 0 0-1.343 3.805c-.083.459.22.899.677.982Z"
                    fill="#3f3d56"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M593.785 595.474a11.095 11.095 0 0 1 1.166 3.301.843.843 0 0 0 .978.68.845.845 0 0 0 .677-.982c-.239-1.32-.69-2.6-1.342-3.805a12.767 12.767 0 0 0-2.348-3.108.839.839 0 0 0-1.19.022.847.847 0 0 0 .022 1.194c.805.78 1.49 1.687 2.037 2.698Z"
                    fill="#3f3d56"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M587.938 606.543a10.943 10.943 0 0 1-3.4.546h-.046c-1.145 0-2.267-.171-3.333-.51a.845.845 0 0 0-.507 1.611c1.23.391 2.522.59 3.84.59h.046c1.35-.006 2.67-.218 3.925-.632a.845.845 0 0 0-.525-1.605Z"
                    fill="#3f3d56"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M574.993 609.082a2.895 2.895 0 0 0 2.319-2.841c0-1.6-1.292-2.897-2.885-2.897a2.891 2.891 0 0 0-2.885 2.897c0 1.405.996 2.576 2.319 2.84a4.302 4.302 0 0 0-4.341 4.312v.882c0 .447.36.81.806.81h8.202a.808.808 0 0 0 .806-.81v-.882a4.301 4.301 0 0 0-4.34-4.311Z"
                    fill="#3f3d56"
                    fillRule="evenodd"
                  ></path>
                  <path
                    d="M595.18 609.082a2.895 2.895 0 0 0 2.318-2.841c0-1.6-1.292-2.897-2.885-2.897a2.891 2.891 0 0 0-2.885 2.897c0 1.405.997 2.576 2.319 2.84a4.3 4.3 0 0 0-4.34 4.312v.882c0 .447.36.81.806.81h8.2a.808.808 0 0 0 .807-.81v-.882a4.301 4.301 0 0 0-4.34-4.311Z"
                    fill="#3f3d56"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="nm">My Enrollment network</div>
          </div>
          <a href="#" className="tl d-flex align-items-center">
            <span>{enrollmentNetworkCount}</span>
            <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
