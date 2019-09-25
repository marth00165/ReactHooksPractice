import React from 'react';
import {useForm} from "./useForm.js"

const Refuse = () => {

  //This is how You use the custom Hook that you make

  const [values, handleChange] = useForm({lastName: '', firstName: ''})

  //submit forms like this
    const handleSubmit = (e) => {

      e.preventDefault();
      console.log("First Name: ", values.firstName)
      console.log("Last Name: ", values.lastName)
    }





    return(
    <div>
      <h1>Use Ref</h1>
      <div className="refuse">
        <form onSubmit={() => handleSubmit()}>
            <label> First Name: </label>
            <br/>
           <input type="text" value={values.firstName} onChange={handleChange}  name="firstName"/>
          <br/>
            <label> Last Name: </label>
            <br/>
           <input type="text" value={values.lastName} onChange={handleChange}  name="lastName"/>
          <br/>
          <button className ="refuseButton" type = "submit" onClick={handleSubmit} > Submit </button>
        </form>
      </div>
    </div>
    )
}

export default Refuse
