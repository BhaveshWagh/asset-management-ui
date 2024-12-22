import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/path-to-logo.png" alt="MFRF Logo" className="logo" />
        <div className="navbar-title">
          <h1 className="heading">MFRF</h1>
          <span className="sub-heading">Asset Management</span>
        </div>
      </div>
      <div className="navbar-icons">
        <i className="fa fa-bell"></i>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
