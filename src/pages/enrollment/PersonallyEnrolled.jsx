import React from 'react'
import HeaderDashboard from '../../components/header/HeaderDashboard'
import SideNav from '../../components/enrollment/Sidenav/SideNav'
import AsideBar from '../../components/enrollment/Asidebar'

const PersonallyEnrolled = () => {
  return (
    <div>
      <HeaderDashboard />
      <SideNav />
      <AsideBar />
    </div>
  )
}

export default PersonallyEnrolled