import React from "react";
import lifeInvaderSS from "../../../assets/projectScreenshots/lifeInvader.png"



export default function LifeInvader() {
    return (
        <>

            {/* life Invader  PROJECT */}

  
  <div className="project">
      <div className="task-manager-img project-img">
          <a href="https://lifein-e0258.web.app/"  target="blank_"><img src={lifeInvaderSS} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>Life Invader Social Media App</h1>
          <p>
            I made this <purple>Full Stack CMS </purple>Social Media App using <red>Firestore</red> as the database, <red>Firebase</red> for the backend and user authentication,

            <red>ReactJS</red> for the Frontend, and <red>Material UI</red> for the styling.

            I used firebase to handle user authentication and firestore to store posts, users, and individual user profile data ex. user likes and posts.

            The website is also <purple>fully responsive</purple>.
            
            The site is hosted with Google's free hosting service, so the domain name looks ugly.

          </p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://lifein-e0258.web.app/" target="blank_">Live app</a></button>

          <button className="project-btn github-repo-btn"><a href="https://github.com/RoycejChan/LifeInvaderSocialMediaApp" target="blank_">Learn more</a></button>
        </div>
      </div>
  </div>
  
</>
    )

}