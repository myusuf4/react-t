import React from "react";


class Input extends React.Component{
  constructor(prop){
    super(prop)
    this.state={
      name:"Muhammad",
      surname:"Nurmirzayev",
    }

  }
  render(){
    const onChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})

    }

    // const onNameChange=(e)=>{
    //   this.setState({name:e.target.value})
    // }
    // const onSurNameChange=(e)=>{
    //   this.setState({surname:e.target.value})
    // }
    return(
      <div>
        <div style={{display:"flex", gap:"50px", alignItems:"center"}}>
          <h1>Name : {this.state.name}</h1>
          <input type="text" placeholder="Name" onChange={onChange} name="name"/>
        </div>  
        <div style={{display:"flex", gap:"50px",alignItems:"center"}}>
          <h1>SurName : {this.state.surname}</h1>
          <input type="text" placeholder="SurName" onChange={onChange} name="surname"/>
        </div>  
        
      </div>
    ) 
  }
}
export default Input