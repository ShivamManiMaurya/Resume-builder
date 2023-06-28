import React from "react";

const EventBubblingConcep = () => {
    const grandParentClick = (e) => {
        // e.stopPropagation();
        console.log("Grandparant");
    };

    const parentClick = (e) => {
        // e.stopPropagation();
        console.log("Parent");
    };

    const childClick = (e) => {
        // e.stopPropagation();
        console.log("child");
    };

    return (
        <div
            style={{
                backgroundColor: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingBottom: "2rem",
            }}
        >
            <div onClick={grandParentClick}>
                <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                />
                <h4>Lorem, ipsum dolor</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore obcaecati, et repellat adipisci sunt soluta quia non
                    dolorum aspernatur accusantium!
                </p>
                <div onClickCapture={parentClick}>
                    <button onClick={childClick}>Play</button>
                </div>
            </div>
        </div>
    );
};

export default EventBubblingConcep;
