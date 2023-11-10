import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import CompanyLogo from "../assets/Company-Logo.png";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
        <img src="../assets/Company-Logo.png" alt="Org-Logo"></img>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/ethics"> Ethics </Link>
        </div>
      </div>
      <div className="rightSide">
      <div
        className="company-logo"
        style={{ backgroundImage: `url(${CompanyLogo})` }}
      >logo</div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/ethics"> Ethics </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
