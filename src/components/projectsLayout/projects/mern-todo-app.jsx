import React from "react";
import taskManagerSS from "../../../assets/projectScreenshots/merntaskmanagerss.png"
import html from "../../../assets/CodeLangLogos/html.png"
import react from "../../../assets/CodeLangLogos/reactlogo.png"
import node from "../../../assets/CodeLangLogos/nodejs.png"
import mongodb from "../../../assets/CodeLangLogos/mongodb.png"
import js from "../../../assets/CodeLangLogos/js.png"
import express from "../../../assets/CodeLangLogos/express.png"
import css from "../../../assets/CodeLangLogos/css.png"



export default function MernToDoApp() {
    return (
        <>

            {/* MERN TASK MANAGER PROJECT */}

  
  <div className="project">
      <div className="task-manager-img project-img">
          <a href="https://mern-todotask-app.onrender.com/"  target="blank_"><img src={taskManagerSS} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>MERN STACK TASK MANAGER</h1>
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
                 <img src={react} alt="" />
              </div>
              <div>
                 <img src={node} alt="" />
              </div>
              <div>
                 <img src={express} alt="" />
              </div>
              <div>
                 <img src={mongodb} alt="" />
              </div>
          </div>
          <p>
            I made this <purple>MERN stack</purple> Task Manager App using <red>MongoDB</red> as the database, <red>Node/ExpressJS</red> for the backend,

            and <red>ReactJS</red> for the Frontend. This projects allowed me to gain experience with <purple>Backend Developement</purple>
            
            and <purple>CRUD operations</purple>

            The website is fully responsive 
            
            but since the server runs on a free server, it has little ram, meaning too many CRUD operations <red>will cause the server to crash</red>.



          </p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://mern-todotask-app.onrender.com/" target="blank_">Live app</a></button>

          <button className="project-btn github-repo-btn"><a href="https://github.com/rroyceee/todo-MERN-app-Frontend/tree/master" target="blank_">Learn more</a></button>
        </div>
      </div>
  </div>
  
</>
    )

}