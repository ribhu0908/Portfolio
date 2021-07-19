import React from "react";
import "./Projects.css";

function ProjectCard({ projectName, projectDescription, imageUrl,sourceCode, projectUrl}){

    return(
        <div className="project-card">
            <div class="image-container">
                <a href={projectUrl} target="_blank" className="project-external-link">
                    <img src={imageUrl} alt="projectImage" className="project-image"></img>
                </a>
            </div>

            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a href={sourceCode} target="_blank" className="source-code-link">See Source code</a>
            </div>
        </div>
    )
}

export default ProjectCard;