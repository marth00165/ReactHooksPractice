import React, {useState, useEffect} from 'react';
import Effect from './Effect.js'
import Form from './Form.js'
import "./App.css";
import {useFetch} from "./useFetch.js"

const URL = `http://numbersapi.com/`



const App = () => {

  //you can pass any type of datastructure into useState
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  )

  //You can also use multiple Use States incase you want to handle all the objects at once

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")


  /*
    The advantage over formik or custom handle submits is that you can use the one hook
    and handle all the forms at once

    Basically makes sharing logic easier
  */

  const [showEffect, setEffect] = useState(false); // this is using state to render the component that uses effect to console log "render" or "unmount"

  /*
    You Can Also add event listeners to useEffect
  */

  useEffect(() => {
    const onkeypress = e => {
      if (e.code === "ArrowUp"){
       setCount(c => c + 1)
      }
      else if (e.code === "ArrowDown") {
        setCount(c => c - 1)
      }
    }
    window.addEventListener("keydown", onkeypress)

    return () => {
      window.removeEventListener("keydown", onkeypress)

    };
  }, []);

  // You Can also have multiple useEffect functions


  useEffect(() => {

    localStorage.setItem("count", JSON.stringify(count))

  }, [count])

  // you can use Effect to handle fetch requests and APIs with a custom hook
  const {data, loading} = useFetch(`${URL}/${count}/trivia`)

  return (
    <div className="App">
      <header className="App-header">
      <div className="useFetch">
        <h1>Use Fetch</h1>
          <div>
            {loading? 'loading...' : data}
          </div>
      </div>

      <div className= "useEffect">
        <h1>Use Effect </h1>
        <button onClick= {() => setEffect(!showEffect)}>Show/Unshow Effect </button>

          {showEffect && <Effect/>}

          <br/>
          <br/>
      </div>

      <div className= "useState">
        <h1>Use State</h1>
          <div>
              Count1: {count}
            <div>
              <button onClick={() => setCount(c => c + 1)} > + </button>
              <button onClick={() => setCount(c => c - 1)}> - </button>
            </div>
          </div>

          {showEffect && <Form/> }
        </div>
      </header>
    </div>
  );
}

export default App;
