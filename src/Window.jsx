// useEffect (function, [dependencies])

import React, {useState, useEffect} from "react";

function Window() {

    const [width, setWidth] = useState(window.innerHeight);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    )
}

export default Window
