//this is a custom hook this is done so we can be more efficient with the way we use hooks
import {useState} from "react";

export  const useForm = (initialValues) => {

  //custom hook just handles the forms with the name attribute given to the input field
  //you can also use regular hooks mixed into custom hooks!

  const [values, setValues] = useState(initialValues)

  return [
    values, e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ]

}
