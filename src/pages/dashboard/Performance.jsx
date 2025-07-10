import React, { useState } from 'react'
import QualificationSection from '../../components/dashboard/Qualification'
import ExtensionSection from '../../components/dashboard/Extensions'
import NotificationList from '../../components/dashboard/Notification'
import PersonalInformation from '../../components/dashboard/PersonalInformation'
import CardGridItem from '../../components/dashboard/CardGridItem'
import PeriodFilterBox from '../../components/dashboard/Period'

import Modal from '../../components/common/PopupModal'
import DotsDropdown from '../../components/dashboard/DotsDropdown'
import Footer from '../../components/footer/footer'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import VolumeMonitor from '../../components/dashboard/VolumeMonitor'
const Performance = () => {

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoContent, setInfoContent] = useState("");

  const months = [
    "May, 2028",
    "May, 2029",
    "June, 2029",
    "July, 2029",
    "August, 2029",
    "September, 2029",
    "October, 2029",
    "November, 2029",
    "December, 2029",
  ];

  const handleFilterApply = (data) => {
    console.log("Filter applied:", data);
  };

  const handleInfoClick = (type) => {
    let content = "";

    switch (type) {
      case "PPV":
        content = `<strong>PPV</strong>: Personal Point Value — PPV refers to the total PV achieved by an Independent Business Associate during a Bonus Month with their IPAR ID number.`;
        break;
      case "TNPV":
        content = `<strong>TNPV</strong>: Total Network PV — Monthly Total Network PV refers to the total PPV of an IPAR Independent Business Associate and all their downlines in a Bonus Month.`;
        break;
      case "GPV":
        content = `<strong>GPV</strong>: Group PV — Group PV refers to the total Monthly Group Point Value of a Distributor and all their Direct network in a Bonus Month. Group PV does not include the same rank IPAR Independent Business Associate in the Direct network.`;
        break;
      case "ATNPV":
        content = `<strong>ATNPV</strong>: Accumulated Total Network Point refers to the total PP of an Independent Business Associate and all his/her downlines since the IBA joined IPAR.`;
        break;
      default:
        content = "No information available.";
    }

    setInfoContent(content);
    setInfoModalOpen(true);
  };


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



  const cycleDates = [
    "Mar 06 2021", "Mar 07 2021", "Mar 08 2021", "Mar 09 2021"
  ];

  const businessCenters = [
    {
      title: "BC-401",
      maxValue: 1200,
      left: { value: 500 },
      right: { value: 758 }
    },
    {
      title: "BC-402",
      maxValue: 1200,
      left: { value: 506 },
      right: { value: 887 }
    },
    {
      title: "BC-403",
      maxValue: 1200,
      left: { value: 629 },
      right: { value: 852 }
    }
  ];

  const bonuses = {
    current: 1105.4,
    max: 1200,
    link: "/bonuses/details"
  };

  const bottomBonuses = [
    { title: "Sponsorship Bonus", value: "0 CPV" },
    { title: "Growth award", value: "103.84 CPV" },
    { title: "Matching Bonus", value: "111.4 CPV" }
  ];

  return (
    <div>

      <HeaderDashboard />
      <SideNav />

      <section className="card-section py-5">
        <div className="container">
          <div className="cards-grid">
            <CardGridItem
              type="welcome"
              title="Welcome Alexsis!"
              idLink="85112564"
              levelText="Gold IBA"
            />
            <CardGridItem
              type="commission"
              title="Commission"
              commissionAmount="$ 123.45"
              commissionMsg="No Commission Qualified!"
              commissionLinkText="View Statement"
            />
            <CardGridItem
              type="website"
              title="My Website"
              websiteUrl="https://dila.iparhealth.com"
              websiteDropdownOptions={["https://iparhealth.com"]}
              websiteBtnText="Copy"
              websiteBtnLink="#"
            />
            <CardGridItem
              type="inviteEarn"
              title="Invite & Earn"
              inviteEarnUrl="https://dila.iparhealth.com"
              inviteEarnDropdownOptions={["https://iparhealth.com"]}
              inviteEarnBtnText="Copy"
              inviteEarnLinkText="Manage Links"
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <PersonalInformation />
          </div>
          <div className="col-xl-5 mt-xl-0 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
            <NotificationList />
          </div>
        </div>
      </div>

      <div className="volume-monitor multiple-volume mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="info-item">
                <div className="info-header">
                  <div className="header-tt d-flex align-items-center justify-content-between">
                    <h6>Volume Monitor</h6>
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

                <VolumeMonitor
                  cycleDates={cycleDates}
                  businessCenters={businessCenters}
                  bonuses={bonuses}
                  bottomBonuses={bottomBonuses}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="progress-monitor mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="progress-monitor-sec">
                <div className="info-header">
                  <div className="header-tt d-flex align-items-center justify-content-between">
                    <h6>Progress Monitor</h6>
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
                  <div className="ppv-wrapper">
                    <PeriodFilterBox
                      title="PPV"
                      totalPV="310pv"
                      periodList={months}
                      defaultPeriod="July, 2029"
                      onApply={handleFilterApply}
                      onInfoClick={handleInfoClick}
                    />
                    <PeriodFilterBox
                      title="TNPV"
                      totalPV="100pv"
                      periodList={months}
                      defaultPeriod="July, 2029"
                      onApply={handleFilterApply}
                      onInfoClick={handleInfoClick}
                    />
                    <PeriodFilterBox
                      title="GPV"
                      totalPV="100pv"
                      periodList={months}
                      defaultPeriod="July, 2029"
                      onApply={handleFilterApply}
                      onInfoClick={handleInfoClick}
                    />
                    <PeriodFilterBox
                      title="ATNPV"
                      totalPV="100pv"
                      periodList={months}
                      defaultPeriod="July, 2029"
                      onApply={handleFilterApply}
                      onInfoClick={handleInfoClick}
                    />

                    {/* ✅ Info Modal */}
                    <Modal className='pvModal medium-modal' isOpen={infoModalOpen} onClose={() => setInfoModalOpen(false)}>
                      <div className="desc">
                        <div dangerouslySetInnerHTML={{ __html: infoContent }} />
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qualification mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <QualificationSection />
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
              <ExtensionSection />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}


export default Performance