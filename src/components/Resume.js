import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import { resumeData as data } from "../data/data";
import ResumeEditor from "./ResumeEditor";

const Resume = () => {
    const [resumeData, setResumeData] = useState(data);

    const handleClick = () => {
        console.log("clicked");
        window.print();
    };

    const handleExpData = (data) => {
        const value = {
            ...data,
            id: resumeData.experience.length + 1,
        };
        setResumeData({
            ...resumeData,
            experience: [...resumeData.experience, value],
        });
    };

    const handleSkillData = (data) => {
        setResumeData({
            ...resumeData,
            skills: [...resumeData.skills, data],
        });
    };

    const handleEduData = (data) => {
        setResumeData({
            ...resumeData,
            education: [...resumeData.education, data],
        });
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
            {resumeData.education?.map((edu, index) => {
                return <Education key={index} edu={edu} />;
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
