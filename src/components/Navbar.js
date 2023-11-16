import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import CompanyLogo from "../assets/Company-Logo.png";
import CompanyLogoHover from "../assets/Company-Logo-Hover.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const navigateHome = () => {
    navigate('/');
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img 
          src={isHovering ? CompanyLogoHover : CompanyLogo} 
          alt="Org-Logo" 
          className="navbar-logo" 
          onClick={navigateHome} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/ethics"> Submit Question </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </ Link>
        <Link to="/ethics"> Submit Question </ Link>
        <button onClick={toggleNavbar}></button>
      </div>
    </div>
  );
}

export default Navbar;

