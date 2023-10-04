import React from "react";
import Pfp from "../assets/Pfp.png"

export default function About() {
    return (
            <div className="background-color" >
                <div className="about-container container section" id="about-section">
                    <div className="about">
                        <h1 className="about-header">
                            About me
                        </h1>
                        <p className="about-message">
                        Hello There! I'm <purple>Royce Escalona</purple>, a passionate tech enthusiast 
                        based near California with a strong desire to learn 
                        and grow in this ever-changing industry. While I'm at the 
                        beginning of my journey, I'm excited about the endless 
                        possibilities that this field offers.
                        My portfolio is a reflection of my dedication to honing my 
                        skills and taking on exciting challenges. I've worked on 
                        personal projects, explored coding languages and frameworks.
                        I'm eager to collaborate, create, and make a positive impact 
                        in the web development and IT community. Feel free to explore 
                        my portfolio and <red>join me</red> on this exciting journey.
                        </p>
                        <hr className="about-hr" />
                        <h6 className="technologies">
                            Technologies
                        </h6>
                        <div className="technologies-container">
                            <ul className="techList">
                                <li className="techLanguage">
                                    Javascript(ES6+)
                                </li>
                                <li className="techLanguage">
                                    CSS + Grid + Flexbox
                                </li>
                                <li className="techLanguage">
                                    HTML
                                </li>
                            </ul>
                            <ul className="techList">
                                <li className="techLanguage">
                                    ReactJS
                                </li>
                                <li className="techLanguage">
                                    Python
                                </li>
                                <li className="techLanguage">
                                    SQL
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="about-img">
                            <img src={Pfp} alt="PFP" className="about-pfp-img"/>
                        </div>
                </div>
            </div>
    )
}