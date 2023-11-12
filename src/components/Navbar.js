import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import CompanyLogo from "../assets/Company-Logo.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={CompanyLogo} alt="Org-Logo" className="navbar-logo" onClick={navigateHome} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/ethics"> Ethics </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </ Link>
        <Link to="/ethics"> Ethics </ Link>
        <button onClick={toggleNavbar}></button>
      </div>
    </div>
  );
}

export default Navbar;
