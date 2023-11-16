import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../assets/BackgroundVideo.mp4';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home">
            <video autoPlay muted loop playsInline id="background-video">
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-overlay">
                <div className="headerContainer">
                    <h1>Welcome to The Beast</h1>
                    <p>How are you today?</p>
                    <div className="instructions-box">
                        <ul className="instructions-list">
                            <li>Ask The Beast an ethical question</li>
                            <li>Choose the ethical stance you want The Beast to take</li>
                            <li>Wait for The Beast to generate a response</li>
                        </ul>
                    </div>
                    <Link to="/ethics" className="ask-button-link">
                        <p></p>
                        <button className="ask-button">Enter The Beast &#8594;</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}