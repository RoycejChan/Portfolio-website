import React from "react";
// import Pfp from "../assets/Pfp.png"
import otherPfp from "../assets/otherpfp.png"
import html from "../assets/CodeLangLogos/html.png"
import tailwindCSS from "../assets/CodeLangLogos/tailwind.png"
import materialUI from "../assets/CodeLangLogos/materialUI.png"
import chakraUI from "../assets/CodeLangLogos/chakraUI.png"
import typescript from "../assets/CodeLangLogos/typescript.png"
import react from "../assets/CodeLangLogos/reactlogo.png"
import python from "../assets/CodeLangLogos/pythonlogo.png"
import node from "../assets/CodeLangLogos/nodejs.png"
import mysql from "../assets/CodeLangLogos/mysql.png"
import mongodb from "../assets/CodeLangLogos/mongodb.png"
import js from "../assets/CodeLangLogos/js.png"
import firebase from "../assets/CodeLangLogos/firebase.png"
import express from "../assets/CodeLangLogos/express.png"
import django from "../assets/CodeLangLogos/django.png"
import css from "../assets/CodeLangLogos/css.png"
import aws from "../assets/CodeLangLogos/aws.png"
import { Tooltip } from '@chakra-ui/react'

export default function About() {
    return (
            <div className="background-color" >
                <div className="about-container container section" id="about-section">
                    <div className="about">

                        <h1 className="about-header imghidden ">
                            About me
                        </h1>
                        <div className="header-box-about imghidden"></div>
                        <p className="about-message">
                        Hello! I'm <purple>Royce Escalona</purple>,a passionate tech enthusiast based in California with a strong desire to 
                        learn and grow in this ever-changing industry. I specialize in full-stack development, ensuring visually stunning, engaging, fast load time,
                         and responsive websites and applications. My portfolio is a reflection of my dedication to honing my skills and taking on new exciting challenges. 🧠
<br />
                        I'm eager to collaborate, create, and make a positive impact in the Web Development and Tech community.
                        <br /> 
                        <br />
                        In my free time, I like to work out, rock climb, do some gardening,
                         and occasionally car camp and travel to go camping, fishing, crabbing, and hiking.
                        
                        <br /> 
                        <br />

                        I am always open to new learning and development opportunities, professional and personal,
                         continuous learning has always been a passion of mine. So Feel free to explore my portfolio 
                         and <br /> <red>                                <Tooltip label="Rouyce23@gmail.com" >
Contact me</Tooltip></red> if you would like to collaborate and work with me 😎


                        </p>
                        <hr className="about-hr" />
                        <h6 className="technologies">
                            Technologies
                        </h6>
                        <div className="technologies-container">
                            <ul className="techList">
                                <li className="techLanguage hidetech stackLogo">
                                    <img src={js} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                    <img src={tailwindCSS} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                    <img src={html} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={node} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={express} alt="" />
                                </li>   
                                <li className="techLanguage hidetech stackLogo">
                                <img src={css} alt="" />
                                </li>                       
                               <li className="techLanguage hidetech stackLogo">
                               <img src={typescript} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={react} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={python} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={mysql} alt="" />

                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={mongodb} alt="" />

                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={materialUI} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={chakraUI} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={django} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={firebase} alt="" />
                                </li>
                                <li className="techLanguage hidetech stackLogo">
                                <img src={aws} alt="" />
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