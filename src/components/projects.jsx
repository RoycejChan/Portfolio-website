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
                            </div>
{/* PROJECTS */}

                <div className="projects-container">
                        <ProjectsLayout/>
                </div>
            </div>
        </div>
    )
}