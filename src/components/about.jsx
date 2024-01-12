import React from "react";
// import Pfp from "../assets/Pfp.png"
import otherPfp from "../assets/otherpfp.png"
import html from "../assets/CodeLangLogos/html.png"
import lifeInvaderSS from "../assets/projectScreenshots/lifeInvader.png"
import tailwindCSS from "../assets/CodeLangLogos/tailwind.png"
import materialUI from "../assets/CodeLangLogos/materialUI.png"
import chakraUI from "../assets/CodeLangLogos/chakraUI.png"
import typescript from "../assets/CodeLangLogos/typescript.png"
import react from "../assets/CodeLangLogos/reactlogo.png"
import python from "../assets/CodeLangLogos/pythonlogo.png"
import node from "../assets/CodeLangLogos/js.png"
import mysql from "../assets/CodeLangLogos/mysql.png"
import mongodb from "../assets/CodeLangLogos/mongodb.png"
import js from "../assets/CodeLangLogos/js.png"
import firebase from "../assets/CodeLangLogos/firebase.png"
import express from "../assets/CodeLangLogos/express.png"
import django from "../assets/CodeLangLogos/django.png"
import css from "../assets/CodeLangLogos/css.png"
import aws from "../assets/CodeLangLogos/aws.png"

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
                                    <img src={js} alt="" />
                                </li>
                                <li className="techLanguage">
                                    <img src={tailwindCSS} alt="" />
                                </li>
                                <li className="techLanguage">
                                    <img src={html} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={node} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={express} alt="" />
                                </li>   
                                <li className="techLanguage">
                                <img src={css} alt="" />
                                </li>                       
                               <li className="techLanguage">
                               <img src={typescript} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={react} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={python} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={mysql} alt="" />

                                </li>
                                <li className="techLanguage">
                                <img src={mongodb} alt="" />

                                </li>
                                <li className="techLanguage">
                                <img src={materialUI} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={chakraUI} alt="" />
                                </li>
                                <li className="techLanguage">
                                <img src={tailwindCSS} alt="" />
                                </li>
                                <li className="techLanguage">
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