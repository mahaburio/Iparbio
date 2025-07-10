import React from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import SideNav from '../../components/enrollment/Sidenav/SideNav';
import CardGridItem from '../../components/dashboard/CardGridItem';
import Footer from '../../components/footer/footer';
import ManageProfilesActions from '../../components/dashboard/ManageProfilesAction';

const ManageProfiles = () => {

  return (
    <div>
      <HeaderDashboard />
      <SideNav />

      <div className="manage-profiles mt-5">
        <section className="card-section py-5">
          <div className="container">
            <div className="cards-grid">
              <CardGridItem
                type="welcome"
                title="Welcome Alexsis!"
                idLink="85112564"
                levelText="Gold IBA"
              />
            </div>
          </div>
        </section>

        <ManageProfilesActions />


      </div>

      <Footer />
    </div>
  );
};

export default ManageProfiles;
