import React from "react";
import MainWrapper from "../../components/common/Mainwrapper";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import SideNav from "../../components/enrollment/Sidenav/SideNav";
import Footer from "../../components/footer/footer";

const UplineLeaderPlacementPage = () => {
  const user = {
    image: "images/person.webp",
    subImage: "images/person-1.webp",
    name: "Ms. Munjamin Khaynt",
    userId: "4445721.201",
    level: "Gold",
    iparAge: "15 years 2 month",
  };

  const sponsor = {
    Title: "GLD",
    "Ipar ID": "10656408",
    "First Name": "Toyota",
    "Last Name": "Tesla",
    State: "TX",
    Country: "US",
    Phone: "(256) 555-6766",
    Email: "sss@ggg.com",
  };

  const placement = {
    "Business Center": "12681590.402",
    Side: "L",
    "First Name": "France",
    "Last Name": "Bilodeo",
  };

  return (
    <MainWrapper>
      <div className="dashboard">
        {/* Header */}
        <HeaderDashboard />

        {/* Sidenav */}
        <SideNav />

        {/* Upline Placement */}
        <section className="main-content-sec mt-5">
          <div className="container">
            <div className="main-head-title">Upline Leader Placement</div>

            <div className="personal-information info-item">
              <div className="info-header">
                <div className="user-details d-flex align-items-center gap-3 mt-2">
                  <div className="img">
                    <img src={user.image} alt={user.name} />
                  </div>
                  <a href="#" className="name">
                    {user.name}
                  </a>
                </div>
              </div>
              <div className="info-body py-5 px-3">
                <div className="user-row">
                  <div className="us-id d-flex align-items-center gap-2">
                    <div className="img">
                      <img src={user.subImage} alt="Sub Person" />
                    </div>
                    <div className="details">
                      <div>
                        User ID: <span className="fw-bold">{user.userId}</span>
                      </div>
                      <div>
                        Level: <span className="fw-bold">{user.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="us-age text-center">
                    <div className="fw-bold">Ipar Age</div>
                    <div>{user.iparAge}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-sec mt-5 mx-auto">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-container">
                    <div className="inf-ttl">Sponsor Information</div>
                    <div className="info-box mt-3">
                      {Object.entries(sponsor).map(([label, value]) => (
                        <div key={label} className="inf-itm">
                          {label}: {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-lg-0 mt-md-5 mt-sm-4 mt-4">
                  <div className="info-container">
                    <div className="inf-ttl">Placement Information</div>
                    <div className="info-box mt-3">
                      {Object.entries(placement).map(([label, value]) => (
                        <div key={label} className="inf-itm">
                          {label}: {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <Footer/>
      </div>
    </MainWrapper>
  );
};

export default UplineLeaderPlacementPage;
