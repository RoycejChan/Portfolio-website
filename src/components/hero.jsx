import React from "react";
import Pfp from "../assets/Pfp.png"
import Handemoji from "../assets/handemoji.png"


export default function Hero() {

    //SCROLLS USER TO PROJECTS SECTION
    const scrollToSection = (sectionID) => {

        const section = document.getElementById(sectionID);

        if (sectionID) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {

            alert("NO");
        };

    };
    return (
        <section className="intro section" id="hero-section">
            <div className="pfp-container">
                 <img src={Pfp} alt="Profile Picture" className="intro-pfp" />
            </div>
            <h2 className="intro-header animate__animated animate__backInDown"  >
                Hello, Im Royce <span className="hero-emoji">👋</span>
            </h2>
            <h1 className="intro-message animate__animated animate__backInUp" >
            A self-taught enthusiast in coding and IT tech, 
            I'm on a mission to break into the world of technology and 
            innovation. Welcome to my portfolio, where I showcase my journey
            and projects.
            </h1>
            <button className="intro-btn  animate__animated animate__backInUp animate__delay-1s" onClick={()=> scrollToSection('projects-section')}>View my Work 👇</button>
        </section>
    )
}