import React from "react";
import Count from "./counts";
import Hover from "./hover";

const Root = () =>{
    return(
        <div style={{display:"flex",alignItems:"center", gap:"100px" }}>
            <Count/>
            <hr />
            <Hover/>
        </div>
    )
}
export default Root;