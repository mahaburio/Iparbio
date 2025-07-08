import React from 'react'
import MainWrapper from '../../components/common/Mainwrapper'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import Footer from '../../components/footer/footer'
import RankUpReport from '../../components/enrollment/RankUpReport'

export const RankUpReportMonth = () => {
  return (
    <MainWrapper>
      <div className="dashoard">
        <HeaderDashboard />
        <SideNav />

        <RankUpReport />

        <Footer />
      </div>
    </MainWrapper>
  )
}

// Rank Up REport Deca

export const RankUpReportDeca = () => {
  return (
    <MainWrapper>
      <div className="dashoard">
        <HeaderDashboard />
        <SideNav />

        <RankUpReport />

        <Footer />
      </div>
    </MainWrapper>
  )
}
