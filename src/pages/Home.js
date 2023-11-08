import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import "./Ethics"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> This is a template </h1>
        <p> Style how you see fit</p>
        <Link to="/ethics">
          <button> Button to gpt </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
