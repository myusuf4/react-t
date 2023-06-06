import React from "react";
import { houses } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Home = ()=>{
    const navigate=useNavigate();
    return(
        <div>
            {
                houses.map(({name,pathname})=>{
                    return <div onClick={()=>navigate(pathname)}>{name}</div>
                })
            }
        </div>
    )
}
