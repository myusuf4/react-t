import React from "react";

class Select extends React.Component{
  

  
  render(){
    
   const onSelect=(e)=>{
    console.log(e.target.value);
   }
    return(
      <div>
        <select onChange={onSelect}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    ) 
  }
}
export default Select