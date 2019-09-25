import React, {useState, useEffect} from 'react';
import Effect from './Effect.js'
import Form from './Form.js'
import Refuse from './Refuse.js'
import "./App.css";
import {useFetch} from "./useFetch.js"

const URL = `http://numbersapi.com/`



const componentArr = [<Form/>, <Refuse/>]
const buttonArr = ["State", "Ref"]





const App = () => {

  //you can pass any type of datastructure into useState
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  )

  // multiple states
  const [arrCount, setarrCount] = useState(() =>
    JSON.parse(localStorage.getItem("arrCount"))
  )



  const buttonChanger = () => {
    const highlightedButton = document.getElementsByClassName(buttonArr[arrCount])
    highlightedButton[0].style.background = "#95F2D9";
  }

  //You can also use multiple Use States incase you want to handle all the objects at once

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")


  /*
    The advantage over formik or custom handle submits is that you can use the one hook
    and handle all the forms at once

    Basically makes sharing logic easier
  */

  // const [showEffect, setEffect] = useState(false); // this is using state to render the component that uses effect to console log "render" or "unmount"

  /*
    You Can Also add event listeners to useEffect
  */

  useEffect(() => {
    const onkeypress = e => {
      if (e.code === "ArrowUp" && componentArr[arrCount-1]){
        setarrCount(c => c - 1)
      }
      else if (e.code === "ArrowUp" && !componentArr[arrCount-1]) {
        setarrCount(c => c = 1)
      }
      else if (e.code === "ArrowDown" && componentArr[arrCount+1]) {
        setarrCount(c => c + 1)
      }
      else if (e.code === "ArrowDown" && !componentArr[arrCount+1]) {
        setarrCount(c => c = 0)
      }
    }
    window.addEventListener("keydown", onkeypress)

    return () => {
      window.removeEventListener("keydown", onkeypress)

    };
  }, [arrCount]);

  // You Can also have multiple useEffect functions


  useEffect(() => {

    localStorage.setItem("count", JSON.stringify(count))
    localStorage.setItem("arrCount", JSON.stringify(arrCount))
    buttonChanger()
    const otherButtons = buttonArr.filter(button => {
      if (button !== buttonArr[arrCount]) {
        return button
      }
    })
    otherButtons.map(button => document.getElementsByClassName(button)[0].style = null)

  }, [count, arrCount, componentArr[arrCount]])

  // you can use Effect to handle fetch requests and APIs with a custom hook
  const {data, loading} = useFetch(`${URL}/${count}/trivia`)

  return (
    <div className="App">
      <header className="App-header">
      <div className="useFetch">
      <div>
          Count: {count}
        <div>
        Change what the api fetches by changing the numbers
          <button onClick={() => setCount(c => c + 1)} > + </button>
          <button onClick={() => setCount(c => c - 1)}> - </button>
        </div>
      </div>
        <h1>Use Fetch</h1>
          <div>
            {loading? 'loading...' : data}
          </div>
      </div>


      <div className= "useEffect">
        <h1>Use Effect </h1>
        <Effect/>
          <br/>
          <br/>
        <ul className= "list">
          <li><button style={{textColor:"white"}} className="State" onClick={() => setarrCount(c => c = 0)}>useState</button></li>
          <li><button style={{textColor:"white"}} className="Ref" onClick={() => setarrCount(c => c = 1)}>useRef</button></li>
        </ul>
      </div>

      <div className= "useState">
          {/*!showEffect && <Refuse/>*/}
           {/*showEffect && <Form/>*/ }
        {componentArr[arrCount]}
        </div>
      </header>
    </div>
  );
}

export default App;
