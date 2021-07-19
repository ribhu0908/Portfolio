import React from "react";
import "./Skills.css";

function SkillCard({skillName,skillUrl}){

    return(
        <div className="skill">
            <img className="skill-image" src={skillUrl} alt="skill" />
            <p>{skillName}</p>
        </div>
    )
}

export default SkillCard;