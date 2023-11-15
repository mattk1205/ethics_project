import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/howtousebackground.png";
import "../styles/Home.css";
import "./Ethics"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div className = "headder-instructions">
          <h1 id="how-2"> How to use </h1>
            <div className = "box">
              <ul className = "instructions">
                <li>
                  Write your ethical question in the box
                </li>
                <li>
                  Choose ethical stance you want the AI to take
                </li>
                <li>
                  Wait for AI to write a response
                </li>
              </ul>
           </div>
        </div>
        <Link to="/ethics">
          <button> Ask a question </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
