import React,{useState} from "react"
const UpdatedWith =(Component)=>
{
   const  Updated=()=>{
        const [count, setCount] = useState(0) 
         const increament = ()=> {
        setCount((v)=>v+1)
    }
        return <Component count={count} setCount={increament}/> 
    }
    return Updated;
}
export default UpdatedWith