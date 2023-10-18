import React from "react";
import quicklySS from "../../../assets/projectScreenshots/quicklyss.jpg"

export default function QuicklyWebsite() {
    return (
        <>

            {/* QUICKLY PROJECT */}

  
  <div className="project">
      <div className="project-img">
          <a href="https://stocktonquickly.netlify.app/" target="blank_"><img src={quicklySS} alt="" /></a>
      </div>
      <div className="project-details">
          <h1>Quickly Website</h1>
          <p>I made this website for the restuarant called "Quickly" at their Stockton, CA store.
      It is responsive and mobile friendly. This website was built with <red>React</red>
      . Each page is its own component, and navigates through each one with Routes. I made a <red>JSON file</red> to store the menu's 
      data and passed it through the checkout in a useState. I used the AOS animations library for the animations
      and unfortunately, there is no backend. I have learned alot from this project and realized better practices and method I could have used, and that will show in my future projects.
  </p>
        <div className="project-btns">
          <button className="project-btn"><a href="https://stocktonquickly.netlify.app/" target="blank_">Website</a></button>
          <button className="project-btn github-repo-btn"><a href="https://github.com/rroyceee/website-for-quickly-restaurant/tree/master" target="blank_">Github Repo</a></button>
        </div>
      </div>
  </div>
  
    </>
    )

}