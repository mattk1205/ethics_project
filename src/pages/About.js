import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p> 
        Discover ethical perspectives tailored to your interests on our website. Explore 
        various viewpoints on issues by navigating our platform for a comprehensive 
        understanding. Dive into customized ethical considerations that seamlessly align with 
        your quest for knowledge. This is a space where ethical discourse flourishes, providing 
        a rich source for diverse and enlightened perspectives.
        </p>
      </div>
    </div>
  );
}

export default About;
