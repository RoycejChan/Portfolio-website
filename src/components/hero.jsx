import React from "react";
import Pfp from "../assets/Pfp.jpg"
import Handemoji from "../assets/handemoji.png"

export default function Hero() {
    return (
        <section className="intro section" id="hero-section">
            <img src={Pfp} alt="Profile Picture" className="intro-pfp" />
            <h2 className="intro-header">
                Hello, Im Royce <span><img src={Handemoji} alt="Waving Hand Emoji" class="handemoji" /></span>
            </h2>
            <h1 className="intro-message">
            A self-taught enthusiast in coding and IT tech, 
            I'm on a mission to break into the world of technology and 
            innovation. Welcome to my portfolio, where I showcase my journey
            and projects.
            </h1>
            <button className="intro-btn">View my Work</button>
        </section>
    )
}