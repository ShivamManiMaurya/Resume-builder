import React, { useState } from "react";

const NationDropdown = () => {
    const initialVal = [
        { name: "India", value: "IN" },
        { name: "Pak", value: "PK" },
        { name: "Bangladesh", value: "BG" },
    ];

    const [nations, setNations] = useState(initialVal);
    const [nation, setNation] = useState({ name: "", value: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNation({ ...nation, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setNations([...nations, nation]);
    };

    return (
        <div>
            <div>
                <form action="">
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={nation.name}
                    />
                    <input
                        type="text"
                        name="value"
                        onChange={handleChange}
                        value={nation.value}
                    />
                    <button onClick={handleSubmit}>Add Nation</button>
                </form>
            </div>
            <div>
                <select
                    name=""
                    id=""
                    onChange={(e) => console.log(e.target.value)}
                >
                    {nations.map((nation, index) => {
                        return (
                            <option key={index} value={nation.value}>
                                {nation.name} and {nation.value}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default NationDropdown;
