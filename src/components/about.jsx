import React from "react";
// import Pfp from "../assets/Pfp.png"
import otherPfp from "../assets/otherpfp.png"

export default function About() {
    return (
            <div className="background-color" >
                <div className="about-container container section" id="about-section">
                    <div className="about">

                        <h1 className="about-header ">
                            About me
                        </h1>
                        <div className="header-box-about"></div>
                        <p className="about-message">
                        Hello! I'm <purple>Royce Escalona</purple>, a passionate tech enthusiast 

                        based in California with a strong desire to learn 

                        and grow in this ever-changing industry. While I'm at the 

                        beginning of my journey, I'm excited about the endless 

                        possibilities that this field offers.

                        My portfolio is a reflection of my dedication to honing my 

                        skills and taking on exciting challenges. 

                        I'm eager to collaborate, create, and make a positive impact 

                        in the web development and IT community.
                        <br /> 
                        <br />
                        In my free time, I like to workout, play videogames, do some gardening, and do outdoor physical activities such 

                        as camping, fishing, and hiking.
                        <br /> 
                        <br />
                        Feel free to explore 

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
                                    CSS/Tailwind/Flexbox
                                </li>
                                <li className="techLanguage">
                                    HTML
                                </li>
                                <li className="techLanguage">
                                    Node/Express JS
                                </li>
                                <li className="techLanguage">
                                    Google Firebase
                                </li>                         
                               <li className="techLanguage">
                                    TypeScript
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
                                    MySQL
                                </li>
                                <li className="techLanguage">
                                    MongoDB
                                </li>
                                <li className="techLanguage">
                                    Material & Chakra UI
                                </li>
                                <li className="techLanguage">
                                    Tailwind CSS
                                </li>
                                <li className="techLanguage">
                                    AWS RDS DB
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="about-img">
                            <img src={otherPfp} alt="PFP" className="about-pfp-img"/>
                        </div>
                </div>
            </div>
    )
}