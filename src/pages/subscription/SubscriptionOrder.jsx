import React from 'react';
import HeaderIntialize from '../../components/header/Header';
import MainWrapper from '../../components/common/Mainwrapper';
import Footer from '../../components/footer/footer';


const SubscriptionOrder = () => {

  return (
    <MainWrapper>
      <div className='signup_page ipar_elite'>
        <HeaderIntialize pvBars={false} Sponsor={true} />
      
        <Footer footerOnlyDesc={true} footerDefault={false} />
      </div>
    </MainWrapper>
  );
};

export default SubscriptionOrder;
