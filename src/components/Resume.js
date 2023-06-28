import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import { resumeData } from "../data/data";

const Resume = () => {
    // console.log(resumeData.skills[0]);
    return (
        <div>
            <h1>Resume</h1>
            {resumeData.skills.length > 0 && <h2>Skills</h2>}
            {resumeData.skills.map((skill, index) => {
                return <Skills key={index} skill={skill} />;
            })}
            {resumeData.experience.length > 0 && <h2>Experience</h2>}
            {resumeData.experience.map((details, index) => {
                return (
                    <Experience
                        key={details.id}
                        company={details.company}
                        role={details.role}
                        years={details.year}
                    />
                );
            })}
            {resumeData.education.length > 0 && <h2>Education</h2>}
            {resumeData.education.map((details, index) => {
                return <Education />;
            })}
        </div>
    );
};

export default Resume;
