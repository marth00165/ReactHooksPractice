import React, {useState} from 'react';
import "./App.css";
import {useForm} from "./useForm.js"



const App = () => {

  //you can pass any type of datastructure into useState
  const [{count, count2}, setCount] = useState({count: 10, count2: 20});

  //You can also use multiple Use States incase you want to handle all the objects at once

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  //This is how You use the custom Hook that you make

  const [values, handleChange] = useForm({email: '', password: ''})

  /*
    The advantage over formik or custom handle submits is that you can use the one hook
    and handle all the forms at once

    Basically makes sharing logic easier
  */



  return (
    <div className="App">
      <header className="App-header">

        <div>
            Count1: {count}
          <div>
            <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count+1}))}> + </button>
            <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count-1}))}> - </button>
          </div>
        </div>
        <div>
          Count2: {count2}
          <div>
            <button onClick={() => setCount(currentState => ({ ...currentState, count2: currentState.count2+1}))}> + </button>
            <button onClick={() => setCount(currentState => ({ ...currentState, count2: currentState.count2-1}))}> - </button>
          </div>
        </div>

        <div>
          Email: <input value={values.email} onChange={handleChange}  name="email"/>
          <br/>
          Password: <input type="password" value={values.password} onChange={handleChange} name="password"/>
        </div>
      </header>
    </div>
  );
}

export default App;
