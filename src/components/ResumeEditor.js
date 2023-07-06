import React, { useState } from "react";

const ResumeEditor = ({ placeholder, expData, skillData, eduData }) => {
    const [exp, setExp] = useState({
        company: "",
        role: "",
        year: "",
    });
    const [skill, setSkill] = useState("");
    const [edu, setEdu] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setExp({ ...exp, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        expData(exp);
    };

    const handleSkill = (e) => {
        setSkill(e.target.value);
    };

    const addSkill = () => {
        skillData(skill);
    };

    const handleEdu = (e) => {
        setEdu(e.target.value);
    };

    const addEdu = () => {
        eduData(edu);
    };

    return (
        <>
            <form action="">
                <div>
                    <input
                        type="text"
                        placeholder="Company"
                        onChange={handleChange}
                        name="company"
                        value={exp.company}
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        onChange={handleChange}
                        name="role"
                        value={exp.role}
                    />
                    <input
                        type="text"
                        placeholder="Year"
                        onChange={handleChange}
                        name="year"
                        value={exp.year}
                    />
                    <button onClick={handleClick}>Add</button>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Skills"
                        onChange={handleSkill}
                        value={skill}
                    />
                    <button type="button" onClick={addSkill}>
                        Add Skill
                    </button>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Education"
                        onChange={handleEdu}
                        value={edu}
                    />
                    <button type="button" onClick={addEdu}>
                        Add Education
                    </button>
                </div>
            </form>
        </>
    );
};

export default ResumeEditor;
