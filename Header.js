import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Fix import

const Header = () => {
    const [color, setcolor] = useState("black");
    const white = () => {
        setcolor((color === "black") ? "white" : "black");
    }

    return (
        <div style={{ backgroundColor: color, height: "749px" }}>
            <Button onClick={white} className='m-5'>Click Me</Button>
        </div>
    )
}
export default Header;
