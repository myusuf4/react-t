import React from "react";

class Input extends React.Component{
  constructor(prop){
    super(prop)
    this.state={
      title:""
    }

  }
  render(){
    const onChange =(e)=>{
      const {target:{value}}=e
      this.setState({title:value})
    }
    return(
      <div>
        <h1>{this.state.title}</h1>
        <input type="text" onChange={onChange}/>
      </div>
    ) 
  }
}
export default Input