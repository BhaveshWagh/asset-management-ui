import React from "react";
import "./DateSelection.css";

const DateSelection = () => {
  return (
    <div className="date-selection">
      {/* Back Arrow */}
      <div className="back-arrow">
        <i className="fa fa-chevron-left"></i>
      </div>

      {/* Title and Subtitle */}
      <div className="navbar-title">
        <span>CCAS Dashboard</span> 
        <span> | </span>
        <span className="subtitle">Sales Overview</span>
      </div>

     
      <div className="date-field">
        <span>21 Mar 2020</span>
        <span className="date-label">START DATE</span>
        <i className="fa fa-calendar calendar-icon"></i>
      </div>

      {/* End Date */}
      <div className="date-field">
        <span>21 Mar 2021</span>
        <span className="date-label">END DATE</span>
        <i className="fa fa-calendar calendar-icon"></i>
      </div>

      {/* Export Button */}
      <div className="export-btn">

      <button className="export-button">
        EXPORT <i className="fa fa-angle-down"></i>
      </button>
      </div>


    </div>
  );
};

export default DateSelection;
