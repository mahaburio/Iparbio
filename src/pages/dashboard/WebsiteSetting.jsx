import React from 'react';
import 'flatpickr/dist/themes/material_green.css';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import CardGridItem from '../../components/dashboard/CardGridItem';
import Footer from '../../components/footer/footer';
import WebsiteInfoSection from '../../components/dashboard/WebsiteSettingAction';

const WebsiteSetting = () => {

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


      <section className="website-setting">
        <div className="container">
          <div className="main-head-title">Website Setting</div>
          <p className="mt-3">
            Getting your Personal IparHealth Website set up is the easiest way
            to share your business and Ipar’s products. Anyone who buys a
            product or signs up as a business owner through your unique URL will
            automatically be linked to your organization.
          </p>
          <strong className="">Customize Your Website in Few Easy Step</strong>
          <div className="customize-cards">
            <div className="cd-itm">
              <div className="img">
                <img src="images/customize.webp" alt="Customize" />
              </div>
              <div className="cd-dsc">
                <div className="cd-tt"><span>✓</span> Set Up Your Details</div>
                <div className="cd-sbt mt-1">
                  Choose your subdomain, business name, and contact info.
                </div>
              </div>
            </div>

            <div className="cd-itm">
              <div className="img">
                <img src="images/personalize.webp" alt="Personalize" />
              </div>
              <div className="cd-dsc">
                <div className="cd-tt"><span>✓</span> Personalize Your Page</div>
                <div className="cd-sbt mt-1">
                  Add your top product picks, share your story, and connect your
                  socials.
                </div>
              </div>
            </div>

            <div className="cd-itm">
              <div className="img">
                <img src="images/optimize.webp" alt="Optimize" />
              </div>
              <div className="cd-dsc">
                <div className="cd-tt"><span>✓</span> Optimize &amp; Share</div>
                <div className="cd-sbt mt-1">
                  Enable Google Tags for tracking and start sharing your unique
                  link!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




     <WebsiteInfoSection />

      <Footer />
    </div>
  );
};

export default WebsiteSetting;
