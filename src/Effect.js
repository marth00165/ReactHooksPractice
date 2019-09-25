import React, { useEffect} from 'react';

const Effect = () => {

  // useEffect renders the functions based on the conditions given in the dependency array
      useEffect(() => {
          console.log("render");

          return () => {   //this is called a clean up function basically componentDidUnMount
            console.log("blah");
          };
        }, []);  // this array determines when the useEffect function should be called


    return(
      <div>
      use The up down keys or these buttons to navigate between different components!
      </div>
    )
}

export default Effect
