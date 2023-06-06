import React from "react";
import UpdatedWith from "./updatedWith";

 const Count = ({count,setCount}) => {
    return(
        <div>
            <h1>Counter </h1>
            <button onClick={setCount}>Clicked  {count}</button>
        </div>
        
    )
} 

export default  UpdatedWith (Count)