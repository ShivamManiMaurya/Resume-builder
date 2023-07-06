import React, { useState } from "react";

const AddPlayer = ({ getPlayer }) => {
    const [player, setPlayer] = useState({ name: "" });

    const handleChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        getPlayer(player);
    };

    return (
        <>
            <form action="">
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={player.name}
                />
                <button onClick={handleSubmit}>Add Player</button>
            </form>
        </>
    );
};

export default AddPlayer;
