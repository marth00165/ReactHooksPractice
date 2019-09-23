import React, { useEffect} from 'react';

const Effect = () => {

  // useEffect renders the functions based on the conditions given in the dependency array
      useEffect(() => {
          console.log("render");

          return () => {   //this is called a clean up function basically componentDidUnMount
            console.log("unmount");
          };
        }, []);  // this array determines when the useEffect function should be called


    return(
      <div>
      This is the Effect
      </div>
    )
}

export default Effect
