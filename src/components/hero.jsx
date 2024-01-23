import React from "react";
import Pfp from "../assets/Pfp.png"
import github  from "../assets/SocialMediaLogos/githublogo.png"
import instagram  from "../assets/SocialMediaLogos/instagram.png"
import linkedhero  from "../assets/SocialMediaLogos/linkedhero.png"
import email  from "../assets/SocialMediaLogos/emaillogo.png"
import resume  from "../assets/SocialMediaLogos/resume.png"
import { Tooltip } from '@chakra-ui/react'

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
            <div className="heroSocial">
                            <ul className="heroSocialList">
                                <li className="hero-social hidden stackLogo">
                                <a href="https://github.com/RoycejChan" target="_blank">
                                    <img src={github} alt="" />
                                    </a>
                                </li>
                                <li className="hero-social hidden stackLogo">
                                <a href="https://www.instagram.com/roycejse/" target="_blank">
                                    <img src={instagram} alt="" />
                                    </a>
                                </li>
                                <li className="hero-social hidden stackLogo">
                                <a href="https://www.linkedin.com/in/royceescalona/" target="_blank">
                                    <img src={linkedhero} alt="" />
                                    </a>
                                </li>
                                <li className="hero-social hidden stackLogo">
                                <a href="https://docs.google.com/document/d/e/2PACX-1vSmqDqOXTlHpSfBgQjeG0Ox-j7puDJ3LLLxzcIT1M95-UUMPAOGekOudpWqdYQ7UIoqsLUYESW6mkwS/pub" target="_blank">
                                    <img src={resume} alt="" />
                                    </a>
                                </li>
                                <li className="hero-social hidden stackLogo show" id="email">
                                <Tooltip label="Rouyce23@gmail.com" aria-label='A tooltip'>
                                    <img src={email} alt="" />
                                    </Tooltip>
                                </li>
                            </ul>
            </div>
            <h1 className="intro-message animate__animated animate__backInUp" >

A California based Web developer, specializing in UI/UX design, responsive web design, and fast load time. 
I am passionate about being part of growing a business and enchancing user experiences.
        </h1>
            <button className="intro-btn  animate__animated animate__backInUp animate__delay-1s" onClick={()=> scrollToSection('projects-section')}>View my Work 👇</button>
        </section>
    )
}
