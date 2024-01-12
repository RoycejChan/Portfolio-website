import React from "react";
import ProjectsLayout from "./projectsLayout/projectsLayout";


export default function Projects() {
    return (
        <div className="project-background" id="projects-section">
            <div className="project-section container ">
                            <div className="project-header">
                                <h1>Projects</h1>
                                <div className="header-box-projects"></div>
                                <p>Here you can find a list of Projects and Work I've done.</p>
                                <p>P.S, These websites are hosted on free services so websites that work with APIs and/or have a backend will take around 1-2 minutes for the free service to open up and take effect on the site.</p>

                            </div>
{/* PROJECTS */}

                <div className="projects-container">
                        <ProjectsLayout/>
                </div>
            </div>
        </div>
    )
}