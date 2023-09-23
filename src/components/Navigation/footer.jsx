import React from "react";
import up from "../../assets/uparrow.png";
import email from "../../assets/SocialMediaLogos/emaillogo.png";
import linkedln from "../../assets/SocialMediaLogos/linkedInlogo.png";
import github from "../../assets/SocialMediaLogos/githublogo.png";
import discord from "../../assets/SocialMediaLogos/discordlogo.png";
import steam from "../../assets/SocialMediaLogos/steamlogo.png";


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
                            <li className="mediaItem"><a href="" target="_blank"><img src={email} alt="Email" className="mediaImage"/></a></li>
                            <li className="mediaItem"><a href="https://www.linkedin.com/in/royceescalona/" target="_blank"><img src={linkedln} alt="Linkedln" className="mediaImage" /></a></li>
                            <li className="mediaItem"><a href="https://github.com/rroyceee" target="_blank"><img src={github} alt="Github" className="mediaImage"/></a></li>
                            <li className="mediaItem"><a href="https://discordapp.com/users/320435054578761731" target="_blank"><img src={discord} alt="Discord" className="mediaImage"/></a></li>
                            <li className="mediaItem"><a href="https://steamcommunity.com/profiles/76561198267258063/" target="_blank"><img src={steam} alt="Steam" className="mediaImage"/></a></li>
                        </ul>
                </div>
                <p className="footerLLC">Royce Escalona @2023</p>
            </div>
        </div>
    )
}