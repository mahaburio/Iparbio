import React, { useEffect, useRef } from "react";
import FilterPanel from "./TeamManagerList/AccordionFilters";

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
                <a href="../dashboard/enrollment_network.html">Enrollment Network Viewer</a>
              </li>
              <li>
                <a href="../dashboard/personally_enrolled.html">Personally Enrolled Team</a>
              </li>
              <li>
                <a href="../dashboard/volume_report.html">Volume Report</a>
              </li>
              <li>
                <a href="../dashboard/enrollment_report.html">Enrolment Report</a>
              </li>
              <li>
                <a href="../dashboard/order_history_report.html">Order History Report</a>
              </li>
              <li>
                <a href="../dashboard/subscription_order.html">Unprocessed Subscription Order</a>
              </li>
              <li>
                <a href="../dashboard/monthly_report.html">Monthly Report (4 Cycles)</a>
              </li>
              <li>
                <a href="../dashboard/buisness_report.html">Business Center Report</a>
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
