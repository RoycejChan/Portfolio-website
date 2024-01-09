import React from "react";
import rothDivCalcSS from "../../../assets/projectScreenshots/rothDivCalc.png"



export default function RothDivCalc() {
    return (
        <>

            {/* life Invader  PROJECT */}

  <div className="project">
      <div className="task-manager-img project-img">
          <a href="https://rothdividendcalc.onrender.com/"  target="blank_">
            <img src="https://i.gyazo.com/13e3084addea830e07bc016b3cdbacbc.gif" alt="Roth Dividend Calculator Screenshot Image Not Available" />
          </a>
      </div>
      <div className="project-details">
          <h1>RothDivCalc</h1>
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