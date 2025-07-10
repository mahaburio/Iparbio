import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import CardGridItem from '../../components/dashboard/CardGridItem';
import Footer from '../../components/footer/footer';
import CycleBonusItem from '../../components/dashboard/CycleBonusItem';

const PaymentStatement = () => {
  const calendarRef1 = useRef(null);
  const calendarRef2 = useRef(null);

  useEffect(() => {
    if (calendarRef1.current) {
      flatpickr(calendarRef1.current, {
        inline: true,
        defaultDate: '2024-09-01',
        showMonths: 1,
        enableTime: false,
      });
    }

    if (calendarRef2.current) {
      flatpickr(calendarRef2.current, {
        inline: true,
        defaultDate: '2025-02-04',
        showMonths: 1,
        enableTime: false,
      });
    }
  }, []);




  const CyclebonusList = [
    {
      cvp: 20,
      unit: "$",
      title: "Retail/Other",
      
    },
    {
      cvp: 20,
      unit: "$",
      title: "Sponsorship bonus",

    },
    {
      cvp: 20,
      unit: "$",
      title: "Sales Bonus",
     
    },
    {
      cvp: 20,
      unit: "$",
      title: "Commission",
     
    },
  ];



const MonthlybonusList = [
  {
    cvp: 20,
    unit: "$",
    title: "Development Bonus",
   
  },
  {
    cvp: 20,
    unit: "$",
    title: "Leadership Bonus",
   
  },
  {
    cvp: 20,
    unit: "$",
    title: "Gross Income",
   
  },
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

      <section className="payment-statement mt-5">
        <div className="container">
          <div className="main-head-title">Payment Statement</div>
          <p className="mt-3 head-dsc-title">
            This document does not reflect additional compensation outside the Ipar compensation plan and should not be used for tax calculations.
          </p>

          <div className="statement-calendar mt-5">
            <div className="row">
              <div className="col-lg-6">
                <div id="calendar1" ref={calendarRef1} className="calendar flatpickr-input" readOnly></div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-4">
                <div id="calendar2" ref={calendarRef2} className="calendar flatpickr-input" readOnly></div>
              </div>
            </div>

            <div className="btn-sec mt-4 text-end">
              <button className="tsp-btn">Cancel</button>
              <button className="black-btn">Apply</button>
            </div>
          </div>
        </div>
      </section>



      <section className="bonus-report payment-statement-report mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="info-item">
                <div className="info-header d-flex align-items-center justify-content-between">
                  <div className="total fw-medium">
                    Total: <span className="green-title">($1230)</span>
                  </div>
                  <div className="date fw-medium">Date: Feb 10,2025</div>
                </div>

                <div className="info-body p-lg-3 p-md-3 p-sm-3 p-2">
                  <div className="row p-lg-3 p-1">
                    <div className="col-lg-7">
                      <div className="cycle-bonus">
                        <div className="all-bns-items mt-3">
                          {CyclebonusList.map((item, index) => (
                            <CycleBonusItem
                              key={index}
                              cvp={item.cvp}
                              title={item.title}
                              unit= {item.unit}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 mt-lg-0 mt-mg-4 mt-4">
                      <div className="monthly-bonus">
                        <div className="all-bns-items mt-3">
                          {MonthlybonusList.map((item, index) => (
                            <CycleBonusItem
                              key={index}
                              cvp={item.cvp}
                              title={item.title}
                              unit= {item.unit}
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

      <Footer />
    </div>
  );
};

export default PaymentStatement;
