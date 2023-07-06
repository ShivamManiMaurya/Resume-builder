import React, { useEffect, useState } from "react";

const FilteredList = () => {
    const defaultVal = [
        { name: "Rohit" },
        { name: "Jadeja" },
        { name: "Virat" },
        { name: "warner" },
        { name: "Maxwell" },
        { name: "Dhoni" },
    ];

    const [players, setPlayers] = useState(defaultVal);
    const [player, setPlayer] = useState({ name: "" });
    const [seachText, setSearchText] = useState("");
    const [updatedVal, setUpdatedVal] = useState([]);

    const handleChange = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPlayers([...players, player]);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        console.log(seachText);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("runs");
        if (seachText === "") {
            setPlayers(updatedVal);
        } else {
            const val = players.filter((player) => {
                return player.name
                    .toLowerCase()
                    .includes(seachText.toLowerCase());
            });
            setUpdatedVal(players);
            setPlayers(val);
        }
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={player.name}
                />
                <button onClick={handleSubmit}>Add Player</button>
            </form>
            <form action="">
                <input
                    type="text"
                    value={seachText}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearch}>Search Player</button>
            </form>
            <ul>
                {players?.map((player, index) => {
                    return <li key={index}>{player.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default FilteredList;
