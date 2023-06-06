import React from "react";
import UpdatedWith from "./updatedWith";

const Hover = ({count,setCount})=>{
    return(
        <div>
            <h1>HOVER </h1>
            <button onMouseOver={setCount}>HOVERED {count}</button>
        </div>
    )
}
export default UpdatedWith(Hover)