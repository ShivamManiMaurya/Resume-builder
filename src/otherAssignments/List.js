import React from "react";

const List = ({ players }) => {
    return (
        <>
            <ul>
                {players?.map((player, index) => {
                    return <li key={index}>{player.name}</li>;
                })}
            </ul>
        </>
    );
};

export default List;
