import React from "react";
import taskManagerSS from "../../../assets/projectScreenshots/merntaskmanagerss.png"



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
          <p>
            I made this <purple>MERN stack</purple> Task Manager App using <red>MongoDB</red> as the database, <red>Node/ExpressJS</red> for the backend,

            and <red>ReactJS</red> for the Frontend. This projects allowed me to gain experience with <purple>Backend Developement</purple>
            
            and <purple>CRUD operations</purple>

            The website is fully responsive 
            
            but since the server runs on a free server, it has little ram, meaning too many CRUD operations will cause the server to crash.

            It also means the server takes about 1-2 minutes to respond back after the frontend is opened,then can it be refreshed.

            This doesnt have to do anything with the code itself, just the free hosting service I ues to showcase the work. 


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