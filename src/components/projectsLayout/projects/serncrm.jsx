import React from "react";
import contractorSS from "../../../assets/projectScreenshots/contractorcrm.png"
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
import aws from "../../../assets/CodeLangLogos/aws.png"



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
          <div className="projectLanguages">
              <div>
                 <img src={html} alt="" />
              </div>
              <div>
                 <img src={css} alt="" />
              </div>
              <div>
                 <img src={js} alt="" />
              </div>
              <div>
                 <img src={tailwindCSS} alt="" />
              </div>
              <div>
                 <img src={typescript} alt="" />
              </div>
              <div>
                 <img src={chakraUI} alt="" />
              </div>
              <div>
                 <img src={react} alt="" />
              </div>
              <div>
                 <img src={aws} alt="" />
              </div>
              <div>
                 <img src={node} alt="" />
              </div>
              <div>
                 <img src={express} alt="" />
              </div>
              <div>
                 <img src={mysql} alt="" />
              </div>
          </div>
          <p>
 
            A CRM Application that can be used to store and organize data for business or personal use.

            The website features the basic CRUD operations and Record filtering with SQL queries.

            The website is <red>NOT</red> <purple>responsive</purple> as I noticed other real world CRMs are only built for desktop and aren't responsive too.
            
            Unfortunately because of the little RAM the free server that hosts the website,<red> deleting two or more records crashes the server</red>, it doesn't have to do anything with the code itseld.


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