// useContext() usage = React hook that allows you to share
//                      values between multiple levels of
//                      components without passing props
//                      through each level

// PROVIDER COMPONENT
// 1. import import { createContext } from "react";
// 2. export export const MyContext = createContext();
// 3. <UserContext.Provider value={value}>
//      <Child />
//    </UserContext.Provider>

// CONSUMER COMPONENTS
// 1. import import React, {useContext} from "react";
//    import import { MyContext } from "./MyComponent";
// 2. const value = useContext(UserContext);


import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Nzro");
    const [number, setNumber] = useState(3);

    return (
        <>

            <div className="box">
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user + ` ` +number}>
                    <ComponentB />
                </UserContext.Provider>

            </div>
        </>
    )
    }

export default ComponentA
