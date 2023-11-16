import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import VideoBackground from "../components/VideoBackground";

export default function Home() {
    return (
        <div className="home">
            <VideoBackground id="885094088"/>
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