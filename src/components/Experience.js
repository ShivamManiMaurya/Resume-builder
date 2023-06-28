import React from "react";

const Experience = ({ company, role, years }) => {
    return (
        <div>
            <ul>
                <li>
                    <h4>Company: {company}</h4>
                    <h5>Role: {role}</h5>
                    <h5>Year: {years}</h5>
                </li>
            </ul>
        </div>
    );
};

export default Experience;
