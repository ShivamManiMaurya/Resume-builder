import React, { useState } from "react";
import FunctionSendAsProps from "./FunctionSendAsProps";

const OnFunctions = () => {
    const [mouseOver, setMouseOver] = useState({
        width: "100px",
        height: "100px",
    });
    const [focus, setFocus] = useState({});

    const handleMouseOver = () => {
        setMouseOver({ width: "150px", height: "150px" });
    };

    const handleMouseOut = () => {
        setMouseOver({ width: "100px", height: "100px" });
    };

    const handleDoubleClick = () => {
        alert("Doubled Click");
        console.log("double click");
    };

    const handleClick = () => {
        console.log("clicked");
    };

    const handleFocus = () => {
        console.log("focused");
        setFocus({ backgroundColor: "red" });
    };

    const handleBlur = () => {
        console.log("blured");
        setFocus({});
    };

    const handleCopy = () => {
        alert("copied");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log("Enter is Pressed");
        }
    };

    const msg =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nostrum.";

    const handleSend = () => {};

    const handleClose = () => {
        window.close();
    };

    return (
        <div
            style={{
                width: "800px",
                height: "800px",
                backgroundColor: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingBottom: "2rem",
            }}
        >
            <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"
                alt=""
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onDoubleClick={handleDoubleClick}
                onClick={handleClick}
                style={mouseOver}
            />
            <div
                style={{
                    marginTop: "2rem",
                }}
            >
                <div>
                    <form action="">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={focus}
                            onCut={() => alert("Cut")}
                            onPaste={() => alert("Pasted text")}
                        ></textarea>
                        <input
                            type="text"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            style={focus}
                        />
                    </form>
                </div>
                <p
                    style={{ backgroundColor: "yellow", padding: "2rem" }}
                    onCopy={handleCopy}
                    onCut={() => alert("Cut")}
                    onPaste={() => alert("Pasted")}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate sequi consequuntur fugiat corrupti obcaecati! Sit
                    ullam facere sequi culpa molestiae eius tenetur tempore,
                    quod unde numquam quia pariatur explicabo corrupti? Dicta,
                    soluta voluptatum! Tempora impedit sapiente exercitationem
                    excepturi! Rem qui repudiandae temporibus, animi neque quo
                    sapiente reiciendis tenetur dolore in! Nostrum asperiores
                    distinctio, quas sed minus quos ullam consectetur inventore!
                    Hic, numquam totam corrupti unde sit aperiam explicabo
                    consequatur temporibus deserunt, eligendi enim minima quos
                    quidem. Libero commodi est perferendis, doloribus quas autem
                    molestias, temporibus iure laboriosam quod labore
                    reiciendis? Molestiae dolor, voluptate dignissimos assumenda
                    soluta blanditiis atque rerum nam impedit cupiditate earum
                    saepe consequatur unde repellendus labore veritatis? Dolores
                    aut quisquam repellat est error vitae ducimus amet, nulla
                    et.
                </p>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="dummy">Dummy input</label>
                    <input type="text" id="dummy" onKeyDown={handleKeyPress} />
                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>

            <FunctionSendAsProps msg={msg} onSend={(msg) => msg} />
            <button onClick={handleClose}>Close Tab</button>
        </div>
    );
};

export default OnFunctions;
