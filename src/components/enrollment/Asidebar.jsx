import React, { useEffect, useRef } from "react";
import FilterPanel from "./TeamManagerList/AccordionFilters";

import { NavLink } from 'react-router-dom';

const AsideBar = () => {
  const asideRef = useRef(null);
  const forCollapseRef = useRef(null);
  const teamManagerListRef = useRef(null);
  const closeTeamManagerRef = useRef(null);

  useEffect(() => {
    const forCollapse = forCollapseRef.current;
    const aside = asideRef.current;
    const teamManagerList = teamManagerListRef.current;
    const closeTeammanager = closeTeamManagerRef.current;
    const allContent = document.querySelector(".all-content"); // Keep external ref if global

    const toggleSidebar = () => {
      aside.classList.toggle("collapsed");
      allContent?.classList.toggle("expanded");
      forCollapse.classList.toggle("clicked");

      if (window.innerWidth < 1350) {
        const isHidden = teamManagerList.classList.toggle("hidden-menu");
        document.body.style.overflow = isHidden ? "hidden" : "auto";
      }
    };

    if (forCollapse) forCollapse.addEventListener("click", toggleSidebar);
    if (closeTeammanager) closeTeammanager.addEventListener("click", toggleSidebar);

    // Clean up
    return () => {
      if (forCollapse) forCollapse.removeEventListener("click", toggleSidebar);
      if (closeTeammanager) closeTeammanager.removeEventListener("click", toggleSidebar);
    };
  }, []);

  return (
    <div className="aside team-manager-sidebar" ref={asideRef}>
      <div id="teamManagerList" ref={teamManagerListRef}>
        <div className="forCollapse" ref={forCollapseRef}>
          <i className="ri-arrow-left-double-line"></i>
        </div>
        <div className="team-manager-body">
          <div className="team-manager-sitcky">
            <h6 className="m-0">Team Manager</h6>
            <div className="refresh d-flex align-items-center gap-1">
              <div className="rfr">
                <i className="ri-reset-left-line"></i>
              </div>
              <div className="close-teammanager" ref={closeTeamManagerRef}>
                <i className="ri-close-line"></i>
              </div>
            </div>
          </div>

          <div className="team-body p-2">
            <div className="search-wrapper mt-2">
              <div className="icon">
                <i className="ri-search-line"></i>
              </div>
              <input type="search" placeholder="Search here..." />
            </div>

            <ul className="team-link-list mt-3 p-0">


              <li>

                <NavLink to="/enrollment-network" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Enrollment Network Viewer
                </NavLink>
              </li>


              <li>
                <NavLink to="/performance-report" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Personally Enrolled Team
                </NavLink>
              </li>

              <li>
                <NavLink to="/volume-report" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Volume Report
                </NavLink>
              </li>


              <li>
                <NavLink to="/enrollment-report" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Enrolment Report
                </NavLink>
              </li>

              <li>
                <NavLink to="/order-history-report" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Order History Report
                </NavLink>
              </li>

              <li>
                <NavLink to="/subscription-order" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Unprocessed Subscription Order
                </NavLink>
              </li>

              <li>
                <NavLink to="/monthly-report" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  UMonthly Report (4 Cycles)
                </NavLink>
              </li>

              <li>
                <NavLink to="/business-report" className={({ isActive }) => isActive ? 'activeTeamManager' : ''}>
                  Business Center Report
                </NavLink>
              </li>
            </ul>

            <FilterPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBar;
