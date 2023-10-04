import React from "react";
import Pfp from "../assets/Pfp.png"
import Handemoji from "../assets/handemoji.png"
import AOS from 'aos';
import "aos/dist/aos.css";


export default function Hero() {
        AOS.init();
    return (
        <section className="intro section" id="hero-section">
            <div className="pfp-container">
                 <img src={Pfp} alt="Profile Picture" className="intro-pfp" />
            </div>
            <h2 className="intro-header" data-aos={"zoom-in-up"} >
                Hello, Im Royce <span><img src={Handemoji} alt="Waving Hand Emoji" class="handemoji" /></span>
            </h2>
            <h1 className="intro-message" data-aos={"slide-left"}>
            A self-taught enthusiast in coding and IT tech, 
            I'm on a mission to break into the world of technology and 
            innovation. Welcome to my portfolio, where I showcase my journey
            and projects.
            </h1>
            <button className="intro-btn" data-aos={"zoom-in"}>View my Work</button>
        </section>
    )
}