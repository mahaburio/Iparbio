import React from 'react'
import NotificationList from '../../components/dashboard/Notification'
import PersonalInformation from '../../components/dashboard/PersonalInformation'
import CardGridItem from '../../components/dashboard/CardGridItem'

import DotsDropdown from '../../components/dashboard/DotsDropdown'
import Footer from '../../components/footer/footer'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import AsideBar from '../../components/enrollment/Asidebar'
import DateCycle from '../../components/dashboard/DateCycle'
import BonusSystem from '../../components/dashboard/BonusMatching'
import VolumeHistory from '../../components/dashboard/VolumeHistoryTable'
import DecaReport from '../../components/dashboard/DecaReport'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import CycleBonusItem from '../../components/dashboard/CycleBonusItem'
import VolumePersonal from '../../components/dashboard/VolumePersonal'


const PerformanceReport = () => {


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


  const CyclebonusList = [
    {
      cvp: 20,
      title: "Retail/Other",
      description: "Profit from selling products directly",
    },
    {
      cvp: 20,
      title: "Sponsorship bonus",
      description: "Bonuses for referring and sponsoring new members",
    },
    {
      cvp: 20,
      title: "Matching Bonus",
      description: "Earn based on group sales volume on both team legs",
    },
    {
      cvp: 20,
      title: "Fission Bonus",
      description: "Residual income potential",
    },
  ];



  const MonthlybonusList = [
    {
      cvp: 20,
      title: "Achiever Bonus",
      description: "Pool-based bonus",
    },
    {
      cvp: 20,
      title: "Development Bonus",
      description: "Maintains active volume for commission eligibility.",
    },
    {
      cvp: 20,
      title: "Leadership Bonus",
      description: "Pool-based bonus distributed among high-ranking members",
    },

  ];

  return (
    <div className='dashboard performance-report report-two'>

      <HeaderDashboard />
      <SideNav />

      <div className="wrapper">
        <AsideBar />

        <div className="all-content">
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
                <VolumePersonal
                  userData={{
                    id: "4445721.201",
                    level: "Gold",
                    age: "15 years 2 months",
                    conversionRate: "6.6",
                    nextLevel: "Star-Gl",
                    totalBonus: "275.4",
                  }}
                  bonuses={[
                    { title: "Sponsorship Bonus", amount: "0" },
                    { title: "Growth award", amount: "103.84" },
                    { title: "Matching Bonus", amount: "111.4" },
                  ]}
                  dates={[
                    "May 12 2025",
                    "May 13 2025",
                    "May 14 2025",
                    "May 15 2025",
                    "May 16 2025",
                  ]}
                />

              </div>
              <div className="col-xl-5 mt-xl-0 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                <NotificationList />
              </div>
            </div>
          </div>


          <section className="bonus-report mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="info-item">
                    <div className="info-header">
                      <div className="header-tt d-flex align-items-center justify-content-between">
                        <h6>Bonus Report</h6>
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
                        <div className="col-lg-7">
                          <div className="cycle-bonus">
                            <h5 className="naming-title text-center">
                              Cycle Bonus
                            </h5>
                            <div className="all-bns-items mt-3">
                              {CyclebonusList.map((item, index) => (
                                <CycleBonusItem
                                  key={index}
                                  cvp={item.cvp}
                                  title={item.title}
                                  description={item.description}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 mt-lg-0 mt-mg-4 mt-4">
                          <div className="monthly-bonus">
                            <h5 className="naming-title text-center">
                              Monthly Bonus
                            </h5>
                            <div className="all-bns-items mt-3">
                              {MonthlybonusList.map((item, index) => (
                                <CycleBonusItem
                                  key={index}
                                  cvp={item.cvp}
                                  title={item.title}
                                  description={item.description}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="matching-bonus volume-monitor mt-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="info-item">
                    <div className="info-header">
                      <div className="header-tt d-flex align-items-center justify-content-between">
                        <h6>Volume Report For BC (Matching Bonus)</h6>
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
                          <DateCycle items={cycleDates} />
                        </div>
                        <div className="col-lg-10">
                          <BonusSystem />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <VolumeHistory />


          <DecaReport />
        </div>
      </div>

      <Footer />
    </div>
  )
}


export default PerformanceReport