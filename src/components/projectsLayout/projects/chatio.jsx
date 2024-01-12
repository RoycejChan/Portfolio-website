import React from "react";
import chatio from "../../../assets/projectScreenshots/chatio.png"
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
import socketIO from "../../../assets/CodeLangLogos/socketIO.png"



export default function Chatio() {
    return (
        <>

            {/* MERN TASK MANAGER PROJECT */}

  
  <div className="project">
      <div className="task-manager-img project-img">
          <a href="https://roycechatappio.onrender.com/"  target="blank_"><img src={chatio} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>Chat IO Chat App</h1>
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