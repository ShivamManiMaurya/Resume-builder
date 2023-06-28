import React, { useState } from "react";

const FunctionSendAsProps = ({ onSend, msg }) => {
    const [masg, setMsg] = useState("");

    const handleClick = () => {
        const val = onSend(msg);
        setMsg(val);
    };

    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                maiores, esse quos laboriosam rerum recusandae sint
                necessitatibus deserunt ex iste!
            </p>
            <button onClick={handleClick}>Give a msg</button>
            <p>{masg}</p>
        </div>
    );
};

export default FunctionSendAsProps;
