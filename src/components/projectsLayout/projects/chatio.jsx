import React from "react";
import chatio from "../../../assets/projectScreenshots/chatio.png"



export default function Chatio() {
    return (
        <>

            {/* MERN TASK MANAGER PROJECT */}

  
  <div className="project">
      <div className="task-manager-img project-img">
          <a href="https://mern-todotask-app.onrender.com/"  target="blank_"><img src={chatio} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>Chat IO Chat App</h1>
          <p>

                Chat App I Coded with <purple>SocketIO</purple> and React. 
                I didn't realize until being done with 95% of the code that Socket IO allows 'relations', if I had implemented it, user Messages could be tied to their own IDs, but I worked around it.
                Any form of Feedback is much appreciated.
                Again, server that app is hosted on is free, so it's out of my control and used for showcasing purposes.


          </p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://roycechatappio.onrender.com/" target="blank_">Live app</a></button>

          <button className="project-btn github-repo-btn"><a href="https://github.com/RoycejChan/ChatApp" target="blank_">Learn more</a></button>
        </div>
      </div>
  </div>
  
</>
    )

}