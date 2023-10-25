import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Fix import

const Btn = () => {
    const [colour, setcolour] = useState("black");
    const change = () => {
        setcolour((colour === "black") ? "white" : "black");
    }

    return (
        <div style={{ backgroundColor: colour, height: "750px" }}>
            <Button onClick={change} className='bg-danger m-5'>Click Here</Button>
        </div>
    )
}

export default Btn;
