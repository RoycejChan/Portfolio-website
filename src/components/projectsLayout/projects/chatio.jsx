import React from "react";
import chatio from "../../../assets/projectScreenshots/chatio.png"
import html from "../../../assets/CodeLangLogos/html.png"
import react from "../../../assets/CodeLangLogos/reactlogo.png"
import js from "../../../assets/CodeLangLogos/js.png"
import css from "../../../assets/CodeLangLogos/css.png"
import socketIO from "../../../assets/CodeLangLogos/socketio.png"



export default function Chatio() {
    return (
        <>

            {/* MERN TASK MANAGER PROJECT */}

  
  <div className="project">
      <div className="task-manager-img project-img imghidden">
          <a href="https://roycechatappio.onrender.com/"  target="blank_"><img src={chatio} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>Chat IO Chat App</h1>
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
                 <img src={react} alt="" />
              </div>
              <div className="hidden stackLogo">
                 <img src={socketIO} alt="" />
              </div>
              </div>
          <p>

                Chat App I Coded with <purple>SocketIO</purple> and React. 
                I didn't realize until being done with 95% of the code that Socket IO allows 'relations', if I had implemented it, user Messages could be tied to their own IDs, but I worked around it.
                I was learning firebase during the time of code this, but I prefered to choose socketio as my main tech because I wanted to learn firebase with another project I had planned.
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