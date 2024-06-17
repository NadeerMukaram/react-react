import React, {useState, useEffect} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import Window from './Window'
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import UseRef from "./UseRef";
import StopWatch from "./StopWatch"

function App() {
  const [count, setCount] = useState(0)

  const [firstNumber, setfirstNumber] = useState();
  const [secondNumber, setsecondNumber] = useState();
  const [totalNumber, setTotalNumber] = useState();

  

  function firstnum(event){
    setfirstNumber(event.target.value);
  }

  function secondnum(event){
    setsecondNumber(event.target.value);
  }


  useEffect(() => {
    totalnum()
  }, [firstNumber, secondNumber])


  function totalnum(){
    setTotalNumber(parseFloat(firstNumber) + parseFloat(secondNumber));
  }

  return (
    <>
      <div>
      <p>-------------------------------------</p>
      <h1>useEffect</h1>
      <p>-------------------------------------</p>
      <DigitalClock/>
      </div>
      <div className="card">
        <br></br>

        <input value={firstNumber} onChange={firstnum} type="number"/>
        <b>+</b>
        <input value={secondNumber} onChange={secondnum} type="number"/>
        <p>Total: {totalNumber}</p>
        <b></b>

      </div>
      <MyComponent/>
      <Window/>

      <div style={{marginTop:100}}></div>
      
      <p>-------------------------------------</p>
      <h1>useContext</h1>
      <p>-------------------------------------</p>
      <ComponentA/>

      <div style={{marginTop:100}}></div>

      <p>-------------------------------------</p>
      <h1>useRef</h1>
      <p>-------------------------------------</p>
      <UseRef/>
      <br></br>
      <br></br>
      <br></br>
      <StopWatch />
    </>
  )
}

export default App
