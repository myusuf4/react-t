import React from "react";
import student from "./mock";

class Students extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:student,
        }
    }
    render(){
       const onFilter=(e)=>{
        let res=student.filter((v)=>{return v.name.includes(e.target.value)})
        this.setState({data:res})
       }

        return(
           <div>
            <input type="text" name="" id="" placeholder="filterByName" onChange={onFilter}/>
            {
               this.state.data.map(({id,name,status})=>{
                 return   <h1>N : {id}  Name : {name}  Status : {status}</h1>
                })
            }
           </div>
        )
    }
}
export default Students