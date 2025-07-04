import React from "react";

const UserCard = ({
  username = "Alex Smith",
  userId = "551 958 583",
  pv = 500,
  pvMin = 0,
  pvMax = 1000,
  imageSrc = "../images/person.webp",
  statusMessage = "You are getting GOLD with eligible items",
  rangeLine= true
}) => {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-lg-5 col-md-8">
          <div className="user-card d-flex align-items-center gap-2">
            <div className="u-img">
              <img src={imageSrc} alt={username} />
            </div>
            <div className="u-details">
              <div className="u-name">
                <span className="tt fw-medium">User name:</span>
                <span className="tn">{username}</span>
              </div>
              <div className="u-id">
                <span className="tt fw-medium">User ID:</span>
                <span className="tn">{userId}</span>
              </div>
            </div>
          </div>

          {rangeLine && (
            <div className="range-line mt-3">
              <div className="slider-w-pv d-flex justify-content-end gap-2 align-items-center">
                <div className="slider-container">
                  <input
                    className="range-slider"
                    type="range"
                    min={pvMin}
                    max={pvMax}
                    value={pv}
                    readOnly
                  />
                </div>
                <div className="myPv">{pv}pv</div>
              </div>
              <div className="text-end tt-dsc">{statusMessage}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
