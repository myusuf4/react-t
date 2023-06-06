import React from "react";
import { Route,Routes } from "react-router-dom";
import { houses } from "../utils";


const Root=()=>{
    return(
        <Routes>
            {houses.map(({name,pathname,element,id})=>{
                return <Route path={pathname} element={element} key={id}/>
            })}
        </Routes>
    )
}
export default Root