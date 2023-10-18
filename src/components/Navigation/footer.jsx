import React from "react";
import up from "../../assets/uparrow.png";
import email from "../../assets/SocialMediaLogos/emaillogo.png";
import linkedln from "../../assets/SocialMediaLogos/linkedInlogo.png";
import github from "../../assets/SocialMediaLogos/githublogo.png";


export default function Footer() {


    const goBackUp = (sectionID) => {

        const section = document.getElementById(sectionID);

        if (section) {
            section.scrollIntoView({behavior:'smooth'});
        }
    }


    return (
        <div id="background-color-footer">
            <div className="container footer">
                <button className="footer-btn">
                    <img src={up} alt="Up button" className="restart-btn" id="gobackup" onClick={() => goBackUp('hero-section')}/>
                </button>
                <div className="mediaListContainer">
                        <ul className="mediaList">
                            <li className="mediaItem"><a href="mailto:Rouyce23@gmail.com" target="_blank"><img src={email} alt="Email" className="mediaImage"/></a></li>
                            <li className="mediaItem"><a href="https://www.linkedin.com/in/royceescalona/" target="_blank"><img src={linkedln} alt="Linkedln" className="mediaImage" /></a></li>
                            <li className="mediaItem"><a href="https://github.com/rroyceee" target="_blank"><img src={github} alt="Github" className="mediaImage"/></a></li>
                        </ul>
                </div>
                <button className="portfolio-btn"><a href="https://github.com/rroyceee/Portfolio-website" target="blank_">Portfolio Repo</a></button>
                <p className="footerLLC">Royce Escalona @2023</p>
            </div>
        </div>
    )
}