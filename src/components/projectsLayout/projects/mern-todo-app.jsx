import React from "react";
import taskManagerSS from "../../../assets/projectScreenshots/merntaskmanagerss.png"



export default function MernToDoApp() {
    return (
        <>

            {/* MERN TASK MANAGER PROJECT */}

  
  <div className="project">
      <div className="project-img">
          <a href="https://mern-todotask-app.onrender.com/" target="blank_"><img src={taskManagerSS} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>MERN STACK TASK MANAGER</h1>
          <p>
            I made this <purple>MERN stack</purple> Task Manager App using <red>MongoDB</red> as the database, <red>Node/ExpressJS</red> for the backend,

            and <red>ReactJS</red> for the Frontend. The website is fully responsive 
            
            but the server it runs on has a small amount of 

            ram because it's on a free server. Adding/Deleting/Fetching too many requests too quickly Will crash the server.

            And <red>TO MAKE THE WEBSITE WORK</red> You must first open the server,or the backend, in order for the frontend to fetch data from it.


          </p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://mern-todotask-app.onrender.com/" target="blank_">Website</a></button>
          <button className="project-btn"><a href="https://mern-todotask-app-api.onrender.com/" target="blank_">Open Server</a></button>

          <button className="project-btn github-repo-btn"><a href="https://github.com/rroyceee/todo-MERN-app-Frontend/tree/master" target="blank_">Github Frontend Repo</a></button>
          <button className="project-btn github-repo-btn"><a href="https://github.com/rroyceee/todo-MERN-app-Backend/tree/main" target="blank_">Github Backend Repo</a></button>
        </div>
      </div>
  </div>
  
</>
    )

}