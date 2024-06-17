import { useState, useEffect, useRef } from "react";

// useState() = Re-renders the component when the state value Changes

// useRef() = "use Reference" doesnt not cause re-renders when its value changes.
//            1. accessing/interacting with elements
//            2. handling focus, animations, and transitions
//            3. managing timers and intervals

function UseRef() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";

        // it remembers the data you pass previously
        // good for ui and stuff
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <>
        <div>

            <button onClick={handleClick1}>
                    Click me 1!
            </button>
            <input ref={inputRef1}/>

            <br></br>

            <button onClick={handleClick2}>
                    Click me 2!
            </button>
            <input ref={inputRef2}/>

            <br></br>

            <button onClick={handleClick3}>
                    Click me 3!
            </button>
            <input ref={inputRef3}/>

        </div>
        </>
    )
    }

export default UseRef
