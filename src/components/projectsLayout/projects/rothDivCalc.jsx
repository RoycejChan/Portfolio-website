import React from "react";
import rothDivCalcSS from "../../../assets/projectScreenshots/rothDivCalc.png"
import lifeInvaderSS from "../../../assets/projectScreenshots/lifeInvader.png"
import tailwindCSS from "../../../assets/CodeLangLogos/tailwind.png"
import materialUI from "../../../assets/CodeLangLogos/materialUI.png"
import chakraUI from "../../../assets/CodeLangLogos/chakraUI.png"
import html from "../../../assets/CodeLangLogos/html.png"
import typescript from "../../../assets/CodeLangLogos/typescript.png"
import react from "../../../assets/CodeLangLogos/reactlogo.png"
import python from "../../../assets/CodeLangLogos/pythonlogo.png"
import node from "../../../assets/CodeLangLogos/nodejs.png"
import mysql from "../../../assets/CodeLangLogos/mysql.png"
import mongodb from "../../../assets/CodeLangLogos/mongodb.png"
import js from "../../../assets/CodeLangLogos/js.png"
import firebase from "../../../assets/CodeLangLogos/firebase.png"
import express from "../../../assets/CodeLangLogos/express.png"
import django from "../../../assets/CodeLangLogos/django.png"
import css from "../../../assets/CodeLangLogos/css.png"


export default function RothDivCalc() {
    return (
        <>

            {/* life Invader  PROJECT */}

  <div className="project">
      <div className="task-manager-img project-img imghidden">
          <a href="https://rothdividendcalc.onrender.com/"  target="blank_">
            <img src="https://i.gyazo.com/13e3084addea830e07bc016b3cdbacbc.gif" alt="Roth Dividend Calculator Screenshot Image Not Available" />
          </a>
      </div>
      <div className="project-details">
          <h1>RothDivCalc</h1>
          <div className="projectLanguages">
              <div className="hidden stackLogo">
                 <img src={html} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={css} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={js} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={tailwindCSS} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={materialUI} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={react} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={python} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={django} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={typescript} alt="" />
              </div>
          </div>
<p>
    I created this <purple>Full Stack</purple> Roth IRA and Dividend portfolio website using <red>Python/Django</red> for the backend, <red>ReactJS + Typescript</red> for the frontend, and <red>TailwindCSS + some MaterialUI</red> for styling.

    For data presentation elements, I used <red>ChartJS + MaterialUI Data Table</red>.

    The website is <purple>responsive</purple> to only iPhone 12 Pro and iPad.

    The site is hosted with Render's free hosting service, so upon opening the site, there is about a 1-minute delay before the server can respond.
</p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://rothdividendcalc.onrender.com/" target="blank_">Live app</a></button>

          <button className="project-btn github-repo-btn"><a href="https://github.com/RoycejChan/RothDivCalc" target="blank_">Learn more</a></button>
        </div>
      </div>
  </div>
  
</>
    )

}