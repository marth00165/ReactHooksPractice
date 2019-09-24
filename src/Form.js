import React from 'react';
import {useForm} from "./useForm.js"

const Form = () => {

  //This is how You use the custom Hook that you make

  const [values, handleChange] = useForm({email: '', password: '', firstName: ''})

  //submit forms like this
    const handleSubmit = (e) => {

      e.preventDefault();
      console.log("username: ", values.email)
      console.log("password: ", values.password)
    }





    return(
      <div className="jawn">
        <form onSubmit={() => handleSubmit()}>
            <label> Email: </label>
            <br/>
           <input type="text" value={values.email} onChange={handleChange}  name="email"/>
          <br/>
            <label> First Name: </label>
            <br/>
           <input type="text" value={values.firstName} onChange={handleChange}  name="firstName"/>
          <br/>
          <label>Password: </label>
          <br/>
           <input type="password" value={values.password} onChange={handleChange} name="password"/>
          <br/>
          <button type = "submit" onClick={handleSubmit} > Submit </button>
        </form>
      </div>
    )
}

export default Form
