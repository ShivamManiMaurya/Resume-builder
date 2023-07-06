import React, { useState } from "react";
import AddPlayer from "./AddPlayer";
import List from "./List";

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
    const [seachText, setSearchText] = useState("");
    const [updatedVal, setUpdatedVal] = useState(defaultVal);
    const [disable, setDisable] = useState(false);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (seachText === "") {
            setPlayers(updatedVal);
        } else {
            const val = players.filter((player) => {
                return player.name
                    .toLowerCase()
                    .includes(seachText.toLowerCase());
            });
            setPlayers(val);
        }
    };

    const handleSearchByAlphabet = () => {
        if (seachText === "") {
            setPlayers(updatedVal);
            setDisable(false);
        } else {
            const val = players.filter((player) => {
                let pval = "";

                for (let i = 0; i < seachText.length; i++) {
                    if (
                        player.name.toLowerCase()[i] !==
                        seachText.toLowerCase()[i]
                    ) {
                        return "";
                    } else if (i === seachText.length - 1) {
                        pval = player;
                    }
                }

                setDisable(true);

                return pval;
            });
            setPlayers(val);
        }
    };

    const handlePlayers = (player) => {
        setPlayers([...players, player]);
        setUpdatedVal([...updatedVal, player]);
    };

    return (
        <div>
            <AddPlayer getPlayer={handlePlayers} />
            <form action="">
                <input
                    type="text"
                    value={seachText}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearch} disabled={disable}>
                    Search Player
                </button>
                <button type="button" onClick={handleSearchByAlphabet}>
                    Search from start
                </button>
                <p>
                    Empty the Searchbox and click any of the button to get the
                    data back
                </p>
            </form>
            <List players={players} />
        </div>
    );
};

export default FilteredList;
