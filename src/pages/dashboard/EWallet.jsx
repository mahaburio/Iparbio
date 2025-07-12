import React, { useState } from 'react';
import 'flatpickr/dist/themes/material_green.css';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import Footer from '../../components/footer/footer';
import WalletHub from '../../components/dashboard/EWallet/WalletHub';
import SummaryTable from '../../components/dashboard/EWallet/SummaryTable';
import ChangePassword from '../../components/dashboard/EWallet/ChangePassword';
import Statement from '../../components/dashboard/EWallet/Statement';
import Cashout from '../../components/dashboard/EWallet/Cashout';
import SendDetails from '../../components/dashboard/EWallet/SendProcess';

const EWallet = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const summaryData = [
    {
      accountName: "Commission Account",
      accountNumber: "100103853174",
      currency: "USD",
      balance: "0.00",
    },
    {
      accountName: "Coupons",
      accountNumber: "100103853174",
      currency: "Point",
      balance: "0.00",
    },
    {
      accountName: "Volumes",
      accountNumber: "100103853174",
      currency: "PV",
      balance: "0.00",
    },
  ];

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'summary':
        return <SummaryTable data={summaryData} />;
      case 'send':
        return <SendDetails />;
      case 'cashout':
        return <Cashout />;
      case 'statement':
        return <><Statement /></>;
      case 'changePassword':
        return <ChangePassword />;
      case 'modifyProfile':
        return <div className="wallet-details modifyProfileDetails activeEwallet">Modify Profile Component</div>;
      default:
        return <div className="wallet-details activeEwallet">Select an option</div>;
    }
  };

  return (
    <div>
      <HeaderDashboard isEwalletPage={true} />
      <SideNav />

      <section className="e-wallet-section mt-5">
        <div className="container">
          <div className="main-head-title">E-wallet</div>
          <div className="e-wallet-wrapper mt-5">
            <div className="row">
              <div className="col-lg-3">
                <WalletHub activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              <div className="col-lg-9 mt-lg-0 mt-5">
                {renderActiveContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EWallet;
