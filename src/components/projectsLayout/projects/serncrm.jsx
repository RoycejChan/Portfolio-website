import React from "react";
import contractorSS from "../../../assets/projectScreenshots/contractorcrm.png"



export default function SernCrmApp() {
    return (
        <>

            {/* life Invader  PROJECT */}

  
  <div className="project">
      <div className="task-manager-img project-img">
          <a href="https://contractorcrm.onrender.com/"  target="blank_"><img src={contractorSS} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>Contractor CRM</h1>
          <p>
            I made this <purple>Full Stack </purple>CRM Application using<red>MySql</red> as the database, <red>Node/ExpressJS</red> for the backend,

            <red>ReactJS + Typescript</red> for the Frontend, and <red>Chakra UI</red> for the styling.

            The website features the basic CRUD operations and Record filtering with SQL queries.

            The website is <red>NOT</red> <purple>responsive</purple> as I noticed other real world CRMs are only built for desktop and aren't responsive too.
            
            The site is hosted with render's free hosting service, so upon opening the site, there is about a 1 minutes delay before the server can open.

          </p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://contractorcrm.onrender.com/" target="blank_">Live app</a></button>

          <button className="project-btn github-repo-btn"><a href="https://github.com/RoycejChan/ContracterCRM" target="blank_">Learn more</a></button>
        </div>
      </div>
  </div>
  
</>
    )

}