import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const dateSelectionBar = document.querySelector(".date-selection");

    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const dateSelectionHeight = dateSelectionBar
      ? dateSelectionBar.offsetHeight
      : 0;

    setTopOffset(navbarHeight + dateSelectionHeight);
  }, []);

  return (
    <div
      className="sidebar"
      style={{
        top: `${topOffset}px`,
      }}
    >
      <ul className="sidebar-nav">
        <li className="nav-item active">
          <i className="fa fa-chart-line"></i> Sales Overview
        </li>
        <li className="nav-item">
          <i className="fa fa-chart-line"></i> Shareholding Analysis
        </li>
        <li className="nav-item">
          <i className="fa fa-calendar"></i> AUM Analysis
        </li>
        <li className="nav-item">
          <i className="fa fa-users"></i> Top Creators / Redeemers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
