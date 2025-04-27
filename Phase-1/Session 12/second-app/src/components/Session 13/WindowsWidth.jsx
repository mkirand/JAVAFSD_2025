import React, { useEffect, useState } from 'react';

function WindowsWidth() {
    const [width, setWitdth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWitdth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    return (
        <div>
            <h5>Windows Width is: {window.innerWidth}</h5>
        </div>
    );
}
export default WindowsWidth;