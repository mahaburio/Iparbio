import React from 'react';
import { Header } from '../../components';
import {Help} from '../../components/common/Help.jsx';
import Footer from '../../components/footer/footer.jsx';
import MainWrapper from '../../components/common/Mainwrapper.jsx';

function HomePage() {
  return (
    <MainWrapper className="homePage">
      <Header />
      <Help />
      <Footer />
    </MainWrapper>
  );
}

export default HomePage;
