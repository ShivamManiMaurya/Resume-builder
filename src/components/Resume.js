import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import { resumeData as data } from "../data/data";
import ResumeEditor from "./ResumeEditor";

const Resume = () => {
    // console.log(resumeData.skills[0]);
    const [resumeData, setResumeData] = useState(data);

    const handleClick = () => {
        console.log("clicked");
        window.print();
    };

    const handleExpData = (data) => {
        console.log(data);
        // resumeData.experience.push(data);
        console.log(resumeData.experience);
        setResumeData({
            ...resumeData.experience,
            [resumeData.experience]: data,
        });
        console.log(resumeData.experience.length);
    };

    const handleSkillData = (data) => {
        console.log(data);
    };

    const handleEduData = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Resume</h1>
            {resumeData.skills?.length > 0 && <h2>Skills</h2>}
            {resumeData.skills?.map((skill, index) => {
                return <Skills key={index} skill={skill} />;
            })}
            {resumeData.experience?.length > 0 && <h2>Experience</h2>}
            {resumeData.experience?.map((details, index) => {
                return (
                    <Experience
                        key={details.id}
                        company={details.company}
                        role={details.role}
                        years={details.year}
                    />
                );
            })}
            {resumeData.education?.length > 0 && <h2>Education</h2>}
            {resumeData.education?.map((details, index) => {
                return <Education />;
            })}
            <button onClick={handleClick}>Print</button>
            <ResumeEditor
                placeholder="Experience"
                expData={handleExpData}
                skillData={handleSkillData}
                eduData={handleEduData}
            />
        </div>
    );
};

export default Resume;
